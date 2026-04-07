import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import { getEmailContent } from '../_shared/email-content.ts'
import type { EmailType } from '../_shared/email-content.ts'

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')!
const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
const CRON_SECRET = Deno.env.get('CRON_SECRET')!
const FROM_EMAIL = Deno.env.get('FROM_EMAIL') || 'onboarding@resend.dev'

const EMAIL_TYPE_TO_COLUMN: Record<string, string> = {
  welcome: 'email_1_sent_at',
  value_prop: 'email_2_sent_at',
  early_access: 'email_3_sent_at',
}

serve(async (req) => {
  // Authenticate cron caller
  const auth = req.headers.get('Authorization')
  if (auth !== `Bearer ${CRON_SECRET}`) {
    return new Response('Unauthorized', { status: 401 })
  }

  const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY)

  // Fetch pending emails that are due
  const { data: pending, error: fetchErr } = await supabase
    .from('email_queue')
    .select('id, waitlist_id, email_type, waitlist!inner(email, product)')
    .is('sent_at', null)
    .is('error', null)
    .lte('scheduled_at', new Date().toISOString())
    .limit(50)

  if (fetchErr) {
    console.error('Fetch error:', fetchErr)
    return new Response(JSON.stringify({ error: fetchErr.message }), { status: 500 })
  }

  let sent = 0
  let errors = 0

  for (const item of pending ?? []) {
    const waitlist = Array.isArray(item.waitlist) ? item.waitlist[0] : item.waitlist
    if (!waitlist?.email || !waitlist?.product) {
      await supabase
        .from('email_queue')
        .update({ error: 'missing waitlist data' })
        .eq('id', item.id)
      errors++
      continue
    }

    const content = getEmailContent(waitlist.product, item.email_type as EmailType)

    try {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: FROM_EMAIL,
          to: waitlist.email,
          subject: content.subject,
          html: content.html,
        }),
      })

      if (res.ok) {
        const now = new Date().toISOString()
        await supabase
          .from('email_queue')
          .update({ sent_at: now })
          .eq('id', item.id)

        // Update tracking column on waitlist
        const col = EMAIL_TYPE_TO_COLUMN[item.email_type]
        if (col) {
          await supabase
            .from('waitlist')
            .update({ [col]: now })
            .eq('id', item.waitlist_id)
        }
        sent++
      } else {
        const errText = await res.text()
        await supabase
          .from('email_queue')
          .update({ error: errText })
          .eq('id', item.id)
        errors++
      }
    } catch (e) {
      await supabase
        .from('email_queue')
        .update({ error: String(e) })
        .eq('id', item.id)
      errors++
    }
  }

  return new Response(
    JSON.stringify({ processed: sent, errors, pending: (pending?.length ?? 0) }),
    { headers: { 'Content-Type': 'application/json' } },
  )
})
