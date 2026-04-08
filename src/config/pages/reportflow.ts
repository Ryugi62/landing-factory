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
    layout: 'split',
  },
  trustBadges: [
    'Connect any data source',
    'Branded PDF reports',
    'Cancel anytime',
  ],
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
    subtitle: 'Join the waitlist and automate your next report cycle.',
    reasons: [
      'Free for 3 reports',
      'Import existing templates',
      'Early access to white-label',
    ],
  },
  productPreview: {
    title: 'March Report — Acme Corp',
    subtitle: 'Auto-generated, branded, delivered on schedule',
    items: [
      { label: 'Revenue', value: '$142,500 — +12% vs Feb', highlight: true },
      { label: 'Active Users', value: '8,241 — +340 this month' },
      { label: 'Churn Rate', value: '2.1% — -0.3% vs Feb', highlight: true },
      { label: 'Top Channel', value: 'Google Ads — 42% of new signups' },
      { label: 'Status', value: 'PDF sent to client@acme.com at 9:00 AM', highlight: true },
    ],
  },
  howItWorks: [
    { step: 1, title: 'Connect your data', description: 'PostgreSQL, GA4, Stripe, HubSpot, CSV — connect in minutes. ReportFlow pulls fresh data automatically.' },
    { step: 2, title: 'Design your template', description: 'Drag-and-drop charts, tables, and KPI cards. Set each client\'s logo and colors. Design once, reuse forever.' },
    { step: 3, title: 'Schedule and forget', description: 'Set delivery frequency — daily, weekly, monthly. ReportFlow generates PDFs and emails them to clients on time, every time.' },
  ],
  comparison: {
    heading: 'Why not just use Looker Studio?',
    subtitle: 'Looker Studio breaks. Manual PDFs take a full day. ReportFlow automates everything.',
    product: 'ReportFlow',
    competitors: ['Looker Studio', 'Manual Export', 'Custom Script'],
    rows: [
      { feature: 'Branded PDF output', values: [true, false, true, true] },
      { feature: 'Auto-scheduled delivery', values: [true, false, false, true] },
      { feature: 'Multiple data sources', values: [true, true, true, true] },
      { feature: 'No API quota crashes', values: [true, false, true, true] },
      { feature: 'Client-ready in 1 click', values: [true, false, false, false] },
      { feature: 'Price', values: ['$79/mo', 'Free', 'Free (your day)', 'Free (your time)'] },
    ],
  },
  founderNote: {
    quote: 'I spent every first Monday of the month exporting 22 client reports manually. That\'s a full day gone. ReportFlow gives me that day back.',
    author: 'The ReportFlow Team',
    role: 'Built by an agency owner tired of report day',
  },
  testimonial: {
    quote: 'Report day went from 8 hours to 0. Clients get branded PDFs in their inbox and think we\'re more professional than ever.',
    author: 'Linda C.',
    role: 'Marketing Agency Owner, 18 clients',
  },
  faq: [
    { question: 'What data sources are supported?', answer: 'PostgreSQL, MySQL, Google Analytics 4, Stripe, HubSpot, Google Sheets, and CSV files. More integrations are added monthly.' },
    { question: 'Can each client have their own branding?', answer: 'Yes. Set logo, colors, and fonts per client. Each report looks like it came from your agency, not a generic tool.' },
    { question: 'What if the data source is temporarily down?', answer: 'ReportFlow retries automatically with exponential backoff. If delivery fails, you get an alert and can resend with one click.' },
    { question: 'Can clients access a live dashboard instead?', answer: 'Yes. Pro and Agency plans include a client portal with live dashboards. Clients can also download the latest PDF anytime.' },
  ],
  seo: {
    title: 'ReportFlow — Automated Report Delivery for Agencies & Data Teams',
    description: 'Stop manually exporting PDFs. ReportFlow connects your data sources and automatically delivers branded client reports on any schedule.',
    keywords: ['automated report generation', 'scheduled reporting tool', 'redash alternative', 'pdf report automation', 'report delivery software'],
  },
}
