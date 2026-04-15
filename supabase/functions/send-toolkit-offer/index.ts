/**
 * send-toolkit-offer — DealShield Starter Toolkit 오퍼 발송
 *
 * 안전 가드 (가장 중요):
 *   - Body 없음 OR dryRun=true+onlyEmail=null → PREVIEW_ONLY (메일 0건)
 *   - dryRun=true + onlyEmail="..."           → TEST_SEND (단일 테스트 이메일만, DB 미변경)
 *   - dryRun=false + confirmLive=false        → REJECT 400
 *   - dryRun=false + confirmLive=true         → LIVE_SEND (waitlist 타겟, maxBatch 기본 1)
 *
 * dryRun=true일 때는 절대 waitlist 실유저에게 메일이 가지 않는다.
 */

import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import { getToolkitOfferEmail } from '../_shared/toolkit-offer-content.ts'

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')!
const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
const TOOLKIT_SEND_TOKEN = Deno.env.get('TOOLKIT_SEND_TOKEN')!
const FROM_EMAIL = Deno.env.get('FROM_EMAIL') || 'Oaksoo <noreply@oaksoo.com>'
const REPLY_TO = 'hi@oaksoo.com'
const TOOLKIT_CHECKOUT_URL = Deno.env.get('TOOLKIT_CHECKOUT_URL') || ''

type RequestBody = {
  dryRun?: boolean
  confirmLive?: boolean
  onlyEmail?: string | null
  maxBatch?: number
  forceAll?: boolean
}

type Mode = 'PREVIEW_ONLY' | 'TEST_SEND' | 'LIVE_SEND'

serve(async (req) => {
  // 1) Auth
  const auth = req.headers.get('Authorization')
  if (auth !== `Bearer ${TOOLKIT_SEND_TOKEN}`) {
    return json({ error: 'Unauthorized' }, 401)
  }

  // 2) Parse body (빈 body OK)
  let body: RequestBody = {}
  try {
    const text = await req.text()
    if (text && text.trim().length > 0) {
      body = JSON.parse(text)
    }
  } catch (_e) {
    return json({ error: 'invalid JSON body' }, 400)
  }

  // 3) 기본값 (방어적)
  const dryRun = body.dryRun !== false // 기본 true
  const confirmLive = body.confirmLive === true
  const onlyEmail = body.onlyEmail ?? null
  const forceAll = body.forceAll === true
  const maxBatch = Number.isFinite(body.maxBatch) && (body.maxBatch as number) > 0
    ? Math.min(body.maxBatch as number, 50)
    : 1

  // 4) 모드 판정
  let mode: Mode
  if (!dryRun && !confirmLive) {
    return json(
      { error: 'confirmLive required for live send. Set {"dryRun":false,"confirmLive":true} to send to real waitlist users.' },
      400,
    )
  }
  if (dryRun && onlyEmail) {
    mode = 'TEST_SEND'
  } else if (dryRun) {
    mode = 'PREVIEW_ONLY'
  } else {
    mode = 'LIVE_SEND'
  }

  if (!TOOLKIT_CHECKOUT_URL) {
    return json({ error: 'TOOLKIT_CHECKOUT_URL secret is not set' }, 500)
  }

  const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY)

  // 5) 대상 조회 (모드별)
  //    PREVIEW_ONLY, LIVE_SEND: waitlist 쿼리
  //    TEST_SEND: onlyEmail만 발송 (waitlist 무시)
  let recipients: Array<{ id: string | null; email: string }> = []

  if (mode === 'TEST_SEND') {
    recipients = [{ id: null, email: onlyEmail! }]
  } else {
    // PREVIEW_ONLY는 전체 표시 (LIMIT 없음). LIVE_SEND는 maxBatch / forceAll 적용.
    const limit = mode === 'PREVIEW_ONLY' ? 50 : (forceAll ? 50 : maxBatch)
    const { data, error } = await supabase
      .from('waitlist')
      .select('id, email')
      .eq('product', 'dealshield')
      .is('toolkit_offer_sent_at', null)
      .not('email', 'is', null)
      .not('gclid', 'is', null)  // 테스트 이메일 (gclid 없는 것) 제외
      .order('created_at', { ascending: true })
      .limit(limit)

    if (error) {
      return json({ error: `waitlist query failed: ${error.message}` }, 500)
    }
    recipients = (data ?? []).map((r) => ({ id: r.id, email: r.email }))
  }

  // 6) PREVIEW_ONLY: 발송 0건, 미리보기 반환
  if (mode === 'PREVIEW_ONLY') {
    const sampleEmail = recipients[0]?.email ?? 'example@example.com'
    const preview = getToolkitOfferEmail({
      recipientEmail: sampleEmail,
      checkoutBaseUrl: TOOLKIT_CHECKOUT_URL,
    })
    return json({
      mode,
      recipientsFound: recipients.length,
      recipientsPreview: recipients.map((r) => r.email),
      subject: preview.subject,
      htmlSnippet: preview.html.slice(0, 400) + (preview.html.length > 400 ? '...' : ''),
      note: 'No emails sent. To send for real, use {"dryRun":false,"confirmLive":true,"maxBatch":1} (then increase).',
    })
  }

  // 7) TEST_SEND / LIVE_SEND: 각 대상에게 발송
  let processed = 0
  let errors = 0
  const results: Array<{ email: string; ok: boolean; status: number; messageId?: string; error?: string }> = []

  for (const r of recipients) {
    const content = getToolkitOfferEmail({
      recipientEmail: r.email,
      checkoutBaseUrl: TOOLKIT_CHECKOUT_URL,
    })

    try {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: FROM_EMAIL,
          to: r.email,
          reply_to: REPLY_TO,
          subject: content.subject,
          html: content.html,
          tags: [{ name: 'campaign', value: 'toolkit_launch_v1' }],
        }),
      })

      const payload = await res.json().catch(() => null)

      if (res.ok) {
        processed++
        results.push({ email: r.email, ok: true, status: res.status, messageId: payload?.id })

        // LIVE_SEND 에서만 DB 업데이트
        if (mode === 'LIVE_SEND' && r.id) {
          const { error: upErr } = await supabase
            .from('waitlist')
            .update({ toolkit_offer_sent_at: new Date().toISOString() })
            .eq('id', r.id)
          if (upErr) {
            // DB 업데이트 실패는 warning 급 — 이메일은 이미 갔음
            console.error(`[send-toolkit-offer] DB update failed for ${r.email}:`, upErr.message)
          }
        }
      } else {
        errors++
        results.push({
          email: r.email,
          ok: false,
          status: res.status,
          error: typeof payload === 'object' ? JSON.stringify(payload) : String(payload),
        })
      }
    } catch (e) {
      errors++
      results.push({ email: r.email, ok: false, status: 0, error: String(e) })
    }
  }

  return json({
    mode,
    processed,
    errors,
    maxBatch: forceAll ? 50 : maxBatch,
    forceAll,
    onlyEmail,
    results,
  })
})

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body, null, 2), {
    status,
    headers: { 'Content-Type': 'application/json' },
  })
}
