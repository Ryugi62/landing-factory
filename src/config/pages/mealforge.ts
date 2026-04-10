import type { PageConfig } from '@/config/type'

export const config: PageConfig = {
  slug: 'mealforge',
  name: 'MealForge',
  tagline: 'Client Meal Plans in 30 Seconds',
  description: 'MealForge helps fitness coaches create personalized, macro-balanced meal plans for every client in seconds — not hours. Enter goals, allergies, and preferences. Get a branded weekly plan. Share in one click.',
  variant: 'warm',
  theme: {
    accent: 'emerald',
    emoji: '🥗',
  },
  hero: {
    badge: 'For Fitness Coaches',
    title: 'Client meal plans in 30 seconds, not',
    titleHighlight: '30 minutes',
    subtitle: 'Enter your client\'s goals, allergies, and preferences. Get a branded, macro-balanced weekly plan. Share it in one click.',
    cta: 'Join the Waitlist — Free Early Access',
    layout: 'split',
  },
  trustBadges: [
    'Built for online fitness coaches',
    'Guidance tool, not medical advice',
    'Cancel anytime',
  ],
  problems: [
    {
      icon: '⏱️',
      title: '45 minutes per client, per plan',
      desc: 'Googling recipes, calculating macros, formatting spreadsheets. Multiply by 15 clients and your entire weekend is gone.',
    },
    {
      icon: '💸',
      title: 'Leaving $100/client on the table',
      desc: 'Coaches who offer meal plans charge $50–100 more per month. But you can\'t offer what you don\'t have time to create.',
    },
    {
      icon: '📋',
      title: 'Generic plans kill client trust',
      desc: 'Copy-pasting the same plan for every client? They notice. Personalization is what keeps clients paying month after month.',
    }
  ],
  features: [
    {
      icon: '⚡',
      title: '30-Second Plan Generation',
      desc: 'Enter client goals, dietary restrictions, and food preferences. Get a complete 7-day meal plan with calories and macros calculated automatically.',
      badge: 'Core feature',
    },
    {
      icon: '🎨',
      title: 'Your Brand, Your Plans',
      desc: 'Add your logo, colors, and coaching name. Every plan looks like you spent hours on it. Share as polished PDFs or client-friendly links.',
    },
    {
      icon: '🛒',
      title: 'Smart Grocery Lists',
      desc: 'Each plan comes with a consolidated shopping list. Your clients stop asking \'what should I buy?\' and start actually following the plan.',
    }
  ],
  pricing: [
    {
      name: 'Starter',
      price: '$0',
      period: 'forever',
      features: ['3 meal plans/month', 'Basic macro calculation', 'PDF export', '1 client profile'],
      highlight: false,
    },
    {
      name: 'Coach',
      price: '$19',
      period: '/month',
      features: ['Unlimited meal plans', '20 client profiles', 'Custom branding', 'Grocery lists', 'Plan history & tracking'],
      highlight: true,
    },
    {
      name: 'Pro',
      price: '$39',
      period: '/month',
      features: ['Everything in Coach', 'Unlimited clients', 'Client sharing links', 'Bulk plan generation', 'Priority support'],
      highlight: false,
    }
  ],
  cta: {
    title: 'Stop spending hours on meal plans. Start spending seconds.',
    subtitle: 'Join the waitlist today and be among the first coaches to try MealForge.',
    reasons: [
      'Founding coaches get lifetime pricing',
      'Early access + shape the product',
      'First 50 coaches get branded exports free',
    ],
  },
  productPreview: {
    title: 'Weekly Meal Plan — Sarah K.',
    subtitle: 'Generated in 30 seconds for a fat-loss client with nut allergy',
    items: [
      { label: 'Mon Breakfast', value: 'Greek yogurt bowl — 380 cal, 32g protein' },
      { label: 'Mon Lunch', value: 'Grilled chicken salad — 520 cal, 42g protein', highlight: true },
      { label: 'Mon Dinner', value: 'Salmon with roasted vegetables — 610 cal, 38g protein' },
      { label: 'Tue Breakfast', value: 'Protein oatmeal with berries — 410 cal, 28g protein' },
      { label: 'Tue Lunch', value: 'Turkey wrap with avocado — 480 cal, 35g protein' },
      { label: 'Weekly Macros', value: 'Avg 1,820 cal · 145g P · 180g C · 62g F', highlight: true },
    ],
  },
  howItWorks: [
    { step: 1, title: 'Enter client profile', description: 'Goals, dietary restrictions, allergies, food preferences, and target macros. Takes 30 seconds.' },
    { step: 2, title: 'AI generates the plan', description: 'A complete 7-day meal plan with recipes, portions, calories, and macros — calculated instantly.' },
    { step: 3, title: 'Share with your branding', description: 'Export as a branded PDF or send a client-friendly link. Grocery list included.' },
  ],
  comparison: {
    heading: 'Why not just use a spreadsheet?',
    subtitle: 'Sheets is manual. ChatGPT is inconsistent. Trainerize is overkill. MealForge does one thing — fast, branded meal plans.',
    product: 'MealForge',
    competitors: ['Google Sheets', 'ChatGPT', 'Trainerize'],
    rows: [
      { feature: 'Time per plan', values: ['30 seconds', '45–90 min', '5–10 min', '15–30 min'] },
      { feature: 'Macro calculation', values: [true, false, false, true] },
      { feature: 'Branded PDF export', values: [true, false, false, true] },
      { feature: 'Grocery list', values: [true, false, false, false] },
      { feature: 'Client sharing link', values: [true, false, false, true] },
      { feature: 'Allergy-safe recipes', values: [true, false, false, false] },
      { feature: 'Price', values: ['$19/mo', 'Free', 'Free', '$30+/mo'] },
    ],
  },
  founderNote: {
    quote: 'I built MealForge because I was spending my entire Sunday making meal plans in Google Sheets. My clients deserved better nutrition guidance, but I just didn\'t have the hours. If you\'re in the same boat — this is for you.',
    author: 'The MealForge Team',
    role: 'Built by coaches, for coaches',
  },
  testimonial: {
    quote: 'I used to spend 2-3 hours every Sunday on meal plans. MealForge cut it to minutes. My clients get better plans and I get my weekends back.',
    author: 'Sarah M.',
    role: 'Online Fitness Coach, 18 clients',
  },
  faq: [
    { question: 'Do I need a nutrition certification to use MealForge?', answer: 'MealForge generates meal plan templates based on general dietary guidelines — not medical advice. Many coaches use it alongside their existing certifications. All plans include a standard disclaimer.' },
    { question: 'How accurate are the macro and calorie calculations?', answer: 'Plans are generated using established nutritional data. You can review and adjust any values before sharing with your clients.' },
    { question: 'Can I customize the generated plans?', answer: 'Yes. Edit any meal, swap recipes, adjust portions. The AI gives you a solid starting point — you have full control over the final plan.' },
    { question: 'How is this different from Trainerize or TrueCoach?', answer: 'Those are full coaching platforms ($30–100/mo) with exercise tracking, messaging, and more. MealForge does one thing — meal plans — and does it in 30 seconds instead of 30 minutes. Use it alongside your existing tools.' },
  ],
  sharing: {
    referral: true,
  },
  seo: {
    title: 'MealForge — AI Meal Plans for Fitness Coaches | 30 Seconds Per Client',
    description: 'MealForge helps fitness coaches create personalized, macro-balanced meal plans in 30 seconds. Custom branding, grocery lists, and PDF export. Free to start.',
    keywords: ['meal plan software personal trainer', 'AI meal planner coach', 'nutrition plan generator', 'fitness coach meal plan app', 'custom meal plan tool', 'coach nutrition software'],
  },
}
