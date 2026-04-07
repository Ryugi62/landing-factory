import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
const DASHBOARD_SECRET = Deno.env.get('CRON_SECRET')! // reuse CRON_SECRET for simplicity

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  // Auth: reuse CRON_SECRET
  const auth = req.headers.get('Authorization')
  if (auth !== `Bearer ${DASHBOARD_SECRET}`) {
    return new Response('Unauthorized', { status: 401, headers: corsHeaders })
  }

  const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY)

  // 1. Signups by product
  const { data: byProduct } = await supabase.rpc('dashboard_by_product').select()
    .catch(() => ({ data: null }))

  // Fallback: manual query if RPC doesn't exist
  const { data: waitlist } = await supabase
    .from('waitlist')
    .select('id, email, product, referral_source, created_at, email_1_sent_at, email_2_sent_at, email_3_sent_at')
    .order('created_at', { ascending: false })

  const rows = waitlist ?? []

  // Aggregate by product
  const productMap: Record<string, { signups: number; email1: number; email2: number; email3: number }> = {}
  for (const r of rows) {
    if (!productMap[r.product]) {
      productMap[r.product] = { signups: 0, email1: 0, email2: 0, email3: 0 }
    }
    productMap[r.product].signups++
    if (r.email_1_sent_at) productMap[r.product].email1++
    if (r.email_2_sent_at) productMap[r.product].email2++
    if (r.email_3_sent_at) productMap[r.product].email3++
  }

  // Aggregate by referral source
  const sourceMap: Record<string, number> = {}
  for (const r of rows) {
    const src = r.referral_source || '(direct)'
    sourceMap[src] = (sourceMap[src] || 0) + 1
  }

  // Daily signups (last 30 days)
  const dailyMap: Record<string, number> = {}
  for (const r of rows) {
    const day = r.created_at.slice(0, 10)
    dailyMap[day] = (dailyMap[day] || 0) + 1
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
    by_source: Object.entries(sourceMap)
      .map(([source, count]) => ({ source, count }))
      .sort((a, b) => b.count - a.count),
    daily: Object.entries(dailyMap)
      .map(([date, count]) => ({ date, count }))
      .sort((a, b) => a.date.localeCompare(b.date)),
    email_queue: queue,
    updated_at: new Date().toISOString(),
  }

  return new Response(JSON.stringify(result), {
    headers: { 'Content-Type': 'application/json', ...corsHeaders },
  })
})
