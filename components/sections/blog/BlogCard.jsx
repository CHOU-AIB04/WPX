'use client'
import Link from 'next/link'
import { motion } from 'motion/react'
import { Clock, ArrowRight, Tag } from 'lucide-react'

const CATEGORY_COLORS = {
  'Publicité Digitale': '#00F5FF',
  'SEO':               '#34d399',
  'Automation CRM':    '#a78bfa',
  'Contenu IA':        '#f59e0b',
}

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('fr-FR', {
    day: 'numeric', month: 'long', year: 'numeric'
  })
}

export default function BlogCard({ post, index = 0, featured = false }) {
  const color = CATEGORY_COLORS[post.category] || '#00F5FF'

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        href={`/blog/${post.slug}`}
        className="group block h-full rounded-2xl overflow-hidden"
        style={{
          background: 'rgba(10,10,10,0.9)',
          border: '1px solid rgba(255,255,255,0.07)',
          transition: 'border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = `${color}40`
          e.currentTarget.style.boxShadow = `0 0 30px ${color}10`
          e.currentTarget.style.transform = 'translateY(-4px)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
          e.currentTarget.style.boxShadow = 'none'
          e.currentTarget.style.transform = 'translateY(0)'
        }}
      >
        {/* Cover image — real photo if available, gradient placeholder otherwise */}
        <div className="w-full h-48 relative overflow-hidden">
          {post.cover_image ? (
            <>
              <img
                src={post.cover_image}
                alt={post.cover_alt || post.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
              {/* subtle dark overlay so pills stay readable */}
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.55) 100%)' }} />
            </>
          ) : (
            <>
              {/* Gradient placeholder */}
              <div
                className="absolute inset-0"
                style={{ background: `linear-gradient(135deg, ${color}18 0%, rgba(0,0,0,0.4) 100%)` }}
              />
              <div
                className="absolute inset-0 opacity-30"
                style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")', backgroundSize: '160px' }}
              />
            </>
          )}
          {/* Category pill */}
          <div className="absolute top-3 left-3 z-10">
            <span
              className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded-full"
              style={{ background: `${color}22`, border: `1px solid ${color}50`, color, backdropFilter: 'blur(6px)' }}
            >
              <Tag size={9} />
              {post.category}
            </span>
          </div>
          {/* Reading time */}
          <div className="absolute bottom-3 right-3 z-10">
            <span
              className="inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full"
              style={{ background: 'rgba(0,0,0,0.7)', color: '#aaa', backdropFilter: 'blur(6px)' }}
            >
              <Clock size={9} />
              {post.reading_time} min
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col gap-3">
          <h3
            className="text-base font-bold leading-snug text-white group-hover:text-[#00F5FF] transition-colors duration-300"
            style={{ fontFamily: 'var(--font-space, sans-serif)' }}
          >
            {post.title}
          </h3>
          <p className="text-sm leading-relaxed line-clamp-3" style={{ color: '#666' }}>
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between mt-1 pt-3" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            <div className="flex items-center gap-2">
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-bold"
                style={{ background: `${color}18`, border: `1px solid ${color}30`, color }}
              >
                {post.author_avatar || 'WPX'}
              </div>
              <span className="text-xs" style={{ color: '#444' }}>
                {formatDate(post.published_at)}
              </span>
            </div>
            <span
              className="inline-flex items-center gap-1 text-xs font-semibold group-hover:gap-2 transition-all"
              style={{ color }}
            >
              Lire <ArrowRight size={12} />
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  )
}
