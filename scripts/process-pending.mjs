#!/usr/bin/env node
/**
 * process-pending.mjs — AUTO-BRIDGE: Ada BUILD verdict → landing-factory
 *
 * Scans scripts/pending/ for *.json artifacts written by Ada's BUILD verdict.
 * For each: runs new-product.mjs → git commits → reports result.
 *
 * Usage (Ada calls this automatically):
 *   node scripts/process-pending.mjs
 *   node scripts/process-pending.mjs --push   # push + wait for CF Pages to go live
 *
 * Manual usage:
 *   npm run process-pending
 *   npm run process-pending -- --push
 */

import { readdirSync, renameSync, existsSync, mkdirSync, readFileSync } from 'fs'
import { execSync } from 'child_process'
import { resolve, dirname, basename } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT       = resolve(__dirname, '..')
const PENDING    = resolve(__dirname, 'pending')
const PROCESSED  = resolve(__dirname, 'processed')
const FAILED_DIR = resolve(__dirname, 'failed')
const PUSH       = process.argv.includes('--push')
const AUTHOR     = 'Ryugi62 <66805752+Ryugi62@users.noreply.github.com>'

// ─── verification ────────────────────────────────────────────────────────────

/**
 * Polls a URL until it returns HTTP 2xx, or times out.
 * Returns { live: true } or { live: false, reason: '...' }.
 */
async function waitForDeploy(url, { timeoutMs = 90_000, intervalMs = 10_000 } = {}) {
  const deadline = Date.now() + timeoutMs
  let attempts = 0
  while (Date.now() < deadline) {
    try {
      const res = await fetch(url, { method: 'HEAD', redirect: 'follow' })
      if (res.ok) return { live: true, attempts }
    } catch {
      // network error — CF Pages build still in progress, keep polling
    }
    attempts++
    const remaining = Math.round((deadline - Date.now()) / 1000)
    process.stdout.write(`\r    Waiting for CF Pages... (${remaining}s remaining, ${attempts} checks)`)
    await new Promise(r => setTimeout(r, intervalMs))
  }
  process.stdout.write('\n')
  return { live: false, reason: `not responding after ${timeoutMs / 1000}s — check CF Pages dashboard for build status` }
}

// ─── setup ────────────────────────────────────────────────────────────────────

for (const dir of [PENDING, PROCESSED, FAILED_DIR]) {
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true })
}

// ─── scan pending ────────────────────────────────────────────────────────────

const files = readdirSync(PENDING).filter(f => f.endsWith('.json'))

if (files.length === 0) {
  console.log('[process-pending] No pending artifacts.')
  process.exit(0)
}

console.log(`[process-pending] ${files.length} artifact(s) to process.\n`)

const results = []

for (const file of files) {
  // Slug comes from inside the JSON, not the filename
  let slug
  try {
    const json = JSON.parse(readFileSync(resolve(PENDING, file), 'utf8'))
    slug = json.slug
    if (!slug) throw new Error('missing "slug" field in JSON')
  } catch (err) {
    console.error(`❌  ${file}: cannot read slug — ${err.message}`)
    try { renameSync(resolve(PENDING, file), resolve(FAILED_DIR, file)) } catch {}
    results.push({ slug: basename(file, '.json'), status: 'fail', reason: err.message })
    continue
  }

  console.log(`━━━  ${slug}  ━━━`)

  try {
    // Generate config + build check
    execSync(
      `node scripts/new-product.mjs --from scripts/pending/${file}`,
      { cwd: ROOT, stdio: 'inherit', timeout: 120_000 }
    )

    // Commit the two changed files
    execSync(
      `git add src/config/pages/${slug}.ts src/config/index.ts`,
      { cwd: ROOT, stdio: 'pipe' }
    )
    execSync(
      `git commit --author="${AUTHOR}" -m "feat: add ${slug} landing [auto]"`,
      { cwd: ROOT, stdio: 'pipe' }
    )

    renameSync(resolve(PENDING, file), resolve(PROCESSED, file))
    results.push({ slug, status: 'ok' })

  } catch (err) {
    // Move artifact to failed — never silently discard
    try { renameSync(resolve(PENDING, file), resolve(FAILED_DIR, file)) } catch {}
    const msg = err.stderr ? err.stderr.toString().trim().split('\n')[0] : err.message
    results.push({ slug, status: 'fail', reason: msg })
    console.error(`\n❌  ${slug} failed: ${msg}\n`)
  }
}

