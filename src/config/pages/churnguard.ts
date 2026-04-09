import type { PageConfig } from '@/config/type'

export const config: PageConfig = {
  slug: 'churnguard',
  name: 'ChurnGuard',
  tagline: 'Stop losing 9% of your MRR to failed payments.',
  description: 'Smart dunning for indie SaaS founders. Connect Stripe in 60 seconds, recover failed payments automatically. $9/month.',
  variant: 'clinical',
  theme: {
    accent: 'emerald',
    emoji: '🛡️',
  },
  hero: {
    badge: 'Payment Recovery',
    title: 'Stop Losing 9% of Your MRR to',
    titleHighlight: 'Failed Payments',
    subtitle: 'Stripe recovers 23% of failed payments by default. ChurnGuard recovers 70%+. Smart retries + recovery emails for $9/month — built for indie founders, not enterprises.',
    cta: 'Start Recovering Revenue — Free 14-Day Trial',
    layout: 'split',
    beforeAfter: {
      before: '12 failed payments this month. You email 3 manually. 9 customers silently churn. $400 gone.',
      after: 'ChurnGuard catches all 12, retries with smart timing, sends recovery emails. 9 recovered automatically. You kept $340.',
    },
  },
  trustBadges: ['Built by an indie founder for indie founders', '5-minute setup — just connect Stripe', 'Cancel anytime — no contracts'],
  problems: [
    {
      icon: '💸',
      title: '9% of your MRR vanishes every month',
      desc: 'Failed payments from expired cards, insufficient funds, and bank declines silently drain your recurring revenue.',
    },
    {
      icon: '⏰',
      title: 'Stripe\'s retries recover only 23%',
      desc: 'Stripe\'s built-in Smart Retries use generic timing. The other 77% of failed payments? Gone unless you chase them manually.',
    },
    {
      icon: '🚫',
      title: 'Dunning tools cost more than your MRR can justify',
      desc: 'Churn Buster starts at $100/mo. MRRSaver at $29/mo. When your MRR is $3K, that math doesn\'t work.',
    }
  ],
  features: [
    {
      icon: '🔄',
      title: 'Smart Retry Engine',
      desc: 'Retry timing optimized by failure reason. Insufficient funds? Retry on payday. Expired card? Send an instant update link. Not a generic schedule.',
      badge: 'Core',
    },
    {
      icon: '📧',
      title: 'Recovery Email Sequences',
      desc: 'Battle-tested email templates that actually get opened. Day 1: gentle reminder. Day 3: urgency nudge. Day 7: last chance. All customizable.',
    },
    {
      icon: '📊',
      title: 'Revenue Recovery Dashboard',
      desc: 'Track recovered MRR, recovery rate, at-risk customers, and failure trends. See exactly how much ChurnGuard earns back for you every month.',
    }
  ],
  pricing: [
    {
      name: 'Trial',
      price: '$0',
      period: '14 days',
      features: ['Full payment recovery', 'Smart retry engine', 'Recovery emails', 'Revenue dashboard', 'Up to 100 customers'],
      highlight: false,
    },
    {
      name: 'Indie',
      price: '$9',
      period: '/month',
      features: ['Everything in Trial', 'Unlimited customers', 'Custom email templates', 'Slack notifications', 'Priority retry scheduling'],
      highlight: true,
    },
    {
      name: 'Growth',
      price: '$29',
      period: '/month',
      features: ['Everything in Indie', 'Cancel flow optimization', 'Advanced analytics', 'Multiple Stripe accounts', 'API access'],
      highlight: false,
    }
  ],
  cta: {
    title: 'How much MRR are you losing right now?',
    subtitle: 'Connect Stripe in 60 seconds. See your first recovery within 48 hours. Free for 14 days.',
    reasons: ['Most founders recover their first failed payment within 48 hours of connecting', 'Average ROI: $9 spent → $200+ recovered per month', '5-minute setup, cancel anytime — zero risk to try'],
  },
  productPreview: {
    title: 'Your Recovery Dashboard',
    subtitle: 'See exactly how much revenue ChurnGuard saved you this month.',
    items: [
      { label: 'Failed payments detected', value: '12 this month' },
      { label: 'Successfully recovered', value: '9 of 12 (75%)', highlight: true },
      { label: 'Revenue saved', value: '$342.00', highlight: true },
      { label: 'Recovery emails sent', value: '24 (auto)' },
      { label: 'Avg recovery time', value: '2.3 days' },
    ],
  },
  howItWorks: [
    { step: 1, title: 'Connect Stripe', description: 'One click to authorize. ChurnGuard reads payment failure events only — no access to your customer data or financial details.' },
    { step: 2, title: 'Smart retries kick in', description: 'When a payment fails, ChurnGuard schedules retries based on failure reason: payday timing for insufficient funds, instant card-update links for expired cards.' },
    { step: 3, title: 'Revenue recovered', description: 'Failed payments retry automatically. Customers get friendly recovery emails. You get a dashboard showing exactly how much MRR was saved.' },
  ],
  comparison: {
    heading: 'ChurnGuard vs. The Alternatives',
    subtitle: 'Enterprise tools charge enterprise prices. Stripe\'s built-in retries barely scratch the surface. You need something in between.',
    product: 'ChurnGuard',
    competitors: ['Stripe Retries', 'Churn Buster', 'MRRSaver'],
    rows: [
      { feature: 'Monthly price', values: ['$9/mo', 'Free (built-in)', 'From $100/mo', 'From $29/mo'] },
      { feature: 'Recovery rate', values: ['65-75%', '~23%', '~80%', '~65%'] },
      { feature: 'Setup time', values: ['5 minutes', 'Already on', '30+ minutes', '15 minutes'] },
      { feature: 'Smart retry timing', values: [true, false, true, true] },
      { feature: 'Custom recovery emails', values: [true, false, true, true] },
      { feature: 'Built for indie scale', values: [true, true, false, 'Partial'] },
    ],
  },
  founderNote: {
    quote: 'I built ChurnGuard because I was losing $400/mo to failed payments on my own SaaS and couldn\'t justify $250/mo for Churn Buster. If you\'re under $10K MRR, this is the tool I wish existed.',
    author: 'ChurnGuard Founder',
    role: 'Indie SaaS Builder',
  },
  testimonial: {
    quote: 'I was manually emailing customers about failed payments every week. ChurnGuard automates all of it. Recovered $280 in my first month without touching anything.',
    author: 'Beta Applicant',
    role: 'SaaS Founder, $4K MRR',
  },
  faq: [
    { question: 'How is this different from Stripe\'s built-in retries?', answer: 'Stripe retries payments on a generic schedule regardless of why they failed. ChurnGuard uses smart timing — retrying on paydays for insufficient funds, sending instant card-update links for expired cards. This typically doubles recovery rates from ~23% to 65-75%.' },
    { question: 'Why not use Churn Buster or Baremetrics?', answer: 'Those tools are excellent but start at $100-250/mo and target larger teams. If your MRR is under $10K, ChurnGuard gives you the core recovery features at a fraction of the cost.' },
    { question: 'What Stripe data do you access?', answer: 'Only payment failure events (invoice.payment_failed) and customer email addresses for recovery emails. We don\'t access your product data, customer details, or financial records beyond what\'s needed for recovery.' },
    { question: 'Can I customize the recovery emails?', answer: 'Yes. We provide battle-tested templates that work immediately, but you can fully customize subject lines, body copy, timing intervals, and sender name to match your brand.' },
    { question: 'What if I cancel ChurnGuard?', answer: 'Recovery automations stop immediately. No penalty, no contracts, no lock-in. All your configuration data is deleted within 30 days.' },
  ],
  seo: {
    title: 'ChurnGuard — Affordable Failed Payment Recovery for Indie SaaS',
    description: 'Stop losing 9% of your MRR to failed payments. Smart dunning for indie SaaS founders — connect Stripe, recover revenue automatically. $9/month.',
    keywords: ['failed payment recovery', 'dunning management', 'SaaS churn prevention', 'Stripe payment recovery', 'indie SaaS tools', 'involuntary churn', 'MRR recovery', 'churn buster alternative'],
  },
}
