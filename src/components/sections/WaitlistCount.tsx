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

  if (count === null || count === 0) return null

  return (
    <p className="text-sm text-slate-400">
      🎉 Already <span className="font-semibold text-slate-600">{count.toLocaleString()}</span> people on the waitlist
    </p>
  )
}
