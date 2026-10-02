"use client";

import { useEffect } from "react";
import { useApp } from "./Providers";

/**
 * Atterrissage fiable sur une ancre au chargement d'une page longue.
 *
 * Le préchargeur verrouille Lenis pendant l'hydratation : la position que le
 * navigateur applique au hash est alors perdue ou approximative, et sur une
 * page de dix-huit sections on rate sa cible d'un bloc entier. On repose donc
 * la position une fois l'intro terminée.
 *
 * Ne s'exécute qu'au montage : un clic sur une ancre interne reste géré par
 * Lenis, avec son propre décalage.
 */
export function HashLanding({ offset = 96 }: { offset?: number }) {
  const { lenis, introDone } = useApp();

  useEffect(() => {
    if (!introDone) return;
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (!id) return;

    const t = setTimeout(() => {
      const el = document.getElementById(id);
      if (!el) return;
      const y = el.getBoundingClientRect().top + window.scrollY - offset;
      if (lenis) lenis.scrollTo(y, { immediate: true });
      else window.scrollTo(0, y);
    }, 90);

    return () => clearTimeout(t);
  }, [introDone, lenis, offset]);

  return null;
}
