export type Variant = 'warm' | 'clinical' | 'bold' | 'minimal'

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
  variant?: Variant
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
    layout?: 'centered' | 'split'
    beforeAfter?: {
      before: string
      after: string
    }
  }
  trustBadges?: string[]
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
    reasons?: string[]
  }
  productPreview?: {
    title: string
    subtitle?: string
    items: Array<{
      label: string
      value: string
      highlight?: boolean
    }>
  }
  howItWorks?: Array<{
    step: number
    title: string
    description: string
  }>
  comparison?: {
    heading?: string
    subtitle?: string
    product: string
    competitors: string[]
    rows: Array<{
      feature: string
      values: Array<boolean | string>
    }>
  }
  founderNote?: {
    quote: string
    author: string
    role?: string
  }
  testimonial?: {
    quote: string
    author: string
    role: string
  }
  faq?: Array<{
    question: string
    answer: string
  }>
  sharing?: {
    shareText?: string
    communityTagline?: string
    channels?: ('x' | 'linkedin' | 'copy')[]
    referral?: boolean
  }
  seo: {
    title: string
    description: string
    ogDescription?: string
    keywords: string[]
  }
  conversions?: {
    primary: string
    secondary?: string[]
  }
}
