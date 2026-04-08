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
    layout: 'split',
  },
  trustBadges: [
    'Upload once, post everywhere',
    'AI writes in your voice',
    'Cancel anytime',
  ],
  problems: [
    { icon: '🔀', title: 'Tool-switching hell', desc: 'Opus Clip → CapCut → Buffer. Three tools, three logins, 3+ hours wasted per video.' },
    { icon: '✍️', title: 'Manual rewrites for every platform', desc: 'TikTok hooks ≠ Instagram captions ≠ Twitter threads. Rewriting kills your creative momentum.' },
    { icon: '⏰', title: 'No scheduling system', desc: 'Posting manually when you remember — not when your audience is actually online.' }
  ],
  features: [
    { icon: '🎬', title: 'Smart Format Engine', desc: 'Auto-resize and clip your video for each platform\'s exact dimensions and ideal length.', badge: 'Most popular' },
    { icon: '🤖', title: 'AI Copy Suite', desc: 'Platform-specific captions, hooks, and hashtags generated in your voice. Edit or ship as-is.' },
    { icon: '📅', title: 'Publish Queue', desc: 'Schedule across all platforms from one calendar. Set it once, post everywhere on time.' }
  ],
  pricing: [
    { name: 'Free', price: '$0', period: 'forever', features: ['5 repurposes/month', '2 platform connections', 'Basic AI captions'], highlight: false },
    { name: 'Creator', price: '$19', period: '/month', features: ['30 repurposes/month', '5 platform connections', 'AI captions + hooks', 'Scheduling queue'], highlight: true },
    { name: 'Agency', price: '$49', period: '/month', features: ['Unlimited repurposes', 'AI voice learning', 'Multi-workspace', 'Priority processing'], highlight: false }
  ],
  cta: {
    title: 'Stop spending 3 hours on every upload.',
    subtitle: 'Join the waitlist and repurpose your next video in minutes.',
    reasons: ['5 free repurposes/month forever', 'Early access to AI voice learning', 'Founding creators get lifetime pricing'],
  },
  productPreview: {
    title: 'Repurpose Queue — "How I Built My SaaS"',
    subtitle: '1 video → 5 platform posts scheduled',
    items: [
      { label: 'TikTok', value: '60s clip — hook + CTA — scheduled 9 AM', highlight: true },
      { label: 'Instagram Reels', value: '45s vertical — auto-captioned' },
      { label: 'Twitter/X', value: 'Thread: 5 tweets with key takeaways', highlight: true },
      { label: 'LinkedIn', value: 'Professional summary + video embed' },
      { label: 'YouTube Shorts', value: '58s clip — thumbnail auto-generated', highlight: true },
    ],
  },
  howItWorks: [
    { step: 1, title: 'Upload your video', description: 'Drop any video — YouTube, podcast clip, webinar recording. Repurpose OS handles any format.' },
    { step: 2, title: 'AI creates platform versions', description: 'Auto-clips the best moments, writes platform-specific captions and hooks, and formats for each platform\'s dimensions.' },
    { step: 3, title: 'Review and schedule', description: 'Edit anything or approve as-is. Set publish times per platform. One click to schedule everywhere.' },
  ],
  comparison: {
    heading: 'Why not just use Opus Clip + Buffer?',
    subtitle: 'Opus Clip clips. Buffer schedules. Neither writes captions or handles everything end-to-end.',
    product: 'Repurpose OS',
    competitors: ['Opus Clip + Buffer', 'Manual Editing', 'Hiring a VA'],
    rows: [
      { feature: 'Auto-clip best moments', values: [true, true, false, false] },
      { feature: 'Platform-specific captions', values: [true, false, false, true] },
      { feature: 'Auto-scheduling', values: [true, true, false, true] },
      { feature: 'One tool end-to-end', values: [true, false, false, false] },
      { feature: 'AI voice matching', values: [true, false, false, false] },
      { feature: 'Price', values: ['$19/mo', '$40+/mo', 'Free (3+ hrs)', '$500+/mo'] },
    ],
  },
  founderNote: {
    quote: 'I was spending more time repurposing content than creating it. Opus Clip + CapCut + Buffer was 3 tools and 3 hours per video. That\'s insane.',
    author: 'The Repurpose OS Team',
    role: 'Built by a creator drowning in tool-switching',
  },
  testimonial: {
    quote: 'I uploaded a 20-minute YouTube video and had 5 platform-ready posts in 10 minutes. The captions actually sound like me.',
    author: 'Chris D.',
    role: 'YouTube Creator, 45K subscribers',
  },
  faq: [
    { question: 'What video formats are supported?', answer: 'MP4, MOV, WebM, and most common formats. You can also paste a YouTube or Vimeo URL and we\'ll import it directly.' },
    { question: 'How does AI voice matching work?', answer: 'After 5+ repurposes, the AI learns your writing style — vocabulary, tone, humor. Captions start sounding more like you, not generic AI.' },
    { question: 'Can I edit the clips before posting?', answer: 'Yes. Preview every clip, caption, and thumbnail. Edit anything or approve as-is. Nothing posts without your approval.' },
    { question: 'Does it post directly to my accounts?', answer: 'Yes. Connect TikTok, Instagram, Twitter/X, LinkedIn, and YouTube. Posts go out at your scheduled times automatically.' },
  ],
  seo: {
    title: 'Repurpose OS — Repurpose Videos to Every Platform Automatically',
    description: 'Upload one video and let AI create platform-perfect content for TikTok, Instagram Reels, and Twitter. Auto-scheduling included.',
    keywords: ['repurpose video content', 'repurpose youtube to tiktok', 'auto post to multiple social media'],
  },
}
