import { supabase } from '@/lib/supabase'
import { demoBlogPosts } from '@/lib/data/blog'

const LIST_SELECT = 'id,slug,title,meta_description,excerpt,cover_image,cover_alt,category,tags,author_name,author_avatar,reading_time,published_at,updated_at'

// ── All published posts ─────────────────────────────────────────────────────
export async function getAllPosts({ category } = {}) {
  let query = supabase
    .from('blog_posts')
    .select(LIST_SELECT)
    .eq('is_published', true)
    .order('published_at', { ascending: false })

  if (category && category !== 'Tous') {
    query = query.eq('category', category)
  }

  const { data, error } = await query
  if (error) console.error('[Blog] getAllPosts:', error.message)
  return (data && data.length > 0) ? data : demoBlogPosts
}

// ── Single post by slug ─────────────────────────────────────────────────────
export async function getPostBySlug(slug) {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('is_published', true)
    .eq('slug', slug)
    .maybeSingle()

  if (error) console.error('[Blog] getPostBySlug:', error.message)
  return data || null
}

// ── Related posts ───────────────────────────────────────────────────────────
export async function getRelatedPosts(slug, category, limit = 3) {
  const SMALL = 'id,slug,title,excerpt,cover_image,category,reading_time,published_at,author_avatar'

  let { data } = await supabase
    .from('blog_posts')
    .select(SMALL)
    .eq('is_published', true)
    .eq('category', category)
    .neq('slug', slug)
    .order('published_at', { ascending: false })
    .limit(limit)

  if (data && data.length >= limit) return data

  // Not enough in same category — fill with any other posts
  const { data: more } = await supabase
    .from('blog_posts')
    .select(SMALL)
    .eq('is_published', true)
    .neq('slug', slug)
    .order('published_at', { ascending: false })
    .limit(limit)

  return (more && more.length > 0) ? more : demoBlogPosts.filter(p => p.slug !== slug).slice(0, limit)
}

// ── All slugs (generateStaticParams + sitemap) ──────────────────────────────
export async function getAllSlugs() {
  const { data } = await supabase
    .from('blog_posts')
    .select('slug,updated_at,published_at')
    .eq('is_published', true)
    .order('published_at', { ascending: false })

  return data || demoBlogPosts.map(p => ({ slug: p.slug, published_at: p.published_at }))
}
