#!/usr/bin/env node

import { execSync } from 'child_process'
import { existsSync, readFileSync, writeFileSync } from 'fs'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'
import {
  exchangeRefreshTokenForAccessToken,
  buildHeaders,
  normalizeCustomerId,
  getApiVersion,
} from './lib/google-ads-auth.mjs'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = resolve(__dirname, '..')
const GENERATED_DIR = resolve(ROOT, 'generated/google-ads')
const DEFAULT_API_VERSION = getApiVersion()

function parseArgs(argv) {
  const parsed = {
    slug: null,
    dryRun: false,
    enabled: false,
    dailyBudget: null,
    budgetMicros: null,
  }

  for (let i = 0; i < argv.length; i++) {
    const current = argv[i]
    if (current === '--slug') parsed.slug = argv[i + 1] ?? null
    if (current === '--dry-run') parsed.dryRun = true
    if (current === '--enabled') parsed.enabled = true
    if (current === '--daily-budget') parsed.dailyBudget = argv[i + 1] ?? null
    if (current === '--budget-micros') parsed.budgetMicros = argv[i + 1] ?? null
  }

  return parsed
}

function fail(message) {
  console.error(message)
  process.exit(1)
}

function stripKeywordDecorators(keyword) {
  return String(keyword).trim().replace(/^\[/, '').replace(/\]$/, '').replace(/^"/, '').replace(/"$/, '')
}

function parseBudgetMicros(args) {
  if (args.budgetMicros) {
    const parsed = Number(args.budgetMicros)
    if (!Number.isFinite(parsed) || parsed <= 0) {
      fail(`Invalid --budget-micros value: ${args.budgetMicros}`)
    }
    return Math.round(parsed)
  }

  const dailyBudget = args.dailyBudget ?? process.env.GOOGLE_ADS_DAILY_BUDGET
  if (dailyBudget) {
    const parsed = Number(dailyBudget)
    if (!Number.isFinite(parsed) || parsed <= 0) {
      fail(`Invalid daily budget value: ${dailyBudget}`)
    }
    return Math.round(parsed * 1_000_000)
  }

  const envMicros = process.env.GOOGLE_ADS_DAILY_BUDGET_MICROS
  if (envMicros) {
    const parsed = Number(envMicros)
    if (!Number.isFinite(parsed) || parsed <= 0) {
      fail(`Invalid GOOGLE_ADS_DAILY_BUDGET_MICROS value: ${envMicros}`)
    }
    return Math.round(parsed)
  }

  fail('Provide --daily-budget, --budget-micros, GOOGLE_ADS_DAILY_BUDGET, or GOOGLE_ADS_DAILY_BUDGET_MICROS.')
}

function timestampSuffix() {
  return new Date().toISOString().replace(/\D/g, '').slice(0, 14)
}

function readJson(filePath) {
  return JSON.parse(readFileSync(filePath, 'utf8'))
}

function writeJson(filePath, value) {
  writeFileSync(filePath, `${JSON.stringify(value, null, 2)}\n`, 'utf8')
}

function runValidator(slug) {
  execSync(`npm run ads:validate -- --slug ${slug}`, { cwd: ROOT, stdio: 'inherit' })

  const reportPath = resolve(GENERATED_DIR, `${slug}.report.md`)
  if (!existsSync(reportPath)) {
    fail(`Validation report not found: ${reportPath}`)
  }

  const report = readFileSync(reportPath, 'utf8')
  const match = report.match(/Launch readiness:\s+\*\*(.+?)\*\*/)
  return match?.[1] ?? 'UNKNOWN'
}

function readBlueprint(slug) {
  const blueprintPath = resolve(GENERATED_DIR, `${slug}.json`)
  if (!existsSync(blueprintPath)) {
    fail(`Blueprint not found: ${blueprintPath}\nRun: npm run ads:blueprint -- --slug ${slug}`)
  }

  return readJson(blueprintPath)
}

function buildKeywordOperation(adGroupResourceName, text, matchType, negative = false) {
  return {
    create: {
      adGroup: adGroupResourceName,
      status: 'ENABLED',
      negative,
      keyword: {
        text,
        matchType,
      },
    },
  }
}

