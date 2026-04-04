import type { PageConfig } from '@/config/type'

export const config: PageConfig = {
  slug: 'padsafe',
  name: 'PadSafe',
  tagline: "Scan your period products. Know exactly what's inside.",
  description:
    'PadSafe instantly checks the ingredients in your sanitary pads, tampons, and period products — flagging toxic chemicals so you can make safer choices for yourself and your family.',
  theme: {
    accent: 'rose',
    emoji: '🩸',
  },
  hero: {
    badge: 'Period Care Safety',
    title: "Finally know what's",
    titleHighlight: 'in your pads',
    subtitle:
      "Scan the barcode. See every ingredient. Get a safety rating in 5 seconds — no more guessing what's touching your body.",
    cta: 'Join the waitlist',
  },
  problems: [
    {
      icon: '🔍',
      title: 'Hidden ingredients',
      desc: "Most pad brands don't list all ingredients. You have no idea what VOCs, fragrances, or PFAS might be inside.",
    },
    {
      icon: '⚠️',
      title: 'No trusted comparison tool',
      desc: "Google gives you scattered blog posts. There's no single place to compare period product safety across brands.",
    },
    {
      icon: '👨‍👩‍👧',
      title: 'Especially scary for your kids',
      desc: 'Choosing the first period product for your daughter? You deserve verified safety info, not just "organic" marketing claims.',
    },
  ],
  features: [
    {
      icon: '📷',
      title: 'Instant barcode scan',
      desc: 'Point your camera at any pad or tampon. Get a full ingredient breakdown and safety score in seconds.',
      badge: 'Most popular',
    },
    {
      icon: '🧪',
      title: 'Toxic chemical flags',
      desc: 'We flag PFAS, dioxins, VOCs, phthalates, and 30+ chemicals of concern — sourced from FDA, EU CosIng, and independent research.',
    },
    {
      icon: '✅',
      title: 'Safer alternatives',
      desc: 'Get matched with cleaner options at the same price point, so switching is easy.',
    },
  ],
  pricing: [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      features: ['5 scans per month', 'Basic safety rating', 'Top 50 brands covered'],
      highlight: false,
    },
    {
      name: 'Family',
      price: '$4.99',
      period: '/month',
      features: ['Unlimited scans', 'Full ingredient breakdown', '2 family profiles', 'No ads'],
      highlight: true,
    },
    {
      name: 'Pro',
      price: '$7.99',
      period: '/month',
      features: [
        'Everything in Family',
        'Safety alerts for new studies',
        '5 family profiles',
        'Monthly safety report',
      ],
      highlight: false,
    },
  ],
  cta: {
    title: "Your period products shouldn't be a mystery",
    subtitle: 'Join the waitlist. Be first when we launch.',
  },
  seo: {
    title: 'PadSafe — Sanitary Pad Ingredient Checker & Safety Scanner',
    description:
      'Scan the barcode of any sanitary pad or tampon to instantly check ingredients for PFAS, VOCs, dioxins, and 30+ toxic chemicals. Free to use.',
    keywords: [
      'sanitary pad ingredients',
      'tampon safety checker',
      'PFAS in period products',
      'period product ingredient scanner',
      'toxic chemicals in pads',
    ],
  },
}
