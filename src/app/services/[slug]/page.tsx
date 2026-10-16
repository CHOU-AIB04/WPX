import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { OfferPage } from "@/components/sections/OfferPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { findOffer, slugsOf } from "@/lib/catalog";
import { showPrices } from "@/lib/geo";
import { ORG_ID, abs, breadcrumbLd, cities, faqLd, pageMeta, webPageLd } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return slugsOf("service");
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const offer = findOffer("service", slug);
  if (!offer) return {};
  return pageMeta({
    title: offer.seo.title, description: offer.seo.description, path: `/services/${offer.slug}`,
    image: { url: `/services/${offer.slug}/opengraph-image`, alt: offer.seo.title },
  });
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const offer = findOffer("service", slug);
  if (!offer) notFound();

  // Trois services affichent un montant (« À partir de … DH ») : la route
  // devient donc dynamique pour pouvoir lire le pays du visiteur.
  const priced = await showPrices();

  const path = `/services/${offer.slug}`;

  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${abs(path)}#service`,
    name: offer.name,
    serviceType: offer.kicker,
    description: offer.body,
    url: abs(path),
    image: abs(`${path}/opengraph-image`),
    provider: { "@id": ORG_ID },
    areaServed: [{ "@type": "Country", name: "Maroc" }, ...cities.map((c) => ({ "@type": "City", name: c }))],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: offer.name,
      itemListElement: offer.bullets.map((b) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: b } })),
    },
  };

  return (
    <>
      <JsonLd
        data={[
          webPageLd({ path, name: offer.seo.title, description: offer.seo.description }),
          service,
          breadcrumbLd([
            { name: "Services", path: "/services" },
            { name: offer.name, path },
          ]),
          faqLd(offer.faq),
        ]}
      />
      <OfferPage offer={offer} showPrices={priced} />
    </>
  );
}
