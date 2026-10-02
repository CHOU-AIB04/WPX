import type { Metadata } from "next";
import Link from "next/link";
import { Arrow, Button, SectionLabel } from "@/components/ui/Button";
import { Counter, Lines, Reveal } from "@/components/ui/motion";
import { FinalCta } from "@/components/sections/FinalCta";
import { HashLanding } from "@/components/layout/HashLanding";
import { AgentPacks } from "@/components/pricing/AgentPacks";
import { PlansGrid } from "@/components/pricing/PlansGrid";
import { showPrices } from "@/lib/geo";
import { oneShots, site } from "@/lib/content";
import { CostSimulator } from "@/components/pricing/CostSimulator";

export const metadata: Metadata = {
  title: "Présentation WePushX : l'agence, la méthode, le CRM all-in-one et les agents IA",
  description:
    "Notre présentation complète : les quatre piliers de notre système de croissance, les résultats obtenus pour nos clients, la méthode en cinq étapes, les forfaits, le CRM all-in-one et les trois agents IA.",
  alternates: { canonical: "/presentation" },
  openGraph: {
    title: "Présentation WePushX — agence marketing digital, Maroc",
    description:
      "Sites, landing pages, campagnes publicitaires, UGC par IA, CRM all-in-one et agents IA. Une équipe d'experts vérifiés, un seul objectif : faire croître votre business.",
    type: "website",
  },
};

/* ─────────────────────────────────────────────────────────── le contenu */

const chapters = [
  { n: "01", id: "approche", t: "Notre approche" },
  { n: "02", id: "resultats", t: "Résultats clients" },
  { n: "03", id: "methode", t: "Méthodologie" },
  { n: "04", id: "offres", t: "Offres & tarifs" },
  { n: "05", id: "agents", t: "Agents IA & CRM" },
  { n: "06", id: "simulation", t: "Simulation" },
];

const openingStats = [
  { value: 32, suffix: " M", label: "Internautes au Maroc", detail: "Un marché déjà en ligne, et qui achète." },
  { value: 18, prefix: "+", suffix: " %", label: "Croissance digitale / an", detail: "Le retard se rattrape maintenant." },
  { value: 20, suffix: "+", label: "Clients accompagnés", detail: "PME, cliniques, e-commerce, concessions." },
];

const pillars = [
  {
    t: "Sites & Landing Pages",
    b: "Vitrines optimisées pour la conversion, boutiques e-commerce, une landing page par campagne avec A/B testing.",
  },
  {
    t: "Campagnes publicitaires",
    b: "Meta Ads et Google Ads gérées par un traffic manager certifié. Ciblage précis, optimisation hebdomadaire.",
  },
  {
    t: "UGC par IA",
    b: "Vingt vidéos authentiques par mois pour le prix de deux vidéos traditionnelles. Scripts, voix off et montage, tout en IA.",
  },
  {
    t: "CRM all-in-one & automatisation",
    b: "CRM configuré sur mesure. Suivi des leads, relances automatiques, scoring, reporting pipeline.",
  },
];

const teamFacts = [
  { v: 1, label: "Équipe dédiée", detail: "Un interlocuteur, pas un ticket." },
  { v: 6, label: "Experts spécialisés", detail: "Ads, web, contenu, CRM, IA, data." },
  { v: 0, label: "Intermédiaire", detail: "Vous parlez à ceux qui exécutent." },
];

const caseStudies = [
  {
    value: 340,
    prefix: "+",
    suffix: " %",
    metric: "Trafic qualifié",
    client: "Restaurant",
    detail: "SEO local + Google Ads, en 3 mois.",
  },
  {
    value: 42,
    prefix: "–",
    suffix: " %",
    metric: "Coût d'acquisition",
    client: "E-commerce mode",
    detail: "UGC par IA + landing pages optimisées sur Meta Ads.",
  },
  {
    value: 90,
    suffix: "",
    metric: "Leads par mois",
    client: "Clinique",
    detail: "Site + Meta Ads + automatisation CRM.",
  },
];

