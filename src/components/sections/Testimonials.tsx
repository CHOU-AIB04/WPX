"use client";

import { SectionLabel } from "@/components/ui/Button";
import { Marquee } from "@/components/ui/Marquee";
import { Lines } from "@/components/ui/motion";
import { testimonials } from "@/lib/content";

type T = (typeof testimonials)[number];

function Card({ t }: { t: T }) {
  const initials = t.name.replace(/[^A-Z]/g, "");
  return (
    <figure className="mr-5 flex w-[min(82vw,27rem)] shrink-0 flex-col justify-between whitespace-normal rounded-[1.6rem] border border-line bg-ink-2 p-7 transition-colors duration-500 hover:border-violet-bright/50">
      <div>
        <span className="label inline-block rounded-full bg-violet/25 px-3 py-1.5 text-lilac">✦ {t.result}</span>
        <blockquote className="mt-6 text-[1.08rem] leading-relaxed text-fg/85">&ldquo;{t.quote}&rdquo;</blockquote>
      </div>
      <figcaption className="mt-8 flex items-center gap-3 border-t border-line pt-5">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-violet to-violet-deep text-sm font-semibold text-snow">{initials}</span>
        <span>
          <span className="block text-sm font-medium">{t.name}</span>
          <span className="block text-xs text-faint">{t.role}</span>
        </span>
        <span className="label ml-auto text-faint">{t.sector}</span>
      </figcaption>
    </figure>
  );
}

export function Testimonials() {
  const half = Math.ceil(testimonials.length / 2);
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="container-x">
        <SectionLabel n="07">Témoignages</SectionLabel>
        <Lines className="display mt-8 text-[clamp(2.6rem,6vw,5.6rem)]">
          <span key="1">Ils ont choisi</span>
          <span key="2" className="serif-accent text-lilac">de scaler.</span>
        </Lines>
      </div>
      <div className="mt-16 space-y-5" data-cursor="Drag">
        <Marquee speed={1.6} pauseOnHover>
          {testimonials.slice(0, half).map((t) => <Card key={t.name} t={t} />)}
          {testimonials.slice(0, half).map((t) => <Card key={t.name + "b"} t={t} />)}
        </Marquee>
        <Marquee speed={-1.6} pauseOnHover>
          {testimonials.slice(half).map((t) => <Card key={t.name} t={t} />)}
          {testimonials.slice(half).map((t) => <Card key={t.name + "b"} t={t} />)}
        </Marquee>
      </div>
    </section>
  );
}
