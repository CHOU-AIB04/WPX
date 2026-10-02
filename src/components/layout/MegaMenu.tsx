"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Arrow } from "@/components/ui/Button";
import { EASE } from "@/components/ui/motion";
import { offerAnchor, offerHref, offersOf, type OfferKind } from "@/lib/catalog";

const COPY: Record<
  OfferKind,
  { eyebrow: string; title: string; accent: string; blurb: string; href: string; cta: string; index: string; featured: string }
> = {
  service: {
    eyebrow: "Exécuté par l'agence",
    title: "Six leviers,",
    accent: "une seule machine.",
    blurb:
      "Les pubs amènent le trafic, le site convertit, le contenu entretient. Chaque levier amplifie les autres — et tout est mesuré au dirham près.",
    href: "/offres#services",
    cta: "Tout voir sur une page",
    index: "/services",
    featured: "meta-ads",
  },
  platform: {
    eyebrow: "Le CRM all-in-one",
    title: "Douze briques,",
    accent: "un seul abonnement.",
    blurb:
      "Un CRM all-in-one qui remplace les huit outils que vous payez séparément. Une publicité crée un lead, l'IA le qualifie, le scénario le relance, le calendrier le réserve.",
    href: "/offres#plateforme",
    cta: "Tout voir sur une page",
    index: "/plateforme",
    featured: "automatisations",
  },
};

export function MegaPanel({ kind, onNavigate }: { kind: OfferKind; onNavigate: () => void }) {
  const offers = offersOf(kind);
  const copy = COPY[kind];
  const featured = offers.find((o) => o.slug === copy.featured) ?? offers[0];

  return (
    <motion.div
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.45, ease: EASE }}
      className="overflow-hidden rounded-b-[2rem] border-x border-b border-line bg-ink/90 shadow-[0_50px_120px_-40px_rgba(0,0,0,0.95)] backdrop-blur-2xl"
    >
      {/* filet lumineux en haut du panneau */}
      <span
        aria-hidden
        className="block h-px w-full bg-[linear-gradient(90deg,transparent,var(--color-violet-bright),transparent)]"
      />

      <div className="container-x grid gap-10 py-10 lg:grid-cols-12 lg:gap-14 lg:py-12">
        {/* colonne de gauche : intitulé */}
        <div className="lg:col-span-3">
          <p className="label text-violet-bright">{copy.eyebrow}</p>
          <p className="display mt-5 text-[1.9rem] leading-[1.05]">
            {copy.title}
            <br />
            <span className="serif-accent text-lilac">{copy.accent}</span>
          </p>
          <p className="mt-5 max-w-[24ch] text-sm text-fg/55">{copy.blurb}</p>
          <div className="mt-7 flex flex-col items-start gap-3">
            <Link href={copy.href} onClick={onNavigate} className="link-underline inline-flex items-center gap-2 text-sm text-fg">
              {copy.cta}
              <Arrow className="h-3.5 w-3.5" />
            </Link>
            <Link
              href={copy.index}
              onClick={onNavigate}
              className="link-underline inline-flex items-center gap-2 text-sm text-faint transition-colors hover:text-fg/80"
            >
              Pages détaillées &amp; démos
              <Arrow className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {/* colonne centrale : la grille d'offres */}
        <div className="lg:col-span-6">
          <div className="grid gap-x-8 sm:grid-cols-2">
            {offers.map((o, i) => (
              <motion.div
                key={o.slug}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.04 + i * 0.022, ease: EASE }}
              >
                <Link
                  href={offerAnchor(o)}
                  onClick={onNavigate}
                  className="group flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors duration-300 hover:bg-ink-2"
                >
                  <span className="mt-[0.45rem] h-1 w-1 shrink-0 rounded-full bg-faint transition-all duration-300 group-hover:w-4 group-hover:bg-violet-bright" />
                  <span className="min-w-0">
                    <span className="block text-[0.95rem] text-fg/85 transition-colors group-hover:text-fg">{o.name}</span>
                    <span className="block truncate text-[0.78rem] text-faint">{o.kicker}</span>
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* colonne de droite : mise en avant */}
        <div className="lg:col-span-3">
          <Link
            href={offerHref(featured)}
            onClick={onNavigate}
            className="group relative flex h-full min-h-[190px] flex-col justify-between overflow-hidden rounded-2xl border border-line p-6 transition-colors duration-500 hover:border-violet-bright"
          >
            <span
              aria-hidden
              className="absolute inset-0 bg-[linear-gradient(150deg,#7a1c8c,#4c1373_55%,#1c1226)] opacity-80 transition-opacity duration-500 group-hover:opacity-100"
            />
            <span className="relative">
              <span className="label text-snow/60">À découvrir</span>
              <span className="display mt-4 block text-2xl text-snow">{featured.name}</span>
              <span className="mt-2 block text-[0.82rem] leading-snug text-snow/70">{featured.kicker}</span>
            </span>
            <span className="relative mt-6 flex items-center gap-2 text-[0.82rem] text-snow">
              Voir la démo
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-snow text-violet transition-transform duration-500 group-hover:rotate-[-45deg]">
                <Arrow className="h-3.5 w-3.5" />
              </span>
            </span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
