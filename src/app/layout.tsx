import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Inter_Tight, JetBrains_Mono, Montserrat } from "next/font/google";
import Script from "next/script";
import { Cursor } from "@/components/layout/Cursor";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Preloader } from "@/components/layout/Preloader";
import { Providers } from "@/components/layout/Providers";
import { WhatsAppFab } from "@/components/layout/WhatsAppFab";
import "./globals.css";

const inter = Inter_Tight({ subsets: ["latin"], variable: "--font-inter-tight", display: "swap" });
const serif = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--font-instrument-serif", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains", display: "swap" });
const brand = Montserrat({ subsets: ["latin"], weight: ["700", "800"], variable: "--font-montserrat", display: "swap" });

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://wepushx.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "WePushX · Agence marketing digital au Maroc | Meta Ads, Google Ads, SEO",
    template: "%s · WePushX",
  },
  description:
    "WePushX transforme chaque dirham investi en clients qualifiés : Meta Ads, Google Ads, sites web, SEO, UGC par IA et CRM WhatsApp pour les PME marocaines. Résultats garantis en 60 jours.",
  openGraph: {
    type: "website",
    locale: "fr_MA",
    siteName: "WePushX",
    title: "WePushX · Chaque dirham investi devient un client qualifié",
    description: "Agence de performance pour les PME marocaines. Garantie résultats 60 jours.",
  },
  alternates: { canonical: "/" },
  // version de recette : jamais indexée (NOINDEX=1 sur le projet Vercel de test)
  robots: process.env.NOINDEX === "1" ? { index: false, follow: false } : undefined,
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0610" },
    { media: "(prefers-color-scheme: light)", color: "#f7f3ee" },
  ],
};

// Appliqué avant le premier rendu (pas de flash) : ?theme=light|dark > choix mémorisé > sombre
const themeScript = `(function(){var d=document.documentElement;try{var q=new URLSearchParams(location.search).get('theme');if(q==='light'||q==='dark'){localStorage.setItem('wpx-theme',q)}var t=(q==='light'||q==='dark')?q:localStorage.getItem('wpx-theme');d.dataset.theme=t==='light'?'light':'dark'}catch(e){d.dataset.theme='dark'}})();`;

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "WePushX",
  url: SITE_URL,
  email: "contact@wepushx.com",
  areaServed: { "@type": "Country", name: "Maroc" },
  description: "Agence marketing digital : Meta Ads, Google Ads, SEO, sites web, CRM et automation.",
};

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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
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
