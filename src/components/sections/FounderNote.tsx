import type { PageConfig } from '@/config/type'
import type { AccentClasses } from '@/lib/accent'

type Props = {
  config: PageConfig
  accent: AccentClasses
}

export function FounderNote({ config, accent }: Props) {
  const note = config.founderNote
  if (!note) return null

  const { variant } = config

  const sectionClass =
    variant === 'bold' ? 'bg-slate-900 px-6 py-12'
    : 'bg-white px-6 py-12'

  return (
    <section className={sectionClass}>
      <div className="max-w-xl mx-auto text-center">
        <div className={`inline-block rounded-full px-3 py-1 text-xs font-medium mb-4 ${accent.badge}`}>
          From the maker
        </div>
        <blockquote className={`text-lg leading-relaxed italic ${variant === 'bold' ? 'text-slate-300' : 'text-slate-700'}`}>
          &ldquo;{note.quote}&rdquo;
        </blockquote>
        <div className="mt-4">
          <span className={`font-semibold ${variant === 'bold' ? 'text-white' : 'text-slate-900'}`}>
            {note.author}
          </span>
          {note.role && (
            <span className={`ml-2 text-sm ${variant === 'bold' ? 'text-slate-400' : 'text-slate-500'}`}>
              &middot; {note.role}
            </span>
          )}
        </div>
      </div>
    </section>
  )
}
