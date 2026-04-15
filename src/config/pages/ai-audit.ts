import { PageConfig } from '../type'

export const config: PageConfig = {
  slug: 'ai-audit',
  name: 'AI-Audit',
  tagline: 'Find Every AI Subscription Your Team is Already Using.',
  description: 'Identify duplicate ChatGPT and Claude seats, inactive users, and overlapping vendors in minutes. No engineering required.',
  variant: 'clinical',
  theme: {
    accent: 'blue',
    emoji: '📊'
  },
  hero: {
    badge: 'For IT, Finance & Procurement teams managing 50+ AI seats',
    title: 'Find Every AI Subscription Your Company is',
    titleHighlight: 'Paying For.',
    subtitle: 'Duplicate ChatGPT, Claude, and Gemini seats add up fast. Get a free AI waste report that identifies inactive licenses, overlapping vendors, and immediate savings opportunities.',
    cta: 'Get My Free AI Waste Report',
    layout: 'split'
  },
  trustBadges: [
    'No Engineering Integration Required',
    'Zero Access to Your AI Prompts',
    'Identifies 150+ AI Vendors'
  ],
  problems: [
    { icon: '💳', title: 'Double Billing', desc: 'Paying for individual ChatGPT Plus and Claude Pro seats for the same employee across different cards.' },
    { icon: '🔄', title: 'Redundant Vendors', desc: 'Running 3 different AI writing tools across Marketing, Sales, and Support without a unified plan.' },
    { icon: '👻', title: 'Inactive Licenses', desc: 'Paying $20-$30/mo for seats belonging to employees who haven\'t logged in for over 30 days.' }
  ],
  features: [
    { icon: '🔦', title: 'Shadow AI Discovery', desc: 'Instantly see every AI SaaS tool being used in your organization, from Midjourney to Perplexity.', badge: 'Visibility' },
    { icon: '💰', title: 'Savings Snapshot', desc: 'Calculate immediate ROI by identifying duplicate seats and unused licenses in one report.', badge: 'ROI' },
    { icon: '🛣️', title: 'Consolidation Plan', desc: 'Get a step-by-step roadmap to move from scattered personal seats to a unified Enterprise plan.', badge: 'Strategy' }
  ],
  pricing: [
    {
      name: 'One-Time Audit',
      price: '$0',
      period: 'first report',
      features: ['Full AI Inventory', 'Waste Discovery Report', 'Savings Estimation', 'Vendor Overlap Analysis'],
      highlight: true
    },
    {
      name: 'Continuous Monitoring',
      price: 'Custom',
      period: 'mo',
      features: ['Monthly Spend Reports', 'Renewal Alerts', 'New AI App Detection', 'SaaS Management Dashboard'],
      highlight: false
    }
  ],
  cta: {
    title: 'How much AI money is your company losing?',
    subtitle: 'Get a sample findings report based on your company size in 24 hours.',
    reasons: ['Connect via Billing or SSO', 'Privacy-First Analytics', 'Results in 1 Business Day']
  },
  productPreview: {
    title: 'Sample Savings Snapshot',
    subtitle: 'What your 1-page AI Waste Report includes:',
    items: [
      { label: 'Duplicate AI Seats', value: '32', highlight: true },
      { label: 'Inactive Users (30d)', value: '14', highlight: true },
      { label: 'Est. Annual Savings', value: '$14,500', highlight: true }
    ]
  },
  howItWorks: [
    { step: 1, title: 'Sync Data', description: 'Connect your SSO (Okta/Google) or upload a billing export. We don\'t need code.' },
    { step: 2, title: 'Analyze', description: 'Our engine maps your spend against 150+ known AI vendor patterns and identifies overlaps.' },
    { step: 3, title: 'Optimize', description: 'Receive a 1-page report with clear steps to cut costs and consolidate licenses.' }
  ],
  founderNote: {
    quote: 'Most AI tools are bought in a rush. We help IT and Finance teams see the full picture and secure the best pricing for the tools that actually matter.',
    author: 'B2B Expert',
    role: 'Founder'
  },
  testimonial: {
    quote: 'AI-Audit uncovered $12k in annual savings in less than 10 minutes. It\'s the easiest ROI I\'ve found this year.',
    author: 'Michael R.',
    role: 'Director of IT'
  },
  faq: [
    { question: 'Do you see my private AI prompts?', answer: 'No. We only analyze metadata related to billing and access logs. We never touch the content of your AI interactions.' },
    { question: 'What data do you actually need?', answer: 'You can start by simply uploading a billing CSV or connecting your SSO provider for real-time visibility.' },
    { question: 'How long does the audit take?', answer: 'Once data is provided, your 1-page AI Waste Report is usually ready within 24 hours.' },
    { question: 'Who is this best for?', answer: 'Companies with 50+ employees where AI tools are starting to spread across multiple departments and individual credit cards.' }
  ],
  seo: {
    title: 'AI-Audit — Find and Cut Wasted AI Spend | Enterprise AI FinOps',
    description: 'Discover duplicate AI subscriptions and inactive seats in 5 minutes. Get a free AI waste report today.',
    keywords: ['AI finops', 'AI audit report', 'duplicate AI seats', 'SaaS spend optimization']
  },
  conversions: {
    primary: 'Request Report'
  }
}
