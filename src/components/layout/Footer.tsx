"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Link from "next/link";
import { useRef } from "react";
import { Mark } from "@/components/brand/Mark";
import { nav, services, site } from "@/lib/content";
import { offerAnchor, offersOf } from "@/lib/catalog";

export function Footer() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  const y = useTransform(scrollYProgress, [0, 1], ["35%", "0%"]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-25, 0]);

  return (
    <footer ref={ref} className="relative overflow-hidden border-t border-line bg-ink pt-24">
      <div className="container-x grid gap-14 md:grid-cols-12">
        <div className="md:col-span-4">
          <p className="display max-w-md text-[clamp(1.8rem,3vw,2.6rem)] leading-[1.02]">
            Chaque dirham investi devient un <span className="serif-accent text-lilac">client qualifié.</span>
          </p>
          <a href={`mailto:${site.email}`} className="link-underline mt-8 inline-block text-lg text-fg/90">
            {site.email}
          </a>
          <p className="label mt-3 text-faint">{site.hours}</p>
        </div>

        <div className="md:col-span-2">
          <p className="label mb-5 text-faint">Navigation</p>
          <ul className="space-y-3">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="link-underline text-fg/80 hover:text-fg">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Les deux colonnes pointent vers le catalogue fusionné, où chaque
            offre a sa section. Avant, /services#<id> ne menait nulle part. */}
        <div className="md:col-span-3">
          <p className="label mb-5 text-faint">Services</p>
          <ul className="space-y-3">
            {services.map((s) => (
              <li key={s.id}>
                <Link href={offerAnchor(s)} className="link-underline text-fg/80 hover:text-fg">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <p className="label mb-5 text-faint">Plateforme</p>
          <ul className="space-y-3">
            {offersOf("platform").map((p) => (
              <li key={p.id}>
                <Link href={offerAnchor(p)} className="link-underline text-fg/80 hover:text-fg">
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </div>

      <div className="relative mt-20">
        <motion.div style={{ y }} className="container-x flex items-end gap-[2vw]">
          <motion.div style={{ rotate }} className="w-[16vw] shrink-0 origin-bottom-left">
            <Mark className="w-full" />
          </motion.div>
          <span className="font-brand select-none text-[15vw] font-extrabold leading-[0.78] tracking-[-0.05em] text-fg">
            WePush<span className="text-violet">X</span>
          </span>
        </motion.div>
      </div>

      <div className="container-x mt-10 flex flex-col gap-3 border-t border-line py-6 text-sm text-faint lg:flex-row lg:items-center lg:justify-between">
        <span>© {new Date().getFullYear()} WePushX. Agence marketing digital, Maroc.</span>
        <span>Bureau : {site.office} · Siège : {site.legalAddress}</span>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          <Link href="/mentions-legales" className="link-underline hover:text-fg">Mentions légales</Link>
          <Link href="/politique-de-confidentialite" className="link-underline hover:text-fg">Confidentialité</Link>
          <Link href="/cgv" className="link-underline hover:text-fg">CGV</Link>
        </div>
      </div>
    </footer>
  );
}
