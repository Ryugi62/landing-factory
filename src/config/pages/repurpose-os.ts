import type { PageConfig } from '@/config/type'

export const config: PageConfig = {
  slug: 'repurpose-os',
  name: 'Repurpose OS',
  tagline: 'One video. Every platform. Zero manual work.',
  description: 'Upload once. AI creates platform-perfect clips, captions, and hooks for TikTok, Instagram, Twitter and beyond — then schedules everything automatically.',
  variant: 'bold',
  theme: {
    accent: 'violet',
    emoji: '♻️',
  },
  hero: {
    badge: 'Content Repurposing',
    title: 'One video.',
    titleHighlight: 'Every platform.',
    subtitle: 'Upload once. AI formats, captions, and schedules your content across TikTok, Reels, and Twitter — automatically.',
    cta: 'Join the waitlist',
  },
  problems: [
    {
      icon: '🔀',
      title: 'Tool-switching hell',
      desc: 'Opus Clip → CapCut → Buffer. Three tools, three logins, 3+ hours wasted per video.',
    },
    {
      icon: '✍️',
      title: 'Manual rewrites for every platform',
      desc: 'TikTok hooks ≠ Instagram captions ≠ Twitter threads. Rewriting kills your creative momentum.',
    },
    {
      icon: '⏰',
      title: 'No scheduling system',
      desc: 'Posting manually when you remember — not when your audience is actually online.',
    }
  ],
  features: [
    {
      icon: '🎬',
      title: 'Smart Format Engine',
      desc: 'Auto-resize and clip your video for each platform\'s exact dimensions and ideal length.',
      badge: 'Most popular',
    },
    {
      icon: '🤖',
      title: 'AI Copy Suite',
      desc: 'Platform-specific captions, hooks, and hashtags generated in your voice. Edit or ship as-is.',
    },
    {
      icon: '📅',
      title: 'Publish Queue',
      desc: 'Schedule across all platforms from one calendar. Set it once, post everywhere on time.',
    }
  ],
  pricing: [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      features: ['5 repurposes/month', '2 platform connections', 'Basic AI captions'],
      highlight: false,
    },
    {
      name: 'Creator',
      price: '$19',
      period: '/month',
      features: ['30 repurposes/month', '5 platform connections', 'AI captions + hooks', 'Scheduling queue'],
      highlight: true,
    },
    {
      name: 'Agency',
      price: '$49',
      period: '/month',
      features: ['Unlimited repurposes', 'AI voice learning', 'Multi-workspace', 'Priority processing'],
      highlight: false,
    }
  ],
  cta: {
    title: 'Stop spending 3 hours on every upload.',
    subtitle: 'Join the waitlist. Be first when we launch.',
  },
  seo: {
    title: 'Repurpose OS — Repurpose Videos to Every Platform Automatically',
    description: 'Upload one video and let AI create platform-perfect content for TikTok, Instagram Reels, and Twitter. Auto-scheduling included.',
    keywords: ['repurpose video content', 'repurpose youtube to tiktok', 'auto post to multiple social media'],
  },
}
