import type { Metadata } from "next";
import Link from "next/link";
import { Arrow, Button, SectionLabel } from "@/components/ui/Button";
import { Lines, Reveal } from "@/components/ui/motion";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { HashLanding } from "@/components/layout/HashLanding";
import { AgentPacks } from "@/components/pricing/AgentPacks";
import { CostSimulator } from "@/components/pricing/CostSimulator";
import { CrmTiers } from "@/components/pricing/CrmTiers";
import { PlansGrid } from "@/components/pricing/PlansGrid";
import { QuoteCta } from "@/components/pricing/QuoteCta";
import { ServiceRatesList, UnitCostsTable } from "@/components/pricing/Rates";
import { showPrices } from "@/lib/geo";
import { oneShots, plans } from "@/lib/content";
import { JsonLd } from "@/components/seo/JsonLd";
import { ORG_ID, abs, breadcrumbLd, faqLd, pageMeta, webPageLd } from "@/lib/seo";

const TITLE = "Tarifs agence marketing digital au Maroc : forfaits, CRM et agents IA";
const DESCRIPTION =
  "Forfaits agence dès 3.900 DH/mois, paliers du CRM all-in-one WePushX, packs d'agents IA, projets one-shot et coût réel de la consommation. Avec un simulateur de budget mensuel.";

export const metadata: Metadata = pageMeta({ title: TITLE, description: DESCRIPTION, path: "/tarifs" });


const tarifsFaq = [
  {
    q: "Quelle est la différence entre le forfait agence et l'abonnement CRM ?",
    a: "Le forfait agence, ce sont nos honoraires : la stratégie, la production des créas, la gestion quotidienne de vos campagnes. L'abonnement WePushX CRM, c'est la licence du CRM all-in-one qui héberge vos contacts, vos scénarios et votre IA. On peut prendre l'un sans l'autre, mais c'est la combinaison qui fait la machine : sans CRM derrière, les leads que nous générons finissent dans une boîte mail.",
  },
  {
    q: "Les agents IA sont-ils facturés en plus du CRM ?",
    a: "Le premier agent — celui qui répond, qualifie et prend les rendez-vous — est offert avec la mise en place du CRM. Les deux paliers suivants s'ajoutent à l'abonnement, par agent déployé, et chacun inclut le précédent. Vous ne montez d'un cran que le jour où vous en avez besoin.",
  },
  {
    q: "Pourquoi la consommation est-elle affichée en fourchette ?",
    a: "Parce qu'un message de chatbot qui répond « nous ouvrons à 9h » ne coûte pas la même chose qu'un message qui interroge votre agenda, vérifie un stock, écrit dans le CRM et rédige une réponse sur mesure. La fourchette couvre ces deux extrêmes. Après l'audit, nous connaissons vos scénarios réels et nous figeons un montant au devis.",
  },
  {
    q: "Le budget publicitaire est-il inclus ?",
    a: "Non, et c'est volontaire. Vous payez Meta et Google directement, avec votre carte, sur vos comptes. Vous gardez la main sur le budget média et vous voyez exactement où part chaque dirham. Nos honoraires couvrent la stratégie, la production et la gestion.",
  },
  {
    q: "Pourquoi l'agent vocal IA n'est pas disponible au Maroc ?",
    a: "Les opérateurs marocains n'autorisent pas encore la téléphonie programmable nécessaire aux agents vocaux sortants. Nous le déployons pour nos clients qui prospectent à l'international — Europe, USA, Canada — et nous le proposerons au Maroc dès que la réglementation locale le permettra.",
  },
  {
    q: "Les tarifs sont-ils les mêmes hors du Maroc ?",
    a: "Non. Les montants publiés sur cette page sont calibrés pour le marché marocain. Hors du Maroc, les coûts opérateurs, les volumes et la fiscalité changent : nous chiffrons au cas par cas, après l'audit, plutôt que d'afficher une grille qui ne correspondrait à personne.",
  },
  {
    q: "Puis-je changer de palier en cours de route ?",
    a: "Oui, à tout moment et dans les deux sens, avec effet au cycle de facturation suivant. L'engagement de 3 mois porte sur le forfait agence, pas sur le palier : vous pouvez monter en Pro au deuxième mois et redescendre au sixième.",
  },
];

