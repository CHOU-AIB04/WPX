export const site = {
  name: "WePushX",
  email: "contact@wepushx.com",
  hours: "Lun - Sam, 9h - 18h",
  office: "Casablanca, Maroc",
  legalAddress: "30 N Gould St Ste N, Sheridan, WY 82801, USA",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "",
};

export const nav = [
  { href: "/#services", label: "Services" },
  { href: "/#process", label: "Méthode" },
  { href: "/#resultats", label: "Résultats" },
  { href: "/#tarifs", label: "Tarifs" },
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
  "La plupart des PME marocaines investissent dans le digital sans système. Des dirhams partent en publicité, des visiteurs repartent sans agir, des leads chauds refroidissent faute de relance. Nous construisons la machine complète : trafic, conversion, suivi. Et nous mesurons chaque dirham.";

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

export type Service = {
  id: string;
  name: string;
  kicker: string;
  body: string;
  bullets: string[];
  tags: string[];
  price?: string;
};

export const services: Service[] = [
  {
    id: "meta",
    name: "Meta Ads",
    kicker: "Publicité sociale",
    body: "Campagnes Facebook et Instagram hyper-ciblées pour le marché marocain. Audiences précises, créatifs qui performent, chaque dirham tracé jusqu'au lead.",
    bullets: ["Stratégie créative + A/B testing continu", "Ciblage géographique Maroc", "Retargeting multi-étapes", "Pixel + API de conversions", "Rapports ROAS détaillés"],
    tags: ["Facebook", "Instagram", "Retargeting", "ROAS"],
    price: "Inclus dès Starter",
  },
  {
    id: "google",
    name: "Google Ads",
    kicker: "Capture d'intention",
    body: "Soyez là au moment exact où vos clients cherchent. Search, Performance Max, Display et YouTube gérés sur données réelles, pas sur intuition.",
    bullets: ["Recherche de mots-clés marocains", "Search, PMax, Display, YouTube", "Quality Score optimisé", "Suivi des conversions précis", "Négatifs et enchères pilotés"],
    tags: ["Search", "PMax", "YouTube", "Display"],
    price: "Inclus dès Growth",
  },
  {
    id: "web",
    name: "Sites Web",
    kicker: "Vitrines qui convertissent",
    body: "Sites vitrines, e-commerce et landing pages livrés en 7 à 14 jours. Mobile-first, rapides, pensés pour transformer un visiteur en client.",
    bullets: ["Design premium sur mesure", "Next.js, WordPress ou Shopify", "Core Web Vitals au vert", "Formulaires + tracking intégrés", "Hébergement et maintenance"],
    tags: ["Next.js", "Shopify", "WordPress", "Landing pages"],
    price: "À partir de 3.500 DH",
  },
  {
    id: "seo",
    name: "SEO & GEO",
    kicker: "Visibilité durable",
    body: "Positionnement durable sur Google et dans les réponses des IA. SEO local Casablanca, Rabat, Marrakech, premiers résultats en 90 jours.",
    bullets: ["Audit technique complet", "Mots-clés marocains", "Contenu optimisé", "Google Business Profile", "Suivi mensuel des positions"],
    tags: ["SEO local", "GEO", "Contenu", "Technique"],
  },
  {
    id: "ugc",
    name: "UGC par IA",
    kicker: "Contenu vidéo scalable",
    body: "20 vidéos UGC par mois produites avec l'IA. Scripts écrits pour vendre, avatars réalistes, voix-off en français et en darija. 10x moins cher qu'un tournage.",
    bullets: ["Scripts de vente", "Avatars IA personnalisés", "Voix-off français et darija", "Format Reels et Stories", "Droits d'utilisation illimités"],
    tags: ["Vidéo IA", "Reels", "Darija", "Créatif"],
    price: "À partir de 2.500 DH",
  },
  {
    id: "crm",
    name: "CRM & Automation",
    kicker: "Zéro lead perdu",
    body: "WePushX CRM configuré sur mesure : pipelines, relances email et WhatsApp, chatbot IA qui qualifie vos prospects même la nuit et le week-end.",
    bullets: ["Setup CRM complet", "Pipelines de vente", "Automation WhatsApp Business", "Chatbot IA de qualification", "Agenda et paiements intégrés"],
    tags: ["CRM", "WhatsApp", "Chatbot IA", "Automation"],
    price: "À partir de 700 DH/mois",
  },
];

export const steps = [
  { n: "01", title: "Audit 30 min", duration: "Jour 1", body: "Ads, site, SEO, CRM : on passe tout au crible et on vous montre exactement où part votre argent." },
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
  { quote: "On dépensait 8.000 DH par mois en pub sans savoir ce que ça rapportait. Aujourd'hui : 89 leads qualifiés par mois et un coût d'acquisition divisé par 3.", result: "89 leads / mois", name: "S. A.", role: "Directrice · Clinique Esthétique Lumière", sector: "Clinique" },
  { quote: "J'étais sceptique. L'audit gratuit a mis le doigt exactement sur ce qui ne marchait pas. 6 semaines après le lancement, l'investissement était rentabilisé 4 fois.", result: "ROI x4 en 6 semaines", name: "Y. F.", role: "Fondateur · Société de rénovation", sector: "Rénovation" },
  { quote: "Le chatbot IA sur WhatsApp qualifie nos leads automatiquement. On ne perd plus aucun prospect la nuit ou le week-end.", result: "Zéro lead perdu", name: "N. C.", role: "CEO · Aqua Solutions Maroc", sector: "Traitement de l'eau" },
  { quote: "On a testé 3 agences avant. La différence : ils comprennent vraiment le marché marocain et livrent ce qu'ils promettent. Premiers sur Google pour nos mots-clés.", result: "#1 Google en 90 jours", name: "O. T.", role: "Directeur marketing · Concession auto", sector: "Automobile" },
  { quote: "Les vidéos UGC IA performent mieux que nos anciens tournages, pour 10 fois moins cher. Notre ROAS est passé de 1,8 à 4,2 en deux mois.", result: "ROAS 1,8 → 4,2", name: "H. B.", role: "Gérante · Mode & Co Boutique", sector: "E-commerce mode" },
];

export const plans = [
  {
    name: "Starter",
    monthly: 3900,
    pitch: "Pour lancer votre présence publicitaire et générer vos premiers leads qualifiés.",
    features: ["5 créas ads / mois", "1 canal : Meta ou Google", "Rapport mensuel", "Support WhatsApp"],
    cta: "Démarrer",
  },
  {
    name: "Growth",
    monthly: 6900,
    popular: true,
    pitch: "Meta + Google en simultané pour scaler votre acquisition client.",
    features: ["8 créas ads / mois", "2 canaux : Meta + Google Ads", "Rapport + stratégie mensuelle", "Réunion d'ajustement mensuelle"],
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
  { name: "Setup CRM + chatbot", price: "Sur devis", body: "Pipeline, relances automatiques, scoring des leads." },
];

export const faqs = [
  { q: "Combien de temps pour voir les premiers résultats ?", a: "Sur Meta et Google Ads, les premiers leads arrivent généralement dans les 7 à 14 jours qui suivent le lancement. Le SEO est un levier plus long : comptez environ 90 jours pour des positions solides." },
  { q: "Quelle est votre garantie ?", a: "Si nous ne générons aucun lead qualifié en 60 jours, nous vous remboursons 100% de nos honoraires. Le contrat est transparent, sans clause abusive." },
  { q: "Travaillez-vous avec tous les secteurs ?", a: "Nous accompagnons surtout les PME : restaurants, cliniques, e-commerce, automobile, rénovation, traitement de l'eau, mode. Si l'audit montre que nous ne pouvons pas vous faire gagner d'argent, nous vous le disons." },
  { q: "Faut-il un budget publicitaire en plus ?", a: "Oui. Nos forfaits couvrent la stratégie, la production et la gestion. Le budget média est payé directement à Meta ou Google, et nous vous recommandons un montant adapté à vos objectifs pendant l'audit." },
  { q: "Quel est l'engagement minimum ?", a: "3 mois. C'est le temps nécessaire pour installer le tracking, sortir de la phase d'apprentissage des algorithmes et optimiser sur des données fiables." },
  { q: "Comment se passe l'audit de 30 minutes ?", a: "Un appel en visio ou par téléphone. Nous analysons vos publicités, votre site, votre SEO et votre suivi commercial, puis vous repartez avec un plan d'action concret. Gratuit et sans engagement." },
];

export const serviceOptions = ["Meta Ads", "Google Ads", "Site web / landing page", "SEO & GEO", "UGC par IA", "CRM & automation", "Stratégie complète"];
export const budgetOptions = ["Moins de 5.000 MAD / mois", "5.000 - 15.000 MAD / mois", "15.000 - 50.000 MAD / mois", "Plus de 50.000 MAD / mois", "Je ne sais pas encore"];
