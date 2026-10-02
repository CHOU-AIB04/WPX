import { Arrow } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/motion";
import Link from "next/link";
import { agentPacks, dh, ON_REQUEST } from "@/lib/pricing";

/**
 * Les trois agents conversationnels, en escalier.
 *
 * Chaque palier contient le précédent : le liseré vertical entre les cartes
 * et la numérotation en pastille rendent cet empilement lisible d'un coup
 * d'œil. Le dernier palier est une carte inversée (`bg-paper`), le même
 * procédé que la section finale de la home — il devient clair en thème
 * sombre et sombre en thème clair, dans les deux cas il tranche.
 */
export function AgentPacks({ showPrices = true }: { showPrices?: boolean }) {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {agentPacks.map((p, i) => {
        const flag = p.flagship;
        return (
          <Reveal key={p.id} delay={i * 0.09} className="h-full">
            <div
              className={`relative flex h-full flex-col rounded-[1.8rem] p-8 transition-colors duration-500 md:p-9 ${
                flag ? "bg-paper text-ink" : "border border-line bg-ink-2 hover:bg-ink-3"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <span
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-[0.95rem] font-medium ${
                    flag ? "bg-violet text-snow" : "bg-violet-bright text-snow"
                  }`}
                >
                  {p.step}
                </span>
                {p.badge && (
                  <span className="label rounded-full bg-violet px-3.5 py-1.5 text-snow">{p.badge}</span>
                )}
              </div>

              <h3 className="display mt-8 text-[1.75rem] md:text-3xl lg:min-h-[4.4rem]">{p.name}</h3>

              <p className={`mt-3 text-[0.95rem] lg:min-h-[3.5rem] ${flag ? "text-ink/70" : "text-fg/60"}`}>
                {p.pitch}
              </p>

              <div className={`mt-7 border-t pt-7 ${flag ? "border-line-ink" : "border-line"}`}>
                {p.monthly === 0 ? (
                  <>
                    <p className={`serif-accent text-[2.4rem] leading-none ${flag ? "text-accent-paper" : "text-lilac"}`}>
                      Offert
                    </p>
                    <p className={`mt-3 text-sm ${flag ? "text-ink/60" : "text-muted"}`}>
                      Inclus dès la mise en place du CRM
                    </p>
                  </>
                ) : showPrices ? (
                  <>
                    <p className="display text-[2.6rem] leading-none tabular-nums">{dh(p.monthly)}</p>
                    <p className={`mt-2 text-sm ${flag ? "text-ink/60" : "text-muted"}`}>MAD HT / mois · par agent</p>
                  </>
                ) : (
                  <>
                    <p className={`serif-accent text-[2.2rem] leading-none ${flag ? "text-accent-paper" : "text-lilac"}`}>
                      {ON_REQUEST}
                    </p>
                    <p className={`mt-3 text-sm ${flag ? "text-ink/60" : "text-muted"}`}>
                      Chiffré selon vos canaux et vos volumes
                    </p>
                  </>
                )}
              </div>

              <ul className={`mt-7 space-y-3 border-t pt-7 ${flag ? "border-line-ink" : "border-line"}`}>
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span
                      aria-hidden
                      className={`mt-0.5 shrink-0 text-[0.85rem] ${flag ? "text-accent-paper" : "text-violet-bright"}`}
                    >
                      ✓
                    </span>
                    <span className={`text-[0.95rem] ${flag ? "text-ink/80" : "text-fg/75"}`}>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-9">
                <Link
                  href={`/contact?plan=agent-${p.id}`}
                  className={`group inline-flex items-center gap-3 text-[0.95rem] ${flag ? "text-ink" : "text-fg"}`}
                >
                  <span className="link-underline">
                    {p.monthly === 0 ? "Activer cet agent" : "Parler de cet agent"}
                  </span>
                  <span
                    className={`flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-500 group-hover:rotate-[-45deg] ${
                      flag
                        ? "border-line-ink group-hover:border-violet group-hover:bg-violet group-hover:text-snow"
                        : "border-line group-hover:border-violet-bright group-hover:bg-violet-bright group-hover:text-snow"
                    }`}
                  >
                    <Arrow className="h-3.5 w-3.5" />
                  </span>
                </Link>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
