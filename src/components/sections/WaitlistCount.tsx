'use client'

import { useEffect, useState } from 'react'
import { getWaitlistCount } from '@/lib/supabase'

type Props = {
  slug: string
}

export function WaitlistCount({ slug }: Props) {
  const [count, setCount] = useState<number | null>(null)

  useEffect(() => {
    getWaitlistCount(slug).then(setCount)
  }, [slug])

  if (count === null) return null

  if (count === 0) {
    return (
      <p className="text-sm text-slate-400">Be one of the first to join</p>
    )
  }

  if (count < 10) {
    return (
      <p className="text-sm text-slate-400">
        Join <span className="font-semibold text-slate-600">{count}</span> early {count === 1 ? 'user' : 'users'}
      </p>
    )
  }

  return (
    <p className="text-sm text-slate-400">
      🎉 Already <span className="font-semibold text-slate-600">{count.toLocaleString()}</span> people on the waitlist
    </p>
  )
}
