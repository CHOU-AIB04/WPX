import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import LenisProvider from '@/components/LenisProvider'
import PageLoader from '@/components/ui/PageLoader'
import MobileCTABar from '@/components/ui/MobileCTABar'
import { jsonLd } from '@/lib/json-ld'
import { Toaster } from '@/components/ui/sonner'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  display: 'swap',
})

const BASE_URL = 'https://www.wepushx.com'

// ── Global structured data — injected into <head> on every page ──────────────

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'WePushX',
  url: BASE_URL,
  description: 'Agence marketing digital au Maroc — Meta Ads, Google Ads, SEO, Sites Web & CRM automation.',
  potentialAction: {
    '@type': 'SearchAction',
    target: { '@type': 'EntryPoint', urlTemplate: `${BASE_URL}/blog?category={search_term_string}` },
    'query-input': 'required name=search_term_string',
  },
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'LocalBusiness', 'ProfessionalService'],
  '@id': `${BASE_URL}/#organization`,
  name: 'WePushX',
  alternateName: 'WePushX Agence Marketing Digital',
  url: BASE_URL,
  logo: {
    '@type': 'ImageObject',
    url: `${BASE_URL}/logo.png`,
    width: 512,
    height: 512,
  },
  image: `${BASE_URL}/og-image.jpg`,
  description: 'WePushX est une agence de marketing digital basée à Casablanca, Maroc. Spécialisée en Meta Ads, Google Ads, SEO, création de sites web, UGC IA et CRM automation pour les PME marocaines. Résultats garantis en 60 jours.',
  foundingDate: '2023',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Casablanca',
    addressLocality: 'Casablanca',
    addressRegion: 'Grand Casablanca',
    addressCountry: 'MA',
  },
  areaServed: [
    { '@type': 'City', name: 'Casablanca' },
    { '@type': 'City', name: 'Rabat' },
    { '@type': 'City', name: 'Marrakech' },
    { '@type': 'City', name: 'Agadir' },
    { '@type': 'City', name: 'Fès' },
    { '@type': 'City', name: 'Tanger' },
    { '@type': 'Country', name: 'Maroc' },
  ],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableLanguage: ['French', 'Arabic'],
      areaServed: 'MA',
      url: `${BASE_URL}/contact`,
    },
  ],
  sameAs: [
    'https://www.facebook.com/wepushx',
    'https://www.instagram.com/wepushx',
    'https://www.linkedin.com/company/wepushx',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Services Marketing Digital',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Meta Ads', description: 'Gestion de campagnes publicitaires Facebook et Instagram pour les PME marocaines.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Google Ads', description: 'Référencement payant Search, Display et YouTube au Maroc.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SEO', description: 'Référencement naturel et SEO local pour les PME marocaines.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Création de site web', description: 'Sites vitrines, landing pages et e-commerce haute performance.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'CRM & Marketing Automation', description: 'Automatisation des séquences email, WhatsApp et SMS.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'UGC IA', description: 'Contenu vidéo et visuel généré par intelligence artificielle.' } },
    ],
  },
  slogan: 'Résultats garantis en 60 jours ou remboursement',
  priceRange: '$$',
}

export const metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'WePushX | Agence Marketing Digital Maroc',
    template: '%s | WePushX',
  },
  description:
    'WePushX est une agence marketing digital au Maroc specialisee en Meta Ads, Google Ads, creation de sites web, SEO, UGC IA et CRM automation. Casablanca — resultats garantis en 60 jours.',
  keywords: [
    'agence marketing digital Maroc',
    'agence digital Casablanca',
    'Meta Ads Maroc',
    'Google Ads Maroc',
    'creation site web Maroc',
    'agence SEO Maroc',
    'UGC IA Maroc',
    'CRM automation Maroc',
    'WePushX',
  ],
  authors: [{ name: 'WePushX', url: BASE_URL }],
  creator: 'WePushX',
  publisher: 'WePushX',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_MA',
    url: BASE_URL,
    siteName: 'WePushX',
    title: 'WePushX | Agence Marketing Digital Maroc',
    description:
      'Transformez votre presence digitale en machine a clients. Meta Ads, Google Ads, Sites Web, SEO, UGC IA & CRM — Casablanca, Rabat, Marrakech.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'WePushX Agence Marketing Digital Maroc' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WePushX | Agence Marketing Digital Maroc',
    description: 'Meta Ads, Google Ads, SEO, Sites Web & CRM au Maroc.',
    images: ['/og-image.jpg'],
  },
  alternates: { canonical: BASE_URL },
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${inter.variable} ${spaceGrotesk.variable} h-full`}>
      <head>
        {/* WebSite schema + SearchAction */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
        {/* Organization + LocalBusiness + services catalog */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
        <link rel="alternate" type="application/rss+xml" title="Blog WePushX" href="/feed.xml" />
        <script src="https://analytics.ahrefs.com/analytics.js" data-key="uT4eAVKql9tbwyfnRNvl8A" async></script>
      </head>
      <body className="min-h-full flex flex-col bg-black antialiased">
        <PageLoader />
        <LenisProvider>
          {/* <div className='m-2 md:m-5 rounded-4xl overflow-hidden bg-black'> */}
          <Header />
          <Toaster />
          <main className="flex-1">{children}</main>
          <Footer />
          {/* </div> */}
          <MobileCTABar />
        </LenisProvider>
      </body>
    </html>
  )
}
