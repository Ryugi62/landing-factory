'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import type { AccentClasses } from '@/lib/accent'

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: HTMLElement,
        options: {
          sitekey: string
          size: string
          callback: (token: string) => void
          'error-callback': () => void
          'expired-callback': () => void
        },
      ) => string
      reset: (widgetId: string) => void
      remove: (widgetId: string) => void
    }
  }
}

type Props = {
  slug: string
  cta: string
  accent: AccentClasses
  compact?: boolean
  inverted?: boolean
}

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!
const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? ''

function getAttribution(): string | undefined {
  const params = new URLSearchParams(window.location.search)
  const utmSource = params.get('utm_source')
  if (utmSource) {
    return ['utm', utmSource, params.get('utm_medium'), params.get('utm_campaign')]
      .filter(Boolean).join(':')
  }
  const ref = params.get('ref')
  if (ref) return `ref:${ref}`
  if (document.referrer) {
    try { return `referrer:${new URL(document.referrer).hostname}` }
    catch { return `referrer:${document.referrer}` }
  }
  return undefined
}

function buildShareUrl(ref: string): string {
  const url = new URL(window.location.href)
  for (const key of ['utm_source', 'utm_medium', 'utm_campaign', 'ref']) {
    url.searchParams.delete(key)
  }
  url.searchParams.set('ref', ref)
  return url.toString()
}

export function WaitlistForm({ slug, cta, accent, compact = false, inverted = false }: Props) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'duplicate' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [copied, setCopied] = useState(false)
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null)
  const turnstileRef = useRef<HTMLDivElement>(null)
  const widgetIdRef = useRef<string | null>(null)

  const initTurnstile = useCallback(() => {
    if (!window.turnstile || !turnstileRef.current || widgetIdRef.current) return
    widgetIdRef.current = window.turnstile.render(turnstileRef.current, {
      sitekey: TURNSTILE_SITE_KEY,
      size: 'invisible',
      callback: (token: string) => setTurnstileToken(token),
      'error-callback': () => setTurnstileToken(null),
      'expired-callback': () => setTurnstileToken(null),
    })
  }, [])

  useEffect(() => {
    if (!TURNSTILE_SITE_KEY) return
    // Turnstile script may load after this component mounts
    if (window.turnstile) {
      initTurnstile()
    } else {
      const interval = setInterval(() => {
        if (window.turnstile) {
          clearInterval(interval)
          initTurnstile()
        }
      }, 200)
      return () => clearInterval(interval)
    }
  }, [initTurnstile])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setStatus('loading')

    try {
      const body = {
        email,
        product: slug,
        referral_source: getAttribution(),
        turnstile_token: turnstileToken ?? '',
      }

      const res = await fetch(`${SUPABASE_URL}/functions/v1/waitlist-signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })

      const data = await res.json()

      if (res.ok) {
        setStatus('success')
        setEmail('')
      } else if (data.error === 'duplicate') {
        setStatus('duplicate')
      } else if (data.error === 'turnstile_failed') {
        setErrorMsg('Bot verification failed — please refresh and try again.')
        setStatus('error')
      } else {
        setErrorMsg("Couldn't sign up — please try again.")
        setStatus('error')
      }
    } catch {
      setErrorMsg("Couldn't sign up — please try again.")
      setStatus('error')
    }

    // Reset Turnstile for retry
    if (widgetIdRef.current && window.turnstile) {
      window.turnstile.reset(widgetIdRef.current)
      setTurnstileToken(null)
    }
  }

  function copyLink() {
    navigator.clipboard.writeText(buildShareUrl('copy_share')).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  if (status === 'success') {
    const xShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(buildShareUrl('x_share'))}&text=${encodeURIComponent(`Joining the waitlist for ${document.title} — worth a look: `)}`
    const borderClass = inverted ? 'border-white/10' : 'border-slate-100'
    const btnClass = inverted
      ? 'border-white/20 text-white/80 hover:bg-white/10'
      : 'border-slate-200 text-slate-600 hover:bg-slate-50'
    return (
      <div className={`flex flex-col items-center gap-2 ${compact ? '' : 'py-2'}`}>
        <span className="text-2xl">🎉</span>
        <p className={`font-semibold ${inverted ? 'text-white' : 'text-slate-900'}`}>You&apos;re on the list!</p>
        <p className={`text-sm ${inverted ? 'text-white/70' : 'text-slate-500'}`}>We&apos;ll reach out with early access details.</p>
        {!compact && (
          <div className={`flex flex-col items-center gap-2 mt-3 pt-3 border-t w-full ${borderClass}`}>
            <p className={`text-xs ${inverted ? 'text-white/50' : 'text-slate-400'}`}>Know someone who&apos;d actually use this? Share it.</p>
            <div className="flex gap-2">
              <button
                onClick={copyLink}
                className={`rounded-full border px-4 py-1.5 text-xs font-medium transition-colors ${btnClass}`}
              >
                {copied ? '✓ Copied' : '🔗 Copy link'}
              </button>
              <a
                href={xShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`rounded-full border px-4 py-1.5 text-xs font-medium transition-colors ${btnClass}`}
              >
                Share on X
              </a>
            </div>
          </div>
        )}
      </div>
    )
  }

  if (status === 'duplicate') {
    return (
      <div className={`flex flex-col items-center gap-2 ${compact ? '' : 'py-2'}`}>
        <span className="text-2xl">👋</span>
        <p className={`font-semibold ${inverted ? 'text-white' : 'text-slate-900'}`}>You&apos;re already on the list</p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex w-full ${compact ? 'flex-row gap-2 max-w-md' : 'flex-col sm:flex-row gap-3 max-w-lg'}`}
    >
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className={`flex-1 rounded-full px-5 ${compact ? 'py-2.5 text-sm' : 'py-3'} placeholder-slate-400 focus:outline-none focus:ring-2 ${
          inverted
            ? 'border border-white/30 bg-white/10 text-white placeholder-white/50 focus:ring-white/20'
            : 'border border-slate-200 bg-white focus:border-slate-400 focus:ring-slate-100'
        }`}
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className={`rounded-full px-6 ${compact ? 'py-2.5 text-sm' : 'py-3'} font-medium transition-colors whitespace-nowrap disabled:opacity-60 ${accent.button}`}
      >
        {status === 'loading' ? 'Joining…' : cta}
      </button>
      {status === 'error' && (
        <p className="w-full text-xs text-red-500 text-center mt-1">{errorMsg}</p>
      )}
      {/* Turnstile invisible widget */}
      <div ref={turnstileRef} />
    </form>
  )
}
