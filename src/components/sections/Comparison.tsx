import type { PageConfig } from '@/config/type'
import type { AccentClasses } from '@/lib/accent'

type Props = {
  config: PageConfig
  accent: AccentClasses
}

export function Comparison({ config, accent }: Props) {
  const comparison = config.comparison
  if (!comparison) return null

  const { variant } = config
  const sectionClass =
    variant === 'bold' ? 'bg-slate-950 px-6 py-20'
    : 'bg-white px-6 py-20'

  const heading = comparison.heading || `Why ${config.name}?`
  const allColumns = [comparison.product, ...comparison.competitors]

  return (
    <section className={sectionClass}>
      <div className="max-w-3xl mx-auto">
        <h2 className={`text-3xl font-bold text-center mb-3 ${variant === 'bold' ? 'text-white' : 'text-slate-900'}`}>
          {heading}
        </h2>
        {comparison.subtitle && (
          <p className={`text-center mb-12 text-base ${variant === 'bold' ? 'text-slate-400' : 'text-slate-600'}`}>
            {comparison.subtitle}
          </p>
        )}
        {!comparison.subtitle && <div className="mb-12" />}

        <div className="overflow-x-auto -mx-6 px-6">
          <table className="w-full text-sm">
            <thead>
              <tr className={`border-b ${variant === 'bold' ? 'border-slate-700' : 'border-slate-200'}`}>
                <th className={`text-left py-3 pr-4 font-medium ${variant === 'bold' ? 'text-slate-400' : 'text-slate-500'}`}>
                  Feature
                </th>
                {allColumns.map((col, i) => (
                  <th
                    key={col}
                    className={`text-center py-3 px-3 font-semibold ${
                      i === 0
                        ? accent.highlight
                        : variant === 'bold' ? 'text-slate-400' : 'text-slate-500'
                    }`}
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparison.rows.map((row) => (
                <tr
                  key={row.feature}
                  className={`border-b ${variant === 'bold' ? 'border-slate-800' : 'border-slate-100'}`}
                >
                  <td className={`py-3 pr-4 font-medium ${variant === 'bold' ? 'text-slate-300' : 'text-slate-700'}`}>
                    {row.feature}
                  </td>
                  {row.values.map((val, i) => (
                    <td key={i} className="text-center py-3 px-3">
                      {typeof val === 'boolean' ? (
                        val ? (
                          <span className={i === 0 ? accent.check : 'text-slate-400'}>&#10003;</span>
                        ) : (
                          <span className="text-slate-300">&mdash;</span>
                        )
                      ) : (
                        <span className={`text-sm ${
                          i === 0
                            ? variant === 'bold' ? 'text-white font-medium' : 'text-slate-900 font-medium'
                            : variant === 'bold' ? 'text-slate-300' : 'text-slate-600'
                        }`}>
                          {val}
                        </span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
