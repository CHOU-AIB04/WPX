"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Mark } from "@/components/brand/Mark";
import { Lines, Reveal } from "@/components/ui/motion";

export function Guarantee() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const rotate = useTransform(scrollYProgress, [0, 1], [-120, 120]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-violet py-24 text-snow md:py-32">
      <div className="container-x grid items-center gap-14 md:grid-cols-12">
        <div className="relative mx-auto aspect-square w-64 md:col-span-4 md:w-full md:max-w-[22rem]">
          <motion.svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full" style={{ rotate }} aria-hidden>
            <defs>
              <path id="circle" d="M100,100 m-82,0 a82,82 0 1,1 164,0 a82,82 0 1,1 -164,0" />
            </defs>
            <text className="fill-snow font-mono text-[11.5px] uppercase tracking-[0.18em]">
              <textPath href="#circle" textLength="512" lengthAdjust="spacing">Garantie 60 jours · Remboursé si 0 lead · Garantie 60 jours · Remboursé si 0 lead · </textPath>
            </text>
          </motion.svg>
          <div className="absolute inset-[26%] flex items-center justify-center rounded-full bg-ink">
            <Mark className="w-1/2" light="#b24fd3" dark="#7a1c8c" />
          </div>
        </div>

        <div className="md:col-span-7 md:col-start-6">
          <p className="label text-snow/70">Notre engagement</p>
          <Lines className="display mt-6 text-[clamp(2.6rem,6vw,5.8rem)]">
            <span key="1">0 lead en 60 jours ?</span>
            <span key="2" className="serif-accent">On vous rembourse.</span>
          </Lines>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-xl text-lg text-snow/85">
              100% de nos honoraires, sans discussion. Un contrat transparent, sans clause abusive. On ne gagne que si vous gagnez.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
