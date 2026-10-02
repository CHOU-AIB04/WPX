import Link from "next/link";
import { Arrow } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/motion";
import { PlansGrid } from "@/components/pricing/PlansGrid";

/**
 * Section tarifs de la page d'accueil.
 *
 * Les cartes et la bascule mensuel/annuel vivent dans <PlansGrid> pour être
 * partagées avec /tarifs, où elles sont suivies du détail par service et du
 * simulateur de consommation.
 */
export function Pricing({ showPrices = true }: { showPrices?: boolean }) {
  return (
    <section id="tarifs" className="relative scroll-mt-20 border-t border-line bg-ink py-24 md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[60%] bg-[radial-gradient(60%_60%_at_50%_0%,rgba(122,28,140,0.25),transparent)]"
      />
      <div className="container-x relative">
        <PlansGrid
          n="08"
          label="Tarifs"
          first="Investissez dans"
          second="votre croissance."
          showPrices={showPrices}
          footnote={
            showPrices
              ? "Prix en MAD HT · Engagement minimum 3 mois · Garantie résultats 60 jours · Budget publicitaire séparé"
              : "Engagement minimum 3 mois · Garantie résultats 60 jours · Budget publicitaire séparé · Devis sous 48 h"
          }
        />

        <Reveal delay={0.1}>
          <div className="mt-14 flex justify-center">
            <Link href="/tarifs" className="link-underline inline-flex items-center gap-2 text-fg">
              {showPrices
                ? "Tarifs détaillés, CRM all-in-one, agents IA et simulateur de coût"
                : "Le détail des offres, du CRM all-in-one et des agents IA"}
              <Arrow className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
