import { Suspense } from 'react'
import Script from 'next/script'
import { getAllPosts } from '@/lib/blog'
import BlogHero from '@/components/sections/blog/BlogHero'
import BlogCard from '@/components/sections/blog/BlogCard'
import CategoryFilter from '@/components/sections/blog/CategoryFilter'
import CTASection from '@/components/sections/home/CTASection'
import LogosBar from '@/components/sections/shared/LogosBar'

export const revalidate = 3600

export const metadata = {
  title: 'Blog Marketing Digital Maroc | Conseils PME — WePushX',
  description: 'Guides, études de cas et conseils pratiques en marketing digital pour les PME marocaines. Meta Ads, SEO, CRM, UGC IA — publiés chaque semaine par les experts WePushX.',
  alternates: { canonical: 'https://www.wepushx.com/blog' },
  openGraph: {
    title: 'Blog WePushX | Marketing Digital Maroc',
    description: 'Tout ce que vous devez savoir pour dominer le digital au Maroc. Guides pratiques, études de cas et stratégies éprouvées.',
    url: 'https://www.wepushx.com/blog',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'Blog WePushX — Marketing Digital Maroc',
  url: 'https://wepushx.com/blog',
  description: 'Conseils marketing digital pour PME marocaines',
  publisher: {
    '@type': 'Organization',
    name: 'WePushX',
    url: 'https://wepushx.com',
    logo: { '@type': 'ImageObject', url: 'https://wepushx.com/logo.png' },
  },
}

export default async function BlogPage({ searchParams }) {
  // Next.js 15 — searchParams is a Promise, must be awaited
  const resolvedParams = await searchParams
  const activeCategory = resolvedParams?.category || 'Tous'
  const posts = await getAllPosts({ category: activeCategory })

  return (
    <>
      <Script
        id="blog-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero — client component handles all motion */}
      <BlogHero>
        <Suspense fallback={null}>
          <CategoryFilter active={resolvedParams?.category || 'Tous'} />
        </Suspense>
      </BlogHero>

      {/* Blog grid */}
      <section className="section" style={{ background: '#000' }}>
        <div className="wrap">
          {posts.length === 0 ? (
            <p className="text-center py-20" style={{ color: '#444' }}>
              Aucun article dans cette catégorie pour le moment.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post, i) => (
                <BlogCard key={post.slug} post={post} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* <LogosBar background="#000" /> */}
      <CTASection />
    </>
  )
}
