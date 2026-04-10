const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID

const CONVERSION_LABELS: Record<string, string> = {
  dealshield: process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL_DEALSHIELD ?? '',
  // sponsorkit: process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL_SPONSORKIT ?? '',
  // mealforge: process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL_MEALFORGE ?? '',
}

export function reportConversion(slug: string): void {
  if (typeof window === 'undefined') return
  if (typeof window.gtag === 'undefined') {
    console.warn('[gtag] gtag not loaded')
    return
  }
  if (!GOOGLE_ADS_ID) {
    console.warn('[gtag] NEXT_PUBLIC_GOOGLE_ADS_ID not set')
    return
  }
  const label = CONVERSION_LABELS[slug]
  if (!label) {
    console.warn(`[gtag] No conversion label registered for slug: ${slug}`)
    return
  }
  window.gtag('event', 'conversion', {
    send_to: `${GOOGLE_ADS_ID}/${label}`,
    value: 10000,
    currency: 'KRW',
  })
}
