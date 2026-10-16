import type { Metadata } from "next";
import { site } from "./content";

/**
 * Tout ce qui sert au référencement (SEO), aux moteurs de réponse (AEO) et
 * aux moteurs génératifs (GEO) part d'ici : URL canonique, entité
 * « organisation » partagée par toutes les pages, fabriques de JSON-LD et de
 * métadonnées. Une page n'écrit que son titre, sa description et son chemin.
 */

/** URL publique, sans slash final. Jamais le www : il redirige en 301. */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://wepushx.com").replace(/\/$/, "");

export const abs = (path: string) => (path.startsWith("http") ? path : `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`);

/**
 * Date de dernière mise à jour du contenu, reprise dans le sitemap, le flux
 * RSS et llms.txt. À avancer quand le contenu change vraiment : Google ignore
 * les `lastmod` qui bougent à chaque build sans que la page ne change.
 */
export const CONTENT_UPDATED = "2026-10-09";

/** Identifiants stables : chaque page renvoie vers la même entité. */
export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export const tagline = "Agence marketing digital au Maroc : Meta Ads, Google Ads, SEO & GEO, sites web, UGC par IA et CRM all-in-one.";

export const keywords = [
  "agence marketing digital Maroc",
  "agence marketing digital Casablanca",
  "agence digitale Maroc",
  "agence Meta Ads Maroc",
  "agence Google Ads Maroc",
  "agence SEO Maroc",
  "GEO référencement IA",
  "création site web Maroc",
  "landing page Maroc",
  "UGC IA",
  "gestion réseaux sociaux Maroc",
  "CRM WhatsApp Maroc",
  "génération de leads PME",
  "agence publicité Facebook Instagram Maroc",
];

/** Villes où nous ciblons nos campagnes et le SEO local. */
export const cities = ["Casablanca", "Rabat", "Marrakech", "Tanger", "Fès", "Agadir"];

/**
 * Profils officiels de la marque (LinkedIn, Instagram, Facebook, Google
 * Business Profile…). Les ajouter ici : `sameAs` relie le site à ces profils
 * dans le Knowledge Graph et dans les réponses des IA.
 */
export const sameAs: string[] = [];

export const logoUrl = abs("/logo.png");

/* ───────────────────────────────────────────────────────── métadonnées */

type PageMeta = {
  title: string;
  description: string;
  /** Chemin de la page, ex. « /tarifs ». */
  path: string;
  /** Titre plus accrocheur pour les partages, sinon `title`. */
  socialTitle?: string;
  /** Image de partage propre à la page, sinon l'image par défaut. */
  image?: { url: string; alt: string };
  noindex?: boolean;
};

/**
 * Image de partage par défaut (src/app/opengraph-image.tsx). Une page qui
 * redéfinit `openGraph` perd l'image héritée, et une image passée ici prime
 * sur un fichier opengraph-image : d'où l'option `image`.
 */
const defaultImage = { url: "/opengraph-image", width: 1200, height: 630, alt: "WePushX, agence marketing digital au Maroc" };

/**
 * Métadonnées complètes d'une page. Next fusionne `openGraph` page par page
 * sans profondeur : une page qui n'en redonne qu'une partie perd `siteName`,
 * `locale` et `url`. D'où cette fabrique.
 */
export function pageMeta({ title, description, path, socialTitle, image, noindex }: PageMeta): Metadata {
  const shared = socialTitle ?? title;
  const img = image ? { ...image, width: 1200, height: 630 } : defaultImage;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "fr_MA",
      siteName: site.name,
      url: path,
      title: shared,
      description,
      images: [img],
    },
    twitter: { card: "summary_large_image", title: shared, description, images: [img] },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
  };
}

/* ───────────────────────────────────────────────────────────── JSON-LD */

const address = {
  "@type": "PostalAddress",
  addressLocality: "Casablanca",
  addressRegion: "Casablanca-Settat",
  addressCountry: "MA",
};

/** Organisation + site web, injectés une seule fois dans le layout. */
export function siteGraph() {
  const phone = site.whatsapp ? `+${site.whatsapp.replace(/\D/g, "")}` : undefined;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "ProfessionalService"],
        "@id": ORG_ID,
        name: site.name,
        alternateName: "WePushX Agency",
        url: `${SITE_URL}/`,
        logo: { "@type": "ImageObject", url: logoUrl, width: 512, height: 512 },
        image: logoUrl,
        email: site.email,
        ...(phone ? { telephone: phone } : {}),
        description: tagline,
        slogan: "Chaque dirham investi devient un client qualifié.",
        address,
        areaServed: [
          { "@type": "Country", name: "Maroc" },
          ...cities.map((c) => ({ "@type": "City", name: c })),
        ],
        priceRange: "$$",
        currenciesAccepted: "MAD",
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "09:00",
          closes: "18:00",
        },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "sales",
          email: site.email,
          ...(phone ? { telephone: phone } : {}),
          areaServed: "MA",
          availableLanguage: ["French", "Arabic", "English"],
        },
        knowsAbout: [
          "Marketing digital",
          "Meta Ads",
          "Facebook Ads",
          "Instagram Ads",
          "Google Ads",
          "Performance Max",
          "SEO",
          "Generative Engine Optimization (GEO)",
          "Création de sites web",
          "Landing pages",
          "UGC par IA",
          "Gestion des réseaux sociaux",
          "CRM",
          "Automatisation marketing",
          "WhatsApp Business",
          "Agents vocaux IA",
        ],
        ...(sameAs.length ? { sameAs } : {}),
      },
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: `${SITE_URL}/`,
        name: site.name,
        description: tagline,
        inLanguage: "fr-MA",
        publisher: { "@id": ORG_ID },
      },
    ],
  };
}

export type Crumb = { name: string; path: string };

export const breadcrumbLd = (crumbs: Crumb[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [{ name: "Accueil", path: "/" }, ...crumbs].map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: c.name,
    item: abs(c.path),
  })),
});

export const faqLd = (faq: { q: string; a: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

/** Page web rattachée au site et à l'organisation. */
export const webPageLd = ({
  path,
  name,
  description,
  type = "WebPage",
}: {
  path: string;
  name: string;
  description: string;
  type?: "WebPage" | "CollectionPage" | "ContactPage" | "AboutPage";
}) => ({
  "@context": "https://schema.org",
  "@type": type,
  "@id": `${abs(path)}#webpage`,
  url: abs(path),
  name,
  description,
  inLanguage: "fr-MA",
  isPartOf: { "@id": WEBSITE_ID },
  about: { "@id": ORG_ID },
  dateModified: CONTENT_UPDATED,
});

export const itemListLd = (items: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: items.map((it, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: it.name,
    url: abs(it.path),
  })),
});
