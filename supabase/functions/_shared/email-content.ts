/**
 * Product-specific email content for the 3-step waitlist sequence.
 *
 * Each product can override any email type. If not overridden, the generic
 * template is used with the product name substituted in.
 *
 * To add product-specific copy: add an entry to PRODUCT_OVERRIDES below.
 */

export type EmailContent = {
  subject: string
  html: string
}

export type EmailType = 'welcome' | 'value_prop' | 'early_access'

const BASE_URL = 'https://landing-factory-163.pages.dev'

function genericWelcome(product: string): EmailContent {
  const url = `${BASE_URL}/${product}`
  return {
    subject: `You're on the ${product} waitlist!`,
    html: `
      <div style="font-family:system-ui,sans-serif;max-width:520px;margin:0 auto;padding:32px 16px">
        <h2 style="font-size:22px;margin:0 0 12px">Welcome aboard! 🎉</h2>
        <p style="color:#555;line-height:1.6">
          You just joined the waitlist for <strong>${product}</strong>.
          We're building something that solves a real problem — and you'll be among the first to try it.
        </p>
        <p style="color:#555;line-height:1.6">
          In the meantime, check out what we're building:
        </p>
        <p style="margin:20px 0">
          <a href="${url}" style="display:inline-block;background:#111;color:#fff;padding:10px 24px;border-radius:20px;text-decoration:none;font-size:14px">
            Visit ${product}
          </a>
        </p>
        <p style="color:#999;font-size:13px">We'll email you when early access opens. Stay tuned.</p>
      </div>
    `,
  }
}

function genericValueProp(product: string): EmailContent {
  return {
    subject: `Here's what ${product} actually solves`,
    html: `
      <div style="font-family:system-ui,sans-serif;max-width:520px;margin:0 auto;padding:32px 16px">
        <h2 style="font-size:22px;margin:0 0 12px">Why we're building ${product}</h2>
        <p style="color:#555;line-height:1.6">
          We noticed a pattern: people keep running into the same frustrating problem,
          and existing solutions are either too expensive, too complex, or just don't work.
        </p>
        <p style="color:#555;line-height:1.6">
          <strong>${product}</strong> is our answer — simple, focused, and built to actually solve
          the thing that matters most.
        </p>
        <p style="color:#555;line-height:1.6">
          We'll share more details soon. If you have thoughts or pain points you'd like us to address,
          just reply to this email — we read every one.
        </p>
        <p style="color:#999;font-size:13px;margin-top:24px">One more email coming with early access details.</p>
      </div>
    `,
  }
}

function genericEarlyAccess(product: string): EmailContent {
  const url = `${BASE_URL}/${product}`
  return {
    subject: `Want early access to ${product}?`,
    html: `
      <div style="font-family:system-ui,sans-serif;max-width:520px;margin:0 auto;padding:32px 16px">
        <h2 style="font-size:22px;margin:0 0 12px">We're getting close 🚀</h2>
        <p style="color:#555;line-height:1.6">
          <strong>${product}</strong> is coming together. You're on the waitlist,
          which means you'll get first access when we open the doors.
        </p>
        <p style="color:#555;line-height:1.6">
          Want to move to the front of the line? Share the link below with someone
          who'd actually use this — referrals get priority access.
        </p>
        <p style="margin:20px 0">
          <a href="${url}?ref=email_share" style="display:inline-block;background:#111;color:#fff;padding:10px 24px;border-radius:20px;text-decoration:none;font-size:14px">
            Share ${product}
          </a>
        </p>
        <p style="color:#999;font-size:13px">Thanks for your patience. We'll make it worth the wait.</p>
      </div>
    `,
  }
}

// Product-specific overrides (optional — add entries as needed)
const PRODUCT_OVERRIDES: Record<string, Partial<Record<EmailType, EmailContent>>> = {
  // Example:
  // datemind: {
  //   welcome: {
  //     subject: "You're on the DateMind waitlist! 💘",
  //     html: '...'
  //   }
  // }
}

export function getEmailContent(product: string, emailType: EmailType): EmailContent {
  const override = PRODUCT_OVERRIDES[product]?.[emailType]
  if (override) return override

  switch (emailType) {
    case 'welcome':
      return genericWelcome(product)
    case 'value_prop':
      return genericValueProp(product)
    case 'early_access':
      return genericEarlyAccess(product)
  }
}
