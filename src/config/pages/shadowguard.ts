import type { PageConfig } from '@/config/type'

export const config: PageConfig = {
  slug: 'shadowguard',
  name: 'ShadowGuard',
  tagline: 'The AI Governance Platform for Secure Enterprises.',
  description: 'Monitor, control, and optimize all AI usage across your organization. Prevent data leaks and eliminate AI waste.',
  variant: 'clinical',
  theme: {
    accent: 'blue',
    emoji: '🛡️',
  },
  hero: {
    badge: 'Enterprise AI Security & FinOps',
    title: 'Secure Your Data in the',
    titleHighlight: 'Age of AI.',
    subtitle: 'Get full visibility into your organization\'s \'Shadow AI\'. Stop PII leaks to public models and optimize AI spend across departments.',
    cta: 'Request Enterprise Demo',
    layout: 'split',
  },
  trustBadges: ['SOC2 Type II Ready', 'GDPR Compliant', '24/7 Threat Monitoring'],
  problems: [
    {
      icon: '🔓',
      title: 'Invisible AI Sprawl',
      desc: 'Employees use 50+ unauthorized AI tools, leaking company secrets daily.',
    },
    {
      icon: '💸',
      title: 'Subscription Bloat',
      desc: 'Paying for 100+ Pro seats across scattered AI apps without volume discounts.',
    },
    {
      icon: '⚠️',
      title: 'PII Leakage',
      desc: 'Sensitive customer data being fed into public training sets by mistake.',
    }
  ],
  features: [
    {
      icon: '📡',
      title: 'Real-time AI Detection',
      desc: 'Instantly identify every AI tool accessed through your corporate network.',
      badge: 'Autonomous',
    },
    {
      icon: '🛑',
      title: 'PII Data Masking',
      desc: 'Automatically intercept and redact sensitive info before it reaches AI servers.',
      badge: 'Security',
    },
    {
      icon: '📊',
      title: 'AI FinOps Dashboard',
      desc: 'Identify duplicate subscriptions and optimize AI license allocation.',
      badge: 'Efficiency',
    }
  ],
  pricing: [
    {
      name: 'Team',
      price: '99',
      period: 'mo',
      features: ['Up to 100 users', 'Basic AI Audit', 'Data Leak Alerts'],
      highlight: false,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'yearly',
      features: ['Unlimited users', 'Advanced Data Masking', 'SSO & SCIM Integration', 'Dedicated Success Manager'],
      highlight: true,
    }
  ],
  cta: {
    title: 'Ready to govern your AI usage?',
    subtitle: 'Join forward-thinking CSOs securing their AI transformation.',
    reasons: ['15-minute setup', 'Zero network latency', 'Compliant with 2026 standards'],
  },
  productPreview: {
    title: 'Governance Dashboard',
    items: [
      { label: 'Detected AI Apps', value: '142', highlight: true },
      { label: 'PII Leaks Blocked', value: '2,481', highlight: true },
      { label: 'AI Waste Identified', value: ',200/mo' },
    ],
  },
  howItWorks: [
    { step: 1, title: 'Connect', description: 'Integrate with your Corporate DNS or Identity Provider (Okta/Azure).' },
    { step: 2, title: 'Scan', description: 'Automatically discover all AI endpoints being accessed.' },
    { step: 3, title: 'Control', description: 'Set granular policies for data security and license usage.' },
  ],
  founderNote: {
    quote: 'The biggest threat to modern business isn\'t AI—it\'s unmanaged AI. ShadowGuard gives control back to the CIO.',
    author: 'B2B Expert',
    role: 'CEO of ShadowGuard',
  },
  faq: [
    { question: 'Does it slow down my network?', answer: 'No, ShadowGuard uses high-performance edge processing for zero-latency audit.' },
    { question: 'Is it compliant with AI Act?', answer: 'Yes, we are pre-mapped to the EU AI Act and current ISO/IEC 42001 standards.' },
  ],
  seo: {
    title: 'ShadowGuard — Enterprise AI Governance & Security',
    description: 'Secure your enterprise from AI data leaks and optimize AI spending.',
    keywords: ['AI security', 'AI governance', 'shadow AI', 'AI compliance'],
  },
}