export default async function TarifsPage() {
  /** Géolocalisation : hors Maroc, les offres restent, les montants partent. */
  const priced = await showPrices();

  return (
    <>
      <JsonLd
        data={[
          webPageLd({ path: "/tarifs", name: TITLE, description: DESCRIPTION }),
          breadcrumbLd([{ name: "Tarifs", path: "/tarifs" }]),
          faqLd(tarifsFaq),
          // Montants seulement quand la page les affiche (règle de src/lib/geo.ts).
          ...(priced
            ? [
                {
                  "@context": "https://schema.org",
                  "@type": "OfferCatalog",
                  name: "Forfaits agence WePushX",
                  url: abs("/tarifs"),
                  itemListElement: plans.map((p) => ({
                    "@type": "Offer",
                    name: `Forfait ${p.name}`,
                    description: p.pitch,
                    price: p.monthly,
                    priceCurrency: "MAD",
                    priceSpecification: { "@type": "UnitPriceSpecification", price: p.monthly, priceCurrency: "MAD", unitText: "MONTH" },
                    seller: { "@id": ORG_ID },
                    url: abs("/tarifs"),
                  })),
                },
              ]
            : []),
        ]}
      />
      <HashLanding />

      {/* ═══════════════════════════════════════════════════════════ hero */}
      <section className="relative overflow-hidden pb-16 pt-36 md:pt-44">
        <div className="container-x">
          <SectionLabel n="→">Tarifs</SectionLabel>
          <Lines as="h1" className="display mt-8 text-[clamp(2.8rem,8.5vw,8.5rem)]">
            <span key="1">Tout est écrit.</span>
            <span key="2">
              Rien n&apos;est <span className="serif-accent text-gradient">caché.</span>
            </span>
          </Lines>
          <Reveal delay={0.2}>
            <p className="mt-10 max-w-xl text-lg text-fg/65">
              {priced
                ? "Les honoraires, la licence du CRM all-in-one, les agents IA, le prix de chaque service et le coût réel de la consommation. Puis un simulateur pour poser vos propres volumes."
                : "Les honoraires, la licence du CRM all-in-one, les agents IA et le détail de ce que couvre chaque offre. Les montants publiés ici sont calibrés pour le marché marocain : hors du Maroc, nous chiffrons au cas par cas."}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <Button href="/contact" trackAs="tarifs_hero_audit">Réserver mon audit</Button>
              <a href={priced ? "#simulateur" : "#devis"} className="link-underline inline-flex items-center gap-2 text-fg">
                {priced ? "Aller au simulateur" : "Demander un devis"}
                <Arrow className="h-4 w-4 rotate-90" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════ 01 forfaits agence */}
      <section className="relative border-t border-line py-24 md:py-32">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-[55%] bg-[radial-gradient(60%_60%_at_50%_0%,rgba(122,28,140,0.22),transparent)]"
        />
        <div className="container-x relative">
          <PlansGrid
            n="01"
            label="Honoraires agence"
            first="Ce que coûte"
            second="l'exécution."
            showPrices={priced}
            footnote={
              priced
                ? "Prix en MAD HT · Engagement minimum 3 mois · Garantie résultats 60 jours · Budget publicitaire séparé"
                : "Engagement minimum 3 mois · Garantie résultats 60 jours · Budget publicitaire séparé · Devis sous 48 h"
            }
          />
        </div>
      </section>

      {/* ══════════════════════════════════════════ 02 abonnement plateforme */}
      <section className="border-t border-line bg-ink-2 py-24 md:py-32">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
            <div>
              <SectionLabel n="02">Le CRM all-in-one</SectionLabel>
              <Lines className="display mt-8 text-[clamp(2.4rem,6vw,5.6rem)]">
                <span key="1">Un CRM all-in-one</span>
                <span key="2" className="serif-accent text-lilac">
                  qui remplace 8 outils.
                </span>
              </Lines>
            </div>
            <Reveal className="max-w-sm">
              <p className="text-fg/60">
                Arrêtez de jongler entre Excel, WhatsApp, Google Sheets et cinq applications. Un seul abonnement
                remplace le CRM, l&apos;emailing, le planificateur social, le constructeur de pages et le chatbot que
                vous payez aujourd&apos;hui séparément.
              </p>
              <Link href="/offres#plateforme" className="link-underline mt-5 inline-flex items-center gap-2 text-sm text-fg">
                Les douze briques en détail
                <Arrow className="h-3.5 w-3.5" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-16">
            <CrmTiers showPrices={priced} />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════ 03 agents IA */}
      <section id="agents" className="scroll-mt-24 border-t border-line py-24 md:py-32">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
            <div>
              <SectionLabel n="03">Nos agents IA</SectionLabel>
              <Lines className="display mt-8 text-[clamp(2.4rem,6vw,5.6rem)]">
                <span key="1">Trois agents,</span>
                <span key="2">
                  une puissance qui <span className="serif-accent text-lilac">grandit avec vous.</span>
                </span>
              </Lines>
            </div>
            <Reveal className="max-w-sm">
              <p className="text-fg/60">
                Chaque agent inclut le niveau précédent. Vous montez en puissance uniquement quand vous en avez
                besoin — et le premier palier est offert avec la mise en place du CRM.
              </p>
            </Reveal>
          </div>

          <div className="mt-16">
            <AgentPacks showPrices={priced} />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════ 04 prix par service */}
      <section className="border-t border-line bg-ink-2 py-24 md:py-32">
        <div className="container-x">
          <SectionLabel n="04">Service par service</SectionLabel>
          <Lines className="display mt-8 text-[clamp(2.4rem,6vw,5.6rem)]">
            <span key="1">Le prix de</span>
            <span key="2">
              chaque <span className="serif-accent text-lilac">levier.</span>
            </span>
          </Lines>
          <Reveal delay={0.12}>
            <p className="mt-8 max-w-lg text-fg/60">
              {priced
                ? "À la carte si vous n'avez besoin que d'un levier, ou inclus dans un forfait si vous voulez la machine complète. Les deux colonnes vous disent lequel est le plus avantageux."
                : "À la carte si vous n'avez besoin que d'un levier, ou inclus dans un forfait si vous voulez la machine complète. Le chiffrage se fait après l'audit, selon votre marché."}
            </p>
          </Reveal>

          <div className="mt-14">
            <ServiceRatesList showPrices={priced} />
          </div>

          {/* projets ponctuels */}
          <div className="mt-24">
            <SectionLabel n="+">Projets one-shot</SectionLabel>
            <Lines className="display mt-8 text-[clamp(2rem,4.6vw,3.6rem)]">
              <span key="1">Sans abonnement,</span>
              <span key="2" className="serif-accent text-lilac">
                {priced ? "à prix fixe." : "livré clé en main."}
              </span>
            </Lines>
            <div className="mt-12 grid gap-px overflow-hidden rounded-[1.8rem] border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
              {oneShots.map((o, i) => (
                <Reveal
                  key={o.name}
                  delay={(i % 3) * 0.06}
                  className="bg-ink p-8 transition-colors duration-500 hover:bg-ink-2"
                >
                  <p className="label text-faint">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="display mt-10 text-2xl">{o.name}</h3>
                  <p className="mt-3 text-[0.92rem] text-fg/60">{o.body}</p>
                  <p className="serif-accent mt-7 text-xl text-lilac">{priced ? o.price : "Sur devis"}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════ 05 consommation */}
      <section className="border-t border-line py-24 md:py-32">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
            <div>
              <SectionLabel n="05">Consommation</SectionLabel>
              <Lines className="display mt-8 text-[clamp(2.4rem,6vw,5.6rem)]">
                <span key="1">Ce qui se paie</span>
                <span key="2">
                  à <span className="serif-accent text-lilac">l&apos;usage.</span>
                </span>
              </Lines>
            </div>
            <Reveal className="max-w-sm">
              <p className="text-fg/60">
                Un message WhatsApp, un email, une minute de conversation avec l&apos;IA : chacun a un coût unitaire.
                C&apos;est la seule partie de votre facture qui bouge d&apos;un mois sur l&apos;autre.
              </p>
            </Reveal>
          </div>

          <div className="mt-16">
            <UnitCostsTable showPrices={priced} />
          </div>

          <Reveal delay={0.1}>
            <p className="mt-10 max-w-3xl text-[0.85rem] leading-relaxed text-muted">
              Facturé à l&apos;usage, sur relevé mensuel détaillé par canal. Vous pouvez fixer un plafond : au-delà, les
              envois automatiques s&apos;arrêtent et nous vous prévenons. Les réponses entrantes de vos contacts dans la
              fenêtre WhatsApp de 24 heures ne sont pas facturées.
              {!priced && " Les tarifs unitaires dépendent de votre pays : ils vous sont communiqués au devis."}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════ 06 simulateur ou devis */}
      {priced ? <CostSimulator /> : <QuoteCta n="06" />}

      <Faq items={tarifsFaq} n="07" />
      <FinalCta />
    </>
  );
}
