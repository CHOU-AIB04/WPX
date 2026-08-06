// app/sitemap.js — Dynamic sitemap with multilingual URLs (FR / EN / ES)
import { getAllSlugs } from '@/lib/blog'
import { CITIES } from '@/lib/data/cities'

const BASE_URL = 'https://www.wepushx.com'

export const revalidate = 3600 // Revalidate every hour

// Core pages with their priority + change frequency
const CORE_PAGES = [
  { path: '',          changeFrequency: 'weekly',  priority: { fr: 1.0, en: 0.95, es: 0.95 } },
  { path: '/services', changeFrequency: 'weekly',  priority: { fr: 0.9, en: 0.85, es: 0.85 } },
  { path: '/contact',  changeFrequency: 'monthly', priority: { fr: 0.8, en: 0.75, es: 0.75 } },
]

// Legal pages (FR only — no translation needed)
const FR_ONLY_PAGES = [
  { path: '/blog',                               changeFrequency: 'daily',   priority: 0.85 },
  { path: '/politique-de-confidentialite',       changeFrequency: 'yearly',  priority: 0.3  },
  { path: '/mentions-legales',                   changeFrequency: 'yearly',  priority: 0.3  },
  { path: '/cgv',                                changeFrequency: 'yearly',  priority: 0.3  },
]

export default async function sitemap() {
  const now = new Date()

  // ── Multilingual core pages ─────────────────────────────────────────────────
  const multilingualPages = CORE_PAGES.flatMap(({ path, changeFrequency, priority }) => [
    // FR at root (no prefix)
    {
      url: `${BASE_URL}${path}`,
      lastModified: now,
      changeFrequency,
      priority: priority.fr,
      alternates: {
        languages: {
          fr:        `${BASE_URL}${path}`,
          en:        `${BASE_URL}/en${path}`,
          es:        `${BASE_URL}/es${path}`,
          'x-default': `${BASE_URL}${path}`,
        },
      },
    },
    // EN
    {
      url: `${BASE_URL}/en${path}`,
      lastModified: now,
      changeFrequency,
      priority: priority.en,
      alternates: {
        languages: {
          fr:        `${BASE_URL}${path}`,
          en:        `${BASE_URL}/en${path}`,
          es:        `${BASE_URL}/es${path}`,
          'x-default': `${BASE_URL}${path}`,
        },
      },
    },
    // ES
    {
      url: `${BASE_URL}/es${path}`,
      lastModified: now,
      changeFrequency,
      priority: priority.es,
      alternates: {
        languages: {
          fr:        `${BASE_URL}${path}`,
          en:        `${BASE_URL}/en${path}`,
          es:        `${BASE_URL}/es${path}`,
          'x-default': `${BASE_URL}${path}`,
        },
      },
    },
  ])

  // ── FR-only pages ────────────────────────────────────────────────────────────
  const frOnlyPages = FR_ONLY_PAGES.map(({ path, changeFrequency, priority }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }))

  // ── City satellite pages (FR only) ──────────────────────────────────────────
  const cityPages = Object.values(CITIES).map((city) => ({
    url: city.url,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.82,
  }))

  // ── Dynamic blog posts from Supabase ────────────────────────────────────────
  try {
    const slugs = await getAllSlugs()
    const blogPages = slugs.map((item) => ({
      url: `${BASE_URL}/blog/${item.slug}`,
      lastModified: item.updated_at
        ? new Date(item.updated_at)
        : item.published_at
          ? new Date(item.published_at)
          : now,
      changeFrequency: 'weekly',
      priority: 0.7,
    }))
    return [...multilingualPages, ...frOnlyPages, ...cityPages, ...blogPages]
  } catch (err) {
    console.error('[Sitemap] Error fetching blog slugs:', err)
    return [...multilingualPages, ...frOnlyPages, ...cityPages]
  }
}
