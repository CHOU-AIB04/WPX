import type { CSSProperties } from "react";
import { MarkStatic } from "@/components/brand/MarkStatic";
import { SectionLabel } from "@/components/ui/Button";
import { Lines } from "@/components/ui/motion";
import { comparison, type Mark as M } from "@/lib/content";

function Cell({ v, strong = false }: { v: M; strong?: boolean }) {
  if (v === "yes")
    return (
      <span className={`inline-flex h-8 w-8 items-center justify-center rounded-full ${strong ? "bg-snow text-violet" : "bg-positive/15 text-positive"}`}>
        <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" aria-label="Inclus"><path d="m3.5 8.5 3 3 6-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </span>
    );
  if (v === "partial") return <span className="label text-warn" aria-label="Partiel">Partiel</span>;
  return <span className="text-faint" aria-label="Non disponible">-</span>;
}

export function Comparison() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container-x">
        <SectionLabel n="06">Pourquoi WePushX</SectionLabel>
        <Lines className="display mt-8 text-[clamp(2.6rem,6vw,5.6rem)]">
          <span key="1">La comparaison</span>
          <span key="2" className="serif-accent text-lilac">parle d&apos;elle-même.</span>
        </Lines>

        {/* Un seul tableau pour tous les écrans : sur mobile, la colonne DIY
            disparaît et les cellules se resserrent (avant : deux rendus
            complets, mobile et desktop, dans le DOM). */}
        <div className="mt-12 md:mt-16 md:overflow-x-auto">
          <table className="w-full border-collapse text-left md:min-w-[640px]">
            <thead>
              <tr>
                <th className="py-3 md:w-[40%] md:py-6" />
                <th className="hidden py-6 text-center font-normal md:table-cell">
                  <span className="block font-medium">DIY</span>
                  <span className="label text-faint">Vous tout seul</span>
                </th>
                <th className="w-[4.5rem] px-1 pb-3 text-center align-bottom font-normal md:w-auto md:px-0 md:py-6 md:align-middle">
                  <span className="label block !text-[0.58rem] text-faint md:hidden">Agence classique</span>
                  <span className="hidden font-medium md:block">Agence classique</span>
                  <span className="label hidden text-faint md:block">Prestataire standard</span>
                </th>
                <th className="relative w-[4.5rem] rounded-t-2xl bg-violet pb-2 pt-3 text-center font-normal text-snow md:w-auto md:rounded-t-3xl md:py-6">
                  <span className="label !text-[0.62rem] md:hidden">WePushX</span>
                  <span className="hidden items-center justify-center gap-2 font-semibold md:flex">
                    <MarkStatic className="h-4 w-auto" light="#f5f0f8" dark="#d8b6ea" /> WePushX
                  </span>
                  <span className="label hidden text-snow/70 md:block">Recommandé</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row, i) => (
                <tr
                  key={row.feature}
                  data-reveal=""
                  style={{ "--rv-d": `${i * 0.05}s`, "--rv-y": "0px" } as CSSProperties}
                  className="border-t border-line"
                >
                  <td className="py-4 pr-2 text-sm text-fg/85 md:py-5 md:pr-4 md:text-base">{row.feature}</td>
                  <td className="hidden py-5 text-center md:table-cell"><Cell v={row.diy} /></td>
                  <td className="py-4 text-center md:py-5"><Cell v={row.classic} /></td>
                  <td className={`bg-violet py-4 text-center md:py-5 ${i === comparison.length - 1 ? "rounded-b-2xl md:rounded-b-3xl" : ""}`}><Cell v={row.wpx} strong /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
