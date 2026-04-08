import type { PageConfig } from '@/config/type'

export const config: PageConfig = {
  slug: 'scope-lock',
  name: 'Scope Lock',
  tagline: 'Catch contract blind spots before you sign.',
  description: 'AI-powered scope documentation agent that reveals vague boundaries in client briefs before you write the contract — so you never lose money to scope creep again.',
  variant: 'bold',
  theme: {
    accent: 'violet',
    emoji: '🔒',
  },
  hero: {
    badge: 'Freelancer Tool',
    title: 'Stop scope creep',
    titleHighlight: 'before it starts',
    subtitle: 'Paste your client brief. Scope Lock detects missing boundaries and drafts an airtight SOW in minutes.',
    cta: 'Join the waitlist',
    layout: 'split',
  },
  trustBadges: [
    'Paste any brief, get instant analysis',
    'PDF SOW export included',
    'Cancel anytime',
  ],
  problems: [
    {
      icon: '🤷',
      title: 'Vague briefs become expensive surprises',
      desc: 'Clients say \'a simple website\' but mean a full custom platform. You find out 3 weeks in.',
    },
    {
      icon: '📋',
      title: 'Templates don\'t catch what you don\'t know to ask',
      desc: 'SOW templates fill blanks — they don\'t flag the gaps hiding in your client\'s brief.',
    },
    {
      icon: '💸',
      title: 'Only 1% of freelancers successfully bill for out-of-scope work',
      desc: '72% of projects suffer scope creep. The average cost: $2,000–$5,000 in unpaid work per year.',
    }
  ],
  features: [
    {
      icon: '🔍',
      title: 'Blind Spot Scanner',
      desc: 'Paste a client brief or email. AI instantly flags undefined scope items and generates the questions you need to ask — before you quote.',
      badge: 'Most popular',
    },
    {
      icon: '📄',
      title: 'SOW Auto-Draft',
      desc: 'Answer the flagged questions and get a signed-ready Scope of Work document in seconds. Download as PDF.',
    },
    {
      icon: '🚨',
      title: 'Scope Change Alerts',
      desc: 'Client sends a new request mid-project? Scope Lock compares it to your original SOW and flags it as out-of-scope instantly.',
    }
  ],
  pricing: [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      features: ['3 project scans/month', 'Blind Spot Scanner', 'Basic SOW template'],
      highlight: false,
    },
    {
      name: 'Solo',
      price: '$19',
      period: '/month',
      features: ['Unlimited scans', 'PDF SOW download', 'Scope change alerts', 'All project types'],
      highlight: true,
    },
    {
      name: 'Team',
      price: '$49',
      period: '/month',
      features: ['Everything in Solo', 'Up to 5 team members', 'Shared project library', 'Priority support'],
      highlight: false,
    }
  ],
  cta: {
    title: 'Never lose money to scope creep again.',
    subtitle: 'Join the waitlist and protect your next project from day one.',
    reasons: [
      'Founding members get lifetime pricing',
      'Early access to Blind Spot Scanner',
      'Free SOW template library for first 50 users',
    ],
  },
  productPreview: {
    title: 'Scope Analysis — "E-commerce Redesign"',
    subtitle: '4 blind spots detected in client brief',
    items: [
      { label: 'Blind Spot #1', value: '"Mobile responsive" — no breakpoint spec', highlight: true },
      { label: 'Blind Spot #2', value: '"Product pages" — quantity undefined', highlight: true },
      { label: 'Clear scope', value: 'Homepage redesign — 1 page, desktop + mobile' },
      { label: 'Clear scope', value: 'Checkout flow — 3 steps, Stripe integration' },
      { label: 'Risk score', value: 'Medium — 2 items need clarification before quoting', highlight: true },
    ],
  },
  howItWorks: [
    { step: 1, title: 'Paste the client brief', description: 'Copy-paste any client email, brief, or RFP. Scope Lock analyzes it in seconds.' },
    { step: 2, title: 'Review blind spots', description: 'AI flags vague items, undefined quantities, and missing boundaries. Generates the exact questions to ask your client.' },
    { step: 3, title: 'Generate your SOW', description: 'Answer the flagged questions, then download a signed-ready Scope of Work as PDF. Clear boundaries, no surprises.' },
  ],
  comparison: {
    heading: 'Why not just use a SOW template?',
    subtitle: 'Templates fill blanks. Scope Lock finds the blanks you didn\'t know existed.',
    product: 'Scope Lock',
    competitors: ['SOW Template', 'ChatGPT', 'Lawyer Review'],
    rows: [
      { feature: 'Blind spot detection', values: [true, false, false, true] },
      { feature: 'Brief-specific analysis', values: [true, false, true, true] },
      { feature: 'SOW auto-generation', values: [true, false, false, false] },
      { feature: 'Scope change alerts', values: [true, false, false, false] },
      { feature: 'Under 2 minutes', values: [true, false, true, false] },
      { feature: 'Price', values: ['$19/mo', 'Free', 'Free', '$200+/hr'] },
    ],
  },
  founderNote: {
    quote: 'I lost $5,000 on a project because the client\'s brief said "simple website" and meant a full marketplace. Scope Lock catches those gaps before you sign.',
    author: 'The Scope Lock Team',
    role: 'Built by a freelancer burned by scope creep',
  },
  testimonial: {
    quote: 'Scope Lock flagged 3 undefined items in a brief I was about to quote on. Saved me from a nightmare project.',
    author: 'David P.',
    role: 'Freelance Web Developer, 6 years',
  },
  faq: [
    { question: 'What types of briefs can I analyze?', answer: 'Any client brief, RFP, email, or Slack message. Just paste the text. Scope Lock works for web development, design, marketing, consulting, and more.' },
    { question: 'How does the Scope Change Alert work?', answer: 'When a client sends a new request mid-project, paste it in. Scope Lock compares it against your original SOW and instantly tells you if it\'s in-scope or out-of-scope.' },
    { question: 'Can I customize the SOW template?', answer: 'Yes. Start with our generated SOW, then edit any section. Save as your template for future projects.' },
    { question: 'Is this only for developers?', answer: 'No. Scope Lock works for any project-based freelancer — designers, writers, consultants, marketers, video editors, and more.' },
  ],
  seo: {
    title: 'Scope Lock — AI Scope Documentation for Freelancers',
    description: 'Catch contract blind spots before you sign. Scope Lock detects vague boundaries in client briefs and drafts airtight SOW documents in minutes.',
    keywords: ['freelance scope creep prevention', 'SOW generator AI', 'scope of work template freelancer'],
  },
}
