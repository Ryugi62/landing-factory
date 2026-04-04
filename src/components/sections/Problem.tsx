import type { PageConfig } from '@/config/type'

type Props = {
  config: PageConfig
}

export function Problem({ config }: Props) {
  const { variant } = config
  const sectionClass =
    variant === 'warm'
      ? 'bg-white px-6 py-20'
      : 'bg-slate-50 px-6 py-20'

  return (
    <section className={sectionClass}>
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-12">
          The problem is real.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {config.problems.map((p, i) => (
            <div
              key={p.title}
              className={`rounded-2xl p-6 text-left shadow-sm ${
                variant === 'warm'
                  ? 'bg-rose-50 border border-rose-100'
                  : 'bg-white border border-slate-100'
              }`}
            >
              {variant === 'clinical' ? (
                <div className="text-4xl font-black text-slate-200 mb-2 leading-none">
                  0{i + 1}
                </div>
              ) : (
                <div className="text-3xl mb-3">{p.icon}</div>
              )}
              <h3 className="font-semibold text-slate-900 mb-2">{p.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
