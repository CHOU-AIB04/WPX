/**
 * Études de cas clients (/cas-clients).
 *
 * Pour publier un cas : dupliquer le modèle ci-dessous, remplir chaque champ
 * avec des chiffres RÉELS (validés par le client), puis passer
 * `published: true`. Le cas apparaît alors dans la liste, le sitemap, le
 * maillage interne et reçoit son schéma Article — sans autre modification.
 *
 * Un cas non publié n'est jamais rendu ni listé.
 */

export type CaseStudy = {
  slug: string;
  published: boolean;
  /** Nom du client, ou description anonymisée (« Clinique esthétique, Casablanca »). */
  client: string;
  sector: string;
  city: string;
  /** Date de publication, format AAAA-MM-JJ. */
  date: string;
  /** Titre éditorial (h1). */
  title: string;
  /** Balise <title> complète, 60 caractères max. */
  metaTitle: string;
  /** 155 caractères max. */
  description: string;
  /** Services mobilisés (ids de content.ts). */
  services: string[];
  /** 1. Le problème de départ. */
  problem: string[];
  /** 2. La stratégie, étape par étape. */
  strategy: { title: string; body: string }[];
  /** 3. Les chiffres, avec leur période de mesure. */
  numbers: { value: string; label: string; detail?: string }[];
  /** 4. La citation du client (avec son accord). */
  quote?: { text: string; author: string; role: string };
};

export const caseStudies: CaseStudy[] = [
  {
    // MODÈLE — non publié. À dupliquer et à remplir avec un vrai cas.
    slug: "modele-cas-client",
    published: false,
    client: "Nom du client ou secteur anonymisé",
    sector: "Secteur",
    city: "Casablanca",
    date: "2026-11-08",
    title: "Comment [client] a [résultat] en [durée]",
    metaTitle: "Cas client : [secteur] à [ville] | WePushX",
    description: "Le problème, la stratégie et les chiffres réels : comment [client] a obtenu [résultat] avec WePushX.",
    services: ["meta"],
    problem: ["Situation de départ, chiffres à l'appui."],
    strategy: [{ title: "Étape", body: "Ce qui a été fait, et pourquoi." }],
    numbers: [{ value: "+0 %", label: "Indicateur", detail: "Période de mesure" }],
    quote: { text: "Citation du client.", author: "Prénom N.", role: "Fonction · Entreprise" },
  },
];

export const publishedCases = caseStudies.filter((c) => c.published);

export const caseBySlug = (slug: string) => publishedCases.find((c) => c.slug === slug);

export const casesForService = (serviceId: string) => publishedCases.filter((c) => c.services.includes(serviceId));
