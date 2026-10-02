import Link from "next/link";
import { Arrow } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/motion";
import { ServiceVisual } from "@/components/sections/ServiceVisual";
import { isInteractive } from "@/components/demos/keys";
import { offerHref, type Offer } from "@/lib/catalog";
import { hasAmount } from "@/lib/pricing";

/**
 * Un bloc d'offre sur la page catalogue (/offres).
 *
 * Volontairement plus compact que le gabarit <OfferPage> : dix-huit blocs
 * se suivent, donc on garde l'essentiel — le nom, la promesse, quatre
 * points de contenu, le prix — et on renvoie vers la page dédiée pour la
 * démo interactive, les chiffres et la FAQ.
 *
 * `flip` alterne le côté de l'illustration pour donner un rythme à la page.
 */
export function OfferSection({
  offer,
  n,
  flip,
  showPrices = true,
}: {
  offer: Offer;
  n: number;
  flip?: boolean;
  showPrices?: boolean;
}) {
  const live = isInteractive(offer.demo);
  // Seules les étiquettes chiffrées sont masquées hors Maroc.
  const priceVisible = Boolean(offer.price) && (showPrices || !hasAmount(offer.price as string));
  const href = offerHref(offer);

  return (
    <section id={offer.slug} className="scroll-mt-24 border-t border-line py-16 md:py-24">
      <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
        {/* ── texte ── */}
        <div className={`${offer.kind !== "platform" ? "lg:col-span-7" : "lg:col-span-10"} ${flip ? "lg:order-last" : ""}`}>
          <div className="label flex items-center gap-3 text-muted">
            <span className="text-violet-bright">({String(n).padStart(2, "0")})</span>
            <span className="h-px w-8 bg-line" />
            <span>{offer.kicker}</span>
          </div>

          <Reveal y={20}>
            <h3 className="display mt-6 text-[clamp(2rem,4.6vw,3.6rem)]">{offer.name}</h3>
            <p className="mt-5 max-w-xl text-fg/65">{offer.body}</p>
          </Reveal>

          <ul className="mt-9">
            {offer.bullets.slice(0, 4).map((b, i) => (
              <Reveal key={b} delay={i * 0.04} y={14}>
                <li className="group flex items-start gap-5 border-t border-line py-4 last:border-b">
                  <span className="label shrink-0 pt-1 text-faint transition-colors duration-500 group-hover:text-violet-bright">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[0.98rem] text-fg/80">{b}</span>
                </li>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={0.08}>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
              <Link
                href={href}
                data-cursor={live ? "Tester" : "Voir"}
                className="group inline-flex items-center gap-3 text-[0.95rem] text-fg"
              >
                <span className="link-underline">{live ? "Essayer la démo" : "Voir la page détaillée"}</span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-line transition-all duration-500 group-hover:rotate-[-45deg] group-hover:border-violet-bright group-hover:bg-violet-bright group-hover:text-snow">
                  <Arrow className="h-3.5 w-3.5" />
                </span>
              </Link>

              {live && (
                <span className="label inline-flex items-center gap-2 text-violet-bright">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inset-0 animate-ping rounded-full bg-violet-bright opacity-70" />
                    <span className="relative h-1.5 w-1.5 rounded-full bg-violet-bright" />
                  </span>
                  Démo interactive
                </span>
              )}

              {priceVisible && <span className="serif-accent text-xl text-lilac">{offer.price}</span>}
            </div>

            <div className="mt-7 flex flex-wrap gap-2">
              {offer.tags.map((t) => (
                <span key={t} className="rounded-full border border-line px-3 py-1 text-[0.74rem] text-muted">
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        {/* ── illustration ── */}
        <Reveal delay={0.1} className={`${offer.kind !== "platform" ? "block lg:col-span-5" : "hidden md:block lg:col-span-1"}`}>
          <div className="aspect-[4/3] w-full">
            {offer.kind !== "platform" && <ServiceVisual id={offer.id} />}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
