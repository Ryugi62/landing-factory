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
  },
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
    subtitle: 'Join the waitlist. Be first when we launch.',
  },
  seo: {
    title: 'Declog — Architecture Decision Record Tool for Engineering Teams',
    description: 'Automatically capture and search why your team made each technical decision. GitHub-connected ADR software for CTOs and engineering managers.',
    keywords: ['architecture decision record tool', 'ADR software', 'decision log software teams'],
  },
}
