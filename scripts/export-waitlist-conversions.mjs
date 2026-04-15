#!/usr/bin/env node

/**
 * Waitlist → Google Ads Offline Conversion CSV
 *
 * Supabase `waitlist` 테이블에서 gclid 있는 가입을 읽어
 * Google Ads 오프라인 전환 업로드용 CSV로 출력한다.
 *
 * 사용법:
 *   npm run ads:export-conversions -- --since 2026-04-10 --out ~/Desktop/waitlist-conv.csv
 *   npm run ads:export-conversions -- --days 7
 *   npm run ads:export-conversions -- --days 7 --value 15000
 *   npm run ads:export-conversions -- --slug dealshield --days 7
 *
 * 환경변수 (landing-factory/.env.local):
 *   NEXT_PUBLIC_SUPABASE_URL  (필수)
 *   SUPABASE_SERVICE_ROLE_KEY (필수 — anon은 waitlist SELECT 불가)
 *
 * Google Ads UI:
 *   도구 > 전환 > 업로드 > 파일 업로드 → 이 CSV 선택
 *
 * 기본 동작:
 *   Conversion Name은 각 row의 landing_slug/product 기준으로
 *   "{slug}_waitlist_signup" 를 자동 사용한다.
 */

import { readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

;(function loadEnv() {
  for (const name of ['.env.local', '.env']) {
    try {
      const content = readFileSync(resolve(process.cwd(), name), 'utf8')
      for (const line of content.split('\n')) {
        const t = line.trim()
        if (!t || t.startsWith('#')) continue
        const i = t.indexOf('=')
        if (i === -1) continue
        const k = t.slice(0, i).trim()
        let v = t.slice(i + 1).trim()
        if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) v = v.slice(1, -1)
        if (!(k in process.env)) process.env[k] = v
      }
      break
    } catch {}
  }
})()

function parseArgs(argv) {
  const out = { since: null, days: null, out: null, value: 10000, currency: 'KRW', conversionName: null, slug: null }
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === '--since') out.since = argv[i + 1]
    if (argv[i] === '--days') out.days = Number(argv[i + 1])
    if (argv[i] === '--out') out.out = argv[i + 1]
    if (argv[i] === '--value') out.value = Number(argv[i + 1])
    if (argv[i] === '--currency') out.currency = argv[i + 1]
    if (argv[i] === '--name') out.conversionName = argv[i + 1]
    if (argv[i] === '--slug') out.slug = argv[i + 1]
  }
  return out
}

function buildConversionName(slug) {
  return `${slug}_waitlist_signup`
}

const args = parseArgs(process.argv.slice(2))
const supaUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supaUrl || !serviceKey) {
  console.error('Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in .env.local')
  process.exit(1)
}

let sinceISO
if (args.since) {
  sinceISO = new Date(args.since).toISOString()
} else {
  const days = args.days ?? 7
  sinceISO = new Date(Date.now() - days * 86400000).toISOString()
}

const endpoint = `${supaUrl}/rest/v1/waitlist?select=gclid,created_at,email,product,landing_slug,utm_campaign&gclid=not.is.null&created_at=gte.${sinceISO}&order=created_at.asc`

const res = await fetch(endpoint, {
  headers: { apikey: serviceKey, Authorization: `Bearer ${serviceKey}` },
})
if (!res.ok) {
  console.error('Supabase fetch failed:', res.status, await res.text())
  process.exit(2)
}
const rows = await res.json()

const lines = ['Parameters:TimeZone=+0000']
lines.push('Google Click ID,Conversion Name,Conversion Time,Conversion Value,Conversion Currency')
let count = 0
const byConversion = {}
for (const r of rows) {
  if (!r.gclid) continue
  const slug = String(r.landing_slug || r.product || '').trim()
  if (!slug) continue
  if (args.slug && slug !== args.slug) continue

  const t = new Date(r.created_at)
  const ts = t.toISOString().replace('T', ' ').replace(/\.\d+Z$/, '')
  const conversionName = args.conversionName || buildConversionName(slug)
  lines.push([r.gclid, conversionName, ts, args.value, args.currency].join(','))
  count++
  byConversion[conversionName] = (byConversion[conversionName] || 0) + 1
}

const csv = lines.join('\n') + '\n'
const outPath = args.out
  ? args.out.replace(/^~/, process.env.HOME || '')
  : resolve(process.cwd(), `generated/google-ads/waitlist-conversions-${new Date().toISOString().slice(0, 10)}.csv`)

writeFileSync(outPath, csv)
console.log(JSON.stringify({ ok: true, rows: count, since: sinceISO, slug: args.slug, byConversion, outPath }, null, 2))
