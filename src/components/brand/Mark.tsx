"use client";

import { motion, useReducedMotion } from "motion/react";
import { MARK_DARK, MARK_LIGHT, MARK_TRANSFORM } from "./mark-paths";

type Props = {
  className?: string;
  /** Balayage diagonal façon flèche qui monte (bas-gauche vers haut-droite) */
  animate?: boolean;
  delay?: number;
  duration?: number;
  light?: string;
  dark?: string;
  title?: string;
};

const HIDDEN = "polygon(0% 100%, 0% 100%, 0% 100%)";
const SHOWN = "polygon(0% 100%, 0% -110%, 210% 100%)";

export function Mark({
  className,
  animate = false,
  delay = 0,
  duration = 1.1,
  light = "#7A1C8C",
  dark = "#4C1373",
  title = "WePushX",
}: Props) {
  const reduce = useReducedMotion();
  const play = animate && !reduce;

  const layer = (fill: string, d: string, extraDelay: number, fade: boolean) => (
    <motion.svg
      viewBox="0 0 1154 1008"
      className="absolute inset-0 h-full w-full"
      aria-hidden
      initial={play ? { clipPath: HIDDEN, opacity: fade ? 0 : 1 } : false}
      animate={play ? { clipPath: SHOWN, opacity: 1 } : undefined}
      transition={{ duration, delay: delay + extraDelay, ease: [0.76, 0, 0.24, 1] }}
    >
      <g transform={MARK_TRANSFORM}>
        <path fill={fill} d={d} />
      </g>
    </motion.svg>
  );

  return (
    <span role="img" aria-label={title} className={`relative inline-block aspect-[1154/1008] ${className ?? ""}`}>
      {layer(light, MARK_LIGHT, 0, false)}
      {layer(dark, MARK_DARK, duration * 0.35, true)}
    </span>
  );
}

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`font-brand font-extrabold tracking-[-0.02em] ${className}`}>
      WePush<span className="text-violet-bright">X</span>
    </span>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Mark className="h-7 w-auto" />
      <Wordmark className="text-[1.35rem] leading-none" />
    </span>
  );
}
