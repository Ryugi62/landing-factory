#!/usr/bin/env node

import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = resolve(__dirname, '..')
const GENERATED_DIR = resolve(ROOT, 'generated/google-ads')

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

function readBlueprint(slug) {
  const filePath = resolve(GENERATED_DIR, `${slug}.json`)
  if (!existsSync(filePath)) {
    fail(`Blueprint not found: ${filePath}\nRun: npm run ads:blueprint -- --slug ${slug}`)
  }
  return JSON.parse(readFileSync(filePath, 'utf8'))
}

function renderList(items) {
  return items.map((item) => `- ${item}`).join('\n')
}

function renderSitelinks(sitelinks) {
  return sitelinks.map((sitelink, index) => {
    return [
      `### ${index + 1}. ${sitelink.linkText}`,
      `- Final URL: ${sitelink.finalUrl}`,
      `- Description 1: ${sitelink.description1}`,
      `- Description 2: ${sitelink.description2}`,
    ].join('\n')
  }).join('\n\n')
}

function renderBlueprint(blueprint) {
  return [
    `# Google Ads Export: ${blueprint.slug}`,
    '',
    '## Campaign',
    `- Campaign name: ${blueprint.campaign_name}`,
    `- Ad group name: ${blueprint.ad_group_name}`,
    `- Final URL: ${blueprint.final_url}`,
    `- Final URL suffix: ${blueprint.final_url_suffix}`,
    '',
    '## Recommended Daily Budget',
    '- Small-test recommendation: start with a low daily budget and one slug only.',
    '- Keep the first run narrow until search terms and CTR are visible.',
    '',
    '## Exact Keywords',
    renderList(blueprint.exact_keywords),
    '',
    '## Phrase Keywords',
    renderList(blueprint.phrase_keywords),
    '',
    '## Negative Keywords',
    renderList(blueprint.negative_keywords),
    '',
    '## RSA Headlines',
    renderList(blueprint.rsa_headlines),
    '',
    '## Descriptions',
    renderList(blueprint.descriptions),
    '',
    '## Sitelinks',
    renderSitelinks(blueprint.sitelinks),
    '',
    '## Callouts',
    renderList(blueprint.callouts),
    '',
    '## Notes',
    '- Use the slug URL, not the root URL.',
    '- Turn on Google Ads auto-tagging.',
    '- Start with exact and phrase match first.',
    '- Add broad match later only after reviewing search terms.',
    '- In a small-budget test, activate one slug before expanding.',
    '',
    '## Final Checklist',
    '- [ ] Final URL points to the slug page.',
    '- [ ] Final URL suffix is pasted into the ad.',
    '- [ ] Auto-tagging is enabled in Google Ads.',
    '- [ ] Exact and phrase keywords are added first.',
    '- [ ] Negative keywords are pasted before launch.',
    '- [ ] Headlines and descriptions were reviewed for tone and accuracy.',
    '- [ ] Only one slug campaign is enabled for the first test.',
    '',
  ].join('\n')
}

function main() {
  const { slug } = parseArgs(process.argv.slice(2))
  if (!slug) fail('Usage: npm run ads:export -- --slug <slug>')

  mkdirSync(GENERATED_DIR, { recursive: true })

  const blueprint = readBlueprint(slug)
  const markdown = renderBlueprint(blueprint)
  const outputPath = resolve(GENERATED_DIR, `${slug}.md`)
  writeFileSync(outputPath, markdown, 'utf8')

  console.log(`Wrote ${outputPath}`)
}

main()
