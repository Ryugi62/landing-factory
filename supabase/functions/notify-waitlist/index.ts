import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')!
const NOTIFY_EMAIL = 'xorjf1027@naver.com'

const PRODUCT_URLS: Record<string, string> = {
  datemind: 'https://landing-factory-163.pages.dev/datemind',
  padsafe: 'https://landing-factory-163.pages.dev/padsafe',
  skinfit: 'https://landing-factory-163.pages.dev/skinfit',
}

serve(async (req) => {
  try {
    const payload = await req.json()
    const record = payload.record

    if (!record?.email || !record?.product) {
      return new Response('Missing fields', { status: 400 })
    }

    const { email, product } = record
    const productUrl = PRODUCT_URLS[product] ?? `https://landing-factory-163.pages.dev/${product}`

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'onboarding@resend.dev',
        to: NOTIFY_EMAIL,
        subject: `[${product}] 새 waitlist 등록 — ${email}`,
        html: `
          <h2>🎉 새 waitlist 등록</h2>
          <table style="border-collapse:collapse;font-family:sans-serif">
            <tr><td style="padding:6px 12px;color:#666">제품</td><td style="padding:6px 12px;font-weight:bold">${product}</td></tr>
            <tr><td style="padding:6px 12px;color:#666">이메일</td><td style="padding:6px 12px">${email}</td></tr>
            <tr><td style="padding:6px 12px;color:#666">랜딩페이지</td><td style="padding:6px 12px"><a href="${productUrl}">${productUrl}</a></td></tr>
          </table>
        `,
      }),
    })

    if (!res.ok) {
      const err = await res.text()
      console.error('Resend error:', err)
      return new Response('Email failed', { status: 500 })
    }

    return new Response(JSON.stringify({ ok: true }), {
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (e) {
    console.error(e)
    return new Response('Internal error', { status: 500 })
  }
})
