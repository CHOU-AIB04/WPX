"use client";

import { AnimatePresence, animate, motion } from "motion/react";
import { useEffect, useState } from "react";
import { Mark } from "@/components/brand/Mark";
import { useApp } from "./Providers";

const KEY = "wpx-intro-seen";

export function Preloader() {
  const { setIntroDone } = useApp();
  const [visible, setVisible] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem(KEY) === "1";
    } catch {}
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (seen || reduce) {
      // sessionStorage n'existe que côté client : décision prise au montage
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setVisible(false);
      setIntroDone(true);
      return;
    }
    const controls = animate(0, 100, {
      duration: 1.5,
      ease: [0.65, 0, 0.35, 1],
      onUpdate: (v) => setCount(Math.round(v)),
      onComplete: () => {
        try {
          sessionStorage.setItem(KEY, "1");
        } catch {}
        setVisible(false);
        setTimeout(() => setIntroDone(true), 350);
      },
    });
    return () => controls.stop();
  }, [setIntroDone]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[100] flex flex-col bg-ink"
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          initial={{ clipPath: "inset(0 0 0% 0)" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="flex flex-1 items-center justify-center">
            <Mark animate duration={1.05} delay={0.1} className="w-[min(34vw,180px)]" />
          </div>
          <div className="container-x flex items-end justify-between pb-8">
            <span className="label text-muted">Digital marketing agency · Maroc</span>
            <span className="display text-[clamp(3rem,10vw,8rem)] tabular-nums text-fg">
              {String(count).padStart(3, "0")}
            </span>
          </div>
          <motion.div
            className="h-px origin-left bg-violet-bright"
            style={{ scaleX: count / 100 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
