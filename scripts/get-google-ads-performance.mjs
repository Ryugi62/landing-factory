#!/usr/bin/env node

/**
 * Google Ads Performance Report — READ-ONLY
 *
 * This script ONLY reads campaign performance data.
 * It does NOT create, modify, pause, enable, or delete any Google Ads resources.
 *
 * Usage:
 *   npm run ads:performance -- --slug slotfill
 *   npm run ads:performance -- --all
 *   npm run ads:performance -- --slug slotfill --days 14
 *
 * Output:
 *   - stdout: JSON performance report
 *   - file: generated/google-ads/{slug}.performance.json
 *
 * Exit codes:
 *   0 — success
 *   1 — missing arguments or configuration
 *   2 — no campaign found for the given slug
 *   3 — Google Ads API error
 */

import { existsSync, readFileSync, readdirSync, writeFileSync } from 'fs'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'
import {
  exchangeRefreshTokenForAccessToken,
  buildHeaders,
  getApiVersion,
  getCustomerId,
} from './lib/google-ads-auth.mjs'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = resolve(__dirname, '..')
const GENERATED_DIR = resolve(ROOT, 'generated/google-ads')

function parseArgs(argv) {
  const parsed = { slug: null, all: false, days: 7 }
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === '--slug') parsed.slug = argv[i + 1] ?? null
    if (argv[i] === '--all') parsed.all = true
    if (argv[i] === '--days') parsed.days = Number(argv[i + 1]) || 7
  }
  return parsed
}

function fail(message, code = 1) {
  console.error(JSON.stringify({ error: true, message, exitCode: code }))
  process.exit(code)
}

function findCampaignResource(slug) {
  const launchPath = resolve(GENERATED_DIR, `${slug}.launch.json`)
  if (!existsSync(launchPath)) return null

  const launch = JSON.parse(readFileSync(launchPath, 'utf8'))
  return launch.resources?.campaign ?? null
}

function findAllSlugsWithCampaigns() {
  if (!existsSync(GENERATED_DIR)) return []

  return readdirSync(GENERATED_DIR)
    .filter((f) => f.endsWith('.launch.json'))
    .map((f) => f.replace('.launch.json', ''))
    .filter((slug) => findCampaignResource(slug) !== null)
}

async function fetchPerformance(customerId, headers, campaignResource, days) {
  const apiVersion = getApiVersion()
  const endpoint = `https://googleads.googleapis.com/${apiVersion}/customers/${customerId}/googleAds:searchStream`

  const query = `
    SELECT
      campaign.id,
      campaign.name,
      campaign.status,
      metrics.impressions,
      metrics.clicks,
      metrics.cost_micros,
      metrics.conversions,
      metrics.cost_per_conversion
    FROM campaign
    WHERE campaign.resource_name = '${campaignResource}'
      AND segments.date DURING LAST_${days}_DAYS
  `

  const response = await fetch(endpoint, {
    method: 'POST',
    headers,
    body: JSON.stringify({ query }),
  })

  const payload = await response.json().catch(() => null)

  if (!response.ok) {
    const requestId = response.headers.get('request-id')
    fail(
      `Google Ads API error. request-id: ${requestId ?? 'unknown'}. ${JSON.stringify(payload, null, 2)}`,
      3,
    )
  }

  return payload
}

function aggregateResults(payload) {
  let impressions = 0
  let clicks = 0
  let costMicros = 0
  let conversions = 0
  let campaignName = ''
  let campaignStatus = ''

  const results = payload?.flatMap?.((batch) => batch.results ?? []) ?? []

  for (const row of results) {
    campaignName = row.campaign?.name ?? campaignName
    campaignStatus = row.campaign?.status ?? campaignStatus
    impressions += Number(row.metrics?.impressions ?? 0)
    clicks += Number(row.metrics?.clicks ?? 0)
    costMicros += Number(row.metrics?.costMicros ?? 0)
    conversions += Number(row.metrics?.conversions ?? 0)
  }

  const ctr = impressions > 0 ? ((clicks / impressions) * 100).toFixed(2) : '0.00'
  const cpc = clicks > 0 ? Math.round(costMicros / clicks / 1_000_000) : 0
  const cpa = conversions > 0 ? Math.round(costMicros / conversions / 1_000_000) : null

  return {
    campaignName,
    campaignStatus,
    impressions,
    clicks,
    costMicros,
    costKRW: Math.round(costMicros / 1_000_000),
    conversions,
    ctr: `${ctr}%`,
    cpcKRW: cpc,
    cpaKRW: cpa,
  }
}

async function main() {
  const args = parseArgs(process.argv.slice(2))

  if (!args.slug && !args.all) {
    fail('Usage: npm run ads:performance -- --slug <slug> | --all [--days N]', 1)
  }

  const slugs = args.all ? findAllSlugsWithCampaigns() : [args.slug]

  if (slugs.length === 0) {
    fail('No slugs with launch.json campaign resources found.', 2)
  }

  const customerId = getCustomerId()
  const accessToken = await exchangeRefreshTokenForAccessToken()
  const headers = buildHeaders(accessToken)

  const report = {
    readOnly: true,
    generatedAt: new Date().toISOString(),
    periodDays: args.days,
    slugs: {},
  }

  for (const slug of slugs) {
    const campaignResource = findCampaignResource(slug)
    if (!campaignResource) {
      report.slugs[slug] = { error: 'No campaign resource found in launch.json' }
      continue
    }

    const payload = await fetchPerformance(customerId, headers, campaignResource, args.days)
    const metrics = aggregateResults(payload)
    report.slugs[slug] = { campaignResource, ...metrics }

    const outputPath = resolve(GENERATED_DIR, `${slug}.performance.json`)
    writeFileSync(outputPath, `${JSON.stringify({ readOnly: true, slug, periodDays: args.days, ...metrics, generatedAt: report.generatedAt }, null, 2)}\n`, 'utf8')
  }

  console.log(JSON.stringify(report, null, 2))
}

await main()
