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
  },
  problems: [
    {
      icon: '📱',
      title: 'Too many banking apps',
      desc: 'The average Nigerian has 2–4 bank accounts across different apps. Checking each one daily wastes 15+ minutes.',
    },
    {
      icon: '😵',
      title: 'No idea where money went',
      desc: 'Month-end arrives and you can\'t explain why your balance is low. Manual tracking in Excel fails within days.',
    },
    {
      icon: '🚨',
      title: 'Overspending surprises',
      desc: 'You only discover you overspent on food or transfers after the damage is done — with no warning.',
    }
  ],
  features: [
    {
      icon: '🔗',
      title: 'Multi-Bank Connect',
      desc: 'Link 50+ Nigerian banks including GTBank, Access, Zenith, Kuda, OPay in one click via Mono.co secure API.',
      badge: 'Most popular',
    },
    {
      icon: '🤖',
      title: 'AI Spend Classifier',
      desc: 'Every transaction is automatically categorized — food, transport, bills, transfers — so you see exactly where your naira goes.',
    },
    {
      icon: '🔔',
      title: 'Smart Budget Alerts',
      desc: 'Set monthly limits per category. Get notified at 80% and 100% before you overshoot — not after.',
    }
  ],
  pricing: [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      features: ['2 bank accounts', 'Basic balance view', 'Last 30 days history'],
      highlight: false,
    },
    {
      name: 'Pro',
      price: '$5',
      period: '/month',
      features: ['Unlimited accounts', 'AI spend classification', 'Budget alerts & reports', 'Monthly financial recap'],
      highlight: true,
    },
    {
      name: 'Family',
      price: '$12',
      period: '/month',
      features: ['Everything in Pro', 'Up to 3 family members', 'Shared budget dashboard', 'Priority support'],
      highlight: false,
    }
  ],
  cta: {
    title: 'Stop juggling 5 banking apps',
    subtitle: 'Join the waitlist. Be first when we launch.',
  },
  seo: {
    title: 'NairaDash — Budget App for Nigerians with Multiple Bank Accounts',
    description: 'Track all your Nigerian bank accounts in one dashboard. AI-powered expense categorization and budget alerts for GTBank, Access, Kuda, OPay, and 50+ Nigerian banks.',
    keywords: ['budget app Nigeria', 'expense tracker Nigeria', 'manage multiple bank accounts Nigeria'],
  },
}
