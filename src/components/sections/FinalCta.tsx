"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Link from "next/link";
import { useRef } from "react";
import { Arrow } from "@/components/ui/Button";
import { Magnetic } from "@/components/ui/motion";
import { track } from "@/lib/track";

export function FinalCta() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  const scale = useTransform(scrollYProgress, [0, 1], [0.86, 1]);
  const radius = useTransform(scrollYProgress, [0, 1], ["6rem", "0rem"]);

  return (
    <section ref={ref} className="relative px-0 pb-0">
      <motion.div style={{ scale, borderRadius: radius }} className="relative overflow-hidden bg-paper text-ink">
        <div className="container-x relative flex min-h-[90vh] flex-col justify-between py-20 md:py-28">
          <p className="label text-ink/55">(10) Audit gratuit · 30 minutes</p>
          <div className="grid items-end gap-12 md:grid-cols-12">
            <h2 className="display text-[clamp(3.4rem,11vw,12rem)] md:col-span-8">
              Prêt à <br />
              <span className="serif-accent text-accent-paper">scaler</span> ?
            </h2>
            <div className="flex flex-col items-start gap-8 md:col-span-4 md:items-end">
              <p className="max-w-sm text-lg text-ink/70 md:text-right">
                On analyse votre situation, on identifie exactement où vous perdez de l&apos;argent, et on vous dit comment le récupérer. Sans engagement.
              </p>
              <Magnetic strength={0.4}>
                <Link
                  href="/contact"
                  data-cursor="Go"
                  onClick={() => track("cta_click", { cta: "final_audit" })}
                  className="group relative flex h-44 w-44 items-center justify-center overflow-hidden rounded-full bg-ink text-fg transition-colors duration-500 hover:text-snow md:h-52 md:w-52"
                >
                  <span className="absolute inset-0 translate-y-full rounded-full bg-violet transition-transform duration-700 ease-[var(--ease-expo)] group-hover:translate-y-0" />
                  <span className="relative flex flex-col items-center gap-2 text-center text-[0.95rem] font-medium">
                    Réserver
                    <br />
                    mon audit
                    <Arrow className="h-5 w-5 -rotate-45 transition-transform duration-500 group-hover:rotate-0" />
                  </span>
                </Link>
              </Magnetic>
            </div>
          </div>
          <div className="label flex flex-wrap gap-x-8 gap-y-2 border-t border-line-ink pt-6 text-ink/55">
            <span>✦ Garantie 60 jours</span>
            <span>✦ Réponse sous 24h</span>
            <span>✦ Aucun engagement</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
