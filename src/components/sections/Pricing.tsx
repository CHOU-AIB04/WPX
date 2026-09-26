"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { Button, SectionLabel } from "@/components/ui/Button";
import { EASE, Lines, Reveal } from "@/components/ui/motion";
import { plans } from "@/lib/content";

const fmt = (n: number) => n.toLocaleString("fr-FR").replace(/ | /g, ".");

export function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="tarifs" className="relative scroll-mt-20 border-t border-line bg-ink py-24 md:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-[60%] bg-[radial-gradient(60%_60%_at_50%_0%,rgba(122,28,140,0.25),transparent)]" />
      <div className="container-x relative">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
          <div>
            <SectionLabel n="08">Tarifs</SectionLabel>
            <Lines className="display mt-8 text-[clamp(2.6rem,6vw,5.6rem)]">
              <span key="1">Investissez dans</span>
              <span key="2" className="serif-accent text-lilac">votre croissance.</span>
            </Lines>
          </div>
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
                    <motion.span layoutId="billing" className="absolute inset-0 -z-10 rounded-full bg-fg" transition={{ type: "spring", stiffness: 400, damping: 32 }} />
                  )}
                  {o.l}
                </button>
              ))}
            </div>
          </Reveal>
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
                          {fmt(price)}
                        </motion.span>
                      </AnimatePresence>
                    </span>
                    <span className={`mt-2 block ${p.popular ? "text-snow/80" : "text-muted"}`}>MAD HT / mois</span>
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
                    <Button href={`/contact?plan=${p.name.toLowerCase()}`} variant={p.popular ? "light" : "ghost"} trackAs={`pricing_${p.name.toLowerCase()}`}>
                      {p.cta}
                    </Button>
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>

        <p className="label mt-10 text-center text-faint">
          Prix en MAD HT · Engagement minimum 3 mois · Garantie résultats 60 jours · Budget publicitaire séparé
        </p>
      </div>
    </section>
  );
}
