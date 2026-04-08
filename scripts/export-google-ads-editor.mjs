#!/usr/bin/env node

import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'fs'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = resolve(__dirname, '..')
const GENERATED_DIR = resolve(ROOT, 'generated/google-ads')

function parseArgs(argv) {
  const parsed = { slug: null, all: false }
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === '--slug') parsed.slug = argv[i + 1] ?? null
    if (argv[i] === '--all') parsed.all = true
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

function getBlueprintPath(slug) {
  return resolve(GENERATED_DIR, `${slug}.json`)
}

function getSelectedBlueprints({ slug, all }) {
  if (slug) {
    const filePath = getBlueprintPath(slug)
    if (!existsSync(filePath)) {
      fail(`Blueprint not found: ${filePath}\nRun: npm run ads:blueprint -- --slug ${slug}`)
    }
    return [readJson(filePath)]
  }

  if (all) {
    const files = readdirSync(GENERATED_DIR)
      .filter((file) => file.endsWith('.json') && file !== 'candidates.json')
      .sort()
    if (files.length === 0) {
      fail('No blueprint JSON files found. Run ads:blueprint first.')
    }
    return files.map((file) => readJson(resolve(GENERATED_DIR, file)))
  }

  fail('Usage: npm run ads:editor-export -- --slug <slug>\n   or: npm run ads:editor-export -- --all')
}

function escapeCsv(value) {
  const stringValue = value == null ? '' : String(value)
  if (/[",\n]/.test(stringValue)) {
    return `"${stringValue.replace(/"/g, '""')}"`
  }
  return stringValue
}

function toCsv(headers, rows) {
  const lines = [headers.map(escapeCsv).join(',')]
  for (const row of rows) {
    lines.push(headers.map((header) => escapeCsv(row[header] ?? '')).join(','))
  }
  return lines.join('\n') + '\n'
}

function writeCsv(filePath, headers, rows) {
  writeFileSync(filePath, toCsv(headers, rows), 'utf8')
}

function normalizeBulkKeyword(keyword) {
  return String(keyword).replace(/^\[/, '').replace(/\]$/, '').replace(/^"/, '').replace(/"$/, '')
}

function buildCampaignRows(blueprint) {
  return [{
    Campaign: blueprint.campaign_name,
    'Ad Group': blueprint.ad_group_name,
    'Final URL': blueprint.final_url,
    'Final URL Suffix': blueprint.final_url_suffix,
  }]
}

function buildKeywordRows(blueprint) {
  const exactRows = blueprint.exact_keywords.map((keyword) => ({
    Campaign: blueprint.campaign_name,
    'Ad Group': blueprint.ad_group_name,
    Keyword: normalizeBulkKeyword(keyword),
    'Match Type': 'Exact',
    Negative: 'No',
  }))

  const phraseRows = blueprint.phrase_keywords.map((keyword) => ({
    Campaign: blueprint.campaign_name,
    'Ad Group': blueprint.ad_group_name,
    Keyword: normalizeBulkKeyword(keyword),
    'Match Type': 'Phrase',
    Negative: 'No',
  }))

  const negativeRows = blueprint.negative_keywords.map((keyword) => ({
    Campaign: blueprint.campaign_name,
    'Ad Group': blueprint.ad_group_name,
    Keyword: keyword,
    'Match Type': 'Negative',
    Negative: 'Yes',
  }))

  return [...exactRows, ...phraseRows, ...negativeRows]
}

function buildRsaRows(blueprint) {
  const row = {
    Campaign: blueprint.campaign_name,
    'Ad Group': blueprint.ad_group_name,
    'Final URL': blueprint.final_url,
    'Final URL Suffix': blueprint.final_url_suffix,
  }

  for (let i = 0; i < 15; i++) {
    row[`Headline ${i + 1}`] = blueprint.rsa_headlines[i] ?? ''
  }

  for (let i = 0; i < 4; i++) {
    row[`Description ${i + 1}`] = blueprint.descriptions[i] ?? ''
  }

  return [row]
}

function buildAssetRows(blueprint) {
  const sitelinkRows = blueprint.sitelinks.map((sitelink, index) => ({
    Campaign: blueprint.campaign_name,
    'Ad Group': blueprint.ad_group_name,
    'Asset Type': 'Sitelink',
    Name: sitelink.linkText,
    Text: sitelink.linkText,
    'Final URL': sitelink.finalUrl,
    'Description 1': sitelink.description1,
    'Description 2': sitelink.description2,
    Position: index + 1,
  }))

  const calloutRows = blueprint.callouts.map((callout, index) => ({
    Campaign: blueprint.campaign_name,
    'Ad Group': blueprint.ad_group_name,
    'Asset Type': 'Callout',
    Name: `Callout ${index + 1}`,
    Text: callout,
    'Final URL': '',
    'Description 1': '',
    'Description 2': '',
    Position: index + 1,
  }))

  return [...sitelinkRows, ...calloutRows]
}

function exportBlueprint(blueprint) {
  const basePath = resolve(GENERATED_DIR, blueprint.slug)

  writeCsv(
    `${basePath}.campaign.csv`,
    ['Campaign', 'Ad Group', 'Final URL', 'Final URL Suffix'],
    buildCampaignRows(blueprint),
  )

  writeCsv(
    `${basePath}.keywords.csv`,
    ['Campaign', 'Ad Group', 'Keyword', 'Match Type', 'Negative'],
    buildKeywordRows(blueprint),
  )

  writeCsv(
    `${basePath}.rsa.csv`,
    [
      'Campaign',
      'Ad Group',
      'Final URL',
      'Final URL Suffix',
      'Headline 1',
      'Headline 2',
      'Headline 3',
      'Headline 4',
      'Headline 5',
      'Headline 6',
      'Headline 7',
      'Headline 8',
      'Headline 9',
      'Headline 10',
      'Headline 11',
      'Headline 12',
      'Headline 13',
      'Headline 14',
      'Headline 15',
      'Description 1',
      'Description 2',
      'Description 3',
      'Description 4',
    ],
    buildRsaRows(blueprint),
  )

  writeCsv(
    `${basePath}.assets.csv`,
    ['Campaign', 'Ad Group', 'Asset Type', 'Name', 'Text', 'Final URL', 'Description 1', 'Description 2', 'Position'],
    buildAssetRows(blueprint),
  )
}

function main() {
  mkdirSync(GENERATED_DIR, { recursive: true })

  const blueprints = getSelectedBlueprints(parseArgs(process.argv.slice(2)))
  for (const blueprint of blueprints) {
    exportBlueprint(blueprint)
    console.log(`Wrote CSV files for ${blueprint.slug}`)
  }
}

main()
