"use client";

import { motion, useMotionValue, useScroll, useSpring, useTransform } from "motion/react";
import { useEffect, useRef } from "react";
import { Mark } from "@/components/brand/Mark";
import { useApp } from "@/components/layout/Providers";
import { Button } from "@/components/ui/Button";
import { Counter, EASE, Lines } from "@/components/ui/motion";
import { heroStats } from "@/lib/content";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { introDone } = useApp();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const markY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const markRotate = useTransform(scrollYProgress, [0, 1], [0, 18]);
  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const gx = useSpring(px, { stiffness: 60, damping: 20 });
  const gy = useSpring(py, { stiffness: 60, damping: 20 });

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      px.set((e.clientX / window.innerWidth - 0.5) * 60);
      py.set((e.clientY / window.innerHeight - 0.5) * 60);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [px, py]);

  return (
    <section ref={ref} className="relative isolate overflow-hidden pt-28 md:pt-32">
      {/* halo */}
      <motion.div
        aria-hidden
        style={{ x: gx, y: gy }}
        className="pointer-events-none absolute -right-[20vw] -top-[25vw] -z-10 h-[80vw] w-[80vw] rounded-full bg-[radial-gradient(closest-side,var(--glow-a),var(--glow-b)_45%,transparent_72%)] blur-2xl"
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--grid-line)_1px,transparent_1px)] bg-[size:calc(100%/12)_100%]" />

      {/* logo géant */}
      <motion.div
        aria-hidden
        style={{ y: markY, rotate: markRotate, opacity: fade }}
        className="pointer-events-none absolute -right-[14vw] top-[9vh] -z-10 w-[80vw] md:-right-[8vw] md:top-[4vh] md:w-[50vw]"
      >
        <div className="opacity-20 md:opacity-50">
          {introDone && <Mark animate duration={1.6} delay={0.15} className="w-full drop-shadow-[0_0_120px_rgba(122,28,140,0.45)]" />}
        </div>
      </motion.div>

      <motion.div style={{ y: titleY }} className="container-x relative">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={introDone ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
          className="label flex flex-wrap items-center gap-x-4 gap-y-2 text-muted"
        >
          <span className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-bright opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-bright" />
            </span>
            Agence marketing digital · Maroc
          </span>
          <span className="hidden text-faint sm:inline">/</span>
          <span className="hidden sm:inline">Meta · Google · Web · SEO · CRM</span>
        </motion.div>

        <Lines
          as="h1"
          intro
          delay={0.2}
          className="display mt-8 text-[clamp(2.8rem,9.6vw,10.5rem)] md:mt-10"
        >
          <span key="a">Chaque dirham</span>
          <span key="b">investi devient</span>
          <span key="c">
            un <span className="serif-accent text-gradient pr-[0.06em]">client qualifié.</span>
          </span>
        </Lines>

        <div className="mt-8 grid gap-12 md:mt-10 md:grid-cols-12 md:items-start">
          <motion.div
            className="md:col-span-6 lg:col-span-5"
            initial={{ opacity: 0, y: 24 }}
            animate={introDone ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 1, delay: 0.75, ease: EASE }}
          >
            <p className="max-w-md text-lg leading-relaxed text-fg/75">
              Meta Ads, Google Ads, sites web, SEO, UGC par IA et CRM WhatsApp. On construit la machine complète pendant que vous gérez votre business.{" "}
              <span className="text-fg">Résultats en 60 jours ou remboursé.</span>
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button href="/contact" trackAs="hero_audit" cursor="Go">
                Réserver mon audit gratuit
              </Button>
              <Button href="/#services" variant="ghost">
                Voir les services
              </Button>
            </div>
            <p className="label mt-6 text-faint">Sans engagement · Réponse sous 24h · 30 minutes</p>
          </motion.div>

          <div className="md:col-span-6 md:col-start-7 lg:col-span-5 lg:col-start-8 xl:col-span-4 xl:col-start-9">
            <LiveDashboard />
          </div>
        </div>
      </motion.div>

      <div className="container-x relative mt-16 md:mt-20">
        <div className="grid grid-cols-2 border-t border-line md:grid-cols-4">
          {heroStats.map((s, i) => (
            <motion.div
              key={s.label}
              className={`py-6 ${i % 2 === 1 ? "border-l border-line pl-6" : ""} ${i === 2 ? "md:border-l md:border-line md:pl-6" : ""} ${i > 1 ? "border-t border-line md:border-t-0" : ""}`}
              initial={{ opacity: 0, y: 16 }}
              animate={introDone ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.8, delay: 1 + i * 0.08, ease: EASE }}
            >
              <div className="display text-[clamp(2.2rem,4vw,3.4rem)]">
                <Counter value={s.value} suffix={s.suffix} intro />
              </div>
              <div className="label mt-2 text-muted">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const bars = [22, 31, 38, 52, 67, 89];
const months = ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin"];

function LiveDashboard() {
  const { introDone } = useApp();
  const max = Math.max(...bars);
  const points = bars.map((b, i) => `${((i + 0.5) / bars.length) * 100},${100 - (b / max) * 88 - 10}`).join(" ");

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotateX: 12 }}
      animate={introDone ? { opacity: 1, y: 0, rotateX: 0 } : undefined}
      transition={{ duration: 1.2, delay: 0.9, ease: EASE }}
      style={{ transformPerspective: 1200 }}
      className="relative rounded-[1.6rem] border border-line bg-ink-2/70 p-5 shadow-[0_40px_120px_-40px_rgba(122,28,140,0.6)] backdrop-blur-xl"
      data-cursor="Live"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium">Dashboard client</p>
          <p className="label mt-1 !text-[0.62rem] text-faint">Exemple · mis à jour il y a 2 min</p>
        </div>
        <span className="label flex items-center gap-2 rounded-full border border-line px-3 py-1.5 !text-[0.62rem] text-lilac">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-positive" /> Live
        </span>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-2.5">
        {[
          { k: "Trafic qualifié", v: <Counter value={340} prefix="+" suffix="%" intro duration={2.4} />, d: "+12% ce mois" },
          { k: "Leads / mois", v: <Counter value={89} intro duration={2.4} />, d: "+23 ce mois" },
          { k: "Coût / lead", v: <Counter value={42} prefix="-" suffix="%" intro duration={2.4} />, d: "-8% ce mois" },
          { k: "ROAS moyen", v: <Counter value={4.2} decimals={1} suffix="x" intro duration={2.4} />, d: "+0,6 ce mois" },
        ].map((t) => (
          <div key={t.k} className="rounded-2xl border border-line bg-ink/60 p-3.5">
            <p className="label !text-[0.6rem] text-faint">{t.k}</p>
            <p className="display mt-2 text-[1.7rem]">{t.v}</p>
            <p className="mt-1 text-[0.7rem] text-positive">↑ {t.d}</p>
          </div>
        ))}
      </div>

      <div className="mt-3 rounded-2xl border border-line bg-ink/60 p-4">
        <p className="label !text-[0.6rem] text-faint">Leads générés · 6 derniers mois</p>
        <div className="relative mt-3 h-24">
          <div className="absolute inset-0 flex items-end gap-2">
            {bars.map((b, i) => (
              <motion.div
                key={i}
                className="flex-1 rounded-t-md bg-gradient-to-t from-violet-deep/40 to-violet/70"
                initial={{ height: 0 }}
                animate={introDone ? { height: `${(b / max) * 88}%` } : undefined}
                transition={{ duration: 1, delay: 1.3 + i * 0.08, ease: EASE }}
              />
            ))}
          </div>
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full overflow-visible">
            <motion.polyline
              points={points}
              fill="none"
              className="stroke-lilac"
              strokeWidth="1.6"
              vectorEffect="non-scaling-stroke"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={introDone ? { pathLength: 1 } : undefined}
              transition={{ duration: 1.6, delay: 1.6, ease: [0.65, 0, 0.35, 1] }}
            />
          </svg>
        </div>
        <div className="mt-2 flex justify-between text-[0.62rem] text-faint">
          {months.map((m) => (
            <span key={m} className="flex-1 text-center">{m}</span>
          ))}
        </div>
      </div>

      <motion.div
        className="absolute -top-4 right-6 rounded-full border border-line bg-ink px-4 py-2 text-xs shadow-xl"
        initial={{ opacity: 0, scale: 0.6, y: 10 }}
        animate={introDone ? { opacity: 1, scale: 1, y: [10, 0, -6, 0] } : undefined}
        transition={{ delay: 2.6, duration: 1.2, ease: EASE }}
      >
        <span className="text-positive">●</span> +23 leads aujourd&apos;hui
      </motion.div>
      <motion.div
        className="absolute -bottom-5 right-4 rounded-full bg-violet px-4 py-2 text-xs font-medium text-snow shadow-xl"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={introDone ? { opacity: 1, scale: 1 } : undefined}
        transition={{ delay: 2.9, type: "spring", stiffness: 260, damping: 16 }}
      >
        Garantie 60 jours
      </motion.div>
    </motion.div>
  );
}
