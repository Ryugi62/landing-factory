import type { PageConfig, Variant } from '@/config/type'
import type { AccentClasses } from '@/lib/accent'
import { WaitlistForm } from './WaitlistForm'
import { WaitlistCount } from './WaitlistCount'

type Props = {
  config: PageConfig
  accent: AccentClasses
}

const TRUST_BARS: Partial<Record<Variant, string[]>> = {
  clinical: ['Based on FDA & EU CosIng data', '10,000+ products indexed', 'Peer-reviewed sources'],
}

export function Hero({ config, accent }: Props) {
  const { hero, theme, slug, variant } = config
  const trustBar = variant ? TRUST_BARS[variant] : undefined

  const sectionClass =
    variant === 'warm'
      ? 'flex flex-col items-center justify-center text-center px-6 py-24 gap-6 bg-gradient-to-b from-rose-50 via-pink-50 to-white'
      : 'flex flex-col items-center justify-center text-center px-6 py-24 gap-6'

  return (
    <section className={sectionClass}>
      {variant === 'warm' && (
        <span className="text-6xl mb-2">{theme.emoji}</span>
      )}
      <span className={`rounded-full border px-4 py-1.5 text-sm font-medium ${accent.badge}`}>
        {variant !== 'warm' && `${theme.emoji} `}{hero.badge}
      </span>
      <h1 className="text-5xl font-bold tracking-tight text-slate-900 max-w-2xl leading-tight">
        {hero.title}{' '}
        <span className={accent.highlight}>{hero.titleHighlight}</span>
      </h1>
      <p className="text-xl text-slate-500 max-w-xl leading-relaxed">{hero.subtitle}</p>
      {trustBar && (
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm text-slate-400">
          {trustBar.map((item) => (
            <span key={item} className="flex items-center gap-1">
              <span className="text-emerald-500">✓</span> {item}
            </span>
          ))}
        </div>
      )}
      <div className="w-full flex justify-center mt-2">
        <WaitlistForm slug={slug} cta={hero.cta} accent={accent} />
      </div>
      <WaitlistCount slug={slug} />
      <p className="text-sm text-slate-400">No credit card required · Free to join</p>
    </section>
  )
}
