import { PRICES, RECOMMENDED_MEDIA_BUDGET, dh, hasDisplayUnit, priceText, type PriceId } from "./pricing";

/**
 * Blog : registre des articles.
 *
 * Le corps de chaque article est un fichier MDX (src/content/blog/<slug>.mdx).
 * Ici vivent les métadonnées, la FAQ et le maillage : la liste, le sitemap,
 * le flux RSS, llms.txt et les pages de service lisent ce fichier sans
 * compiler le MDX.
 *
 * Publier un article : écrire le .mdx, ajouter une entrée ci-dessous. Il
 * apparaît partout automatiquement (liste, sitemap, RSS, pages liées).
 *
 * Les prix ne s'écrivent jamais en dur : `<Prix id="…" />` dans le MDX,
 * `{prix:…}` dans la FAQ. Les deux lisent src/lib/pricing.ts.
 */

export type BlogCategory = { id: string; name: string };

export const blogCategories: BlogCategory[] = [
  { id: "sites-web", name: "Sites web" },
  { id: "crm", name: "CRM & automatisation" },
  { id: "seo", name: "SEO & GEO" },
  { id: "publicite", name: "Publicité en ligne" },
];

export type BlogPost = {
  slug: string;
  /** Titre éditorial, affiché en <h1>. */
  title: string;
  /** Balise <title> complète, 60 caractères max. */
  metaTitle: string;
  /** Meta description, 155 caractères max. */
  description: string;
  /** Chapeau des cartes de la liste. */
  excerpt: string;
  category: BlogCategory["id"];
  keywords: string[];
  /** AAAA-MM-JJ */
  date: string;
  updated?: string;
  /** Offres liées (ids de content.ts / platform.ts) : maillage dans les deux sens. */
  offers: string[];
  /** Pages villes liées (slugs de cities.ts). */
  cities: string[];
  /** FAQ en fin d'article. `{prix:<id>}` et `{budget}` sont remplacés au rendu. */
  faq: { q: string; a: string }[];
};

export const AUTHOR = {
  name: "Équipe WePushX",
  bio: "L'équipe WePushX accompagne les PME marocaines depuis Casablanca : publicité Meta et Google, sites web, SEO & GEO et CRM WhatsApp. Ces guides reprennent ce que nous appliquons chaque jour pour nos clients.",
};

