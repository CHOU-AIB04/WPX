import type { Metadata } from "next";
import { Button, SectionLabel } from "@/components/ui/Button";
import { Lines, Reveal } from "@/components/ui/motion";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { ServiceVisual } from "@/components/sections/ServiceVisual";
import { oneShots, services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services : Meta Ads, Google Ads, sites web, SEO, UGC IA, CRM",
  description: "Six leviers intégrés pour les PME marocaines : Meta Ads, Google Ads, création de sites, SEO & GEO, UGC par IA et CRM WhatsApp.",
  alternates: { canonical: "/services" },
};

const servicesFaq = [
  { q: "Est-ce que vous créez les créatifs publicitaires ?", a: "Oui. Chaque forfait inclut un volume de créas ads par mois (5, 8 ou 10), et les vidéos UGC par IA sont disponibles en option ou en pack." },
  { q: "Combien de temps pour qu'un site soit en ligne ?", a: "7 à 14 jours pour un site vitrine ou une landing page, selon le nombre de pages et la rapidité des validations." },
  { q: "Le CRM nécessite-t-il un abonnement séparé ?", a: "Le setup et la gestion CRM sont inclus dans le forfait Scale. Sur les autres forfaits, le CRM est proposé à partir de 700 DH par mois." },
  { q: "Quel est l'engagement minimum pour les forfaits ?", a: "3 mois, le temps d'installer le tracking, de sortir de la phase d'apprentissage et d'optimiser sur des données fiables." },
];

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden pb-16 pt-36 md:pt-44">
        <div className="container-x">
          <SectionLabel n="→">Nos services</SectionLabel>
          <Lines as="h1" className="display mt-8 text-[clamp(3rem,9vw,9rem)]">
            <span key="1">Six leviers.</span>
            <span key="2">
              Une seule <span className="serif-accent text-gradient">machine.</span>
            </span>
          </Lines>
          <Reveal delay={0.2}>
            <p className="mt-10 max-w-xl text-lg text-fg/65">
              Des services intégrés et complémentaires : chaque levier amplifie les autres. C&apos;est pour ça que nos clients obtiennent des résultats que leurs concurrents n&apos;atteignent pas.
            </p>
          </Reveal>
          <nav className="mt-12 flex flex-wrap gap-2" aria-label="Aller au service">
            {services.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="rounded-full border border-line px-4 py-2 text-sm text-fg/75 transition-colors hover:border-lilac/60 hover:text-fg">
                {s.name}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {services.map((s, i) => (
        <section key={s.id} id={s.id} className="scroll-mt-24 border-t border-line py-20 md:py-28">
          <div className="container-x grid gap-12 md:grid-cols-12 md:items-center">
            <Reveal className={`md:col-span-5 ${i % 2 ? "md:order-2 md:col-start-8" : ""}`}>
              <div className="aspect-[4/3] w-full">
                <ServiceVisual id={s.id} />
              </div>
            </Reveal>
            <div className={`md:col-span-6 ${i % 2 ? "md:order-1" : "md:col-start-7"}`}>
              <p className="label text-violet-bright">0{i + 1} · {s.kicker}</p>
              <Lines className="display mt-5 text-[clamp(2.4rem,5vw,4.6rem)]">
                <span key="n">{s.name}</span>
              </Lines>
              <Reveal delay={0.1}>
                <p className="mt-6 max-w-xl text-lg text-fg/70">{s.body}</p>
                <ul className="mt-8 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 border-t border-line pt-3 text-fg/85">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-bright" />
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="mt-10 flex flex-wrap items-center gap-5">
                  <Button href="/contact" trackAs={`service_${s.id}`}>Demander un audit</Button>
                  {s.price && <span className="serif-accent text-2xl text-lilac">{s.price}</span>}
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      ))}

      <section className="border-t border-line bg-ink-2 py-28 md:py-36">
        <div className="container-x">
          <SectionLabel n="+">Projets one-shot</SectionLabel>
          <Lines className="display mt-8 text-[clamp(2.6rem,6vw,5.6rem)]">
            <span key="1">Besoin d&apos;un projet</span>
            <span key="2" className="serif-accent text-lilac">ponctuel ?</span>
          </Lines>
          <p className="mt-6 max-w-md text-fg/60">Pas d&apos;abonnement. Des livrables précis, à prix fixe.</p>
          <div className="mt-14 grid gap-px overflow-hidden rounded-[1.8rem] border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {oneShots.map((o, i) => (
              <Reveal key={o.name} delay={(i % 3) * 0.06} className="group relative bg-ink-2 p-8 transition-colors duration-500 hover:bg-ink-3">
                <p className="label text-faint">0{i + 1}</p>
                <h3 className="display mt-10 text-3xl">{o.name}</h3>
                <p className="mt-3 text-fg/60">{o.body}</p>
                <p className="serif-accent mt-8 text-2xl text-lilac">{o.price}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Faq items={servicesFaq} n="?" />
      <FinalCta />
    </>
  );
}
