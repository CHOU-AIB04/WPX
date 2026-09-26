"use client";

import { Mark } from "@/components/brand/Mark";
import { Marquee } from "@/components/ui/Marquee";
import { marqueePlatforms, marqueeSectors } from "@/lib/content";

export function Marquees() {
  return (
    <section aria-label="Secteurs et plateformes" className="relative border-y border-line bg-ink-2 py-8">
      <Marquee speed={2.2} className="py-2">
        {marqueeSectors.map((s) => (
          <span key={s} className="flex items-center gap-8 pr-8">
            <span className="display text-[clamp(2.4rem,6vw,5.5rem)]">{s}</span>
            <Mark className="h-[clamp(1.6rem,3.6vw,3.2rem)]" />
          </span>
        ))}
      </Marquee>
      <Marquee speed={-3} className="mt-2 py-2">
        {marqueePlatforms.map((s) => (
          <span key={s} className="flex items-center gap-8 pr-8">
            <span className="serif-accent text-[clamp(1.8rem,4vw,3.6rem)] text-muted">{s}</span>
            <span className="text-violet-bright">✦</span>
          </span>
        ))}
      </Marquee>
    </section>
  );
}
