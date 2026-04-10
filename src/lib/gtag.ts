const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID

// 전환 액션 레지스트리: "{slug}_{action}" 또는 "generic_{action}"
// Google Ads UI에서 전환 액션 생성할 때마다 여기에 추가
const CONVERSION_REGISTRY: Record<string, string | undefined> = {
  dealshield_waitlist_signup:
    process.env.NEXT_PUBLIC_GADS_CL_DEALSHIELD_WAITLIST ||
    process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL_DEALSHIELD, // fallback — 2026-04-24 이후 제거
  // sponsorkit_waitlist_signup: process.env.NEXT_PUBLIC_GADS_CL_SPONSORKIT_WAITLIST,
  // generic_waitlist_signup: process.env.NEXT_PUBLIC_GADS_CL_GENERIC_WAITLIST,
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
  const label = CONVERSION_REGISTRY[conversionKey]
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
