'use client'

import { useState } from 'react'
import { insertWaitlist } from '@/lib/supabase'
import type { AccentClasses } from '@/lib/accent'

type Props = {
  slug: string
  cta: string
  accent: AccentClasses
  compact?: boolean
  inverted?: boolean
}

export function WaitlistForm({ slug, cta, accent, compact = false, inverted = false }: Props) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setStatus('loading')
    try {
      await insertWaitlist({ email, product: slug })
      setStatus('success')
      setEmail('')
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Something went wrong'
      // Duplicate email → show success (idempotent)
      if (msg.includes('duplicate') || msg.includes('unique')) {
        setStatus('success')
      } else {
        setErrorMsg(msg)
        setStatus('error')
      }
    }
  }

  if (status === 'success') {
    return (
      <div className={`flex flex-col items-center gap-2 ${compact ? '' : 'py-2'}`}>
        <span className="text-2xl">🎉</span>
        <p className={`font-semibold ${inverted ? 'text-white' : 'text-slate-900'}`}>You&apos;re on the list!</p>
        <p className={`text-sm ${inverted ? 'text-white/70' : 'text-slate-500'}`}>We&apos;ll email you the moment we launch.</p>
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
    </form>
  )
}
