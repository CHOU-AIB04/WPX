import { allOffers, offerHref } from "@/lib/catalog";
import { site } from "@/lib/content";
import { CONTENT_UPDATED, SITE_URL, abs, tagline } from "@/lib/seo";

/**
 * Flux RSS des offres. Les agrégateurs et plusieurs moteurs de réponse s'en
 * servent pour découvrir les pages ; il est aussi déclaré dans le <head>.
 */
export const dynamic = "force-static";

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");

export function GET() {
  const date = new Date(`${CONTENT_UPDATED}T09:00:00Z`).toUTCString();

  const items = allOffers
    .map((o) => {
      const url = abs(offerHref(o));
      return `    <item>
      <title>${esc(o.seo.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${esc(o.seo.description)}</description>
      <category>${o.kind === "service" ? "Services" : "WePushX CRM"}</category>
      <pubDate>${date}</pubDate>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${esc(site.name)} · Agence marketing digital au Maroc</title>
    <link>${SITE_URL}/</link>
    <description>${esc(tagline)}</description>
    <language>fr-MA</language>
    <lastBuildDate>${date}</lastBuildDate>
    <atom:link href="${abs("/feed.xml")}" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`;

  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}
