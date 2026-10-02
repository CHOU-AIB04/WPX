import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { OfferPage } from "@/components/sections/OfferPage";
import { findOffer, slugsOf } from "@/lib/catalog";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return slugsOf("platform");
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const offer = findOffer("platform", slug);
  if (!offer) return {};
  return {
    title: offer.seo.title,
    description: offer.seo.description,
    alternates: { canonical: `/plateforme/${offer.slug}` },
    openGraph: { title: offer.seo.title, description: offer.seo.description, type: "website" },
  };
}

export default async function PlatformFeaturePage({ params }: Props) {
  const { slug } = await params;
  const offer = findOffer("platform", slug);
  if (!offer) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: `WePushX CRM · ${offer.name}`,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: offer.seo.description,
    featureList: offer.bullets,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <OfferPage offer={offer} />
    </>
  );
}