function buildLaunchPlan(blueprint, options) {
  const budgetMicros = parseBudgetMicros(options)

  return {
    apiVersion: DEFAULT_API_VERSION,
    budgetMicros,
    campaignStatus: options.enabled ? 'ENABLED' : 'PAUSED',
    budget: {
      name: `${blueprint.campaign_name}_budget_${timestampSuffix()}`,
      amountMicros: budgetMicros,
      deliveryMethod: 'STANDARD',
      explicitlyShared: false,
    },
    campaign: {
      name: blueprint.campaign_name,
      advertisingChannelType: 'SEARCH',
      status: options.enabled ? 'ENABLED' : 'PAUSED',
      manualCpc: {},
      networkSettings: {
        targetGoogleSearch: true,
        targetSearchNetwork: false,
        targetPartnerSearchNetwork: false,
        targetContentNetwork: false,
      },
      finalUrlSuffix: blueprint.final_url_suffix,
    },
    adGroup: {
      name: blueprint.ad_group_name,
      type: 'SEARCH_STANDARD',
      status: 'ENABLED',
    },
    keywords: {
      exact: blueprint.exact_keywords.map(stripKeywordDecorators),
      phrase: blueprint.phrase_keywords.map(stripKeywordDecorators),
      negative: blueprint.negative_keywords.map(stripKeywordDecorators),
    },
    adGroupAd: {
      status: 'ENABLED',
      ad: {
        finalUrls: [blueprint.final_url],
        responsiveSearchAd: {
          headlines: blueprint.rsa_headlines.map((text) => ({ text })),
          descriptions: blueprint.descriptions.map((text) => ({ text })),
        },
      },
    },
    manualAssetsPending: {
      sitelinks: blueprint.sitelinks,
      callouts: blueprint.callouts,
    },
  }
}

async function mutateGoogleAdsResource(customerId, service, headers, operations) {
  const endpoint = `https://googleads.googleapis.com/${DEFAULT_API_VERSION}/customers/${customerId}/${service}:mutate`
  const response = await fetch(endpoint, {
    method: 'POST',
    headers,
    body: JSON.stringify({ operations }),
  })

  const requestId = response.headers.get('request-id')
  const payload = await response.json().catch(() => null)

  if (!response.ok) {
    fail(
      [
        `Google Ads mutate failed for ${service}.`,
        requestId ? `request-id: ${requestId}` : null,
        payload ? JSON.stringify(payload, null, 2) : null,
      ].filter(Boolean).join('\n'),
    )
  }

  return {
    requestId,
    payload,
  }
}

