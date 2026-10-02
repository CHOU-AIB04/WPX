"use client";

import dynamic from "next/dynamic";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ServiceVisual } from "@/components/sections/ServiceVisual";

/**
 * Registre des démos interactives.
 *
 * Règles :
 *  - `ssr: false` partout : ces composants touchent `window`, le canvas ou des mesures DOM.
 *  - le squelette réserve exactement la hauteur finale, sinon on crée du CLS.
 *  - rien n'est chargé tant que le bloc n'est pas entré dans le viewport.
 *
 * Une clé absente ici retombe proprement sur l'illustration statique <ServiceVisual>.
 */
/** Sans cadre ni fond : la démo vit à même la page. */
const Skeleton = () => <div className="h-[clamp(620px,82vh,860px)] w-full animate-pulse opacity-40" />;

const registry: Record<string, React.ComponentType> = {
  automations: dynamic(() => import("./AutomationDemo").then((m) => m.AutomationDemo), {
    ssr: false,
    loading: Skeleton,
  }),
};

export function OfferDemo({ id, demo }: { id: string; demo?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "200px 0px" });

  const Demo = demo ? registry[demo] : undefined;

  return (
    <div ref={ref} className="h-full w-full">
      {Demo ? inView ? <Demo /> : <Skeleton /> : <ServiceVisual id={id} />}
    </div>
  );
}
