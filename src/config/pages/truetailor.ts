import type { PageConfig } from '@/config/type'

export const config: PageConfig = {
  slug: 'truetailor',
  name: 'TrueForm',
  tagline: 'Tailor your resume honestly. Get hired confidently.',
  description: 'AI that rewrites your resume for every job — using only your real experience. No fabrication, no keyword stuffing. Just honest tailoring that holds up in interviews.',
  variant: 'bold',
  theme: {
    accent: 'indigo',
    emoji: '✅',
  },
  hero: {
    badge: 'Honest Resume AI',
    title: 'Tailor Your Resume',
    titleHighlight: 'Without Lying',
    subtitle: 'Paste a job URL. Upload your resume. Get a tailored version you can actually defend in an interview — in 3 minutes.',
    cta: 'Join the waitlist',
    layout: 'split',
  },
  trustBadges: [
    'No fabrication, ever',
    'Interview-ready results',
    'Cancel anytime',
  ],
  problems: [
    { icon: '🤥', title: 'AI writes skills you don\'t have', desc: 'ChatGPT and most tools add keywords you can\'t explain. 64% of companies auto-reject when they catch it.' },
    { icon: '📋', title: 'One resume, every job', desc: 'Submitting the same resume everywhere tanks your match rate. Tailoring manually takes 45 minutes per application.' },
    { icon: '😰', title: 'Interview anxiety from exaggeration', desc: 'You wrote it to get the call. Now you have to defend it. Most AI resumes set you up to fail.' }
  ],
  features: [
    { icon: '🔍', title: 'JD Analyzer', desc: 'Paste any job URL and TrueForm extracts required skills, keywords, and priorities — automatically.', badge: 'Most popular' },
    { icon: '✍️', title: 'Honest Tailoring', desc: 'Rewrites your bullet points and summary using only your actual experience. Never adds what isn\'t there.' },
    { icon: '💬', title: 'Confidence Report', desc: 'Generates interview prep questions for every claim in your resume. If you can answer them, you\'re ready.' }
  ],
  pricing: [
    { name: 'Free', price: '$0', period: 'forever', features: ['2 tailored resumes/month', 'JD Analyzer', 'PDF download'], highlight: false },
    { name: 'Pro', price: '$9', period: '/month', features: ['Unlimited tailoring', 'ATS match score', 'Confidence Report', 'All templates', 'Priority support'], highlight: true },
    { name: 'Pro Annual', price: '$79', period: '/year', features: ['Everything in Pro', 'Save 26%', '($6.6/month)'], highlight: false }
  ],
  cta: {
    title: 'Stop lying on your resume.',
    subtitle: 'Join the waitlist and tailor your next application honestly.',
    reasons: ['2 free tailored resumes/month', 'ATS match score included', 'Early access to Confidence Report'],
  },
  productPreview: {
    title: 'Tailored Resume — Senior Frontend Dev',
    subtitle: 'Match score: 87% (vs 52% original)',
    items: [
      { label: 'Original bullet', value: '"Built web applications using React"' },
      { label: 'Tailored bullet', value: '"Led migration of 3 legacy apps to React 18, reducing load time 40%"', highlight: true },
      { label: 'Skills matched', value: '12/14 JD requirements covered', highlight: true },
      { label: 'Honesty check', value: 'All claims from your real experience' },
      { label: 'Interview prep', value: '3 questions generated for this version', highlight: true },
    ],
  },
  howItWorks: [
    { step: 1, title: 'Paste the job URL', description: 'TrueForm extracts required skills, keywords, and priorities from any job listing automatically.' },
    { step: 2, title: 'Upload your resume', description: 'Upload your current resume. TrueForm maps your real experience to the job requirements.' },
    { step: 3, title: 'Get your tailored version', description: 'Download a tailored resume with an ATS match score and interview prep questions. Every claim is defensible.' },
  ],
  comparison: {
    heading: 'Why not just use ChatGPT?',
    subtitle: 'ChatGPT adds skills you don\'t have. TrueForm uses only what\'s real — so you can defend every line.',
    product: 'TrueForm',
    competitors: ['ChatGPT', 'Jobscan', 'Teal'],
    rows: [
      { feature: 'No fabrication guarantee', values: [true, false, false, false] },
      { feature: 'JD auto-analysis', values: [true, true, true, true] },
      { feature: 'ATS match score', values: [true, false, true, true] },
      { feature: 'Interview prep questions', values: [true, false, false, false] },
      { feature: 'Confidence report', values: [true, false, false, false] },
      { feature: 'Price', values: ['$9/mo', 'Free', '$50/mo', '$30/mo'] },
    ],
  },
  founderNote: {
    quote: 'I used ChatGPT to tailor my resume and got asked about Kubernetes in the interview. I\'d never touched it. That\'s when I knew we needed a tool that won\'t lie for you.',
    author: 'The TrueForm Team',
    role: 'Built after a real interview disaster',
  },
  testimonial: {
    quote: 'My match score went from 52% to 87% without adding a single skill I don\'t have. Got the interview AND felt prepared.',
    author: 'Priya M.',
    role: 'Software Engineer, career changer',
  },
  faq: [
    { question: 'How do you guarantee no fabrication?', answer: 'TrueForm only rewrites and reframes your existing bullet points. It never adds new skills, experiences, or certifications that aren\'t in your original resume.' },
    { question: 'What\'s the Confidence Report?', answer: 'For every tailored resume, TrueForm generates likely interview questions based on the claims made. If you can answer them confidently, you\'re ready.' },
    { question: 'Does it work for career changers?', answer: 'Yes. TrueForm is especially useful for career changers because it highlights transferable skills from your real experience without inventing new ones.' },
    { question: 'What ATS systems is it optimized for?', answer: 'TrueForm optimizes for Greenhouse, Lever, Workday, iCIMS, and other major ATS platforms. The match score reflects how well your resume will parse.' },
  ],
  seo: {
    title: 'TrueForm — Honest AI Resume Tailoring',
    description: 'Tailor your resume to any job without exaggerating. AI that uses only your real experience to match job descriptions — so you can ace the interview too.',
    keywords: ['honest resume builder', 'AI resume tailoring', 'resume without lying', 'tailor resume to job description', 'ATS resume optimizer'],
  },
}
