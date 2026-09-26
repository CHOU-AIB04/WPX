"use client";

import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
  type HTMLMotionProps,
} from "motion/react";
import { Children, isValidElement, useEffect, useRef, useState } from "react";
import { useApp } from "@/components/layout/Providers";

export const EASE = [0.16, 1, 0.3, 1] as const;

/** Apparition douce au scroll. */
export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
  ...rest
}: { children: React.ReactNode; delay?: number; y?: number } & HTMLMotionProps<"div">) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.9, delay, ease: EASE }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

/**
 * Titre révélé ligne par ligne (masque). Chaque enfant direct = une ligne.
 * `intro` attend la fin du preloader (hero).
 */
export function Lines({
  children,
  className,
  lineClassName = "",
  delay = 0,
  stagger = 0.09,
  intro = false,
  as: Tag = "h2",
}: {
  children: React.ReactNode;
  className?: string;
  lineClassName?: string;
  delay?: number;
  stagger?: number;
  intro?: boolean;
  as?: "h1" | "h2" | "h3" | "p" | "div";
}) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const { introDone } = useApp();
  const go = inView && (!intro || introDone);
  const lines = Children.toArray(children).filter((c) => c !== null && c !== undefined && c !== "");

  return (
    <Tag ref={ref as never} className={className}>
      {lines.map((line, i) => (
        <span key={isValidElement(line) && line.key ? line.key : i} className={`block overflow-hidden pb-[0.08em] -mb-[0.08em] ${lineClassName}`}>
          <motion.span
            className="block will-change-transform"
            initial={{ y: "110%", rotate: 2.5 }}
            animate={go ? { y: "0%", rotate: 0 } : undefined}
            transition={{ duration: 1.1, delay: delay + i * stagger, ease: EASE }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

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

/** Compteur animé à l'entrée dans le viewport. */
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
  intro?: boolean;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const { introDone } = useApp();
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView || (intro && !introDone)) return;
    const c = animate(0, value, { duration, ease: [0.16, 1, 0.3, 1], onUpdate: setN });
    return () => c.stop();
  }, [inView, intro, introDone, value, duration]);

  const fmt = n.toLocaleString(locale, { minimumFractionDigits: decimals, maximumFractionDigits: decimals }).replace(/ | /g, ".");
  return (
    <span ref={ref} className={`tabular-nums ${className ?? ""}`}>
      {prefix}
      {fmt}
      {suffix}
    </span>
  );
}
