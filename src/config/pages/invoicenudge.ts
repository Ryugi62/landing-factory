import type { PageConfig } from '@/config/type'

export const config: PageConfig = {
  slug: 'invoicenudge',
  name: 'InvoiceNudge',
  tagline: 'Smart payment follow-ups that never feel awkward',
  description: 'AI-powered invoice tracking and payment recovery for freelancers. Stop chasing clients manually — let InvoiceNudge send the right message at the right time.',
  variant: 'bold',
  theme: {
    accent: 'violet',
    emoji: '💸',
  },
  hero: {
    badge: 'Freelancer Tool',
    title: 'Stop chasing',
    titleHighlight: 'late payments',
    subtitle: 'AI writes the perfect follow-up email for each client — friendly, firm, or final notice — so you never have to feel awkward again.',
    cta: 'Join the waitlist',
  },
  problems: [
    {
      icon: '😰',
      title: 'Writing follow-ups is exhausting',
      desc: 'Every unpaid invoice means 20+ minutes crafting the right email tone. Too soft and they ignore you. Too firm and you lose the client.',
    },
    {
      icon: '📊',
      title: 'Tracking is a manual nightmare',
      desc: 'Spreadsheets, sticky notes, calendar reminders — your unpaid invoices are scattered everywhere.',
    },
    {
      icon: '⏰',
      title: 'You wait too long to follow up',
      desc: 'The longer you wait, the harder it is to collect. Most freelancers follow up 2 weeks too late.',
    }
  ],
  features: [
    {
      icon: '🤖',
      title: 'AI Tone Matcher',
      desc: 'Generates Friendly, Firm, or Final Notice messages based on your relationship with the client and days overdue.',
      badge: 'Most popular',
    },
    {
      icon: '📈',
      title: 'Late Payment Tracker',
      desc: 'Dashboard shows every overdue invoice. Auto-schedules D+3, D+7, and D+14 reminders so nothing falls through the cracks.',
    },
    {
      icon: '📧',
      title: 'Send & Track',
      desc: 'Send with one click. See when clients open your emails and which follow-up tone gets the fastest payment.',
    }
  ],
  pricing: [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      features: ['5 invoices', 'Manual reminders', '3 AI messages/month'],
      highlight: false,
    },
    {
      name: 'Pro',
      price: '$12',
      period: '/month',
      features: ['Unlimited invoices', 'AI message generation', 'Auto-scheduling', 'Email tracking'],
      highlight: true,
    },
    {
      name: 'Team',
      price: '$24',
      period: '/month',
      features: ['Everything in Pro', '3 team members', 'Analytics dashboard', 'Priority support'],
      highlight: false,
    }
  ],
  cta: {
    title: 'Get paid faster, without the awkward emails',
    subtitle: 'Join the waitlist. Be first when we launch.',
  },
  seo: {
    title: 'InvoiceNudge — AI Payment Follow-Up for Freelancers',
    description: 'Stop chasing late payments manually. InvoiceNudge uses AI to write the perfect follow-up email for each client, automatically.',
    keywords: ['freelancer invoice follow up', 'late payment reminder', 'freelancer payment tracker'],
  },
}
