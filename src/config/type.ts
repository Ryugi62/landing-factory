export type AccentColor =
  | 'rose'
  | 'violet'
  | 'blue'
  | 'emerald'
  | 'orange'
  | 'amber'
  | 'pink'
  | 'indigo'

export type PageConfig = {
  slug: string
  name: string
  tagline: string
  description: string
  theme: {
    accent: AccentColor
    emoji: string
  }
  hero: {
    badge: string
    title: string
    titleHighlight: string
    subtitle: string
    cta: string
  }
  problems: Array<{
    icon: string
    title: string
    desc: string
  }>
  features: Array<{
    icon: string
    title: string
    desc: string
    badge?: string
  }>
  pricing: Array<{
    name: string
    price: string
    period: string
    features: string[]
    highlight: boolean
  }>
  cta: {
    title: string
    subtitle: string
  }
  seo: {
    title: string
    description: string
    keywords: string[]
  }
}
