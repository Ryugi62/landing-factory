import type { PageConfig } from '@/config/type'

type Props = {
  config: PageConfig
}

export function Problem({ config }: Props) {
  const { variant } = config
  const sectionClass =
    variant === 'warm' ? 'bg-white px-6 py-20'
    : variant === 'bold' ? 'bg-slate-900 px-6 py-20'
    : 'bg-slate-50 px-6 py-20'

  const headingClass =
    variant === 'bold' ? 'text-3xl font-black text-white mb-12'
    : 'text-3xl font-bold text-slate-900 mb-12'

  return (
    <section className={sectionClass}>
      <div className="max-w-3xl mx-auto text-center">
        <h2 className={headingClass}>
          The problem is real.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {config.problems.map((p, i) => (
            <div
              key={p.title}
              className={`rounded-2xl p-6 text-left shadow-sm ${
                variant === 'warm'
                  ? 'bg-slate-50 border border-slate-100'
                  : variant === 'bold'
                  ? 'bg-slate-800 border border-slate-700'
                  : 'bg-white border border-slate-100'
              }`}
            >
              {variant === 'clinical' ? (
                <div className="text-4xl font-black text-slate-200 mb-2 leading-none">
                  0{i + 1}
                </div>
              ) : variant === 'bold' ? (
                <div className="text-4xl font-black text-slate-600 mb-2 leading-none">
                  0{i + 1}
                </div>
              ) : (
                <div className="text-3xl mb-3">{p.icon}</div>
              )}
              <h3 className={`font-semibold mb-2 ${variant === 'bold' ? 'text-white' : 'text-slate-900'}`}>{p.title}</h3>
              <p className={`text-sm leading-relaxed ${variant === 'bold' ? 'text-slate-300' : 'text-slate-600'}`}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
