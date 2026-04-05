import type { PageConfig } from '@/config/type'

export const config: PageConfig = {
  slug: 'portfolioshield',
  name: 'PortfolioShield',
  tagline: "Know exactly how today's news hits your portfolio.",
  description:
    "AI-powered news impact scoring for your personal portfolio. Stop guessing — get an instant impact score when market-moving news breaks.",
  variant: 'bold',
  theme: {
    accent: 'blue',
    emoji: '🛡️',
  },
  hero: {
    badge: 'AI Portfolio Intelligence',
    title: 'See how breaking news',
    titleHighlight: 'hits your portfolio',
    subtitle:
      'Trump tariffs. Fed decisions. Geopolitical shocks. PortfolioShield scores the impact on YOUR holdings — not the market.',
    cta: 'Join the waitlist',
  },
  problems: [
    {
      icon: '📰',
      title: 'Too much noise',
      desc: 'Hundreds of headlines daily. You spend 30+ minutes filtering what actually matters to your positions.',
    },
    {
      icon: '😰',
      title: 'Gut-feel decisions',
      desc: "You read the news but can't quickly quantify: will this hurt my NVIDIA more than my Tesla?",
    },
    {
      icon: '⏰',
      title: 'Always late to react',
      desc: 'By the time you analyze the news and decide, the market has already moved.',
    },
  ],
  features: [
    {
      icon: '🎯',
      title: 'News Impact Score',
      desc: 'Every major news event scored -10 to +10 for YOUR portfolio. With 3-line reasoning and historical pattern matching.',
      badge: 'Most popular',
    },
    {
      icon: '🔔',
      title: 'Portfolio Alerts',
      desc: 'Push alerts only when news affects your holdings. Zero noise. 100% relevant.',
    },
    {
      icon: '📊',
      title: 'Weekly Impact Digest',
      desc: 'Monday morning: top 5 news events that moved your portfolio last week, ranked by actual impact.',
    },
  ],
  pricing: [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      features: ['3 holdings tracked', '5 news analyses/day', 'Weekly digest'],
      highlight: false,
    },
    {
      name: 'Pro',
      price: '$29',
      period: '/month',
      features: ['Unlimited holdings', 'Real-time push alerts', 'Unlimited news analysis', 'Impact history'],
      highlight: true,
    },
    {
      name: 'Pro+',
      price: '$49',
      period: '/month',
      features: ['Everything in Pro', '5 portfolios', 'API access', 'Custom alert rules'],
      highlight: false,
    },
  ],
  cta: {
    title: 'Stop guessing. Start knowing.',
    subtitle: 'Join the waitlist. Be first when we launch.',
  },
  seo: {
    title: 'PortfolioShield — AI News Impact Scoring for Your Portfolio',
    description:
      'Know instantly how Trump tariffs, Fed decisions, and geopolitical events impact your personal stock portfolio. AI-powered impact scores.',
    keywords: [
      'portfolio news impact',
      'trump tariff portfolio',
      'AI portfolio analysis',
      'bloomberg terminal alternative',
      'personalized stock news',
    ],
  },
}
