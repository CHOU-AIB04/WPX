import Image from "next/image";
import { SectionLabel } from "@/components/ui/Button";
import { Lines, Reveal } from "@/components/ui/motion";
import { googleShots, metaShots, shotUrl, type Shot } from "@/lib/proof";

/**
 * Les captures de comptes publicitaires réels.
 *
 * Les PNG embarquent déjà la barre de fenêtre macOS : on n'ajoute donc aucun
 * chrome, seulement un coin arrondi et une ombre portée pour les détacher du
 * fond sombre. `unoptimized` est volontaire — ce sont des tableaux de chiffres
 * minuscules, et le ré-encodage de l'optimiseur les rendrait illisibles.
 * Cloudinary fait déjà le travail via `f_auto,q_auto:good`.
 */
function Capture({ shot, sizes, priority }: { shot: Shot; sizes: string; priority?: boolean }) {
  return (
    <figure className="overflow-hidden rounded-xl bg-white shadow-[0_30px_80px_-40px_rgba(0,0,0,0.9)] ring-1 ring-line">
      <Image
        src={shotUrl(shot.path)}
        alt={shot.alt}
        width={shot.w}
        height={shot.h}
        sizes={sizes}
        unoptimized
        priority={priority}
        className="block h-auto w-full"
      />
    </figure>
  );
}

export function AdProof({ n = "03" }: { n?: string }) {
  return (
    <section id="campagnes" className="scroll-mt-24 border-t border-line py-24 md:py-32">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <div>
            <SectionLabel n={n}>Campagnes réelles</SectionLabel>
            <Lines className="display mt-8 text-[clamp(2.4rem,6vw,5.6rem)]">
              <span key="1">Les captures,</span>
              <span key="2">
                pas les <span className="serif-accent text-lilac">promesses.</span>
              </span>
            </Lines>
          </div>
          <Reveal className="max-w-sm">
            <p className="text-fg/60">
              Des comptes que nous gérons, en production. Les noms de campagnes sont floutés — les chiffres, eux, sont
              bruts : coût par lead, conversions, budget dépensé.
            </p>
          </Reveal>
        </div>

        {/* ── Meta ───────────────────────────────────────────────────── */}
        <div className="mt-16">
          <Reveal>
            <div className="flex flex-wrap items-baseline justify-between gap-4 border-t border-line pt-6">
              <h3 className="display text-2xl md:text-3xl">Meta Ads</h3>
              <p className="label text-violet-bright">Facebook · Instagram</p>
            </div>
          </Reveal>

          <div className="mt-8 grid gap-5 lg:grid-cols-12">
            <Reveal delay={0.06} className="lg:col-span-7">
              <Capture shot={metaShots.hero} sizes="(min-width: 1024px) 56vw, 100vw" priority />
            </Reveal>
            <div className="flex flex-col justify-between gap-5 lg:col-span-5">
              {metaShots.side.map((s, i) => (
                <Reveal key={s.path} delay={0.1 + i * 0.06}>
                  <Capture shot={s} sizes="(min-width: 1024px) 40vw, 100vw" />
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.14} className="lg:col-span-12">
              <Capture shot={metaShots.wide} sizes="(min-width: 1024px) 92vw, 100vw" />
            </Reveal>
          </div>
        </div>

        {/* ── Google ─────────────────────────────────────────────────── */}
        <div className="mt-20">
          <Reveal>
            <div className="flex flex-wrap items-baseline justify-between gap-4 border-t border-line pt-6">
              <h3 className="display text-2xl md:text-3xl">Google Ads</h3>
              <p className="label text-violet-bright">Search · Performance Max</p>
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="mt-4 max-w-xl text-[0.95rem] text-fg/60">
              Clics, taux de conversion, conversions et coût par conversion sur des campagnes en production.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-5 lg:grid-cols-12">
            <Reveal delay={0.1} className="lg:col-span-7">
              <Capture shot={googleShots.hero} sizes="(min-width: 1024px) 56vw, 100vw" />
            </Reveal>
            <div className="flex flex-col justify-center gap-5 lg:col-span-5">
              {googleShots.side.map((s, i) => (
                <Reveal key={s.path} delay={0.14 + i * 0.06}>
                  <Capture shot={s} sizes="(min-width: 1024px) 40vw, 100vw" />
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        <Reveal delay={0.1}>
          <p className="mt-10 text-[0.82rem] text-muted">
            Données réelles issues des gestionnaires Meta et Google Ads. Comptes gérés par notre équipe. Les identités
            clients sont masquées à leur demande.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
