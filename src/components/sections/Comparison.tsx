import type { PageConfig } from '@/config/type'
import type { AccentClasses } from '@/lib/accent'

type Props = {
  config: PageConfig
  accent: AccentClasses
}

function CellValue({ val, isProduct, accent, variant }: { val: boolean | string; isProduct: boolean; accent: AccentClasses; variant?: string }) {
  if (typeof val === 'boolean') {
    return val
      ? <span className={isProduct ? accent.check : 'text-slate-400'}>&#10003;</span>
      : <span className="text-slate-300">&mdash;</span>
  }
  return (
    <span className={`text-sm ${
      isProduct
        ? variant === 'bold' ? 'text-white font-medium' : 'text-slate-900 font-medium'
        : variant === 'bold' ? 'text-slate-300' : 'text-slate-600'
    }`}>
      {val}
    </span>
  )
}

export function Comparison({ config, accent }: Props) {
  const comparison = config.comparison
  if (!comparison) return null

  const { variant } = config
  const sectionClass =
    variant === 'bold' ? 'bg-slate-950 px-6 py-16'
    : 'bg-white px-6 py-16'

  const heading = comparison.heading || `Why ${config.name}?`
  const allColumns = [comparison.product, ...comparison.competitors]

  return (
    <section className={sectionClass}>
      <div className="max-w-3xl mx-auto">
        <h2 className={`text-3xl font-bold text-center mb-3 ${variant === 'bold' ? 'text-white' : 'text-slate-900'}`}>
          {heading}
        </h2>
        {comparison.subtitle && (
          <p className={`text-center mb-10 text-base ${variant === 'bold' ? 'text-slate-400' : 'text-slate-600'}`}>
            {comparison.subtitle}
          </p>
        )}
        {!comparison.subtitle && <div className="mb-10" />}

        {/* Desktop: table */}
        <div className="hidden md:block">
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
                      i === 0 ? accent.highlight : variant === 'bold' ? 'text-slate-400' : 'text-slate-500'
                    }`}
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparison.rows.map((row) => (
                <tr key={row.feature} className={`border-b ${variant === 'bold' ? 'border-slate-800' : 'border-slate-100'}`}>
                  <td className={`py-3 pr-4 font-medium ${variant === 'bold' ? 'text-slate-300' : 'text-slate-700'}`}>
                    {row.feature}
                  </td>
                  {row.values.map((val, i) => (
                    <td key={i} className="text-center py-3 px-3">
                      <CellValue val={val} isProduct={i === 0} accent={accent} variant={variant} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile: vertical cards */}
        <div className="md:hidden space-y-4">
          {allColumns.map((col, colIdx) => {
            const isProduct = colIdx === 0
            return (
              <div
                key={col}
                className={`rounded-xl border p-4 ${
                  isProduct
                    ? `${accent.badge} border-2`
                    : variant === 'bold'
                    ? 'bg-slate-800 border-slate-700'
                    : 'bg-slate-50 border-slate-200'
                }`}
              >
                <h3 className={`font-semibold mb-3 ${
                  isProduct ? '' : variant === 'bold' ? 'text-slate-300' : 'text-slate-700'
                }`}>
                  {col}
                </h3>
                <div className="space-y-2">
                  {comparison.rows.map((row) => (
                    <div key={row.feature} className="flex items-center justify-between text-sm">
                      <span className={variant === 'bold' ? 'text-slate-400' : 'text-slate-500'}>
                        {row.feature}
                      </span>
                      <CellValue val={row.values[colIdx]} isProduct={isProduct} accent={accent} variant={variant} />
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
