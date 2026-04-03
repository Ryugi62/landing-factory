import type { PageConfig } from '@/config/type'

type Props = {
  config: PageConfig
}

export function Problem({ config }: Props) {
  return (
    <section className="bg-slate-50 px-6 py-20">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-12">
          The problem is real.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {config.problems.map((p) => (
            <div
              key={p.title}
              className="bg-white rounded-2xl p-6 border border-slate-100 text-left shadow-sm"
            >
              <div className="text-3xl mb-3">{p.icon}</div>
              <h3 className="font-semibold text-slate-900 mb-2">{p.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
