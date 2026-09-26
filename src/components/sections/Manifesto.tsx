"use client";

import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { useRef } from "react";
import { SectionLabel } from "@/components/ui/Button";
import { manifesto } from "@/lib/content";

const HIGHLIGHT = new Set(["système.", "machine", "complète", "chaque", "dirham."]);

export function Manifesto() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.45"] });
  const words = manifesto.split(" ");

  return (
    <section className="relative bg-paper py-28 text-ink md:py-40">
      <div className="container-x grid gap-10 md:grid-cols-12">
        <div className="md:col-span-3">
          <SectionLabel n="01" tone="light">Le constat</SectionLabel>
        </div>
        <div ref={ref} className="md:col-span-9">
          <p className="display text-[clamp(2rem,4.6vw,4.4rem)] leading-[1.02] tracking-[-0.035em]">
            {words.map((w, i) => (
              <Word key={i} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]} accent={HIGHLIGHT.has(w)}>
                {w}
              </Word>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}

function Word({ children, progress, range, accent }: { children: string; progress: MotionValue<number>; range: [number, number]; accent: boolean }) {
  const opacity = useTransform(progress, range, [0.14, 1]);
  return (
    <motion.span style={{ opacity }} className={`mr-[0.25em] inline-block ${accent ? "serif-accent text-accent-paper" : ""}`}>
      {children}
    </motion.span>
  );
}
