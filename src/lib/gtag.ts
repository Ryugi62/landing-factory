const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID

const WAITLIST_ACTION_SUFFIX = '_waitlist_signup'

const WAITLIST_CONVERSION_LABELS: Record<string, string | undefined> = {
  datemind: process.env.NEXT_PUBLIC_GADS_CL_DATEMIND_WAITLIST,
  slotfill: process.env.NEXT_PUBLIC_GADS_CL_SLOTFILL_WAITLIST,
  declog: process.env.NEXT_PUBLIC_GADS_CL_DECLOG_WAITLIST,
  flowkit: process.env.NEXT_PUBLIC_GADS_CL_FLOWKIT_WAITLIST,
  reportflow: process.env.NEXT_PUBLIC_GADS_CL_REPORTFLOW_WAITLIST,
  'repurpose-os': process.env.NEXT_PUBLIC_GADS_CL_REPURPOSE_OS_WAITLIST,
  'scope-lock': process.env.NEXT_PUBLIC_GADS_CL_SCOPE_LOCK_WAITLIST,
  reviewdraft: process.env.NEXT_PUBLIC_GADS_CL_REVIEWDRAFT_WAITLIST,
  mealforge: process.env.NEXT_PUBLIC_GADS_CL_MEALFORGE_WAITLIST,
  dealshield:
    process.env.NEXT_PUBLIC_GADS_CL_DEALSHIELD_WAITLIST ||
    process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL_DEALSHIELD,
  churnguard: process.env.NEXT_PUBLIC_GADS_CL_CHURNGUARD_WAITLIST,
  challengepulse: process.env.NEXT_PUBLIC_GADS_CL_CHALLENGEPULSE_WAITLIST,
  sponsorkit: process.env.NEXT_PUBLIC_GADS_CL_SPONSORKIT_WAITLIST,
}

export function getDefaultConversionKey(slug: string): string {
  return `${slug}${WAITLIST_ACTION_SUFFIX}`
}

function getConversionLabel(conversionKey: string): string | undefined {
  if (conversionKey.endsWith(WAITLIST_ACTION_SUFFIX)) {
    const slug = conversionKey.slice(0, -WAITLIST_ACTION_SUFFIX.length)
    return WAITLIST_CONVERSION_LABELS[slug] || process.env.NEXT_PUBLIC_GADS_CL_GENERIC_WAITLIST
  }

  return undefined
}

export function reportConversion(conversionKey: string, value: number = 10000): void {
  if (typeof window === 'undefined') return
  if (typeof window.gtag === 'undefined') {
    console.warn(`[gtag] not loaded (${conversionKey})`)
    return
  }
  if (!GOOGLE_ADS_ID) {
    console.warn('[gtag] NEXT_PUBLIC_GOOGLE_ADS_ID not set')
    return
  }
  const label = getConversionLabel(conversionKey)
  if (!label) {
    console.warn(`[gtag] No label for key: ${conversionKey}`)
    return
  }
  window.gtag('event', 'conversion', {
    send_to: `${GOOGLE_ADS_ID}/${label}`,
    value,
    currency: 'KRW',
  })
}
