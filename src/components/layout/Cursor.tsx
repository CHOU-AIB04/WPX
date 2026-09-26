"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useState, useSyncExternalStore } from "react";

const QUERY = "(pointer: fine) and (prefers-reduced-motion: no-preference)";
const subscribe = (cb: () => void) => {
  const mq = window.matchMedia(QUERY);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
};

/** Curseur custom (pointeur fin uniquement). Label via data-cursor="Texte". */
export function Cursor() {
  const enabled = useSyncExternalStore(subscribe, () => window.matchMedia(QUERY).matches, () => false);
  const [label, setLabel] = useState<string | null>(null);
  const [hover, setHover] = useState(false);
  const [down, setDown] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.5 });

  useEffect(() => {
    if (!enabled) return;
    document.documentElement.classList.add("has-cursor");
    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const t = (e.target as HTMLElement | null)?.closest<HTMLElement>("[data-cursor], a, button, input, textarea, select, label");
      setLabel(t?.dataset.cursor ?? null);
      setHover(!!t);
    };
    const d = () => setDown(true);
    const u = () => setDown(false);
    const leave = () => { x.set(-100); y.set(-100); };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerdown", d);
    window.addEventListener("pointerup", u);
    document.addEventListener("pointerleave", leave);
    return () => {
      document.documentElement.classList.remove("has-cursor");
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerdown", d);
      window.removeEventListener("pointerup", u);
      document.removeEventListener("pointerleave", leave);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;
  const size = label ? 92 : hover ? 44 : 12;

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[90] flex items-center justify-center rounded-full"
        style={{ x: sx, y: sy, translateX: "-50%", translateY: "-50%", mixBlendMode: hover || label ? "normal" : "difference" }}
        animate={{
          width: size,
          height: size,
          backgroundColor: label ? "rgba(178,79,211,1)" : hover ? "rgba(178,79,211,0.18)" : "rgba(245,240,248,1)",
          border: hover && !label ? "1px solid rgba(216,182,234,0.7)" : "0px solid rgba(0,0,0,0)",
          scale: down ? 0.85 : 1,
        }}
        transition={{ type: "spring", stiffness: 380, damping: 30 }}
      >
        {label && (
          <motion.span
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            className="label !text-[0.62rem] text-snow"
          >
            {label}
          </motion.span>
        )}
      </motion.div>
    </>
  );
}
