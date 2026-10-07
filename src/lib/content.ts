import type { Offer, OfferKind } from "./offer";

export const site = {
  name: "WePushX",
  email: "contact@wepushx.com",
  hours: "Lun - Sam, 9h - 18h",
  office: "Casablanca, Maroc",
  legalAddress: "30 N Gould St Ste N, Sheridan, WY 82801, USA",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "",
};

export type NavItem = { href: string; label: string; megaKind?: OfferKind };

/**
 * Les deux entrées à méga-menu pointent vers le catalogue fusionné : un clic
 * sur le parent amène sur la famille, un clic sur un item amène directement
 * sur la section de l'offre. Les pages dédiées restent accessibles depuis
 * chaque section et depuis /services et /plateforme.
 */
export const nav: NavItem[] = [
  { href: "/offres#services", label: "Services", megaKind: "service" },
  { href: "/offres#plateforme", label: "Plateforme", megaKind: "platform" },
  { href: "/#process", label: "Méthode" },
  // { href: "/presentation", label: "Présentation" },
  { href: "/tarifs", label: "Tarifs" },
  { href: "/contact", label: "Contact" },
];

export const heroStats = [
  { value: 50, suffix: "+", label: "PME accompagnées" },
  { value: 100, suffix: "%", label: "avis positifs" },
  { value: 60, suffix: "j", label: "garantie résultats" },
  { value: 24, suffix: "h", label: "délai de réponse" },
];

export const marqueeSectors = [
  "Restaurants",
  "Cliniques",
  "E-commerce",
  "Concessions auto",
  "Traitement d'eau",
  "Mode",
  "Rénovation",
  "Immobilier",
];

export const marqueePlatforms = [
  "Meta Ads",
  "Google Ads",
  "TikTok Ads",
  "Performance Max",
  "WhatsApp Business",
  "Next.js",
  "Shopify",
  "GA4",
];

export const manifesto =
  "La plupart des PME marocaines investissent dans le digital sans système. Des dirhams partent en publicité, des visiteurs repartent sans agir, des leads chauds refroidissent faute de relance. Nous construisons la machine complète : trafic, conversion, suivi. Et nous mesurons chaque dirham.";

export const problems = [
  {
    title: "Des pubs sans résultats",
    body: "Vous payez Meta ou Google chaque mois, mais aucun lead qualifié n'arrive à la fin du mois.",
    fix: "Tracking complet + ciblage Maroc + tests créatifs continus.",
  },
  {
    title: "Un site qui ne convertit pas",
    body: "Les visiteurs arrivent puis repartent. Votre site est une vitrine, pas une machine à vendre.",
    fix: "Landing pages rapides, formulaires courts, WhatsApp en un clic.",
  },
  {
    title: "Des relances à la main",
    body: "Chaque prospect est relancé manuellement. Les leads chauds refroidissent pendant la nuit.",
    fix: "CRM + chatbot IA sur WhatsApp, relances automatiques 24h/24.",
  },
  {
    title: "Invisible sur Google",
    body: "Vos concurrents sortent en premier. Vous perdez des clients qui vous cherchaient.",
    fix: "SEO local Casablanca, Rabat, Marrakech + fiche Google optimisée.",
  },
];

export type Service = Offer;

