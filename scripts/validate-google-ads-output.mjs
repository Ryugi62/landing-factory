#!/usr/bin/env node

import { existsSync, readFileSync, writeFileSync } from 'fs'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = resolve(__dirname, '..')
const GENERATED_DIR = resolve(ROOT, 'generated/google-ads')
const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://landing-factory-163.pages.dev'

function parseArgs(argv) {
  const parsed = { slug: null }
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === '--slug') parsed.slug = argv[i + 1] ?? null
  }
  return parsed
}

function fail(message) {
  console.error(message)
  process.exit(1)
}

function readJson(filePath) {
  return JSON.parse(readFileSync(filePath, 'utf8'))
}

function stripKeywordDecorators(keyword) {
  return String(keyword).trim().replace(/^\[/, '').replace(/\]$/, '').replace(/^"/, '').replace(/"$/, '')
}

function makeFinding(level, title, detail, fix) {
  return { level, title, detail, fix }
}

function validateBlueprint(slug, blueprint) {
  const findings = []
  const expectedSlugUrl = `${BASE_URL}/${slug}`

  if (!blueprint.campaign_name?.trim()) {
    findings.push(makeFinding('FAIL', 'Campaign name missing', 'campaign_name is empty.', 'Set a non-empty campaign_name before launch.'))
  }

  if (!blueprint.ad_group_name?.trim()) {
    findings.push(makeFinding('FAIL', 'Ad group name missing', 'ad_group_name is empty.', 'Set a non-empty ad_group_name before launch.'))
  }

  if (blueprint.final_url === BASE_URL || blueprint.final_url === `${BASE_URL}/`) {
    findings.push(makeFinding('FAIL', 'Root URL used', `final_url is ${blueprint.final_url}.`, 'Use the slug landing page, not the root URL.'))
  } else if (blueprint.final_url !== expectedSlugUrl) {
    findings.push(makeFinding('WARN', 'Final URL differs from expected slug URL', `Expected ${expectedSlugUrl} but got ${blueprint.final_url}.`, 'Confirm this is the intended landing page.'))
  } else {
    findings.push(makeFinding('PASS', 'Final URL uses slug page', blueprint.final_url, 'No action needed.'))
  }

  if (!blueprint.final_url_suffix?.trim()) {
    findings.push(makeFinding('FAIL', 'Final URL suffix missing', 'final_url_suffix is empty.', 'Add UTM suffix before launch.'))
  } else {
    findings.push(makeFinding('PASS', 'Final URL suffix present', blueprint.final_url_suffix, 'No action needed.'))
  }

  findings.push(makeFinding(
    blueprint.exact_keywords.length > 0 ? 'PASS' : 'FAIL',
    'Exact keyword count',
    `${blueprint.exact_keywords.length} exact keyword(s)`,
    blueprint.exact_keywords.length > 0 ? 'No action needed.' : 'Add at least one exact keyword.',
  ))
  findings.push(makeFinding(
    blueprint.phrase_keywords.length > 0 ? 'PASS' : 'FAIL',
    'Phrase keyword count',
    `${blueprint.phrase_keywords.length} phrase keyword(s)`,
    blueprint.phrase_keywords.length > 0 ? 'No action needed.' : 'Add at least one phrase keyword.',
  ))
  findings.push(makeFinding(
    blueprint.negative_keywords.length > 0 ? 'PASS' : 'WARN',
    'Negative keyword count',
    `${blueprint.negative_keywords.length} negative keyword(s)`,
    blueprint.negative_keywords.length > 0 ? 'No action needed.' : 'Consider adding negative keywords before launch.',
  ))

  const keywordCounts = new Map()
  const allKeywords = [...blueprint.exact_keywords, ...blueprint.phrase_keywords].map(stripKeywordDecorators)
  for (const keyword of allKeywords) {
    keywordCounts.set(keyword, (keywordCounts.get(keyword) || 0) + 1)
  }
  const duplicates = [...keywordCounts.entries()].filter(([, count]) => count > 1).map(([keyword]) => keyword)
  findings.push(makeFinding(
    duplicates.length === 0 ? 'PASS' : 'WARN',
    'Duplicate keyword check',
    duplicates.length === 0 ? 'No duplicate exact/phrase keywords found.' : `Duplicate keyword(s): ${duplicates.join(', ')}`,
    duplicates.length === 0 ? 'No action needed.' : 'Remove unnecessary duplicates if match-type overlap is not intentional.',
  ))

  const longHeadlines = blueprint.rsa_headlines.filter((headline) => headline.length > 30)
  findings.push(makeFinding(
    blueprint.rsa_headlines.length === 15 && longHeadlines.length === 0 ? 'PASS' : longHeadlines.length > 0 ? 'FAIL' : 'WARN',
    'RSA headlines',
    `${blueprint.rsa_headlines.length} headline(s), ${longHeadlines.length} over 30 chars`,
    longHeadlines.length === 0 ? 'No action needed.' : `Trim these headlines: ${longHeadlines.join(' | ')}`,
  ))

  const longDescriptions = blueprint.descriptions.filter((description) => description.length > 90)
  findings.push(makeFinding(
    blueprint.descriptions.length === 4 && longDescriptions.length === 0 ? 'PASS' : longDescriptions.length > 0 ? 'FAIL' : 'WARN',
    'Descriptions',
    `${blueprint.descriptions.length} description(s), ${longDescriptions.length} over 90 chars`,
    longDescriptions.length === 0 ? 'No action needed.' : `Trim these descriptions: ${longDescriptions.join(' | ')}`,
  ))

  const sitelinkIssues = blueprint.sitelinks
    .map((sitelink, index) => ({ sitelink, index }))
    .filter(({ sitelink }) => !sitelink.linkText || !sitelink.finalUrl || !sitelink.description1 || !sitelink.description2)
  findings.push(makeFinding(
    blueprint.sitelinks.length > 0 && sitelinkIssues.length === 0 ? 'PASS' : sitelinkIssues.length > 0 ? 'FAIL' : 'WARN',
    'Sitelinks',
    `${blueprint.sitelinks.length} sitelink(s), ${sitelinkIssues.length} incomplete`,
    sitelinkIssues.length === 0 ? 'No action needed.' : 'Fill all sitelink text, URL, and description fields.',
  ))

  const longCallouts = blueprint.callouts.filter((callout) => callout.length > 25)
  findings.push(makeFinding(
    blueprint.callouts.length > 0 && longCallouts.length === 0 ? 'PASS' : longCallouts.length > 0 ? 'FAIL' : 'WARN',
    'Callouts',
    `${blueprint.callouts.length} callout(s), ${longCallouts.length} over 25 chars`,
    longCallouts.length === 0 ? 'No action needed.' : `Trim these callouts: ${longCallouts.join(' | ')}`,
  ))

  return findings
}

