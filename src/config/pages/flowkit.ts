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
    layout: 'split',
  },
  trustBadges: [
    'Self-hostable',
    'AI-powered workflows',
    'Cancel anytime',
  ],
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
    subtitle: 'Join the waitlist and consolidate all automations in one dashboard.',
    reasons: [
      'Free for up to 5 automations',
      'Self-host or cloud — your choice',
      'Early access to AI builder',
    ],
  },
  productPreview: {
    title: 'Automation Dashboard',
    subtitle: '12 automations, all healthy',
    items: [
      { label: 'Daily DB backup', value: 'Last run: 2 min ago — 0 failures this month' },
      { label: 'Slack → Jira sync', value: '847 runs this week', highlight: true },
      { label: 'Invoice PDF generator', value: 'Triggered by webhook' },
      { label: 'Data pipeline ETL', value: 'Slow run (12s vs avg 3s)', highlight: true },
      { label: 'Total runs this month', value: '24,391 — 99.7% success rate', highlight: true },
    ],
  },
  howItWorks: [
    { step: 1, title: 'Describe your automation', description: 'Type what you want in plain English. "Every morning, pull Stripe revenue and post to Slack." FlowKit generates the code.' },
    { step: 2, title: 'Set your trigger', description: 'Cron schedule, webhook, GitHub event, Slack message, email — pick any trigger. No YAML needed.' },
    { step: 3, title: 'Monitor from one dashboard', description: 'All automations, logs, and alerts in one place. Your team can monitor without SSH access.' },
  ],
  comparison: {
    heading: 'Why not just use Zapier?',
    subtitle: 'Zapier is $73/mo and can\'t run custom code. FlowKit is developer-first and self-hostable.',
    product: 'FlowKit',
    competitors: ['Zapier', 'n8n', 'Cron Jobs'],
    rows: [
      { feature: 'Custom code support', values: [true, false, true, true] },
      { feature: 'AI workflow builder', values: [true, false, false, false] },
      { feature: 'Self-hostable', values: [true, false, true, true] },
      { feature: 'Central dashboard', values: [true, true, true, false] },
      { feature: 'No task limits', values: [true, false, false, true] },
      { feature: 'Price', values: ['$29/mo', '$73/mo+', 'Free (self-host)', 'Free (your time)'] },
    ],
  },
  founderNote: {
    quote: 'I had 50 cron jobs on 3 servers and a Zapier bill that kept growing. I built FlowKit to put everything in one place.',
    author: 'The FlowKit Team',
    role: 'Built by a developer tired of scattered scripts',
  },
  testimonial: {
    quote: 'Migrated 30 cron jobs and 12 Zapier workflows in one afternoon. Haven\'t SSH\'d into a server for automations since.',
    author: 'Tom K.',
    role: 'Full-stack Developer, SaaS startup',
  },
  faq: [
    { question: 'Can I self-host FlowKit?', answer: 'Yes. FlowKit runs as a Docker container on any server. The free tier is self-host only. Cloud hosting is available on paid plans.' },
    { question: 'What languages can automations use?', answer: 'JavaScript/TypeScript and Python out of the box. The AI builder generates code in your preferred language.' },
    { question: 'How does the AI builder work?', answer: 'Describe what you want in plain English. FlowKit uses Claude to generate the automation code, runs a dry-run test, and shows you the output before deploying.' },
    { question: 'Can my team use it without coding?', answer: 'Yes. The AI builder handles code generation. Team members can monitor, trigger, and manage automations from the dashboard without writing code.' },
  ],
  seo: {
    title: 'FlowKit — Developer Automation Hub | Zapier Alternative',
    description: 'Replace Zapier, n8n, and scattered cron jobs with one AI-powered automation platform. Self-hostable, developer-first, unlimited runs.',
    keywords: ['zapier alternative open source', 'workflow automation developer', 'cron job automation tool'],
  },
}