export const blogPosts: BlogPost[] = [
  {
    slug: "prix-creation-site-web-maroc",
    title: "Création de site web au Maroc : prix et délais en 2026 (landing page, vitrine, e-commerce)",
    metaTitle: "Création site web au Maroc : prix et délais 2026 | WePushX",
    description:
      "Combien coûte un site web au Maroc en 2026 ? Landing page, site vitrine, e-commerce : prix, délais et pièges à éviter, par une agence de Casablanca.",
    excerpt:
      "Landing page, site vitrine ou e-commerce : les prix de départ, les délais réalistes, les coûts cachés et la checklist avant de signer.",
    category: "sites-web",
    keywords: ["création site web maroc", "prix site web maroc", "agence web casablanca"],
    date: "2026-11-08",
    offers: ["web"],
    cities: ["agence-web-casablanca"],
    faq: [
      {
        q: "Combien coûte un site vitrine au Maroc ?",
        a: "Chez WePushX, un site vitrine démarre {prix:siteVitrine}, livré en 7 à 14 jours avec un design sur mesure, une version mobile soignée, un formulaire et le suivi des conversions. Le prix final dépend du nombre de pages, des langues et des fonctionnalités.",
      },
      {
        q: "Combien de temps faut-il pour créer un site web ?",
        a: "Quelques jours pour une landing page, 7 à 14 jours pour un site vitrine et 2 à 4 semaines pour une boutique e-commerce, à condition que les textes et les photos soient prêts.",
      },
      {
        q: "Le nom de domaine et l'hébergement sont-ils inclus ?",
        a: "Ils se paient à part : chaque année pour le domaine, chaque mois pour l'hébergement. L'essentiel est qu'ils soient enregistrés à votre nom, pour que vous restiez propriétaire de votre site.",
      },
      {
        q: "WordPress ou Shopify : lequel choisir ?",
        a: "WordPress pour un site vitrine que vous voulez modifier vous-même, Shopify pour vendre en ligne rapidement. Le sur-mesure (Next.js) se justifie quand la vitesse et le référencement sont un enjeu commercial.",
      },
      {
        q: "Un site web suffit-il pour avoir des clients ?",
        a: "Non. Il faut aussi du trafic (SEO ou publicité), un suivi des conversions et un CRM pour traiter chaque demande. Le site transforme les visiteurs, il ne les fait pas venir tout seul.",
      },
    ],
  },
  {
    slug: "crm-maroc-guide",
    title: "CRM au Maroc : comment choisir le bon CRM pour votre PME (WhatsApp, IA, prix)",
    metaTitle: "CRM au Maroc : choisir le bon CRM pour votre PME | WePushX",
    description: `Quel CRM choisir au Maroc ? WhatsApp intégré, relances automatiques, chatbot IA en darija : critères, prix à partir de ${dh(PRICES.crmEssentiel.amount)} MAD/mois et erreurs à éviter.`,
    excerpt:
      "WhatsApp, darija, relances automatiques, prise de rendez-vous : ce qu'un CRM doit faire pour une PME marocaine, et combien il coûte vraiment.",
    category: "crm",
    keywords: ["crm maroc", "crm whatsapp", "logiciel crm maroc"],
    date: "2026-11-08",
    offers: ["automations", "conversation-ai"],
    cities: [],
    faq: [
      {
        q: "Combien coûte un CRM au Maroc ?",
        a: "Le CRM WePushX démarre {prix:crmEssentiel}, avec une mise en place {prix:crmSetup}. Les messages WhatsApp marketing se paient à l'usage, {prix:whatsappMa}, et les réponses dans la fenêtre de 24 heures restent gratuites.",
      },
      {
        q: "Un CRM peut-il envoyer des messages WhatsApp ?",
        a: "Oui, via l'API officielle de WhatsApp Business. Les messages partent du numéro de l'entreprise, plusieurs personnes peuvent répondre, et tout l'historique reste sur la fiche du contact.",
      },
      {
        q: "Le chatbot IA comprend-il la darija ?",
        a: "Oui. L'agent IA WePushX répond en français, en anglais et en darija, y compris écrite en lettres latines, et transfère la conversation à votre équipe quand la demande sort de son cadre.",
      },
      {
        q: "Combien de temps prend la mise en place d'un CRM ?",
        a: "En général une à deux semaines entre l'audit et un CRM opérationnel, selon le nombre de canaux à connecter et le volume de contacts à importer.",
      },
    ],
  },
  {
    slug: "seo-maroc-guide",
    title: "SEO au Maroc : le guide 2026 pour apparaître sur Google… et dans ChatGPT",
    metaTitle: "SEO au Maroc : le guide 2026 (Google + ChatGPT) | WePushX",
    description:
      "Référencement naturel au Maroc : comment ranker sur Google en 2026, combien de temps ça prend, et comment être cité par ChatGPT et Google AI (GEO).",
    excerpt:
      "SEO local, contenu, technique, netlinking marocain et GEO : comment une PME apparaît sur Google et dans les réponses des IA, en combien de temps.",
    category: "seo",
    keywords: ["seo maroc", "agence seo maroc", "référencement naturel maroc"],
    date: "2026-11-08",
    offers: ["seo"],
    cities: ["agence-seo-casablanca"],
    faq: [
      {
        q: "Combien de temps faut-il pour être premier sur Google au Maroc ?",
        a: "Environ 90 jours pour des positions solides sur des recherches locales bien travaillées, et souvent six mois à un an sur des recherches nationales très concurrentielles.",
      },
      {
        q: "Combien coûte le SEO au Maroc ?",
        a: "Chez WePushX, l'audit et la remise à niveau technique démarrent {prix:seoSetup}, puis le suivi mensuel {prix:seoMonthly}. Le SEO est aussi inclus dans le forfait Scale.",
      },
      {
        q: "C'est quoi le GEO ?",
        a: "Le Generative Engine Optimization : optimiser votre présence pour être cité par les IA comme ChatGPT, Gemini ou les réponses générées par Google. Il s'appuie sur un bon SEO et sur des informations claires et cohérentes partout sur le web.",
      },
      {
        q: "Faut-il écrire en arabe pour le SEO au Maroc ?",
        a: "Cela dépend de votre secteur. On regarde d'abord dans quelle langue vos clients cherchent réellement : français, arabe ou darija écrite en lettres latines.",
      },
    ],
  },
  {
    slug: "google-ads-ou-meta-ads-maroc",
    title: "Google Ads ou Meta Ads au Maroc : lequel choisir pour votre PME (budget et exemples)",
    metaTitle: "Google Ads ou Meta Ads au Maroc : lequel choisir ? | WePushX",
    description:
      "Google Ads ou Facebook/Instagram Ads au Maroc ? Différences, budget minimum en dirhams, secteurs où chacun gagne, et comment combiner les deux.",
    excerpt:
      "Intention contre découverte : quand choisir Google, quand choisir Meta, quel budget prévoir en dirhams et les erreurs qui brûlent le budget.",
    category: "publicite",
    keywords: ["agence google ads maroc", "publicité facebook maroc", "prix publicité facebook maroc"],
    date: "2026-11-08",
    offers: ["google", "meta"],
    cities: ["agence-marketing-digital-marrakech", "agence-marketing-digital-rabat", "agence-marketing-digital-tanger"],
    faq: [
      {
        q: "Quel budget minimum pour la publicité en ligne au Maroc ?",
        a: "Nous recommandons au moins {budget} par mois de budget média, payé directement à Meta ou à Google, en plus des honoraires de gestion.",
      },
      {
        q: "Google Ads ou Facebook Ads : lequel est le moins cher ?",
        a: "Le coût par contact est souvent plus bas sur Meta, mais les leads Google sont souvent plus chauds. Le bon indicateur est le coût par client signé, qui se mesure avec un CRM.",
      },
      {
        q: "En combien de temps voit-on des résultats ?",
        a: "Les premiers leads arrivent généralement 7 à 14 jours après le lancement. Les algorithmes ont besoin d'environ deux semaines pour sortir de leur phase d'apprentissage.",
      },
      {
        q: "Peut-on faire Google Ads et Meta Ads en même temps ?",
        a: "Oui, et c'est souvent le plus efficace quand le budget le permet : Meta crée la demande, Google la capte au moment de la recherche. Notre forfait Growth pilote les deux, {prix:planGrowth}.",
      },
    ],
  },
];

