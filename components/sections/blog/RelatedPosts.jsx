'use client'
import Link from 'next/link'
import { ArrowRight, Clock, ChevronRight } from 'lucide-react'

const CATEGORY_COLORS = {
  'Publicité Digitale': '#00F5FF',
  'SEO':               '#34d399',
  'Automation CRM':    '#a78bfa',
  'Contenu IA':        '#f59e0b',
}

function fmt(dateStr) {
  return new Date(dateStr).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' })
}

export default function RelatedPosts({ posts = [] }) {
  if (!posts.length) return null
  return (
    <section className="section" style={{ background: '#000' }}>
      <div className="wrap">
        {/* Header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="badge mb-3">Continuer la lecture</span>
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{ fontFamily: 'var(--font-space, sans-serif)' }}
            >
              Articles <span className="text-gradient">similaires</span>
            </h2>
          </div>
          <Link
            href="/blog"
            className="hidden md:inline-flex items-center gap-1.5 text-sm font-semibold transition-colors hover:text-[#00F5FF]"
            style={{ color: '#555' }}
          >
            Tous les articles <ArrowRight size={14} />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, i) => {
            const color = CATEGORY_COLORS[post.category] || '#00F5FF'
            return (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col rounded-2xl overflow-hidden"
                style={{
                  background: 'rgba(10,10,10,0.9)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  transition: 'border-color .3s, transform .3s',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = `${color}35`; e.currentTarget.style.transform = 'translateY(-3px)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                {/* Cover */}
                <div className="h-36 relative" style={{ background: `linear-gradient(135deg, ${color}14, rgba(0,0,0,0.3))` }}>
                  <span
                    className="absolute top-3 left-3 text-[10px] font-semibold px-2.5 py-1 rounded-full"
                    style={{ background: `${color}18`, border: `1px solid ${color}30`, color }}
                  >
                    {post.category}
                  </span>
                </div>
                {/* Body */}
                <div className="p-4 flex flex-col gap-2 flex-1">
                  <h3 className="text-sm font-bold leading-snug text-white group-hover:text-[#00F5FF] transition-colors duration-250">
                    {post.title}
                  </h3>
                  <div className="flex items-center gap-3 mt-auto pt-3" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                    <span className="flex items-center gap-1 text-[11px]" style={{ color: '#444' }}>
                      <Clock size={10} /> {post.reading_time} min
                    </span>
                    <span className="text-[11px]" style={{ color: '#333' }}>{fmt(post.published_at)}</span>
                    <ChevronRight size={12} style={{ color, marginLeft: 'auto' }} />
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        {/* Mobile — view all */}
        <div className="mt-8 text-center md:hidden">
          <Link href="/blog" className="btn-outline text-sm px-6 py-3">
            Tous les articles <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  )
}
