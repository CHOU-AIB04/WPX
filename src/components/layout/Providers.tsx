"use client";

import Lenis from "lenis";
import { MotionConfig } from "motion/react";
import { usePathname } from "next/navigation";
import { createContext, useContext, useEffect, useRef, useState } from "react";

type Ctx = { introDone: boolean; setIntroDone: (v: boolean) => void; lenis: Lenis | null };
const AppContext = createContext<Ctx>({ introDone: true, setIntroDone: () => {}, lenis: null });

export const useApp = () => useContext(AppContext);

export function Providers({ children }: { children: React.ReactNode }) {
  const [introDone, setIntroDone] = useState(false);
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const pathname = usePathname();
  const first = useRef(true);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const l = new Lenis({ autoRaf: true, lerp: 0.11, anchors: { offset: -80 } });
    // instance créée côté client uniquement, exposée au reste de l'app
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLenis(l);
    return () => l.destroy();
  }, []);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    if (!window.location.hash) lenis?.scrollTo(0, { immediate: true });
  }, [pathname, lenis]);

  useEffect(() => {
    if (!lenis) return;
    if (introDone) lenis.start();
    else lenis.stop();
  }, [introDone, lenis]);

  return (
    <AppContext.Provider value={{ introDone, setIntroDone, lenis }}>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </AppContext.Provider>
  );
}
