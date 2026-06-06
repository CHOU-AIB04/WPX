'use client'
import Link from 'next/link'
import { useState, useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { getCityServices } from '@/lib/data/cities'

const fadeUp = (d = 0) => ({
  initial: { opacity: 0, y: 36 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.7, delay: d, ease: [0.22, 1, 0.36, 1] },
})
const fadeIn = (d = 0) => ({
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0.6, delay: d },
})
const slideLeft = (d = 0) => ({
  initial: { opacity: 0, x: -32 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.7, delay: d, ease: [0.22, 1, 0.36, 1] },
})

function Badge({ children, dark = false }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest"
      style={dark
        ? { background: 'rgba(0,245,255,0.1)', color: '#00F5FF', border: '1px solid rgba(0,245,255,0.2)' }
        : { background: 'rgba(8,145,178,0.08)', color: '#0891b2', border: '1px solid rgba(8,145,178,0.2)' }
      }
    >
      {children}
    </span>
  )
}

// ─── 1. HERO — dark, flat bottom (no clip) ───────────────────────────────────
function CityHero({ city }) {
  return (
    <section className="relative overflow-hidden" style={{ background: '#000', paddingTop: '7rem', paddingBottom: '5rem' }}>
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4 }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(0,245,255,0.12) 0%, transparent 70%)' }}
      />
      <div className="wrap relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp(0)} className="mb-6 flex items-center gap-3">
            <Badge dark>📍 {city.name}, {city.country}</Badge>
            <span className="text-xs" style={{ color: '#444' }}>— Résultats en 60 jours</span>
          </motion.div>
          <motion.h1
            {...fadeUp(0.07)}
            className="font-display font-black leading-[1.05] mb-6"
            style={{ fontSize: 'clamp(2.4rem, 6vw, 4.2rem)', color: '#fff' }}
          >
            L&apos;Agence Marketing Digital<br />
            <span style={{ background: 'linear-gradient(135deg, #00F5FF 0%, #fff 50%, #00F5FF 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              #1 à {city.name}
            </span>
          </motion.h1>
          <motion.p {...fadeUp(0.13)} className="text-lg leading-relaxed mb-10 max-w-xl" style={{ color: '#777' }}>
            {city.seo.h2Sub}
          </motion.p>
          <motion.div {...fadeUp(0.18)} className="flex flex-wrap gap-4 mb-14">
            <Link href="/contact" className="btn-primary">
              Démarrer à {city.name}
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"/></svg>
            </Link>
            <Link href="/services" className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-base" style={{ border: '1px solid rgba(255,255,255,0.1)', color: '#888' }}>
              Voir nos services
            </Link>
          </motion.div>
          <motion.div {...fadeUp(0.24)} className="flex flex-wrap gap-4">
            {city.stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.07 }}
                whileHover={{ y: -4 }}
                className="flex items-center gap-3 px-5 py-3 rounded-2xl"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <span className="text-2xl">{stat.icon}</span>
                <div>
                  <p className="font-black text-lg leading-none" style={{ color: '#00F5FF' }}>{stat.value}</p>
                  <p className="text-xs mt-0.5" style={{ color: '#555' }}>{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ─── 2. CONTEXT — white, diagonal top only ───────────────────────────────────
function CityContext({ city }) {
  return (
    <section
      className="relative"
      style={{
        background: '#FFFFFF',
        clipPath: 'polygon(0 6%, 100% 0, 100% 100%, 0 100%)',
        padding: '8rem 0 5rem',
        marginTop: '-2px',
      }}
    >
      <div className="absolute inset-0 pointer-events-none opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #cbd5e1 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
      <div className="wrap relative z-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div {...slideLeft(0)} className="mb-4"><Badge>Contexte local</Badge></motion.div>
            <motion.h2 {...slideLeft(0.07)} className="font-display font-black text-3xl md:text-4xl leading-tight mb-6" style={{ color: '#0a0a0a' }}>
              {city.context.title}
            </motion.h2>
            {city.context.paragraphs.map((p, i) => (
              <motion.p key={i} {...slideLeft(0.1 + i * 0.06)} className="text-base leading-relaxed mb-4" style={{ color: '#64748b' }}>{p}</motion.p>
            ))}
            <motion.div {...slideLeft(0.25)} className="mt-8">
              <Link href="/contact" className="inline-flex items-center gap-2 font-semibold text-sm" style={{ color: '#0891b2' }}>Démarrer avec WePushX →</Link>
            </motion.div>
          </div>
          <div>
            <motion.p {...fadeIn(0.1)} className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: '#94a3b8' }}>
              Secteurs accompagnés à {city.name}
            </motion.p>
            <div className="grid grid-cols-2 gap-3">
              {city.sectors.map((sector, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.92 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.1 + i * 0.05 }}
                  whileHover={{ y: -3, boxShadow: '0 8px 24px rgba(0,0,0,0.08)' }}
                  className="flex items-center gap-3 rounded-xl px-4 py-3"
                  style={{ background: '#F8FAFC', border: '1px solid #E2E8F0' }}
                >
                  <span className="text-xl">{sector.icon}</span>
                  <span className="text-sm font-medium" style={{ color: '#334155' }}>{sector.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── 3. SERVICES — dark, diagonal bottom only ────────────────────────────────
function CityServices({ city }) {
  const services = getCityServices(city.name)
  return (
    <section
      className="relative"
      style={{
        background: '#050505',
        clipPath: 'polygon(0 0, 100% 0, 100% 94%, 0 100%)',
        padding: '5rem 0 8rem',
        marginTop: '-2px',
      }}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-3xl pointer-events-none opacity-5" style={{ background: '#00F5FF' }} />
      <div className="wrap relative z-10">
        <div className="text-center mb-14">
          <motion.div {...fadeUp(0)} className="mb-4"><Badge dark>Nos services à {city.name}</Badge></motion.div>
          <motion.h2 {...fadeUp(0.07)} className="font-display font-black text-3xl md:text-5xl" style={{ color: '#fff' }}>
            Tout pour dominer le digital<br />
            <span style={{ background: 'linear-gradient(90deg, #00F5FF, #fff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              à {city.name}
            </span>
          </motion.h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: i * 0.06 }}
              whileHover={{ y: -6 }}
              className="rounded-2xl p-6 flex flex-col gap-4 group"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', transition: 'border-color 0.3s, background 0.3s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor='rgba(0,245,255,0.25)'; e.currentTarget.style.background='rgba(0,245,255,0.03)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(255,255,255,0.07)'; e.currentTarget.style.background='rgba(255,255,255,0.03)' }}
            >
              <div className="flex items-start gap-4">
                <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0" style={{ background: 'rgba(0,245,255,0.07)', border: '1px solid rgba(0,245,255,0.15)' }}>
                  {service.icon}
                </motion.div>
                <div>
                  <p className="font-bold text-sm" style={{ color: '#00F5FF' }}>{service.tagline}</p>
                  <p className="text-xs font-medium mt-0.5" style={{ color: '#555' }}>{service.name}</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed flex-1" style={{ color: '#666' }}>{service.description}</p>
              <div className="flex items-center justify-between pt-3 mt-auto" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                <span className="text-xs font-semibold" style={{ color: '#444' }}>{service.price}</span>
                <Link href={`/services#${service.anchor}`} className="text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: '#00F5FF' }}>
                  Détails →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── 4. RESULTS — white, diagonal top only ───────────────────────────────────
function CityResults({ city }) {
  const ref = useRef(null)
  return (
    <section
      ref={ref}
      className="relative"
      style={{
        background: 'linear-gradient(180deg,#FFFFFF 0%,#F8FAFC 100%)',
        clipPath: 'polygon(0 6%, 100% 0, 100% 100%, 0 100%)',
        padding: '8rem 0 5rem',
        marginTop: '-2px',
      }}
    >
      <div className="wrap relative z-10">
        <div className="text-center mb-14">
          <motion.div {...fadeUp(0)} className="mb-4"><Badge>Résultats à {city.name}</Badge></motion.div>
          <motion.h2 {...fadeUp(0.07)} className="font-display font-black text-3xl md:text-5xl" style={{ color: '#0a0a0a' }}>
            Ce que nos clients ont obtenu<br />
            <span style={{ color: '#0891b2' }}>à {city.name}</span>
          </motion.h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {city.results.map((result, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6, boxShadow: '0 20px 60px rgba(0,0,0,0.1)' }}
              className="rounded-2xl overflow-hidden"
              style={{ background: '#fff', border: '1px solid #E2E8F0', boxShadow: '0 4px 24px rgba(0,0,0,0.05)' }}
            >
              <div className="h-1 w-full" style={{ background: 'linear-gradient(90deg,#00F5FF,#0891b2)' }} />
              <div className="p-6">
                <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#0891b2' }}>{result.sector}</p>
                <div className="space-y-3 mb-5">
                  <div>
                    <span className="text-xs font-semibold block mb-1" style={{ color: '#94a3b8' }}>Défi</span>
                    <p className="text-sm" style={{ color: '#475569' }}>{result.challenge}</p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold block mb-1" style={{ color: '#94a3b8' }}>Solution</span>
                    <p className="text-sm" style={{ color: '#475569' }}>{result.solution}</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3 pt-4" style={{ borderTop: '1px solid #F1F5F9' }}>
                  {result.metrics.map((m, j) => (
                    <div key={j} className="text-center">
                      <p className="font-black text-xl leading-none" style={{ color: '#0a0a0a' }}>{m.value}</p>
                      <p className="text-xs mt-1 leading-tight" style={{ color: '#94a3b8' }}>{m.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div {...fadeUp(0.3)} className="mt-14 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full" style={{ background: '#F0FDFF', border: '1px solid #BAE6FD' }}>
            <span className="text-lg">🛡️</span>
            <p className="text-sm font-semibold" style={{ color: '#0369a1' }}>Garantie résultats en 60 jours ou remboursement intégral</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ─── 5. NEIGHBORHOODS — white, flat ──────────────────────────────────────────
function CityNeighborhoods({ city }) {
  return (
    <section className="relative" style={{ background: '#fff', padding: '5rem 0' }}>
      <div className="wrap">
        <div className="max-w-4xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-2/5">
            <motion.div {...slideLeft(0)} className="mb-4"><Badge>Zone d&apos;intervention</Badge></motion.div>
            <motion.h2 {...slideLeft(0.07)} className="font-display font-black text-2xl md:text-3xl mb-4" style={{ color: '#0a0a0a' }}>
              Tout {city.name},<br />un seul partenaire
            </motion.h2>
            <motion.p {...slideLeft(0.12)} className="text-sm leading-relaxed" style={{ color: '#64748b' }}>
              WePushX accompagne les entreprises dans tous les quartiers de {city.name} — à distance, avec des résultats mesurables chaque mois.
            </motion.p>
          </div>
          <div className="lg:w-3/5">
            <motion.div {...fadeIn(0.1)} className="flex flex-wrap gap-2">
              {city.neighborhoods.map((n, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.05 + i * 0.04 }}
                  whileHover={{ scale: 1.05, background: '#E0F2FE', borderColor: '#7DD3FC' }}
                  className="px-4 py-2 rounded-full text-sm font-medium cursor-default"
                  style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', color: '#475569' }}
                >
                  📍 {n}
                </motion.span>
              ))}
            </motion.div>
            <motion.p {...fadeIn(0.4)} className="mt-5 text-xs" style={{ color: '#94a3b8' }}>
              Et toutes les communes du Grand {city.name} · Partout au Maroc en ligne
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── 6. PROCESS — dark, diagonal bottom only ─────────────────────────────────
function CityProcess({ city }) {
  return (
    <section
      className="relative"
      style={{
        background: '#050505',
        clipPath: 'polygon(0 0, 100% 0, 100% 94%, 0 100%)',
        padding: '5rem 0 8rem',
        marginTop: '-2px',
      }}
    >
      <div className="wrap relative z-10">
        <div className="text-center mb-14">
          <motion.div {...fadeUp(0)} className="mb-4"><Badge dark>Comment ça marche</Badge></motion.div>
          <motion.h2 {...fadeUp(0.07)} className="font-display font-black text-3xl md:text-5xl" style={{ color: '#fff' }}>
            Démarrer à {city.name}<br />
            <span style={{ background: 'linear-gradient(90deg,#00F5FF,#fff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              en 4 étapes simples
            </span>
          </motion.h2>
        </div>
        <div className="max-w-3xl mx-auto relative">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-6 top-6 bottom-6 w-px origin-top hidden md:block"
            style={{ background: 'linear-gradient(180deg,#00F5FF,rgba(0,245,255,0.1))' }}
          />
          <div className="space-y-5">
            {city.process.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex gap-6 md:pl-6"
              >
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  className="w-12 h-12 rounded-full flex items-center justify-center font-black text-base flex-shrink-0 relative z-10"
                  style={{ background: 'linear-gradient(135deg,#00F5FF,#0891b2)', color: '#000', boxShadow: '0 0 20px rgba(0,245,255,0.3)' }}
                >
                  {step.step}
                </motion.div>
                <motion.div whileHover={{ x: 4 }} className="flex-1 rounded-2xl p-5" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
                  <p className="font-bold mb-2" style={{ color: '#fff' }}>{step.title}</p>
                  <p className="text-sm leading-relaxed" style={{ color: '#666' }}>{step.desc}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── 7. FAQ — white, diagonal top only ───────────────────────────────────────
function CityFAQ({ city }) {
  const [open, setOpen] = useState(null)
  return (
    <section
      className="relative"
      style={{
        background: 'linear-gradient(180deg,#fff 0%,#F8FAFC 100%)',
        clipPath: 'polygon(0 6%, 100% 0, 100% 100%, 0 100%)',
        padding: '8rem 0 5rem',
        marginTop: '-2px',
      }}
    >
      <div className="wrap">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <div className="lg:sticky lg:top-24">
              <motion.div {...slideLeft(0)} className="mb-4"><Badge>FAQ</Badge></motion.div>
              <motion.h2 {...slideLeft(0.07)} className="font-display font-black text-2xl md:text-3xl mb-4" style={{ color: '#0a0a0a' }}>
                Questions sur le marketing digital à {city.name}
              </motion.h2>
              <motion.p {...slideLeft(0.13)} className="text-sm leading-relaxed mb-6" style={{ color: '#64748b' }}>
                Toutes les réponses aux questions les plus fréquentes de nos clients à {city.name}.
              </motion.p>
              <motion.div {...slideLeft(0.18)}>
                <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-bold px-5 py-2.5 rounded-full" style={{ background: '#0a0a0a', color: '#fff' }}>
                  Nous contacter →
                </Link>
              </motion.div>
            </div>
          </div>
          <div className="lg:col-span-3 space-y-3">
            {city.faq.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className="rounded-2xl overflow-hidden"
                style={{ border: open===i ? '1px solid #BAE6FD':'1px solid #E2E8F0', background: open===i ? '#F0FDFF':'#fff', boxShadow: open===i ? '0 4px 20px rgba(8,145,178,0.08)':'none', transition: 'all 0.25s ease' }}
              >
                <button onClick={() => setOpen(open===i ? null : i)} className="w-full text-left px-6 py-4 flex items-start justify-between gap-4">
                  <span className="font-semibold text-sm leading-snug" style={{ color: open===i ? '#0369a1':'#0f172a' }}>{item.q}</span>
                  <motion.span
                    animate={{ rotate: open===i ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold"
                    style={{ background: open===i ? '#0891b2':'#F1F5F9', color: open===i ? '#fff':'#64748b' }}
                  >+</motion.span>
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: open===i ? 'auto':0, opacity: open===i ? 1:0 }}
                  transition={{ duration: 0.25 }}
                  style={{ overflow: 'hidden' }}
                >
                  <p className="px-6 pb-5 text-sm leading-relaxed" style={{ color: '#475569' }}>{item.a}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── 8. CTA — dark, flat top ─────────────────────────────────────────────────
function CityCTA({ city }) {
  return (
    <section className="relative" style={{ background: '#000', padding: '5rem 0' }}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(0,245,255,0.07) 0%, transparent 65%)' }}
      />
      <div className="wrap relative z-10">
        <motion.div {...fadeUp(0)} className="max-w-3xl mx-auto text-center">
          <motion.div {...fadeUp(0)} className="mb-5"><Badge dark>📍 {city.name}</Badge></motion.div>
          <motion.h2 {...fadeUp(0.07)} className="font-display font-black text-3xl md:text-5xl mb-5" style={{ color: '#fff' }}>
            Prêt à générer des leads<br />
            <span style={{ background: 'linear-gradient(135deg,#00F5FF,#fff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              à {city.name} ?
            </span>
          </motion.h2>
          <motion.p {...fadeUp(0.13)} className="text-base mb-10" style={{ color: '#555' }}>
            Un expert WePushX analyse votre présence digitale à {city.name} et vous propose un plan d&apos;action concret — sans engagement.
          </motion.p>
          <motion.div {...fadeUp(0.18)} className="flex flex-wrap gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                Démarrer à {city.name}
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"/></svg>
              </Link>
            </motion.div>
          </motion.div>
          <motion.p {...fadeUp(0.24)} className="mt-7 text-xs" style={{ color: '#333' }}>
            ✦ Résultats garantis en 60 jours ou remboursement ✦ Réponse sous 24h ✦ Aucun engagement
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

export default function CityPageTemplate({ city }) {
  return (
    <>
      <CityHero city={city} />
      <CityContext city={city} />
      <CityServices city={city} />
      <CityResults city={city} />
      <CityNeighborhoods city={city} />
      <CityProcess city={city} />
      <CityFAQ city={city} />
      <CityCTA city={city} />
    </>
  )
}
