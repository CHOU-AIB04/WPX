"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Logo } from "@/components/brand/Mark";
import { Button } from "@/components/ui/Button";
import { EASE } from "@/components/ui/motion";
import { nav, site } from "@/lib/content";
import { offerAnchor, offersOf, type OfferKind } from "@/lib/catalog";
import { MegaPanel } from "./MegaMenu";
import { useApp } from "./Providers";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const { scrollY } = useScroll();
  const { introDone, lenis } = useApp();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mega, setMega] = useState<OfferKind | null>(null);
  /** petite temporisation : on ne ferme pas le panneau si la souris le traverse */
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useMotionValueEvent(scrollY, "change", (v) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(v > 40);
    const goingDown = v > prev && v > 400 && !open;
    setHidden(goingDown);
    if (goingDown) setMega(null);
  });

  useEffect(() => {
    if (open) lenis?.stop();
    else lenis?.start();
  }, [open, lenis]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setMega(null);
      setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => () => { if (closeTimer.current) clearTimeout(closeTimer.current); }, []);

  const openMega = (kind: OfferKind) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMega(kind);
  };
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setMega(null), 140);
  };

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-0 z-50"
        initial={{ y: -100 }}
        animate={{ y: introDone && !hidden ? 0 : -110 }}
        transition={{ duration: 0.8, ease: EASE, delay: introDone && !scrolled ? 0.6 : 0 }}
        onMouseLeave={scheduleClose}
      >
        <div
          className={`container-x flex h-20 items-center justify-between transition-[background-color,backdrop-filter,border-color] duration-500 ${
            (scrolled && !open) || mega ? "border-b border-line bg-ink/70 backdrop-blur-xl" : "border-b border-transparent"
          }`}
        >
          <Link href="/" aria-label="WePushX, accueil" className="relative z-10" onClick={() => { setOpen(false); setMega(null); }}>
            <Logo />
          </Link>

          <nav className="hidden items-center gap-6 lg:flex xl:gap-9" aria-label="Navigation principale">
            {nav.map((item) => {
              const isMega = Boolean(item.megaKind);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group relative py-2 text-[0.92rem] text-fg/80 hover:text-fg"
                  aria-haspopup={isMega || undefined}
                  aria-expanded={isMega ? mega === item.megaKind : undefined}
                  onMouseEnter={() => (isMega ? openMega(item.megaKind as OfferKind) : scheduleClose())}
                  onFocus={() => (isMega ? openMega(item.megaKind as OfferKind) : scheduleClose())}
                  onClick={() => setMega(null)}
                >
                  <span className="roll">
                    <span>{item.label}</span>
                    <span>{item.label}</span>
                  </span>
                  {isMega && (
                    <span
                      aria-hidden
                      className={`absolute -bottom-0.5 left-0 h-px bg-violet-bright transition-all duration-500 ease-[var(--ease-expo)] ${
                        mega === item.megaKind ? "w-full" : "w-0"
                      }`}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle className="relative z-10" />
            <div className="hidden sm:block">
              <Button href="/contact" trackAs="header_audit" className="!h-12 !pl-5 !text-[0.88rem]">
                Réserver mon audit
              </Button>
            </div>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-line lg:hidden"
              aria-expanded={open}
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            >
              <span className="relative block h-3 w-5">
                <motion.span className="absolute left-0 top-0 h-px w-5 bg-fg" animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }} />
                <motion.span className="absolute bottom-0 left-0 h-px w-5 bg-fg" animate={open ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }} />
              </span>
            </button>
          </div>
        </div>

        {/* méga-menu, desktop uniquement */}
        <div className="hidden lg:block" onMouseEnter={() => closeTimer.current && clearTimeout(closeTimer.current)}>
          <AnimatePresence>
            {mega && <MegaPanel key={mega} kind={mega} onNavigate={() => setMega(null)} />}
          </AnimatePresence>
        </div>
      </motion.header>

      {/* voile derrière le méga-menu */}
      <AnimatePresence>
        {mega && (
          <motion.div
            aria-hidden
            className="fixed inset-0 z-40 hidden bg-ink/60 lg:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onMouseEnter={scheduleClose}
          />
        )}
      </AnimatePresence>

      {/* menu mobile */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col overflow-y-auto bg-ink-2 pt-28 lg:hidden"
            initial={{ clipPath: "circle(0% at calc(100% - 3rem) 2.5rem)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 3rem) 2.5rem)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 3rem) 2.5rem)" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          >
            <nav className="container-x flex flex-col" aria-label="Menu mobile">
              {nav.map((item, i) => (
                <div key={item.href} className="overflow-hidden border-b border-line">
                  <motion.div
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, delay: 0.25 + i * 0.06, ease: EASE }}
                  >
                    <Link href={item.href} onClick={() => setOpen(false)} className="flex items-baseline justify-between py-5">
                      <span className="display text-[2.4rem]">{item.label}</span>
                      <span className="label text-faint">0{i + 1}</span>
                    </Link>
                    {item.megaKind && (
                      <div className="flex flex-wrap gap-2 pb-5">
                        {offersOf(item.megaKind).map((o) => (
                          <Link
                            key={o.slug}
                            href={offerAnchor(o)}
                            onClick={() => setOpen(false)}
                            className="rounded-full border border-line px-3 py-1.5 text-[0.78rem] text-fg/70"
                          >
                            {o.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </motion.div>
                </div>
              ))}
            </nav>
            <motion.div
              className="container-x mt-auto flex flex-col gap-4 py-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <Button href="/contact" trackAs="mobile_menu_audit" className="self-start" onClick={() => setOpen(false)}>
                Réserver mon audit
              </Button>
              <a href={`mailto:${site.email}`} className="label text-muted">
                {site.email}
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
