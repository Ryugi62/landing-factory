/**
 * Shared Google Ads API authentication module.
 * READ-ONLY utility — does not create, modify, or delete any Google Ads resources.
 * Used by: get-google-ads-performance.mjs, launch-google-ads-campaign.mjs
 */

const DEFAULT_API_VERSION = process.env.GOOGLE_ADS_API_VERSION || 'v23'

export function normalizeCustomerId(value, label) {
  const normalized = String(value || '').replace(/\D/g, '')
  if (!normalized) {
    console.error(`[google-ads-auth] Missing or invalid ${label}.`)
    process.exit(1)
  }
  return normalized
}

export async function exchangeRefreshTokenForAccessToken() {
  const clientId = process.env.GOOGLE_ADS_CLIENT_ID
  const clientSecret = process.env.GOOGLE_ADS_CLIENT_SECRET
  const refreshToken = process.env.GOOGLE_ADS_REFRESH_TOKEN

  if (!clientId || !clientSecret || !refreshToken) {
    console.error('[google-ads-auth] Missing Google Ads OAuth envs. Required: GOOGLE_ADS_CLIENT_ID, GOOGLE_ADS_CLIENT_SECRET, GOOGLE_ADS_REFRESH_TOKEN')
    process.exit(1)
  }

  const response = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      refresh_token: refreshToken,
      grant_type: 'refresh_token',
    }),
  })

  const payload = await response.json().catch(() => null)
  if (!response.ok || !payload?.access_token) {
    console.error(`[google-ads-auth] Failed to exchange refresh token.\n${JSON.stringify(payload, null, 2)}`)
    process.exit(1)
  }

  return payload.access_token
}

export function buildHeaders(accessToken) {
  const developerToken = process.env.GOOGLE_ADS_DEVELOPER_TOKEN
  if (!developerToken) {
    console.error('[google-ads-auth] Missing GOOGLE_ADS_DEVELOPER_TOKEN.')
    process.exit(1)
  }

  const headers = {
    Authorization: `Bearer ${accessToken}`,
    'developer-token': developerToken,
    'Content-Type': 'application/json',
  }

  if (process.env.GOOGLE_ADS_LOGIN_CUSTOMER_ID) {
    headers['login-customer-id'] = normalizeCustomerId(
      process.env.GOOGLE_ADS_LOGIN_CUSTOMER_ID,
      'GOOGLE_ADS_LOGIN_CUSTOMER_ID',
    )
  }

  return headers
}

export function getApiVersion() {
  return DEFAULT_API_VERSION
}

export function getCustomerId() {
  return normalizeCustomerId(process.env.GOOGLE_ADS_CUSTOMER_ID, 'GOOGLE_ADS_CUSTOMER_ID')
}
