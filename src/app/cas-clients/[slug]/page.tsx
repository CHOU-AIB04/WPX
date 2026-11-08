import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Arrow, Button, SectionLabel } from "@/components/ui/Button";
import { Lines, Reveal } from "@/components/ui/motion";
import { FinalCta } from "@/components/sections/FinalCta";
import { JsonLd } from "@/components/seo/JsonLd";
import { offerHref } from "@/lib/catalog";
import { caseBySlug, publishedCases } from "@/lib/cases";
import { services } from "@/lib/content";
import { ORG_ID, abs, breadcrumbLd, logoUrl, pageMeta } from "@/lib/seo";

/**
 * Modèle d'étude de cas : problème → stratégie → chiffres → citation → CTA.
 * Contenu dans src/lib/cases.ts ; seuls les cas `published` sont générés.
 */

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return publishedCases.map((c) => ({ slug: c.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const c = caseBySlug((await params).slug);
  if (!c) return {};
  return pageMeta({ title: c.metaTitle, description: c.description, path: `/cas-clients/${c.slug}` });
}

export default async function CaseStudyPage({ params }: Props) {
  const c = caseBySlug((await params).slug);
  if (!c) notFound();

  const path = `/cas-clients/${c.slug}`;
  const used = services.filter((s) => c.services.includes(s.id));

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${abs(path)}#article`,
    headline: c.title,
    description: c.description,
    url: abs(path),
    mainEntityOfPage: abs(path),
    datePublished: c.date,
    dateModified: c.date,
    inLanguage: "fr-MA",
    image: abs("/opengraph-image"),
    author: { "@type": "Organization", name: "Équipe WePushX", url: abs("/") },
    publisher: { "@id": ORG_ID, "@type": "Organization", name: "WePushX", logo: { "@type": "ImageObject", url: logoUrl } },
    about: used.map((s) => ({ "@type": "Service", name: s.name, url: abs(offerHref(s)) })),
  };

  return (
    <>
      <JsonLd
        data={[
          article,
          breadcrumbLd([
            { name: "Cas clients", path: "/cas-clients" },
            { name: c.client, path },
          ]),
        ]}
      />

      <section className="relative overflow-hidden pb-16 pt-36 md:pt-44">
        <div className="container-x">
          <Lines as="h1" intro eyebrow={`Cas client · ${c.sector} · ${c.city}`} className="display text-[clamp(2.4rem,6.5vw,6.4rem)]">
            <span key="t">{c.title}</span>
          </Lines>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-2xl text-lg text-fg/65">{c.description}</p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line py-20 md:py-28">
        <div className="container-x max-w-4xl space-y-20">
          <article>
            <SectionLabel n="01">Le problème</SectionLabel>
            <div className="mt-6 space-y-5 text-[1.08rem] leading-relaxed text-fg/75">
              {c.problem.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>
          </article>

          <article>
            <SectionLabel n="02">La stratégie</SectionLabel>
            <ol className="mt-8 space-y-8">
              {c.strategy.map((s, i) => (
                <li key={s.title} className="grid gap-2 border-t border-line pt-6 md:grid-cols-12">
                  <span className="label text-violet-bright md:col-span-2">{String(i + 1).padStart(2, "0")}</span>
                  <div className="md:col-span-10">
                    <h2 className="display text-2xl">{s.title}</h2>
                    <p className="mt-3 text-fg/70">{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </article>

          <article>
            <SectionLabel n="03">Les chiffres</SectionLabel>
            <div className="mt-8 grid gap-px overflow-hidden rounded-[1.8rem] border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
              {c.numbers.map((n) => (
                <div key={n.label} className="bg-ink-2 p-8">
                  <p className="display text-5xl text-lilac">{n.value}</p>
                  <p className="mt-3 text-fg/80">{n.label}</p>
                  {n.detail && <p className="mt-1 text-sm text-faint">{n.detail}</p>}
                </div>
              ))}
            </div>
          </article>

          {c.quote && (
            <figure className="rounded-[1.8rem] bg-paper p-10 text-ink md:p-14">
              <SectionLabel n="04" tone="light">Le client</SectionLabel>
              <blockquote className="display mt-8 text-[clamp(1.6rem,3vw,2.6rem)]">&ldquo;{c.quote.text}&rdquo;</blockquote>
              <figcaption className="mt-8 text-ink/70">
                {c.quote.author} · {c.quote.role}
              </figcaption>
            </figure>
          )}

          <div className="flex flex-wrap items-center gap-5 border-t border-line pt-10">
            <Button href="/contact" trackAs={`case_${c.slug}_cta`}>Obtenir le même audit</Button>
            {used.map((s) => (
              <Link key={s.id} href={offerHref(s)} className="link-underline inline-flex items-center gap-2 text-fg">
                {s.name}
                <Arrow className="h-3.5 w-3.5" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
