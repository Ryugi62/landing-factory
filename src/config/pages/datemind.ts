import type { PageConfig } from '@/config/type'

export const config: PageConfig = {
  slug: 'datemind',
  name: 'DateMind',
  tagline: 'Your AI dating coach that turns awkward into awesome.',
  description:
    'Practice real dating scenarios, get honest feedback on your messages, and optimize your dating profile.',
  variant: 'warm',
  theme: {
    accent: 'rose',
    emoji: '💘',
  },
  hero: {
    badge: 'AI-Powered Dating Coach',
    title: 'Turn awkward into',
    titleHighlight: 'awesome',
    subtitle:
      "Practice scenarios, analyze messages, optimize your profile — with an AI coach that won't judge you.",
    cta: 'Join the waitlist',
  },
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
    subtitle: 'Join the waitlist. Be first when we launch.',
  },
  seo: {
    title: 'DateMind — AI Dating Coach',
    description:
      'AI-powered dating coach. Practice real scenarios, analyze messages, and optimize your dating profile.',
    keywords: ['AI dating coach', 'dating profile optimizer', 'dating message analyzer'],
  },
}
