import { Button, SectionLabel } from "@/components/ui/Button";
import { Lines, Reveal } from "@/components/ui/motion";

/**
 * Ce qui prend la place du simulateur hors du Maroc.
 *
 * Le simulateur ne sort que des dirhams : l'afficher sans montants n'aurait
 * aucun sens. On garde la promesse — un chiffrage précis, poste par poste —
 * et on la transforme en demande de devis.
 */
export function QuoteCta({ n = "05" }: { n?: string }) {
  const steps = [
    {
      t: "Vos volumes",
      b: "Nombre de contacts, de messages, de minutes d'IA et d'appels par mois. On part de vos chiffres réels, pas d'une moyenne.",
    },
    {
      t: "Votre marché",
      b: "Les coûts opérateurs et les tarifs des modèles varient d'un pays à l'autre. On applique ceux qui vous concernent.",
    },
    {
      t: "Votre devis",
      b: "Un chiffrage ligne par ligne sous 48 h : abonnements d'un côté, consommation de l'autre, sans poste caché.",
    },
  ];

  return (
    <section id="devis" className="scroll-mt-24 border-t border-line bg-ink-2 py-24 md:py-32">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <div>
            <SectionLabel n={n}>Votre chiffrage</SectionLabel>
            <Lines className="display mt-8 text-[clamp(2.4rem,6vw,5.6rem)]">
              <span key="1">Un devis,</span>
              <span key="2" className="serif-accent text-lilac">
                pas une grille.
              </span>
            </Lines>
          </div>
          <Reveal className="max-w-sm">
            <p className="text-fg/60">
              Nos tarifs publics sont calibrés pour le marché marocain. Hors du Maroc, les coûts opérateurs et les
              volumes changent : on chiffre au cas par cas plutôt que d&apos;afficher un prix qui ne vous
              concernerait pas.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-[1.8rem] border border-line bg-line md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.t} delay={i * 0.08} className="bg-ink p-9 transition-colors duration-500 hover:bg-ink-2 md:p-11">
              <p className="label text-violet-bright">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="display mt-12 text-3xl">{s.t}</h3>
              <p className="mt-4 text-fg/60">{s.b}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-14 flex flex-wrap items-center gap-6">
            <Button href="/contact?plan=devis" trackAs="tarifs_quote">Demander mon devis</Button>
            <p className="text-sm text-muted">Réponse sous 48 h · sans engagement</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
