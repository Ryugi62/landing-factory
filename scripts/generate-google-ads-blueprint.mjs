#!/usr/bin/env node

import { mkdirSync, readdirSync, readFileSync, writeFileSync } from 'fs'
import { dirname, extname, resolve } from 'path'
import { fileURLToPath } from 'url'
import vm from 'vm'
import * as ts from 'typescript'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = resolve(__dirname, '..')
const PAGES_DIR = resolve(ROOT, 'src/config/pages')
const ADS_CONFIG_PATH = resolve(ROOT, 'src/config/google-ads.ts')
const GENERATED_DIR = resolve(ROOT, 'generated/google-ads')
const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://landing-factory-163.pages.dev'

const COMMERCIAL_INTENT_RE = /\b(software|tool|automation|automated|delivery|report|waitlist|record|recovery|generator|converter|app)\b/i
const B2B_SEGMENT_RE = /\b(agency|agencies|team|teams|clinic|clinics|salon|salons|gym|gyms|engineering|engineers|freelancer|freelancers|coaches|developers|data teams|business)\b/i
const CONSUMER_BROAD_RE = /\b(dating|skincare|portfolio|budget|home|resume)\b/i

function parseArgs(argv) {
  const parsed = { slug: null, all: false }
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === '--slug') parsed.slug = argv[i + 1] ?? null
    if (argv[i] === '--all') parsed.all = true
  }
  return parsed
}

function loadTsModule(filePath) {
  const source = readFileSync(filePath, 'utf8')
  const transpiled = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
      esModuleInterop: true,
    },
    fileName: filePath,
  })

  const mod = { exports: {} }
  const context = {
    module: mod,
    exports: mod.exports,
    require(specifier) {
      throw new Error(`Unsupported runtime import in ${filePath}: ${specifier}`)
    },
    __dirname: dirname(filePath),
    __filename: filePath,
    console,
    process,
  }

  vm.runInNewContext(transpiled.outputText, context, { filename: filePath })
  return mod.exports
}

function loadPageConfigs() {
  return readdirSync(PAGES_DIR)
    .filter((file) => extname(file) === '.ts')
    .sort()
    .map((file) => {
      const pageModule = loadTsModule(resolve(PAGES_DIR, file))
      return pageModule.config
    })
}

function unique(items) {
  return [...new Set(items.filter(Boolean))]
}

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '')
    .replace(/_+/g, '_')
}

function normalizeKeyword(keyword) {
  return keyword
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s&/-]+/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function clamp(text, max) {
  const clean = text.replace(/\s+/g, ' ').trim()
  if (clean.length <= max) return clean
  const sliced = clean.slice(0, max + 1)
  const lastSpace = sliced.lastIndexOf(' ')
  if (lastSpace >= Math.floor(max * 0.6)) {
    return sliced.slice(0, lastSpace).trim()
  }
  return clean.slice(0, max).trim()
}

function titleCase(text) {
  return text
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(' ')
}

function deriveAudienceLabel(targetCustomer, fallback) {
  const beforePunctuation = targetCustomer.split(/[.]/)[0]
  const compact = beforePunctuation
    .replace(/\b(and|that|who|with|for)\b/gi, '')
    .replace(/\s+/g, ' ')
    .trim()
  return clamp(compact || fallback, 26)
}

function inferTargetCustomer(config) {
  return clamp(`${config.hero.badge}. ${config.description}`, 120)
}

function inferPainPoint(config) {
  const firstProblem = config.problems[0]
  return clamp(`${firstProblem.title}. ${firstProblem.desc}`, 140)
}

function inferKeywordIntent(config) {
  const commercialKeyword = config.seo.keywords.find((keyword) => COMMERCIAL_INTENT_RE.test(keyword))
  return normalizeKeyword(commercialKeyword ?? config.seo.keywords[0] ?? config.hero.badge)
}

function countPaidTiers(config) {
  return config.pricing.filter((tier) => tier.price !== '$0' && tier.price !== '₩0').length
}

function scoreConfig(config) {
  const reasons = []
  let score = 0
  const keywordBlob = config.seo.keywords.join(' ')
  const contextBlob = `${config.hero.badge} ${config.description} ${config.seo.description}`

  if (COMMERCIAL_INTENT_RE.test(keywordBlob)) {
    score += 3
    reasons.push('commercial-intent SEO keywords present')
  }

  if (B2B_SEGMENT_RE.test(contextBlob)) {
    score += 2
    reasons.push('clear buyer segment in page copy')
  }

  if (countPaidTiers(config) > 0) {
    score += 1
    reasons.push('paid pricing path exists')
  }

  if (/\b(revenue|hours|manual|lost|cancellations|reports|decision|automation)\b/i.test(contextBlob)) {
    score += 2
    reasons.push('pain point is urgent or operational')
  }

  if (CONSUMER_BROAD_RE.test(contextBlob)) {
    score -= 2
    reasons.push('broad consumer search intent likely noisier')
  }

  return {
    eligible: score >= 4,
    score,
    reasons,
  }
}

