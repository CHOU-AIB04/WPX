/**
 * Clés des démos réellement interactives, dans un module sans "use client"
 * pour que les composants serveur puissent les lire sans franchir la frontière client.
 *
 * Ajouter une démo = ajouter sa clé ici ET son import dynamique dans OfferDemo.tsx.
 */
export const INTERACTIVE_DEMOS = new Set<string>(["automations"]);

export const isInteractive = (demo?: string) => Boolean(demo && INTERACTIVE_DEMOS.has(demo));
