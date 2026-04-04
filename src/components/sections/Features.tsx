import type { PageConfig } from '@/config/type'
import type { AccentClasses } from '@/lib/accent'

type Props = {
  config: PageConfig
  accent: AccentClasses
}

export function Features({ config, accent }: Props) {
  const { variant } = config
  const sectionClass =
    variant === 'warm'
      ? 'bg-rose-50/40 px-6 py-20'
      : 'bg-white px-6 py-20'

  return (
    <section className={sectionClass}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-4">
          Everything you need.
        </h2>
        <p className="text-slate-500 text-center mb-16 max-w-xl mx-auto">
          {config.description}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {config.features.map((f) => (
            <div
              key={f.title}
              className={`relative rounded-2xl border p-6 transition-all hover:shadow-sm ${
                variant === 'warm'
                  ? `border-rose-100 bg-white ${accent.featureBorder}`
                  : `border-slate-200 bg-white ${accent.featureBorder}`
              }`}
            >
              {f.badge && (
                <span className={`absolute -top-3 left-4 rounded-full px-3 py-1 text-xs font-medium ${accent.button}`}>
                  {f.badge}
                </span>
              )}
              <div className="text-3xl mb-4">{f.icon}</div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{f.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
