"use client";

import { SectionLabel } from "@/components/ui/Button";
import { Counter, Lines, Reveal } from "@/components/ui/motion";
import { results } from "@/lib/content";

export function Results() {
  return (
    <section id="resultats" className="relative scroll-mt-20 bg-paper py-28 text-ink md:py-40">
      <div className="container-x">
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <SectionLabel n="05" tone="light">Résultats clients</SectionLabel>
            <Lines className="display mt-8 text-[clamp(2.6rem,6.6vw,6.4rem)]">
              <span key="1">Des chiffres,</span>
              <span key="2">
                pas des <span className="serif-accent text-accent-paper">promesses.</span>
              </span>
            </Lines>
          </div>
          <Reveal className="md:col-span-4 md:col-start-9">
            <p className="text-ink/65">Ce que nos clients ont obtenu, mesuré dans leurs comptes publicitaires et leur CRM.</p>
          </Reveal>
        </div>

        <div className="mt-16 grid border-t border-line-ink md:mt-24 md:grid-cols-2">
          {results.map((r, i) => (
            <Reveal
              key={r.label}
              delay={(i % 2) * 0.1}
              className={`group border-b border-line-ink py-10 md:py-14 ${i % 2 === 0 ? "md:border-r md:pr-12" : "md:pl-12"}`}
            >
              <span className="label text-ink/50">{r.sector}</span>
              <div className="display mt-6 text-[clamp(5rem,13vw,12rem)] leading-[0.82] tracking-[-0.06em] text-ink transition-colors duration-700 group-hover:text-accent-paper">
                <Counter value={r.value} prefix={r.prefix} suffix={r.suffix} decimals={r.decimals ?? 0} duration={2.2} />
              </div>
              <p className="serif-accent mt-4 text-[1.7rem] text-ink/80">{r.label}</p>
              <p className="label mt-3 text-ink/45">{r.detail}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
