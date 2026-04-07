import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import { getEmailContent } from '../_shared/email-content.ts'

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')!
const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
const NOTIFY_EMAIL = 'xorjf1027@naver.com'
const FROM_EMAIL = Deno.env.get('FROM_EMAIL') || 'onboarding@resend.dev'

const PRODUCT_URLS: Record<string, string> = {
  datemind: 'https://landing-factory-163.pages.dev/datemind',
  padsafe: 'https://landing-factory-163.pages.dev/padsafe',
  skinfit: 'https://landing-factory-163.pages.dev/skinfit',
}

async function sendEmail(to: string, subject: string, html: string): Promise<boolean> {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ from: FROM_EMAIL, to, subject, html }),
  })
  if (!res.ok) {
    console.error('Resend error:', await res.text())
    return false
  }
  return true
}

serve(async (req) => {
  try {
    const payload = await req.json()
    const record = payload.record

    if (!record?.email || !record?.product) {
      return new Response('Missing fields', { status: 400 })
    }

    const { email, product, id: waitlistId } = record
    const productUrl =
      PRODUCT_URLS[product] ?? `https://landing-factory-163.pages.dev/${product}`

    // 1. Admin notification (existing behavior)
    await sendEmail(
      NOTIFY_EMAIL,
      `[${product}] 새 waitlist 등록 — ${email}`,
      `
        <h2>🎉 새 waitlist 등록</h2>
        <table style="border-collapse:collapse;font-family:sans-serif">
          <tr><td style="padding:6px 12px;color:#666">제품</td><td style="padding:6px 12px;font-weight:bold">${product}</td></tr>
          <tr><td style="padding:6px 12px;color:#666">이메일</td><td style="padding:6px 12px">${email}</td></tr>
          <tr><td style="padding:6px 12px;color:#666">랜딩페이지</td><td style="padding:6px 12px"><a href="${productUrl}">${productUrl}</a></td></tr>
        </table>
      `,
    )

    // 2. Welcome email to user (Day 0)
    const welcomeContent = getEmailContent(product, 'welcome')
    const welcomeSent = await sendEmail(email, welcomeContent.subject, welcomeContent.html)

    // 3. Update tracking + enqueue follow-up emails
    if (waitlistId) {
      const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY)

      if (welcomeSent) {
        await supabase
          .from('waitlist')
          .update({ email_1_sent_at: new Date().toISOString() })
          .eq('id', waitlistId)
      }

      const now = Date.now()
      await supabase.from('email_queue').insert([
        {
          waitlist_id: waitlistId,
          email_type: 'value_prop',
          scheduled_at: new Date(now + 2 * 24 * 60 * 60 * 1000).toISOString(), // +2 days
        },
        {
          waitlist_id: waitlistId,
          email_type: 'early_access',
          scheduled_at: new Date(now + 5 * 24 * 60 * 60 * 1000).toISOString(), // +5 days
        },
      ])
    }

    return new Response(JSON.stringify({ ok: true }), {
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (e) {
    console.error(e)
    return new Response('Internal error', { status: 500 })
  }
})
