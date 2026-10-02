/**
 * Forme commune à toute offre WePushX : fonctionnalité de la plateforme (/plateforme)
 * ou service réalisé par l'agence (/services).
 *
 * Ce fichier ne contient QUE des types : il est importé par `content.ts` et
 * `platform.ts` sans créer de dépendance circulaire.
 */

export type OfferKind = "platform" | "service";

export type Offer = {
  /** Identifiant court, sert aussi de clé pour la démo et l'illustration. */
  id: string;
  /** Segment d'URL : /plateforme/<slug> ou /services/<slug>. */
  slug: string;
  kind: OfferKind;
  name: string;
  /** Sur-titre court affiché au-dessus du nom. */
  kicker: string;
  /** Paragraphe d'introduction, 1 à 3 phrases. */
  body: string;
  bullets: string[];
  tags: string[];
  price?: string;

  seo: { title: string; description: string };

  /** Chaque entrée de `lines` = une ligne révélée par <Lines>. */
  hero: { lines: string[]; sub: string };

  /** Chiffres animés par <Counter>. Même forme que `results` dans content.ts. */
  proof: { value: number; prefix?: string; suffix?: string; decimals?: number; label: string; detail: string }[];

  process: { title: string; body: string }[];

  faq: { q: string; a: string }[];

  /** Clé de démo interactive. Absent = on retombe sur <ServiceVisual>. */
  demo?: string;
};

export const offerBase = (kind: OfferKind) => (kind === "platform" ? "/plateforme" : "/services");

/** Page dédiée : démo interactive, chiffres, méthode, FAQ. */
export const offerHref = (o: Pick<Offer, "kind" | "slug">) => `${offerBase(o.kind)}/${o.slug}`;

/**
 * Section correspondante sur le catalogue fusionné.
 * C'est la cible des liens du méga-menu : on atterrit sur l'offre sans
 * quitter la page qui contient toutes les autres.
 */
export const offerAnchor = (o: Pick<Offer, "slug">) => `/offres#${o.slug}`;
