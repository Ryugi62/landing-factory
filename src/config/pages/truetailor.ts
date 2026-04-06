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
  },
  problems: [
    {
      icon: '🤥',
      title: 'AI writes skills you don\'t have',
      desc: 'ChatGPT and most tools add keywords you can\'t explain. 64% of companies auto-reject when they catch it.',
    },
    {
      icon: '📋',
      title: 'One resume, every job',
      desc: 'Submitting the same resume everywhere tanks your match rate. Tailoring manually takes 45 minutes per application.',
    },
    {
      icon: '😰',
      title: 'Interview anxiety from exaggeration',
      desc: 'You wrote it to get the call. Now you have to defend it. Most AI resumes set you up to fail.',
    }
  ],
  features: [
    {
      icon: '🔍',
      title: 'JD Analyzer',
      desc: 'Paste any job URL and TrueForm extracts required skills, keywords, and priorities — automatically.',
      badge: 'Most popular',
    },
    {
      icon: '✍️',
      title: 'Honest Tailoring',
      desc: 'Rewrites your bullet points and summary using only your actual experience. Never adds what isn\'t there.',
    },
    {
      icon: '💬',
      title: 'Confidence Report',
      desc: 'Generates interview prep questions for every claim in your resume. If you can answer them, you\'re ready.',
    }
  ],
  pricing: [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      features: ['2 tailored resumes/month', 'JD Analyzer', 'PDF download'],
      highlight: false,
    },
    {
      name: 'Pro',
      price: '$9',
      period: '/month',
      features: ['Unlimited tailoring', 'ATS match score', 'Confidence Report', 'All templates', 'Priority support'],
      highlight: true,
    },
    {
      name: 'Pro Annual',
      price: '$79',
      period: '/year',
      features: ['Everything in Pro', 'Save 26%', '($6.6/month)'],
      highlight: false,
    }
  ],
  cta: {
    title: 'Stop lying on your resume.',
    subtitle: 'Join the waitlist. Be first when we launch.',
  },
  seo: {
    title: 'TrueForm — Honest AI Resume Tailoring',
    description: 'Tailor your resume to any job without exaggerating. AI that uses only your real experience to match job descriptions — so you can ace the interview too.',
    keywords: ['honest resume builder', 'AI resume tailoring', 'resume without lying', 'tailor resume to job description', 'ATS resume optimizer'],
  },
}
