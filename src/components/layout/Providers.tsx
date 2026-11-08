"use client";

import { MotionConfig } from "motion/react";

/**
 * Contexte client minimal : la préférence « mouvement réduit » appliquée à
 * toutes les animations motion.
 *
 * Plus de Lenis (le défilement était déjà natif ; les ancres passent par
 * `scroll-padding-top` en CSS) ni d'écran d'intro : le contenu est visible
 * dès le HTML serveur.
 */
export function Providers({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
