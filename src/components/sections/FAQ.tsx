import type { PageConfig } from '@/config/type'

type Props = {
  config: PageConfig
}

export function FAQ({ config }: Props) {
  const faq = config.faq
  if (!faq || faq.length === 0) return null

  const { variant } = config
  const sectionClass =
    variant === 'bold' ? 'bg-slate-900 px-6 py-20'
    : 'bg-slate-50/50 px-6 py-20'

  return (
    <section className={sectionClass}>
      <div className="max-w-2xl mx-auto">
        <h2 className={`text-3xl font-bold text-center mb-12 ${variant === 'bold' ? 'text-white' : 'text-slate-900'}`}>
          Frequently asked questions
        </h2>

        <div className={`divide-y ${variant === 'bold' ? 'divide-slate-700' : 'divide-slate-200'}`}>
          {faq.map((item) => (
            <details key={item.question} className="group">
              <summary className={`flex items-center justify-between py-4 cursor-pointer list-none ${variant === 'bold' ? 'text-white' : 'text-slate-900'}`}>
                <span className="font-medium text-sm pr-4">{item.question}</span>
                <span className={`shrink-0 text-lg transition-transform group-open:rotate-45 ${variant === 'bold' ? 'text-slate-500' : 'text-slate-400'}`}>
                  +
                </span>
              </summary>
              <p className={`pb-4 text-sm leading-relaxed ${variant === 'bold' ? 'text-slate-300' : 'text-slate-600'}`}>
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
