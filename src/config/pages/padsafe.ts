import type { PageConfig } from '@/config/type'

export const config: PageConfig = {
  slug: 'padsafe',
  name: 'PadSafe',
  tagline: 'Scan your period products. Know exactly what\'s inside.',
  description: 'PadSafe instantly checks the ingredients in your sanitary pads, tampons, and period products — flagging toxic chemicals so you can make safer choices for yourself and your family.',
  variant: 'clinical',
  theme: {
    accent: 'rose',
    emoji: '🩸',
  },
  hero: {
    badge: 'Period Care Safety',
    title: 'Finally know what\'s',
    titleHighlight: 'in your pads',
    subtitle: 'Scan the barcode. See every ingredient. Get a safety rating in 5 seconds — no more guessing what\'s touching your body.',
    cta: 'Join the waitlist',
    layout: 'split',
  },
  trustBadges: [
    'FDA & EU CosIng data sources',
    'Scans 30+ chemicals',
    'Cancel anytime',
  ],
  problems: [
    { icon: '🔍', title: 'Hidden ingredients', desc: 'Most pad brands don\'t list all ingredients. You have no idea what VOCs, fragrances, or PFAS might be inside.' },
    { icon: '⚠️', title: 'No trusted comparison tool', desc: 'Google gives you scattered blog posts. There\'s no single place to compare period product safety across brands.' },
    { icon: '👨‍👩‍👧', title: 'Especially scary for your kids', desc: 'Choosing the first period product for your daughter? You deserve verified safety info, not just "organic" marketing claims.' },
  ],
  features: [
    { icon: '📷', title: 'Instant barcode scan', desc: 'Point your camera at any pad or tampon. Get a full ingredient breakdown and safety score in seconds.', badge: 'Most popular' },
    { icon: '🧪', title: 'Toxic chemical flags', desc: 'We flag PFAS, dioxins, VOCs, phthalates, and 30+ chemicals of concern — sourced from FDA, EU CosIng, and independent research.' },
    { icon: '✅', title: 'Safer alternatives', desc: 'Get matched with cleaner options at the same price point, so switching is easy.' },
  ],
  pricing: [
    { name: 'Free', price: '$0', period: 'forever', features: ['5 scans per month', 'Basic safety rating', 'Top 50 brands covered'], highlight: false },
    { name: 'Family', price: '$4.99', period: '/month', features: ['Unlimited scans', 'Full ingredient breakdown', '2 family profiles', 'No ads'], highlight: true },
    { name: 'Pro', price: '$7.99', period: '/month', features: ['Everything in Family', 'Safety alerts for new studies', '5 family profiles', 'Monthly safety report'], highlight: false },
  ],
  cta: {
    title: 'Your period products shouldn\'t be a mystery',
    subtitle: 'Join the waitlist and scan your first product for free.',
    reasons: ['5 free scans/month forever', 'Independent safety data', 'Early access to family profiles'],
  },
  productPreview: {
    title: 'Scan Result — Always Ultra Thin',
    subtitle: 'Safety score: 6.2/10',
    items: [
      { label: 'Fragrance detected', value: 'Undisclosed chemical blend', highlight: true },
      { label: 'Chlorine bleaching', value: 'Potential dioxin traces', highlight: true },
      { label: 'No PFAS detected', value: 'Per- and polyfluoroalkyl free' },
      { label: 'Cotton content', value: '85% cotton topsheet' },
      { label: 'Safer alternative', value: 'Rael Organic — Score 9.1/10', highlight: true },
    ],
  },
  howItWorks: [
    { step: 1, title: 'Scan the barcode', description: 'Point your camera at any pad, tampon, or liner package. PadSafe identifies the product instantly.' },
    { step: 2, title: 'See every ingredient', description: 'Full ingredient breakdown with safety flags for PFAS, dioxins, VOCs, phthalates, and 30+ chemicals of concern.' },
    { step: 3, title: 'Find safer options', description: 'Get matched with cleaner products at the same price point. Easy comparison, easy switch.' },
  ],
  comparison: {
    heading: 'Why not just read the label?',
    subtitle: 'Most brands don\'t list all ingredients. PadSafe uses independent testing data and FDA/EU databases.',
    product: 'PadSafe',
    competitors: ['Product Label', 'Google Search', 'EWG Database'],
    rows: [
      { feature: 'Full ingredient list', values: [true, false, false, true] },
      { feature: 'Safety score', values: [true, false, false, true] },
      { feature: 'Barcode scan', values: [true, false, false, false] },
      { feature: 'Safer alternatives', values: [true, false, false, false] },
      { feature: 'Period product specific', values: [true, false, false, false] },
      { feature: 'Price', values: ['$4.99/mo', 'Free', 'Free', 'Free'] },
    ],
  },
  founderNote: {
    quote: 'When my daughter got her first period, I realized I had no idea what was in the products I was buying her. That scared me enough to build PadSafe.',
    author: 'The PadSafe Team',
    role: 'Built by a parent who wanted better answers',
  },
  testimonial: {
    quote: 'I scanned my usual pads and found undisclosed fragrances. Switched to a clean alternative that PadSafe recommended — same price, way safer.',
    author: 'Amy H.',
    role: 'Mom of two teenage daughters',
  },
  faq: [
    { question: 'Where does the safety data come from?', answer: 'We cross-reference FDA databases, EU CosIng (cosmetic ingredient database), published research papers, and independent lab testing results.' },
    { question: 'Is this medical advice?', answer: 'No. PadSafe provides ingredient transparency and safety information based on published research. It is not a substitute for medical advice.' },
    { question: 'What if my product isn\'t in the database?', answer: 'You can request a product scan. We add new products weekly based on user requests. Popular brands are prioritized.' },
    { question: 'Does it work for tampons and liners too?', answer: 'Yes. PadSafe covers pads, tampons, panty liners, menstrual cups, and period underwear from 200+ brands.' },
  ],
  seo: {
    title: 'PadSafe — Sanitary Pad Ingredient Checker & Safety Scanner',
    description: 'Scan the barcode of any sanitary pad or tampon to instantly check ingredients for PFAS, VOCs, dioxins, and 30+ toxic chemicals. Free to use.',
    keywords: ['sanitary pad ingredients', 'tampon safety checker', 'PFAS in period products', 'period product ingredient scanner', 'toxic chemicals in pads'],
  },
}
