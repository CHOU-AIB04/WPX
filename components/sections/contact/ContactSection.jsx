'use client'
import { useState } from 'react'
import { motion } from 'motion/react'
import { Mail, Phone, MapPin, Clock, ArrowRight, CheckCircle, Shield } from 'lucide-react'
import { contactInfo, serviceOptions, budgets, guaranteePoints } from '@/lib/data/contact'
import { toast } from 'sonner'
import axios from 'axios'

const ICONS = { Mail, Phone, MapPin, Clock }

// ── Validation functions ──────────────────────────────────────────────────────

function validateEmail(email) {
  if (!email.trim()) return "L'email est requis"
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
  if (!re.test(email.trim())) return 'Email invalide (ex: nom@domaine.com)'
  return null
}

function validatePhone(phone) {
  if (!phone.trim()) return 'Le téléphone / WhatsApp est requis'
  const cleaned = phone.replace(/[\s\-\.\(\)]/g, '')
  if (!/^\+?[0-9]{8,15}$/.test(cleaned)) return 'Numéro invalide (ex: +212 6 XX XX XX XX)'
  return null
}

function validateForm(form) {
  const errors = {}
  if (!form.name.trim())                    errors.name    = 'Le nom complet est requis'
  const emailErr = validateEmail(form.email)
  if (emailErr)                             errors.email   = emailErr
  const phoneErr = validatePhone(form.phone)
  if (phoneErr)                             errors.phone   = phoneErr
  if (!form.company.trim())                 errors.company = "Le nom de l'entreprise est requis"
  if (!form.service)                        errors.service = 'Veuillez sélectionner un service'
  if (!form.budget)                         errors.budget  = 'Veuillez sélectionner un budget'
  if (!form.message.trim())                 errors.message = 'Le message est requis'
  else if (form.message.trim().length < 10) errors.message = 'Message trop court (min. 10 caractères)'
  return errors
}

// ── Inline error message ──────────────────────────────────────────────────────
function FieldError({ msg }) {
  if (!msg) return null
  return (
    <p className="text-xs mt-0.5" style={{ color: '#f87171' }}>
      {msg}
    </p>
  )
}

// ── Shared style helpers ──────────────────────────────────────────────────────
const BASE_INPUT = 'rgba(255,255,255,0.04)'
function borderColor(hasError) {
  return hasError ? 'rgba(248,113,113,0.5)' : 'rgba(255,255,255,0.1)'
}

