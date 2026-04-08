import type { PageConfig } from '@/config/type'
import type { AccentClasses } from '@/lib/accent'

type Props = {
  config: PageConfig
  accent: AccentClasses
}

export function HowItWorks({ config, accent }: Props) {
  const steps = config.howItWorks
  if (!steps || steps.length === 0) return null

  const { variant } = config
  const sectionClass =
    variant === 'bold' ? 'bg-slate-900 px-6 py-20'
    : 'bg-slate-50/50 px-6 py-20'

  return (
    <section className={sectionClass}>
      <div className="max-w-3xl mx-auto">
        <h2 className={`text-3xl font-bold text-center mb-16 ${variant === 'bold' ? 'text-white' : 'text-slate-900'}`}>
          How it works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 relative">
          {steps.map((step, i) => (
            <div key={step.step} className="flex flex-col items-center text-center relative">
              {/* Connector line (desktop only, not after last) */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-5 left-[calc(50%+24px)] w-[calc(100%-48px)] border-t-2 border-dashed border-slate-300" />
              )}

              {/* Step number */}
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white mb-4 ${accent.button.split(' ').filter(c => c.startsWith('bg-')).join(' ')}`}>
                {step.step}
              </div>

              <h3 className={`font-semibold mb-2 ${variant === 'bold' ? 'text-white' : 'text-slate-900'}`}>
                {step.title}
              </h3>
              <p className={`text-sm leading-relaxed ${variant === 'bold' ? 'text-slate-300' : 'text-slate-600'}`}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