function validateFiles(slug) {
  const requiredFiles = [
    `${slug}.campaign.csv`,
    `${slug}.keywords.csv`,
    `${slug}.rsa.csv`,
    `${slug}.assets.csv`,
  ]

  return requiredFiles.map((file) => {
    const filePath = resolve(GENERATED_DIR, file)
    return existsSync(filePath)
      ? makeFinding('PASS', `File present: ${file}`, filePath, 'No action needed.')
      : makeFinding('FAIL', `File missing: ${file}`, filePath, `Run npm run ads:editor-export -- --slug ${slug}`)
  })
}

function summarize(findings) {
  const counts = { PASS: 0, WARN: 0, FAIL: 0 }
  for (const finding of findings) counts[finding.level]++

  const readiness = counts.FAIL > 0
    ? 'NOT READY'
    : counts.WARN > 0
      ? 'READY WITH WARNINGS'
      : 'READY'

  return { counts, readiness }
}

function renderReport(slug, findings, summary) {
  const sections = ['PASS', 'WARN', 'FAIL']
  const lines = [
    `# Google Ads Validation Report: ${slug}`,
    '',
    `- Launch readiness: **${summary.readiness}**`,
    `- PASS: ${summary.counts.PASS}`,
    `- WARN: ${summary.counts.WARN}`,
    `- FAIL: ${summary.counts.FAIL}`,
    '',
  ]

  for (const level of sections) {
    const items = findings.filter((finding) => finding.level === level)
    if (items.length === 0) continue
    lines.push(`## ${level}`)
    for (const item of items) {
      lines.push(`### ${item.title}`)
      lines.push(`- Detail: ${item.detail}`)
      lines.push(`- Action: ${item.fix}`)
      lines.push('')
    }
  }

  lines.push('## Launch Readiness Summary')
  if (summary.readiness === 'READY') {
    lines.push('- No blocking issues found.')
    lines.push('- You can move to manual upload after final human review.')
  } else if (summary.readiness === 'READY WITH WARNINGS') {
    lines.push('- No hard blockers found, but review warnings before upload.')
    lines.push('- Launch is possible if the warnings are intentional.')
  } else {
    lines.push('- Blocking issues were found.')
    lines.push('- Fix FAIL items before uploading to Google Ads Editor or the Google Ads UI.')
  }
  lines.push('')
  lines.push('## Final Human Check')
  lines.push('- [ ] Final URL points to the correct slug page.')
  lines.push('- [ ] Final URL suffix is preserved in campaign/ad import.')
  lines.push('- [ ] Keyword match types are mapped correctly in Editor.')
  lines.push('- [ ] Negative keywords are intentionally scoped.')
  lines.push('- [ ] Headlines and descriptions still match the landing page promise.')
  lines.push('- [ ] Only one slug is enabled for the first live test if budget is small.')
  lines.push('')

  return lines.join('\n')
}

function main() {
  const { slug } = parseArgs(process.argv.slice(2))
  if (!slug) fail('Usage: npm run ads:validate -- --slug <slug>')

  const blueprintPath = resolve(GENERATED_DIR, `${slug}.json`)
  if (!existsSync(blueprintPath)) {
    fail(`Blueprint not found: ${blueprintPath}\nRun: npm run ads:blueprint -- --slug ${slug}`)
  }

  const blueprint = readJson(blueprintPath)
  const findings = [
    ...validateBlueprint(slug, blueprint),
    ...validateFiles(slug),
  ]
  const summary = summarize(findings)
  const report = renderReport(slug, findings, summary)
  const outputPath = resolve(GENERATED_DIR, `${slug}.report.md`)

  writeFileSync(outputPath, report, 'utf8')
  console.log(`Wrote ${outputPath}`)
}

main()
