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
    beforeAfter: {
      before: 'Generic email blast → 3% reply rate → crickets',
      after: 'AI-personalized ask → 18% reply rate → 5-star reviews',
    },
  },
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
    subtitle: 'Join the waitlist. Be first when we launch.',
  },
  seo: {
    title: 'ReviewDraft — AI Review Request Tool for Shopify Sellers',
    description: 'Get more product reviews with AI-personalized review request emails sent at the perfect time. Built for Shopify sellers.',
    keywords: ['shopify review request tool', 'get more product reviews', 'automated review requests shopify'],
  },
}