// ─── push + verified deploy check ────────────────────────────────────────────

const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://landing-factory-163.pages.dev'
const ok = results.filter(r => r.status === 'ok')
const failed = results.filter(r => r.status === 'fail')

if (PUSH && ok.length > 0) {
  // Push source to GitHub for version tracking
  console.log('\n⏳  Pushing source to GitHub...')
  try {
    execSync('git push', { cwd: ROOT, stdio: 'inherit' })
    console.log('✅  Source pushed')
  } catch (err) {
    // Non-fatal: deployment proceeds regardless
    console.warn(`⚠️   git push failed (non-fatal): ${err.message}`)
  }

  // Deploy directly to CF Pages — no GitHub webhook dependency
  console.log('\n⏳  Deploying to Cloudflare Pages...')
  let wranglerOk = false
  try {
    execSync(
      'npx wrangler pages deploy out/ --project-name landing-factory --commit-dirty=true',
      { cwd: ROOT, stdio: 'inherit', timeout: 120_000 }
    )
    wranglerOk = true
    console.log('\n✅  Deployed — verifying URLs...\n')
  } catch (err) {
    console.error(`❌  wrangler pages deploy failed: ${err.message}`)
    for (const r of ok) {
      r.status = 'deploy-failed'
      r.reason = err.message
    }
  }

  if (wranglerOk) {
    for (const r of ok) {
      const url = `${appUrl}/${r.slug}/`
      const check = await waitForDeploy(url)
      if (check.live) {
        r.deployed = true
        console.log(`✅  ${r.slug} is live`)
      } else {
        r.deployed = false
        r.deployNote = check.reason
        console.warn(`⚠️   ${r.slug}: deployed but URL not yet responding — ${check.reason}`)
      }
    }
  }
}

// ─── summary ─────────────────────────────────────────────────────────────────

console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')

for (const r of results) {
  if (r.status === 'ok') {
    const url = `${appUrl}/${r.slug}`
    if (!PUSH) {
      console.log(`\n✅  ${r.slug} — committed locally`)
      console.log(`    Deploy: cd ~/ventures/landing-factory && git push`)
      console.log(`    URL:    ${url}`)
    } else if (r.deployed) {
      console.log(`\n✅  ${r.slug} — LIVE`)
      console.log(`    URL: ${url}`)
    } else {
      // Push succeeded but deploy not verified within timeout
      console.log(`\n⚠️   ${r.slug} — pushed, deployment not yet verified`)
      console.log(`    URL: ${url}`)
      console.log(`    Note: ${r.deployNote}`)
      console.log(`    Check CF Pages dashboard or retry in a few minutes.`)
    }
  } else if (r.status === 'deploy-failed') {
    console.log(`\n❌  ${r.slug} — committed and pushed, wrangler deploy failed`)
    console.log(`    Retry: cd ~/ventures/landing-factory && npx wrangler pages deploy out/ --project-name landing-factory`)
    console.log(`    Error: ${r.reason}`)
  } else {
    console.log(`\n❌  ${r.slug} — generation failed`)
    console.log(`    Artifact: scripts/failed/${r.slug}.json`)
    console.log(`    Reason:   ${r.reason}`)
  }
}

const live = results.filter(r => r.deployed)
const notVerified = results.filter(r => r.status === 'ok' && !r.deployed)

console.log(`\n${ok.length} generated · ${live.length} live · ${notVerified.length} pending deploy · ${failed.length} failed`)
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')

// Exit 1 only on generation failures — push/deploy issues are warnings, not errors
process.exit(failed.length > 0 ? 1 : 0)
