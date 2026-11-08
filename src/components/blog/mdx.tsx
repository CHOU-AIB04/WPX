import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import { Children, isValidElement, type ReactNode } from "react";
import { RECOMMENDED_MEDIA_BUDGET, dh, hasDisplayUnit, priceText, type PriceId } from "@/lib/pricing";
import { slugify } from "@/lib/slugify";

/**
 * Rendu des articles MDX : typographie du site, ancres des <h2> (table des
 * matières), liens internes en next/link, tableaux défilants sur mobile.
 *
 * `<Prix id="crmEssentiel" />` affiche « à partir de 800 DH / mois » depuis
 * src/lib/pricing.ts ; `cap` met la majuscule (début de cellule de tableau).
 * Hors Maroc (`priced` faux), il affiche « sur devis », comme le reste du site.
 */

const textOf = (node: ReactNode): string =>
  Children.toArray(node)
    .map((c) => (typeof c === "string" || typeof c === "number" ? String(c) : isValidElement<{ children?: ReactNode }>(c) ? textOf(c.props.children) : ""))
    .join("");

export function articleComponents(priced = true): MDXComponents {
  return {
    h2: ({ children }) => (
      <h2 id={slugify(textOf(children))} className="display mt-16 scroll-mt-28 text-[clamp(1.8rem,3.4vw,2.6rem)] leading-[1.05] first:mt-0">
        {children}
      </h2>
    ),
    h3: ({ children }) => <h3 className="mt-10 text-xl font-medium text-fg">{children}</h3>,
    p: ({ children }) => <p className="mt-5 text-[1.08rem] leading-[1.75] text-fg/75">{children}</p>,
    ul: ({ children }) => <ul className="mt-5 space-y-2.5 pl-1">{children}</ul>,
    ol: ({ children }) => <ol className="mt-5 list-decimal space-y-2.5 pl-6 marker:text-violet-bright">{children}</ol>,
    li: ({ children }) => (
      <li className="relative pl-5 text-[1.05rem] leading-[1.7] text-fg/75 [ol>&]:pl-1 [ul>&]:before:absolute [ul>&]:before:left-0 [ul>&]:before:top-[0.7em] [ul>&]:before:h-1.5 [ul>&]:before:w-1.5 [ul>&]:before:rounded-full [ul>&]:before:bg-violet-bright">
        {children}
      </li>
    ),
    strong: ({ children }) => <strong className="font-medium text-fg">{children}</strong>,
    a: ({ href = "", children }) =>
      href.startsWith("/") ? (
        <Link href={href} className="text-lilac underline decoration-violet-bright/50 underline-offset-4 transition-colors hover:text-fg">
          {children}
        </Link>
      ) : (
        <a href={href} target="_blank" rel="noopener" className="text-lilac underline decoration-violet-bright/50 underline-offset-4">
          {children}
        </a>
      ),
    blockquote: ({ children }) => <blockquote className="mt-8 border-l-2 border-violet-bright pl-6 text-fg/80">{children}</blockquote>,
    table: ({ children }) => (
      <div className="mt-8 overflow-x-auto rounded-[1.2rem] border border-line">
        <table className="w-full min-w-[560px] border-collapse text-left text-[0.95rem]">{children}</table>
      </div>
    ),
    th: ({ children }) => <th className="label border-b border-line bg-ink-2 px-4 py-3 font-normal text-muted">{children}</th>,
    td: ({ children }) => <td className="border-b border-line px-4 py-3.5 align-top text-fg/80">{children}</td>,
    Prix: ({ id, cap = false }: { id: PriceId; cap?: boolean }) => {
      if (!priced) return <>{cap ? "Sur devis" : "sur devis"}</>;
      return <span className="whitespace-nowrap text-fg">{priceText(id, { lower: !cap, currency: "DH", unit: hasDisplayUnit(id) })}</span>;
    },
    /** Budget média recommandé : un conseil, pas un tarif WePushX. */
    Budget: () => <span className="whitespace-nowrap text-fg">{dh(RECOMMENDED_MEDIA_BUDGET)} DH</span>,
  };
}