export default function ContactSection() {
  const [form, setForm]       = useState({ name: '', email: '', phone: '', company: '', service: '', budget: '', message: '' })
  const [errors, setErrors]   = useState({})
  const [sent, setSent]       = useState(false)
  const [sending, setSending] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    // Clear error for this field as soon as user starts correcting
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: null }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const validationErrors = validateForm(form)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      toast.error('Veuillez corriger les erreurs avant d\'envoyer')
      return
    }

    setSending(true)
    try {
      await axios.post(
        'https://automate.wepushx.com/webhook-test/9aedabef-c6a2-477a-99e1-8340fc6fd3a3',
        {
          name:     form.name,
          email:    form.email,
          phone:    form.phone,
          company:  form.company,
          services: form.service,
          budget:   form.budget,
          message:  form.message,
        }
      )
    } catch (_) {
      // webhook best-effort — show success regardless
    }
    await new Promise((r) => setTimeout(r, 800))
    setSending(false)
    setSent(true)
  }

  // Focus / blur handlers that respect the error state
  const onFocus = (e) => {
    e.currentTarget.style.borderColor = 'rgba(0,245,255,0.4)'
    e.currentTarget.style.boxShadow   = '0 0 0 3px rgba(0,245,255,0.08)'
  }
  const onBlur = (field) => (e) => {
    e.currentTarget.style.borderColor = borderColor(!!errors[field])
    e.currentTarget.style.boxShadow   = 'none'
  }

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
          <span className="badge mb-4">Audit Gratuit</span>
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

          {/* Form — 3 cols */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3"
          >
            {sent ? (
              <div
                className="flex flex-col items-center justify-center gap-5 text-center rounded-2xl p-12"
                style={{
                  background: 'rgba(0,245,255,0.05)',
                  border: '1px solid rgba(0,245,255,0.25)',
                  minHeight: '400px',
                }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ background: 'rgba(0,245,255,0.12)', border: '1px solid rgba(0,245,255,0.3)' }}
                >
                  <CheckCircle size={32} style={{ color: '#00F5FF' }} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Message envoyé !</h3>
                  <p style={{ color: '#888' }}>
                    On vous répond sous 24h ouvrées.<br />Préparez-vous à passer au niveau supérieur.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setSent(false)
                    setForm({ name: '', email: '', phone: '', company: '', service: '', budget: '', message: '' })
                    setErrors({})
                  }}
                  className="btn-outline text-sm"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl p-8 flex flex-col gap-5"
                style={{ background: 'rgba(10,10,10,0.8)', border: '1px solid rgba(255,255,255,0.07)' }}
                noValidate
              >
                {/* Row 1 — Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium" style={{ color: '#ccc' }}>Nom complet *</label>
                    <input
                      type="text" name="name" required
                      value={form.name} onChange={handleChange}
                      placeholder="Ahmed Benali"
                      className="rounded-xl px-4 py-3 text-sm text-white outline-none transition-all duration-200 placeholder:text-[#444]"
                      style={{ background: BASE_INPUT, border: `1px solid ${borderColor(!!errors.name)}` }}
                      onFocus={onFocus}
                      onBlur={onBlur('name')}
                    />
                    <FieldError msg={errors.name} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium" style={{ color: '#ccc' }}>Email professionnel *</label>
                    <input
                      type="email" name="email" required
                      value={form.email} onChange={handleChange}
                      placeholder="ahmed@monentreprise.ma"
                      className="rounded-xl px-4 py-3 text-sm text-white outline-none transition-all duration-200 placeholder:text-[#444]"
                      style={{ background: BASE_INPUT, border: `1px solid ${borderColor(!!errors.email)}` }}
                      onFocus={onFocus}
                      onBlur={onBlur('email')}
                    />
                    <FieldError msg={errors.email} />
                  </div>
                </div>

                {/* Row 2 — Phone + Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium" style={{ color: '#ccc' }}>WhatsApp / Téléphone *</label>
                    <input
                      type="tel" name="phone" required
                      value={form.phone} onChange={handleChange}
                      placeholder="+212 6 XX XX XX XX"
                      className="rounded-xl px-4 py-3 text-sm text-white outline-none transition-all duration-200 placeholder:text-[#444]"
                      style={{ background: BASE_INPUT, border: `1px solid ${borderColor(!!errors.phone)}` }}
                      onFocus={onFocus}
                      onBlur={onBlur('phone')}
                    />
                    <FieldError msg={errors.phone} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium" style={{ color: '#ccc' }}>Entreprise / Secteur *</label>
                    <input
                      type="text" name="company" required
                      value={form.company} onChange={handleChange}
                      placeholder="Mon Entreprise Maroc"
                      className="rounded-xl px-4 py-3 text-sm text-white outline-none transition-all duration-200 placeholder:text-[#444]"
                      style={{ background: BASE_INPUT, border: `1px solid ${borderColor(!!errors.company)}` }}
                      onFocus={onFocus}
                      onBlur={onBlur('company')}
                    />
                    <FieldError msg={errors.company} />
                  </div>
                </div>

                {/* Row 3 — Selects */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium" style={{ color: '#ccc' }}>Service recherché *</label>
                    <select
                      name="service" required
                      value={form.service} onChange={handleChange}
                      className="rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200 appearance-none cursor-pointer"
                      style={{
                        background: BASE_INPUT,
                        border: `1px solid ${borderColor(!!errors.service)}`,
                        color: form.service ? '#fff' : '#444',
                      }}
                      onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(0,245,255,0.4)' }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = borderColor(!!errors.service) }}
                    >
                      {serviceOptions.map((o) => (
                        <option key={o.value} value={o.value} style={{ background: '#111', color: '#fff' }}>{o.label}</option>
                      ))}
                    </select>
                    <FieldError msg={errors.service} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium" style={{ color: '#ccc' }}>Budget mensuel *</label>
                    <select
                      name="budget" required
                      value={form.budget} onChange={handleChange}
                      className="rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200 appearance-none cursor-pointer"
                      style={{
                        background: BASE_INPUT,
                        border: `1px solid ${borderColor(!!errors.budget)}`,
                        color: form.budget ? '#fff' : '#444',
                      }}
                      onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(0,245,255,0.4)' }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = borderColor(!!errors.budget) }}
                    >
                      {budgets.map((b) => (
                        <option key={b.value} value={b.value} style={{ background: '#111', color: '#fff' }}>{b.label}</option>
                      ))}
                    </select>
                    <FieldError msg={errors.budget} />
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium" style={{ color: '#ccc' }}>Votre message *</label>
                  <textarea
                    name="message" rows={4} required
                    value={form.message} onChange={handleChange}
                    placeholder="Décrivez votre projet, vos objectifs, vos problèmes actuels…"
                    className="rounded-xl px-4 py-3 text-sm text-white outline-none resize-none transition-all duration-200 placeholder:text-[#444]"
                    style={{ background: BASE_INPUT, border: `1px solid ${borderColor(!!errors.message)}` }}
                    onFocus={onFocus}
                    onBlur={onBlur('message')}
                  />
                  <FieldError msg={errors.message} />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="btn-primary justify-center py-4 text-base disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {sending ? (
                    <>
                      <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                      Envoi en cours…
                    </>
                  ) : (
                    <>Envoyer ma demande d&apos;audit <ArrowRight size={18} /></>
                  )}
                </button>

                <p className="text-center text-xs" style={{ color: '#444' }}>
                  Vos données sont confidentielles. Réponse sous 24h ouvrées.
                </p>
              </form>
            )}
          </motion.div>

          {/* Sidebar — 2 cols */}
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
                { num: '03', text: "Appel d'audit de 30 min (gratuit)" },
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
    </section>
  )
}
