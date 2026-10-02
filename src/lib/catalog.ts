import { services } from "./content";
import { platformFeatures } from "./platform";
import type { Offer, OfferKind } from "./offer";

export { offerHref, offerBase, offerAnchor } from "./offer";
export type { Offer, OfferKind } from "./offer";

/** Toutes les offres, plateforme + agence. */
export const allOffers: Offer[] = [...platformFeatures, ...services];

export const offersOf = (kind: OfferKind) => (kind === "platform" ? platformFeatures : services);

export const findOffer = (kind: OfferKind, slug: string) => offersOf(kind).find((o) => o.slug === slug);

/** Utilisé par generateStaticParams. */
export const slugsOf = (kind: OfferKind) => offersOf(kind).map((o) => ({ slug: o.slug }));

/** Trois autres offres du même univers, pour le bloc « à découvrir ». */
export const relatedOffers = (offer: Offer, count = 3) =>
  offersOf(offer.kind)
    .filter((o) => o.slug !== offer.slug)
    .slice(0, count);
