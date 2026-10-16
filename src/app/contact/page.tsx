import type { Metadata } from "next";
import { Suspense } from "react";
import { SectionLabel } from "@/components/ui/Button";
import { Lines, Reveal } from "@/components/ui/motion";
import { LeadForm } from "@/components/sections/LeadForm";
import { site } from "@/lib/content";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbLd, pageMeta, webPageLd } from "@/lib/seo";

const TITLE = "Contact : audit marketing digital gratuit de 30 minutes";
const DESCRIPTION =
  "Réservez un audit gratuit de 30 minutes avec WePushX, agence marketing digital au Maroc : publicité, site, SEO et suivi commercial. Réponse sous 24h, sans engagement.";

export const metadata: Metadata = pageMeta({ title: TITLE, description: DESCRIPTION, path: "/contact" });

const steps = ["Vous envoyez votre demande", "On vous répond sous 24h", "Appel d'audit de 30 min", "Proposition personnalisée avec ROI"];
const promises = ["Remboursement 100% si 0 lead en 60 jours", "Réponse sous 24h ouvrées", "Audit gratuit, sans engagement", "Contrat transparent, sans clause abusive"];

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden pb-28 pt-36 md:pt-44">
      <JsonLd
        data={[
          webPageLd({ path: "/contact", name: TITLE, description: DESCRIPTION, type: "ContactPage" }),
          breadcrumbLd([{ name: "Contact", path: "/contact" }]),
        ]}
      />
      <div aria-hidden className="pointer-events-none absolute -left-[20vw] top-0 -z-10 h-[60vw] w-[60vw] rounded-full bg-[radial-gradient(closest-side,rgba(122,28,140,0.35),transparent)] blur-2xl" />
      <div className="container-x">
        <SectionLabel n="→">Démarrons</SectionLabel>
        <Lines as="h1" className="display mt-8 text-[clamp(3rem,9vw,9rem)]">
          <span key="1">Démarrons votre</span>
          <span key="2" className="serif-accent text-gradient">croissance.</span>
        </Lines>

        <div className="mt-16 grid gap-16 md:mt-24 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <Suspense>
                <LeadForm />
              </Suspense>
            </Reveal>
          </div>

          <aside className="space-y-12 lg:col-span-4 lg:col-start-9">
            <Reveal delay={0.1}>
              <p className="label mb-4 text-faint">Nous contacter directement</p>
              <a href={`mailto:${site.email}`} className="link-underline display text-3xl">{site.email}</a>
              <p className="mt-3 text-muted">{site.hours}</p>
              <p className="mt-1 text-muted">Bureau : {site.office}</p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="label mb-4 text-faint">Comment ça se passe</p>
              <ol className="space-y-4">
                {steps.map((s, i) => (
                  <li key={s} className="flex gap-4 border-t border-line pt-4">
                    <span className="label text-violet-bright">0{i + 1}</span>
                    <span className="text-fg/85">{s}</span>
                  </li>
                ))}
              </ol>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="label mb-4 text-faint">Nos engagements</p>
              <ul className="space-y-3">
                {promises.map((p) => (
                  <li key={p} className="flex gap-3 text-fg/85">
                    <span className="text-violet-bright">✦</span>
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
          </aside>
        </div>
      </div>
    </section>
  );
}