function buildInput(config, override = {}) {
  const targetCustomer = override.targetCustomer ?? inferTargetCustomer(config)

  return {
    slug: config.slug,
    productTitle: override.productTitle ?? config.name,
    valueProposition: override.valueProposition ?? config.tagline ?? config.description,
    targetCustomer,
    painPoint: override.painPoint ?? inferPainPoint(config),
    keywordIntent: normalizeKeyword(override.keywordIntent ?? inferKeywordIntent(config)),
    audienceLabel: override.audienceLabel ?? deriveAudienceLabel(targetCustomer, config.name),
    keywordSeeds: override.keywordSeeds ?? [],
    negativeKeywords: override.negativeKeywords ?? [],
    calloutHints: override.calloutHints ?? [],
  }
}

function buildKeywords(config, input) {
  const seeds = unique([
    ...input.keywordSeeds.map(normalizeKeyword),
    input.keywordIntent,
    ...config.seo.keywords.map(normalizeKeyword),
    normalizeKeyword(`${input.audienceLabel} software`),
    normalizeKeyword(`${input.productTitle} software`),
  ]).slice(0, 10)

  return {
    exact: seeds.map((seed) => `[${seed}]`),
    phrase: seeds.map((seed) => `"${seed}"`),
  }
}

function buildNegativeKeywords(input) {
  const { GOOGLE_ADS_DEFAULT_NEGATIVE_KEYWORDS } = loadTsModule(ADS_CONFIG_PATH)
  return unique([
    ...GOOGLE_ADS_DEFAULT_NEGATIVE_KEYWORDS,
    ...input.negativeKeywords,
  ])
}

function buildHeadlines(config, input, override = {}) {
  if (override.rsaHeadlines?.length) {
    return unique(override.rsaHeadlines.map((item) => clamp(item, 30))).slice(0, 15)
  }

  const featureTitles = config.features.map((feature) => feature.title)
  const audienceLabel = input.audienceLabel || input.productTitle
  const keywordTitle = titleCase(input.keywordIntent)

  return unique([
    clamp(keywordTitle, 30),
    clamp(`${input.productTitle} for ${audienceLabel}`, 30),
    clamp(`Built for ${audienceLabel}`, 30),
    clamp(featureTitles[0] ?? `${input.productTitle} Benefits`, 30),
    clamp(featureTitles[1] ?? `${input.productTitle} Features`, 30),
    clamp(featureTitles[2] ?? `${input.productTitle} Results`, 30),
    clamp(`Join ${input.productTitle} Early Access`, 30),
    clamp('Stop Manual Follow-Up', 30),
    clamp('Recover Revenue Faster', 30),
    clamp('Automate Repetitive Work', 30),
    clamp('Fill Open Slots Faster', 30),
    clamp('First Click Gets The Slot', 30),
    clamp('Waitlist Outreach in Seconds', 30),
    clamp('Reduce Costly Empty Slots', 30),
    clamp('Clear Buyer Pain Point', 30),
    clamp('Better Than Manual Workflows', 30),
  ]).slice(0, 15)
}

function buildDescriptions(config, input, override = {}) {
  if (override.descriptions?.length) {
    return unique(override.descriptions.map((item) => clamp(item, 90))).slice(0, 4)
  }

  return unique([
    clamp(input.valueProposition, 90),
    clamp(`Built for ${input.audienceLabel || input.targetCustomer}. ${keywordLabel(input.keywordIntent)}.`, 90),
    clamp('Reduce manual follow-up and recover revenue from missed demand.', 90),
    clamp(`Join the ${input.productTitle} waitlist for early access and launch updates.`, 90),
    clamp(config.seo.description, 90),
  ]).slice(0, 4)
}

function keywordLabel(keywordIntent) {
  return `${titleCase(keywordIntent)} for higher-intent buyers`
}

