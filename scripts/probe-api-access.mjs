#!/usr/bin/env node
/**
 * Google Ads API 승인 여부 프로브 — READ-ONLY.
 * 기본 액세스 승인되면 계정 캠페인 목록을 반환, 아니면 403/PERMISSION_DENIED.
 */
import {
  exchangeRefreshTokenForAccessToken,
  buildHeaders,
  getApiVersion,
  getCustomerId,
} from './lib/google-ads-auth.mjs'

const customerId = getCustomerId()
const accessToken = await exchangeRefreshTokenForAccessToken()
const headers = buildHeaders(accessToken)
const endpoint = `https://googleads.googleapis.com/${getApiVersion()}/customers/${customerId}/googleAds:search`

const query = `
  SELECT campaign.id, campaign.name, campaign.status
  FROM campaign
  WHERE campaign.status != 'REMOVED'
`

const res = await fetch(endpoint, {
  method: 'POST',
  headers,
  body: JSON.stringify({ query }),
})

const body = await res.json().catch(() => null)
const verdict = res.ok ? 'APPROVED' : 'NOT_APPROVED'

console.log(JSON.stringify({
  verdict,
  httpStatus: res.status,
  customerId,
  loginCustomerId: process.env.GOOGLE_ADS_LOGIN_CUSTOMER_ID || null,
  campaignCount: body?.results?.length ?? 0,
  campaigns: body?.results?.map(r => ({
    id: r.campaign?.id,
    name: r.campaign?.name,
    status: r.campaign?.status,
  })) ?? null,
  error: res.ok ? null : body,
}, null, 2))

process.exit(res.ok ? 0 : 2)