/** Les services réalisés par l'agence. La plateforme vit dans `platform.ts`. */
export const services: Offer[] = [
  {
    id: "meta",
    slug: "meta-ads",
    kind: "service",
    name: "Meta Ads",
    kicker: "Publicité sociale",
    body: "Campagnes Facebook et Instagram hyper-ciblées pour le marché marocain. Audiences précises, créatifs qui performent, chaque dirham tracé jusqu'au lead.",
    bullets: [
      "Stratégie créative + A/B testing continu",
      "Ciblage géographique Maroc",
      "Retargeting multi-étapes",
      "Pixel + API de conversions",
      "Rapports ROAS détaillés",
    ],
    tags: ["Facebook", "Instagram", "Retargeting", "ROAS"],
    price: "Inclus dès Starter",
    demo: "meta",
    seo: {
      title: "Agence Meta Ads au Maroc : Facebook et Instagram qui rapportent",
      description:
        "Campagnes Facebook et Instagram ciblées Maroc, créatifs testés en continu, Pixel et API de conversions. Chaque dirham tracé jusqu'au lead.",
    },
    hero: {
      lines: ["Des pubs", "qui ramènent", "des clients."],
      sub: "Pas des likes. Des leads qualifiés, tracés depuis le premier clic jusqu'à la vente signée dans votre CRM.",
    },
    proof: [
      { value: 8.4, decimals: 1, suffix: "%", label: "de taux de clic", detail: "Contre 1,2 % de moyenne sectorielle" },
      { value: 37, prefix: "-", suffix: "%", label: "de coût par acquisition", detail: "Après trois cycles de test créatif" },
      { value: 4.2, decimals: 1, suffix: "x", label: "de ROAS moyen", detail: "Sur nos comptes e-commerce" },
    ],
    process: [
      { title: "Tracking d'abord", body: "Pixel, API de conversions, événements personnalisés. Sans données propres, tout le reste est de l'intuition." },
      { title: "Audiences marocaines", body: "Géociblage réel par ville et quartier, exclusions, audiences similaires construites sur vos clients." },
      { title: "Tests créatifs continus", body: "Cinq à dix créas par mois, jugées sur le coût par lead, pas sur l'esthétique." },
      { title: "Scale progressif", body: "Montée en budget par paliers, sans casser la phase d'apprentissage." },
    ],
    faq: [
      { q: "Quel budget publicitaire minimum ?", a: "Nous recommandons 3.000 DH par mois de budget média pour sortir de la phase d'apprentissage. En dessous, l'algorithme n'a pas assez de signal." },
      { q: "Qui crée les visuels ?", a: "Nous. Chaque forfait inclut 5 à 10 créas par mois, et les vidéos UGC par IA sont disponibles en complément." },
      { q: "Le budget passe-t-il par vous ?", a: "Non, vous payez Meta directement avec votre propre carte. Nous ne prenons aucune marge sur le média." },
    ],
  },
  {
    id: "google",
    slug: "google-ads",
    kind: "service",
    name: "Google Ads",
    kicker: "Capture d'intention",
    body: "Soyez là au moment exact où vos clients cherchent. Search, Performance Max, Display et YouTube gérés sur données réelles, pas sur intuition.",
    bullets: [
      "Recherche de mots-clés marocains",
      "Search, PMax, Display, YouTube",
      "Quality Score optimisé",
      "Suivi des conversions précis",
      "Négatifs et enchères pilotés",
    ],
    tags: ["Search", "PMax", "YouTube", "Display"],
    price: "Inclus dès Growth",
    demo: "google",
    seo: {
      title: "Agence Google Ads au Maroc : Search, PMax et YouTube pilotés",
      description:
        "Campagnes Google Ads construites sur les mots-clés réellement tapés au Maroc. Quality Score optimisé, négatifs pilotés, conversions mesurées.",
    },
    hero: {
      lines: ["Là où vos clients", "cherchent déjà."],
      sub: "Quelqu'un tape « plombier urgence casablanca » à 22h. Soit votre annonce est là, soit c'est celle du concurrent.",
    },
    proof: [
      { value: 9, suffix: "/10", label: "de Quality Score visé", detail: "Un bon score fait baisser le coût du clic" },
      { value: 48, prefix: "-", suffix: "%", label: "de dépense gaspillée", detail: "Après nettoyage des mots-clés négatifs" },
      { value: 14, label: "jours avant les premiers leads", detail: "Le levier le plus rapide du catalogue" },
    ],
    process: [
      { title: "Mots-clés réels", body: "Ce que les Marocains tapent vraiment, en français, en arabe et en darija translittérée." },
      { title: "Structure propre", body: "Un groupe d'annonces par intention. C'est ce qui fait monter le Quality Score." },
      { title: "Négatifs agressifs", body: "La moitié du travail : empêcher les clics qui ne convertiront jamais." },
      { title: "Enchères sur conversion", body: "Une fois assez de données, on passe l'algorithme sur l'objectif business." },
    ],
    faq: [
      { q: "Search ou Performance Max ?", a: "Search d'abord, pour comprendre quelles requêtes convertissent. PMax ensuite, une fois qu'il y a des données à lui donner." },
      { q: "En combien de temps des résultats ?", a: "Les premiers leads arrivent généralement en 7 à 14 jours. Google Ads capte une intention déjà existante, c'est le plus rapide." },
      { q: "Et si mon secteur est très concurrentiel ?", a: "On attaque par les requêtes longues et locales, moins chères, avant de monter sur les têtes de mots-clés." },
    ],
  },
  {
    id: "web",
    slug: "sites-web-et-landing-pages",
    kind: "service",
    name: "Sites web & landing pages",
    kicker: "Vitrines qui convertissent",
    body: "Sites vitrines, e-commerce et landing pages livrés en 7 à 14 jours. Mobile-first, rapides, pensés pour transformer un visiteur en client.",
    bullets: [
      "Design premium sur mesure",
      "Next.js, WordPress ou Shopify",
      "Core Web Vitals au vert",
      "Formulaires + tracking intégrés",
      "Hébergement et maintenance",
    ],
    tags: ["Next.js", "Shopify", "WordPress", "Landing pages"],
    price: "À partir de 3.500 DH",
    demo: "web",
    seo: {
      title: "Création de site web et landing page au Maroc en 7 à 14 jours",
      description:
        "Sites vitrines, e-commerce et landing pages rapides et mobile-first, avec formulaires et tracking branchés au CRM.",
    },
    hero: {
      lines: ["Un site", "qui vend,", "pas qui décore."],
      sub: "Livré en 7 à 14 jours, vert sur Core Web Vitals, et chaque formulaire tombe directement dans votre CRM.",
    },
    proof: [
      { value: 98, label: "de score PageSpeed", detail: "Mesuré sur mobile, pas sur desktop" },
      { value: 14, label: "jours de délai maximum", detail: "Pour un site vitrine complet" },
      { value: 2.4, decimals: 1, suffix: "x", label: "de taux de conversion", detail: "Contre le site remplacé" },
    ],
    process: [
      { title: "Cadrage", body: "Qui vient sur le site, ce qu'ils doivent faire, et ce qui les en empêche aujourd'hui." },
      { title: "Design", body: "Maquette sur mesure, mobile d'abord. Pas de template retouché." },
      { title: "Intégration", body: "Next.js pour la performance, WordPress ou Shopify quand l'autonomie prime." },
      { title: "Branchement", body: "Formulaires vers le CRM, tracking GA4 et Pixel, scénarios de relance actifs dès le lancement." },
    ],
    faq: [
      { q: "Next.js, WordPress ou Shopify ?", a: "Next.js quand la performance et le SEO priment. WordPress quand vous voulez éditer vous-même. Shopify pour vendre en ligne rapidement." },
      { q: "Le contenu est-il inclus ?", a: "Nous écrivons les textes de conversion. Les photos produits et contenus de marque viennent de vous, ou sont produits en option." },
      { q: "Et après la livraison ?", a: "Hébergement et maintenance en option mensuelle, avec sauvegardes et mises à jour surveillées." },
    ],
  },
  {
    id: "seo",
    slug: "seo-et-geo",
    kind: "service",
    name: "SEO & GEO",
    kicker: "Visibilité durable",
    body: "Positionnement durable sur Google et dans les réponses des IA. SEO local Casablanca, Rabat, Marrakech, premiers résultats en 90 jours.",
    bullets: [
      "Audit technique complet",
      "Mots-clés marocains",
      "Contenu optimisé",
      "Google Business Profile",
      "Suivi mensuel des positions",
    ],
    tags: ["SEO local", "GEO", "Contenu", "Technique"],
    demo: "seo",
    seo: {
      title: "SEO local Maroc et GEO : être cité par Google et par les IA",
      description:
        "Référencement local Casablanca, Rabat, Marrakech et optimisation pour les réponses des IA. Premiers résultats en 90 jours.",
    },
    hero: {
      lines: ["Sortir premier.", "Sur Google", "et dans l'IA."],
      sub: "Vos clients ne tapent plus seulement dans Google : ils demandent à une IA. Il faut être cité aux deux endroits.",
    },
    proof: [
      { value: 90, label: "jours pour des positions solides", detail: "Sur des requêtes locales travaillées" },
      { value: 340, prefix: "+", suffix: "%", label: "de trafic qualifié", detail: "Cas restaurant, SEO local et Google Ads" },
      { value: 3, label: "villes couvertes en local", detail: "Casablanca, Rabat, Marrakech" },
    ],
    process: [
      { title: "Audit technique", body: "Indexation, vitesse, structure, données structurées. Ce qui bloque avant ce qui manque." },
      { title: "Intention et mots-clés", body: "Les requêtes qui amènent des acheteurs, pas celles qui font du volume." },
      { title: "Contenu et citations", body: "Des pages qu'une IA peut citer : réponses claires, faits, sources, structure nette." },
      { title: "Local", body: "Fiche Google optimisée, avis collectés, cohérence des coordonnées partout." },
    ],
    faq: [
      { q: "C'est quoi le GEO exactement ?", a: "L'optimisation pour les moteurs génératifs. Quand quelqu'un demande à une IA « meilleure clinique esthétique à Casablanca », l'objectif est d'être la source citée." },
      { q: "Pourquoi 90 jours ?", a: "Google a besoin de temps pour explorer, indexer et faire confiance. Quiconque promet la première place en trois semaines vous ment." },
      { q: "Faut-il un blog ?", a: "Pour le SEO de fond et le GEO, oui. C'est ce qui donne à Google et aux IA quelque chose à citer." },
    ],
  },
  {
    id: "ugc",
    slug: "ugc-par-ia",
    kind: "service",
    name: "UGC par IA",
    kicker: "Contenu vidéo scalable",
    body: "20 vidéos UGC par mois produites avec l'IA. Scripts écrits pour vendre, avatars réalistes, voix-off en français et en darija. 10x moins cher qu'un tournage.",
    bullets: [
      "Scripts de vente",
      "Avatars IA personnalisés",
      "Voix-off français et darija",
      "Format Reels et Stories",
      "Droits d'utilisation illimités",
    ],
    tags: ["Vidéo IA", "Reels", "Darija", "Créatif"],
    price: "À partir de 2.500 DH",
    demo: "ugc",
    seo: {
      title: "Vidéos UGC par IA en français et darija : 20 par mois",
      description:
        "Scripts de vente, avatars IA et voix-off en français et darija. Format Reels et Stories, droits illimités, dix fois moins cher qu'un tournage.",
    },
    hero: {
      lines: ["Vingt vidéos", "par mois.", "Sans tournage."],
      sub: "L'algorithme réclame du volume créatif. Un tournage vous donne trois vidéos par trimestre. L'IA vous en donne vingt par mois.",
    },
    proof: [
      { value: 20, label: "vidéos par mois", detail: "Format Reels, Stories et TikTok" },
      { value: 10, suffix: "x", label: "moins cher qu'un tournage", detail: "À volume équivalent" },
      { value: 42, prefix: "-", suffix: "%", label: "de coût d'acquisition", detail: "Cas e-commerce, UGC IA et landing Meta" },
    ],
    process: [
      { title: "Angles de vente", body: "Un angle par objection client. C'est le script qui vend, pas l'avatar." },
      { title: "Avatars et voix", body: "Visages crédibles pour le marché marocain, voix-off en français ou en darija." },
      { title: "Production en lot", body: "Vingt vidéos produites d'un coup, prêtes à être testées en publicité." },
      { title: "Tri par performance", body: "Les angles qui convertissent sont déclinés, les autres abandonnés." },
    ],
    faq: [
      { q: "Les vidéos ont-elles l'air fausses ?", a: "C'est la vraie question. Nous sélectionnons les avatars les plus crédibles et travaillons le script pour qu'il sonne parlé, pas écrit. Le rendu convient parfaitement à de la publicité ; pour un témoignage client authentique, on filme un vrai client." },
      { q: "Le darija fonctionne-t-il vraiment ?", a: "Oui, et c'est souvent ce qui fait la différence de performance sur le marché local." },
      { q: "À qui appartiennent les vidéos ?", a: "À vous, en droits illimités. Vous pouvez les réutiliser partout, sans limite de durée." },
    ],
  },
  {
    id: "social",
    slug: "gestion-reseaux-sociaux",
    kind: "service",
    name: "Social Media Management",
    kicker: "Présence pilotée",
    body: "Votre présence sociale prise en charge de bout en bout : ligne éditoriale, production, publication sur huit réseaux et réponse aux messages. Vous validez, nous exécutons.",
    bullets: [
      "Ligne éditoriale et calendrier mensuel",
      "Production visuelle et rédaction",
      "Publication sur 8 réseaux",
      "Modération et réponse aux messages",
      "Rapport mensuel de performance",
    ],
    tags: ["Instagram", "TikTok", "LinkedIn", "Community"],
    price: "À partir de 2.900 DH/mois",
    demo: "social",
    seo: {
      title: "Gestion des réseaux sociaux au Maroc : contenu et community management",
      description:
        "Ligne éditoriale, production, publication sur huit réseaux et réponse aux messages. Une présence sociale tenue, pas improvisée.",
    },
    hero: {
      lines: ["Une présence", "tenue.", "Pas improvisée."],
      sub: "Trois posts en janvier puis plus rien jusqu'en avril : c'est le schéma qui tue une page. La régularité bat la perfection.",
    },
    proof: [
      { value: 8, label: "réseaux couverts", detail: "Meta, LinkedIn, TikTok, YouTube, Pinterest, Threads, GMB" },
      { value: 16, label: "publications par mois", detail: "Calendrier validé à l'avance" },
      { value: 2, suffix: "h", label: "de délai de réponse en messages", detail: "Pendant les heures ouvrées" },
    ],
    process: [
      { title: "Ligne éditoriale", body: "Ce dont votre marque parle, sur quel ton, et ce dont elle ne parle pas." },
      { title: "Calendrier mensuel", body: "Validé à l'avance. Vous savez ce qui sort et quand." },
      { title: "Production", body: "Visuels, légendes, formats adaptés réseau par réseau." },
      { title: "Animation", body: "Réponse aux commentaires et aux messages, avec remontée des vrais prospects dans le CRM." },
    ],
    faq: [
      { q: "Qui valide les publications ?", a: "Vous. Le calendrier du mois est présenté à l'avance, vous validez ou vous corrigez avant programmation." },
      { q: "Répondez-vous aux messages privés ?", a: "Oui, pendant les heures ouvrées. Les demandes commerciales sont créées comme leads dans le CRM." },
      { q: "Faut-il aussi de la publicité ?", a: "Le social organique construit la crédibilité, la publicité apporte le volume. Les deux ensemble coûtent moins cher que chacun séparément." },
    ],
  },
];

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug);

