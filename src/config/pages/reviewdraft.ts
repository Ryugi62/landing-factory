import type { PageConfig } from '@/config/type'

export const config: PageConfig = {
  slug: 'reviewdraft',
  name: 'ReviewDraft',
  tagline: 'AI-powered review requests that actually get replies.',
  description: 'ReviewDraft crafts personalized review request emails for each customer and sends them at the perfect moment — turning silent buyers into 5-star reviewers.',
  variant: 'warm',
  theme: {
    accent: 'violet',
    emoji: '⭐',
  },
  hero: {
    badge: 'Shopify Review Booster',
    title: 'Stop begging for',
    titleHighlight: 'reviews',
    subtitle: 'ReviewDraft writes personalized review requests for each customer and sends them at the perfect time. More reviews, zero awkwardness.',
    cta: 'Join the waitlist',
    layout: 'split',
  },
  trustBadges: [
    'Built for Shopify sellers',
    'No coding required',
    'Cancel anytime',
  ],
  problems: [
    {
      icon: '😶',
      title: 'Customers buy and vanish',
      desc: '95% of happy buyers never leave a review. They loved your product — they just forgot, or the email felt spammy.',
    },
    {
      icon: '📧',
      title: 'Generic emails get ignored',
      desc: '"Please leave a review" sounds robotic. Customers delete it without reading. Your open rate drops every month.',
    },
    {
      icon: '⏰',
      title: 'Wrong timing kills response',
      desc: 'Ask too early and they haven\'t used it. Ask too late and they\'ve moved on. Timing is everything — and you\'re guessing.',
    }
  ],
  features: [
    {
      icon: '🤖',
      title: 'AI-Personalized Messages',
      desc: 'Each review request references the exact product, purchase date, and customer name. Feels human, not automated.',
      badge: 'Core feature',
    },
    {
      icon: '⏱️',
      title: 'Smart Send Timing',
      desc: 'ReviewDraft calculates the optimal window based on product type and delivery date. Ask when they\'re happiest.',
    },
    {
      icon: '📊',
      title: 'Review Rate Dashboard',
      desc: 'Track your review request rate, open rate, and actual reviews received. See ROI in real numbers.',
    }
  ],
  pricing: [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      features: ['Up to 50 requests/month', '1 Shopify store', 'Basic templates', 'Email support'],
      highlight: false,
    },
    {
      name: 'Pro',
      price: '$29',
      period: '/month',
      features: ['Unlimited requests', '3 Shopify stores', 'AI personalization', 'Smart timing', 'Review dashboard'],
      highlight: true,
    },
    {
      name: 'Agency',
      price: '$79',
      period: '/month',
      features: ['Everything in Pro', 'Unlimited stores', 'White-label emails', 'Priority support', 'API access'],
      highlight: false,
    }
  ],
  cta: {
    title: 'Ready to turn buyers into reviewers?',
    subtitle: 'Join the waitlist and start getting more reviews from day one.',
    reasons: [
      'Founding sellers get lifetime pricing',
      'Early access + direct feature input',
      'Free Shopify integration for first 50 stores',
    ],
  },
  productPreview: {
    title: 'Review Request — Order #4821',
    subtitle: 'AI-personalized for each customer',
    items: [
      { label: 'Customer', value: 'Sarah M. — Organic Face Serum' },
      { label: 'Tone', value: 'Warm, personal — mentions product by name', highlight: true },
      { label: 'Send time', value: 'Day 7 after delivery (optimal window)' },
      { label: 'Open rate', value: '62% (vs 18% generic)', highlight: true },
      { label: 'Review received', value: '5 stars — "Love this serum!"', highlight: true },
    ],
  },
  howItWorks: [
    { step: 1, title: 'Connect your Shopify store', description: 'One-click Shopify integration. ReviewDraft automatically syncs your orders and customer data.' },
    { step: 2, title: 'AI writes personalized requests', description: 'Each email mentions the exact product, purchase date, and customer name. Feels human, not automated.' },
    { step: 3, title: 'Emails go out at the perfect time', description: 'Smart timing based on product type and delivery date. Ask when customers are happiest with their purchase.' },
  ],
  comparison: {
    heading: 'Why not just use Shopify\'s built-in emails?',
    subtitle: 'Shopify sends generic blasts. ReviewDraft sends personal asks at the right moment.',
    product: 'ReviewDraft',
    competitors: ['Shopify Email', 'Judge.me', 'Loox'],
    rows: [
      { feature: 'AI personalization', values: [true, false, false, false] },
      { feature: 'Smart send timing', values: [true, false, true, true] },
      { feature: 'Product-specific copy', values: [true, false, false, false] },
      { feature: 'Review rate tracking', values: [true, false, true, true] },
      { feature: 'No template editing needed', values: [true, false, false, false] },
      { feature: 'Price', values: ['$29/mo', 'Free', '$15/mo', '$10/mo'] },
    ],
  },
  founderNote: {
    quote: 'I ran a Shopify store for 2 years and watched 95% of happy customers never leave a review. The generic email blasts weren\'t working. So I built something smarter.',
    author: 'The ReviewDraft Team',
    role: 'Built by a Shopify seller',
  },
  testimonial: {
    quote: 'Our review rate went from 3% to 18% in the first month. The AI-personalized emails feel so natural that customers actually reply.',
    author: 'Mike T.',
    role: 'Shopify Store Owner, Skincare Brand',
  },
  faq: [
    { question: 'Will customers know the emails are AI-generated?', answer: 'No. Each email reads like a thoughtful personal note. It references the specific product they bought and feels genuinely human.' },
    { question: 'Does this work with any Shopify theme or app?', answer: 'Yes. ReviewDraft connects directly to Shopify\'s order system. It works regardless of your theme, and alongside existing review apps like Judge.me or Loox.' },
    { question: 'What if a customer had a bad experience?', answer: 'ReviewDraft detects potential negative signals (returns, complaints) and skips those customers automatically. You only ask happy buyers.' },
    { question: 'How is the send timing determined?', answer: 'The AI calculates the optimal window based on product category and shipping timeline. Skincare products get asked later (time to try), while accessories get asked sooner.' },
  ],
  seo: {
    title: 'ReviewDraft — AI Review Request Tool for Shopify Sellers',
    description: 'Get more product reviews with AI-personalized review request emails sent at the perfect time. Built for Shopify sellers.',
    keywords: ['shopify review request tool', 'get more product reviews', 'automated review requests shopify'],
  },
}
