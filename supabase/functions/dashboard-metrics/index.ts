import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
const DASHBOARD_SECRET = Deno.env.get('DASHBOARD_SECRET') ?? ''

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
}

type WaitlistRow = {
  product: string
  referral_source: string | null
  created_at: string
  email_1_sent_at: string | null
  email_2_sent_at: string | null
  email_3_sent_at: string | null
  landing_slug: string | null
  utm_source: string | null
  utm_medium: string | null
  utm_campaign: string | null
  utm_content: string | null
  utm_term: string | null
  gclid: string | null
  ref_code: string | null
}

function increment(map: Record<string, number>, key: string) {
  map[key] = (map[key] || 0) + 1
}

function emptyToUndefined(value?: string | null) {
  return value && value.trim() ? value.trim() : undefined
}

function parseLegacyReferralSource(referralSource?: string | null) {
  if (!referralSource) return {}

  if (referralSource.startsWith('utm:')) {
    const [, utm_source, utm_medium, utm_campaign] = referralSource.split(':')
    return {
      utm_source: emptyToUndefined(utm_source),
      utm_medium: emptyToUndefined(utm_medium),
      utm_campaign: emptyToUndefined(utm_campaign),
    }
  }

  if (referralSource.startsWith('ref:')) {
    return { ref_code: emptyToUndefined(referralSource.slice(4)) }
  }

  return {}
}

function getAttribution(row: WaitlistRow) {
  const legacy = parseLegacyReferralSource(row.referral_source)

  return {
    landing_slug: emptyToUndefined(row.landing_slug) ?? row.product,
    utm_source: emptyToUndefined(row.utm_source) ?? legacy.utm_source,
    utm_medium: emptyToUndefined(row.utm_medium) ?? legacy.utm_medium,
    utm_campaign: emptyToUndefined(row.utm_campaign) ?? legacy.utm_campaign,
    utm_content: emptyToUndefined(row.utm_content),
    utm_term: emptyToUndefined(row.utm_term),
    gclid: emptyToUndefined(row.gclid),
    ref_code: emptyToUndefined(row.ref_code) ?? legacy.ref_code,
  }
}

function getLast30Days(rows: WaitlistRow[]) {
  const counts: Record<string, number> = {}
  const start = new Date()
  start.setUTCHours(0, 0, 0, 0)
  start.setUTCDate(start.getUTCDate() - 29)

  for (const row of rows) {
    const createdAt = new Date(row.created_at)
    if (createdAt < start) continue
    const day = row.created_at.slice(0, 10)
    increment(counts, day)
  }

  const daily = []
  for (let i = 0; i < 30; i++) {
    const date = new Date(start)
    date.setUTCDate(start.getUTCDate() + i)
    const key = date.toISOString().slice(0, 10)
    daily.push({ date: key, count: counts[key] || 0 })
  }

  return daily
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  if (!DASHBOARD_SECRET) {
    return new Response('Missing DASHBOARD_SECRET', { status: 500, headers: corsHeaders })
  }

  const auth = req.headers.get('Authorization')
  if (auth !== `Bearer ${DASHBOARD_SECRET}`) {
    return new Response('Unauthorized', { status: 401, headers: corsHeaders })
  }

  const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY)

  // Fallback: manual query if RPC doesn't exist
  const { data: waitlist } = await supabase
    .from('waitlist')
    .select('product, referral_source, created_at, email_1_sent_at, email_2_sent_at, email_3_sent_at, landing_slug, utm_source, utm_medium, utm_campaign, utm_content, utm_term, gclid, ref_code')
    .order('created_at', { ascending: false })

  const rows: WaitlistRow[] = waitlist ?? []

  // Aggregate by product
  const productMap: Record<string, { signups: number; email1: number; email2: number; email3: number }> = {}
  const utmSourceMap: Record<string, number> = {}
  const utmCampaignMap: Record<string, number> = {}
  const productCampaignMap: Record<string, number> = {}
  const referralSourceMap: Record<string, number> = {}

  for (const r of rows) {
    const attribution = getAttribution(r)

    if (!productMap[r.product]) {
      productMap[r.product] = { signups: 0, email1: 0, email2: 0, email3: 0 }
    }
    productMap[r.product].signups++
    if (r.email_1_sent_at) productMap[r.product].email1++
    if (r.email_2_sent_at) productMap[r.product].email2++
    if (r.email_3_sent_at) productMap[r.product].email3++

    increment(utmSourceMap, attribution.utm_source ?? '(none)')
    increment(utmCampaignMap, attribution.utm_campaign ?? '(none)')
    increment(productCampaignMap, `${r.product}::${attribution.utm_campaign ?? '(none)'}`)
    increment(referralSourceMap, r.referral_source || '(direct)')
  }

  // Email queue status
  const { data: queueStats } = await supabase
    .from('email_queue')
    .select('email_type, sent_at, error')

  const queue = {
    pending: 0,
    sent: 0,
    failed: 0,
  }
  for (const q of queueStats ?? []) {
    if (q.sent_at) queue.sent++
    else if (q.error) queue.failed++
    else queue.pending++
  }

  const result = {
    total_signups: rows.length,
    by_product: Object.entries(productMap)
      .map(([product, stats]) => ({ product, ...stats }))
      .sort((a, b) => b.signups - a.signups),
    daily_30d: getLast30Days(rows),
    by_utm_source: Object.entries(utmSourceMap)
      .map(([utm_source, count]) => ({ utm_source, count }))
      .sort((a, b) => b.count - a.count),
    by_utm_campaign: Object.entries(utmCampaignMap)
      .map(([utm_campaign, count]) => ({ utm_campaign, count }))
      .sort((a, b) => b.count - a.count),
    by_product_campaign: Object.entries(productCampaignMap)
      .map(([key, count]) => {
        const [product, utm_campaign] = key.split('::')
        return { product, utm_campaign, count }
      })
      .sort((a, b) => b.count - a.count),
    by_referral_source: Object.entries(referralSourceMap)
      .map(([referral_source, count]) => ({ referral_source, count }))
      .sort((a, b) => b.count - a.count),
    email_queue: queue,
    updated_at: new Date().toISOString(),
  }

  return new Response(JSON.stringify(result), {
    headers: { 'Content-Type': 'application/json', ...corsHeaders },
  })
})
