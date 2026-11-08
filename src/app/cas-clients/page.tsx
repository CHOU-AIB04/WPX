import type { Metadata } from "next";
import Link from "next/link";
import { Arrow, Button } from "@/components/ui/Button";
import { Lines, Reveal } from "@/components/ui/motion";
import { FinalCta } from "@/components/sections/FinalCta";
import { JsonLd } from "@/components/seo/JsonLd";
import { publishedCases } from "@/lib/cases";
import { breadcrumbLd, itemListLd, pageMeta, webPageLd } from "@/lib/seo";

const TITLE = "Cas clients : résultats marketing digital au Maroc";
const DESCRIPTION =
  "Cas clients WePushX : le problème de départ, la stratégie et les chiffres réels de PME marocaines accompagnées en Meta Ads, Google Ads, SEO, site web et CRM.";

/** Tant qu'aucun cas n'est publié, la page reste hors index (pas de page vide dans Google). */
export const metadata: Metadata = pageMeta({
  title: TITLE,
  description: DESCRIPTION,
  path: "/cas-clients",
  noindex: publishedCases.length === 0,
});

export default function CasesPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageLd({ path: "/cas-clients", name: TITLE, description: DESCRIPTION, type: "CollectionPage" }),
          breadcrumbLd([{ name: "Cas clients", path: "/cas-clients" }]),
          ...(publishedCases.length ? [itemListLd(publishedCases.map((c) => ({ name: c.title, path: `/cas-clients/${c.slug}` })))] : []),
        ]}
      />

      <section className="relative overflow-hidden pb-16 pt-36 md:pt-44">
        <div className="container-x">
          <Lines as="h1" intro eyebrow="Cas clients · Marketing digital au Maroc" className="display text-[clamp(2.8rem,8.5vw,8.5rem)]">
            <span key="1">Des chiffres,</span>
            <span key="2" className="serif-accent text-gradient">pas des promesses.</span>
          </Lines>
          <Reveal delay={0.2}>
            <p className="mt-10 max-w-xl text-lg text-fg/65">
              Chaque cas suit le même fil : le problème de départ, la stratégie mise en place, les chiffres mesurés et
              ce qu&apos;en dit le client.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line py-20 md:py-28">
        <div className="container-x">
          {publishedCases.length === 0 ? (
            <div className="max-w-2xl">
              <p className="display text-[clamp(1.8rem,3.4vw,2.8rem)]">
                Nos premières études de cas détaillées arrivent <span className="serif-accent text-lilac">bientôt.</span>
              </p>
              <p className="mt-6 text-fg/65">
                En attendant, les résultats clients et des captures de campagnes réelles sont présentés sur la page de
                présentation de l&apos;agence.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-5">
                <Button href="/contact" trackAs="cases_empty_audit">Réserver mon audit</Button>
                <Link href="/presentation#resultats" className="link-underline inline-flex items-center gap-2 text-fg">
                  Voir les résultats clients
                  <Arrow className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ) : (
            <div className="grid gap-px overflow-hidden rounded-[1.8rem] border border-line bg-line md:grid-cols-2">
              {publishedCases.map((c, i) => (
                <Reveal key={c.slug} delay={(i % 2) * 0.06} className="bg-ink">
                  <Link href={`/cas-clients/${c.slug}`} className="group block h-full p-8 transition-colors duration-500 hover:bg-ink-2 md:p-10">
                    <p className="label text-faint">
                      {c.sector} · {c.city}
                    </p>
                    <h2 className="display mt-8 text-[clamp(1.6rem,2.6vw,2.2rem)]">{c.title}</h2>
                    {c.numbers[0] && (
                      <p className="mt-6">
                        <span className="display text-4xl text-lilac">{c.numbers[0].value}</span>{" "}
                        <span className="text-fg/65">{c.numbers[0].label}</span>
                      </p>
                    )}
                    <span className="link-underline mt-8 inline-flex items-center gap-2 text-sm text-fg">
                      Lire le cas
                      <Arrow className="h-3.5 w-3.5" />
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      <FinalCta />
    </>
  );
}
