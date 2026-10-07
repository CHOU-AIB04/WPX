/**
 * Captures d'écran des comptes publicitaires réels.
 *
 * Les fichiers vivent sur le Cloudinary de WePushX, pas dans le dépôt : ce
 * sont des pièces marketing qui changent à chaque nouveau résultat, et les
 * remplacer ne doit pas demander un déploiement. Les noms de campagnes y sont
 * déjà floutés côté source.
 *
 * `w` et `h` sont les dimensions réelles du PNG : elles servent à réserver
 * l'espace (ratio exact, aucun saut de mise en page au chargement).
 */

const CLOUD = "https://res.cloudinary.com/drn1zdkwa/image/upload/";

/** `f_auto,q_auto:good` : Cloudinary sert du WebP/AVIF sans écraser les
 *  petits chiffres des tableaux. */
export const shotUrl = (path: string) => `${CLOUD}f_auto,q_auto:good/${path}`;

export type Shot = { path: string; w: number; h: number; alt: string };

export const metaShots = {
  hero: {
    path: "v1790961957/WePushX-presentation.pptx_1_ygcxbd.png",
    w: 1558,
    h: 504,
    alt: "Gestionnaire de publicités Meta : sept campagnes actives avec leurs résultats, coût par lead, budget et impressions.",
  } satisfies Shot,
  side: [
    {
      path: "v1790961956/WePushX-presentation.pptx_3_ubgyhj.png",
      w: 1467,
      h: 247,
      alt: "Campagne Meta à 0,42 $ par lead sur 1 532 formulaires remplis, pour 638 $ dépensés.",
    },
    {
      path: "v1790961956/WePushX-presentation.pptx_4_ittlnh.png",
      w: 1394,
      h: 317,
      alt: "Campagne Meta e-commerce : ROAS et valeur d'achat suivis directement dans le gestionnaire.",
    },
    {
      path: "v1790961956/WePushX-presentation.pptx_5_t2tjnh.png",
      w: 1511,
      h: 250,
      alt: "Campagne Meta Advantage+ : 2 352 leads générés à 1,08 $ pièce.",
    },
  ] satisfies Shot[],
  wide: {
    path: "v1790961957/WePushX-presentation.pptx_2_vkjneh.png",
    w: 2867,
    h: 642,
    alt: "Trois campagnes Meta : 25 401 engagements à 0,02 $, 10 338 leads site à 0,48 $, 8 339 leads formulaire à 0,89 $.",
  } satisfies Shot,
};

export const googleShots = {
  hero: {
    path: "v1790962502/WePushX-presentation.pptx_6_ag7ysp.png",
    w: 1836,
    h: 732,
    alt: "Google Ads : six campagnes avec impressions, clics, CTR, conversions et coût par conversion entre 1,54 et 8,05 USD.",
  } satisfies Shot,
  side: [
    {
      path: "v1790962502/WePushX-presentation.pptx_f3mk6i.png",
      w: 1874,
      h: 378,
      alt: "Campagne Google Ads en stratégie Maximiser les conversions : 10,54 % de taux de conversion, 62,37 MAD par conversion.",
    },
    {
      path: "v1790962501/WePushX-presentation.pptx_1_fjgf9c.png",
      w: 1874,
      h: 224,
      alt: "Campagne Google Ads : 967 clics, 20,10 % de taux d'interaction, 31 conversions à 74,49 MAD.",
    },
  ] satisfies Shot[],
};
