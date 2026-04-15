/**
 * Offer email content for the DealShield Starter Toolkit launch.
 *
 * Outcome-first copy: leads with "get paid faster / limit usage / avoid ghosting",
 * not "documents" or "templates".
 */

export type ToolkitOfferInput = {
  recipientEmail: string
  checkoutBaseUrl: string // Lemon Squeezy Buy URL without email prefill
}

export type ToolkitOfferContent = {
  subject: string
  html: string
}

export function buildCheckoutUrl(baseUrl: string, email: string): string {
  // Lemon Squeezy supports pre-filling checkout fields via query params:
  //   ?checkout[email]=<email>
  const separator = baseUrl.includes('?') ? '&' : '?'
  return `${baseUrl}${separator}checkout[email]=${encodeURIComponent(email)}`
}

export function getToolkitOfferEmail(input: ToolkitOfferInput): ToolkitOfferContent {
  const checkoutUrl = buildCheckoutUrl(input.checkoutBaseUrl, input.recipientEmail)

  const subject = `A small gift while we build DealShield`

  const html = `
<div style="font-family:-apple-system,Segoe UI,Roboto,sans-serif;max-width:560px;margin:0 auto;padding:32px 16px;color:#1e293b;font-size:15px;line-height:1.65">
  <p>Hey,</p>

  <p>I'm building <strong>DealShield</strong> for UGC creators — a tool to help you
    get paid faster, limit brand usage, and stop getting ghosted.</p>

  <p>While we build the full product, I made a starter toolkit you
    can use <em>right now</em> to do exactly those three things.</p>

  <p style="margin:20px 0 8px"><strong>It helps you:</strong></p>
  <ul style="padding-left:20px;margin:0 0 20px;color:#334155">
    <li style="margin-bottom:6px">✓ <strong>Get paid faster</strong> — contract + invoice + Net&nbsp;14 + late fees</li>
    <li style="margin-bottom:6px">✓ <strong>Limit usage</strong> — duration, channels, exclusivity written clearly</li>
    <li style="margin-bottom:6px">✓ <strong>Avoid ghosting</strong> — red-flag checklist + follow-up scripts</li>
  </ul>

  <p>Early supporter price is <strong>$19</strong> (future price $29).<br>
    DealShield launch → <strong>50% off for 3 months</strong> for anyone who gets
    the toolkit now.</p>

  <p>If it doesn't help on your next deal, reply and I'll refund you.
    No questions.</p>

  <p style="margin:28px 0">
    <a href="${checkoutUrl}"
       style="display:inline-block;background:#0f172a;color:#ffffff;padding:14px 32px;border-radius:999px;text-decoration:none;font-size:15px;font-weight:600">
      Get the toolkit — $19
    </a>
  </p>

  <p style="margin-top:32px">— Oaksoo<br>
    <span style="color:#94a3b8;font-size:13px">reply to this email anytime</span>
  </p>
</div>
`.trim()

  return { subject, html }
}
