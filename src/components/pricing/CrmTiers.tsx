import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/motion";
import { crmPlans, dh, ON_REQUEST } from "@/lib/pricing";

/**
 * Les paliers d'abonnement à la plateforme.
 *
 * Traités différemment des forfaits agence — grille en filets, palier
 * recommandé signalé par un liseré violet plutôt qu'une carte pleine — pour
 * que les deux blocs ne se ressemblent pas sur la même page.
 */
export function CrmTiers({ showPrices = true }: { showPrices?: boolean }) {
  return (
    <div className="grid gap-px overflow-hidden rounded-[1.8rem] border border-line bg-line lg:grid-cols-3">
      {crmPlans.map((p, i) => (
        <Reveal
          key={p.id}
          delay={i * 0.08}
          className={`relative flex flex-col bg-ink p-8 transition-colors duration-500 hover:bg-ink-2 md:p-10 ${
            p.popular ? "bg-ink-2" : ""
          }`}
        >
          {p.popular && (
            <span aria-hidden className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,var(--color-violet-bright),transparent)]" />
          )}

          <div className="flex flex-wrap items-center justify-between gap-3">
            <h3 className="display text-3xl">{p.name}</h3>
            {p.popular && <span className="label text-violet-bright">Recommandé</span>}
          </div>

          <p className="mt-4 text-fg/60 lg:min-h-[5.5rem]">{p.pitch}</p>

          <div className="mt-8 border-t border-line pt-8">
            {showPrices ? (
              <>
                <p className="display text-[clamp(2.6rem,3.6vw,3.6rem)] leading-none tabular-nums">{dh(p.monthly)}</p>
                <p className="mt-2 text-muted">MAD HT / mois · {p.seats}</p>
                <p className="mt-4 text-[0.88rem] text-fg/65">
                  Mise en place <span className="tabular-nums text-fg">{dh(p.setup)} DH</span>, une seule fois
                </p>
              </>
            ) : (
              <>
                <p className="serif-accent text-[clamp(2rem,2.8vw,2.6rem)] leading-none text-lilac">{ON_REQUEST}</p>
                <p className="mt-3 text-muted">{p.seats}</p>
                <p className="mt-4 text-[0.88rem] text-fg/65">Licence et mise en place chiffrées après l&apos;audit.</p>
              </>
            )}
          </div>

          <ul className="mt-8 space-y-3.5 border-t border-line pt-8">
            {p.features.map((f) => (
              <li key={f} className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-bright" />
                <span className="text-fg/75">{f}</span>
              </li>
            ))}
          </ul>

          <div className="mt-auto pt-10">
            <Button href={`/contact?plan=crm-${p.id}`} variant={p.popular ? "primary" : "ghost"} trackAs={`crm_${p.id}`}>
              Demander une démo
            </Button>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