export const steps = [
  { n: "01", title: "Audit 30 min", duration: "Jour 1", body: "Ads, site, SEO, CRM : on passe tout au crible et on vous montre exactement où part votre argent." },
  { n: "02", title: "Stratégie sur mesure", duration: "Jour 2-3", body: "Un plan avec ROI estimé, calendrier et budget transparent. Votre business, pas un template." },
  { n: "03", title: "Setup technique", duration: "Jour 4-14", body: "Tracking, campagnes, pages, CRM. Tout est installé et testé. Vous n'avez rien à faire." },
  { n: "04", title: "Exécution & optimisation", duration: "Chaque semaine", body: "Gestion quotidienne, tests continus, décisions sur données réelles. On s'améliore chaque semaine." },
  { n: "05", title: "Reporting temps réel", duration: "24h/24", body: "Un dashboard live, un rapport mensuel clair. Vous voyez chaque dirham dépensé et chaque lead généré." },
];

export const results = [
  { value: 340, prefix: "+", suffix: "%", label: "de trafic qualifié", detail: "SEO local + Google Ads, 3 mois", sector: "Restaurant" },
  { value: 89, prefix: "", suffix: "", label: "leads qualifiés / mois", detail: "Site + Meta Ads + CRM", sector: "Clinique esthétique" },
  { value: 42, prefix: "-", suffix: "%", label: "de coût d'acquisition", detail: "UGC IA + landing pages Meta", sector: "E-commerce" },
  { value: 4.2, prefix: "", suffix: "x", label: "ROAS moyen", detail: "De 1,8 à 4,2 en deux mois", sector: "Mode", decimals: 1 },
];

