import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import { headers } from 'next/headers'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import LenisProvider from '@/components/LenisProvider'
import PageLoader from '@/components/ui/PageLoader'
import MobileCTABar from '@/components/ui/MobileCTABar'
import { jsonLd } from '@/lib/json-ld'
import { Toaster } from '@/components/ui/sonner'
import { getDictionary } from '@/lib/i18n'
import { LocaleProvider } from '@/lib/locale-context'

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
    default: 'WePushX | Digital Marketing Agency',
    template: '%s | WePushX',
  },
  description:
    'WePushX — Digital marketing agency. Meta Ads, Google Ads, web design, SEO, AI UGC & CRM automation. Results guaranteed in 60 days.',
  keywords: [
    'digital marketing agency',
    'Meta Ads',
    'Google Ads',
    'web design',
    'SEO agency',
    'AI UGC',
    'CRM automation',
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
    title: 'WePushX | Digital Marketing Agency',
    description:
      'Meta Ads, Google Ads, Web Design, SEO, AI UGC & CRM — Results guaranteed in 60 days.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'WePushX Digital Marketing Agency' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WePushX | Digital Marketing Agency',
    description: 'Meta Ads, Google Ads, SEO, Web Design & CRM.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: BASE_URL,
    languages: {
      'fr':        BASE_URL,
      'en':        `${BASE_URL}/en`,
      'es':        `${BASE_URL}/es`,
      'x-default': BASE_URL,
    },
  },
}

export default async function RootLayout({ children }) {
  // Preload ALL locale dicts so the client-side LocaleProvider can switch
  // reactively via usePathname() without a server round-trip.
  // (Next.js layouts are persistent — they don't re-execute on client nav.)
  const [dictFr, dictEn, dictEs] = await Promise.all([
    getDictionary('fr'),
    getDictionary('en'),
    getDictionary('es'),
  ])
  const dicts = { fr: dictFr, en: dictEn, es: dictEs }

  // Still read x-locale for the <html lang> attribute on first SSR render
  const headersList = await headers()
  const initialLocale = headersList.get('x-locale') || 'fr'

  return (
    <html lang={initialLocale} className={`${inter.variable} ${spaceGrotesk.variable} h-full`}>
      <head>
        {/* Unified entity graph — Organization, LocalBusiness, OfferCatalog, WebSite */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {/* Speakable spec */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          speakable: {
            '@type': 'SpeakableSpecification',
            cssSelector: ['h1', 'h2', '.badge', '[data-speakable]'],
          },
          url: BASE_URL,
        }) }} />
        {/* hreflang */}
        <link rel="alternate" hrefLang="fr"      href={BASE_URL} />
        <link rel="alternate" hrefLang="en"      href={`${BASE_URL}/en`} />
        <link rel="alternate" hrefLang="es"      href={`${BASE_URL}/es`} />
        <link rel="alternate" hrefLang="x-default" href={BASE_URL} />
        <link rel="alternate" type="application/rss+xml" title="Blog WePushX" href="/feed.xml" />
        <script src="https://analytics.ahrefs.com/analytics.js" data-key="uT4eAVKql9tbwyfnRNvl8A" async></script>
      </head>
      <body className="min-h-full flex flex-col bg-black antialiased">
        <LocaleProvider dicts={dicts}>
          <PageLoader />
          <LenisProvider>
            <Header />
            <Toaster />
            <main className="flex-1">{children}</main>
            <Footer />
            <MobileCTABar />
          </LenisProvider>
        </LocaleProvider>
      </body>
    </html>
  )
}
