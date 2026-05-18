import { ImageResponse } from 'next/og'
import { getPostBySlug } from '@/lib/blog'

export const runtime = 'edge'
export const size    = { width: 1200, height: 630 }
export const contentType = 'image/png'

const CATEGORY_COLORS = {
  'Publicité Digitale': '#00F5FF',
  'SEO':               '#34d399',
  'Automation CRM':    '#a78bfa',
  'Contenu IA':        '#f59e0b',
}

export default async function OgImage({ params }) {
  const { slug } = await params
  const post  = await getPostBySlug(slug)
  const color = CATEGORY_COLORS[post?.category] || '#00F5FF'
  const title = post?.title || 'WePushX Blog'
  const cat   = post?.category || 'Marketing Digital'

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%', height: '100%',
          background: '#000',
          display: 'flex', flexDirection: 'column',
          position: 'relative', overflow: 'hidden',
        }}
      >
        {/* Cyan glow */}
        <div style={{
          position: 'absolute', top: -100, right: -100,
          width: 600, height: 600, borderRadius: '50%',
          background: `radial-gradient(circle, ${color}40 0%, transparent 70%)`,
        }} />
        {/* Grid overlay lines */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `linear-gradient(rgba(0,245,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,245,255,0.04) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />
        {/* Top accent line */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: 3,
          background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
        }} />

        {/* Content */}
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: '60px 80px', position: 'relative' }}>
          {/* Logo + brand */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 'auto' }}>
            <div style={{
              background: `${color}18`, border: `1px solid ${color}50`,
              borderRadius: 10, padding: '6px 16px',
              color, fontSize: 14, fontWeight: 700, letterSpacing: '0.1em',
            }}>
              WEPUSHX.COM
            </div>
            <div style={{
              background: `${color}18`, border: `1px solid ${color}30`,
              borderRadius: 999, padding: '4px 14px',
              color: `${color}cc`, fontSize: 12,
            }}>
              {cat}
            </div>
          </div>

          {/* Title */}
          <div style={{
            fontSize: title.length > 60 ? 44 : 52,
            fontWeight: 800, color: '#fff',
            lineHeight: 1.15, maxWidth: 900,
            marginBottom: 32,
          }}>
            {title}
          </div>

          {/* Footer bar */}
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 24,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{
                width: 36, height: 36, borderRadius: '50%',
                background: `${color}20`, border: `1px solid ${color}40`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color, fontSize: 11, fontWeight: 700,
              }}>WPX</div>
              <div style={{ color: '#666', fontSize: 14 }}>WePushX — Agence Marketing Digital Maroc</div>
            </div>
            <div style={{
              background: color, color: '#000',
              borderRadius: 999, padding: '8px 20px',
              fontSize: 14, fontWeight: 700,
            }}>
              Lire l&apos;article →
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
