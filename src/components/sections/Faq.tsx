import { SectionLabel } from "@/components/ui/Button";
import { Lines, Reveal } from "@/components/ui/motion";
import { faqs } from "@/lib/content";

export function Faq({ items = faqs, n = "09" }: { items?: typeof faqs; n?: string }) {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container-x grid gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <SectionLabel n={n}>FAQ</SectionLabel>
          <Lines className="display mt-8 text-[clamp(2.6rem,5vw,4.6rem)]">
            <span key="1">Vos</span>
            <span key="2" className="serif-accent text-lilac">questions.</span>
          </Lines>
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-xs text-fg/60">Transparence totale. Une autre question ? On répond sous 24h.</p>
          </Reveal>
        </div>
        <div className="md:col-span-8">
          {/* <details> natif : toutes les réponses sont dans le HTML (lues par
              Google et les IA, conformes au FAQPage), une seule ouverte à la
              fois grâce à `name`, et aucun JavaScript. */}
          {items.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.04} y={16}>
              <details name={`faq-${n}`} open={i === 0} className="faq-item group border-t border-line last:border-b">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-7 text-left [&::-webkit-details-marker]:hidden">
                  <span className="text-[clamp(1.15rem,1.8vw,1.5rem)] text-fg/75 transition-colors group-open:text-fg">{f.q}</span>
                  <span
                    aria-hidden
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line transition-all duration-500 group-open:rotate-45 group-open:border-violet-bright group-open:bg-violet-bright group-open:text-snow"
                  >
                    +
                  </span>
                </summary>
                <p className="max-w-2xl pb-8 text-fg/65">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
