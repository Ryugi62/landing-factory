import type { PageConfig } from '@/config/type'

export const config: PageConfig = {
  slug: 'flowkit',
  name: 'FlowKit',
  tagline: 'All your automations. One place. AI-powered.',
  description: 'Replace scattered cron jobs, Zapier subscriptions, and bash scripts with one intelligent automation hub. Define workflows in plain English, run them from anywhere, monitor everything in one dashboard.',
  variant: 'bold',
  theme: {
    accent: 'violet',
    emoji: '⚡',
  },
  hero: {
    badge: 'Developer Automation',
    title: 'Your automations are',
    titleHighlight: 'everywhere',
    subtitle: '50 cron jobs on 3 servers. Zapier hitting its limits. Scripts only you can maintain. FlowKit consolidates everything — one dashboard, AI-powered, self-hostable.',
    cta: 'Join the waitlist',
  },
  problems: [
    {
      icon: '🗄️',
      title: 'Scripts scattered across servers',
      desc: 'Your automations live on 3 different servers. When one fails at 2am, you find out from a panicking teammate — not an alert.',
    },
    {
      icon: '💸',
      title: 'Zapier is too expensive & limited',
      desc: 'You hit Zapier\'s task limits every month. At $73/mo you\'re still paying for something that can\'t run custom code.',
    },
    {
      icon: '🔒',
      title: 'Only you can maintain it',
      desc: 'Your cron jobs and bash scripts work — but nobody else on the team can touch them without breaking something.',
    }
  ],
  features: [
    {
      icon: '🤖',
      title: 'AI Automation Builder',
      desc: 'Describe your automation in plain English. FlowKit uses Claude to generate the code, runs a dry-run, and deploys it — safely.',
      badge: 'Most popular',
    },
    {
      icon: '⚡',
      title: 'Universal Trigger Engine',
      desc: 'Cron, webhook, GitHub PR, Slack message, email — any event triggers any automation. No YAML config needed.',
    },
    {
      icon: '📊',
      title: 'Central Dashboard',
      desc: 'All automation runs, logs, success rates, and failure alerts in one place. Your team can monitor and edit without SSH access.',
    }
  ],
  pricing: [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      features: ['5 automations', '1,000 runs/month', 'Community support', 'Self-hostable'],
      highlight: false,
    },
    {
      name: 'Pro',
      price: '$29',
      period: '/month',
      features: ['Unlimited automations', '100K runs/month', 'AI automation builder', 'Slack & email alerts'],
      highlight: true,
    },
    {
      name: 'Team',
      price: '$99',
      period: '/month',
      features: ['Everything in Pro', '5 team members', 'Shared dashboard', 'Priority support'],
      highlight: false,
    }
  ],
  cta: {
    title: 'Retire your scattered cron jobs',
    subtitle: 'Join the waitlist. Be first when we launch.',
  },
  seo: {
    title: 'FlowKit — Developer Automation Hub | Zapier Alternative',
    description: 'Replace Zapier, n8n, and scattered cron jobs with one AI-powered automation platform. Self-hostable, developer-first, unlimited runs.',
    keywords: ['zapier alternative open source', 'workflow automation developer', 'cron job automation tool'],
  },
}
