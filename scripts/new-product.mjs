#!/usr/bin/env node
/**
 * new-product.mjs — Landing Factory product generator
 *
 * Usage:
 *   node scripts/new-product.mjs --from build.json
 *   node scripts/new-product.mjs --from build.json --dry-run
 *   cat build.json | node scripts/new-product.mjs
 *
 * Input: JSON matching PageConfig (src/config/type.ts)
 * Output: src/config/pages/{slug}.ts + src/config/index.ts update + build check
 */

import { readFileSync, writeFileSync, existsSync } from 'fs'
import { execSync } from 'child_process'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = resolve(__dirname, '..')
const DRY_RUN = process.argv.includes('--dry-run')

// ─── helpers ────────────────────────────────────────────────────────────────

function fail(msg) {
  console.error(`\n❌  ${msg}\n`)
  process.exit(1)
}

function warn(msg) {
  console.warn(`⚠️   ${msg}`)
}

/** Escape and single-quote a string value for TypeScript source */
function s(val) {
  return `'${String(val).replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`
}

/** Convert hyphenated slug to a valid JS identifier (hyphens → underscores) */
function slugToVar(slug) {
  return slug.replace(/-/g, '_')
}

// ─── read input ─────────────────────────────────────────────────────────────

let raw
const fromIdx = process.argv.indexOf('--from')
if (fromIdx !== -1) {
  const file = process.argv[fromIdx + 1]
  if (!file || file.startsWith('--')) fail('--from requires a file path')
  const filePath = resolve(process.cwd(), file)
  if (!existsSync(filePath)) fail(`File not found: ${filePath}`)
  raw = readFileSync(filePath, 'utf8')
} else {
  // Try stdin (non-interactive)
  try {
    raw = readFileSync(0, 'utf8') // fd 0 = stdin
  } catch {
    fail('Provide input via --from <file> or stdin.\nSee scripts/example-build-artifact.json for the expected format.')
  }
}

let config
try {
  config = JSON.parse(raw)
} catch (e) {
  fail(`Invalid JSON: ${e.message}`)
}

// ─── validate ───────────────────────────────────────────────────────────────

const REQUIRED_TOP = ['slug', 'name', 'tagline', 'description', 'theme', 'hero', 'problems', 'features', 'pricing', 'cta', 'seo']
const REQUIRED_THEME = ['accent', 'emoji']
const REQUIRED_HERO = ['badge', 'title', 'titleHighlight', 'subtitle', 'cta']
const REQUIRED_SEO = ['title', 'description', 'keywords']
const VALID_VARIANTS = ['warm', 'clinical', 'bold', 'minimal']
const VALID_ACCENTS = ['rose', 'violet', 'blue', 'emerald', 'orange', 'amber', 'pink', 'indigo']

for (const f of REQUIRED_TOP) {
  if (config[f] == null) fail(`Missing required field: "${f}"`)
}
for (const f of REQUIRED_THEME) {
  if (!config.theme[f]) fail(`Missing required field: theme.${f}`)
}
for (const f of REQUIRED_HERO) {
  if (!config.hero[f]) fail(`Missing required field: hero.${f}`)
}
for (const f of REQUIRED_SEO) {
  if (!config.seo[f]) fail(`Missing required field: seo.${f}`)
}

if (!Array.isArray(config.problems) || config.problems.length === 0) fail('"problems" must be a non-empty array')
if (!Array.isArray(config.features) || config.features.length === 0) fail('"features" must be a non-empty array')
if (!Array.isArray(config.pricing) || config.pricing.length === 0) fail('"pricing" must be a non-empty array')
if (!Array.isArray(config.seo.keywords) || config.seo.keywords.length === 0) fail('"seo.keywords" must be a non-empty array')

if (!/^[a-z0-9-]+$/.test(config.slug)) fail(`slug must be lowercase alphanumeric with hyphens only, got: "${config.slug}"`)
if (config.variant && !VALID_VARIANTS.includes(config.variant)) fail(`variant must be one of: ${VALID_VARIANTS.join(', ')}`)
if (!VALID_ACCENTS.includes(config.theme.accent)) fail(`theme.accent must be one of: ${VALID_ACCENTS.join(', ')}`)

for (const p of config.problems) {
  if (!p.icon || !p.title || !p.desc) fail(`Each problem needs: icon, title, desc`)
}
for (const f of config.features) {
  if (!f.icon || !f.title || !f.desc) fail(`Each feature needs: icon, title, desc`)
}
for (const p of config.pricing) {
  if (!p.name || !p.price || !p.period || !Array.isArray(p.features) || p.highlight == null) {
    fail(`Each pricing entry needs: name, price, period, features (array), highlight (boolean)`)
  }
}

// Warn about thin content
const warnings = []
if (config.problems.length < 3) warnings.push(`Only ${config.problems.length} problem(s) — 3 recommended`)
if (config.features.length < 3) warnings.push(`Only ${config.features.length} feature(s) — 3 recommended`)
if (config.pricing.length < 2) warnings.push(`Only ${config.pricing.length} pricing tier(s) — at least 2 recommended`)
if (!config.variant) warnings.push(`No variant set — will use default styling`)
if (config.seo.keywords.length < 3) warnings.push(`Only ${config.seo.keywords.length} SEO keyword(s) — 3+ recommended`)

const { slug } = config
const varName = slugToVar(slug)

// ─── conflict check ──────────────────────────────────────────────────────────

const configPath = resolve(ROOT, `src/config/pages/${slug}.ts`)
if (existsSync(configPath)) fail(`Slug "${slug}" already exists: src/config/pages/${slug}.ts\nDelete it first if you want to regenerate.`)

