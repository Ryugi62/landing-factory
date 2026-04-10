import type { PageConfig } from '@/config/type'
import type { AccentClasses } from '@/lib/accent'
import { WaitlistForm } from './WaitlistForm'

type Props = {
  config: PageConfig
  accent: AccentClasses
}

function CtaReasons({ reasons, inverted, accent }: { reasons?: string[]; inverted?: boolean; accent: AccentClasses }) {
  if (!reasons || reasons.length === 0) return null
  return (
    <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 mb-10">
      {reasons.map((reason) => (
        <span key={reason} className={`text-sm flex items-center gap-1.5 ${inverted ? 'text-white/80' : 'text-slate-500'}`}>
          <span className={inverted ? accent.checkInverted : accent.check}>&#10003;</span> {reason}
        </span>
      ))}
    </div>
  )
}

export function CtaSection({ config, accent }: Props) {
  const { variant } = config
  const reasons = config.cta.reasons

  if (variant === 'warm') {
    return (
      <section className={`px-6 py-20 text-center ${accent.ctaBg}`}>
        <h2 className="text-3xl font-bold text-white mb-4">{config.cta.title}</h2>
        <p className={`${accent.ctaSubtext} mb-6 max-w-md mx-auto`}>{config.cta.subtitle}</p>
        <CtaReasons reasons={reasons} inverted accent={accent} />
        <div className="flex justify-center">
          <WaitlistForm slug={config.slug} cta={config.hero.cta} accent={accent} inverted shareText={config.sharing?.shareText} shareChannels={config.sharing?.channels} referral={config.sharing?.referral} />
        </div>
      </section>
    )
  }

  if (variant === 'clinical') {
    return (
      <section className="px-6 py-20 text-center bg-slate-900">
        <h2 className="text-3xl font-bold text-white mb-4">{config.cta.title}</h2>
        <p className="text-slate-400 mb-6 max-w-md mx-auto">{config.cta.subtitle}</p>
        <CtaReasons reasons={reasons} inverted accent={accent} />
        <div className="flex justify-center">
          <WaitlistForm slug={config.slug} cta={config.hero.cta} accent={accent} inverted shareText={config.sharing?.shareText} shareChannels={config.sharing?.channels} referral={config.sharing?.referral} />
        </div>
      </section>
    )
  }

  if (variant === 'bold') {
    return (
      <section className="px-6 py-20 text-center bg-slate-950 border-t border-slate-800">
        <h2 className="text-4xl font-black text-white mb-4">{config.cta.title}</h2>
        <p className="text-slate-400 mb-6 max-w-md mx-auto">{config.cta.subtitle}</p>
        <CtaReasons reasons={reasons} inverted accent={accent} />
        <div className="flex justify-center">
          <WaitlistForm slug={config.slug} cta={config.hero.cta} accent={accent} inverted shareText={config.sharing?.shareText} shareChannels={config.sharing?.channels} referral={config.sharing?.referral} />
        </div>
      </section>
    )
  }

  return (
    <section className="px-6 py-20 text-center">
      <h2 className="text-3xl font-bold text-slate-900 mb-4">{config.cta.title}</h2>
      <p className="text-slate-600 mb-6 max-w-md mx-auto">{config.cta.subtitle}</p>
      <CtaReasons reasons={reasons} accent={accent} />
      <div className="flex justify-center">
        <WaitlistForm slug={config.slug} cta={config.hero.cta} accent={accent} shareText={config.sharing?.shareText} shareChannels={config.sharing?.channels} referral={config.sharing?.referral} />
      </div>
    </section>
  )
}
