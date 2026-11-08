"use client";

import { useEffect } from "react";

/**
 * Atterrissage fiable sur une ancre au chargement d'une page longue.
 *
 * Le navigateur applique le hash tout seul (avec `scroll-padding-top`), mais
 * les sections en `content-visibility: auto` ont une hauteur estimée tant
 * qu'elles ne sont pas rendues : on repose la position une fois la page
 * hydratée pour ne pas rater la cible d'un bloc.
 */
export function HashLanding({ offset = 96 }: { offset?: number }) {
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (!id) return;

    const t = setTimeout(() => {
      const el = document.getElementById(id);
      if (!el) return;
      window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - offset, behavior: "instant" });
    }, 90);

    return () => clearTimeout(t);
  }, [offset]);

  return null;
}
