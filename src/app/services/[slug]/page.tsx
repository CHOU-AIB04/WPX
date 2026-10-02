import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { OfferPage } from "@/components/sections/OfferPage";
import { findOffer, slugsOf } from "@/lib/catalog";
import { site } from "@/lib/content";
import { showPrices } from "@/lib/geo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return slugsOf("service");
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const offer = findOffer("service", slug);
  if (!offer) return {};
  return {
    title: offer.seo.title,
    description: offer.seo.description,
    alternates: { canonical: `/services/${offer.slug}` },
    openGraph: { title: offer.seo.title, description: offer.seo.description, type: "website" },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const offer = findOffer("service", slug);
  if (!offer) notFound();

  // Trois services affichent un montant (« À partir de … DH ») : la route
  // devient donc dynamique pour pouvoir lire le pays du visiteur.
  const priced = await showPrices();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: offer.name,
    serviceType: offer.kicker,
    description: offer.seo.description,
    areaServed: { "@type": "Country", name: "Maroc" },
    provider: { "@type": "Organization", name: site.name, email: site.email },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <OfferPage offer={offer} showPrices={priced} />
    </>
  );
}
