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
    layout: 'split',
    beforeAfter: {
      before: 'Cancellation → 30 min of calls → slot stays empty',
      after: 'Cancellation → auto-text in 10 sec → slot filled',
    },
  },
  trustBadges: [
    'Works with any calendar',
    'SMS-powered, no app needed',
    'Cancel anytime',
  ],
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
    subtitle: 'Join the waitlist and be the first to recover lost revenue.',
    reasons: [
      'Founding members get lifetime pricing',
      'See your ROI in the first week',
      'Free onboarding for early users',
    ],
  },
  productPreview: {
    title: 'Recovery Dashboard — This Week',
    subtitle: 'Real-time slot recovery tracking',
    items: [
      { label: 'Mon 9 AM — Dr. Chen', value: 'Cancelled → Filled in 4 min', highlight: true },
      { label: 'Tue 2 PM — Haircut', value: 'Cancelled → Filled in 12 min', highlight: true },
      { label: 'Wed 11 AM — Massage', value: 'No cancellation' },
      { label: 'Thu 4 PM — Facial', value: 'Cancelled → Waitlist notified' },
      { label: 'Revenue Recovered', value: '$620 this week', highlight: true },
    ],
  },
  howItWorks: [
    { step: 1, title: 'Connect your calendar', description: 'Link Google Calendar, Acuity, or any iCal-compatible system. SlotFill monitors for cancellations 24/7.' },
    { step: 2, title: 'Cancellation detected', description: 'The moment a slot opens, SlotFill auto-texts your waitlist. Clients see the available time and tap to claim.' },
    { step: 3, title: 'Slot filled, revenue saved', description: 'First client to respond gets the slot. You get a confirmation. Average fill time: under 10 minutes.' },
  ],
  comparison: {
    heading: 'Why not just call your waitlist?',
    subtitle: 'Manual calls take 30 minutes and half don\'t answer. SlotFill fills slots in under 10.',
    product: 'SlotFill',
    competitors: ['Manual Calls', 'Email Blast', 'Social Media Post'],
    rows: [
      { feature: 'Response time', values: ['Under 10 min', '30+ min', 'Hours', 'Hours'] },
      { feature: 'Fill rate', values: ['85%+', '~30%', '~10%', '~5%'] },
      { feature: 'Staff effort', values: ['Zero', '30 min', '15 min', '10 min'] },
      { feature: 'Works after hours', values: [true, false, true, true] },
      { feature: 'Tracks ROI', values: [true, false, false, false] },
      { feature: 'Price', values: ['$49/mo', 'Free (your time)', 'Free', 'Free'] },
    ],
  },
  founderNote: {
    quote: 'I talked to 20+ clinic owners who all said the same thing: "I have a waitlist, but by the time I call everyone, the slot is wasted." That\'s why SlotFill exists.',
    author: 'The SlotFill Team',
    role: 'Built from real clinic conversations',
  },
  testimonial: {
    quote: 'We recovered $2,400 in the first month. The tool paid for itself on day one.',
    author: 'Dr. Marcus W.',
    role: 'Dental Clinic Owner, 3 chairs',
  },
  faq: [
    { question: 'What calendars does SlotFill work with?', answer: 'Any calendar that supports iCal feeds — Google Calendar, Acuity, Calendly, Vagaro, and most clinic management systems.' },
    { question: 'Do my clients need to download an app?', answer: 'No. Clients receive a text message with a link. One tap to claim the slot. No downloads, no accounts.' },
    { question: 'What if multiple people respond at the same time?', answer: 'First click wins. Everyone else gets a polite "this slot has been filled" message. Zero conflicts.' },
    { question: 'How do I know if it\'s worth the cost?', answer: 'The recovery dashboard shows exactly how much revenue SlotFill saved you this month. Most users see ROI within the first week.' },
  ],
  seo: {
    title: 'SlotFill — No-Show Recovery Software for Salons, Clinics & Gyms',
    description: 'Automatically fill cancelled appointments by texting your waitlist in seconds. SlotFill turns no-shows into revenue.',
    keywords: ['no-show recovery software', 'appointment cancellation waitlist', 'fill empty appointment slots'],
  },
}
