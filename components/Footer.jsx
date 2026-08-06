"use client"
import Link from 'next/link'
import { MapPin, Mail, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useLocale } from '@/lib/locale-context'

const servicesList = [
  'Meta Ads',
  'Google Ads',
  'Web Design',
  'Landing Pages',
  'SEO & GEO',
  'AI UGC Videos',
  'CRM & Automation',
  'Community Management',
]

export default function Footer() {
  const year = new Date().getFullYear()
  const route = useRouter()
  const { locale, dict } = useLocale()

  const f = dict?.footer || {}
  const prefix = locale === 'fr' ? '' : `/${locale}`
  const contactHref = `${prefix}/contact`
  const servicesHref = `${prefix}/services`

  return (
    <footer
      className="relative border-t pt-10 pb-10"
      style={{ borderColor: 'rgba(255,255,255,0.06)', background: '#040404' }}
      aria-label="Footer WePushX"
    >
      {/* Top glow line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(0,245,255,0.4), transparent)' }}
      />

      <div className="wrap py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href={prefix + '/'} aria-label="WePushX Home">
              <Image src={"/wpx.png"} width={100} height={100} alt='WePushX Digital Marketing Agency' className='w-[150px]' />
            </Link>
            <p className="mt-4 text-sm leading-relaxed" style={{ color: '#666' }}>
              {f.tagline || "L'agence marketing digital qui transforme chaque investissement en clients qualifiés."}
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <a
                href="mailto:contact@wepushx.com"
                className="flex items-center gap-2 text-sm transition-colors hover:text-[#00F5FF]"
                style={{ color: '#888' }}
              >
                <Mail size={14} style={{ color: '#00F5FF' }} />
                contact@wepushx.com
              </a>
              <div className="flex items-center gap-2 text-sm" style={{ color: '#888' }}>
                <MapPin size={14} style={{ color: '#00F5FF' }} />
                30 N Gould St Ste N, Sheridan, WY 82801 USA
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: '#fff' }}>
              {f.services_title || 'Services'}
            </h3>
            <ul className="flex flex-col gap-2">
              {servicesList.map((s) => (
                <li key={s}>
                  <Link
                    href={servicesHref}
                    className="text-sm flex items-center gap-1.5 transition-colors hover:text-[#00F5FF]"
                    style={{ color: '#666' }}
                  >
                    <ArrowRight size={12} style={{ color: '#00F5FF' }} />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA block */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: '#fff' }}>
              {f.ready_title || 'Prêt à scaler ?'}
            </h3>
            <p className="text-sm leading-relaxed mb-5" style={{ color: '#666' }}>
              {f.ready_text || "Audit de 30 min — on analyse votre présence digitale et identifie exactement où vous perdez de l'argent."}
            </p>
            <div
              onClick={() => { route.push(contactHref); window.scrollTo({ top: 100, behavior: 'smooth' }) }}
              className="btn-primary text-sm cursor-pointer"
            >
              {f.cta || 'Réserver mon Audit'}
            </div>
            <p className="mt-4 text-xs" style={{ color: '#444' }}>
              {f.guarantee_note || '✦ Garantie remboursement 60 jours'}
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-14 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)', color: '#444' }}
        >
          <p>© {year} WePushX. {f.copyright_suffix || 'Tous droits réservés. Agence Marketing Digital.'}</p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link href="/politique-de-confidentialite" className="transition-colors hover:text-white" style={{ color: '#444' }}>
              {f.link_privacy || 'Politique de confidentialité'}
            </Link>
            <Link href="/mentions-legales" className="transition-colors hover:text-white" style={{ color: '#444' }}>
              {f.link_legal || 'Mentions légales & CGU'}
            </Link>
            <Link href="/cgv" className="transition-colors hover:text-white" style={{ color: '#444' }}>
              {f.link_cgv || 'CGV'}
            </Link>
            <Link href={contactHref} className="transition-colors hover:text-white" style={{ color: '#444' }}>
              {f.link_contact || 'Contact'}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
