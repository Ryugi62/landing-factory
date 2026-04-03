import type { PageConfig } from '@/config/type'
import type { AccentClasses } from '@/lib/accent'

type Props = {
  config: PageConfig
  accent: AccentClasses
}

export function Footer({ config, accent }: Props) {
  return (
    <footer className="border-t border-slate-100 px-6 py-8">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className={`text-lg font-bold ${accent.highlight}`}>
          {config.theme.emoji} {config.name}
        </span>
        <p className="text-sm text-slate-400">
          © {new Date().getFullYear()} {config.name}. All rights reserved.
        </p>
        <p className="text-xs text-slate-300">
          Questions?{' '}
          <a href="mailto:xorjf1027@naver.com" className={`underline ${accent.link}`}>
            Contact us
          </a>
        </p>
      </div>
    </footer>
  )
}
