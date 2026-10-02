"use client";

import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { EASE } from "@/components/ui/motion";

type Item = { slug: string; name: string };

/**
 * Sommaire collant du catalogue fusionné (/offres).
 *
 * Dix-huit sections sur une seule page : sans repère, on se perd. Le rail
 * suit la lecture via un IntersectionObserver et déplace un marqueur violet
 * sur l'entrée courante. Ancres natives : Lenis intercepte déjà les liens
 * `#…` avec son offset de header, inutile de recâbler le scroll.
 *
 * Desktop large uniquement — sur mobile le sommaire d'en-tête suffit.
 */
export function OffersRail({ groups }: { groups: { id: string; title: string; items: Item[] }[] }) {
  const [active, setActive] = useState<string>(groups[0]?.items[0]?.slug ?? "");
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const slugs = groups.flatMap((g) => g.items.map((i) => i.slug));
    const nodes = slugs
      .map((s) => document.getElementById(s))
      .filter((n): n is HTMLElement => Boolean(n));
    if (!nodes.length) return;

    // Bande de détection sous le header : la section qui la traverse gagne.
    const io = new IntersectionObserver(
      (entries) => {
        const hit = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (hit?.target.id) setActive(hit.target.id);
      },
      { rootMargin: "-18% 0px -70% 0px", threshold: 0 },
    );

    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, [groups]);

  /**
   * Vingt entrées dépassent la hauteur d'écran : le rail défile dans sa propre
   * boîte, et l'entrée active y est ramenée sans jamais bouger la page.
   */
  useEffect(() => {
    const box = navRef.current;
    const link = box?.querySelector<HTMLElement>(`a[data-slug="${active}"]`);
    if (!box || !link) return;
    const top = link.offsetTop;
    const bottom = top + link.offsetHeight;
    if (top < box.scrollTop + 8) box.scrollTo({ top: Math.max(0, top - 16), behavior: "smooth" });
    else if (bottom > box.scrollTop + box.clientHeight - 8)
      box.scrollTo({ top: bottom - box.clientHeight + 16, behavior: "smooth" });
  }, [active]);

  return (
    <nav
      ref={navRef}
      aria-label="Sommaire des offres"
      className="sticky top-28 hidden max-h-[calc(100vh-9rem)] overflow-y-auto pr-3 [scrollbar-width:none] xl:block [&::-webkit-scrollbar]:hidden"
    >
      {groups.map((g, gi) => (
        <div key={g.id} className={gi > 0 ? "mt-10 border-t border-line pt-8" : undefined}>
          <p className="label text-faint">{g.title}</p>
          <ul className="mt-5">
            {g.items.map((it) => {
              const on = active === it.slug;
              return (
                <li key={it.slug}>
                  <a
                    href={`#${it.slug}`}
                    data-slug={it.slug}
                    aria-current={on ? "true" : undefined}
                    className="group relative flex items-center gap-3 py-[0.42rem] text-[0.88rem] transition-colors duration-300"
                  >
                    <span className="relative flex h-px w-4 shrink-0 items-center">
                      <span
                        aria-hidden
                        className={`h-px w-full origin-left transition-all duration-500 ease-[var(--ease-expo)] ${
                          on ? "scale-x-100 bg-violet-bright" : "scale-x-50 bg-faint/60 group-hover:scale-x-100"
                        }`}
                      />
                    </span>
                    <span className={on ? "text-fg" : "text-fg/45 group-hover:text-fg/80"}>{it.name}</span>
                    {on && (
                      <motion.span
                        layoutId="rail-dot"
                        transition={{ duration: 0.45, ease: EASE }}
                        aria-hidden
                        className="absolute -left-3 h-1.5 w-1.5 rounded-full bg-violet-bright"
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}
