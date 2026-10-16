import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { OfferPage } from "@/components/sections/OfferPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { findOffer, slugsOf } from "@/lib/catalog";
import { ORG_ID, abs, breadcrumbLd, faqLd, pageMeta, webPageLd } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return slugsOf("platform");
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const offer = findOffer("platform", slug);
  if (!offer) return {};
  return pageMeta({
    title: offer.seo.title, description: offer.seo.description, path: `/plateforme/${offer.slug}`,
    image: { url: `/plateforme/${offer.slug}/opengraph-image`, alt: offer.seo.title },
  });
}

export default async function PlatformFeaturePage({ params }: Props) {
  const { slug } = await params;
  const offer = findOffer("platform", slug);
  if (!offer) notFound();

  const path = `/plateforme/${offer.slug}`;

  const app = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${abs(path)}#software`,
    name: `WePushX CRM · ${offer.name}`,
    applicationCategory: "BusinessApplication",
    applicationSubCategory: offer.kicker,
    operatingSystem: "Web, iOS, Android",
    description: offer.body,
    url: abs(path),
    image: abs(`${path}/opengraph-image`),
    featureList: offer.bullets,
    inLanguage: "fr",
    publisher: { "@id": ORG_ID },
    isPartOf: { "@type": "SoftwareApplication", name: "WePushX CRM", url: abs("/plateforme") },
  };

  return (
    <>
      <JsonLd
        data={[
          webPageLd({ path, name: offer.seo.title, description: offer.seo.description }),
          app,
          breadcrumbLd([
            { name: "Plateforme", path: "/plateforme" },
            { name: offer.name, path },
          ]),
          faqLd(offer.faq),
        ]}
      />
      <OfferPage offer={offer} />
    </>
  );
}
