"use client";

import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  wrap,
} from "motion/react";
import { useRef } from "react";

/** Bandeau infini dont la vitesse réagit au scroll (et s'inverse au scroll up). */
export function Marquee({
  children,
  speed = 3,
  className = "",
  pauseOnHover = false,
}: {
  children: React.ReactNode;
  speed?: number; // % de la piste par seconde
  className?: string;
  pauseOnHover?: boolean;
}) {
  const reduce = useReducedMotion();
  const base = useMotionValue(0);
  const { scrollY } = useScroll();
  const velocity = useSpring(useVelocity(scrollY), { damping: 50, stiffness: 400 });
  const factor = useTransform(velocity, [-2000, 0, 2000], [-4, 0, 4], { clamp: false });
  const x = useTransform(base, (v) => `${wrap(-50, 0, v)}%`);
  const dir = useRef(speed >= 0 ? -1 : 1);
  const paused = useRef(false);

  useAnimationFrame((_, delta) => {
    if (reduce || paused.current) return;
    const f = factor.get();
    if (f < 0) dir.current = speed >= 0 ? 1 : -1;
    else if (f > 0) dir.current = speed >= 0 ? -1 : 1;
    const move = dir.current * Math.abs(speed) * (delta / 1000) * (1 + Math.abs(f));
    base.set(base.get() + move);
  });

  return (
    <div
      className={`flex overflow-hidden whitespace-nowrap ${className}`}
      onPointerEnter={() => pauseOnHover && (paused.current = true)}
      onPointerLeave={() => (paused.current = false)}
    >
      <motion.div className="flex w-max shrink-0" style={{ x }}>
        <div className="flex shrink-0">{children}</div>
        <div className="flex shrink-0" aria-hidden>
          {children}
        </div>
      </motion.div>
    </div>
  );
}
