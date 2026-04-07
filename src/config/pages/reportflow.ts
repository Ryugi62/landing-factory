import type { PageConfig } from '@/config/type'

export const config: PageConfig = {
  slug: 'reportflow',
  name: 'ReportFlow',
  tagline: 'Automated reports, delivered to every client on schedule.',
  description: 'Connect your data sources once. ReportFlow automatically generates and delivers branded PDF reports to every client — no more manual exports, no more broken Looker Studio schedules.',
  variant: 'bold',
  theme: {
    accent: 'blue',
    emoji: '📊',
  },
  hero: {
    badge: 'Report Automation',
    title: 'Stop manually sending',
    titleHighlight: 'client reports',
    subtitle: 'Connect your data sources once. ReportFlow auto-generates and delivers branded PDFs to every client on your schedule.',
    cta: 'Join the waitlist',
  },
  problems: [
    {
      icon: '⏰',
      title: 'Looker Studio breaks every month',
      desc: 'Google API quota throttling crashes your dashboards right when clients need their monthly reports.',
    },
    {
      icon: '😩',
      title: '22 clients = 22 manual exports',
      desc: 'You spend an entire day downloading PDFs and sending emails. Every. Single. Month.',
    },
    {
      icon: '🐛',
      title: 'Cron jobs that fail at 3AM',
      desc: 'Your custom Python scripts work — until they don\'t. No alerts, no logs, just angry clients.',
    }
  ],
  features: [
    {
      icon: '🔌',
      title: 'Connect any data source',
      desc: 'PostgreSQL, MySQL, GA4, Stripe, HubSpot, CSV — connected in minutes, not days.',
      badge: 'Most popular',
    },
    {
      icon: '🎨',
      title: 'Branded report builder',
      desc: 'Drag-and-drop charts, tables, and KPI cards. Set each client\'s logo and colors once.',
    },
    {
      icon: '📬',
      title: 'Automatic scheduled delivery',
      desc: 'Daily, weekly, or monthly — ReportFlow sends PDF reports via email or Slack with retry logic.',
    }
  ],
  pricing: [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      features: ['1 data source', '3 reports', '5 sends/month'],
      highlight: false,
    },
    {
      name: 'Pro',
      price: '$79',
      period: '/month',
      features: ['5 data sources', '20 reports', '100 sends/month', 'PDF branding'],
      highlight: true,
    },
    {
      name: 'Agency',
      price: '$199',
      period: '/month',
      features: ['Unlimited everything', 'White-label reports', 'Client portal', 'Priority support'],
      highlight: false,
    }
  ],
  cta: {
    title: 'Your clients deserve better reports.',
    subtitle: 'Join the waitlist. Be first when we launch.',
  },
  seo: {
    title: 'ReportFlow — Automated Report Delivery for Agencies & Data Teams',
    description: 'Stop manually exporting PDFs. ReportFlow connects your data sources and automatically delivers branded client reports on any schedule.',
    keywords: ['automated report generation', 'scheduled reporting tool', 'redash alternative', 'pdf report automation', 'report delivery software'],
  },
}
