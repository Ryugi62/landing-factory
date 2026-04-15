import type { PageConfig } from '@/config/type'

export const config: PageConfig = {
  slug: 'prooflock',
  name: 'ProofLock',
  tagline: 'Stop Chasing Clients. Start Getting Paid.',
  description: 'Securely share project results, get automated feedback, and final payments in one seamless link.',
  variant: 'bold',
  theme: {
    accent: 'indigo',
    emoji: '🔒',
  },
  hero: {
    badge: 'Built for Freelancers & Agencies',
    title: 'Send the Work. Get the Money.',
    titleHighlight: 'Guaranteed.',
    subtitle: 'The all-in-one link for reviews, approvals, and automated final payments. No more email chains.',
    cta: 'Start Your First Portal (Free)',
    layout: 'split',
  },
  trustBadges: ['Over M secured', 'Stripe Partner', '256-bit AES'],
  problems: [
    {
      icon: '👻',
      title: 'Ghosting Clients',
      desc: 'They disappear right when the work is done.',
    },
    {
      icon: '⏳',
      title: 'Approval Hell',
      desc: 'Feedback scattered across 5 different apps.',
    },
    {
      icon: '💸',
      title: 'Unpaid Invoices',
      desc: 'Working for free because you shared the final files too early.',
    }
  ],
  features: [
    {
      icon: '🛡️',
      title: 'Secure Proofing',
      desc: 'Client reviews with interactive comments.',
      badge: 'Core',
    },
    {
      icon: '💳',
      title: 'Pay to Download',
      desc: 'Final files unlocked only after payment.',
      badge: 'Automated',
    },
    {
      icon: '💬',
      title: 'Unified Chat',
      desc: 'All client feedback in one place.',
      badge: 'Productivity',
    }
  ],
  pricing: [
    {
      name: 'Solo',
      price: '/bin/bash',
      period: 'forever',
      features: ['3 Portals/mo', 'Basic Proofing', 'Stripe Payment'],
      highlight: false,
    },
    {
      name: 'Pro',
      price: '9',
      period: 'mo',
      features: ['Unlimited Portals', 'Custom Branding', 'Priority Support'],
      highlight: true,
    }
  ],
  cta: {
    title: 'Ready to stop working for free?',
    subtitle: 'Join 500+ freelancers securing their payments.',
    reasons: ['Free setup', 'No credit card', 'Cancel anytime'],
  },
  productPreview: {
    title: 'How it looks for your client',
    items: [
      { label: 'Review Status', value: 'Approved', highlight: true },
      { label: 'Payment', value: 'Pending' },
      { label: 'Download', value: 'Locked' },
    ],
  },
  howItWorks: [
    { step: 1, title: 'Upload', description: 'Share your project files via secure link.' },
    { step: 2, title: 'Collaborate', description: 'Get clear, actionable feedback in one place.' },
    { step: 3, title: 'Finish', description: 'Client pays, and files unlock automatically.' },
  ],
  comparison: {
    product: 'ProofLock',
    competitors: ['Email Chains', 'Dropbox'],
    rows: [
      { feature: 'Payment Lock', values: [true, false, false] },
      { feature: 'Integrated Feedback', values: [true, 'Messy', 'None'] },
      { feature: 'Approval Workflow', values: [true, false, false] },
    ],
  },
  founderNote: {
    quote: 'I built ProofLock because I was tired of being ghosted. It\'s time freelancers got the respect (and pay) they deserve.',
    author: 'Ryugi',
    role: 'Founder',
  },
  testimonial: {
    quote: 'ProofLock cut my payment cycle from 30 days to 2 hours.',
    author: 'Sarah J.',
    role: 'Freelance Designer',
  },
  faq: [
    { question: 'Is it free to start?', answer: 'Yes, our Solo plan is free forever for up to 3 portals per month.' },
    { question: 'What fees do you take?', answer: 'We only charge a small platform fee on the payments you receive.' },
  ],
  seo: {
    title: 'ProofLock — Secure Freelancer Payments',
    description: 'Securely share work and get paid before download.',
    keywords: ['freelance', 'payments', 'proofing', 'client management'],
  },
}
