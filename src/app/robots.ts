import type { MetadataRoute } from "next";

const base = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://wepushx.com").replace(/\/$/, "");

export default function robots(): MetadataRoute.Robots {
  // NOINDEX=1 sur les préproductions Vercel : on bloque tout.
  if (process.env.NOINDEX === "1") {
    return { rules: [{ userAgent: "*", disallow: "/" }] };
  }

  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/"] }],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
