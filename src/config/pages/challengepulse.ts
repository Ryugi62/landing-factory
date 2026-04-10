import type { PageConfig } from '@/config/type'

export const config: PageConfig = {
  slug: 'challengepulse',
  name: 'ChallengePulse',
  tagline: 'Turn any online course into a high-completion challenge.',
  description: 'ChallengePulse converts your existing online course into a 3-21 day challenge with daily missions, deadlines, and accountability — so your students actually finish. No platform migration needed.',
  variant: 'warm',
  theme: {
    accent: 'indigo',
    emoji: '🎯',
  },
  hero: {
    badge: 'Course Completion Tool',
    title: '87% Drop Out of Courses. 60% Finish Challenges.',
    titleHighlight: '60% Finish Challenges',
    subtitle: 'Convert your existing course into a daily-mission challenge in minutes. No platform switch. No rebuild. Just better completion rates.',
    cta: 'Convert My Course Now',
    layout: 'split',
    beforeAfter: {
      before: '800 enrolled, 48 completed. Students ghost after Module 2. Refund requests piling up.',
      after: '200 enrolled in a 14-day challenge, 124 completed. Students share certificates and refer friends.',
    },
  },
  trustBadges: ['Works with Teachable, Thinkific, Kajabi & more', '5-minute setup — no migration needed', 'Free plan available — no credit card required'],
  problems: [
    {
      icon: '📉',
      title: '6% completion rate',
      desc: 'You put months into creating your course. 94% of students never finish it. Your dashboard is embarrassing.',
    },
    {
      icon: '👻',
      title: 'Students vanish after Module 2',
      desc: 'No deadlines, no accountability. Students start strong then disappear. You have no idea who\'s stuck or why.',
    },
    {
      icon: '💸',
      title: 'Refunds and bad reviews',
      desc: 'Unfinished students don\'t get results. They ask for refunds, leave negative reviews, and never recommend you.',
    }
  ],
  features: [
    {
      icon: '🔄',
      title: 'Course-to-Challenge Converter',
      desc: 'Import your existing course structure and auto-generate a 3-21 day challenge with daily missions, deadlines, and checkpoints. No rebuilding from scratch.',
      badge: 'Core Feature',
    },
    {
      icon: '📊',
      title: 'Real-Time Progress Dashboard',
      desc: 'See every participant\'s progress at a glance. Spot who\'s falling behind before they drop out. One dashboard for all your challenges.',
    },
    {
      icon: '🔔',
      title: 'Smart Nudges & Auto-Reminders',
      desc: 'Automated reminders go out when someone misses a daily mission. Friendly, not pushy — timed to bring students back before they ghost.',
    }
  ],
  pricing: [
    {
      name: 'Starter',
      price: '$0',
      period: 'forever',
      features: ['1 challenge', 'Up to 50 participants', 'Basic progress tracking', 'Email reminders'],
      highlight: false,
    },
    {
      name: 'Pro',
      price: '$19',
      period: '/month',
      features: ['Unlimited challenges', 'Unlimited participants', 'Smart nudges & auto-reminders', 'Completion certificates', 'Leaderboard'],
      highlight: true,
    },
    {
      name: 'Academy',
      price: '$39',
      period: '/month',
      features: ['Everything in Pro', 'Multiple instructors', 'Custom branding', 'Analytics & export', 'Priority support'],
      highlight: false,
    }
  ],
  cta: {
    title: 'Ready to fix your completion rate?',
    subtitle: 'Join the waitlist and be first when we launch. Your students are dropping out right now.',
    reasons: ['Early access members get 60 days free on any plan', 'Your students are dropping out right now — every week costs completions', 'Setup takes 5 minutes. The results last for every cohort.'],
  },
  productPreview: {
    title: 'Your Challenge Dashboard',
    subtitle: 'What running a challenge actually looks like',
    items: [
      { label: 'Day 3 Mission', value: 'Record a 60-sec video introducing your brand voice', highlight: true },
      { label: 'Completion Rate', value: '52% (104 of 200 students)' },
      { label: 'Today\'s Check-ins', value: '87 students submitted' },
      { label: 'Average Streak', value: '4.2 consecutive days' },
      { label: 'Students At Risk', value: '12 missed yesterday — auto-nudge sent' },
    ],
  },
  howItWorks: [
    { step: 1, title: 'Import Your Course', description: 'Paste your course outline or connect your platform. ChallengePulse maps your modules into daily missions automatically.' },
    { step: 2, title: 'Set Challenge Rules', description: 'Choose duration (3-21 days), daily deadlines, and accountability settings. Customize nudge messages and completion rewards.' },
    { step: 3, title: 'Launch & Watch Completion Soar', description: 'Students get daily missions with deadlines. You get a real-time dashboard showing who\'s finishing — and who needs a nudge.' },
  ],
  comparison: {
    heading: 'Why ChallengePulse?',
    subtitle: 'Full challenge platforms cost $99+/mo and force you to migrate. DIY with email and spreadsheets takes hours and doesn\'t scale.',
    product: 'ChallengePulse',
    competitors: ['CommuniPass', 'DIY (Email + Sheets)'],
    rows: [
      { feature: 'Challenge format', values: [true, true, 'Manual'] },
      { feature: 'Import existing course', values: [true, false, false] },
      { feature: 'No platform migration', values: [true, false, true] },
      { feature: 'Daily missions + deadlines', values: [true, true, 'Manual'] },
      { feature: 'Auto reminders & nudges', values: [true, true, false] },
      { feature: 'Progress dashboard', values: [true, true, false] },
      { feature: 'Price', values: ['$19/mo', '$99+/mo', 'Free (3+ hrs setup)'] },
    ],
  },
  founderNote: {
    quote: 'I created a $197 course with 800 students. Only 48 finished. When I restructured it as a 14-day challenge, completion jumped to 52%. I built ChallengePulse so every creator can do the same — without rebuilding from scratch.',
    author: 'The ChallengePulse Team',
    role: 'Course Creators Who Fixed Their Own Dropout Problem',
  },
  testimonial: {
    quote: 'I converted my photography course to a 7-day challenge and completion went from 11% to 47%. Students actually got results and started referring friends. I wish I\'d done this months ago.',
    author: 'Sarah K.',
    role: 'Online Photography Course Creator (Beta Tester)',
  },
  faq: [
    { question: 'Do I need to rebuild my course?', answer: 'No. ChallengePulse works alongside your existing course platform. Import your outline and we convert it to a challenge structure. Your course stays exactly where it is.' },
    { question: 'What platforms does it work with?', answer: 'Any platform — Teachable, Thinkific, Gumroad, Kajabi, Podia, or even self-hosted. ChallengePulse adds the challenge layer on top of your existing setup.' },
    { question: 'How is this different from CommuniPass?', answer: 'CommuniPass is a full platform ($99+/mo) that requires migrating your entire course. ChallengePulse is a lightweight $19/mo add-on that works with your existing setup — no migration needed.' },
    { question: 'Will this actually improve completion rates?', answer: 'The research is clear: challenge format gets 40-60% completion vs 5-15% for self-paced courses. Daily missions, deadlines, and accountability are the structural difference. Results vary by course and audience.' },
    { question: 'What does the free plan include?', answer: 'One challenge with up to 50 participants, basic progress tracking, and email reminders. Enough to test the format with your audience before upgrading.' },
  ],
  sharing: {
    referral: true,
  },
  seo: {
    title: 'ChallengePulse — Turn Courses Into High-Completion Challenges',
    description: 'Convert your online course into a 3-21 day challenge with daily missions, deadlines, and accountability. 87% of course students drop out. Challenge format gets 60% completion. No platform migration needed.',
    keywords: ['course completion rate', 'online course dropout', 'challenge format course', 'improve course completion', 'course to challenge converter', 'student accountability tool', 'course engagement', 'teachable alternative', 'cohort challenge platform', 'course retention tool'],
  },
}
