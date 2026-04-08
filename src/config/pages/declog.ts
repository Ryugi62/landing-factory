import type { PageConfig } from '@/config/type'

export const config: PageConfig = {
  slug: 'declog',
  name: 'Declog',
  tagline: '"Why was this built?" — answered in seconds.',
  description: 'Lightweight ADR repository that automatically captures why your team made each decision — linked to GitHub PRs, searchable forever.',
  variant: 'bold',
  theme: {
    accent: 'violet',
    emoji: '📋',
  },
  hero: {
    badge: 'Architecture Decision Records',
    title: 'Stop losing the',
    titleHighlight: '"why" behind your code',
    subtitle: 'Declog automatically captures team decisions from GitHub PRs and commits — so new engineers onboard faster and CTOs answer board questions in seconds.',
    cta: 'Join the waitlist',
    layout: 'split',
  },
  trustBadges: [
    'GitHub integration built-in',
    'AI drafts from your PRs',
    'Cancel anytime',
  ],
  problems: [
    {
      icon: '🤔',
      title: '"Why did we build it this way?"',
      desc: 'New engineers ask this daily. Nobody knows. The context is buried in Slack, PRs, and someone\'s memory.',
    },
    {
      icon: '📚',
      title: 'Confluence ADRs nobody updates',
      desc: 'You have templates. You have pages. But nobody fills them in because the friction is too high.',
    },
    {
      icon: '🔍',
      title: 'Board questions with no answer',
      desc: '"Why PostgreSQL over MongoDB?" You know the answer — but can you find the evidence in 30 seconds?',
    }
  ],
  features: [
    {
      icon: '🤖',
      title: 'AI Decision Drafts',
      desc: 'Connect GitHub and Claude auto-generates ADR drafts from your PR descriptions and commit messages. Review and publish in one click.',
      badge: 'Most popular',
    },
    {
      icon: '🔗',
      title: 'GitHub-Linked Decisions',
      desc: 'Every decision links to the PR, issue, and engineers involved. The evidence is always attached — not just the conclusion.',
    },
    {
      icon: '⚡',
      title: 'Semantic Search',
      desc: 'Ask "why PostgreSQL?" and get the ADR, the alternatives considered, and the engineer who made the call. Instantly.',
    }
  ],
  pricing: [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      features: ['Up to 3 team members', 'Unlimited public decisions', 'Manual ADR creation', 'GitHub link attachments'],
      highlight: false,
    },
    {
      name: 'Team',
      price: '$12',
      period: '/user/month',
      features: ['Unlimited team members', 'Private decisions', 'AI decision drafts', 'GitHub integration', 'Semantic search'],
      highlight: true,
    },
    {
      name: 'Enterprise',
      price: '$35',
      period: '/user/month',
      features: ['Everything in Team', 'SSO + audit logs', 'Jira & Slack integration', 'Custom fields', 'Priority support'],
      highlight: false,
    }
  ],
  cta: {
    title: 'Your next engineer deserves context',
    subtitle: 'Join the waitlist and give your team searchable decision history.',
    reasons: [
      'Free for teams up to 3',
      'Early access to AI drafts',
      'Import existing decisions on signup',
    ],
  },
  productPreview: {
    title: 'Decision Log — Backend Team',
    subtitle: '47 decisions captured, 12 this month',
    items: [
      { label: 'ADR-047', value: 'Switch to PostgreSQL — performance + JSON support', highlight: true },
      { label: 'ADR-046', value: 'Reject MongoDB — scaling concerns at 10M rows' },
      { label: 'ADR-045', value: 'Adopt Redis for session cache — latency improvement' },
      { label: 'ADR-044', value: 'Keep REST over GraphQL — team familiarity', highlight: true },
      { label: 'Linked PRs', value: '38 decisions linked to GitHub PRs', highlight: true },
    ],
  },
  howItWorks: [
    { step: 1, title: 'Connect GitHub', description: 'One-click GitHub integration. Declog monitors your PRs and commit messages for decision signals.' },
    { step: 2, title: 'AI drafts decisions', description: 'When a PR describes a technical choice, Declog auto-generates an ADR draft with context, alternatives, and reasoning.' },
    { step: 3, title: 'Search and share', description: 'Ask "why PostgreSQL?" and get the ADR, linked PR, and engineer who made the call. Instantly.' },
  ],
  comparison: {
    heading: 'Why not just use Confluence?',
    subtitle: 'Confluence pages rot. Declog stays alive because decisions auto-capture from GitHub.',
    product: 'Declog',
    competitors: ['Confluence', 'Notion', 'GitHub Wiki'],
    rows: [
      { feature: 'Auto-capture from PRs', values: [true, false, false, false] },
      { feature: 'AI decision drafts', values: [true, false, false, false] },
      { feature: 'Semantic search', values: [true, false, true, false] },
      { feature: 'PR-linked decisions', values: [true, false, false, true] },
      { feature: 'Zero friction to create', values: [true, false, false, false] },
      { feature: 'Price', values: ['$12/user/mo', '$6/user/mo', '$8/user/mo', 'Free'] },
    ],
  },
  founderNote: {
    quote: 'Every engineering team I\'ve been on had the same problem: nobody remembered why decisions were made. Declog makes "why" searchable.',
    author: 'The Declog Team',
    role: 'Built by engineers tired of re-debating old decisions',
  },
  testimonial: {
    quote: 'A new engineer asked "why PostgreSQL?" on day one. Instead of a 30-minute meeting, I sent them a Declog link.',
    author: 'James L.',
    role: 'Engineering Manager, 12-person team',
  },
  faq: [
    { question: 'Does this replace our Confluence wiki?', answer: 'No. Declog focuses specifically on technical decisions (ADRs). It complements your wiki by capturing the "why" that wikis usually miss.' },
    { question: 'What if we already have ADRs in markdown files?', answer: 'Import them on signup. Declog can ingest existing ADR files and make them searchable alongside new auto-captured decisions.' },
    { question: 'How does AI know what counts as a decision?', answer: 'Declog looks for PR descriptions that mention alternatives, trade-offs, or "we chose X because." You can also flag any PR manually.' },
    { question: 'Is our code visible to Declog?', answer: 'No. Declog only reads PR titles, descriptions, and comments — never your source code. All data is encrypted at rest.' },
  ],
  seo: {
    title: 'Declog — Architecture Decision Record Tool for Engineering Teams',
    description: 'Automatically capture and search why your team made each technical decision. GitHub-connected ADR software for CTOs and engineering managers.',
    keywords: ['architecture decision record tool', 'ADR software', 'decision log software teams'],
  },
}
