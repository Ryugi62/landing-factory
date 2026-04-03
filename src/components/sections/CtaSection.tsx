import type { PageConfig } from '@/config/type'
import type { AccentClasses } from '@/lib/accent'
import { WaitlistForm } from './WaitlistForm'

type Props = {
  config: PageConfig
  accent: AccentClasses
}

export function CtaSection({ config, accent }: Props) {
  return (
    <section className="px-6 py-20 text-center">
      <h2 className="text-3xl font-bold text-slate-900 mb-4">{config.cta.title}</h2>
      <p className="text-slate-500 mb-10 max-w-md mx-auto">{config.cta.subtitle}</p>
      <div className="flex justify-center">
        <WaitlistForm slug={config.slug} cta={config.hero.cta} accent={accent} />
      </div>
    </section>
  )
}
