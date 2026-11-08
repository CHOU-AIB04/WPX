"use client";

import { animate, motion, useInView, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { EASE } from "./ease";

/** Élément magnétique (suit le pointeur quand survolé). */
export function Magnetic({ children, strength = 0.35, className = "" }: { children: React.ReactNode; strength?: number; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduce = useReducedMotion();
  const x = useSpring(useMotionValue(0), { stiffness: 220, damping: 18, mass: 0.4 });
  const y = useSpring(useMotionValue(0), { stiffness: 220, damping: 18, mass: 0.4 });

  const onMove = (e: React.PointerEvent) => {
    if (reduce || e.pointerType !== "mouse" || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.span ref={ref} onPointerMove={onMove} onPointerLeave={reset} style={{ x, y }} className={`inline-block ${className}`}>
      {children}
    </motion.span>
  );
}

/**
 * Compteur animé à l'entrée dans le viewport.
 * Le HTML serveur porte la valeur finale (lisible sans JS et par les robots) ;
 * l'animation repart de zéro une fois le composant visible.
 */
export function Counter({
  value,
  decimals = 0,
  prefix = "",
  suffix = "",
  duration = 2,
  className,
  locale = "fr-FR",
  intro = false,
}: {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
  locale?: string;
  /** Compteur du hero : part de zéro dès le HTML serveur. */
  intro?: boolean;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const reduce = useReducedMotion();
  const [n, setN] = useState(intro ? 0 : value);
  /** Animer seulement ce qui n'a pas encore été vu, pour éviter un saut 340 → 0 → 340. */
  const armed = useRef(intro);

  useEffect(() => {
    if (intro || reduce || !ref.current) return;
    if (ref.current.getBoundingClientRect().top > window.innerHeight) {
      armed.current = true;
      // hors écran : la remise à zéro ne se voit pas
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setN(0);
    }
  }, [intro, reduce]);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setN(value);
      return;
    }
    if (!armed.current) return;
    const c = animate(0, value, { duration, ease: EASE, onUpdate: setN });
    return () => c.stop();
  }, [inView, reduce, value, duration]);

  const fmt = n.toLocaleString(locale, { minimumFractionDigits: decimals, maximumFractionDigits: decimals }).replace(/ | /g, ".");
  return (
    <span ref={ref} className={`tabular-nums ${className ?? ""}`}>
      {prefix}
      {fmt}
      {suffix}
    </span>
  );
}