const indexPath = resolve(ROOT, 'src/config/index.ts')
const indexContent = readFileSync(indexPath, 'utf8')
if (indexContent.includes(`'./pages/${slug}'`) || indexContent.includes(`"./pages/${slug}"`)) {
  fail(`Slug "${slug}" is already registered in src/config/index.ts`)
}

// ─── generate TypeScript config file ────────────────────────────────────────

const problems = config.problems.map(p => `    {
      icon: ${s(p.icon)},
      title: ${s(p.title)},
      desc: ${s(p.desc)},
    }`).join(',\n')

const features = config.features.map(f => {
  const badge = f.badge ? `\n      badge: ${s(f.badge)},` : ''
  return `    {
      icon: ${s(f.icon)},
      title: ${s(f.title)},
      desc: ${s(f.desc)},${badge}
    }`
}).join(',\n')

const pricing = config.pricing.map(p => {
  const features = p.features.map(f => s(f)).join(', ')
  return `    {
      name: ${s(p.name)},
      price: ${s(p.price)},
      period: ${s(p.period)},
      features: [${features}],
      highlight: ${p.highlight},
    }`
}).join(',\n')

const variantLine = config.variant ? `\n  variant: ${s(config.variant)},` : ''

const tsContent = `import type { PageConfig } from '@/config/type'

export const config: PageConfig = {
  slug: ${s(slug)},
  name: ${s(config.name)},
  tagline: ${s(config.tagline)},
  description: ${s(config.description)},${variantLine}
  theme: {
    accent: ${s(config.theme.accent)},
    emoji: ${s(config.theme.emoji)},
  },
  hero: {
    badge: ${s(config.hero.badge)},
    title: ${s(config.hero.title)},
    titleHighlight: ${s(config.hero.titleHighlight)},
    subtitle: ${s(config.hero.subtitle)},
    cta: ${s(config.hero.cta)},
  },
  problems: [
${problems}
  ],
  features: [
${features}
  ],
  pricing: [
${pricing}
  ],
  cta: {
    title: ${s(config.cta.title)},
    subtitle: ${s(config.cta.subtitle)},
  },
  seo: {
    title: ${s(config.seo.title)},
    description: ${s(config.seo.description)},
    keywords: [${config.seo.keywords.map(k => s(k)).join(', ')}],
  },
}
`

// ─── generate updated index.ts ────────────────────────────────────────────────

const importLine = `import { config as ${varName} } from './pages/${slug}'`

// Insert after the last existing import line
const lines = indexContent.split('\n')
let lastImportLineIdx = -1
for (let i = 0; i < lines.length; i++) {
  if (lines[i].startsWith('import ')) lastImportLineIdx = i
}

if (lastImportLineIdx === -1) fail('Could not find any import lines in src/config/index.ts')

lines.splice(lastImportLineIdx + 1, 0, importLine)
let newIndex = lines.join('\n')

// Append to ALL_CONFIGS array
newIndex = newIndex.replace(
  /export const ALL_CONFIGS: PageConfig\[\] = \[([^\]]+)\]/,
  (match, inner) => `export const ALL_CONFIGS: PageConfig[] = [${inner.trimEnd()}, ${varName}]`
)

if (!newIndex.includes(varName + ']') && !newIndex.includes(`, ${varName}]`)) {
  fail('Could not insert into ALL_CONFIGS array — check src/config/index.ts format')
}

// ─── dry-run output ──────────────────────────────────────────────────────────

if (DRY_RUN) {
  console.log('━━━  DRY RUN — no files written  ━━━\n')
  if (warnings.length) {
    warnings.forEach(w => warn(w))
    console.log()
  }
  console.log(`── src/config/pages/${slug}.ts ──────────────────────\n`)
  console.log(tsContent)
  console.log(`── src/config/index.ts (additions) ──────────────────`)
  console.log(`  + ${importLine}`)
  console.log(`  + ${varName} appended to ALL_CONFIGS\n`)
  console.log('Run without --dry-run to apply.')
  process.exit(0)
}

// ─── write files ─────────────────────────────────────────────────────────────

writeFileSync(configPath, tsContent, 'utf8')
console.log(`✅  Created:  src/config/pages/${slug}.ts`)

writeFileSync(indexPath, newIndex, 'utf8')
console.log(`✅  Updated:  src/config/index.ts`)

if (warnings.length) {
  console.log()
  warnings.forEach(w => warn(w))
}

// ─── build check ─────────────────────────────────────────────────────────────

console.log('\n⏳  Running build check (next build)...\n')
try {
  execSync('npm run build', { cwd: ROOT, stdio: 'inherit', timeout: 120_000 })
} catch {
  console.error('\n❌  Build failed — config was written but has errors.')
  console.error('    Fix the errors above, or delete and regenerate:')
  console.error(`    rm src/config/pages/${slug}.ts && git checkout src/config/index.ts\n`)
  process.exit(1)
}

// ─── summary ─────────────────────────────────────────────────────────────────

const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://landing-factory-163.pages.dev'

console.log(`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✅  ${config.name} is ready for review

Files changed:
  • src/config/pages/${slug}.ts  ← new
  • src/config/index.ts          ← updated

Preview URL (after push):
  ${appUrl}/${slug}

Review, then deploy:

  git add src/config/pages/${slug}.ts src/config/index.ts
  git commit -m "feat: add ${slug} landing"
  git push

Cloudflare Pages will auto-deploy on push.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`)