const method = [
  {
    t: "Audit gratuit",
    b: "Analyse de votre présence digitale actuelle, de la concurrence et des opportunités. 30 minutes, zéro engagement.",
  },
  {
    t: "Stratégie",
    b: "Proposition personnalisée avec ROI estimé, plan d'action sur 90 jours et KPIs définis ensemble.",
  },
  {
    t: "Setup",
    b: "Mise en place technique en 7 à 14 jours : site, campagnes, CRM, outils de tracking.",
  },
  {
    t: "Exécution",
    b: "Lancement des campagnes, publication de contenu, gestion quotidienne, optimisation continue.",
  },
  {
    t: "Reporting",
    b: "Dashboard temps réel et réunion mensuelle. Les ajustements stratégiques sortent des données, pas de l'intuition.",
  },
];

const crmCapabilities = [
  {
    t: "Capture de leads",
    b: "Formulaires, landing pages, chatbot, appels — tous vos leads arrivent dans un pipeline structuré.",
  },
  {
    t: "Pipeline de vente",
    b: "Visualisez chaque prospect du premier contact jusqu'à la signature. Rien ne se perd en route.",
  },
  {
    t: "Rendez-vous automatisés",
    b: "Vos prospects réservent directement dans votre calendrier. Fini les quinze emails pour trouver un créneau.",
  },
  {
    t: "Email & SMS marketing",
    b: "Campagnes déclenchées par le comportement. Les inactifs se relancent sans que personne n'y pense.",
  },
  {
    t: "Réputation & avis",
    b: "Collecte des avis Google après chaque prestation. Votre réputation se construit toute seule.",
  },
  {
    t: "Reporting temps réel",
    b: "Leads, taux de conversion, revenus, ROI par canal. Des décisions fondées sur des chiffres.",
  },
];

/* ────────────────────────────────────────────────────────────── la page */

