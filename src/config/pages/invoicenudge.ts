import type { PageConfig } from '@/config/type'

export const config: PageConfig = {
  slug: 'invoicenudge',
  name: 'InvoiceNudge',
  tagline: 'Smart payment follow-ups that never feel awkward',
  description: 'AI-powered invoice tracking and payment recovery for freelancers. Stop chasing clients manually — let InvoiceNudge send the right message at the right time.',
  variant: 'bold',
  theme: { accent: 'violet', emoji: '💸' },
  hero: {
    badge: 'Freelancer Tool',
    title: 'Stop chasing',
    titleHighlight: 'late payments',
    subtitle: 'AI writes the perfect follow-up email for each client — friendly, firm, or final notice — so you never have to feel awkward again.',
    cta: 'Join the waitlist',
    layout: 'split',
  },
  trustBadges: ['Built for freelancers', 'AI writes your follow-ups', 'Cancel anytime'],
  problems: [
    { icon: '😰', title: 'Writing follow-ups is exhausting', desc: 'Every unpaid invoice means 20+ minutes crafting the right email tone. Too soft and they ignore you. Too firm and you lose the client.' },
    { icon: '📊', title: 'Tracking is a manual nightmare', desc: 'Spreadsheets, sticky notes, calendar reminders — your unpaid invoices are scattered everywhere.' },
    { icon: '⏰', title: 'You wait too long to follow up', desc: 'The longer you wait, the harder it is to collect. Most freelancers follow up 2 weeks too late.' }
  ],
  features: [
    { icon: '🤖', title: 'AI Tone Matcher', desc: 'Generates Friendly, Firm, or Final Notice messages based on your relationship with the client and days overdue.', badge: 'Most popular' },
    { icon: '📈', title: 'Late Payment Tracker', desc: 'Dashboard shows every overdue invoice. Auto-schedules D+3, D+7, and D+14 reminders.' },
    { icon: '📧', title: 'Send & Track', desc: 'Send with one click. See when clients open your emails and which follow-up tone gets the fastest payment.' }
  ],
  pricing: [
    { name: 'Free', price: '$0', period: 'forever', features: ['5 invoices', 'Manual reminders', '3 AI messages/month'], highlight: false },
    { name: 'Pro', price: '$12', period: '/month', features: ['Unlimited invoices', 'AI message generation', 'Auto-scheduling', 'Email tracking'], highlight: true },
    { name: 'Team', price: '$24', period: '/month', features: ['Everything in Pro', '3 team members', 'Analytics dashboard', 'Priority support'], highlight: false }
  ],
  cta: {
    title: 'Get paid faster, without the awkward emails',
    subtitle: 'Join the waitlist and never chase a payment manually again.',
    reasons: ['Founding freelancers get lifetime pricing', 'Early access before public launch', 'Free migration from your current tracker'],
  },
  productPreview: {
    title: 'Payment Tracker — March 2026',
    subtitle: '3 overdue invoices, 2 auto-nudged',
    items: [
      { label: 'Acme Corp — $3,200', value: '14 days overdue — Firm nudge sent', highlight: true },
      { label: 'StartupXYZ — $1,800', value: '7 days overdue — Friendly reminder sent' },
      { label: 'DesignCo — $950', value: '3 days overdue — Scheduled for tomorrow' },
      { label: 'BlueSky Inc — $2,400', value: 'Paid after 2nd nudge', highlight: true },
      { label: 'This month recovered', value: '$6,350 from 4 follow-ups', highlight: true },
    ],
  },
  howItWorks: [
    { step: 1, title: 'Add your invoices', description: 'Enter invoice details or connect your invoicing tool. Set payment terms and client relationship level.' },
    { step: 2, title: 'AI writes the follow-up', description: 'InvoiceNudge generates the perfect message — friendly at D+3, firm at D+7, final notice at D+14.' },
    { step: 3, title: 'Send and track', description: 'Send with one click. See when clients open your email. Get notified when payment arrives.' },
  ],
  comparison: {
    heading: 'Why not just send emails yourself?',
    subtitle: 'You can. But it takes 20 minutes per email, and you always send too late.',
    product: 'InvoiceNudge',
    competitors: ['Manual Email', 'FreshBooks', 'QuickBooks'],
    rows: [
      { feature: 'AI tone matching', values: [true, false, false, false] },
      { feature: 'Auto-scheduling (D+3/7/14)', values: [true, false, true, true] },
      { feature: 'Open tracking', values: [true, false, false, false] },
      { feature: 'Escalation templates', values: [true, false, false, false] },
      { feature: 'Built for freelancers', values: [true, false, false, false] },
      { feature: 'Price', values: ['$12/mo', 'Free (your time)', '$17/mo', '$30/mo'] },
    ],
  },
  founderNote: {
    quote: 'I lost $4,000 last year because I was too uncomfortable to follow up on time. InvoiceNudge handles the awkward part.',
    author: 'The InvoiceNudge Team',
    role: 'Built by a freelancer who hated chasing payments',
  },
  testimonial: {
    quote: 'Two clients paid within hours of the AI-generated follow-up. I\'d been putting off emailing them for weeks.',
    author: 'Rachel S.',
    role: 'Freelance Designer, 4 years',
  },
  faq: [
    { question: 'Will clients know the emails are AI-generated?', answer: 'No. Each message sounds like you wrote it personally. The AI matches your tone and references specific invoice details.' },
    { question: 'What if I have a delicate client relationship?', answer: 'You set the relationship level and InvoiceNudge adjusts the tone accordingly. You can always edit before sending.' },
    { question: 'Does it work with my invoicing tool?', answer: 'InvoiceNudge works standalone or connects with FreshBooks, QuickBooks, Wave, and Xero.' },
    { question: 'What happens after the final notice?', answer: 'If 3 nudges don\'t work, InvoiceNudge suggests next steps: formal demand letter template, or small claims guidance.' },
  ],
  seo: {
    title: 'InvoiceNudge — AI Payment Follow-Up for Freelancers',
    description: 'Stop chasing late payments manually. InvoiceNudge uses AI to write the perfect follow-up email for each client, automatically.',
    keywords: ['freelancer invoice follow up', 'late payment reminder', 'freelancer payment tracker'],
  },
}
