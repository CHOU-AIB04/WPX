"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { Button, SectionLabel } from "@/components/ui/Button";
import { EASE, Lines, Reveal } from "@/components/ui/motion";
import { dh, ON_REQUEST } from "@/lib/pricing";
import { plans } from "@/lib/content";

/**
 * Les trois forfaits agence, avec la bascule mensuel / annuel.
 *
 * Le bloc porte son propre en-tête parce que l'état de la bascule doit être
 * partagé entre le titre et les cartes. Les appelants (la home et /tarifs)
 * fournissent la section et les libellés.
 *
 * `showPrices` vient de la géolocalisation : hors Maroc, les offres et leur
 * contenu restent, les montants disparaissent.
 */
export function PlansGrid({
  n,
  label,
  first,
  second,
  footnote,
  showPrices = true,
}: {
  n: string;
  label: string;
  first: string;
  second: string;
  /** Mention de bas de bloc. Omise, rien n'est rendu. */
  footnote?: string;
  showPrices?: boolean;
}) {
  const [annual, setAnnual] = useState(false);

  return (
    <>
      <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
        <div>
          <SectionLabel n={n}>{label}</SectionLabel>
          <Lines className="display mt-8 text-[clamp(2.6rem,6vw,5.6rem)]">
            <span key="1">{first}</span>
            <span key="2" className="serif-accent text-lilac">
              {second}
            </span>
          </Lines>
        </div>
        {showPrices && (
          <Reveal>
            <div className="relative inline-flex rounded-full border border-line p-1.5" role="group" aria-label="Période de facturation">
              {[
                { k: false, l: "Mensuel" },
                { k: true, l: "Annuel -15%" },
              ].map((o) => (
                <button
                  key={o.l}
                  type="button"
                  onClick={() => setAnnual(o.k)}
                  aria-pressed={annual === o.k}
                  className={`relative z-10 rounded-full px-5 py-2.5 text-sm transition-colors ${annual === o.k ? "text-ink" : "text-fg/70"}`}
                >
                  {annual === o.k && (
                    <motion.span
                      layoutId="billing"
                      className="absolute inset-0 -z-10 rounded-full bg-fg"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  {o.l}
                </button>
              ))}
            </div>
          </Reveal>
        )}
      </div>

      <div className="mt-16 grid gap-5 lg:grid-cols-3">
        {plans.map((p, i) => {
          const price = annual ? Math.round(p.monthly * 0.85) : p.monthly;
          return (
            <Reveal key={p.name} delay={i * 0.1} className="h-full">
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.5, ease: EASE }}
                className={`relative flex h-full flex-col rounded-[1.8rem] p-8 ${
                  p.popular ? "bg-violet text-snow shadow-[0_40px_100px_-30px_rgba(122,28,140,0.8)]" : "border border-line bg-ink-2"
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="display text-3xl">{p.name}</h3>
                  {p.popular && <span className="label rounded-full bg-snow px-3 py-1.5 text-violet">Le plus choisi</span>}
                </div>
                <p className={`mt-4 lg:min-h-[4.5rem] ${p.popular ? "text-snow/85" : "text-fg/60"}`}>{p.pitch}</p>

                <div className="mt-8">
                  {showPrices ? (
                    <>
                      <span className="display relative block overflow-hidden text-[clamp(3rem,4.2vw,4.4rem)] leading-none">
                        <AnimatePresence mode="popLayout" initial={false}>
                          <motion.span
                            key={price}
                            className="block tabular-nums"
                            initial={{ y: "100%", opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: "-100%", opacity: 0 }}
                            transition={{ duration: 0.5, ease: EASE }}
                          >
                            {dh(price)}
                          </motion.span>
                        </AnimatePresence>
                      </span>
                      <span className={`mt-2 block ${p.popular ? "text-snow/80" : "text-muted"}`}>MAD HT / mois</span>
                    </>
                  ) : (
                    <>
                      <span className={`serif-accent block text-[clamp(2.2rem,3.2vw,3rem)] leading-none ${p.popular ? "text-snow" : "text-lilac"}`}>
                        {ON_REQUEST}
                      </span>
                      <span className={`mt-3 block text-sm ${p.popular ? "text-snow/80" : "text-muted"}`}>
                        Tarif établi après l&apos;audit, selon votre marché
                      </span>
                    </>
                  )}
                </div>

                <ul className={`mt-8 space-y-3.5 border-t pt-8 ${p.popular ? "border-snow/20" : "border-line"}`}>
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${p.popular ? "bg-snow" : "bg-violet-bright"}`} />
                      <span className={p.popular ? "text-snow/95" : "text-fg/75"}>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-10">
                  <Button
                    href={`/contact?plan=${p.name.toLowerCase()}`}
                    variant={p.popular ? "light" : "ghost"}
                    trackAs={`pricing_${p.name.toLowerCase()}`}
                  >
                    {showPrices ? p.cta : "Demander un devis"}
                  </Button>
                </div>
              </motion.div>
            </Reveal>
          );
        })}
      </div>

      {footnote && <p className="label mt-10 text-center text-faint">{footnote}</p>}
    </>
  );
}