function buildSitelinks(input, finalUrl, override = {}) {
  if (override.sitelinks?.length) {
    return override.sitelinks.slice(0, 4).map((sitelink) => ({
      linkText: clamp(sitelink.linkText, 25),
      finalUrl: sitelink.path ? `${finalUrl}${sitelink.path}` : finalUrl,
      description1: clamp(sitelink.description1, 35),
      description2: clamp(sitelink.description2, 35),
    }))
  }

  return [
    {
      linkText: clamp(`How ${input.productTitle} Works`, 25),
      finalUrl,
      description1: clamp(input.valueProposition, 35),
      description2: clamp('See the landing page flow', 35),
    },
    {
      linkText: clamp('Join Early Access', 25),
      finalUrl: `${finalUrl}#waitlist`,
      description1: clamp('Get launch updates first', 35),
      description2: clamp('Waitlist CTA on-page', 35),
    },
    {
      linkText: clamp('Main Benefits', 25),
      finalUrl,
      description1: clamp(input.painPoint, 35),
      description2: clamp('Review core value prop', 35),
    },
    {
      linkText: clamp('Pricing Snapshot', 25),
      finalUrl,
      description1: clamp('See paid plan positioning', 35),
      description2: clamp('Useful for buyer intent', 35),
    },
  ]
}

function buildCallouts(config, input, override = {}) {
  if (override.callouts?.length) {
    return unique(override.callouts).map((item) => clamp(item, 25)).slice(0, 6)
  }

  return unique([
    ...input.calloutHints,
    ...config.features.slice(0, 3).map((feature) => feature.title),
    'Early Access',
    'Search Test Ready',
  ]).map((item) => clamp(item, 25)).slice(0, 6)
}

function buildBlueprint(config, override) {
  const selection = scoreConfig(config)
  const input = buildInput(config, override)
  const finalUrl = `${BASE_URL}/${config.slug}`
  const keywords = buildKeywords(config, input)

  return {
    slug: config.slug,
    generatedAt: new Date().toISOString(),
    input: {
      slug: input.slug,
      productTitle: input.productTitle,
      valueProposition: input.valueProposition,
      targetCustomer: input.targetCustomer,
      painPoint: input.painPoint,
      keywordIntent: input.keywordIntent,
      audienceLabel: input.audienceLabel,
    },
    selection,
    campaign_name: `${config.slug}_search_v1`,
    ad_group_name: override.adGroupName ?? `${config.slug}_${slugify(input.keywordIntent).slice(0, 24)}`,
    final_url: finalUrl,
    final_url_suffix: `utm_source=google&utm_medium=cpc&utm_campaign=${config.slug}_search_v1&utm_content=core_rsa&utm_term={keyword}`,
    exact_keywords: keywords.exact,
    phrase_keywords: keywords.phrase,
    negative_keywords: buildNegativeKeywords(input),
    rsa_headlines: buildHeadlines(config, input, override),
    descriptions: buildDescriptions(config, input, override),
    sitelinks: buildSitelinks(input, finalUrl, override),
    callouts: buildCallouts(config, input, override),
  }
}

function writeJson(filePath, value) {
  writeFileSync(filePath, JSON.stringify(value, null, 2) + '\n', 'utf8')
}

function main() {
  const args = parseArgs(process.argv.slice(2))
  const { GOOGLE_ADS_OVERRIDES, GOOGLE_ADS_SEARCH_FIT_RULES } = loadTsModule(ADS_CONFIG_PATH)
  const configs = loadPageConfigs()
  const candidates = configs
    .map((config) => ({
      slug: config.slug,
      productTitle: config.name,
      ...scoreConfig(config),
    }))
    .sort((a, b) => b.score - a.score)

  mkdirSync(GENERATED_DIR, { recursive: true })

  writeJson(resolve(GENERATED_DIR, 'candidates.json'), {
    generatedAt: new Date().toISOString(),
    rules: GOOGLE_ADS_SEARCH_FIT_RULES,
    candidates,
  })

  const selected = args.all
    ? configs
    : configs.filter((config) => {
        if (args.slug) return config.slug === args.slug
        return candidates.find((candidate) => candidate.slug === config.slug)?.eligible
      })

  if (selected.length === 0) {
    throw new Error(args.slug ? `Unknown slug: ${args.slug}` : 'No eligible slugs found')
  }

  for (const config of selected) {
    const blueprint = buildBlueprint(config, GOOGLE_ADS_OVERRIDES[config.slug] ?? {})
    writeJson(resolve(GENERATED_DIR, `${config.slug}.json`), blueprint)
  }

  console.log(`Wrote ${selected.length} Google Ads blueprint(s) to generated/google-ads/`)
  console.log(`Candidate ranking saved to generated/google-ads/candidates.json`)
}

main()
