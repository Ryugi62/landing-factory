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
  bold: ['Real-time news analysis', 'All major markets covered', 'No Bloomberg subscription needed'],
}

function MiniPreview({ config, accent }: Props) {
  const preview = config.productPreview
  if (!preview) return null
  const { variant } = config
  const items = preview.items.slice(0, 4)

  return (
    <div className={`rounded-xl border shadow-lg overflow-hidden ${variant === 'bold' ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-200'}`}>
      <div className={`flex items-center gap-2 px-3 py-2 border-b ${variant === 'bold' ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-200'}`}>
        <div className="flex gap-1">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
        </div>
        <span className={`text-xs font-medium ml-1 ${variant === 'bold' ? 'text-slate-400' : 'text-slate-500'}`}>
          {preview.title}
        </span>
      </div>
      <div className="p-3 space-y-1.5">
        {items.map((item) => (
          <div
            key={item.label}
            className={`flex items-center justify-between rounded-md px-3 py-2 ${
              item.highlight ? accent.badge : variant === 'bold' ? 'bg-slate-800/50' : 'bg-slate-50/80'
            }`}
          >
            <span className={`text-xs font-medium ${item.highlight ? '' : variant === 'bold' ? 'text-slate-300' : 'text-slate-700'}`}>
              {item.label}
            </span>
            <span className={`text-xs ${item.highlight ? '' : variant === 'bold' ? 'text-slate-400' : 'text-slate-500'}`}>
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export function Hero({ config, accent }: Props) {
  const { hero, theme, slug, variant, trustBadges } = config
  const trustBar = variant ? TRUST_BARS[variant] : undefined
  const isSplit = hero.layout === 'split' && config.productPreview

  if (isSplit) {
    const bgClass =
      variant === 'warm'
        ? 'bg-gradient-to-b from-slate-50 via-gray-50/50 to-white'
        : variant === 'bold'
        ? 'bg-slate-950'
        : ''

    return (
      <section className={`px-6 py-14 sm:py-20 ${bgClass}`}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left: Text */}
          <div className="flex flex-col gap-5">
            <span className={`rounded-full border px-4 py-1.5 text-sm font-medium w-fit ${accent.badge}`}>
              {variant !== 'warm' && `${theme.emoji} `}{hero.badge}
            </span>
            <h1 className={`text-4xl sm:text-5xl font-bold tracking-tight leading-tight ${variant === 'bold' ? 'text-white' : 'text-slate-900'}`}>
              {hero.title}{' '}
              <span className={accent.highlight}>{hero.titleHighlight}</span>
            </h1>
            <p className={`text-lg leading-relaxed ${variant === 'bold' ? 'text-slate-400' : 'text-slate-600'}`}>
              {hero.subtitle}
            </p>

            {/* Trust badges */}
            {trustBadges && trustBadges.length > 0 && (
              <div className="flex flex-wrap gap-x-4 gap-y-1">
                {trustBadges.map((badge) => (
                  <span key={badge} className={`text-sm flex items-center gap-1.5 ${variant === 'bold' ? 'text-slate-400' : 'text-slate-500'}`}>
                    <span className={accent.check}>&#10003;</span> {badge}
                  </span>
                ))}
              </div>
            )}

            <div className="mt-1">
              <WaitlistForm slug={slug} cta={hero.cta} accent={accent} />
            </div>
            <WaitlistCount slug={slug} />
            <p className={`text-sm ${variant === 'bold' ? 'text-slate-500' : 'text-slate-400'}`}>
              No credit card required &middot; No spam
            </p>
          </div>

          {/* Right: Mini preview */}
          <div className="hidden sm:block">
            <MiniPreview config={config} accent={accent} />
          </div>
        </div>
      </section>
    )
  }

  // Centered layout (default / backward compatible)
  const sectionClass =
    variant === 'warm'
      ? 'flex flex-col items-center justify-center text-center px-6 py-24 gap-6 bg-gradient-to-b from-slate-50 via-gray-50/50 to-white'
      : variant === 'bold'
      ? 'flex flex-col items-center justify-center text-center px-6 py-24 gap-6 bg-slate-950'
      : 'flex flex-col items-center justify-center text-center px-6 py-24 gap-6'

  const titleClass =
    variant === 'bold'
      ? 'text-5xl font-black tracking-tight text-white max-w-2xl leading-tight'
      : 'text-5xl font-bold tracking-tight text-slate-900 max-w-2xl leading-tight'

  const subtitleClass =
    variant === 'bold'
      ? 'text-xl text-slate-400 max-w-xl leading-relaxed'
      : 'text-xl text-slate-600 max-w-xl leading-relaxed'

  const footerClass =
    variant === 'bold' ? 'text-sm text-slate-500' : 'text-sm text-slate-400'

  return (
    <section className={sectionClass}>
      {variant === 'warm' && (
        <span className="text-6xl mb-2">{theme.emoji}</span>
      )}
      <span className={`rounded-full border px-4 py-1.5 text-sm font-medium ${accent.badge}`}>
        {variant !== 'warm' && `${theme.emoji} `}{hero.badge}
      </span>
      <h1 className={titleClass}>
        {hero.title}{' '}
        <span className={accent.highlight}>{hero.titleHighlight}</span>
      </h1>
      <p className={subtitleClass}>{hero.subtitle}</p>
      {hero.beforeAfter && (
        <div className={`flex items-center gap-3 sm:gap-4 max-w-lg mx-auto ${variant === 'bold' ? 'text-white' : ''}`}>
          <div className={`flex-1 rounded-lg p-3 sm:p-4 text-center ${variant === 'bold' ? 'bg-red-950/40 border border-red-800/50' : 'bg-red-50 border border-red-200'}`}>
            <span className={`text-xs font-semibold uppercase tracking-wide ${variant === 'bold' ? 'text-red-400' : 'text-red-500'}`}>Before</span>
            <p className={`mt-1 text-sm font-medium ${variant === 'bold' ? 'text-red-200' : 'text-slate-700'}`}>{hero.beforeAfter.before}</p>
          </div>
          <span className={`text-xl shrink-0 ${variant === 'bold' ? 'text-slate-500' : 'text-slate-400'}`}>&rarr;</span>
          <div className={`flex-1 rounded-lg p-3 sm:p-4 text-center ${variant === 'bold' ? 'bg-emerald-950/40 border border-emerald-800/50' : 'bg-emerald-50 border border-emerald-200'}`}>
            <span className={`text-xs font-semibold uppercase tracking-wide ${variant === 'bold' ? 'text-emerald-400' : 'text-emerald-600'}`}>After</span>
            <p className={`mt-1 text-sm font-medium ${variant === 'bold' ? 'text-emerald-200' : 'text-slate-700'}`}>{hero.beforeAfter.after}</p>
          </div>
        </div>
      )}

      {/* Trust badges (centered) */}
      {trustBadges && trustBadges.length > 0 && (
        <div className="flex flex-wrap justify-center gap-x-5 gap-y-1">
          {trustBadges.map((badge) => (
            <span key={badge} className={`text-sm flex items-center gap-1.5 ${variant === 'bold' ? 'text-slate-400' : 'text-slate-500'}`}>
              <span className={accent.check}>&#10003;</span> {badge}
            </span>
          ))}
        </div>
      )}

      {trustBar && (
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm text-slate-400">
          {trustBar.map((item) => (
            <span key={item} className="flex items-center gap-1">
              <span className="text-emerald-500">&#10003;</span> {item}
            </span>
          ))}
        </div>
      )}
      <div className="w-full flex justify-center mt-2">
        <WaitlistForm slug={slug} cta={hero.cta} accent={accent} />
      </div>
      <WaitlistCount slug={slug} />
      <p className={footerClass}>No credit card required &middot; No spam</p>
    </section>
  )
}
