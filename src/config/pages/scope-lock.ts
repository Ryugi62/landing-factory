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
  },
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
    subtitle: 'Join the waitlist. Be first when we launch.',
  },
  seo: {
    title: 'Scope Lock — AI Scope Documentation for Freelancers',
    description: 'Catch contract blind spots before you sign. Scope Lock detects vague boundaries in client briefs and drafts airtight SOW documents in minutes.',
    keywords: ['freelance scope creep prevention', 'SOW generator AI', 'scope of work template freelancer'],
  },
}
