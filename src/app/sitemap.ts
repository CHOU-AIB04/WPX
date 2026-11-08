import type { MetadataRoute } from "next";
import { allOffers, offerHref } from "@/lib/catalog";
import { MIN_POSTS_TO_INDEX_CATEGORY, blogCategories, blogPosts, postsInCategory } from "@/lib/blog";
import { publishedCases } from "@/lib/cases";
import { cityPages } from "@/lib/cities";
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

  const cities: MetadataRoute.Sitemap = cityPages.map((c) => ({
    url: abs(`/${c.slug}`),
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
    images: [abs(`/${c.slug}/opengraph-image`)],
  }));

  // La liste des cas n'entre dans le sitemap qu'à partir du premier cas publié.
  const cases: MetadataRoute.Sitemap = publishedCases.length
    ? [
        { url: abs("/cas-clients"), lastModified, changeFrequency: "monthly", priority: 0.7 },
        ...publishedCases.map((c) => ({
          url: abs(`/cas-clients/${c.slug}`),
          lastModified: c.date,
          changeFrequency: "yearly" as const,
          priority: 0.7,
        })),
      ]
    : [];

  const blog: MetadataRoute.Sitemap = [
    { url: abs("/blog"), lastModified: blogPosts.map((p) => p.updated ?? p.date).sort().at(-1), changeFrequency: "weekly", priority: 0.8 },
    ...blogPosts.map((p) => ({
      url: abs(`/blog/${p.slug}`),
      lastModified: p.updated ?? p.date,
      changeFrequency: "monthly" as const,
      priority: 0.75,
      images: [abs(`/blog/${p.slug}/opengraph-image`)],
    })),
    // Catégories : seulement celles qui sont indexées (3 articles et plus).
    ...blogCategories
      .filter((c) => postsInCategory(c.id).length >= MIN_POSTS_TO_INDEX_CATEGORY)
      .map((c) => ({ url: abs(`/blog/categorie/${c.id}`), lastModified, changeFrequency: "weekly" as const, priority: 0.5 })),
  ];

  return [...statics, ...offers, ...cities, ...blog, ...cases];
}
