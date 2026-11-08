import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Arrow, Button, SectionLabel } from "@/components/ui/Button";
import { Lines, Reveal } from "@/components/ui/motion";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { JsonLd } from "@/components/seo/JsonLd";
import { offerHref } from "@/lib/catalog";
import { cityBySlug, cityPages } from "@/lib/cities";
import { postsForCity } from "@/lib/blog";
import { services } from "@/lib/content";
import { ORG_ID, abs, breadcrumbLd, faqLd, pageMeta, webPageLd } from "@/lib/seo";

/**
 * Pages villes : /agence-web-casablanca, /agence-marketing-digital-rabat…
 * Contenu dans src/lib/cities.ts. Entièrement statiques (aucun montant, donc
 * pas de lecture du pays du visiteur).
 */

type Props = { params: Promise<{ ville: string }> };

export function generateStaticParams() {
  return cityPages.map((c) => ({ ville: c.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const c = cityBySlug((await params).ville);
  if (!c) return {};
  return pageMeta({
    title: c.metaTitle,
    description: c.description,
    path: `/${c.slug}`,
    image: { url: `/${c.slug}/opengraph-image`, alt: c.metaTitle },
  });
}

export default async function CityPageRoute({ params }: Props) {
  const c = cityBySlug((await params).ville);
  if (!c) notFound();

  const path = `/${c.slug}`;
  const featured = c.services.flatMap((id) => services.filter((s) => s.id === id));
  const others = cityPages.filter((o) => o.slug !== c.slug);

  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${abs(path)}#service`,
    name: c.eyebrow,
    serviceType: c.keyword,
    description: c.description,
    url: abs(path),
    provider: { "@id": ORG_ID },
    areaServed: { "@type": "City", name: c.city, containedInPlace: { "@type": "Country", name: "Maroc" } },
  };

  return (
    <>
      <JsonLd
        data={[
          webPageLd({ path, name: c.metaTitle, description: c.description }),
          service,
          breadcrumbLd([{ name: c.eyebrow, path }]),
          faqLd(c.faq),
        ]}
      />

      {/* ═══════════════════════════════════════════════════════════ hero */}
      <section className="relative overflow-hidden pb-20 pt-36 md:pt-44">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-[20vw] -top-[20vw] -z-10 h-[70vw] w-[70vw] rounded-full bg-[radial-gradient(closest-side,var(--glow-a),var(--glow-b)_45%,transparent_72%)] md:blur-2xl"
        />
        <div className="container-x">
          <Lines as="h1" intro eyebrow={c.eyebrow} className="display text-[clamp(2.8rem,8.5vw,8.5rem)]">
            {c.heroLines.map((l, i) => (
              <span key={l}>{i === c.heroLines.length - 1 ? <span className="serif-accent text-gradient">{l}</span> : l}</span>
            ))}
          </Lines>
          <Reveal delay={0.2}>
            <p className="mt-10 max-w-2xl text-lg leading-relaxed text-fg/70">{c.intro}</p>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <Button href="/contact" trackAs={`city_${c.slug}_hero`}>
                Réserver mon audit gratuit
              </Button>
              <Link href="/tarifs" className="link-underline inline-flex items-center gap-2 text-fg">
                Voir les tarifs
                <Arrow className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ contenu */}
      <section className="border-t border-line py-24 md:py-32">
        <div className="container-x grid gap-16 lg:grid-cols-12">
          <div className="space-y-20 lg:col-span-8">
            {c.sections.map((s, i) => (
              <article key={s.title}>
                <SectionLabel n={String(i + 1).padStart(2, "0")}>{c.city}</SectionLabel>
                <h2 className="display mt-6 text-[clamp(2rem,4vw,3.4rem)]">{s.title}</h2>
                <div className="mt-6 space-y-5 text-[1.05rem] leading-relaxed text-fg/70">
                  {s.paragraphs.map((p) => (
                    <p key={p.slice(0, 40)}>{p}</p>
                  ))}
                </div>
                {s.bullets && (
                  <ul className="mt-7 space-y-3">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-fg/75">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-bright" />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>

          {/* colonne : services liés */}
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <p className="label text-violet-bright">Nos services à {c.city}</p>
              <div className="mt-6 border-t border-line">
                {featured.map((s) => (
                  <Link key={s.id} href={offerHref(s)} className="group flex items-start justify-between gap-4 border-b border-line py-5">
                    <span>
                      <span className="display block text-xl">{s.name}</span>
                      <span className="mt-1 block text-[0.85rem] text-muted">{s.kicker}</span>
                    </span>
                    <Arrow className="mt-1.5 h-4 w-4 shrink-0 text-faint transition-all duration-500 group-hover:translate-x-1 group-hover:text-violet-bright" />
                  </Link>
                ))}
              </div>
              {postsForCity(c.slug).length > 0 && (
                <>
                  <p className="label mt-12 text-violet-bright">Nos guides</p>
                  <div className="mt-6 border-t border-line">
                    {postsForCity(c.slug).map((p) => (
                      <Link key={p.slug} href={`/blog/${p.slug}`} className="group flex items-start justify-between gap-4 border-b border-line py-5">
                        <span className="text-[0.95rem] leading-snug text-fg/80 group-hover:text-fg">{p.title}</span>
                        <Arrow className="mt-1 h-4 w-4 shrink-0 text-faint transition-all duration-500 group-hover:translate-x-1 group-hover:text-violet-bright" />
                      </Link>
                    ))}
                  </div>
                </>
              )}
              <Link href="/tarifs" className="link-underline mt-6 inline-flex items-center gap-2 text-sm text-fg">
                Nos tarifs, service par service
                <Arrow className="h-3.5 w-3.5" />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ exemples */}
      <section className="border-t border-line bg-ink-2 py-24 md:py-32">
        <div className="container-x">
          <SectionLabel n="+">Exemples à {c.city}</SectionLabel>
          <h2 className="display mt-8 text-[clamp(2.2rem,5vw,4.4rem)]">
            Ce que ça donne <span className="serif-accent text-lilac">sur le terrain.</span>
          </h2>
          <p className="mt-6 max-w-xl text-fg/60">
            Des situations types que nous rencontrons dans la ville, et la réponse que nous y apportons.
          </p>
          <div className="mt-12 grid gap-px overflow-hidden rounded-[1.8rem] border border-line bg-line md:grid-cols-3">
            {c.examples.map((e, i) => (
              <Reveal key={e.title} delay={i * 0.06} className="bg-ink p-8">
                <p className="label text-faint">{e.sector}</p>
                <h3 className="display mt-8 text-2xl">{e.title}</h3>
                <p className="mt-4 text-[0.95rem] leading-relaxed text-fg/65">{e.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Faq items={c.faq} n="?" />

      {/* ═══════════════════════════════════════════════ autres villes */}
      <section className="border-t border-line py-16">
        <div className="container-x">
          <p className="label text-faint">Nous accompagnons aussi</p>
          <ul className="mt-5 flex flex-wrap gap-3">
            {others.map((o) => (
              <li key={o.slug}>
                <Link
                  href={`/${o.slug}`}
                  className="inline-flex rounded-full border border-line px-4 py-2 text-sm text-fg/80 transition-colors hover:border-violet-bright hover:text-fg"
                >
                  {o.eyebrow}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
