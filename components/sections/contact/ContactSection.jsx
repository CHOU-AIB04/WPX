'use client'
import { motion } from 'motion/react'
import Script from 'next/script'
import { Mail, Phone, MapPin, Clock, CheckCircle, Shield } from 'lucide-react'
import { contactInfo, guaranteePoints } from '@/lib/data/contact'

const ICONS = { Mail, Phone, MapPin, Clock }

export default function ContactSection() {
  return (
    <section className="section" style={{ background: '#000' }}>
      <div className="wrap">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto mb-14 pt-20 md:pt-0"
        >
          <span className="badge mb-4">Audit</span>
          <h1
            className="text-4xl md:text-6xl font-bold leading-tight mb-4"
            style={{ fontFamily: 'var(--font-space, sans-serif)' }}
          >
            Parlons de votre{' '}
            <span className="text-gradient">croissance</span>
          </h1>
          <p className="text-base leading-relaxed" style={{ color: '#666' }}>
            30 minutes pour analyser votre présence digitale et vous dire exactement
            comment générer plus de clients. Sans engagement.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

          {/* ── Iframe form — 3 cols ─────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3"
          >
            <div
              className="rounded-2xl overflow-hidden relative"
              style={{
                background: 'rgba(10,10,10,0.8)',
                border: '1px solid rgba(255,255,255,0.07)',
                minHeight: '560px',
              }}
            >
              {/* Top accent line */}
              <div
                className="h-px w-full"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(0,245,255,0.5), transparent)' }}
              />

              {/* Subtle inner glow */}
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 blur-3xl pointer-events-none opacity-5"
                style={{ background: '#00F5FF' }}
              />

              {/* Iframe wrapper */}
              <div className="relative z-10 p-2" style={{ minHeight: '556px' }}>
                <iframe
                  src="https://api.wepushx.com/widget/form/PMUIGY0ecQCOwmEtIIwO"
                  style={{ width: '100%', height: '536px', border: 'none', borderRadius: '12px', display: 'block' }}
                  id="inline-PMUIGY0ecQCOwmEtIIwO"
                  data-layout={'{"id":"INLINE"}'}
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="WPX Contact Form"
                  data-height="536"
                  data-layout-iframe-id="inline-PMUIGY0ecQCOwmEtIIwO"
                  data-form-id="PMUIGY0ecQCOwmEtIIwO"
                  title="WPX Contact Form"
                />
              </div>

              {/* Bottom note */}
              <p className="text-center text-xs pb-4" style={{ color: '#333' }}>
                Vos données sont confidentielles · Réponse sous 24h
              </p>
            </div>
          </motion.div>

          {/* ── Sidebar — 2 cols ─────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            {/* Contact info */}
            <div
              className="rounded-2xl p-6 flex flex-col gap-4"
              style={{ background: 'rgba(10,10,10,0.8)', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              <h3 className="font-semibold text-white text-base">Nous contacter directement</h3>
              {contactInfo.map((item) => {
                const Icon = ICONS[item.icon]
                const content = (
                  <div className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: 'rgba(0,245,255,0.08)', border: '1px solid rgba(0,245,255,0.15)' }}
                    >
                      {Icon && <Icon size={16} style={{ color: '#00F5FF' }} />}
                    </div>
                    <div>
                      <p className="text-xs mb-0.5" style={{ color: '#555' }}>{item.label}</p>
                      <p className="text-sm font-medium text-white">{item.value}</p>
                    </div>
                  </div>
                )
                return item.href ? (
                  <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer"
                    className="transition-opacity hover:opacity-80"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={item.label}>{content}</div>
                )
              })}
            </div>

            {/* Guarantee */}
            <div
              className="rounded-2xl p-6 flex flex-col gap-4"
              style={{
                background: 'linear-gradient(135deg, rgba(0,245,255,0.06) 0%, rgba(0,245,255,0.02) 100%)',
                border: '1px solid rgba(0,245,255,0.2)',
              }}
            >
              <div className="flex items-center gap-2">
                <Shield size={18} style={{ color: '#00F5FF' }} />
                <h3 className="font-semibold text-white text-sm">Nos engagements</h3>
              </div>
              {guaranteePoints.map((point) => (
                <div key={point} className="flex items-start gap-2.5">
                  <CheckCircle size={14} className="shrink-0 mt-0.5" style={{ color: '#00F5FF' }} />
                  <span className="text-sm" style={{ color: '#888' }}>{point}</span>
                </div>
              ))}
            </div>

            {/* Process teaser */}
            <div
              className="rounded-2xl p-6"
              style={{ background: 'rgba(10,10,10,0.8)', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              <h3 className="font-semibold text-white text-sm mb-4">Comment ça se passe ?</h3>
              {[
                { num: '01', text: 'Vous envoyez votre demande' },
                { num: '02', text: 'On vous répond sous 24h' },
                { num: '03', text: 'Appel de consultation de 30 min' },
                { num: '04', text: 'Proposition personnalisée avec ROI' },
              ].map((step) => (
                <div key={step.num} className="flex items-center gap-3 py-2.5"
                  style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}
                >
                  <span
                    className="text-xs font-bold tabular-nums shrink-0"
                    style={{ color: '#00F5FF', fontFamily: 'var(--font-space, monospace)' }}
                  >
                    {step.num}
                  </span>
                  <span className="text-sm" style={{ color: '#888' }}>{step.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>

      {/* CRM form embed script */}
      <Script
        src="https://api.wepushx.com/js/form_embed.js"
        strategy="lazyOnload"
      />
    </section>
  )
}
