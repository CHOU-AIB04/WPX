import Link from "next/link";
import { Arrow, Button, SectionLabel } from "@/components/ui/Button";
import { Counter, Lines, Reveal } from "@/components/ui/motion";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { OfferDemo } from "@/components/demos/OfferDemo";
import { isInteractive } from "@/components/demos/keys";
import { offerHref, relatedOffers, type Offer } from "@/lib/catalog";
import { hasAmount } from "@/lib/pricing";

/**
 * Gabarit unique des pages /plateforme/<slug> et /services/<slug>.
 *
 * Échelle typographique et rythme alignés sur la home : sections en
 * py-24/md:py-32, titres en deux lignes dont la seconde en serif italique.
 * Tout le contenu vient de l'objet Offer.
 */
/**
 * `showPrices` vient de la géolocalisation. Seules les étiquettes qui
 * contiennent un montant sont masquées : « Inclus dans WePushX CRM » reste,
 * « À partir de 3.500 DH » disparaît.
 */
export function OfferPage({ offer, showPrices = true }: { offer: Offer; showPrices?: boolean }) {
  const priceVisible = Boolean(offer.price) && (showPrices || !hasAmount(offer.price as string));
  const live = isInteractive(offer.demo);
  const related = relatedOffers(offer);
  const backHref = offer.kind === "platform" ? "/plateforme" : "/services";
  const backLabel = offer.kind === "platform" ? "Plateforme" : "Services";

  return (
    <>
      {/* ═══════════════════════════════════════════════════════════ hero */}
      <section className="relative overflow-hidden pb-20 pt-36 md:pt-44">
        <div className="container-x">
          <Link href={backHref} className="label inline-flex items-center gap-2 text-faint transition-colors hover:text-fg">
            <span className="rotate-180"><Arrow className="h-3 w-3" /></span>
            {backLabel}
          </Link>

          <div className="mt-7">
            <SectionLabel n="→">{offer.kicker}</SectionLabel>
          </div>

          <Lines as="h1" className="display mt-8 text-[clamp(2.8rem,8vw,7.5rem)]">
            {offer.hero.lines.map((l, i) => (
              <span key={l}>
                {i === offer.hero.lines.length - 1 ? <span className="serif-accent text-gradient">{l}</span> : l}
              </span>
            ))}
          </Lines>

          <Reveal delay={0.2}>
            <p className="mt-10 max-w-xl text-lg text-fg/65">{offer.hero.sub}</p>
            <div className="mt-8 flex flex-wrap gap-2">
              {offer.tags.map((t) => (
                <span key={t} className="rounded-full border border-line px-3.5 py-1.5 text-[0.78rem] text-muted">
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <Button href="/contact" trackAs={`offer_${offer.id}_hero`}>Réserver mon audit</Button>
              {priceVisible && <span className="serif-accent text-2xl text-lilac">{offer.price}</span>}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════ démo */}
      <section className="border-t border-line py-24 md:py-32">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
            <div>
              <SectionLabel n="01">{live ? "Démo interactive" : "Aperçu"}</SectionLabel>
              <Lines className="display mt-8 text-[clamp(2.4rem,6vw,5.6rem)]">
                <span key="1">{live ? "Essayez-le." : "À quoi"}</span>
                <span key="2" className="serif-accent text-lilac">{live ? "Ici, maintenant." : "ça ressemble."}</span>
              </Lines>
            </div>
            {live && (
              <Reveal className="max-w-sm">
                <p className="text-fg/60">
                  Rien n&apos;est envoyé, rien n&apos;est enregistré. C&apos;est l&apos;éditeur réel de WePushX CRM, avec ses
                  vraies actions — celles que nous câblons pour vous.
                </p>
              </Reveal>
            )}
          </div>

          {/* Démo vivante : aucun cadre, aucun fond. Elle respire à même la page,
              mais reste dans la gouttière comme toutes les autres sections. */}
          <Reveal delay={0.12} className="mt-16 md:mt-20">
            <div className={live ? "w-full" : "mx-auto aspect-[4/3] w-full max-w-2xl"}>
              <OfferDemo id={offer.id} demo={offer.demo} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════ ce qui est inclus */}
      <section className="border-t border-line py-24 md:py-32">
        <div className="container-x grid gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <SectionLabel n="02">Ce qui est inclus</SectionLabel>
            <Lines className="display mt-8 text-[clamp(2.4rem,5.4vw,4.8rem)]">
              <span key="1">{offer.name}</span>
              <span key="2" className="serif-accent text-lilac">en détail.</span>
            </Lines>
            <Reveal delay={0.12}>
              <p className="mt-8 max-w-sm text-fg/60">{offer.body}</p>
            </Reveal>
          </div>

          <div className="md:col-span-6 md:col-start-7">
            <ul>
              {offer.bullets.map((b, i) => (
                <Reveal key={b} delay={i * 0.05} y={16}>
                  <li className="group flex items-start gap-6 border-t border-line py-6 last:border-b">
                    <span className="label shrink-0 text-faint transition-colors duration-500 group-hover:text-violet-bright">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[1.05rem] text-fg/85">{b}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ chiffres */}
      {offer.proof.length > 0 && (
        <section className="border-t border-line bg-ink-2 py-24 md:py-32">
          <div className="container-x">
            <SectionLabel n="03">Ce que ça change</SectionLabel>
            <Lines className="display mt-8 text-[clamp(2.4rem,6vw,5.6rem)]">
              <span key="1">Les chiffres</span>
              <span key="2">
                qu&apos;on <span className="serif-accent text-lilac">constate.</span>
              </span>
            </Lines>

            <div className="mt-16 grid gap-px overflow-hidden rounded-[1.8rem] border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
              {offer.proof.map((p, i) => (
                <Reveal key={p.label} delay={i * 0.07} className="bg-ink-2 p-9 transition-colors duration-500 hover:bg-ink-3 md:p-11">
                  <p className="display text-[clamp(3rem,6vw,5rem)] text-gradient">
                    <Counter
                      value={p.value}
                      prefix={p.prefix ?? ""}
                      suffix={p.suffix ?? ""}
                      decimals={p.decimals ?? 0}
                    />
                  </p>
                  <p className="mt-6 text-[1.05rem] text-fg/85">{p.label}</p>
                  <p className="mt-2 text-sm text-muted">{p.detail}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ════════════════════════════════════════════════════════ méthode */}
      <section className="border-t border-line py-24 md:py-32">
        <div className="container-x">
          <SectionLabel n="04">La méthode</SectionLabel>
          <Lines className="display mt-8 text-[clamp(2.4rem,6vw,5.6rem)]">
            <span key="1">Comment</span>
            <span key="2">
              on <span className="serif-accent text-lilac">procède.</span>
            </span>
          </Lines>

          <div className="mt-16 grid gap-px overflow-hidden rounded-[1.8rem] border border-line bg-line sm:grid-cols-2">
            {offer.process.map((s, i) => (
              <Reveal key={s.title} delay={(i % 2) * 0.06} className="group bg-ink p-9 transition-colors duration-500 hover:bg-ink-2 md:p-11">
                <p className="label text-violet-bright">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="display mt-12 text-3xl md:text-4xl">{s.title}</h3>
                <p className="mt-4 text-fg/60">{s.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ connexes */}
      {related.length > 0 && (
        <section className="border-t border-line py-24 md:py-32">
          <div className="container-x">
            <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
              <div>
                <SectionLabel n="05">À combiner</SectionLabel>
                <Lines className="display mt-8 text-[clamp(2.4rem,6vw,5.6rem)]">
                  <span key="1">Ça marche</span>
                  <span key="2">
                    encore <span className="serif-accent text-lilac">mieux avec.</span>
                  </span>
                </Lines>
              </div>
              <Reveal className="max-w-xs">
                <p className="text-fg/60">Chaque levier amplifie les autres. C&apos;est là que l&apos;écart se creuse.</p>
              </Reveal>
            </div>

            <div className="mt-16">
              {related.map((r, i) => (
                <Reveal key={r.slug} delay={i * 0.05} y={18}>
                  <Link
                    href={offerHref(r)}
                    data-cursor="Voir"
                    className="group relative block overflow-hidden border-t border-line last:border-b"
                  >
                    <span
                      aria-hidden
                      className="absolute inset-0 origin-bottom scale-y-0 bg-violet transition-transform duration-700 ease-[var(--ease-expo)] group-hover:scale-y-100"
                    />
                    <div className="relative grid grid-cols-12 items-center gap-4 py-7 transition-colors duration-500 group-hover:text-snow md:py-9">
                      <span className="label col-span-2 text-faint transition-colors duration-500 group-hover:text-snow/70 md:col-span-1">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="display col-span-10 text-[clamp(1.8rem,4.4vw,3.8rem)] transition-transform duration-700 ease-[var(--ease-expo)] group-hover:translate-x-4 md:col-span-6">
                        {r.name}
                      </span>
                      <span className="col-span-10 col-start-3 text-fg/60 transition-colors duration-500 group-hover:text-snow md:col-span-4 md:col-start-auto">
                        <span className="serif-accent block text-xl text-lilac transition-colors group-hover:text-snow">{r.kicker}</span>
                        <span className="mt-1 hidden text-sm md:block">{r.tags.join(" · ")}</span>
                      </span>
                      <span className="col-span-12 hidden justify-end md:col-span-1 md:flex">
                        <span className="flex h-12 w-12 items-center justify-center rounded-full border border-line transition-all duration-500 group-hover:rotate-[-45deg] group-hover:border-snow group-hover:bg-snow group-hover:text-violet">
                          <Arrow />
                        </span>
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <Faq items={offer.faq} n="?" />
      <FinalCta />
    </>
  );
}
