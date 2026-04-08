import type { PageConfig } from '@/config/type'

export const config: PageConfig = {
  slug: 'skinfit',
  name: 'Skinfit',
  tagline: 'Your AI skin coach, not just an ingredient checker.',
  description: 'Skinfit analyzes your skin type, lifestyle, and today\'s weather to build a personalized skincare routine — updated daily so it always fits your actual condition.',
  variant: 'warm',
  theme: { accent: 'rose', emoji: '✨' },
  hero: {
    badge: 'AI Skincare Coach',
    title: 'Your routine, built for',
    titleHighlight: 'today',
    subtitle: 'Apps like Hwahae tell you what\'s in a product. Skinfit tells you what to use today — based on your skin type, last night\'s sleep, and this morning\'s air quality.',
    cta: 'Join the waitlist',
    layout: 'split',
  },
  trustBadges: ['Dermatologist-reviewed logic', 'Updates daily with weather', 'Cancel anytime'],
  problems: [
    { icon: '😵', title: 'Too much advice, none of it fits', desc: 'YouTube, Reddit, friends — everyone recommends something different. You\'ve spent hundreds trying products that work for someone else\'s skin.' },
    { icon: '🌤️', title: 'Yesterday\'s routine ≠ today\'s routine', desc: 'High pollution, poor sleep, hormonal shifts — your skin changes daily. Your routine shouldn\'t be static.' },
    { icon: '💸', title: 'Great ingredients, wrong combo', desc: 'You bought the right products. But mixing the wrong actives can irritate or cancel each other out.' },
  ],
  features: [
    { icon: '🤖', title: '5-min quiz → AI-built routine', desc: 'Answer questions about your skin, lifestyle, and goals. GPT-4o generates your personalized AM/PM routine with reasoning for every step.', badge: 'Most popular' },
    { icon: '🌡️', title: 'Daily condition updates', desc: 'Bad air quality today? Only 4 hours of sleep? Skinfit adjusts your routine automatically.' },
    { icon: '🛒', title: 'Shop your routine instantly', desc: 'Every recommended product links to where you can buy it. Ingredient conflict warnings included.' },
  ],
  pricing: [
    { name: 'Free', price: '$0', period: 'forever', features: ['Skin type analysis', '1 base routine', '3 product recommendations'], highlight: false },
    { name: 'Pro', price: '$9', period: '/month', features: ['Unlimited routine generations', 'Weather & sleep sync', 'Ingredient conflict checker', 'Seasonal routine alerts'], highlight: true },
    { name: 'Premium', price: '$19', period: '/month', features: ['Everything in Pro', 'Monthly skin expert Q&A', 'Product swap alerts', 'Priority support'], highlight: false },
  ],
  cta: {
    title: 'Your skin changes daily. Your routine should too.',
    subtitle: 'Join the waitlist and get your first personalized routine free.',
    reasons: ['Founding members get lifetime pricing', 'Free skin analysis on signup', 'Early access to ingredient checker'],
  },
  productPreview: {
    title: 'Today\'s Routine — Oily/Combo Skin',
    subtitle: 'Adjusted for 82°F, high humidity, 6h sleep',
    items: [
      { label: 'AM Step 1', value: 'Gentle foaming cleanser — CeraVe Foaming' },
      { label: 'AM Step 2', value: 'Niacinamide 10% — oil control today', highlight: true },
      { label: 'AM Step 3', value: 'Lightweight SPF 50 — UV index 8 today', highlight: true },
      { label: 'PM Step 1', value: 'Double cleanse — oil + water' },
      { label: 'PM Step 2', value: 'Skip retinol tonight — only 6h sleep', highlight: true },
    ],
  },
  howItWorks: [
    { step: 1, title: 'Take the 5-min skin quiz', description: 'Answer questions about your skin type, concerns, lifestyle, and current products. AI builds your baseline routine.' },
    { step: 2, title: 'Get your daily routine', description: 'Every morning, Skinfit adjusts your routine based on weather, sleep, and stress. Specific products, specific order.' },
    { step: 3, title: 'Shop and track progress', description: 'Every product links to where you can buy it. Track your skin\'s progress over weeks with photo logs.' },
  ],
  comparison: {
    heading: 'Why not just follow a YouTube routine?',
    subtitle: 'YouTube gives you someone else\'s routine. Skinfit builds one that changes with YOUR skin, every day.',
    product: 'Skinfit',
    competitors: ['YouTube/Reddit', 'Hwahae', 'Dermatologist'],
    rows: [
      { feature: 'Personalized to your skin', values: [true, false, false, true] },
      { feature: 'Updates daily', values: [true, false, false, false] },
      { feature: 'Weather/sleep adjusted', values: [true, false, false, false] },
      { feature: 'Ingredient conflict check', values: [true, false, true, true] },
      { feature: 'Product recommendations', values: [true, false, true, true] },
      { feature: 'Price', values: ['$9/mo', 'Free', 'Free', '$150+/visit'] },
    ],
  },
  founderNote: {
    quote: 'I wasted hundreds on skincare products that worked for influencers but not for me. I wanted an AI that knew MY skin.',
    author: 'The Skinfit Team',
    role: 'Built by someone tired of one-size-fits-all advice',
  },
  testimonial: {
    quote: 'Skinfit told me to skip retinol on low-sleep nights. My skin has never been calmer.',
    author: 'Mia L.',
    role: 'Skinfit beta user, combination skin',
  },
  faq: [
    { question: 'Is this real medical advice?', answer: 'No. Skinfit provides general skincare guidance based on established dermatological principles. It\'s not a substitute for professional medical advice.' },
    { question: 'How does the daily adjustment work?', answer: 'Skinfit checks your local weather, your logged sleep hours, and any notes you add. It then adjusts product recommendations accordingly.' },
    { question: 'What if I already have products I like?', answer: 'You can input your current products and Skinfit will build a routine around them — flagging any ingredient conflicts.' },
    { question: 'Does it work for sensitive skin?', answer: 'Yes. The skin quiz identifies sensitivity levels and the AI avoids harsh actives and adjusts more conservatively.' },
  ],
  seo: {
    title: 'Skinfit — AI Skincare Routine Builder Personalized to You',
    description: 'Skinfit builds your daily skincare routine based on your skin type, lifestyle, and today\'s weather. Powered by AI. Updated daily.',
    keywords: ['personalized skincare routine', 'AI skincare app', 'K-beauty routine builder', 'skin type routine generator', 'daily skincare recommendations'],
  },
}
