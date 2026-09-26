"use client";

import { AnimatePresence, motion, useMotionValue, useSpring } from "motion/react";
import Link from "next/link";
import { useRef, useState } from "react";
import { Arrow, Button, SectionLabel } from "@/components/ui/Button";
import { EASE, Lines, Reveal } from "@/components/ui/motion";
import { services } from "@/lib/content";
import { ServiceVisual } from "./ServiceVisual";

export function Services() {
  const [hovered, setHovered] = useState<number | null>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 180, damping: 22, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 180, damping: 22, mass: 0.6 });

  const onMove = (e: React.PointerEvent) => {
    const r = listRef.current?.getBoundingClientRect();
    if (!r) return;
    x.set(e.clientX - r.left);
    y.set(e.clientY - r.top);
  };

  return (
    <section id="services" className="relative scroll-mt-20 py-24 md:py-32">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
          <div>
            <SectionLabel n="03">Services</SectionLabel>
            <Lines className="display mt-8 text-[clamp(2.6rem,6.6vw,6.4rem)]">
              <span key="1">Tout pour dominer</span>
              <span key="2">
                votre <span className="serif-accent text-lilac">marché digital.</span>
              </span>
            </Lines>
          </div>
          <Reveal className="max-w-sm">
            <p className="text-fg/65">
              Six leviers qui s&apos;amplifient entre eux. Les pubs amènent le trafic, le site convertit, le CRM relance. Et tout est mesuré.
            </p>
            <div className="mt-6">
              <Button href="/services" variant="ghost">Tous les services</Button>
            </div>
          </Reveal>
        </div>

        <div ref={listRef} className="relative mt-16 md:mt-24" onPointerMove={onMove} onPointerLeave={() => setHovered(null)}>
          {services.map((s, i) => (
            <Reveal key={s.id} delay={i * 0.04} y={20}>
              <Link
                href={`/services#${s.id}`}
                onPointerEnter={() => setHovered(i)}
                data-cursor="Voir"
                className="group relative block overflow-hidden border-t border-line last:border-b"
              >
                <span
                  aria-hidden
                  className="absolute inset-0 origin-bottom scale-y-0 bg-violet transition-transform duration-700 ease-[var(--ease-expo)] group-hover:scale-y-100"
                />
                <div className="relative grid grid-cols-12 items-center gap-4 py-7 transition-colors duration-500 group-hover:text-snow md:py-9">
                  <span className="label col-span-2 text-faint transition-colors duration-500 group-hover:text-snow/70 md:col-span-1">
                    0{i + 1}
                  </span>
                  <span className="display col-span-10 text-[clamp(2rem,5vw,4.6rem)] transition-transform duration-700 ease-[var(--ease-expo)] group-hover:translate-x-4 md:col-span-6">
                    {s.name}
                  </span>
                  <span className="col-span-10 col-start-3 text-fg/60 transition-colors duration-500 group-hover:text-snow md:col-span-4 md:col-start-auto">
                    <span className="serif-accent block text-xl text-lilac transition-colors group-hover:text-snow">{s.kicker}</span>
                    <span className="mt-1 hidden text-sm md:block">{s.tags.join(" · ")}</span>
                  </span>
                  <span className="col-span-12 hidden justify-end md:col-span-1 md:flex">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full border border-line transition-all duration-500 group-hover:rotate-[-45deg] group-hover:border-snow group-hover:bg-snow group-hover:text-violet">
                      <Arrow />
                    </span>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}

          {/* aperçu qui suit le curseur (desktop) */}
          <motion.div
            aria-hidden
            className="pointer-events-none absolute left-0 top-0 z-10 hidden h-[230px] w-[320px] lg:block"
            style={{ x: sx, y: sy, translateX: "-50%", translateY: "-50%" }}
          >
            <AnimatePresence mode="popLayout">
              {hovered !== null && (
                <motion.div
                  key={services[hovered].id}
                  initial={{ opacity: 0, scale: 0.7, rotate: -6 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.8, rotate: 4 }}
                  transition={{ duration: 0.45, ease: EASE }}
                  className="h-full w-full shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]"
                >
                  <ServiceVisual id={services[hovered].id} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
