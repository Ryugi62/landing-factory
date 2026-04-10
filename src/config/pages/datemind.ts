import type { PageConfig } from '@/config/type'

export const config: PageConfig = {
  slug: 'datemind',
  name: 'DateMind',
  tagline: 'Your AI dating coach that turns awkward into awesome.',
  description: 'Practice real dating scenarios, get honest feedback on your messages, and optimize your dating profile.',
  variant: 'warm',
  theme: {
    accent: 'rose',
    emoji: '💘',
  },
  hero: {
    badge: 'AI-Powered Dating Coach',
    title: 'Turn awkward into',
    titleHighlight: 'awesome',
    subtitle: 'Practice scenarios, analyze messages, optimize your profile — with an AI coach that won\'t judge you.',
    cta: 'Join the waitlist',
    layout: 'split',
  },
  trustBadges: [
    'Private and judgment-free',
    'Powered by GPT-4o',
    'Cancel anytime',
  ],
  problems: [
    {
      icon: '💸',
      title: 'Coaching is expensive',
      desc: '$100–300/hr for a dating coach. Not for everyone.',
    },
    {
      icon: '😳',
      title: 'Too embarrassed to ask',
      desc: 'Friends give politely useless advice.',
    },
    {
      icon: '❌',
      title: 'Generic advice fails',
      desc: '"Just be yourself" is not actionable feedback.',
    },
  ],
  features: [
    {
      icon: '🎭',
      title: 'Scenario Simulator',
      desc: 'Practice 10 real scenarios with AI. Get a confidence score and 3 specific improvements.',
      badge: 'Most popular',
    },
    {
      icon: '🔍',
      title: 'Message Analyzer',
      desc: 'Paste any conversation. Get line-by-line feedback and a rewritten version that lands.',
    },
    {
      icon: '✨',
      title: 'Profile Optimizer',
      desc: 'AI rewrites your bio for Tinder, Hinge, or Bumble — with a Before/After comparison.',
    },
  ],
  pricing: [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      features: ['3 simulations/month', '1 profile optimization/month', 'Basic feedback'],
      highlight: false,
    },
    {
      name: 'Pro',
      price: '$19',
      period: '/month',
      features: ['Unlimited simulations', '10 message analyses/month', 'Unlimited profile opts'],
      highlight: true,
    },
    {
      name: 'Premium',
      price: '$39',
      period: '/month',
      features: ['Everything in Pro', 'Unlimited message analyses', 'Priority support'],
      highlight: false,
    },
  ],
  cta: {
    title: 'Ready to level up your dating game?',
    subtitle: 'Join the waitlist and be the first to practice with your AI dating coach.',
    reasons: [
      'Founding members get lifetime pricing',
      'Early access before public launch',
      'All conversations are 100% private',
    ],
  },
  productPreview: {
    title: 'Practice Session — Coffee Date',
    subtitle: 'AI-scored with specific improvements',
    items: [
      { label: 'Scenario', value: 'First coffee date — she mentions her dog' },
      { label: 'Your response', value: '"What breed? I\'m more of a cat person"' },
      { label: 'AI feedback', value: 'Good humor — but pivot back to HER interest', highlight: true },
      { label: 'Rewritten', value: '"What breed? My neighbor has a golden I walk sometimes"', highlight: true },
      { label: 'Confidence score', value: '72/100 — Room to improve', highlight: true },
    ],
  },
  howItWorks: [
    { step: 1, title: 'Pick a scenario', description: 'Choose from 50+ real dating situations — first date, texting after a match, asking someone out, handling rejection.' },
    { step: 2, title: 'Practice your response', description: 'Type what you\'d say. The AI plays the other person realistically — awkward silences and all.' },
    { step: 3, title: 'Get scored and coached', description: 'Receive a confidence score, line-by-line feedback, and a rewritten version that lands better.' },
  ],
  comparison: {
    heading: 'Why not just ask ChatGPT?',
    subtitle: 'ChatGPT gives generic advice. DateMind gives you scored practice with realistic scenarios.',
    product: 'DateMind',
    competitors: ['ChatGPT', 'Dating Coach', 'Reddit Advice'],
    rows: [
      { feature: 'Realistic scenarios', values: [true, false, false, false] },
      { feature: 'Confidence scoring', values: [true, false, true, false] },
      { feature: 'Line-by-line feedback', values: [true, false, true, false] },
      { feature: 'Profile optimization', values: [true, false, true, false] },
      { feature: 'No judgment', values: [true, true, false, false] },
      { feature: 'Price', values: ['$19/mo', 'Free', '$150+/hr', 'Free'] },
    ],
  },
  founderNote: {
    quote: 'I spent months reading dating advice that never helped because I couldn\'t practice it. DateMind is the practice gym I wished I had.',
    author: 'The DateMind Team',
    role: 'Built by someone who\'s been there',
  },
  testimonial: {
    quote: 'I practiced 3 scenarios before my date last week. For the first time, I actually felt prepared instead of anxious.',
    author: 'Alex K.',
    role: 'DateMind beta user',
  },
  faq: [
    { question: 'Is my conversation data private?', answer: 'Yes. All practice sessions are encrypted and never shared. We don\'t use your conversations for training. You can delete your data anytime.' },
    { question: 'Does this actually work for real dates?', answer: 'Practice builds pattern recognition. After 10+ scenarios, users report feeling significantly more confident and natural in real conversations.' },
    { question: 'What dating apps does the profile optimizer support?', answer: 'Tinder, Hinge, Bumble, and OkCupid. The AI tailors your bio to each platform\'s style and algorithm.' },
    { question: 'Is this only for men?', answer: 'No. DateMind works for everyone regardless of gender or orientation. Scenarios adapt to your preferences.' },
  ],
  sharing: {
    referral: true,
  },
  seo: {
    title: 'DateMind — AI Dating Coach',
    description: 'AI-powered dating coach. Practice real scenarios, analyze messages, and optimize your dating profile.',
    keywords: ['AI dating coach', 'dating profile optimizer', 'dating message analyzer'],
  },
}
