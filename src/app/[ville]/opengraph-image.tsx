import { cityBySlug, cityPages } from "@/lib/cities";
import { OG_SIZE, ogImage } from "@/lib/og";

export const alt = "WePushX, agence marketing digital au Maroc";
export const size = OG_SIZE;
export const contentType = "image/png";

export function generateStaticParams() {
  return cityPages.map((c) => ({ ville: c.slug }));
}

export default async function Image({ params }: { params: Promise<{ ville: string }> }) {
  const c = cityBySlug((await params).ville);
  return ogImage({
    kicker: c ? `${c.city} · Maroc` : "WePushX",
    title: c?.eyebrow ?? "Agence marketing digital au Maroc",
    footer: "Meta Ads · Google Ads · SEO · Sites web · CRM",
  });
}
