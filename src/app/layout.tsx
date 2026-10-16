import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Inter_Tight, JetBrains_Mono, Montserrat } from "next/font/google";
import Script from "next/script";
import { Cursor } from "@/components/layout/Cursor";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Preloader } from "@/components/layout/Preloader";
import { Providers } from "@/components/layout/Providers";
import { WhatsAppFab } from "@/components/layout/WhatsAppFab";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_URL, keywords, siteGraph } from "@/lib/seo";
import "./globals.css";

const inter = Inter_Tight({ subsets: ["latin"], variable: "--font-inter-tight", display: "swap" });
const serif = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--font-instrument-serif", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains", display: "swap" });
const brand = Montserrat({ subsets: ["latin"], weight: ["700", "800"], variable: "--font-montserrat", display: "swap" });

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

const DESCRIPTION =
  "Agence marketing digital au Maroc : Meta Ads, Google Ads, SEO & GEO, sites web, UGC par IA et CRM WhatsApp pour les PME. Chaque dirham tracé jusqu'au client. Résultats garantis en 60 jours.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "WePushX · Agence marketing digital au Maroc | Meta Ads, Google Ads, SEO",
    template: "%s · WePushX",
  },
  description: DESCRIPTION,
  applicationName: "WePushX",
  keywords,
  authors: [{ name: "WePushX", url: SITE_URL }],
  creator: "WePushX",
  publisher: "WePushX",
  category: "Marketing digital",
  formatDetection: { telephone: false, email: false, address: false },
  openGraph: {
    type: "website",
    locale: "fr_MA",
    siteName: "WePushX",
    url: "/",
    title: "WePushX · Chaque dirham investi devient un client qualifié",
    description: "Agence marketing digital de performance pour les PME marocaines : Meta Ads, Google Ads, SEO, sites web, CRM. Garantie résultats 60 jours.",
  },
  twitter: {
    card: "summary_large_image",
    title: "WePushX · Chaque dirham investi devient un client qualifié",
    description: "Agence marketing digital de performance pour les PME marocaines. Garantie résultats 60 jours.",
  },
  alternates: {
    canonical: "/",
    types: { "application/rss+xml": [{ url: "/feed.xml", title: "WePushX · Offres et nouveautés" }] },
  },
  // version de recette : jamais indexée (NOINDEX=1 sur le projet Vercel de test)
  robots:
    process.env.NOINDEX === "1"
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    other: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION ? { "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION } : undefined,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0610" },
    { media: "(prefers-color-scheme: light)", color: "#f7f3ee" },
  ],
};

// Appliqué avant le premier rendu (pas de flash) : ?theme=light|dark > choix mémorisé > sombre
const themeScript = `(function(){var d=document.documentElement;try{var q=new URLSearchParams(location.search).get('theme');if(q==='light'||q==='dark'){localStorage.setItem('wpx-theme',q)}var t=(q==='light'||q==='dark')?q:localStorage.getItem('wpx-theme');d.dataset.theme=t==='light'?'light':'dark'}catch(e){d.dataset.theme='dark'}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" data-theme="dark" suppressHydrationWarning className={`${inter.variable} ${serif.variable} ${mono.variable} ${brand.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        {GTM_ID && (
          <Script id="gtm" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}
          </Script>
        )}
        <JsonLd data={siteGraph()} />
      </head>
      <body className="grain">
        {GTM_ID && (
          <noscript>
            <iframe src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`} height="0" width="0" style={{ display: "none", visibility: "hidden" }} />
          </noscript>
        )}
        <Providers>
          <Preloader />
          <Cursor />
          <Header />
          <main>{children}</main>
          <Footer />
          <WhatsAppFab />
        </Providers>
      </body>
    </html>
  );
}