export type Mark = "yes" | "partial" | "no";
export const comparison: { feature: string; diy: Mark; classic: Mark; wpx: Mark }[] = [
  { feature: "Stratégie personnalisée", diy: "no", classic: "partial", wpx: "yes" },
  { feature: "Gestion Meta & Google Ads", diy: "partial", classic: "yes", wpx: "yes" },
  { feature: "Site web et landing pages", diy: "partial", classic: "partial", wpx: "yes" },
  { feature: "CRM & automation WhatsApp", diy: "no", classic: "no", wpx: "yes" },
  { feature: "Vidéos UGC par IA", diy: "no", classic: "no", wpx: "yes" },
  { feature: "SEO local Maroc", diy: "partial", classic: "partial", wpx: "yes" },
  { feature: "Dashboard temps réel", diy: "no", classic: "partial", wpx: "yes" },
  { feature: "Garantie résultats 60 jours", diy: "no", classic: "no", wpx: "yes" },
  { feature: "Account manager dédié", diy: "no", classic: "partial", wpx: "yes" },
];

export const testimonials = [
  { quote: "En 3 mois, on est passé de 12 réservations par semaine à plus de 40. Le setup Meta Ads + CRM a complètement transformé notre acquisition.", result: "+230% de réservations", name: "K. B.", role: "Gérant · Le Comptoir Marocain", sector: "Restaurant" },
  { quote: "On dépensait 8.000 DH par mois en pub sans savoir ce que ça rapportait. Aujourd'hui : 89 leads qualifiés par mois et un coût d'acquisition divisé par 3.", result: "89 leads / mois", name: "S. A.", role: "Directrice · Clinique Esthétique Lumière", sector: "Clinique" },
  { quote: "J'étais sceptique. L'audit gratuit a mis le doigt exactement sur ce qui ne marchait pas. 6 semaines après le lancement, l'investissement était rentabilisé 4 fois.", result: "ROI x4 en 6 semaines", name: "Y. F.", role: "Fondateur · Société de rénovation", sector: "Rénovation" },
  { quote: "Le chatbot IA sur WhatsApp qualifie nos leads automatiquement. On ne perd plus aucun prospect la nuit ou le week-end.", result: "Zéro lead perdu", name: "N. C.", role: "CEO · Aqua Solutions Maroc", sector: "Traitement de l'eau" },
  { quote: "On a testé 3 agences avant. La différence : ils comprennent vraiment le marché marocain et livrent ce qu'ils promettent. Premiers sur Google pour nos mots-clés.", result: "#1 Google en 90 jours", name: "O. T.", role: "Directeur marketing · Concession auto", sector: "Automobile" },
  { quote: "Les vidéos UGC IA performent mieux que nos anciens tournages, pour 10 fois moins cher. Notre ROAS est passé de 1,8 à 4,2 en deux mois.", result: "ROAS 1,8 → 4,2", name: "H. B.", role: "Gérante · Mode & Co Boutique", sector: "E-commerce mode" },
];