async function launchCampaign(slug, blueprint, plan) {
  const customerId = normalizeCustomerId(process.env.GOOGLE_ADS_CUSTOMER_ID, 'GOOGLE_ADS_CUSTOMER_ID')
  const accessToken = await exchangeRefreshTokenForAccessToken()
  const headers = buildHeaders(accessToken)

  const result = {
    slug,
    launchedAt: new Date().toISOString(),
    customerId,
    campaignStatus: plan.campaignStatus,
    budgetMicros: plan.budgetMicros,
    requestIds: {},
    resources: {},
    manualAssetsPending: plan.manualAssetsPending,
  }

  const budgetResponse = await mutateGoogleAdsResource(customerId, 'campaignBudgets', headers, [
    { create: plan.budget },
  ])
  result.requestIds.campaignBudgets = budgetResponse.requestId
  result.resources.campaignBudget = budgetResponse.payload?.results?.[0]?.resourceName

  const campaignResponse = await mutateGoogleAdsResource(customerId, 'campaigns', headers, [
    {
      create: {
        ...plan.campaign,
        campaignBudget: result.resources.campaignBudget,
      },
    },
  ])
  result.requestIds.campaigns = campaignResponse.requestId
  result.resources.campaign = campaignResponse.payload?.results?.[0]?.resourceName

  const adGroupResponse = await mutateGoogleAdsResource(customerId, 'adGroups', headers, [
    {
      create: {
        ...plan.adGroup,
        campaign: result.resources.campaign,
      },
    },
  ])
  result.requestIds.adGroups = adGroupResponse.requestId
  result.resources.adGroup = adGroupResponse.payload?.results?.[0]?.resourceName

  const keywordOperations = [
    ...plan.keywords.exact.map((text) => buildKeywordOperation(result.resources.adGroup, text, 'EXACT')),
    ...plan.keywords.phrase.map((text) => buildKeywordOperation(result.resources.adGroup, text, 'PHRASE')),
    ...plan.keywords.negative.map((text) => buildKeywordOperation(result.resources.adGroup, text, 'BROAD', true)),
  ]

  const keywordResponse = await mutateGoogleAdsResource(customerId, 'adGroupCriteria', headers, keywordOperations)
  result.requestIds.adGroupCriteria = keywordResponse.requestId
  result.resources.keywords = keywordResponse.payload?.results?.map((item) => item.resourceName) ?? []

  const adGroupAdResponse = await mutateGoogleAdsResource(customerId, 'adGroupAds', headers, [
    {
      create: {
        ...plan.adGroupAd,
        adGroup: result.resources.adGroup,
      },
    },
  ])
  result.requestIds.adGroupAds = adGroupAdResponse.requestId
  result.resources.adGroupAd = adGroupAdResponse.payload?.results?.[0]?.resourceName
  result.finalUrl = blueprint.final_url
  result.finalUrlSuffix = blueprint.final_url_suffix

  return result
}

async function main() {
  const args = parseArgs(process.argv.slice(2))
  if (!args.slug) {
    fail('Usage: npm run ads:launch -- --slug <slug> [--dry-run] [--daily-budget 25000] [--budget-micros 25000000000] [--enabled]')
  }

  const readiness = runValidator(args.slug)
  if (readiness === 'NOT READY') {
    fail(`Launch blocked: validation report is ${readiness}. Fix FAIL items before launching.`)
  }

  const blueprint = readBlueprint(args.slug)
  const plan = buildLaunchPlan(blueprint, args)
  const outputPath = resolve(GENERATED_DIR, `${args.slug}.launch.json`)

  if (args.dryRun) {
    const dryRunPayload = {
      slug: args.slug,
      mode: 'dry-run',
      readiness,
      generatedAt: new Date().toISOString(),
      customerId: process.env.GOOGLE_ADS_CUSTOMER_ID ? normalizeCustomerId(process.env.GOOGLE_ADS_CUSTOMER_ID, 'GOOGLE_ADS_CUSTOMER_ID') : null,
      launchPlan: plan,
      notes: [
        'Core launch automation covers budget, campaign, ad group, exact keywords, phrase keywords, negative keywords, and RSA.',
        'Sitelinks and callouts remain listed as manualAssetsPending in this first launcher version.',
      ],
    }

    writeJson(outputPath, dryRunPayload)
    console.log(`[ads:launch] Dry run ready for ${args.slug}`)
    console.log(`[ads:launch] Validation: ${readiness}`)
    console.log(`[ads:launch] Output: ${outputPath}`)
    console.log(`[ads:launch] Campaign status on create: ${plan.campaignStatus}`)
    console.log(`[ads:launch] Daily budget micros: ${plan.budgetMicros}`)
    return
  }

  const launched = await launchCampaign(args.slug, blueprint, plan)
  writeJson(outputPath, {
    mode: 'live',
    readiness,
    ...launched,
  })

  console.log(`[ads:launch] Launched ${args.slug}`)
  console.log(`[ads:launch] Campaign: ${launched.resources.campaign}`)
  console.log(`[ads:launch] Ad group: ${launched.resources.adGroup}`)
  console.log(`[ads:launch] RSA: ${launched.resources.adGroupAd}`)
  console.log(`[ads:launch] Keywords created: ${launched.resources.keywords.length}`)
  console.log(`[ads:launch] Output: ${outputPath}`)
  console.log('[ads:launch] Note: sitelinks and callouts are still pending manual attachment in this first launcher version.')
}

await main()
