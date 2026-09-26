"use client";

import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { SectionLabel } from "@/components/ui/Button";
import { Lines, Reveal } from "@/components/ui/motion";
import { steps } from "@/lib/content";

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], [0, -distance]);
  const smooth = useSpring(x, { stiffness: 120, damping: 30, mass: 0.4 });
  const bar = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    const measure = () => {
      const t = trackRef.current;
      if (!t) return;
      setDistance(Math.max(0, t.scrollWidth - window.innerWidth));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  return (
    <section id="process" className="relative scroll-mt-20 bg-ink-2">
      {/* Desktop : défilement horizontal épinglé */}
      <div ref={ref} className="relative hidden md:block" style={{ height: `calc(100vh + ${distance}px)` }}>
        <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
          <div className="container-x mb-12 flex items-end justify-between">
            <div>
              <SectionLabel n="04">Méthode</SectionLabel>
              <Lines className="display mt-6 text-[clamp(2.6rem,5.4vw,5.4rem)]">
                <span key="1">De l&apos;audit</span>
                <span key="2">
                  à la <span className="serif-accent text-lilac">croissance.</span>
                </span>
              </Lines>
            </div>
            <p className="label max-w-[16rem] text-right text-muted">Un process éprouvé, transparent, sans jargon. Scrollez →</p>
          </div>

          <motion.div ref={trackRef} style={{ x: smooth }} className="flex gap-6 pl-[clamp(1rem,4vw,3.5rem)] pr-[20vw]">
            {steps.map((p, i) => (
              <Step key={p.n} p={p} i={i} />
            ))}
          </motion.div>

          <div className="container-x mt-12">
            <div className="h-px w-full bg-line">
              <motion.div className="h-px origin-left bg-violet-bright" style={{ scaleX: bar }} />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile : pile verticale */}
      <div className="container-x py-24 md:hidden">
        <SectionLabel n="04">Méthode</SectionLabel>
        <Lines className="display mt-6 text-[2.8rem]">
          <span key="1">De l&apos;audit</span>
          <span key="2">
            à la <span className="serif-accent text-lilac">croissance.</span>
          </span>
        </Lines>
        <div className="mt-10 space-y-4">
          {steps.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.05}>
              <Step p={p} i={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Step({ p, i }: { p: (typeof steps)[number]; i: number }) {
  return (
    <article
      className={`group relative flex min-h-[26rem] w-full shrink-0 flex-col justify-between overflow-hidden rounded-[1.75rem] border border-line p-8 md:h-[52vh] md:min-h-[24rem] md:w-[min(34vw,30rem)] ${
        i === 4 ? "bg-violet text-snow" : "bg-ink"
      }`}
    >
      <div className="flex items-start justify-between">
        <span className={`label ${i === 4 ? "text-snow/80" : "text-violet-bright"}`}>{p.duration}</span>
        <span className={`display text-[6.5rem] leading-[0.8] transition-colors duration-700 ${i === 4 ? "text-snow/15 group-hover:text-snow/30" : "text-fg/10 group-hover:text-fg/25"}`}>{p.n}</span>
      </div>
      <div className="my-8 flex items-center gap-2" aria-hidden>
        {steps.map((_, j) => (
          <span
            key={j}
            className={`h-1 rounded-full transition-all duration-700 ${j === i ? "w-12 " + (i === 4 ? "bg-snow" : "bg-violet-bright") : j < i ? "w-4 " + (i === 4 ? "bg-snow/60" : "bg-violet/70") : "w-4 bg-fg/10"}`}
          />
        ))}
      </div>
      <div>
        <h3 className="display text-[clamp(1.9rem,2.6vw,2.6rem)]">{p.title}</h3>
        <p className={`mt-4 max-w-sm ${i === 4 ? "text-snow/85" : "text-fg/60"}`}>{p.body}</p>
      </div>
    </article>
  );
}
