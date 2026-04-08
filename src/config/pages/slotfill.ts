import type { PageConfig } from '@/config/type'

export const config: PageConfig = {
  slug: 'slotfill',
  name: 'SlotFill',
  tagline: 'Turn cancellations into revenue in 60 seconds',
  description: 'SlotFill automatically contacts your waitlist the moment an appointment cancels — and fills the slot before you even notice it was empty.',
  variant: 'bold',
  theme: {
    accent: 'emerald',
    emoji: '⚡',
  },
  hero: {
    badge: 'No-Show Recovery',
    title: 'Stop losing money to',
    titleHighlight: 'no-shows',
    subtitle: 'SlotFill detects cancellations and auto-texts your waitlist in seconds. First to click gets the slot. No manual work.',
    cta: 'Join the waitlist',
    beforeAfter: {
      before: 'Cancellation → 30 min of calls → slot stays empty',
      after: 'Cancellation → auto-text in 10 sec → slot filled',
    },
  },
  problems: [
    {
      icon: '💸',
      title: 'Every no-show is money gone',
      desc: 'A missed dental slot is $180. A missed salon booking is $120. They add up fast — and right now they just disappear.',
    },
    {
      icon: '📋',
      title: 'Waitlists that go nowhere',
      desc: 'You have a list of clients who want in. But calling them manually takes 30 minutes and half don\'t answer.',
    },
    {
      icon: '⏰',
      title: 'Slots go empty for hours',
      desc: 'By the time you reach someone, the slot is wasted. You needed someone to respond in minutes, not hours.',
    }
  ],
  features: [
    {
      icon: '⚡',
      title: 'Auto-Blast in seconds',
      desc: 'The moment a cancellation comes in, SlotFill texts your entire waitlist automatically. No action needed from you.',
      badge: 'Most popular',
    },
    {
      icon: '🏆',
      title: 'First-Click Wins',
      desc: 'The first client to click the link gets the slot. Everyone else gets a graceful \'filled\' message. Zero conflicts.',
    },
    {
      icon: '📊',
      title: 'Recovery Dashboard',
      desc: 'See exactly how much revenue SlotFill recovered this month vs. your subscription cost. ROI in plain numbers.',
    }
  ],
  pricing: [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      features: ['Up to 10 recoveries/month', '1 calendar integration', 'Email notifications only', 'Basic dashboard'],
      highlight: false,
    },
    {
      name: 'Pro',
      price: '$49',
      period: '/month',
      features: ['Unlimited recoveries', '3 calendar integrations', 'SMS + email notifications', 'Full recovery dashboard', 'Custom message templates'],
      highlight: true,
    },
    {
      name: 'Clinic',
      price: '$99',
      period: '/month',
      features: ['Everything in Pro', 'Unlimited integrations', 'Multi-staff support', 'Custom branding', 'Priority support'],
      highlight: false,
    }
  ],
  cta: {
    title: 'Stop leaving money on the table',
    subtitle: 'Join the waitlist. Be first when we launch.',
  },
  seo: {
    title: 'SlotFill — No-Show Recovery Software for Salons, Clinics & Gyms',
    description: 'Automatically fill cancelled appointments by texting your waitlist in seconds. SlotFill turns no-shows into revenue.',
    keywords: ['no-show recovery software', 'appointment cancellation waitlist', 'fill empty appointment slots'],
  },
}
