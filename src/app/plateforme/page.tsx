import type { Metadata } from "next";
import { Button, SectionLabel } from "@/components/ui/Button";
import { Lines, Reveal } from "@/components/ui/motion";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { OfferRows } from "@/components/sections/OfferRows";
import { platformFeatures } from "@/lib/platform";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbLd, faqLd, itemListLd, pageMeta, webPageLd } from "@/lib/seo";

const TITLE = "WePushX CRM : CRM all-in-one et automatisation WhatsApp pour PME au Maroc";
const DESCRIPTION =
  "Automatisations, IA conversationnelle, agents vocaux, Social Planner, Ad Manager, funnels, calendriers, avis Google, formations, webinaires et AI Studio. Un seul abonnement.";

export const metadata: Metadata = pageMeta({ title: TITLE, description: DESCRIPTION, path: "/plateforme" });


const platformFaq = [
  {
    q: "Quelle différence entre la plateforme et vos services ?",
    a: "La plateforme, c'est le logiciel : vous l'utilisez vous-même. Les services, c'est nous qui exécutons pour vous. La plupart de nos clients prennent les deux — l'outil sans personne pour le piloter reste un outil.",
  },
  {
    q: "Faut-il un abonnement par fonctionnalité ?",
    a: "Non. Les douze briques sont incluses dans WePushX CRM. Vous n'activez que ce dont vous avez besoin, quand vous en avez besoin.",
  },
  {
    q: "Peut-on remplacer nos outils actuels ?",
    a: "Souvent oui. Nos clients arrêtent en moyenne trois à cinq abonnements séparés : planification sociale, prise de RDV, emailing, chat et collecte d'avis.",
  },
  {
    q: "Qui configure tout ça ?",
    a: "Nous. Le setup est inclus dans le forfait Scale, et proposé à partir de 700 DH par mois sur les autres forfaits. Vous n'installez rien vous-même.",
  },
];

export default function PlatformPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageLd({ path: "/plateforme", name: TITLE, description: DESCRIPTION, type: "CollectionPage" }),
          itemListLd(platformFeatures.map((f) => ({ name: f.name, path: `/plateforme/${f.slug}` }))),
          breadcrumbLd([{ name: "Plateforme", path: "/plateforme" }]),
          faqLd(platformFaq),
        ]}
      />
      <section className="relative overflow-hidden pb-16 pt-36 md:pt-44">
        <div className="container-x">
          <SectionLabel n="→">La plateforme</SectionLabel>
          <Lines as="h1" className="display mt-8 text-[clamp(2.8rem,8.5vw,8.5rem)]">
            <span key="1">Douze briques.</span>
            <span key="2">
              Un seul <span className="serif-accent text-gradient">abonnement.</span>
            </span>
          </Lines>
          <Reveal delay={0.2}>
            <p className="mt-10 max-w-xl text-lg text-fg/65">
              WePushX CRM remplace la pile d&apos;outils que vous payez séparément. Tout communique : une publicité crée un
              lead, l&apos;IA le qualifie, le scénario le relance, le calendrier le réserve, la facture part.
            </p>
            <div className="mt-10">
              <Button href="/contact" trackAs="platform_index_audit">Voir la plateforme en démo</Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-8">
        <div className="container-x">
          <OfferRows offers={platformFeatures} />
        </div>
      </section>

      <Faq items={platformFaq} n="?" />
      <FinalCta />
    </>
  );
}
