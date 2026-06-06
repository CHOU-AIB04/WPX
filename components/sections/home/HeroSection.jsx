'use client'
import Link from 'next/link'
import { motion } from 'motion/react'
import { ArrowRight, Play, TrendingUp, Users, DollarSign, Zap } from 'lucide-react'
import { useRouter } from 'next/navigation'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
})

function DashboardMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40, scale: 0.96 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full max-w-sm mx-auto lg:mx-0"
    >
      {/* Glow behind card */}
      <div
        className="absolute inset-0 rounded-3xl blur-3xl opacity-25 -z-10 scale-110"
        style={{ background: 'radial-gradient(circle, #00F5FF 0%, transparent 70%)' }}
      />

      {/* Main dashboard card */}
      <div
        className="rounded-3xl p-5 relative overflow-hidden"
        style={{
          background: 'rgba(10,10,10,0.92)',
          border: '1px solid rgba(0,245,255,0.18)',
          boxShadow: '0 0 40px rgba(0,245,255,0.08), 0 32px 64px rgba(0,0,0,0.6)',
          backdropFilter: 'blur(20px)',
        }}
      >
        {/* Accent top line */}
        <div
          className="absolute top-0 left-8 right-8 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, #00F5FF80, transparent)' }}
        />

        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <div>
            <p className="text-xs font-semibold text-white">Tableau de bord client</p>
            <p className="text-[10px] mt-0.5" style={{ color: '#444' }}>Mis à jour il y a 2 min</p>
          </div>
          <div
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold"
            style={{ background: 'rgba(52,211,153,0.1)', border: '1px solid rgba(52,211,153,0.25)', color: '#34d399' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Live
          </div>
        </div>

        {/* KPI grid */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          {[
            { icon: TrendingUp, label: 'Trafic qualifié', value: '+340%', delta: '+12%', color: '#00F5FF' },
            { icon: Users,      label: 'Leads / mois',   value: '89',     delta: '+23',  color: '#a78bfa' },
            { icon: DollarSign, label: 'Coût / lead',    value: '-42%',   delta: '-8%',  color: '#34d399' },
            { icon: Zap,        label: 'ROAS moyen',     value: '4.2x',   delta: '+0.6', color: '#f59e0b' },
          ].map((kpi) => (
            <div
              key={kpi.label}
              className="rounded-xl p-3"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
            >
              <div className="flex items-center gap-1.5 mb-2">
                <kpi.icon size={11} style={{ color: kpi.color }} />
                <span className="text-[10px]" style={{ color: '#555' }}>{kpi.label}</span>
              </div>
              <p
                className="text-xl font-bold leading-none"
                style={{ color: kpi.color, fontFamily: 'var(--font-space, monospace)' }}
              >
                {kpi.value}
              </p>
              <p className="text-[10px] mt-1 font-semibold" style={{ color: '#34d399' }}>
                ↑ {kpi.delta} ce mois
              </p>
            </div>
          ))}
        </div>

        {/* Mini bar chart */}
        <div
          className="rounded-xl p-3"
          style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}
        >
          <p className="text-[10px] font-semibold mb-3" style={{ color: '#555' }}>Leads générés — 6 derniers mois</p>
          <div className="flex items-end gap-1.5 h-12">
            {[28, 42, 38, 55, 67, 89].map((v, i) => (
              <motion.div
                key={i}
                className="flex-1 rounded-sm"
                style={{ background: i === 5 ? '#00F5FF' : 'rgba(0,245,255,0.2)' }}
                initial={{ height: 0 }}
                animate={{ height: `${(v / 89) * 100}%` }}
                transition={{ duration: 0.6, delay: 0.8 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              />
            ))}
          </div>
          <div className="flex justify-between mt-1.5">
            {['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin'].map((m) => (
              <span key={m} className="text-[9px]" style={{ color: '#333' }}>{m}</span>
            ))}
          </div>
        </div>

        {/* Guarantee pill */}
        <div
          className="mt-4 flex items-center gap-2 px-3 py-2 rounded-xl text-[10px] font-semibold"
          style={{ background: 'rgba(0,245,255,0.06)', border: '1px solid rgba(0,245,255,0.15)', color: '#00F5FF' }}
        >
          ✦ Garantie 60 jours — remboursement si aucun résultat
        </div>
      </div>

      {/* Floating notification badge */}
      <motion.div
        initial={{ opacity: 0, y: 16, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute -top-3 -right-3 px-3 py-1.5 rounded-full text-[10px] font-bold"
        style={{
          background: '#00F5FF',
          color: '#000',
          boxShadow: '0 0 20px rgba(0,245,255,0.5)',
        }}
      >
        +23 leads aujourd&apos;hui
      </motion.div>
    </motion.div>
  )
}

export default function HeroSection() {
  const route = useRouter()
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden pt-28 md:pt-0"
      aria-label="Hero WePushX"
      style={{ background: '#000' }}
    >
      {/* Background layers */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-32 right-0 w-[700px] h-[700px] rounded-full opacity-15 blur-3xl"
          style={{ background: 'radial-gradient(circle, #00F5FF 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-0 -left-32 w-[400px] h-[400px] rounded-full opacity-08 blur-3xl"
          style={{ background: 'radial-gradient(circle, #00F5FF 0%, transparent 70%)' }}
        />
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div
          className="absolute bottom-0 left-0 right-0 h-40"
          style={{ background: 'linear-gradient(to top, #000 0%, transparent 100%)' }}
        />
      </div>

      <div className="wrap relative z-10 pt-32 pb-24">
        <div className="flex flex-col lg:flex-row lg:items-center gap-16 lg:gap-12">

          {/* LEFT — text content */}
          <div className="flex-1 flex flex-col gap-6">
            <motion.div {...fadeUp(0)}>
              <span className="badge">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00F5FF] animate-pulse" />
                <span className='text-[11px] md:text-[16px]'>Agence Marketing Digital , Maroc</span>
              </span>
            </motion.div>

            <motion.h1
              {...fadeUp(0.08)}
              className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight"
              style={{ fontFamily: 'var(--font-space, sans-serif)' }}
            >
              Transformez chaque{' '}
              <span className="text-gradient">dirham investi</span>
              {' '}en clients qualifiés
            </motion.h1>

            <motion.p
              {...fadeUp(0.16)}
              className="text-lg md:text-xl max-w-xl leading-relaxed"
              style={{ color: '#999' }}
            >
              Meta Ads, Google Ads, SEO, Sites Web, CRM & Automation IA.
              Nous gérons tout pendant que vous vous concentrez sur votre business.{' '}
              <strong style={{ color: '#fff' }}>Résultats garantis en 60 jours.</strong>
            </motion.p>

            <motion.div {...fadeUp(0.24)} className="flex flex-wrap items-center gap-4">
              <div onClick={()=>{route.push("/contact"),window.scrollTo({top:100,behavior:"smooth"})}}
                className="btn-primary text-base px-8 py-4">
                Réserver mon Audit
                <ArrowRight size={18} />
              </div>
              <Link href="/services" className="btn-outline text-base px-8 py-4">
                <Play size={16} fill="currentColor" className="opacity-70" />
                Voir nos services
              </Link>
            </motion.div>

            <motion.p
              {...fadeUp(0.3)}
              className="text-[12px] md:text-sm"
              style={{ color: '#444' }}
            >
              ✦ Sans engagement · Réponse sous 24h · Résultats garantis
            </motion.p>

            {/* Trust row */}
            <motion.div
              {...fadeUp(0.36)}
              className="flex flex-wrap items-center gap-6 pt-2"
            >
              {[
                { val: '50+', label: 'clients' },
                { val: '100%', label: 'avis positifs' },
                { val: '60j', label: 'garantie' },
              ].map((s) => (
                <div key={s.label} className="flex items-center gap-2">
                  <span
                    className="text-xl font-bold"
                    style={{ color: '#00F5FF', fontFamily: 'var(--font-space, monospace)' }}
                  >
                    {s.val}
                  </span>
                  <span className="text-sm" style={{ color: '#444' }}>{s.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — Dashboard mockup */}
          <div className="w-full lg:w-[420px] shrink-0">
            <DashboardMockup />
          </div>

        </div>
      </div>
    </section>
  )
}
