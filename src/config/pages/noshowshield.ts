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
    layout: 'split',
  },
  trustBadges: [
    'Built for beauty professionals',
    'Set up in 2 minutes',
    'Cancel anytime',
  ],
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
    subtitle: 'Join the waitlist and be the first to protect your schedule when we launch.',
    reasons: [
      'Founding members get lifetime pricing',
      'Early access before public launch',
      'Free setup assistance for first 50 users',
    ],
  },
  productPreview: {
    title: 'Your Weekly Schedule — Protected',
    subtitle: 'Every booking secured with a deposit',
    items: [
      { label: 'Mon 10:00 AM', value: 'Lash Extensions — $50 deposit collected', highlight: true },
      { label: 'Mon 2:00 PM', value: 'Facial — $30 deposit collected' },
      { label: 'Tue 11:00 AM', value: 'Cancelled → Waitlist notified → Filled in 8 min', highlight: true },
      { label: 'Tue 3:00 PM', value: 'Nail Set — Reminder sent, confirmed' },
      { label: 'Weekly Recovery', value: '$340 saved from 3 potential no-shows', highlight: true },
    ],
  },
  howItWorks: [
    { step: 1, title: 'Create a booking link', description: 'Set your services, prices, and deposit amount. Share the link with clients via Instagram, text, or your website.' },
    { step: 2, title: 'Clients book and pay deposit', description: 'Clients pick a time and pay a deposit upfront. Automatic reminders go out at 24h and 2h before the appointment.' },
    { step: 3, title: 'Cancellations get filled automatically', description: 'If someone cancels, your waitlist gets notified instantly. First to claim gets the slot. You do nothing.' },
  ],
  comparison: {
    heading: 'Why not just use Square or Calendly?',
    subtitle: 'Square handles payments. Calendly handles scheduling. Neither protects you from no-shows.',
    product: 'NoShowShield',
    competitors: ['Square Appointments', 'Calendly', 'Vagaro'],
    rows: [
      { feature: 'Deposit collection', values: [true, false, false, true] },
      { feature: 'Auto-reminders (SMS + email)', values: [true, false, true, true] },
      { feature: 'Waitlist backfill', values: [true, false, false, false] },
      { feature: 'No-show analytics', values: [true, false, false, false] },
      { feature: 'Built for beauty pros', values: [true, false, false, true] },
      { feature: 'Price', values: ['$19/mo', 'Free+', '$8/mo+', '$25/mo+'] },
    ],
  },
  founderNote: {
    quote: 'I watched my partner lose $800 in a single week to no-shows at her lash studio. There was no simple tool to fix it. So I built one.',
    author: 'The NoShowShield Team',
    role: 'Built by someone who saw the problem firsthand',
  },
  testimonial: {
    quote: 'I used to lose 3-4 clients a week to no-shows. Now every booking has a deposit and my waitlist fills cancellations automatically.',
    author: 'Jessica R.',
    role: 'Esthetician, 6 years',
  },
  faq: [
    { question: 'Will clients be annoyed by the deposit requirement?', answer: 'Most clients appreciate the professionalism. Deposits signal that your time is valuable. Clients who respect your schedule will have no issue — and those who don\'t are the ones causing no-shows.' },
    { question: 'What happens to the deposit if a client shows up?', answer: 'The deposit is applied to the service total. Clients pay less at the appointment — they don\'t pay extra.' },
    { question: 'How does waitlist backfill work?', answer: 'When a client cancels, everyone on your waitlist gets an instant text. The first person to click the link claims the slot. It typically fills within 10 minutes.' },
    { question: 'Do I need any special hardware or POS system?', answer: 'No. NoShowShield works entirely through your phone and a booking link. No hardware, no app downloads for clients, no POS integration needed.' },
  ],
  seo: {
    title: 'NoShowShield — Stop Losing Money to No-Shows | Beauty Professional Booking Protection',
    description: 'NoShowShield helps beauty professionals eliminate no-show losses with automatic deposit collection, smart reminders, and waitlist backfill. Free to start.',
    keywords: ['no show protection', 'salon deposit software', 'beauty booking tool', 'esthetician scheduling', 'reduce no shows', 'appointment deposit collection'],
  },
}
