import Link from "next/link";
import { Arrow } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/motion";
import { offerHref, type Offer } from "@/lib/catalog";

/** Liste d'offres en lignes pleine largeur, façon index. */
export function OfferRows({ offers }: { offers: Offer[] }) {
  return (
    <div>
      {offers.map((o, i) => (
        <Reveal key={o.slug} delay={i * 0.035} y={18}>
          <Link
            href={offerHref(o)}
            data-cursor="Voir"
            className="group relative block overflow-hidden border-t border-line last:border-b"
          >
            <span
              aria-hidden
              className="absolute inset-0 origin-bottom scale-y-0 bg-violet transition-transform duration-700 ease-[var(--ease-expo)] group-hover:scale-y-100"
            />
            <div className="relative grid grid-cols-12 items-center gap-4 py-7 transition-colors duration-500 group-hover:text-snow md:py-8">
              <span className="label col-span-2 text-faint transition-colors duration-500 group-hover:text-snow/70 md:col-span-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="display col-span-10 text-[clamp(1.7rem,4vw,3.6rem)] transition-transform duration-700 ease-[var(--ease-expo)] group-hover:translate-x-4 md:col-span-6">
                {o.name}
              </span>
              <span className="col-span-10 col-start-3 text-fg/60 transition-colors duration-500 group-hover:text-snow md:col-span-4 md:col-start-auto">
                <span className="serif-accent block text-lg text-lilac transition-colors group-hover:text-snow">{o.kicker}</span>
                <span className="mt-1 hidden text-sm md:block">{o.tags.join(" · ")}</span>
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
    </div>
  );
}
