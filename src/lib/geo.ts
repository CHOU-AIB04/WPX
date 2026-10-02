import { headers } from "next/headers";

/**
 * Qui a le droit de voir les montants.
 *
 * Nos tarifs publics sont calibrés pour le marché marocain. Hors Maroc, on
 * montre les offres et leur contenu, mais pas les prix : le devis se fait au
 * cas par cas.
 *
 * ⚠ Appeler `showPrices()` rend la page dynamique (elle lit `headers()`).
 * C'est voulu : un montant masqué ne doit jamais partir dans du HTML mis en
 * cache, sinon il suffit de lire la source pour le retrouver.
 */

/** Le pays où les tarifs publics s'appliquent. */
export const PRICED_COUNTRY = "MA";

/** Valeurs que les hébergeurs renvoient quand ils n'ont pas su géolocaliser. */
const UNKNOWN = new Set(["", "XX", "ZZ", "T1", "A1", "A2"]);

/** Pays du visiteur vu par le proxy, ou `null` si indéterminé. */
export async function visitorCountry(): Promise<string | null> {
  const c = (await headers()).get("x-wpx-country")?.trim().toUpperCase() ?? "";
  return UNKNOWN.has(c) ? null : c;
}

/**
 * Faut-il afficher les montants ?
 *
 * Règle : on affiche par défaut, on ne masque que lorsqu'on sait
 * positivement que le visiteur est ailleurs. Un Marocain derrière un VPN
 * d'entreprise, un robot d'indexation ou un dev en local voient donc les
 * prix — c'est le comportement souhaité.
 */
export async function showPrices(): Promise<boolean> {
  const c = await visitorCountry();
  return c === null || c === PRICED_COUNTRY;
}
