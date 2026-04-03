import type { PageConfig } from '@/config/type'
import type { AccentClasses } from '@/lib/accent'
import { WaitlistForm } from './WaitlistForm'

type Props = {
  config: PageConfig
  accent: AccentClasses
}

export function Hero({ config, accent }: Props) {
  const { hero, theme, slug } = config
  return (
    <section className="flex flex-col items-center justify-center text-center px-6 py-24 gap-6">
      <span className={`rounded-full border px-4 py-1.5 text-sm font-medium ${accent.badge}`}>
        {theme.emoji} {hero.badge}
      </span>
      <h1 className="text-5xl font-bold tracking-tight text-slate-900 max-w-2xl leading-tight">
        {hero.title}{' '}
        <span className={accent.highlight}>{hero.titleHighlight}</span>
      </h1>
      <p className="text-xl text-slate-500 max-w-xl leading-relaxed">{hero.subtitle}</p>
      <div className="w-full flex justify-center mt-2">
        <WaitlistForm slug={slug} cta={hero.cta} accent={accent} />
      </div>
      <p className="text-sm text-slate-400">No credit card required · Free to join</p>
    </section>
  )
}
