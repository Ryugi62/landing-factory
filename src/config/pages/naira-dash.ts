import type { PageConfig } from '@/config/type'

export const config: PageConfig = {
  slug: 'naira-dash',
  name: 'NairaDash',
  tagline: 'All your Nigerian banks. One smart dashboard.',
  description: 'Connect all your Nigerian bank accounts and get AI-powered budget insights in one place. Track spending across GTBank, Access, Kuda, OPay, and 50+ more banks automatically.',
  variant: 'bold',
  theme: {
    accent: 'emerald',
    emoji: '💰',
  },
  hero: {
    badge: 'Nigerian Personal Finance',
    title: '5 bank apps is',
    titleHighlight: 'too many',
    subtitle: 'Connect all your Nigerian bank accounts once. NairaDash tracks your spending, sets budgets, and alerts you — automatically.',
    cta: 'Join the waitlist',
    layout: 'split',
  },
  trustBadges: [
    'Bank-level encryption',
    '50+ Nigerian banks',
    'Cancel anytime',
  ],
  problems: [
    { icon: '📱', title: 'Too many banking apps', desc: 'The average Nigerian has 2–4 bank accounts across different apps. Checking each one daily wastes 15+ minutes.' },
    { icon: '😵', title: 'No idea where money went', desc: 'Month-end arrives and you can\'t explain why your balance is low. Manual tracking in Excel fails within days.' },
    { icon: '🚨', title: 'Overspending surprises', desc: 'You only discover you overspent on food or transfers after the damage is done — with no warning.' }
  ],
  features: [
    { icon: '🔗', title: 'Multi-Bank Connect', desc: 'Link 50+ Nigerian banks including GTBank, Access, Zenith, Kuda, OPay in one click via Mono.co secure API.', badge: 'Most popular' },
    { icon: '🤖', title: 'AI Spend Classifier', desc: 'Every transaction is automatically categorized — food, transport, bills, transfers — so you see exactly where your naira goes.' },
    { icon: '🔔', title: 'Smart Budget Alerts', desc: 'Set monthly limits per category. Get notified at 80% and 100% before you overshoot — not after.' }
  ],
  pricing: [
    { name: 'Free', price: '$0', period: 'forever', features: ['2 bank accounts', 'Basic balance view', 'Last 30 days history'], highlight: false },
    { name: 'Pro', price: '$5', period: '/month', features: ['Unlimited accounts', 'AI spend classification', 'Budget alerts & reports', 'Monthly financial recap'], highlight: true },
    { name: 'Family', price: '$12', period: '/month', features: ['Everything in Pro', 'Up to 3 family members', 'Shared budget dashboard', 'Priority support'], highlight: false }
  ],
  cta: {
    title: 'Stop juggling 5 banking apps',
    subtitle: 'Join the waitlist and see all your accounts in one dashboard.',
    reasons: ['Free for 2 bank accounts', 'Secure Mono.co connection', 'Early access + founding pricing'],
  },
  productPreview: {
    title: 'March Spending — All Accounts',
    subtitle: 'GTBank + Kuda + OPay combined',
    items: [
      { label: 'Total Balance', value: '₦847,200 across 3 accounts', highlight: true },
      { label: 'Food & Dining', value: '₦124,500 — 82% of ₦150K budget', highlight: true },
      { label: 'Transport', value: '₦45,200 — Bolt + fuel' },
      { label: 'Transfers Out', value: '₦280,000 — rent + family' },
      { label: 'Budget Alert', value: 'Entertainment at 95% of limit', highlight: true },
    ],
  },
  howItWorks: [
    { step: 1, title: 'Connect your banks', description: 'Link GTBank, Access, Kuda, OPay, and 50+ others securely via Mono.co. One-time setup, 2 minutes.' },
    { step: 2, title: 'AI classifies your spending', description: 'Every transaction is automatically categorized — food, transport, bills, transfers. No manual tagging.' },
    { step: 3, title: 'Set budgets and get alerts', description: 'Monthly limits per category. Get notified at 80% before you overshoot. Monthly recap every 1st.' },
  ],
  comparison: {
    heading: 'Why not just check each app?',
    subtitle: 'Checking 4 apps takes 15 minutes daily. NairaDash shows everything in one glance.',
    product: 'NairaDash',
    competitors: ['Bank Apps', 'Excel Tracker', 'Piggyvest'],
    rows: [
      { feature: 'All banks in one view', values: [true, false, true, false] },
      { feature: 'Auto spend classification', values: [true, false, false, false] },
      { feature: 'Budget alerts', values: [true, false, false, true] },
      { feature: 'Multi-bank support', values: [true, false, true, false] },
      { feature: 'No manual entry', values: [true, true, false, false] },
      { feature: 'Price', values: ['$5/mo', 'Free', 'Free (your time)', 'Free'] },
    ],
  },
  founderNote: {
    quote: 'I have GTBank, Kuda, and OPay. Every month-end I had no idea where my money went. I built NairaDash to see everything in one place.',
    author: 'The NairaDash Team',
    role: 'Built by a Nigerian tired of juggling bank apps',
  },
  testimonial: {
    quote: 'Finally I can see all my accounts without opening 4 different apps. The spending breakdown saved me ₦50K last month.',
    author: 'Chidi O.',
    role: 'Software Developer, Lagos',
  },
  faq: [
    { question: 'Is my bank data safe?', answer: 'Yes. NairaDash connects via Mono.co, a CBN-licensed financial data provider. We use bank-level encryption and never store your bank credentials.' },
    { question: 'Which banks are supported?', answer: 'GTBank, Access Bank, Zenith, First Bank, UBA, Kuda, OPay, PalmPay, Moniepoint, and 40+ more.' },
    { question: 'Does it work with USD or crypto accounts?', answer: 'Currently Naira accounts only. USD domiciliary accounts and crypto tracking are on the roadmap.' },
    { question: 'Can I share with my partner?', answer: 'The Family plan ($12/mo) supports up to 3 family members with a shared budget dashboard while keeping individual account details private.' },
  ],
  seo: {
    title: 'NairaDash — Budget App for Nigerians with Multiple Bank Accounts',
    description: 'Track all your Nigerian bank accounts in one dashboard. AI-powered expense categorization and budget alerts for GTBank, Access, Kuda, OPay, and 50+ Nigerian banks.',
    keywords: ['budget app Nigeria', 'expense tracker Nigeria', 'manage multiple bank accounts Nigeria'],
  },
}
