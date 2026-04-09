import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ALL_CONFIGS, getConfigBySlug } from '@/config'
import { getAccent } from '@/lib/accent'
import { Hero } from '@/components/sections/Hero'
import { Problem } from '@/components/sections/Problem'
import { Features } from '@/components/sections/Features'
import { Pricing } from '@/components/sections/Pricing'
import { CtaSection } from '@/components/sections/CtaSection'
import { ProductPreview } from '@/components/sections/ProductPreview'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { Comparison } from '@/components/sections/Comparison'
import { FAQ } from '@/components/sections/FAQ'
import { FounderNote } from '@/components/sections/FounderNote'
import { Footer } from '@/components/sections/Footer'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return ALL_CONFIGS.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const config = getConfigBySlug(slug)
  if (!config) return {}
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL ?? ''
  const ogImageUrl = `${baseUrl}/${slug}/opengraph-image`
  return {
    title: config.seo.title,
    description: config.seo.description,
    keywords: config.seo.keywords,
    alternates: {
      canonical: `${baseUrl}/${slug}`,
    },
    openGraph: {
      title: config.seo.title,
      description: config.seo.ogDescription ?? config.seo.description,
      url: `${baseUrl}/${slug}`,
      siteName: config.name,
      type: 'website',
      images: [{ url: ogImageUrl, width: 1200, height: 630, alt: config.tagline }],
    },
    twitter: {
      card: 'summary_large_image',
      title: config.seo.title,
      description: config.seo.ogDescription ?? config.seo.description,
      images: [{ url: ogImageUrl, width: 1200, height: 630, alt: config.tagline }],
    },
  }
}

export default async function SlugPage({ params }: Props) {
  const { slug } = await params
  const config = getConfigBySlug(slug)
  if (!config) notFound()

  const accent = getAccent(config.theme.accent)

  return (
    <main className="flex flex-col min-h-screen">
      {/* Nav */}
      <nav className={`flex items-center justify-between px-6 py-4 border-b ${config.variant === 'bold' ? 'bg-slate-950 border-slate-800' : 'border-slate-100'}`}>
        <span className={`text-xl font-bold ${accent.highlight}`}>
          {config.theme.emoji} {config.name}
        </span>
        <a
          href="#waitlist"
          className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${accent.button}`}
        >
          {config.hero.cta}
        </a>
      </nav>

      <Hero config={config} accent={accent} />
      <Problem config={config} />
      <ProductPreview config={config} accent={accent} />
      <HowItWorks config={config} accent={accent} />
      <Features config={config} accent={accent} />
      <Comparison config={config} accent={accent} />
      <Pricing config={config} accent={accent} />
      <FAQ config={config} />
      <FounderNote config={config} accent={accent} />

      <div id="waitlist">
        <CtaSection config={config} accent={accent} />
      </div>

      <Footer config={config} accent={accent} />
    </main>
  )
}
