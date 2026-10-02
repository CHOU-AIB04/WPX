import type { MetadataRoute } from "next";
import { allOffers, offerHref } from "@/lib/catalog";

const base = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://wepushx.com").replace(/\/$/, "");

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const statics: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/presentation`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/offres`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/tarifs`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/plateforme`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
    { url: `${base}/mentions-legales`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/politique-de-confidentialite`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/cgv`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];

  const offers: MetadataRoute.Sitemap = allOffers.map((o) => ({
    url: `${base}${offerHref(o)}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...statics, ...offers];
}
