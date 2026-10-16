import type { Metadata } from "next";
import Link from "next/link";
import { Arrow, Button, SectionLabel } from "@/components/ui/Button";
import { Lines, Reveal } from "@/components/ui/motion";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { OfferRows } from "@/components/sections/OfferRows";
import { oneShots, services } from "@/lib/content";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbLd, faqLd, itemListLd, pageMeta, webPageLd } from "@/lib/seo";

const TITLE = "Services marketing digital au Maroc : Meta Ads, Google Ads, SEO, sites web";
const DESCRIPTION =
  "Six leviers exécutés par notre agence pour les PME marocaines : Meta Ads, Google Ads, création de sites web, SEO & GEO, UGC par IA et gestion des réseaux sociaux.";

export const metadata: Metadata = pageMeta({ title: TITLE, description: DESCRIPTION, path: "/services" });


const servicesFaq = [
  { q: "Est-ce que vous créez les créatifs publicitaires ?", a: "Oui. Chaque forfait inclut un volume de créas ads par mois (5, 8 ou 10), et les vidéos UGC par IA sont disponibles en option ou en pack." },
  { q: "Combien de temps pour qu'un site soit en ligne ?", a: "7 à 14 jours pour un site vitrine ou une landing page, selon le nombre de pages et la rapidité des validations." },
  { q: "Faut-il prendre la plateforme en plus des services ?", a: "Ce n'est pas obligatoire, mais c'est ce qui change tout : sans CRM derrière, les leads que nous générons finissent dans une boîte mail. Le setup est inclus dans le forfait Scale." },
  { q: "Quel est l'engagement minimum pour les forfaits ?", a: "3 mois, le temps d'installer le tracking, de sortir de la phase d'apprentissage et d'optimiser sur des données fiables." },
];

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageLd({ path: "/services", name: TITLE, description: DESCRIPTION, type: "CollectionPage" }),
          itemListLd(services.map((s) => ({ name: s.name, path: `/services/${s.slug}` }))),
          breadcrumbLd([{ name: "Services", path: "/services" }]),
          faqLd(servicesFaq),
        ]}
      />
      <section className="relative overflow-hidden pb-16 pt-36 md:pt-44">
        <div className="container-x">
          <SectionLabel n="→">Nos services</SectionLabel>
          <Lines as="h1" className="display mt-8 text-[clamp(3rem,9vw,9rem)]">
            <span key="1">Six leviers.</span>
            <span key="2">
              Une seule <span className="serif-accent text-gradient">machine.</span>
            </span>
          </Lines>
          <Reveal delay={0.2}>
            <p className="mt-10 max-w-xl text-lg text-fg/65">
              Des services intégrés et complémentaires : chaque levier amplifie les autres. C&apos;est pour ça que nos
              clients obtiennent des résultats que leurs concurrents n&apos;atteignent pas.
            </p>
            <div className="mt-10">
              <Button href="/contact" trackAs="services_index_audit">Réserver mon audit</Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-8">
        <div className="container-x">
          <OfferRows offers={services} />
        </div>
      </section>

      {/* passerelle vers la plateforme */}
      <section className="py-16 md:py-20">
        <div className="container-x">
          <Reveal>
            <Link
              href="/plateforme"
              data-cursor="Voir"
              className="group flex flex-col gap-6 rounded-[1.8rem] border border-line bg-ink-2 p-8 transition-colors duration-500 hover:border-violet-bright md:flex-row md:items-center md:justify-between md:p-12"
            >
              <div>
                <p className="label text-violet-bright">Et l&apos;outil derrière</p>
                <h2 className="display mt-4 text-[clamp(1.8rem,4vw,3rem)]">
                  WePushX CRM, <span className="serif-accent text-lilac">douze briques.</span>
                </h2>
                <p className="mt-4 max-w-lg text-fg/60">
                  Automatisations, IA conversationnelle, Social Planner, Ad Manager, calendriers, avis Google, formations,
                  webinaires et AI Studio. Sans CRM derrière, les leads que nous générons finissent dans une boîte mail.
                </p>
              </div>
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-line transition-all duration-500 group-hover:rotate-[-45deg] group-hover:border-violet-bright group-hover:bg-violet-bright group-hover:text-snow">
                <Arrow className="h-5 w-5" />
              </span>
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line bg-ink-2 py-24 md:py-32">
        <div className="container-x">
          <SectionLabel n="+">Projets one-shot</SectionLabel>
          <Lines className="display mt-8 text-[clamp(2.6rem,6vw,5.6rem)]">
            <span key="1">Besoin d&apos;un projet</span>
            <span key="2" className="serif-accent text-lilac">ponctuel ?</span>
          </Lines>
          <p className="mt-6 max-w-md text-fg/60">Pas d&apos;abonnement. Des livrables précis, à prix fixe.</p>
          <div className="mt-14 grid gap-px overflow-hidden rounded-[1.8rem] border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {oneShots.map((o, i) => (
              <Reveal key={o.name} delay={(i % 3) * 0.06} className="group relative bg-ink-2 p-8 transition-colors duration-500 hover:bg-ink-3">
                <p className="label text-faint">0{i + 1}</p>
                <h3 className="display mt-10 text-3xl">{o.name}</h3>
                <p className="mt-3 text-fg/60">{o.body}</p>
                <p className="serif-accent mt-8 text-2xl text-lilac">{o.price}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Faq items={servicesFaq} n="?" />
      <FinalCta />
    </>
  );
}
