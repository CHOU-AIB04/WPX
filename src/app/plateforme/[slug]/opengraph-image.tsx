import { findOffer, slugsOf } from "@/lib/catalog";
import { OG_SIZE, ogImage } from "@/lib/og";

export const alt = "WePushX CRM, la plateforme tout-en-un pour les PME";
export const size = OG_SIZE;
export const contentType = "image/png";

export function generateStaticParams() {
  return slugsOf("platform");
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const offer = findOffer("platform", slug);
  return ogImage({
    kicker: offer ? `WePushX CRM · ${offer.name}` : "WePushX CRM",
    title: offer?.seo.title ?? "WePushX CRM",
    footer: "CRM all-in-one · Automatisations · Agents IA",
  });
}