export const plans = [
  {
    name: "Starter",
    monthly: 3900,
    pitch: "Pour lancer votre présence publicitaire et générer vos premiers leads qualifiés.",
    features: ["5 créas ads / mois", "1 canal : Meta ou Google", "Rapport mensuel", "Support WhatsApp"],
    cta: "Démarrer",
  },
  {
    name: "Growth",
    monthly: 6900,
    popular: true,
    pitch: "Meta + Google en simultané pour scaler votre acquisition client.",
    features: ["8 créas ads / mois", "2 canaux : Meta + Google Ads", "Rapport + stratégie mensuelle", "Réunion d'ajustement mensuelle"],
    cta: "Scaler maintenant",
  },
  {
    name: "Scale",
    monthly: 14900,
    pitch: "La stratégie digitale complète pour dominer votre marché.",
    features: ["Stratégie digitale complète", "10 créas ads / mois", "Ads management multi-plateforme", "Setup + gestion CRM inclus", "Reporting bi-mensuel + dashboard", "Support WhatsApp prioritaire"],
    cta: "Dominer le marché",
  },
];

export const oneShots = [
  { name: "Landing page", price: "À partir de 2.000 DH", body: "Page de capture par campagne, formulaire et tracking inclus." },
  { name: "Site vitrine", price: "À partir de 3.500 DH", body: "3 à 4 pages, optimisé mobile et conversion." },
  { name: "Logo + charte", price: "À partir de 4.000 DH", body: "Identité visuelle complète adaptée à votre secteur." },
  { name: "Site e-commerce", price: "À partir de 10.000 DH", body: "WordPress ou Shopify prêt à vendre, catalogue et stock." },
  { name: "Pack UGC IA", price: "5 vidéos", body: "Scripts qui convertissent + 5 vidéos IA format Reels." },
  { name: "Setup CRM + Agent d’accueil OFFERT", price: "800 DH / mois", body: "Pipeline, relances automatiques, scoring des leads. Agent d'accueil IA offert." },
];

