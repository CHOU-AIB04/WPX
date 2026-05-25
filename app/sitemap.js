// app/sitemap.js — Dynamic sitemap (static pages + city pages + all published blog posts)
import { getAllSlugs } from '@/lib/blog'
import { CITIES } from '@/lib/data/cities'

const BASE_URL = 'https://www.wepushx.com'

export const revalidate = 3600 // Revalidate sitemap every hour

export default async function sitemap() {
  const now = new Date()

  // Static pages
  const staticPages = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.85,
    },
  ]

  // City satellite pages — auto-generated from CITIES data
  const cityPages = Object.values(CITIES).map((city) => ({
    url: city.url,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.82,
  }))

  // Dynamic blog posts from Supabase (or demo data fallback)
  try {
    const slugs = await getAllSlugs()
    const blogPages = slugs.map((item) => ({
      url: `${BASE_URL}/blog/${item.slug}`,
      lastModified: item.updated_at ? new Date(item.updated_at) : (item.published_at ? new Date(item.published_at) : now),
      changeFrequency: 'weekly',
      priority: 0.7,
    }))
    return [...staticPages, ...blogPages]
  } catch (err) {
    console.error('[Sitemap] Error fetching blog slugs:', err)
    return staticPages
  }
}
