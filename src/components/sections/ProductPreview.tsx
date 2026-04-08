import type { PageConfig } from '@/config/type'
import type { AccentClasses } from '@/lib/accent'

type Props = {
  config: PageConfig
  accent: AccentClasses
}

export function ProductPreview({ config, accent }: Props) {
  const preview = config.productPreview
  if (!preview) return null

  const { variant } = config
  const sectionClass =
    variant === 'bold' ? 'bg-slate-950 px-6 py-14'
    : 'bg-white px-6 py-14'

  const windowBg =
    variant === 'bold' ? 'bg-slate-900 border-slate-700'
    : 'bg-white border-slate-200'

  const titleBarBg =
    variant === 'bold' ? 'bg-slate-800 border-slate-700'
    : 'bg-slate-50 border-slate-200'

  const itemBg =
    variant === 'bold' ? 'bg-slate-800/50'
    : 'bg-slate-50/50'

  return (
    <section className={sectionClass}>
      <div className="max-w-2xl mx-auto">
        <h2 className={`text-3xl font-bold text-center mb-4 ${variant === 'bold' ? 'text-white' : 'text-slate-900'}`}>
          See it in action
        </h2>
        <p className={`text-center mb-12 ${variant === 'bold' ? 'text-slate-400' : 'text-slate-500'}`}>
          {preview.subtitle || 'Here\'s what your output looks like.'}
        </p>

        {/* App window mockup */}
        <div className={`rounded-xl border shadow-lg overflow-hidden ${windowBg}`}>
          {/* Title bar */}
          <div className={`flex items-center gap-2 px-4 py-3 border-b ${titleBarBg}`}>
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-amber-400" />
              <div className="w-3 h-3 rounded-full bg-emerald-400" />
            </div>
            <span className={`text-sm font-medium ml-2 ${variant === 'bold' ? 'text-slate-300' : 'text-slate-600'}`}>
              {preview.title}
            </span>
          </div>

          {/* Content */}
          <div className="p-4 sm:p-6 space-y-2">
            {preview.items.map((item) => (
              <div
                key={item.label}
                className={`flex items-center justify-between rounded-lg px-4 py-3 ${
                  item.highlight
                    ? `${accent.badge}`
                    : itemBg
                }`}
              >
                <span className={`text-sm font-medium ${
                  item.highlight
                    ? ''
                    : variant === 'bold' ? 'text-slate-300' : 'text-slate-700'
                }`}>
                  {item.label}
                </span>
                <span className={`text-sm ${
                  item.highlight
                    ? ''
                    : variant === 'bold' ? 'text-slate-400' : 'text-slate-500'
                }`}>
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