export const faqs = [
  { q: "Combien de temps pour voir les premiers résultats ?", a: "Sur Meta et Google Ads, les premiers leads arrivent généralement dans les 7 à 14 jours qui suivent le lancement. Le SEO est un levier plus long : comptez environ 90 jours pour des positions solides." },
  { q: "Quelle est votre garantie ?", a: "Si nous ne générons aucun lead qualifié en 60 jours, nous vous remboursons 100% de nos honoraires. Le contrat est transparent, sans clause abusive." },
  { q: "Travaillez-vous avec tous les secteurs ?", a: "Nous accompagnons surtout les PME : restaurants, cliniques, e-commerce, automobile, rénovation, traitement de l'eau, mode. Si l'audit montre que nous ne pouvons pas vous faire gagner d'argent, nous vous le disons." },
  { q: "Faut-il un budget publicitaire en plus ?", a: "Oui. Nos forfaits couvrent la stratégie, la production et la gestion. Le budget média est payé directement à Meta ou Google, et nous vous recommandons un montant adapté à vos objectifs pendant l'audit." },
  { q: "Quel est l'engagement minimum ?", a: "3 mois. C'est le temps nécessaire pour installer le tracking, sortir de la phase d'apprentissage des algorithmes et optimiser sur des données fiables." },
  { q: "Comment se passe l'audit de 30 minutes ?", a: "Un appel en visio ou par téléphone. Nous analysons vos publicités, votre site, votre SEO et votre suivi commercial, puis vous repartez avec un plan d'action concret. Gratuit et sans engagement." },
];

export const serviceOptions = [
  "Meta Ads",
  "Google Ads",
  "Site web / landing page",
  "SEO & GEO",
  "UGC par IA",
  "Réseaux sociaux",
  "WePushX CRM & automation",
  "Stratégie complète",
];
export const budgetOptions = [
  "Moins de 5.000 MAD / mois",
  "5.000 - 15.000 MAD / mois",
  "15.000 - 50.000 MAD / mois",
  "Plus de 50.000 MAD / mois",
  "Je ne sais pas encore",
];
