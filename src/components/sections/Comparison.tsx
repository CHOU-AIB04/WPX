"use client";

import { motion } from "motion/react";
import { Mark } from "@/components/brand/Mark";
import { SectionLabel } from "@/components/ui/Button";
import { EASE, Lines } from "@/components/ui/motion";
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

        <div className="mt-12 md:hidden">
          <div className="grid grid-cols-[1fr_4.5rem_4.5rem] items-end gap-2 pb-3">
            <span />
            <span className="label text-center !text-[0.58rem] text-faint">Agence classique</span>
            <span className="label rounded-t-2xl bg-violet pb-2 pt-3 text-center !text-[0.62rem] text-snow">WePushX</span>
          </div>
          {comparison.map((row, i) => (
            <div key={row.feature} className="grid grid-cols-[1fr_4.5rem_4.5rem] items-center gap-2 border-t border-line">
              <span className="py-4 text-sm text-fg/85">{row.feature}</span>
              <span className="text-center"><Cell v={row.classic} /></span>
              <span className={`flex h-full items-center justify-center bg-violet ${i === comparison.length - 1 ? "rounded-b-2xl" : ""}`}><Cell v={row.wpx} strong /></span>
            </div>
          ))}
        </div>

        <div className="mt-16 hidden overflow-x-auto md:block">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr>
                <th className="w-[40%] py-6" />
                <th className="py-6 text-center font-normal">
                  <span className="block font-medium">DIY</span>
                  <span className="label text-faint">Vous tout seul</span>
                </th>
                <th className="py-6 text-center font-normal">
                  <span className="block font-medium">Agence classique</span>
                  <span className="label text-faint">Prestataire standard</span>
                </th>
                <th className="relative rounded-t-3xl bg-violet py-6 text-center font-normal text-snow">
                  <span className="flex items-center justify-center gap-2 font-semibold">
                    <Mark className="h-4" light="#f5f0f8" dark="#d8b6ea" /> WePushX
                  </span>
                  <span className="label text-snow/70">Recommandé</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row, i) => (
                <motion.tr
                  key={row.feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "0px 0px -8% 0px" }}
                  transition={{ duration: 0.7, delay: i * 0.05, ease: EASE }}
                  className="border-t border-line"
                >
                  <td className="py-5 pr-4 text-fg/85">{row.feature}</td>
                  <td className="py-5 text-center"><Cell v={row.diy} /></td>
                  <td className="py-5 text-center"><Cell v={row.classic} /></td>
                  <td className={`bg-violet py-5 text-center ${i === comparison.length - 1 ? "rounded-b-3xl" : ""}`}><Cell v={row.wpx} strong /></td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
