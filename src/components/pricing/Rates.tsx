import Link from "next/link";
import { Arrow } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/motion";
import { dh, serviceRates, unitPrices } from "@/lib/pricing";
import { offerHref } from "@/lib/catalog";
import { services } from "@/lib/content";

/**
 * Le prix de chaque service, en lignes.
 *
 * Une ligne par service : mise en place, récurrent, forfait qui l'inclut.
 * Pas de vrai <table> — sur mobile la ligne se replie en bloc, ce qu'une
 * table ne sait pas faire proprement.
 *
 * Hors Maroc (`showPrices` à faux), les deux colonnes de montants
 * disparaissent : restent le service, sa description et le forfait qui
 * l'inclut, ce qui garde la page informative sans publier de tarif.
 */
export function ServiceRatesList({ showPrices = true }: { showPrices?: boolean }) {
  return (
    <div>
      {/* en-têtes, desktop seulement */}
      <div className="label hidden grid-cols-12 gap-4 border-b border-line pb-4 text-faint md:grid">
        <span className={showPrices ? "col-span-5" : "col-span-8"}>Service</span>
        {showPrices && (
          <>
            <span className="col-span-2 text-right">Mise en place</span>
            <span className="col-span-2 text-right">Récurrent</span>
          </>
        )}
        <span className={`text-right ${showPrices ? "col-span-3" : "col-span-4"}`}>Inclus dès</span>
      </div>

      {serviceRates.map((r, i) => {
        const offer = services.find((s) => s.id === r.id);
        return (
          <Reveal key={r.id} delay={i * 0.04} y={14}>
            <div className="grid grid-cols-12 items-baseline gap-x-4 gap-y-3 border-b border-line py-6">
              <div className={`col-span-12 ${showPrices ? "md:col-span-5" : "md:col-span-8"}`}>
                {offer ? (
                  <Link href={offerHref(offer)} className="group inline-flex items-center gap-2">
                    <span className="display text-xl md:text-2xl">{r.name}</span>
                    <Arrow className="h-3.5 w-3.5 text-faint transition-all duration-500 group-hover:translate-x-1 group-hover:text-violet-bright" />
                  </Link>
                ) : (
                  <span className="display text-xl md:text-2xl">{r.name}</span>
                )}
                <p className="mt-2 max-w-md text-[0.85rem] text-muted">
                  {showPrices ? r.note : (r.noteOffMarket ?? r.note)}
                </p>
              </div>

              {showPrices && (
                <>
                  <div className="col-span-4 md:col-span-2 md:text-right">
                    <span className="label block text-faint md:hidden">Mise en place</span>
                    <span className="tabular-nums text-fg/85">{r.setup ? `${dh(r.setup)} DH` : "—"}</span>
                  </div>

                  <div className="col-span-4 md:col-span-2 md:text-right">
                    <span className="label block text-faint md:hidden">Récurrent</span>
                    <span className="tabular-nums text-fg/85">{r.monthly ? `${dh(r.monthly)} DH` : "—"}</span>
                    <span className="block text-[0.74rem] text-faint">{r.unit}</span>
                  </div>
                </>
              )}

              <div className={`col-span-4 md:text-right ${showPrices ? "md:col-span-3" : "col-span-12 md:col-span-4"}`}>
                <span className="label block text-faint md:hidden">Inclus dès</span>
                {r.includedFrom ? (
                  <span className="serif-accent text-lg text-lilac">{r.includedFrom}</span>
                ) : (
                  <span className="text-[0.85rem] text-faint">À la carte</span>
                )}
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}

/**
 * Ce que coûte la consommation, par unité.
 *
 * Les chiffres viennent de `unitPrices()` : coût fournisseur × marge × taux
 * de change. Personne ne voit le coût d'achat. Hors Maroc, on garde la liste
 * des postes facturés à l'usage — l'information structurante — et on retire
 * les montants.
 */
export function UnitCostsTable({ showPrices = true }: { showPrices?: boolean }) {
  return (
    <div className="grid gap-px overflow-hidden rounded-[1.8rem] border border-line bg-line md:grid-cols-2 xl:grid-cols-3">
      {unitPrices().map((u, i) => (
        <Reveal key={u.id} delay={(i % 3) * 0.06} className="flex flex-col bg-ink-2 p-8 transition-colors duration-500 hover:bg-ink-3">
          <p className="label text-faint">{String(i + 1).padStart(2, "0")}</p>
          <h3 className="display mt-8 text-2xl">{u.label}</h3>
          <p className="label mt-2 text-violet-bright">{u.unit}</p>

          <div className="mt-7 space-y-2.5 border-t border-line pt-6">
            {u.values.map((v) => (
              <div key={v.k} className="flex items-baseline justify-between gap-4">
                <span className="text-[0.88rem] text-fg/70">{v.k}</span>
                {showPrices ? (
                  <span className="tabular-nums text-fg">{v.v}</span>
                ) : (
                  <span aria-hidden className="h-px w-8 shrink-0 bg-line" />
                )}
              </div>
            ))}
          </div>

          <p className="mt-auto pt-7 text-[0.82rem] leading-relaxed text-muted">{u.note}</p>
        </Reveal>
      ))}
    </div>
  );
}
