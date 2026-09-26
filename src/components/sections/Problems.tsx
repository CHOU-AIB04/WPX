"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { SectionLabel } from "@/components/ui/Button";
import { EASE, Lines, Reveal } from "@/components/ui/motion";
import { problems } from "@/lib/content";

export function Problems() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section className="relative py-24 md:py-32">
      <div className="container-x">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <SectionLabel n="02">Où part votre argent</SectionLabel>
            <Lines className="display mt-8 text-[clamp(2.6rem,6vw,5.6rem)]">
              <span key="1">Vous perdez</span>
              <span key="2">de l&apos;argent</span>
              <span key="3" className="serif-accent text-lilac">chaque jour.</span>
            </Lines>
            <Reveal delay={0.2}>
              <p className="mt-8 max-w-sm text-fg/65">
                Quatre fuites qu&apos;on retrouve dans presque tous les audits de PME marocaines. Et ce qu&apos;on installe pour les colmater.
              </p>
            </Reveal>
          </div>

          <div className="md:col-span-7 md:pt-4">
            {problems.map((p, i) => {
              const open = active === i;
              return (
                <Reveal key={p.title} delay={i * 0.06}>
                  <button
                    type="button"
                    onClick={() => setActive(open ? null : i)}
                    onMouseEnter={() => setActive(i)}
                    className="group relative block w-full border-t border-line py-7 text-left last:border-b"
                    aria-expanded={open}
                  >
                    <motion.span
                      aria-hidden
                      className="absolute inset-x-0 top-0 h-px origin-left bg-violet-bright"
                      initial={false}
                      animate={{ scaleX: open ? 1 : 0 }}
                      transition={{ duration: 0.7, ease: EASE }}
                    />
                    <div className="flex items-baseline gap-6">
                      <span className="label w-8 shrink-0 text-faint">0{i + 1}</span>
                      <span className={`display flex-1 text-[clamp(1.6rem,3vw,2.6rem)] transition-colors duration-500 ${open ? "text-fg" : "text-fg/55"}`}>
                        {p.title}
                      </span>
                      <motion.span animate={{ rotate: open ? 45 : 0 }} className="text-2xl text-muted">
                        +
                      </motion.span>
                    </div>
                    <motion.div
                      initial={false}
                      animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
                      transition={{ duration: 0.6, ease: EASE }}
                      className="overflow-hidden pl-14"
                    >
                      <p className="pt-4 text-fg/65">{p.body}</p>
                      <p className="mt-4 flex items-start gap-3 text-lilac">
                        <span className="label mt-1 shrink-0 text-violet-bright">Fix</span>
                        {p.fix}
                      </p>
                    </motion.div>
                  </button>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
