import type { PageConfig } from '@/config/type'

export const config: PageConfig = {
  slug: 'dealshield',
  name: 'DealShield',
  tagline: 'Stop getting ghosted. Get paid for every frame.',
  description: 'The deal manager built for UGC creators. Create contracts, send invoices, and track usage rights — all in one place. No more DM deals, no more disappearing brands.',
  variant: 'warm',
  theme: {
    accent: 'indigo',
    emoji: '🛡️',
  },
  hero: {
    badge: 'UGC Creator Tools',
    title: 'Stop getting ghosted.',
    titleHighlight: 'Get paid for every frame.',
    subtitle: 'Contracts, invoices, and usage rights tracking — built for UGC creators who are tired of DM deals and disappearing brands.',
    cta: 'Get started free — 3 deals on us',
    ctaUrl: 'https://dealshield-beryl.vercel.app/signup',
    layout: 'split',
  },
  trustBadges: ['Built for UGC creators', 'Not legal advice — pro templates', 'No credit card required'],
  problems: [
    {
      icon: '👻',
      title: 'Brand ghosting is killing your income',
      desc: 'You deliver the content, then the brand disappears. No contract means no leverage — and no payment.',
    },
    {
      icon: '📋',
      title: 'DM deals have zero protection',
      desc: 'Instagram DMs aren\'t contracts. When disputes happen, you have nothing to show. Creators without contracts lose 40% more to disputes.',
    },
    {
      icon: '♾️',
      title: 'Your face is being used forever for free',
      desc: 'Brands run your UGC as paid ads for years on a one-time $200 deal. Without usage rights tracking, you\'ll never know when to renegotiate.',
    }
  ],
  features: [
    {
      icon: '✍️',
      title: 'One-Click Contracts',
      desc: 'UGC-specific templates with usage rights, revision limits, and payment terms built in. Send to brands in 60 seconds — they e-sign without creating an account.',
      badge: 'Core feature',
    },
    {
      icon: '💰',
      title: 'Auto-Invoices',
      desc: 'Invoices generate automatically when you mark deliverables as complete. No more forgetting to bill or chasing payments through DMs.',
    },
    {
      icon: '📅',
      title: 'Usage Rights Calendar',
      desc: 'See exactly when each brand\'s content rights expire. Get alerts before renewals so you never give away perpetual ad rights again.',
    }
  ],
  pricing: [
    {
      name: 'Starter',
      price: '$0',
      period: 'for your first 3 deals',
      features: ['3 contracts', '3 invoices', 'Usage rights calendar', 'PDF export'],
      highlight: false,
    },
    {
      name: 'Creator Pro',
      price: '$19',
      period: '/month',
      features: ['Unlimited contracts', 'Unlimited invoices', 'Usage rights alerts', 'Brand e-sign (no account needed)', 'Deal analytics dashboard', 'Priority support'],
      highlight: true,
    },
    {
      name: 'Agency',
      price: '$39',
      period: '/month',
      features: ['Everything in Pro', '5 team members', 'Client portal', 'Bulk contract templates', 'Revenue reporting'],
      highlight: false,
    }
  ],
  cta: {
    title: 'Ready to protect your next brand deal?',
    subtitle: 'Your first 3 deals are completely free — no credit card required.',
    reasons: ['Free for 3 deals', '60-second contracts', 'Usage rights tracking'],
  },
  productPreview: {
    title: 'Deal #47 — GlowUp Cosmetics',
    subtitle: 'UGC video contract created in 60 seconds',
    items: [
      { label: 'Deliverable', value: '2x TikTok UGC videos (30s each)' },
      { label: 'Rate', value: '$350 total', highlight: true },
      { label: 'Usage Rights', value: '90 days — expires Jun 15, 2026' },
      { label: 'Revisions', value: '1 included, $75/extra' },
      { label: 'Payment', value: '50% upfront, 50% on delivery' },
      { label: 'Status', value: 'Delivered · Invoice sent · Paid in 3 days', highlight: true },
    ],
  },
  howItWorks: [
    { step: 1, title: 'Create a deal', description: 'Pick a contract template, set your rate, usage rights duration, and revision limits. Takes 60 seconds.' },
    { step: 2, title: 'Brand signs & you deliver', description: 'Share the contract link. Brands e-sign without creating an account. Upload deliverables when ready.' },
    { step: 3, title: 'Get paid & track rights', description: 'Invoice auto-generates on delivery. Usage calendar tracks when rights expire so you can renegotiate or take down content.' },
  ],
  comparison: {
    heading: 'Why not just use Bonsai or HoneyBook?',
    subtitle: 'They\'re built for freelancers. DealShield is built for UGC creators.',
    product: 'DealShield',
    competitors: ['Bonsai', 'HoneyBook', 'Google Docs'],
    rows: [
      { feature: 'UGC-specific contract templates', values: [true, false, false, false] },
      { feature: 'Usage rights expiry tracking', values: [true, false, false, false] },
      { feature: 'Auto-invoice on delivery', values: [true, true, true, false] },
      { feature: 'Brand signs without account', values: [true, false, false, true] },
      { feature: 'Free tier for new creators', values: [true, false, false, true] },
      { feature: 'Built for $19/mo (not $35+)', values: [true, false, false, true] },
    ],
  },
  founderNote: {
    quote: 'I built DealShield after watching too many creator friends get ghosted on deals or find their face in ads months after the contract \'ended.\' Every creator deserves to get paid fairly and know exactly where their content is being used.',
    author: 'DealShield Team',
    role: 'Creators building for creators',
  },
  testimonial: {
    quote: 'I got ghosted twice last year on $400+ deals. Now I send a DealShield contract link and brands take me more seriously. Got paid within a week on my last 5 deals.',
    author: 'Mia T.',
    role: 'UGC Creator, 15 brand deals/month',
  },
  faq: [
    { question: 'Are the contracts legally binding?', answer: 'DealShield provides professional contract templates designed for UGC deals, not legal advice. Our templates cover deliverables, payment terms, usage rights, and revision limits. For high-value or complex deals, we recommend consulting a lawyer.' },
    { question: 'What if the brand doesn\'t want to use a contract tool?', answer: 'No problem — you can export any contract as a PDF and send it via email or DM. Brands just need to e-sign through a simple link. No account required.' },
    { question: 'How does the free tier work?', answer: 'Your first 3 deals are completely free with full features. No credit card required. After that, Creator Pro is $19/month for unlimited deals.' },
    { question: 'Can I track deals from before I started using DealShield?', answer: 'Yes — you can manually add past deals to track their usage rights expiry dates. Great for catching brands that are still running your content past the agreed period.' },
  ],
  sharing: {
    referral: true,
  },
  seo: {
    title: 'DealShield — UGC Creator Deal Manager | Contracts, Invoices & Usage Rights',
    description: 'Stop getting ghosted by brands. DealShield helps UGC creators create contracts, send invoices, and track content usage rights — all in one place. Free for 3 deals.',
    keywords: ['ugc creator tools', 'ugc contract template', 'content creator invoice', 'brand deal management', 'usage rights tracking', 'ugc creator software'],
  },
  conversions: {
    primary: 'dealshield_waitlist_signup',
  },
}
