import type { PageConfig } from '@/config/type'
import type { AccentClasses } from '@/lib/accent'

type Props = {
  config: PageConfig
  accent: AccentClasses
}

export function FounderNote({ config, accent }: Props) {
  const note = config.founderNote
  const testimonial = config.testimonial
  if (!note && !testimonial) return null

  const { variant } = config

  const sectionClass =
    variant === 'bold' ? 'bg-slate-900 px-6 py-12'
    : 'bg-white px-6 py-12'

  return (
    <section className={sectionClass}>
      <div className={`max-w-2xl mx-auto ${note && testimonial ? 'grid grid-cols-1 md:grid-cols-2 gap-10' : ''}`}>
        {/* Founder note */}
        {note && (
          <div className={`text-center ${!testimonial ? 'max-w-xl mx-auto' : ''}`}>
            <div className={`inline-block rounded-full px-3 py-1 text-xs font-medium mb-4 ${accent.badge}`}>
              From the maker
            </div>
            <blockquote className={`text-base leading-relaxed italic ${variant === 'bold' ? 'text-slate-300' : 'text-slate-700'}`}>
              &ldquo;{note.quote}&rdquo;
            </blockquote>
            <div className="mt-3">
              <span className={`font-semibold text-sm ${variant === 'bold' ? 'text-white' : 'text-slate-900'}`}>
                {note.author}
              </span>
              {note.role && (
                <span className={`ml-1.5 text-sm ${variant === 'bold' ? 'text-slate-400' : 'text-slate-500'}`}>
                  &middot; {note.role}
                </span>
              )}
            </div>
          </div>
        )}

        {/* Testimonial */}
        {testimonial && (
          <div className={`text-center ${!note ? 'max-w-xl mx-auto' : ''}`}>
            <div className={`inline-block rounded-full px-3 py-1 text-xs font-medium mb-4 ${
              variant === 'bold' ? 'bg-emerald-950 text-emerald-400 border border-emerald-800' : 'bg-emerald-50 text-emerald-700 border border-emerald-100'
            }`}>
              Early feedback
            </div>
            <blockquote className={`text-base leading-relaxed italic ${variant === 'bold' ? 'text-slate-300' : 'text-slate-700'}`}>
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>
            <div className="mt-3">
              <span className={`font-semibold text-sm ${variant === 'bold' ? 'text-white' : 'text-slate-900'}`}>
                {testimonial.author}
              </span>
              <span className={`ml-1.5 text-sm ${variant === 'bold' ? 'text-slate-400' : 'text-slate-500'}`}>
                &middot; {testimonial.role}
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
