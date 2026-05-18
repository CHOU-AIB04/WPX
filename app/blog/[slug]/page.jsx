import { notFound } from 'next/navigation'
import Link from 'next/link'
import Script from 'next/script'
import { Clock, Calendar, ArrowLeft, ArrowRight, Tag, Eye } from 'lucide-react'
import { getPostBySlug, getRelatedPosts, getAllSlugs } from '@/lib/blog'
import RelatedPosts from '@/components/sections/blog/RelatedPosts'
import CTASection from '@/components/sections/home/CTASection'
import PostViewTracker from '@/components/blog/PostViewTracker'
import Image from 'next/image'
import { updateViewCount } from '@/lib/count'

export const revalidate = 3600

// ── Static params for SSG ───────────────────────────────────────────────────
export async function generateStaticParams() {
  const slugs = await getAllSlugs()
  return slugs.map((s) => ({ slug: s.slug }))
}

// ── Dynamic metadata ────────────────────────────────────────────────────────
export async function generateMetadata({ params }) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  console.log("blog is :", post)
  if (!post) return { title: 'Article introuvable' }

  const title       = post.meta_title || post.title
  const description = post.meta_description
  const ogImage     = post.og_image || post.cover_image || 'https://wepushx.com/og-image.jpg'
  const url         = `https://wepushx.com/blog/${post.slug}`

  return {
    title,
    description,
    alternates: { canonical: url },
    keywords: post.tags || [],
    openGraph: {
      type: 'article',
      url,
      title,
      description,
      images: [{ url: ogImage, width: 1200, height: 630, alt: post.cover_alt || post.title }],
      publishedTime: post.published_at,
      modifiedTime: post.updated_at || post.published_at,
      section: post.category,
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

const CATEGORY_COLORS = {
  'Publicité Digitale': '#00F5FF',
  'SEO':               '#34d399',
  'Automation CRM':    '#a78bfa',
  'Contenu IA':        '#f59e0b',
}

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('fr-FR', {
    day: 'numeric', month: 'long', year: 'numeric',
  })
}

// ── Page component ──────────────────────────────────────────────────────────
export default async function BlogPostPage({ params }) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  // update the viewcount
  if (!post) notFound()

  const related = await getRelatedPosts(post.slug, post.category, 3)
  const color   = CATEGORY_COLORS[post.category] || '#00F5FF'

  // JSON-LD — Article schema
  const jsonLd = [
   {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://wepushx.com' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://wepushx.com/blog' },
      { '@type': 'ListItem', position: 3, name: post.title, item: `https://wepushx.com/blog/${post.slug}` },
    ],
   },
   {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.meta_description,
    image: post.og_image || post.cover_image || 'https://wepushx.com/og-image.jpg',
    datePublished: post.published_at,
    dateModified: post.updated_at || post.published_at,
    author: {
      '@type': 'Organization',
      name: post.author_name || 'WePushX',
      url: 'https://wepushx.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'WePushX',
      url: 'https://wepushx.com',
      logo: { '@type': 'ImageObject', url: 'https://wepushx.com/logo.png' },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://wepushx.com/blog/${post.slug}`,
    },
    keywords: (post.tags || []).join(', '),
    articleSection: post.category,
    inLanguage: 'fr-MA',
   }
  ]

  return (
    <>
      <Script id="post-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── View tracker — fires 2s after mount, increments Supabase view_count ── */}
      <PostViewTracker slug={post.slug} />

      {/* ── Hero ───────────────────────────────────────────────────────── */}
      <section
        className="relative pt-36 pb-16 border-b border-white/50 overflow-hidden noise"
        style={{ background: '#000' }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute -top-20 right-0 w-[600px] h-[600px] rounded-full opacity-10 blur-3xl"
            style={{ background: `radial-gradient(circle, ${color} 0%, transparent 70%)` }}
          />
          <div className="absolute inset-0 bg-grid opacity-20" />
        </div>

        <div className="wrap relative z-10 max-w-3xl">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs mb-8" style={{ color: '#444' }} aria-label="Fil d'Ariane">
            <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <span>/</span>
            <span style={{ color: '#666' }} className="truncate max-w-[200px]">{post.title}</span>
          </nav>

          {/* ── Cover image ────────────────────────────────────────── */}
          <div className="mb-8 rounded-2xl overflow-hidden w-full" style={{ height: '600px', position: 'relative' }}>
            {post.cover_image ? (
              <img
                src={post.cover_image}
                alt={post.cover_alt || post.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            ) : (
              <div
                className="w-full h-full flex items-center justify-center relative"
                style={{ background: `linear-gradient(135deg, ${color}18 0%, rgba(0,0,0,0.6) 60%, #000 100%)` }}
              >
                <div className="absolute inset-0 bg-grid opacity-20" />
                <div className="relative z-10 text-center px-8">
                  <div
                    className="inline-flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-full mb-4"
                    style={{ background: `${color}20`, border: `1px solid ${color}40`, color }}
                  >
                    {post.category}
                  </div>
                  <p className="text-lg font-bold leading-snug max-w-md mx-auto" style={{ color: '#ccc', fontFamily: 'var(--font-space, sans-serif)' }}>
                    {post.title}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Category + reading time + views */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full"
              style={{ background: `${color}14`, border: `1px solid ${color}35`, color }}
            >
              <Tag size={11} /> {post.category}
            </span>
            <span className="flex items-center gap-1.5 text-xs" style={{ color: '#444' }}>
              <Clock size={12} /> {post.reading_time} min de lecture
            </span>
            <span className="flex items-center gap-1.5 text-xs" style={{ color: '#444' }}>
              <Calendar size={12} /> {formatDate(post.published_at)}
            </span>
            {post.view_count > 0 && (
              <span className="flex items-center gap-1.5 text-xs" style={{ color: '#444' }}>
                <Eye size={12} /> {post.view_count.toLocaleString('fr-FR')} vue{post.view_count > 1 ? 's' : ''}
              </span>
            )}
          </div>

          {/* Title */}
          <h1
            className="text-4xl md:text-5xl font-bold leading-tight mb-6"
            style={{ fontFamily: 'var(--font-space, sans-serif)' }}
          >
            {post.title}
          </h1>

          {/* Excerpt */}
          <p className="text-lg leading-relaxed mb-8" style={{ color: '#777' }}>
            {post.excerpt}
          </p>

          {/* Author */}
          {/* <div className="flex items-center gap-3 pb-8" style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
              style={{ background: `${color}18`, border: `1px solid ${color}30`, color, fontFamily: 'var(--font-space, monospace)' }}
            >
              {post.author_avatar || 'WPX'}
            </div>
            <div>
              <p className="text-sm font-semibold text-white">{post.author_name || 'WePushX'}</p>
              <p className="text-xs" style={{ color: '#444' }}>{post.author_role || 'Équipe WePushX'}</p>
            </div>
          </div> */}
           <Link href="/" aria-label="WePushX Accueil">
                <Image src={"/wpx.png"} width={300} height={300} alt='wepushx Agence digital' className='w-[150px] ' />
            </Link>
        </div>
      </section>

      {/* ── Article content ─────────────────────────────────────────────── */}
      <section className="section-sm" style={{ background: '#000' }}>
        <div className="wrap">
          <div className="max-w-9xl">
            {/* Article body */}
            <article
              className="prose-wpx"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* ── Mid-article CTA ──────────────────────────────────────── */}
            <div
              className="my-12 rounded-2xl p-8 relative overflow-hidden"
              style={{
                background: 'rgba(0,245,255,0.05)',
                border: '1px solid rgba(0,245,255,0.2)',
                boxShadow: '0 0 40px rgba(0,245,255,0.06)',
              }}
            >
              <div className="absolute top-0 left-8 right-8 h-px" style={{ background: 'linear-gradient(90deg, transparent, #00F5FF60, transparent)' }} />
              <p className="badge mb-4">Passez à l&apos;action</p>
              <h3
                className="text-2xl font-bold mb-3"
                style={{ fontFamily: 'var(--font-space, sans-serif)' }}
              >
                Prêt à implémenter cette stratégie pour votre business ?
              </h3>
              <p className="mb-6" style={{ color: '#666' }}>
                Réservez un audit gratuit de 30 minutes. Nos experts analysent votre situation et vous proposent un plan d&apos;action concret — sans engagement.
              </p>
              <Link href="/contact" className="btn-primary">
                Réserver mon Audit Gratuit <ArrowRight size={16} />
              </Link>
            </div>

            {/* Tags */}
            {post.tags?.length > 0 && (
              <div className="flex flex-wrap items-center gap-2 mt-8 pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                <span className="text-xs" style={{ color: '#444' }}>Tags :</span>
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-full"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: '#666' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Back to blog */}
            <div className="mt-10">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-[#00F5FF]"
                style={{ color: '#555' }}
              >
                <ArrowLeft size={14} /> Retour au blog
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related posts ───────────────────────────────────────────────── */}
      <RelatedPosts posts={related} />

      {/* ── Final CTA ───────────────────────────────────────────────────── */}
      <CTASection />
    </>
  )
}
