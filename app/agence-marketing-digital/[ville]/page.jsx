// ── Dynamic city satellite pages ─────────────────────────────────────────────
// URL: /agence-marketing-digital/casablanca
//      /agence-marketing-digital/rabat
//      /agence-marketing-digital/marrakech  …etc
// To add a city: just add it to lib/data/cities.js — no new files needed.

import { notFound } from 'next/navigation'
import { CITIES } from '@/lib/data/cities'
import CityPageTemplate from '@/components/CityPageTemplate'

const BASE = 'https://www.wepushx.com'

// ── Tell Next.js which slugs exist (static generation) ───────────────────────
export async function generateStaticParams() {
  return Object.keys(CITIES).map((key) => ({ ville: CITIES[key].slug }))
}

// ── Dynamic metadata per city ─────────────────────────────────────────────────
export async function generateMetadata({ params }) {
  const { ville } = await params
  const city = Object.values(CITIES).find((c) => c.slug === ville)
  if (!city) return {}
  return {
    title: city.seo.title,
    description: city.seo.description,
    alternates: { canonical: city.url },
    openGraph: {
      title: city.seo.title,
      description: city.seo.description,
      url: city.url,
      type: 'website',
      images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    },
  }
}

// ── JSON-LD builder ───────────────────────────────────────────────────────────
function buildJsonLd(city) {
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: city.jsonLd.breadcrumb.map(({ position, name, item }) => ({
      '@type': 'ListItem', position, name, item,
    })),
  }

  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'ProfessionalService', 'MarketingAgency'],
    '@id': `${city.url}/#business`,
    name: city.jsonLd.localBusiness.name,
    description: city.jsonLd.localBusiness.description,
    url: city.url,
    email: 'contact@wepushx.com',
    logo: { '@type': 'ImageObject', url: `${BASE}/wpx.png`, width: 512, height: 512 },
    image: `${BASE}/og-image.jpg`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: city.jsonLd.localBusiness.addressLocality,
      addressRegion: city.jsonLd.localBusiness.addressRegion,
      addressCountry: city.jsonLd.localBusiness.addressCountry,
      postalCode: '20000',
    },
    areaServed: [
      { '@type': 'City', name: city.name },
      { '@type': 'Country', name: 'Maroc' },
    ],
    priceRange: '$$',
    currenciesAccepted: 'MAD',
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '09:00', closes: '18:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday'], opens: '09:00', closes: '13:00' },
    ],
    contactPoint: [
      { '@type': 'ContactPoint', contactType: 'customer service', email: 'contact@wepushx.com', availableLanguage: ['French', 'Arabic'], areaServed: 'MA' },
      { '@type': 'ContactPoint', contactType: 'sales', url: `${BASE}/contact`, availableLanguage: ['French', 'Arabic'] },
    ],
    sameAs: ['https://www.facebook.com/wepushx', 'https://www.instagram.com/wepushx', 'https://www.linkedin.com/company/wepushx'],
    slogan: 'Résultats garantis en 60 jours ou remboursement',
    foundingDate: '2023',
    parentOrganization: { '@id': `${BASE}/#business` },
  }

  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: city.faq.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }

  return { breadcrumb, localBusiness, faq }
}

// ── Page component ────────────────────────────────────────────────────────────
export default async function CityPage({ params }) {
  const { ville } = await params
  const city = Object.values(CITIES).find((c) => c.slug === ville)

  // Unknown city slug → 404
  if (!city) notFound()

  const { breadcrumb, localBusiness, faq } = buildJsonLd(city)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <CityPageTemplate city={city} />
    </>
  )
}
