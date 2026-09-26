"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { SectionLabel } from "@/components/ui/Button";
import { EASE, Lines, Reveal } from "@/components/ui/motion";
import { faqs } from "@/lib/content";

export function Faq({ items = faqs, n = "09" }: { items?: typeof faqs; n?: string }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="relative py-24 md:py-32">
      <div className="container-x grid gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <SectionLabel n={n}>FAQ</SectionLabel>
          <Lines className="display mt-8 text-[clamp(2.6rem,5vw,4.6rem)]">
            <span key="1">Vos</span>
            <span key="2" className="serif-accent text-lilac">questions.</span>
          </Lines>
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-xs text-fg/60">Transparence totale. Une autre question ? On répond sous 24h.</p>
          </Reveal>
        </div>
        <div className="md:col-span-8">
          {items.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 0.04} y={16}>
                <div className="border-t border-line last:border-b">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-6 py-7 text-left"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    <span className={`text-[clamp(1.15rem,1.8vw,1.5rem)] transition-colors ${isOpen ? "text-fg" : "text-fg/75"}`}>{f.q}</span>
                    <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${isOpen ? "rotate-45 border-violet-bright bg-violet-bright text-snow" : "border-line"}`}>
                      +
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.55, ease: EASE }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-2xl pb-8 text-fg/65">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
