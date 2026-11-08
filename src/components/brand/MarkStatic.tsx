import { MARK_DARK, MARK_LIGHT, MARK_TRANSFORM } from "./mark-paths";

/**
 * Le logo sans animation, rendu côté serveur : un seul <svg>, aucun JS.
 * À utiliser partout où le symbole est décoratif et répété (bandeaux).
 */
export function MarkStatic({
  className,
  light = "#7A1C8C",
  dark = "#4C1373",
  title,
}: {
  className?: string;
  light?: string;
  dark?: string;
  /** Absent = décoratif (aria-hidden). */
  title?: string;
}) {
  return (
    <svg
      viewBox="0 0 1154 1008"
      className={`inline-block aspect-[1154/1008] ${className ?? ""}`}
      {...(title ? { role: "img", "aria-label": title } : { "aria-hidden": true })}
    >
      <g transform={MARK_TRANSFORM}>
        <path fill={light} d={MARK_LIGHT} />
        <path fill={dark} d={MARK_DARK} />
      </g>
    </svg>
  );
}
