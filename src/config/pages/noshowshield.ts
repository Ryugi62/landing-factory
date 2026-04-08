import type { PageConfig } from '@/config/type'

export const config: PageConfig = {
  slug: 'noshowshield',
  name: 'NoShowShield',
  tagline: 'Stop Losing Money to No-Shows',
  description: 'NoShowShield protects beauty professionals from no-show losses with automatic deposit collection, smart reminders, and waitlist backfill. Set up in 2 minutes.',
  variant: 'warm',
  theme: {
    accent: 'orange',
    emoji: '🛡️',
  },
  hero: {
    badge: 'No-Show Protection',
    title: 'No-shows cost you $200+ every week. That ends',
    titleHighlight: 'now',
    subtitle: 'Collect deposits automatically, send smart reminders, and fill cancellations from your waitlist — so every slot on your calendar earns money.',
    cta: 'Protect My Schedule — Free',
  },
  problems: [
    {
      icon: '💸',
      title: '$200+ lost every week',
      desc: 'Each no-show is an empty hour you could have filled. That\'s $50–200 in revenue vanishing from every ghost.',
    },
    {
      icon: '📱',
      title: '30 minutes on manual reminders',
      desc: 'Texting every client the day before. Copy, paste, send. Repeat for 20+ appointments. Every single week.',
    },
    {
      icon: '⏳',
      title: 'Empty slots stay empty',
      desc: 'A client cancels last minute. You scramble to fill the spot but your waitlist is on a sticky note somewhere.',
    }
  ],
  features: [
    {
      icon: '💳',
      title: 'One-Click Deposit Collection',
      desc: 'Send a booking link with a built-in deposit. Clients pay upfront — professionally and seamlessly. No awkward Venmo requests.',
      badge: 'Core feature',
    },
    {
      icon: '🔔',
      title: 'Smart Auto-Reminders',
      desc: 'Automated reminders at 24 hours and 2 hours before each appointment. Clients confirm or cancel — no manual texting required.',
    },
    {
      icon: '⚡',
      title: 'Waitlist Backfill',
      desc: 'When someone cancels, the next person on your waitlist gets an instant notification. Empty slots get filled before you even notice.',
    }
  ],
  pricing: [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      features: ['3 bookings/month', 'Email reminders', 'Basic deposit collection', '1 booking link'],
      highlight: false,
    },
    {
      name: 'Solo',
      price: '$19',
      period: '/month',
      features: ['Unlimited bookings', 'SMS + email reminders', 'Waitlist backfill', 'No-show analytics', 'Custom deposit rules'],
      highlight: true,
    },
    {
      name: 'Pro',
      price: '$39',
      period: '/month',
      features: ['Everything in Solo', 'Multiple service types', 'Team scheduling', 'Priority support', 'Client no-show history'],
      highlight: false,
    }
  ],
  cta: {
    title: 'Ready to stop losing money to no-shows?',
    subtitle: 'Join the waitlist. Be the first to protect your schedule when we launch.',
  },
  seo: {
    title: 'NoShowShield — Stop Losing Money to No-Shows | Beauty Professional Booking Protection',
    description: 'NoShowShield helps beauty professionals eliminate no-show losses with automatic deposit collection, smart reminders, and waitlist backfill. Free to start.',
    keywords: ['no show protection', 'salon deposit software', 'beauty booking tool', 'esthetician scheduling', 'reduce no shows', 'appointment deposit collection'],
  },
}
