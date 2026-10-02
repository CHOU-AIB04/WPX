import type { Metadata } from "next";
import Link from "next/link";
import { Arrow, Button, SectionLabel } from "@/components/ui/Button";
import { Lines, Reveal } from "@/components/ui/motion";
import { FinalCta } from "@/components/sections/FinalCta";
import { HashLanding } from "@/components/layout/HashLanding";
import { OfferSection } from "@/components/sections/OfferSection";
import { OffersRail } from "@/components/sections/OffersRail";
import { offersOf } from "@/lib/catalog";
import { showPrices } from "@/lib/geo";

export const metadata: Metadata = {
  title: "Toutes nos offres : services d'agence et CRM all-in-one WePushX",
  description:
    "Le catalogue complet sur une page : Meta Ads, Google Ads, sites web, SEO & GEO, UGC par IA, réseaux sociaux, et les douze briques du CRM all-in-one WePushX — automatisations, IA conversationnelle, agents vocaux, Social Planner, Ad Manager.",
  alternates: { canonical: "/offres" },
};

const services = offersOf("service");
const platform = offersOf("platform");

const groups = [
  { id: "services", title: "Exécuté par l'agence", items: services.map((o) => ({ slug: o.slug, name: o.name })) },
  { id: "plateforme", title: "CRM all-in-one", items: platform.map((o) => ({ slug: o.slug, name: o.name })) },
];

/** En-tête de famille, à mi-chemin entre un titre de section et une ancre. */
function GroupHead({
  id,
  n,
  label,
  first,
  second,
  blurb,
  href,
  cta,
}: {
  id: string;
  n: string;
  label: string;
  first: string;
  second: string;
  blurb: string;
  href: string;
  cta: string;
}) {
  return (
    <div id={id} className="scroll-mt-24 pt-4">
      <SectionLabel n={n}>{label}</SectionLabel>
      <div className="mt-8 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
        <Lines className="display text-[clamp(2.4rem,6vw,5.2rem)]">
          <span key="1">{first}</span>
          <span key="2" className="serif-accent text-lilac">
            {second}
          </span>
        </Lines>
        <Reveal className="max-w-sm">
          <p className="text-fg/60">{blurb}</p>
          <Link href={href} className="link-underline mt-5 inline-flex items-center gap-2 text-sm text-fg">
            {cta}
            <Arrow className="h-3.5 w-3.5" />
          </Link>
        </Reveal>
      </div>
    </div>
  );
}

export default async function OffresPage() {
  /** Hors Maroc, les étiquettes chiffrées des services disparaissent. */
  const priced = await showPrices();

  return (
    <>
      <HashLanding />

      {/* ═══════════════════════════════════════════════════════════ hero */}
      <section className="relative overflow-hidden pb-16 pt-36 md:pt-44">
        <div className="container-x">
          <SectionLabel n="→">Le catalogue</SectionLabel>
          <Lines as="h1" className="display mt-8 text-[clamp(2.8rem,8.5vw,8.5rem)]">
            <span key="1">Dix-huit briques.</span>
            <span key="2">
              Une seule <span className="serif-accent text-gradient">machine.</span>
            </span>
          </Lines>
          <Reveal delay={0.2}>
            <p className="mt-10 max-w-xl text-lg text-fg/65">
              Six leviers exécutés par l&apos;agence, douze briques logicielles dans WePushX CRM. Tout est sur cette page
              — cliquez sur une offre dans le menu et vous atterrissez directement sur sa section.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <Button href="/contact" trackAs="offres_hero_audit">Réserver mon audit</Button>
              <Link href="/tarifs" className="link-underline inline-flex items-center gap-2 text-fg">
                Voir les tarifs
                <Arrow className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════ sommaire, écrans étroits */}
      <section className="pb-8 xl:hidden">
        <div className="container-x">
          <Reveal>
            <div className="rounded-[1.8rem] border border-line p-6 md:p-8">
              <p className="label text-faint">Sommaire</p>
              <div className="mt-5 grid gap-x-8 gap-y-1 sm:grid-cols-2">
                {[...services, ...platform].map((o, i) => (
                  <a
                    key={o.slug}
                    href={`#${o.slug}`}
                    className="group flex items-baseline gap-3 border-b border-line py-2.5 text-[0.92rem] text-fg/70 transition-colors hover:text-fg"
                  >
                    <span className="label shrink-0 text-faint">{String(i + 1).padStart(2, "0")}</span>
                    <span>{o.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════ rail + catalogue */}
      <div className="container-x grid gap-12 pb-8 xl:grid-cols-12 xl:gap-16">
        <div className="xl:col-span-3">
          <OffersRail groups={groups} />
        </div>

        <div className="xl:col-span-9">
          <GroupHead
            id="services"
            n="01"
            label="Exécuté par l'agence"
            first="Six leviers"
            second="qui se répondent."
            blurb="Les pubs amènent le trafic, le site convertit, le contenu entretient. Chaque levier amplifie les autres — et tout est mesuré au dirham près."
            href="/services"
            cta="Pages détaillées & démos"
          />
          <div className="mt-12">
            {services.map((o, i) => (
              <OfferSection key={o.slug} offer={o} n={i + 1} flip={i % 2 === 1} showPrices={priced} />
            ))}
          </div>

          <div className="mt-24 border-t border-line pt-24 md:mt-32 md:pt-32">
            <GroupHead
              id="plateforme"
              n="02"
              label="Le CRM all-in-one"
              first="Douze briques,"
              second="un seul abonnement."
              blurb="Un CRM all-in-one qui remplace les huit outils que vous payez séparément. Une publicité crée un lead, l'IA le qualifie, le scénario le relance, le calendrier le réserve."
              href="/plateforme"
              cta="Pages détaillées & démos"
            />
            <div className="mt-12">
              {platform.map((o, i) => (
                <OfferSection key={o.slug} offer={o} n={i + 1} flip={i % 2 === 1} showPrices={priced} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════════ passerelle tarifs */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <Reveal>
            <Link
              href="/tarifs"
              data-cursor="Voir"
              className="group flex flex-col gap-6 rounded-[1.8rem] border border-line bg-ink-2 p-8 transition-colors duration-500 hover:border-violet-bright md:flex-row md:items-center md:justify-between md:p-12"
            >
              <div>
                <p className="label text-violet-bright">Et combien ça coûte</p>
                <h2 className="display mt-4 text-[clamp(1.8rem,4vw,3rem)]">
                  Tarifs détaillés + <span className="serif-accent text-lilac">simulateur.</span>
                </h2>
                <p className="mt-4 max-w-lg text-fg/60">
                  Le prix de chaque service, les paliers de la plateforme, et un simulateur qui estime votre
                  consommation mensuelle — messages WhatsApp, emails, chatbot, agent vocal, minutes d&apos;appel.
                </p>
              </div>
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-line transition-all duration-500 group-hover:rotate-[-45deg] group-hover:border-violet-bright group-hover:bg-violet-bright group-hover:text-snow">
                <Arrow className="h-5 w-5" />
              </span>
            </Link>
          </Reveal>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
