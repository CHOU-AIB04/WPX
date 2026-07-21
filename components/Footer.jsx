"use client"
import Link from 'next/link'
import { MapPin, Mail, Phone, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const services = [
  'Meta Ads',
  'Google Ads',
  'Création de Sites Web',
  'Landing Pages optimisées',
  'SEO & GEO',
  'UGC par Intelligence Artificielle',
  'CRM & Marketing Automation',
  'Community Management',
]

const zones = ['Tout le Maroc', 'Grandes villes', 'PME & startups', 'Secteurs variés']

export default function Footer() {
  const year = new Date().getFullYear()
  const route = useRouter()

  return (
    <footer
      className="relative border-t pt-10 pb-10"
      style={{ borderColor: 'rgba(255,255,255,0.06)', background: '#040404' }}
      aria-label="Pied de page WePushX"
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
            <Link href="/" aria-label="WePushX Accueil">
              <Image src={"/wpx.png"} width={100} height={100} alt='wepushx Agence digital' className='w-[150px] ' />
            </Link>
            <p className="mt-4 text-sm leading-relaxed" style={{ color: '#666' }}>
              L'agence marketing digital qui transforme chaque dirham investi en clients qualifiés.
              Présents dans tout le Maroc, nous accompagnons les PME ambitieuses vers leur croissance digitale.
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
              {/* <a
                href="https://wa.me/212600000000"
                className="flex items-center gap-2 text-sm transition-colors hover:text-[#00F5FF]"
                style={{ color: '#888' }}
                target="_blank" rel="noopener noreferrer"
              >
                <Phone size={14} style={{ color: '#00F5FF' }} />
                +212 6 00 00 00 00
              </a> */}
              <div className="flex items-center gap-2 text-sm" style={{ color: '#888' }}>
                <MapPin size={14} style={{ color: '#00F5FF' }} />
                30 N Gould St Ste N Sheridan, WY, 82801 USA
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: '#fff' }}>
              Services
            </h3>
            <ul className="flex flex-col gap-2">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
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

          {/* Zones */}
          {/* <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: '#fff' }}>
              Zones d&apos;intervention
            </h3>
            <ul className="flex flex-col gap-2">
              {zones.map((zone) => (
                <li key={zone} className="flex items-center gap-1.5 text-sm" style={{ color: '#666' }}>
                  <MapPin size={12} style={{ color: '#00F5FF' }} />
                  {zone}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <h3 className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: '#fff' }}>
                Liens
              </h3>
              <ul className="flex flex-col gap-2">
                {[
                  { href: '/', label: 'Accueil' },
                  { href: '/services', label: 'Nos Services' },
                  { href: '/contact', label: 'Contact & Devis' },
                ].map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm flex items-center gap-1.5 transition-colors hover:text-[#00F5FF]"
                      style={{ color: '#666' }}
                    >
                      <ArrowRight size={12} style={{ color: '#00F5FF' }} />
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div> */}

          {/* CTA block */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: '#fff' }}>
              Prêt à scaler ?
            </h3>
            <p className="text-sm leading-relaxed mb-5" style={{ color: '#666' }}>
              Audit de 30 min — on analyse votre présence digitale et identifie exactement où vous perdez de l&apos;argent.
            </p>
            <div
              onClick={()=>{route.push("/contact"),window.scrollTo({top:100,behavior:"smooth"})}}
              className="btn-primary text-sm"
            >
              Réserver mon Audit
            </div>
            <p className="mt-4 text-xs" style={{ color: '#444' }}>
              ✦ Garantie remboursement 60 jours
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-14 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)', color: '#444' }}
        >
          <p>© {year} WePushX. Tous droits réservés. Agence Marketing Digital Maroc.</p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link href="/politique-de-confidentialite" className="transition-colors hover:text-white" style={{ color: '#444' }}>
              Politique de confidentialité
            </Link>
            <Link href="/mentions-legales" className="transition-colors hover:text-white" style={{ color: '#444' }}>
              Mentions légales & CGU
            </Link>
            <Link href="/cgv" className="transition-colors hover:text-white" style={{ color: '#444' }}>
              CGV
            </Link>
            <Link href="/contact" className="transition-colors hover:text-white" style={{ color: '#444' }}>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
