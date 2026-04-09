import { ImageResponse } from 'next/og'
import { ALL_CONFIGS, getConfigBySlug } from '@/config'
import type { AccentColor } from '@/config/type'

export const alt = 'Product preview'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export function generateStaticParams() {
  return ALL_CONFIGS.map((c) => ({ slug: c.slug }))
}

const ACCENT_COLORS: Record<AccentColor, { bg: string; text: string }> = {
  rose: { bg: '#e11d48', text: '#fff1f2' },
  violet: { bg: '#7c3aed', text: '#ede9fe' },
  blue: { bg: '#2563eb', text: '#dbeafe' },
  emerald: { bg: '#059669', text: '#d1fae5' },
  orange: { bg: '#ea580c', text: '#fff7ed' },
  amber: { bg: '#d97706', text: '#fffbeb' },
  pink: { bg: '#db2777', text: '#fce7f3' },
  indigo: { bg: '#4f46e5', text: '#e0e7ff' },
}

export default async function OgImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const config = getConfigBySlug(slug)

  if (!config) {
    return new ImageResponse(
      <div style={{ display: 'flex', width: '100%', height: '100%', background: '#0f172a', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ color: '#94a3b8', fontSize: 40 }}>Not Found</span>
      </div>,
      size,
    )
  }

  const colors = ACCENT_COLORS[config.theme.accent] ?? ACCENT_COLORS.blue

  return new ImageResponse(
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        background: `linear-gradient(135deg, #0f172a 0%, ${colors.bg} 100%)`,
        padding: '60px 80px',
        justifyContent: 'space-between',
      }}
    >
      {/* Top: emoji + name */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <span style={{ fontSize: 56 }}>{config.theme.emoji}</span>
        <span style={{ fontSize: 36, fontWeight: 700, color: '#ffffff' }}>
          {config.name}
        </span>
      </div>

      {/* Center: tagline */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <span
          style={{
            fontSize: 52,
            fontWeight: 800,
            color: '#ffffff',
            lineHeight: 1.2,
            maxWidth: '900px',
          }}
        >
          {config.tagline}
        </span>
        <span
          style={{
            fontSize: 24,
            color: colors.text,
            opacity: 0.85,
            maxWidth: '800px',
          }}
        >
          {config.seo.ogDescription ?? config.seo.description}
        </span>
      </div>

      {/* Bottom: badge */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div
          style={{
            display: 'flex',
            background: 'rgba(255,255,255,0.15)',
            borderRadius: '20px',
            padding: '8px 20px',
            fontSize: 18,
            fontWeight: 600,
            color: '#ffffff',
          }}
        >
          {config.hero.badge}
        </div>
        <span style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)' }}>
          Join the waitlist
        </span>
      </div>
    </div>,
    size,
  )
}
