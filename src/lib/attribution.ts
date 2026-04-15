const ATTRIBUTION_STORAGE_PREFIX = 'lf-attribution:'
const ATTRIBUTION_TTL_MS = 30 * 24 * 60 * 60 * 1000

type StoredAttribution = {
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  utm_content?: string
  utm_term?: string
  gclid?: string
  ref_code?: string
  captured_at: number
}

export type AttributionPayload = {
  landing_slug: string
  referral_source?: string
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  utm_content?: string
  utm_term?: string
  gclid?: string
  ref_code?: string
}

function readParam(params: URLSearchParams, key: string): string | undefined {
  const value = params.get(key)?.trim()
  return value ? value : undefined
}

function buildStorageKey(landingSlug: string): string {
  return `${ATTRIBUTION_STORAGE_PREFIX}${landingSlug}`
}

function hasExplicitAttribution({
  utm_source,
  utm_medium,
  utm_campaign,
  utm_content,
  utm_term,
  gclid,
  ref_code,
}: Pick<AttributionPayload, 'utm_source' | 'utm_medium' | 'utm_campaign' | 'utm_content' | 'utm_term' | 'gclid' | 'ref_code'>): boolean {
  return Boolean(utm_source || utm_medium || utm_campaign || utm_content || utm_term || gclid || ref_code)
}

function summarizeAttribution({
  utm_source,
  utm_medium,
  utm_campaign,
  utm_content,
  utm_term,
  gclid,
  ref_code,
}: Pick<AttributionPayload, 'utm_source' | 'utm_medium' | 'utm_campaign' | 'utm_content' | 'utm_term' | 'gclid' | 'ref_code'>): string | undefined {
  if (utm_source || utm_medium || utm_campaign || utm_content || utm_term || gclid) {
    const parts = [
      'utm',
      utm_source ?? '(none)',
      utm_medium ?? '(none)',
      utm_campaign ?? '(none)',
    ]
    if (utm_content) parts.push(`content=${utm_content}`)
    if (utm_term) parts.push(`term=${utm_term}`)
    if (gclid) parts.push(`gclid=${gclid}`)
    return parts.join(':')
  }

  if (ref_code) return `ref:${ref_code}`
  return undefined
}

function buildAttributionPayload(landingSlug: string, source: Pick<AttributionPayload, 'utm_source' | 'utm_medium' | 'utm_campaign' | 'utm_content' | 'utm_term' | 'gclid' | 'ref_code'>): AttributionPayload {
  const attribution: AttributionPayload = {
    landing_slug: landingSlug,
    ...source,
  }

  const summary = summarizeAttribution(source)
  if (summary) attribution.referral_source = summary

  return attribution
}

function readStoredAttribution(landingSlug: string): AttributionPayload | undefined {
  if (typeof window === 'undefined') return undefined

  try {
    const raw = window.localStorage.getItem(buildStorageKey(landingSlug))
    if (!raw) return undefined

    const parsed = JSON.parse(raw) as StoredAttribution
    if (!parsed.captured_at || Date.now() - parsed.captured_at > ATTRIBUTION_TTL_MS) {
      window.localStorage.removeItem(buildStorageKey(landingSlug))
      return undefined
    }

    return buildAttributionPayload(landingSlug, parsed)
  } catch {
    return undefined
  }
}

export function captureCurrentAttribution(landingSlug: string): void {
  if (typeof window === 'undefined') return

  const params = new URLSearchParams(window.location.search)
  const current = {
    utm_source: readParam(params, 'utm_source'),
    utm_medium: readParam(params, 'utm_medium'),
    utm_campaign: readParam(params, 'utm_campaign'),
    utm_content: readParam(params, 'utm_content'),
    utm_term: readParam(params, 'utm_term'),
    gclid: readParam(params, 'gclid'),
    ref_code: readParam(params, 'ref'),
  }

  if (!hasExplicitAttribution(current)) return

  try {
    const stored: StoredAttribution = {
      ...current,
      captured_at: Date.now(),
    }
    window.localStorage.setItem(buildStorageKey(landingSlug), JSON.stringify(stored))
  } catch {
    // Ignore storage failures and fall back to URL-only attribution.
  }
}

export function getAttribution(landingSlug: string): AttributionPayload {
  const params = new URLSearchParams(window.location.search)
  const current = buildAttributionPayload(landingSlug, {
    utm_source: readParam(params, 'utm_source'),
    utm_medium: readParam(params, 'utm_medium'),
    utm_campaign: readParam(params, 'utm_campaign'),
    utm_content: readParam(params, 'utm_content'),
    utm_term: readParam(params, 'utm_term'),
    gclid: readParam(params, 'gclid'),
    ref_code: readParam(params, 'ref'),
  })

  if (hasExplicitAttribution(current)) {
    captureCurrentAttribution(landingSlug)
    return current
  }

  const stored = readStoredAttribution(landingSlug)
  if (stored) return stored

  const attribution: AttributionPayload = { landing_slug: landingSlug }
  if (document.referrer) {
    try {
      attribution.referral_source = `referrer:${new URL(document.referrer).hostname}`
    } catch {
      attribution.referral_source = `referrer:${document.referrer}`
    }
  }

  return attribution
}
