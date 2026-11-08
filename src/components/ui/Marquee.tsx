import type { CSSProperties, ReactNode } from "react";

/**
 * Bandeau infini en CSS pur (animation `marquee` dans globals.css).
 *
 * Avant : une boucle `useAnimationFrame` recalculait la position à chaque
 * frame et réagissait à la vitesse de scroll — coût CPU constant sur mobile.
 * Le contenu est dupliqué une fois (copie `aria-hidden`) : c'est le minimum
 * pour une boucle sans couture.
 *
 * `speed` : pourcentage de la piste parcouru par seconde ; négatif = vers la droite.
 */
export function Marquee({
  children,
  speed = 3,
  className = "",
  pauseOnHover = false,
}: {
  children: ReactNode;
  speed?: number;
  className?: string;
  pauseOnHover?: boolean;
}) {
  const style = { "--marquee-dur": `${(50 / Math.max(Math.abs(speed), 0.1)).toFixed(1)}s` } as CSSProperties;
  return (
    <div className={`marquee flex overflow-hidden whitespace-nowrap ${className}`} data-pause={pauseOnHover ? "" : undefined}>
      <div className="marquee-track flex w-max shrink-0" style={style} data-reverse={speed < 0 ? "" : undefined}>
        <div className="flex shrink-0">{children}</div>
        <div className="flex shrink-0" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
