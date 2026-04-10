import type { PageConfig } from '@/config/type'

export const config: PageConfig = {
  slug: 'sponsorkit',
  name: 'SponsorKit',
  tagline: 'Turn your newsletter into a sponsorship magnet',
  description: 'SponsorKit gives independent newsletter writers a professional, trackable sponsorship page. Create once. Share with brands. See who opens it. Close more deals.',
  variant: 'warm',
  theme: {
    accent: 'violet',
    emoji: '💌',
  },
  hero: {
    badge: 'Newsletter Monetization',
    title: 'Stop pitching sponsors with a PDF',
    titleHighlight: 'a PDF',
    subtitle: 'Create a live sponsorship page in minutes. Know when brands open it. Follow up when they\'re warm.',
    cta: 'Build my sponsorship page',
    layout: 'split',
    beforeAfter: {
      before: 'Emailed a Canva PDF to 8 brands. No idea if anyone opened it. None replied.',
      after: 'Shared one SponsorKit link. Saw 3 brands open it. Closed 2 deals within a week.',
    },
  },
  trustBadges: ['Zero commission on deals — ever', 'Free 14-day trial, no credit card', 'Works with any newsletter platform'],
  problems: [
    {
      icon: '📄',
      title: 'Your PDF goes stale — and you can\'t update it',
      desc: 'Every rate change means a new file, a new email, and another round of \'here\'s my updated rate card.\'',
    },
    {
      icon: '👻',
      title: 'Sponsors ghost you — and you don\'t know why',
      desc: 'Did they open it? Forward it to their team? Archive it immediately? Without visibility, your follow-up is just guessing.',
    },
    {
      icon: '💸',
      title: 'Platforms take 20–30% of every deal you close',
      desc: 'Beehiiv and Substack ad networks charge commission. SponsorKit charges $12/month flat. You keep everything.',
    }
  ],
  features: [
    {
      icon: '🔗',
      title: 'Live Sponsorship Page',
      desc: 'One URL — your packages, audience stats, and past sponsors. Brands can share it with their team. Update your rates or availability anytime without re-sending.',
      badge: 'Core feature',
    },
    {
      icon: '👁️',
      title: 'View Analytics',
      desc: 'Get a notification when a brand opens your page. See how long they spent on each package tier. Follow up with context instead of cold hope.',
    },
    {
      icon: '📦',
      title: 'Package Builder',
      desc: 'Create tiered sponsorship packages — dedicated send, native placement, shoutout — with clear deliverables and pricing. Add a booking link so brands can inquire in one click.',
    }
  ],
  pricing: [
    {
      name: 'Starter',
      price: '$0',
      period: 'forever',
      features: ['1 sponsorship page', 'Up to 3 packages', 'Basic view count', 'SponsorKit footer badge'],
      highlight: false,
    },
    {
      name: 'Pro',
      price: '$12',
      period: '/month',
      features: ['1 sponsorship page', 'Unlimited packages', 'View analytics + open notifications', 'Custom domain support', 'Remove SponsorKit branding', 'Past sponsor showcase'],
      highlight: true,
    }
  ],
  cta: {
    title: 'Your next sponsor deal is a better pitch away',
    subtitle: 'Join the waitlist. Be first when SponsorKit launches.',
    reasons: ['Stop sending PDFs that go stale and disappear into inboxes', 'Know when brands are warm — not just hoping for a reply', 'Keep 100% of every sponsor deal, zero commission'],
  },
  productPreview: {
    title: 'Your live sponsorship page',
    subtitle: 'What brands see when you share your SponsorKit link',
    items: [
      { label: 'Newsletter', value: 'The Weekly Digest', highlight: true },
      { label: 'Verified subscribers', value: '8,400' },
      { label: 'Avg. open rate', value: '42%' },
      { label: 'Dedicated email slot', value: '$800 / send', highlight: true },
      { label: 'Native ad placement', value: '$250 / issue' },
      { label: 'Slots remaining', value: '2 of 4 open' },
    ],
  },
  howItWorks: [
    { step: 1, title: 'Build your page in minutes', description: 'Enter your newsletter stats, sponsorship packages, and past sponsors. Your live page is ready at sponsorkit.io/[yourname] instantly.' },
    { step: 2, title: 'Share one link — not an attachment', description: 'Send your SponsorKit URL in cold outreach, your email footer, or your \'work with me\' page. Brands click a live link, not a static file.' },
    { step: 3, title: 'Track opens — then follow up smart', description: 'Get notified when a brand views your page. See which packages they spent time on. Reach out when they\'re already warm — not three weeks after they forgot you.' },
  ],
  comparison: {
    heading: 'Why newsletter writers are switching to SponsorKit',
    subtitle: 'Ad networks take your commission. DIY tools give you zero visibility. You deserve a tool built for one job: closing sponsor deals.',
    product: 'SponsorKit ($12/mo)',
    competitors: ['Newsletter Platform Ad Networks', 'DIY (Canva + Notion)'],
    rows: [
      { feature: 'Live shareable URL', values: [true, false, false] },
      { feature: 'View analytics (who opened, how long)', values: [true, false, false] },
      { feature: 'Commission on deals', values: ['$0 flat fee', '20–30% per deal', '$0 (no tracking)'] },
      { feature: 'Update without re-sending', values: [true, false, false] },
      { feature: 'Works with any newsletter platform', values: [true, false, true] },
      { feature: 'Past sponsor showcase', values: [true, false, false] },
    ],
  },
  founderNote: {
    quote: 'I spent 3 hours making a Canva rate card and sent it to 12 brands. Two probably opened it. I had no idea who, no follow-up signal, no way to close. That\'s why I built SponsorKit.',
    author: 'Tae-geol Kim',
    role: 'Founder, SponsorKit',
  },
  testimonial: {
    quote: 'I\'ve been pitching sponsors for 6 months with the same Canva PDF. I never know if they open it or just archive it. A live page with open tracking is exactly what\'s been missing.',
    author: 'Maya R. (early access)',
    role: 'B2B SaaS newsletter, 5,200 subscribers',
  },
  faq: [
    { question: 'Do you take a cut of my sponsorship deals?', answer: 'Never. SponsorKit charges a flat $12/month. Every dollar from your sponsors goes directly to you — no commission, no revenue share.' },
    { question: 'Does this work with Beehiiv, Substack, Ghost, ConvertKit?', answer: 'Yes. SponsorKit is completely platform-independent. It doesn\'t connect to your ESP — it\'s a public page you control and share however you like.' },
    { question: 'What if I have a small list — under 2,000 subscribers?', answer: 'Many of the best-converting newsletters are small and highly engaged. SponsorKit helps you present your audience professionally regardless of size — niche newsletters often close better deals.' },
    { question: 'How is this different from a Canva PDF or a Notion page?', answer: 'SponsorKit gives you a live URL (not a file) that you can update anytime, and you see view analytics — who opened it, when, and which packages they hovered on. That data is what closes deals.' },
  ],
  seo: {
    title: 'SponsorKit — Newsletter Sponsorship Page Builder',
    description: 'Create a professional sponsorship page for your newsletter. Share a live link with brands. See who opens it. Close more deals. No PDF, no commission.',
    keywords: ['newsletter sponsorship tool', 'newsletter media kit builder', 'newsletter monetization tool', 'newsletter rate card', 'newsletter advertising platform'],
  },
}
