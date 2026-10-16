import { findOffer, slugsOf } from "@/lib/catalog";
import { OG_SIZE, ogImage } from "@/lib/og";

export const alt = "WePushX, service d'agence marketing digital au Maroc";
export const size = OG_SIZE;
export const contentType = "image/png";

export function generateStaticParams() {
  return slugsOf("service");
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const offer = findOffer("service", slug);
  return ogImage({
    kicker: offer ? `${offer.name} · Maroc` : "Services",
    title: offer?.seo.title ?? "Services WePushX",
  });
}
