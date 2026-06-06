'use client'
import Link from 'next/link'
import { motion } from 'motion/react'
import { ArrowRight, Shield } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function CTASection() {
  const route = useRouter()
  return (
    <section className="section" style={{ background: '#000' }}>
      <div className="wrap">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-3xl overflow-hidden text-center px-8 py-20"
          style={{
            background: 'linear-gradient(135deg, rgba(0,245,255,0.08) 0%, rgba(0,245,255,0.03) 50%, rgba(0,0,0,0) 100%)',
            border: '1px solid rgba(0,245,255,0.2)',
          }}
        >
          {/* Glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{
              background: 'radial-gradient(ellipse 70% 60% at 50% 100%, rgba(0,245,255,0.12) 0%, transparent 70%)',
            }}
          />
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(0,245,255,0.5), transparent)' }}
          />

          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="badge mb-6">Audit</span>
            <h2
              className="text-3xl md:text-6xl font-bold leading-tight mb-6"
              style={{ fontFamily: 'var(--font-space, sans-serif)' }}
            >
              Prêt à{' '}
              <span className="text-gradient">scaler</span>
              {' '}votre business ?
            </h2>
            <p className="text-lg mb-10 leading-relaxed" style={{ color: '#888' }}>
              30 minutes d'audit. On analyse votre situation, On analyse votre situation, on identifie exactement
              où vous perdez de l&apos;argent, et on vous dit comment le récupérer.
              <strong style={{ color: '#fff' }}> Sans engagement.</strong>
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <div onClick={()=>{route.push("/contact"),window.scrollTo({top:100,behavior:"smooth"})}} className="btn-primary text-base px-8 py-4">
                Réserver mon Audit
                <ArrowRight size={18} />
              </div>
              <Link href="/services" className="btn-outline text-base px-8 py-4">
                Découvrir nos services
              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 mt-10 text-[10px] md:text-sm" style={{ color: '#555' }}>
              <span className="flex items-center gap-2">
                <Shield size={14} style={{ color: '#00F5FF' }} />
                Garantie 60 jours
              </span>
              <span>·</span>
              <span>Réponse sous 24h</span>
              <span>·</span>
              <span>Aucun engagement</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
