import type { PageConfig } from '@/config/type'

export const config: PageConfig = {
  slug: 'portfolioshield',
  name: 'PortfolioShield',
  tagline: 'Know exactly how today\'s news hits your portfolio.',
  description: 'AI-powered news impact scoring for your personal portfolio. Stop guessing — get an instant impact score when market-moving news breaks.',
  variant: 'bold',
  theme: {
    accent: 'blue',
    emoji: '🛡️',
  },
  hero: {
    badge: 'AI Portfolio Intelligence',
    title: 'See how breaking news',
    titleHighlight: 'hits your portfolio',
    subtitle: 'Trump tariffs. Fed decisions. Geopolitical shocks. PortfolioShield scores the impact on YOUR holdings — not the market.',
    cta: 'Join the waitlist',
    layout: 'split',
  },
  trustBadges: [
    'Real-time news analysis',
    'Personalized to YOUR holdings',
    'Cancel anytime',
  ],
  problems: [
    { icon: '📰', title: 'Too much noise', desc: 'Hundreds of headlines daily. You spend 30+ minutes filtering what actually matters to your positions.' },
    { icon: '😰', title: 'Gut-feel decisions', desc: 'You read the news but can\'t quickly quantify: will this hurt my NVIDIA more than my Tesla?' },
    { icon: '⏰', title: 'Always late to react', desc: 'By the time you analyze the news and decide, the market has already moved.' },
  ],
  features: [
    { icon: '🎯', title: 'News Impact Score', desc: 'Every major news event scored -10 to +10 for YOUR portfolio. With 3-line reasoning and historical pattern matching.', badge: 'Most popular' },
    { icon: '🔔', title: 'Portfolio Alerts', desc: 'Push alerts only when news affects your holdings. Zero noise. 100% relevant.' },
    { icon: '📊', title: 'Weekly Impact Digest', desc: 'Monday morning: top 5 news events that moved your portfolio last week, ranked by actual impact.' },
  ],
  pricing: [
    { name: 'Free', price: '$0', period: 'forever', features: ['3 holdings tracked', '5 news analyses/day', 'Weekly digest'], highlight: false },
    { name: 'Pro', price: '$29', period: '/month', features: ['Unlimited holdings', 'Real-time push alerts', 'Unlimited news analysis', 'Impact history'], highlight: true },
    { name: 'Pro+', price: '$49', period: '/month', features: ['Everything in Pro', '5 portfolios', 'API access', 'Custom alert rules'], highlight: false },
  ],
  cta: {
    title: 'Stop guessing. Start knowing.',
    subtitle: 'Join the waitlist and see how news actually impacts your portfolio.',
    reasons: ['Free for 3 holdings', 'Real-time push alerts from day one', 'Early access to weekly digest'],
  },
  productPreview: {
    title: 'Portfolio Impact — Breaking News',
    subtitle: '"Fed holds rates steady at 5.25%"',
    items: [
      { label: 'NVDA (32%)', value: 'Impact: +3 — Growth stocks benefit', highlight: true },
      { label: 'AAPL (25%)', value: 'Impact: +1 — Neutral to slight positive' },
      { label: 'TLT (18%)', value: 'Impact: -2 — Bond ETF dips on hold', highlight: true },
      { label: 'Overall portfolio', value: 'Net impact: +1.5 — Slightly positive' },
      { label: 'Action suggested', value: 'Hold current positions — no rebalance needed', highlight: true },
    ],
  },
  howItWorks: [
    { step: 1, title: 'Enter your holdings', description: 'Add your stocks, ETFs, and crypto. Set allocation percentages. Takes 2 minutes.' },
    { step: 2, title: 'News breaks, you get scored', description: 'When market-moving news hits, PortfolioShield scores its impact on each of your holdings — with reasoning.' },
    { step: 3, title: 'Act or ignore, informed', description: 'Push alerts for high-impact events. Weekly digest of everything else. No noise, just signal.' },
  ],
  comparison: {
    heading: 'Why not just read the news yourself?',
    subtitle: 'You read 50 headlines a day. PortfolioShield tells you which 3 actually matter to YOUR portfolio.',
    product: 'PortfolioShield',
    competitors: ['Bloomberg', 'Yahoo Finance', 'Reddit/Twitter'],
    rows: [
      { feature: 'Personalized to your holdings', values: [true, true, false, false] },
      { feature: 'AI impact scoring', values: [true, false, false, false] },
      { feature: 'Push alerts', values: [true, true, true, false] },
      { feature: 'Weekly digest', values: [true, false, false, false] },
      { feature: 'Under $30/mo', values: [true, false, true, true] },
      { feature: 'Price', values: ['$29/mo', '$25K+/yr', 'Free', 'Free'] },
    ],
  },
  founderNote: {
    quote: 'Every time Trump tweets about tariffs, I scramble to figure out what it means for MY positions. PortfolioShield answers that in seconds.',
    author: 'The PortfolioShield Team',
    role: 'Built by a retail investor tired of guessing',
  },
  testimonial: {
    quote: 'Got a push alert about the Fed decision and its exact impact on my NVDA position. Saved me from panic-selling.',
    author: 'Kevin R.',
    role: 'Retail Investor, 8-stock portfolio',
  },
  faq: [
    { question: 'Is this financial advice?', answer: 'No. PortfolioShield provides AI-generated analysis for informational purposes only. It is not a registered investment advisor. Always do your own research.' },
    { question: 'What markets are covered?', answer: 'US stocks, major ETFs, and top 20 cryptocurrencies. International stocks and commodities are coming soon.' },
    { question: 'How fast are the alerts?', answer: 'Breaking news is analyzed within minutes of publication. Push alerts go out immediately for high-impact events (score +/-5 or higher).' },
    { question: 'Can I track multiple portfolios?', answer: 'Free tracks 1 portfolio (3 holdings). Pro tracks 1 portfolio (unlimited). Pro+ tracks up to 5 separate portfolios.' },
  ],
  seo: {
    title: 'PortfolioShield — AI News Impact Scoring for Your Portfolio',
    description: 'Know instantly how Trump tariffs, Fed decisions, and geopolitical events impact your personal stock portfolio. AI-powered impact scores.',
    keywords: ['portfolio news impact', 'trump tariff portfolio', 'AI portfolio analysis', 'bloomberg terminal alternative', 'personalized stock news'],
  },
}
