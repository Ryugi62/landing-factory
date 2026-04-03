import { redirect } from 'next/navigation'
import { ALL_CONFIGS } from '@/config'
import Link from 'next/link'
import { getAccent } from '@/lib/accent'

export default function Home() {
  if (ALL_CONFIGS.length === 1) {
    redirect(`/${ALL_CONFIGS[0].slug}`)
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-8 p-8">
      <h1 className="text-3xl font-bold text-slate-900">Landing Factory</h1>
      <p className="text-slate-500">Choose a product landing page:</p>
      <div className="flex flex-col gap-3 w-full max-w-xs">
        {ALL_CONFIGS.map((c) => {
          const accent = getAccent(c.theme.accent)
          return (
            <Link
              key={c.slug}
              href={`/${c.slug}`}
              className={`flex items-center gap-3 rounded-2xl border px-5 py-4 font-medium transition-colors ${accent.button}`}
            >
              <span>{c.theme.emoji}</span>
              <span>{c.name}</span>
            </Link>
          )
        })}
      </div>
    </main>
  )
}
