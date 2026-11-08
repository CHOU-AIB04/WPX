import { Children, isValidElement, type CSSProperties, type ReactNode } from "react";

/**
 * Révélations au scroll, sans JavaScript côté React.
 *
 * Le HTML serveur est lisible tel quel : sans JS, tout est visible. Un petit
 * script inline (`revealScript`, posé dans le layout) ajoute la classe `rv`
 * sur <html> puis un IntersectionObserver pose `data-rv-in` sur chaque bloc
 * qui entre dans l'écran. Les transitions vivent dans globals.css.
 *
 * Avant : chaque <Reveal> était un composant motion hydraté, invisible
 * (`opacity: 0`) jusqu'à l'exécution du JS — c'est ce qui retardait le LCP.
 */

export { EASE } from "./ease";
export { Counter, Magnetic } from "./motion-client";

type Vars = CSSProperties & Record<`--${string}`, string>;

/** Apparition douce au scroll. */
export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
  style,
  id,
}: {
  children?: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  style?: CSSProperties;
  id?: string;
}) {
  const vars: Vars = { "--rv-d": `${delay}s`, "--rv-y": `${y}px`, ...style };
  return (
    <div data-reveal="" className={className} style={vars} id={id} suppressHydrationWarning>
      {children}
    </div>
  );
}

/**
 * Titre révélé ligne par ligne (masque). Chaque enfant direct = une ligne.
 *
 * `intro` (titre du hero) : jamais masqué. Le titre est peint dès le premier
 * rendu du HTML serveur — c'est l'élément LCP — avec une montée en CSS pur
 * qui part déjà partiellement visible.
 */
export function Lines({
  children,
  className,
  lineClassName = "",
  delay = 0,
  stagger = 0.09,
  intro = false,
  eyebrow,
  eyebrowRaw,
  as: Tag = "h2",
}: {
  children: ReactNode;
  className?: string;
  lineClassName?: string;
  delay?: number;
  stagger?: number;
  intro?: boolean;
  /**
   * Sur-titre au style « label », rendu DANS le titre. Sert à placer le
   * mot-clé principal dans le <h1> sans changer le visuel (il remplace le
   * <SectionLabel> qui était posé au-dessus).
   */
  eyebrow?: ReactNode;
  /** Variante : sur-titre déjà mis en forme par l'appelant (hero de la home). */
  eyebrowRaw?: ReactNode;
  as?: "h1" | "h2" | "h3" | "p" | "div";
}) {
  const lines = Children.toArray(children).filter((c) => c !== null && c !== undefined && c !== "");
  const attrs = intro ? { className: `lines-intro ${className ?? ""}` } : { className, "data-lines": "" };

  return (
    <Tag {...attrs} suppressHydrationWarning>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      {eyebrowRaw}
      {lines.map((line, i) => (
        <span key={isValidElement(line) && line.key ? line.key : i} className={`block overflow-hidden pb-[0.08em] -mb-[0.08em] ${lineClassName}`}>
          <span className="rv-line block" style={{ "--rv-d": `${delay + i * stagger}s` } as Vars}>
            {line}
          </span>
        </span>
      ))}
    </Tag>
  );
}

/** Même rendu que <SectionLabel>, mais en <span> pour vivre dans un titre. */
function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="label mb-8 flex items-center gap-3 leading-normal text-muted">
      {/* La flèche est un pseudo-élément : elle ne fait pas partie du texte du titre. */}
      <span aria-hidden className="text-violet-bright before:content-['(→)']" />
      <span aria-hidden className="h-px w-10 bg-line" />
      <span>{children}</span>
    </span>
  );
}

/**
 * Script inline du layout : active les révélations et observe les blocs, y
 * compris ceux ajoutés par une navigation client (MutationObserver).
 * Mouvement réduit ou navigateur sans IntersectionObserver : rien n'est
 * masqué, rien n'est animé.
 */
export const revealScript = `(function(){try{if(matchMedia('(prefers-reduced-motion: reduce)').matches||!('IntersectionObserver' in window))return;var d=document.documentElement;d.classList.add('rv');var io=new IntersectionObserver(function(es){for(var i=0;i<es.length;i++){if(es[i].isIntersecting){es[i].target.setAttribute('data-rv-in','');io.unobserve(es[i].target)}}},{rootMargin:'0px 0px -10% 0px'});var seen=new WeakSet();var scan=function(){var els=document.querySelectorAll('[data-reveal]:not([data-rv-in]),[data-lines]:not([data-rv-in])');for(var i=0;i<els.length;i++){if(!seen.has(els[i])){seen.add(els[i]);io.observe(els[i])}}};new MutationObserver(scan).observe(d,{childList:true,subtree:true});scan()}catch(e){document.documentElement.classList.remove('rv')}})();`;
