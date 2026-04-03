import type { MetadataRoute } from 'next'
import { ALL_CONFIGS } from '@/config'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_APP_URL ?? 'https://landing-factory-163.pages.dev'
  return ALL_CONFIGS.map((c) => ({
    url: `${base}/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9,
  }))
}