export default async function PresentationPage() {
  const priced = await showPrices();

  return (
    <>
      <HashLanding />

      {/* ═════════════════════════════════════════════════ ouverture */}
      <section className="relative overflow-hidden pb-20 pt-36 md:pt-44">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-[70%] bg-[radial-gradient(55%_55%_at_70%_0%,rgba(122,28,140,0.28),transparent)]"
        />
        <div className="container-x relative">
          <SectionLabel n="→">Agence marketing digital · Maroc</SectionLabel>

          <Lines as="h1" className="display mt-8 text-[clamp(2.8rem,8vw,8rem)]">
            <span key="1">On transforme votre</span>
            <span key="2">présence digitale en</span>
            <span key="3" className="serif-accent text-gradient">
              machine à clients.
            </span>
          </Lines>

          <div className="mt-12 grid gap-12 lg:grid-cols-12">
            <Reveal delay={0.18} className="lg:col-span-6">
              <p className="text-lg text-fg/65">
                Sites web, landing pages, campagnes publicitaires, contenu UGC par IA et CRM all-in-one. Une équipe
                d&apos;experts vérifiés, un seul objectif : faire croître votre business.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-5">
                <Button href="/contact" trackAs="presentation_hero_audit">Réserver mon audit</Button>
                <Link href="/offres" className="link-underline inline-flex items-center gap-2 text-fg">
                  Voir nos offres
                  <Arrow className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>

            {/* au programme */}
            <Reveal delay={0.26} className="lg:col-span-5 lg:col-start-8">
              <p className="label text-faint">Au programme</p>
              <ul className="mt-5">
                {chapters.map((c) => (
                  <li key={c.id}>
                    <a
                      href={`#${c.id}`}
                      className="group flex items-baseline gap-5 border-t border-line py-3.5 last:border-b"
                    >
                      <span className="label shrink-0 text-faint transition-colors duration-300 group-hover:text-violet-bright">
                        {c.n}
                      </span>
                      <span className="text-[1.02rem] text-fg/75 transition-all duration-500 ease-[var(--ease-expo)] group-hover:translate-x-1.5 group-hover:text-fg">
                        {c.t}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* les trois chiffres d'ouverture */}
          <div className="mt-20 grid gap-px overflow-hidden rounded-[1.8rem] border border-line bg-line sm:grid-cols-3">
            {openingStats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08} className="bg-ink-2 p-8 md:p-10">
                <p className="display text-[clamp(2.6rem,5vw,4.2rem)] text-gradient">
                  <Counter value={s.value} prefix={s.prefix ?? ""} suffix={s.suffix ?? ""} />
                </p>
                <p className="mt-5 text-[1.02rem] text-fg/85">{s.label}</p>
                <p className="mt-1.5 text-sm text-muted">{s.detail}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ 01 notre approche */}
      <section id="approche" className="scroll-mt-24 border-t border-line py-24 md:py-32">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
            <div>
              <SectionLabel n="01">Notre approche</SectionLabel>
              <Lines className="display mt-8 text-[clamp(2.4rem,6vw,5.6rem)]">
                <span key="1">On ne vend pas</span>
                <span key="2">
                  du <span className="serif-accent text-lilac">« postage ».</span>
                </span>
              </Lines>
            </div>
            <Reveal className="max-w-sm">
              <p className="text-fg/60">
                On construit un système de croissance : quatre piliers interconnectés qui transforment chaque dirham
                investi en client.
              </p>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden rounded-[1.8rem] border border-line bg-line sm:grid-cols-2">
            {pillars.map((p, i) => (
              <Reveal
                key={p.t}
                delay={(i % 2) * 0.07}
                className="group bg-ink p-9 transition-colors duration-500 hover:bg-ink-2 md:p-11"
              >
                <p className="label text-violet-bright">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="display mt-12 text-3xl md:text-4xl">{p.t}</h3>
                <p className="mt-4 text-fg/60">{p.b}</p>
              </Reveal>
            ))}
          </div>

          {/* 1 / 6 / 0 */}
          <div className="mt-16 grid gap-10 sm:grid-cols-3">
            {teamFacts.map((f, i) => (
              <Reveal key={f.label} delay={i * 0.07} className="border-t border-line pt-7">
                <p className="display text-[3.4rem] leading-none">
                  <Counter value={f.v} />
                </p>
                <p className="mt-4 text-[1.02rem] text-fg/85">{f.label}</p>
                <p className="mt-1.5 text-sm text-muted">{f.detail}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ 02 résultats */}
      <section id="resultats" className="scroll-mt-24 border-t border-line bg-ink-2 py-24 md:py-32">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
            <div>
              <SectionLabel n="02">Résultats clients</SectionLabel>
              <Lines className="display mt-8 text-[clamp(2.4rem,6vw,5.6rem)]">
                <span key="1">Des chiffres,</span>
                <span key="2">
                  pas du <span className="serif-accent text-lilac">blabla.</span>
                </span>
              </Lines>
            </div>
            <Reveal className="max-w-sm">
              <p className="text-fg/60">
                Ce qu&apos;on a déjà obtenu pour des entreprises comme la vôtre, mesuré dans leurs comptes
                publicitaires et leur CRM.
              </p>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden rounded-[1.8rem] border border-line bg-line lg:grid-cols-3">
            {caseStudies.map((c, i) => (
              <Reveal key={c.metric} delay={i * 0.08} className="bg-ink-2 p-9 transition-colors duration-500 hover:bg-ink-3 md:p-11">
                <p className="label text-faint">{c.client}</p>
                <p className="display mt-10 text-[clamp(3rem,6vw,5rem)] text-gradient">
                  <Counter value={c.value} prefix={c.prefix ?? ""} suffix={c.suffix ?? ""} />
                </p>
                <p className="mt-6 text-[1.05rem] text-fg/85">{c.metric}</p>
                <p className="mt-2 text-sm text-muted">{c.detail}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <p className="mt-8 text-[0.82rem] text-muted">
              Données réelles issues de comptes Meta Ads et Google Ads gérés par notre équipe.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ 03 méthodologie */}
      <section id="methode" className="scroll-mt-24 border-t border-line py-24 md:py-32">
        <div className="container-x">
          <SectionLabel n="03">Méthodologie</SectionLabel>
          <Lines className="display mt-8 text-[clamp(2.4rem,6vw,5.6rem)]">
            <span key="1">De l&apos;audit à la</span>
            <span key="2">
              croissance en <span className="serif-accent text-lilac">cinq étapes.</span>
            </span>
          </Lines>
          <Reveal delay={0.12}>
            <p className="mt-8 max-w-lg text-fg/60">
              Un process éprouvé, pensé pour livrer des résultats dès le premier mois.
            </p>
          </Reveal>

          <div className="mt-16">
            {method.map((s, i) => (
              <Reveal key={s.t} delay={i * 0.05} y={18}>
                <div className="grid grid-cols-12 items-start gap-x-6 gap-y-3 border-t border-line py-8 last:border-b">
                  <span className="label col-span-2 pt-2 text-violet-bright md:col-span-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="display col-span-10 text-[clamp(1.6rem,3.2vw,2.6rem)] md:col-span-4">{s.t}</h3>
                  <p className="col-span-12 text-fg/60 md:col-span-7">{s.b}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* la promesse */}
          <Reveal delay={0.12}>
            <div className="mt-14 flex flex-col gap-6 rounded-[1.8rem] border border-line bg-ink-2 p-8 md:flex-row md:items-center md:justify-between md:p-12">
              <div>
                <p className="label text-violet-bright">Notre promesse</p>
                <p className="display mt-4 max-w-2xl text-[clamp(1.5rem,3vw,2.3rem)]">
                  Zéro lead généré en 60 jours sur vos campagnes ads ?{" "}
                  <span className="serif-accent text-lilac">On rembourse 100 % de notre commission de gestion.</span>
                </p>
              </div>
              <span className="label shrink-0 rounded-full border border-line px-4 py-2 text-faint">60 jours</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ 04 offres & tarifs */}
      <section id="offres" className="relative scroll-mt-24 border-t border-line bg-ink-2 py-24 md:py-32">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-[50%] bg-[radial-gradient(60%_60%_at_50%_0%,rgba(122,28,140,0.2),transparent)]"
        />
        <div className="container-x relative">
          <PlansGrid
            n="04"
            label="Offres & tarifs"
            first="Des forfaits clairs,"
            second="sans surprise."
            showPrices={priced}
            footnote={
              priced
                ? "Prix en MAD HT · Engagement minimum 3 mois · Paiement mensuel · TVA 20 % applicable si assujetti"
                : "Engagement minimum 3 mois · Paiement mensuel · Devis sous 48 h selon votre marché"
            }
          />

          {/* à la carte */}
          <div className="mt-24">
            <SectionLabel n="+">Services à la carte</SectionLabel>
            <Lines className="display mt-8 text-[clamp(2rem,4.6vw,3.6rem)]">
              <span key="1">Des prestations one-shot,</span>
              <span key="2" className="serif-accent text-lilac">
                sans abonnement.
              </span>
            </Lines>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-md text-fg/60">
                Pour un besoin ponctuel : on livre, et vous êtes propriétaire de tout.
              </p>
            </Reveal>

            <div className="mt-12 grid gap-px overflow-hidden rounded-[1.8rem] border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
              {oneShots.map((o, i) => (
                <Reveal key={o.name} delay={(i % 3) * 0.06} className="bg-ink p-8 transition-colors duration-500 hover:bg-ink-2">
                  <p className="label text-faint">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="display mt-10 text-2xl">{o.name}</h3>
                  <p className="mt-3 text-[0.92rem] text-fg/60">{o.body}</p>
                  <p className="serif-accent mt-7 text-xl text-lilac">{priced ? o.price : "Sur devis"}</p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.1}>
              <div className="mt-12 flex flex-wrap items-center gap-6">
                <Link href="/tarifs" className="link-underline inline-flex items-center gap-2 text-fg">
                  Le détail de chaque tarif, service par service
                  <Arrow className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ 05 agents IA & CRM */}
      <section id="agents" className="scroll-mt-24 border-t border-line py-24 md:py-32">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
            <div>
              <SectionLabel n="05">Nos agents IA</SectionLabel>
              <Lines className="display mt-8 text-[clamp(2.4rem,6vw,5.6rem)]">
                <span key="1">Trois agents, une</span>
                <span key="2">
                  puissance qui <span className="serif-accent text-lilac">grandit avec vous.</span>
                </span>
              </Lines>
            </div>
            <Reveal className="max-w-sm">
              <p className="text-fg/60">
                Chaque agent inclut le niveau précédent. Vous montez en puissance uniquement quand vous en avez
                besoin — et le premier palier est offert.
              </p>
            </Reveal>
          </div>

          <div className="mt-16">
            <AgentPacks showPrices={priced} />
          </div>
        </div>
      </section>
      
      {/* * ═══════════════════════════════════════════ 06 Simumation  */}
      {
        priced && <section id="simulation" className="scroll-mt-24 border-t border-line py-24 md:py-32">
        <CostSimulator />
      </section>
      }
      {/* ═══════════════════════════════════════════ le centre de commande */}
      <section className="border-t border-line bg-ink-2 py-24 md:py-32">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
            <div>
              <SectionLabel n="06">Votre centre de commande</SectionLabel>
              <Lines className="display mt-8 text-[clamp(2.4rem,6vw,5.6rem)]">
                <span key="1">Un CRM all-in-one</span>
                <span key="2">
                  qui remplace <span className="serif-accent text-lilac">huit outils.</span>
                </span>
              </Lines>
            </div>
            <Reveal className="max-w-sm">
              <p className="text-fg/60">
                Arrêtez de jongler entre Excel, WhatsApp, Google Sheets et cinq applications. Tout est centralisé au
                même endroit — et vos données restent vos données.
              </p>
              <Link href="/offres#plateforme" className="link-underline mt-5 inline-flex items-center gap-2 text-sm text-fg">
                Les douze briques en détail
                <Arrow className="h-3.5 w-3.5" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden rounded-[1.8rem] border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
            {crmCapabilities.map((c, i) => (
              <Reveal key={c.t} delay={(i % 3) * 0.06} className="bg-ink p-8 transition-colors duration-500 hover:bg-ink-2 md:p-10">
                <p className="label text-faint">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="display mt-10 text-2xl">{c.t}</h3>
                <p className="mt-3 text-[0.92rem] text-fg/60">{c.b}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <p className="mt-10 max-w-2xl text-[0.85rem] leading-relaxed text-muted">
              Pas de vendor lock-in : vos données vous appartiennent, et la migration depuis n&apos;importe quel outil
              est gratuite.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ contact */}
      <section className="border-t border-line py-24 md:py-32">
        <div className="container-x">
          <SectionLabel n="→">Contact</SectionLabel>
          <div className="mt-12 grid gap-px overflow-hidden rounded-[1.8rem] border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {[
              { k: "Email", v: site.email, href: `mailto:${site.email}` },
              { k: "Téléphone", v: "+212 783 777 433", href: "tel:+212783777433" },
              { k: "Site web", v: "www.wepushx.com", href: "https://www.wepushx.com" },
              { k: "Villes", v: "Casablanca · Rabat · Marrakech" },
            ].map((c, i) => (
              <Reveal key={c.k} delay={i * 0.06} className="bg-ink-2 p-8 transition-colors duration-500 hover:bg-ink-3">
                <p className="label text-faint">{c.k}</p>
                {c.href ? (
                  <a href={c.href} className="link-underline mt-5 block text-[1.05rem] text-fg">
                    {c.v}
                  </a>
                ) : (
                  <p className="mt-5 text-[1.05rem] text-fg">{c.v}</p>
                )}
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <p className="mt-10 max-w-3xl text-[0.82rem] leading-relaxed text-muted">
              Garantie : remboursement de la commission de gestion si zéro lead généré en 60 jours sur les campagnes
              ads. TVA de 20 % applicable si assujetti.
            </p>
          </Reveal>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
