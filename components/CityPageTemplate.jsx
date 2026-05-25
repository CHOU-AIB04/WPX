'use client'
// ── CityPageTemplate — reusable satellite page for each city ─────────────────
// Usage: import this + the city data object, render <CityPageTemplate city={cityData} />
// Sections: Hero → Stats → Context → Services → Neighborhoods → Results → Process → FAQ → CTA

import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'motion/react'
import { getCityServices } from '@/lib/data/cities'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
})

// ── Helpers ──────────────────────────────────────────────────────────────────
function Badge({ children }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest"
      style={{ background: 'rgba(0,245,255,0.08)', color: '#00F5FF', border: '1px solid rgba(0,245,255,0.18)' }}
    >
      {children}
    </span>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// 1. HERO
// ─────────────────────────────────────────────────────────────────────────────
function CityHero({ city }) {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: '#000', paddingTop: '6rem', paddingBottom: '5rem' }}
    >
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />

      {/* Glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #00F5FF 0%, transparent 70%)' }}
      />

      <div className="wrap relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeUp(0)} className="mb-5">
            <Badge>📍 {city.name}, {city.country}</Badge>
          </motion.div>

          <motion.h1
            {...fadeUp(0.08)}
            className="font-display font-black mb-6 leading-tight"
            style={{ fontSize: 'clamp(2rem, 5.5vw, 3.8rem)', color: '#fff' }}
          >
            {city.seo.h1.split(city.name).map((part, i, arr) => (
              i < arr.length - 1 ? (
                <span key={i}>
                  {part}
                  <span className="text-gradient">{city.name}</span>
                </span>
              ) : part
            ))}
          </motion.h1>

          <motion.p
            {...fadeUp(0.16)}
            className="text-lg leading-relaxed mb-10 max-w-2xl mx-auto"
            style={{ color: '#888' }}
          >
            {city.seo.h2Sub}
          </motion.p>

          <motion.div {...fadeUp(0.22)} className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Audit gratuit à {city.name}
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"/></svg>
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-base transition-colors"
              style={{ border: '1px solid rgba(255,255,255,0.12)', color: '#aaa' }}
            >
              Voir nos services
            </Link>
          </motion.div>

          {/* Guarantee pill */}
          <motion.p
            {...fadeUp(0.28)}
            className="mt-8 text-xs"
            style={{ color: '#444' }}
          >
            ✦ Résultats garantis en 60 jours ou remboursement ✦ Sans engagement initial ✦ Audit gratuit
          </motion.p>
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// 2. STATS BAR
// ─────────────────────────────────────────────────────────────────────────────
function CityStats({ city }) {
  return (
    <section style={{ background: '#050505', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="wrap">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
          {city.stats.map((stat, i) => (
            <motion.div
              key={i}
              {...fadeUp(i * 0.06)}
              className="flex flex-col items-center justify-center py-8 px-4 text-center"
              style={{ borderRight: i < city.stats.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}
            >
              <span className="text-2xl mb-1">{stat.icon}</span>
              <span
                className="font-display font-black text-3xl leading-none"
                style={{ color: '#00F5FF' }}
              >
                {stat.value}
              </span>
              <span className="text-xs mt-1" style={{ color: '#555' }}>{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// 3. CITY CONTEXT
// ─────────────────────────────────────────────────────────────────────────────
function CityContext({ city }) {
  return (
    <section className="section" style={{ background: '#000' }}>
      <div className="wrap">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <motion.div {...fadeUp(0)} className="mb-4">
              <Badge>Contexte local</Badge>
            </motion.div>
            <motion.h2
              {...fadeUp(0.06)}
              className="font-display font-black text-2xl md:text-3xl leading-tight mb-6"
            >
              {city.context.title}
            </motion.h2>
            {city.context.paragraphs.map((p, i) => (
              <motion.p key={i} {...fadeUp(0.1 + i * 0.05)} className="mb-4 text-base" style={{ color: '#888' }}>
                {p}
              </motion.p>
            ))}
          </div>

          {/* Sectors grid */}
          <div>
            <motion.p {...fadeUp(0.1)} className="text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: '#444' }}>
              Secteurs que nous accompagnons à {city.name}
            </motion.p>
            <div className="grid grid-cols-2 gap-3">
              {city.sectors.map((sector, i) => (
                <motion.div
                  key={i}
                  {...fadeUp(0.12 + i * 0.04)}
                  className="flex items-center gap-3 rounded-xl px-4 py-3"
                  style={{ background: '#0a0a0a', border: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <span className="text-xl">{sector.icon}</span>
                  <span className="text-sm font-medium" style={{ color: '#ccc' }}>{sector.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// 4. SERVICES
// ─────────────────────────────────────────────────────────────────────────────
function CityServices({ city }) {
  const services = getCityServices(city.name)
  return (
    <section className="section" style={{ background: '#040404' }} id="services">
      <div className="wrap">
        <div className="text-center mb-14">
          <motion.div {...fadeUp(0)} className="mb-4">
            <Badge>Nos services à {city.name}</Badge>
          </motion.div>
          <motion.h2
            {...fadeUp(0.06)}
            className="font-display font-black text-2xl md:text-4xl"
          >
            Tout ce dont votre entreprise a besoin
            <br />
            <span className="text-gradient">pour dominer le digital à {city.name}</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              {...fadeUp(0.04 * i)}
              className="rounded-2xl p-6 flex flex-col gap-4 group transition-all duration-300 hover:-translate-y-1"
              style={{
                background: '#0a0a0a',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(0,245,255,0.2)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'}
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                  style={{ background: 'rgba(0,245,255,0.06)', border: '1px solid rgba(0,245,255,0.12)' }}
                >
                  {service.icon}
                </div>
                <div>
                  <p className="font-semibold text-base" style={{ color: '#00F5FF' }}>{service.tagline}</p>
                  <p className="text-sm font-medium" style={{ color: '#ccc' }}>{service.name}</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: '#666' }}>{service.description}</p>
              <div className="mt-auto pt-3 flex items-center justify-between" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                <span className="text-xs font-semibold" style={{ color: '#555' }}>{service.price}</span>
                <Link
                  href={`/services#${service.anchor}`}
                  className="text-xs font-semibold transition-colors"
                  style={{ color: '#00F5FF' }}
                >
                  En savoir plus →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// 5. NEIGHBORHOODS
// ─────────────────────────────────────────────────────────────────────────────
function CityNeighborhoods({ city }) {
  return (
    <section className="section-sm" style={{ background: '#000' }}>
      <div className="wrap">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeUp(0)} className="mb-4">
            <Badge>Zone d&apos;intervention</Badge>
          </motion.div>
          <motion.h2
            {...fadeUp(0.06)}
            className="font-display font-black text-2xl md:text-3xl mb-4"
          >
            Nous accompagnons les entreprises de tout {city.name}
          </motion.h2>
          <motion.p {...fadeUp(0.1)} className="text-base mb-10" style={{ color: '#666' }}>
            WePushX gère les stratégies digitales pour des clients dans tous les quartiers et arrondissements de {city.name}.
          </motion.p>
          <motion.div {...fadeUp(0.14)} className="flex flex-wrap justify-center gap-3">
            {city.neighborhoods.map((n, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-full text-sm font-medium"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  color: '#888',
                }}
              >
                📍 {n}
              </span>
            ))}
          </motion.div>
          <motion.p {...fadeUp(0.2)} className="mt-8 text-sm" style={{ color: '#444' }}>
            Et toutes les autres communes du Grand {city.name} • Service à distance disponible partout au Maroc
          </motion.p>
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// 6. RESULTS
// ─────────────────────────────────────────────────────────────────────────────
function CityResults({ city }) {
  return (
    <section className="section" style={{ background: '#040404' }}>
      <div className="wrap">
        <div className="text-center mb-14">
          <motion.div {...fadeUp(0)} className="mb-4">
            <Badge>Résultats à {city.name}</Badge>
          </motion.div>
          <motion.h2
            {...fadeUp(0.06)}
            className="font-display font-black text-2xl md:text-4xl"
          >
            Ce que nos clients
            <span className="text-gradient"> à {city.name} </span>
            ont obtenu
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {city.results.map((result, i) => (
            <motion.div
              key={i}
              {...fadeUp(0.06 * i)}
              className="rounded-2xl p-6"
              style={{ background: '#0a0a0a', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              <p
                className="text-xs font-bold uppercase tracking-widest mb-4"
                style={{ color: '#00F5FF' }}
              >
                {result.sector}
              </p>

              <div className="mb-4 space-y-2">
                <div className="flex gap-2 text-sm" style={{ color: '#666' }}>
                  <span className="flex-shrink-0 font-semibold" style={{ color: '#555' }}>Défi :</span>
                  <span>{result.challenge}</span>
                </div>
                <div className="flex gap-2 text-sm" style={{ color: '#666' }}>
                  <span className="flex-shrink-0 font-semibold" style={{ color: '#555' }}>Solution :</span>
                  <span>{result.solution}</span>
                </div>
              </div>

              <div
                className="grid grid-cols-3 gap-3 pt-4"
                style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
              >
                {result.metrics.map((m, j) => (
                  <div key={j} className="text-center">
                    <p className="font-black text-lg leading-none" style={{ color: '#fff' }}>{m.value}</p>
                    <p className="text-xs mt-1 leading-tight" style={{ color: '#555' }}>{m.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// 7. PROCESS
// ─────────────────────────────────────────────────────────────────────────────
function CityProcess({ city }) {
  return (
    <section className="section" style={{ background: '#000' }}>
      <div className="wrap">
        <div className="text-center mb-14">
          <motion.div {...fadeUp(0)} className="mb-4">
            <Badge>Comment ça marche</Badge>
          </motion.div>
          <motion.h2
            {...fadeUp(0.06)}
            className="font-display font-black text-2xl md:text-4xl"
          >
            Démarrer avec WePushX à {city.name}
            <br />
            <span className="text-gradient">en 4 étapes</span>
          </motion.h2>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
          {city.process.map((step, i) => (
            <motion.div
              key={i}
              {...fadeUp(0.06 * i)}
              className="flex gap-5 rounded-2xl p-6"
              style={{ background: '#0a0a0a', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center font-black text-lg flex-shrink-0"
                style={{ background: 'rgba(0,245,255,0.06)', color: '#00F5FF', border: '1px solid rgba(0,245,255,0.12)' }}
              >
                {step.step}
              </div>
              <div>
                <p className="font-semibold mb-2" style={{ color: '#ccc' }}>{step.title}</p>
                <p className="text-sm leading-relaxed" style={{ color: '#666' }}>{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// 8. FAQ
// ─────────────────────────────────────────────────────────────────────────────
function CityFAQ({ city }) {
  const [open, setOpen] = useState(null)

  return (
    <section className="section" style={{ background: '#040404' }}>
      <div className="wrap">
        <div className="text-center mb-14">
          <motion.div {...fadeUp(0)} className="mb-4">
            <Badge>FAQ {city.name}</Badge>
          </motion.div>
          <motion.h2
            {...fadeUp(0.06)}
            className="font-display font-black text-2xl md:text-4xl"
          >
            Questions fréquentes sur le
            <br />
            <span className="text-gradient">marketing digital à {city.name}</span>
          </motion.h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {city.faq.map((item, i) => (
            <motion.div
              key={i}
              {...fadeUp(0.04 * i)}
              className="rounded-2xl overflow-hidden"
              style={{ border: open === i ? '1px solid rgba(0,245,255,0.22)' : '1px solid rgba(255,255,255,0.07)', background: '#0a0a0a' }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left px-6 py-5 flex items-start justify-between gap-4"
              >
                <span className="font-semibold text-base leading-snug" style={{ color: open === i ? '#00F5FF' : '#ccc' }}>
                  {item.q}
                </span>
                <span
                  className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-sm transition-transform"
                  style={{
                    background: open === i ? 'rgba(0,245,255,0.12)' : 'rgba(255,255,255,0.05)',
                    color: open === i ? '#00F5FF' : '#666',
                    transform: open === i ? 'rotate(45deg)' : 'none',
                  }}
                >
                  +
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p className="text-sm leading-relaxed" style={{ color: '#777' }}>{item.a}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// 9. CTA
// ─────────────────────────────────────────────────────────────────────────────
function CityCTA({ city }) {
  return (
    <section className="section" style={{ background: '#000' }}>
      <div className="wrap">
        <motion.div
          {...fadeUp(0)}
          className="max-w-3xl mx-auto text-center rounded-3xl p-10 md:p-14 relative overflow-hidden"
          style={{ background: '#0a0a0a', border: '1px solid rgba(0,245,255,0.15)' }}
        >
          {/* Glow */}
          <div
            className="absolute inset-0 rounded-3xl blur-3xl opacity-5 pointer-events-none"
            style={{ background: 'radial-gradient(circle, #00F5FF 0%, transparent 60%)' }}
          />
          <div className="relative z-10">
            <motion.div {...fadeUp(0.04)} className="mb-5">
              <Badge>📍 {city.name}</Badge>
            </motion.div>
            <motion.h2
              {...fadeUp(0.08)}
              className="font-display font-black text-2xl md:text-4xl mb-4"
            >
              Prêt à dominer le digital
              <br />
              <span className="text-gradient">à {city.name} ?</span>
            </motion.h2>
            <motion.p {...fadeUp(0.14)} className="text-base mb-8" style={{ color: '#666' }}>
              Réservez votre audit gratuit de 30 minutes. Un expert WePushX analyse votre présence digitale à {city.name}, vos concurrents et vous propose un plan d&apos;action concret — sans engagement.
            </motion.p>
            <motion.div {...fadeUp(0.18)} className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Audit gratuit — {city.name}
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"/></svg>
              </Link>
            </motion.div>
            <motion.p {...fadeUp(0.22)} className="mt-6 text-xs" style={{ color: '#333' }}>
              Réponse sous 24h · Sans engagement · Garantie résultats 60 jours
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN EXPORT
// ─────────────────────────────────────────────────────────────────────────────
export default function CityPageTemplate({ city }) {
  return (
    <>
      <CityHero city={city} />
      <CityStats city={city} />
      <CityContext city={city} />
      <CityServices city={city} />
      <CityNeighborhoods city={city} />
      <CityResults city={city} />
      <CityProcess city={city} />
      <CityFAQ city={city} />
      <CityCTA city={city} />
    </>
  )
}
