import { Comparison } from "@/components/sections/Comparison";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { Guarantee } from "@/components/sections/Guarantee";
import { Hero } from "@/components/sections/Hero";
import { Manifesto } from "@/components/sections/Manifesto";
import { Marquees } from "@/components/sections/Marquees";
import { Pricing } from "@/components/sections/Pricing";
import { Problems } from "@/components/sections/Problems";
import { Process } from "@/components/sections/Process";
import { Results } from "@/components/sections/Results";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { faqs } from "@/lib/content";
import { showPrices } from "@/lib/geo";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqLd, tagline, webPageLd } from "@/lib/seo";

export default async function Home() {
  /** Hors Maroc, la section tarifs garde les forfaits mais pas les montants. */
  const priced = await showPrices();

  return (
    <>
      <JsonLd
        data={[
          webPageLd({ path: "/", name: "WePushX · Agence marketing digital au Maroc", description: tagline }),
          faqLd(faqs),
        ]}
      />
      <Hero />
      <Marquees />
      <Manifesto />
      <Problems />
      <Services />
      <Process />
      <Results />
      <Comparison />
      <Testimonials />
      <Pricing showPrices={priced} />
      <Guarantee />
      <Faq />
      <FinalCta />
    </>
  );
}
