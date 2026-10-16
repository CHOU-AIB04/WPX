import type { MetadataRoute } from "next";
import { allOffers, offerHref } from "@/lib/catalog";
import { CONTENT_UPDATED, abs } from "@/lib/seo";

/**
 * `lastModified` vient de CONTENT_UPDATED, pas de `new Date()` : une date qui
 * change à chaque build sans que la page change apprend à Google à ignorer
 * notre `lastmod`.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = CONTENT_UPDATED;

  const statics: MetadataRoute.Sitemap = [
    { url: abs("/"), lastModified, changeFrequency: "weekly", priority: 1 },
    { url: abs("/services"), lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: abs("/plateforme"), lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: abs("/tarifs"), lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: abs("/offres"), lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: abs("/presentation"), lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: abs("/contact"), lastModified, changeFrequency: "yearly", priority: 0.7 },
    { url: abs("/mentions-legales"), lastModified, changeFrequency: "yearly", priority: 0.2 },
    { url: abs("/politique-de-confidentialite"), lastModified, changeFrequency: "yearly", priority: 0.2 },
    { url: abs("/cgv"), lastModified, changeFrequency: "yearly", priority: 0.2 },
  ];

  const offers: MetadataRoute.Sitemap = allOffers.map((o) => ({
    url: abs(offerHref(o)),
    lastModified,
    changeFrequency: "monthly",
    priority: o.kind === "service" ? 0.85 : 0.7,
    images: [abs(`${offerHref(o)}/opengraph-image`)],
  }));

  return [...statics, ...offers];
}
