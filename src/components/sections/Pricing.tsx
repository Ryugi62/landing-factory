import type { PageConfig } from '@/config/type'
import type { AccentClasses } from '@/lib/accent'

type Props = {
  config: PageConfig
  accent: AccentClasses
}

export function Pricing({ config, accent }: Props) {
  return (
    <section className="bg-slate-50 px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-4">Simple pricing</h2>
        <p className="text-slate-500 text-center mb-16">Start free. Upgrade when you&apos;re ready.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {config.pricing.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-6 border flex flex-col gap-4 ${
                plan.highlight
                  ? accent.highlightPlan
                  : 'border-slate-200 bg-white'
              }`}
            >
              <div>
                <h3 className={`font-semibold text-lg ${plan.highlight ? 'text-white' : 'text-slate-900'}`}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className={`text-4xl font-bold ${plan.highlight ? 'text-white' : 'text-slate-900'}`}>
                    {plan.price}
                  </span>
                  <span className={`text-sm ${plan.highlight ? 'opacity-70 text-white' : 'text-slate-400'}`}>
                    {plan.period}
                  </span>
                </div>
              </div>
              <ul className="space-y-2 flex-1">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className={`text-sm flex items-center gap-2 ${plan.highlight ? 'text-white opacity-90' : 'text-slate-600'}`}
                  >
                    <span className={plan.highlight ? accent.checkInverted : accent.check}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
