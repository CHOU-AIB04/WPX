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
  alternates: {
    canonical: BASE_URL,
    languages: {
      'fr':    BASE_URL,
      'fr-MA': BASE_URL,
      'x-default': BASE_URL,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${inter.variable} ${spaceGrotesk.variable} h-full`}>
      <head>
        {/* Unified entity graph — Organization, LocalBusiness, OfferCatalog, WebSite */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {/* Speakable — signals to voice assistants & AI which content to read aloud */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          speakable: {
            '@type': 'SpeakableSpecification',
            cssSelector: ['h1', 'h2', '.badge', '[data-speakable]'],
          },
          url: BASE_URL,
        }) }} />
        {/* hreflang self-referencing links */}
        <link rel="alternate" hrefLang="fr"      href={BASE_URL} />
        <link rel="alternate" hrefLang="fr-MA"   href={BASE_URL} />
        <link rel="alternate" hrefLang="x-default" href={BASE_URL} />
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
