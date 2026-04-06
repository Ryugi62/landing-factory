import type { PageConfig } from '@/config/type'

export const config: PageConfig = {
  slug: 'test-pipeline-success-01',
  name: 'MemoSift',
  tagline: 'AI sorts your messy notes into clear next actions',
  description: 'Capture any idea in 2 seconds, then let AI decide what to do first. Built for freelancers and solopreneurs juggling multiple projects.',
  variant: 'bold',
  theme: {
    accent: 'violet',
    emoji: '🧠',
  },
  hero: {
    badge: 'AI Productivity',
    title: 'Stop drowning in',
    titleHighlight: 'scattered notes',
    subtitle: 'Dump your ideas fast. Let AI sort what matters most — automatically, every morning.',
    cta: 'Join the waitlist',
  },
  problems: [
    {
      icon: '📝',
      title: 'Ideas pile up with no order',
      desc: 'You capture 20 notes a day but can\'t tell which one actually matters right now.',
    },
    {
      icon: '⏰',
      title: 'Morning decision paralysis',
      desc: 'Spending 30 minutes every morning figuring out where to start instead of actually starting.',
    },
    {
      icon: '🗂️',
      title: 'Scattered across 5 tools',
      desc: 'Notes in Apple Notes, Notion, Slack, email drafts, and sticky notes — none connected.',
    }
  ],
  features: [
    {
      icon: '⚡',
      title: '2-second quick capture',
      desc: 'Open the app and start typing. No folders, no tags — just capture and move on.',
      badge: 'Most popular',
    },
    {
      icon: '🤖',
      title: 'AI Priority Sort',
      desc: 'Every morning, AI analyzes all your notes and surfaces Today\'s Top 3 actions.',
    },
    {
      icon: '📁',
      title: 'Project View',
      desc: 'See all your notes grouped by project with AI-generated progress summaries.',
    }
  ],
  pricing: [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      features: ['Up to 50 notes', 'AI sort 3x/week', '1 project'],
      highlight: false,
    },
    {
      name: 'Pro',
      price: '$9',
      period: '/month',
      features: ['Unlimited notes', 'Daily AI sort', 'Unlimited projects', 'Keyboard shortcuts', 'Priority support'],
      highlight: true,
    },
    {
      name: 'Team',
      price: '$19',
      period: '/month',
      features: ['Everything in Pro', 'Team sharing', 'Shared project views', 'Admin dashboard'],
      highlight: false,
    }
  ],
  cta: {
    title: 'Start your day knowing exactly what to do',
    subtitle: 'Join the waitlist. Be first when we launch.',
  },
  seo: {
    title: 'MemoSift — AI Note Organizer for Solopreneurs',
    description: 'Capture ideas fast, let AI prioritize them. The simplest AI note organizer for freelancers and indie developers managing multiple projects.',
    keywords: ['ai note organizer', 'personal project management app', 'ai productivity tool for developers'],
  },
}