export const postBySlug = (slug: string) => blogPosts.find((p) => p.slug === slug);
export const categoryById = (id: string) => blogCategories.find((c) => c.id === id);
export const postsInCategory = (id: string) => blogPosts.filter((p) => p.category === id);

/** Une catégorie n'est indexée qu'à partir de 3 articles (pas de pages maigres dans Google). */
export const MIN_POSTS_TO_INDEX_CATEGORY = 3;

/** Articles liés à une offre ou à une page ville (maillage interne). */
export const postsForOffer = (offerId: string) => blogPosts.filter((p) => p.offers.includes(offerId));
export const postsForCity = (citySlug: string) => blogPosts.filter((p) => p.cities.includes(citySlug));

/** Même catégorie d'abord, puis les plus récents. */
export function relatedPosts(post: BlogPost, count = 3) {
  const others = blogPosts.filter((p) => p.slug !== post.slug);
  return [...others.filter((p) => p.category === post.category), ...others.filter((p) => p.category !== post.category)].slice(0, count);
}

/**
 * Remplace les jetons de prix d'un texte. Hors Maroc (`priced` faux), le
 * montant devient « sur devis », comme partout ailleurs sur le site.
 */
export function resolvePrices(text: string, priced = true) {
  return text
    .replace(/\{prix:(\w+)\}/g, (_, id: PriceId) =>
      priced && id in PRICES ? priceText(id, { lower: true, currency: "DH", unit: hasDisplayUnit(id) }) : "sur devis",
    )
    .replace(/\{budget\}/g, `${dh(RECOMMENDED_MEDIA_BUDGET)} DH`);
}

export const formatDate = (iso: string) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });
