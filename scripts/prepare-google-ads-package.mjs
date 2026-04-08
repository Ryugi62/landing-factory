#!/usr/bin/env node

import { existsSync, readFileSync } from 'fs'
import { execSync } from 'child_process'
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

function runStep(label, command) {
  process.stdout.write(`\n[ads:prepare] ${label}\n`)
  try {
    execSync(command, { cwd: ROOT, stdio: 'inherit' })
  } catch (error) {
    fail(`[ads:prepare] Failed at step: ${label}\nCommand: ${command}\n${error.message}`)
  }
}

function readLaunchReadiness(slug) {
  const reportPath = resolve(GENERATED_DIR, `${slug}.report.md`)
  if (!existsSync(reportPath)) return 'UNKNOWN'

  const report = readFileSync(reportPath, 'utf8')
  const match = report.match(/Launch readiness:\s+\*\*(.+?)\*\*/)
  return match?.[1] ?? 'UNKNOWN'
}

function summarizeFiles(slug) {
  const files = [
    `${slug}.json`,
    `${slug}.md`,
    `${slug}.campaign.csv`,
    `${slug}.keywords.csv`,
    `${slug}.rsa.csv`,
    `${slug}.assets.csv`,
    `${slug}.report.md`,
  ]

  const summary = files.map((file) => {
    const filePath = resolve(GENERATED_DIR, file)
    return {
      file,
      exists: existsSync(filePath),
    }
  })

  return summary
}

function main() {
  const { slug } = parseArgs(process.argv.slice(2))
  if (!slug) fail('Usage: npm run ads:prepare -- --slug <slug>')

  runStep('Generate blueprint JSON', `npm run ads:blueprint -- --slug ${slug}`)
  runStep('Generate markdown export', `npm run ads:export -- --slug ${slug}`)
  runStep('Generate Editor CSV files', `npm run ads:editor-export -- --slug ${slug}`)
  runStep('Generate validation report', `npm run ads:validate -- --slug ${slug}`)

  const files = summarizeFiles(slug)
  const readiness = readLaunchReadiness(slug)

  process.stdout.write('\n[ads:prepare] Generated files\n')
  for (const item of files) {
    process.stdout.write(`- ${item.exists ? 'OK' : 'MISSING'} ${item.file}\n`)
  }

  process.stdout.write(`\n[ads:prepare] Launch readiness: ${readiness}\n`)
}

main()
