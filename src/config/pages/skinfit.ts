import type { PageConfig } from '@/config/type'

export const config: PageConfig = {
  slug: 'skinfit',
  name: 'Skinfit',
  tagline: 'Your AI skin coach, not just an ingredient checker.',
  description:
    'Skinfit analyzes your skin type, lifestyle, and today\'s weather to build a personalized skincare routine — updated daily so it always fits your actual condition.',
  variant: 'warm',
  theme: {
    accent: 'rose',
    emoji: '✨',
  },
  hero: {
    badge: 'AI Skincare Coach',
    title: "Your routine, built for",
    titleHighlight: 'today',
    subtitle:
      "Apps like Hwahae tell you what's in a product. Skinfit tells you what to use today — based on your skin type, last night's sleep, and this morning's air quality.",
    cta: 'Join the waitlist',
  },
  problems: [
    {
      icon: '😵',
      title: 'Too much advice, none of it fits',
      desc: "YouTube, Reddit, friends — everyone recommends something different. You've spent hundreds trying products that work for someone else's skin.",
    },
    {
      icon: '🌤️',
      title: "Yesterday's routine ≠ today's routine",
      desc: 'High pollution, poor sleep, hormonal shifts — your skin changes daily. Your routine shouldn\'t be static.',
    },
    {
      icon: '💸',
      title: 'Great ingredients, wrong combo',
      desc: "You bought the right products. But mixing the wrong actives can irritate or cancel each other out. Nobody told you that.",
    },
  ],
  features: [
    {
      icon: '🤖',
      title: '5-min quiz → AI-built routine',
      desc: 'Answer questions about your skin, lifestyle, and goals. GPT-4o generates your personalized AM/PM routine with reasoning for every step.',
      badge: 'Most popular',
    },
    {
      icon: '🌡️',
      title: 'Daily condition updates',
      desc: "Bad air quality today? Only 4 hours of sleep? Skinfit adjusts your routine automatically — 'Go gentle on actives tonight.'",
    },
    {
      icon: '🛒',
      title: 'Shop your routine instantly',
      desc: 'Every recommended product links to where you can buy it. Ingredient conflict warnings included — no guesswork.',
    },
  ],
  pricing: [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      features: ['Skin type analysis', '1 base routine', '3 product recommendations'],
      highlight: false,
    },
    {
      name: 'Pro',
      price: '$9',
      period: '/month',
      features: ['Unlimited routine generations', 'Weather & sleep sync', 'Ingredient conflict checker', 'Seasonal routine alerts'],
      highlight: true,
    },
    {
      name: 'Premium',
      price: '$19',
      period: '/month',
      features: ['Everything in Pro', 'Monthly skin expert Q&A', 'Product swap alerts', 'Priority support'],
      highlight: false,
    },
  ],
  cta: {
    title: 'Your skin changes daily. Your routine should too.',
    subtitle: 'Join the waitlist. Be first when we launch.',
  },
  seo: {
    title: 'Skinfit — AI Skincare Routine Builder Personalized to You',
    description:
      'Skinfit builds your daily skincare routine based on your skin type, lifestyle, and today\'s weather. Powered by AI. Updated daily.',
    keywords: [
      'personalized skincare routine',
      'AI skincare app',
      'K-beauty routine builder',
      'skin type routine generator',
      'daily skincare recommendations',
    ],
  },
}
