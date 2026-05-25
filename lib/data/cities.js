// ── City satellite pages data ────────────────────────────────────────────────
// Each city object drives a full satellite page via CityPageTemplate.jsx
// To add a new city: copy a city block, fill in the data, create the page file.

const BASE = 'https://www.wepushx.com'

// ── Shared services (customised per city by injecting city.name) ─────────────
export function getCityServices(cityName) {
  return [
    {
      id: 'meta-ads',
      icon: '📱',
      name: 'Meta Ads & Facebook Ads',
      tagline: `Publicité Facebook & Instagram à ${cityName}`,
      description: `Gestion complète de vos campagnes Meta à ${cityName} : création de créatifs, ciblage d'audience locale, A/B testing, optimisation ROAS et reporting mensuel. Nous connaissons les habitudes de consommation digitale des Casablancais et adaptons chaque annonce au marché local.`,
      price: 'À partir de 1 500 MAD/mois',
      anchor: 'meta-ads',
    },
    {
      id: 'google-ads',
      icon: '🔍',
      name: 'Google Ads & SEA',
      tagline: `Référencement payant à ${cityName}`,
      description: `Capturez les prospects qui cherchent vos services sur Google à ${cityName}. Campagnes Search, Display et YouTube optimisées pour le marché local : mots-clés géolocalisés, extensions d'adresse, ciblage par quartier.`,
      price: 'À partir de 1 500 MAD/mois',
      anchor: 'google-ads',
    },
    {
      id: 'seo',
      icon: '📈',
      name: 'SEO & Référencement Local',
      tagline: `Première page Google à ${cityName}`,
      description: `Dominez les recherches locales à ${cityName} : "restaurant ${cityName}", "dentiste ${cityName}", "plombier ${cityName}"... Audit technique, optimisation on-page, Google Business Profile, link building local et création de contenu ciblé ${cityName}.`,
      price: 'À partir de 2 000 MAD/mois',
      anchor: 'seo',
    },
    {
      id: 'sites-web',
      icon: '💻',
      name: 'Création de Sites Web',
      tagline: `Sites haute performance pour les entreprises de ${cityName}`,
      description: `Développement de sites vitrines, landing pages et e-commerce avec Next.js, optimisés pour les entreprises de ${cityName}. Mobile-first, score Lighthouse > 90, SEO intégré. Livraison en 5 à 10 jours ouvrés.`,
      price: 'À partir de 2 000 MAD',
      anchor: 'sites-web',
    },
    {
      id: 'crm',
      icon: '⚙️',
      name: 'CRM & Marketing Automation',
      tagline: `Automatisez vos leads à ${cityName}`,
      description: `Ne perdez plus un seul lead. WePushX configure votre CRM et vos séquences WhatsApp, email et SMS pour répondre en moins de 5 secondes à chaque prospect de ${cityName} — 24h/24, 7j/7.`,
      price: 'Setup à partir de 4 000 MAD',
      anchor: 'crm',
    },
    {
      id: 'ugc-ia',
      icon: '🎬',
      name: 'UGC IA — Vidéos Publicitaires',
      tagline: `Vidéos publicitaires IA pour le marché de ${cityName}`,
      description: `Production de vidéos UGC synthétiques par IA, adaptées aux codes culturels de ${cityName} et du Maroc. Scripts en français et darija, avatars IA réalistes, formats Stories/Reels/Feed. +35% de clics vs visuels statiques.`,
      price: '2 500 MAD / pack 5 vidéos',
      anchor: 'ugc-ia',
    },
  ]
}

// ── City definitions ─────────────────────────────────────────────────────────

export const CITIES = {

  casablanca: {
    slug: 'casablanca',
    name: 'Casablanca',
    nameArabic: 'الدار البيضاء',
    region: 'Grand Casablanca-Settat',
    country: 'Maroc',
    url: `${BASE}/agence-marketing-digital-casablanca`,
    path: '/agence-marketing-digital-casablanca',

    seo: {
      title: 'Agence Marketing Digital Casablanca | Meta Ads, Google Ads, SEO — WePushX',
      description: 'WePushX, agence marketing digital à Casablanca : Meta Ads, Google Ads, SEO, création de sites web, UGC IA et CRM automation pour les PME casablancaises. Résultats garantis en 60 jours.',
      h1: 'Agence Marketing Digital à Casablanca',
      h2Sub: 'Transformez votre présence digitale en machine à clients — Meta Ads, Google Ads, SEO, Sites Web & CRM pour les entreprises casablancaises.',
    },

    intro: `Casablanca est la capitale économique du Maroc et le premier bassin de consommateurs du pays. Avec plus de 4,3 millions d'habitants et une concentration unique d'entreprises, de multinationales et de PME dynamiques, la métropole casablancaise est aussi la plus compétitive sur le plan digital. Dans cet environnement, une présence digitale solide n'est plus un avantage : c'est une nécessité.
WePushX accompagne les entreprises de Casablanca depuis 2023 avec des stratégies sur mesure : publicité Meta & Google, référencement naturel, sites web haute performance, automatisation CRM et vidéos UGC par IA.`,

    stats: [
      { value: '4,3M', label: "d'habitants", icon: '👥' },
      { value: '300K+', label: 'PME actives', icon: '🏢' },
      { value: '68%', label: 'taux internet', icon: '📶' },
      { value: '#1', label: 'économie du Maroc', icon: '🏆' },
    ],

    context: {
      title: `Casablanca en chiffres : pourquoi le digital est incontournable`,
      paragraphs: [
        `Casablanca concentre plus de 50% du tissu économique marocain. La ville abrite le Casablanca Finance City (CFC), pôle financier de référence en Afrique, ainsi que des centaines de multinationales et des milliers de PME locales dans tous les secteurs.`,
        `Avec un taux de pénétration internet de 68% et 85% d'utilisateurs mobiles, les consommateurs casablancais recherchent, comparent et achètent en ligne. Une PME sans stratégie digitale à Casablanca laisse ses prospects à ses concurrents.`,
        `Le marché digital casablancais est exigeant : les consommateurs sont habitués aux standards internationaux. Cela signifie que la qualité des créatifs publicitaires, la vitesse des sites et la réactivité du service client sont des facteurs déterminants de conversion.`,
      ],
    },

    neighborhoods: [
      'Maarif', 'Gauthier', 'Anfa', 'Ain Diab', 'CFC', 'Derb Sultan',
      'Hay Hassane', 'Sidi Maârouf', 'Ain Sebaâ', 'Bernoussi',
      'Bd Zerktouni', 'Racine', 'California', 'Oulfa', 'Lahraouiyine',
    ],

    sectors: [
      { name: 'Immobilier & Promotion', icon: '🏗️' },
      { name: 'Finance & Assurance', icon: '💰' },
      { name: 'Cliniques & Santé', icon: '🏥' },
      { name: 'Restauration & Hôtellerie', icon: '🍽️' },
      { name: 'E-commerce & Retail', icon: '🛍️' },
      { name: 'Formation professionnelle', icon: '🎓' },
      { name: 'Rénovation & BTP', icon: '🔧' },
      { name: 'Automobile', icon: '🚗' },
    ],

    results: [
      {
        sector: 'Restaurant — Casablanca',
        challenge: 'Faible visibilité locale, remplissage insuffisant',
        solution: 'SEO local Google Business Profile + campagne Meta Ads',
        metrics: [
          { value: '+340%', label: 'trafic qualifié' },
          { value: '+45', label: 'réservations/semaine' },
          { value: '4 mois', label: 'pour atteindre les résultats' },
        ],
      },
      {
        sector: 'Clinique dentaire — Casablanca',
        challenge: 'Zéro présence digitale, agenda sous-rempli',
        solution: 'Landing page Next.js + Meta Ads + CRM WhatsApp automatisé',
        metrics: [
          { value: '89', label: 'leads qualifiés/mois' },
          { value: '62%', label: 'taux de prise de RDV' },
          { value: '3 mois', label: 'pour atteindre les résultats' },
        ],
      },
      {
        sector: 'E-commerce mode — Casablanca',
        challenge: 'CPL trop élevé (> 85 MAD), ROAS insuffisant',
        solution: 'Pack UGC IA 10 vidéos + restructuration Meta Ads',
        metrics: [
          { value: '-42%', label: 'coût par lead' },
          { value: '3,8x', label: 'ROAS moyen' },
          { value: '60 jours', label: 'pour atteindre les résultats' },
        ],
      },
    ],

    process: [
      {
        step: '01',
        title: 'Audit gratuit Casablanca',
        desc: 'Analyse de votre présence digitale actuelle, de vos concurrents à Casablanca et de votre marché local. 30 min, sans engagement.',
      },
      {
        step: '02',
        title: 'Stratégie sur mesure',
        desc: 'Plan d\'action personnalisé pour le marché casablancais : canaux prioritaires, budget, objectifs chiffrés et calendrier.',
      },
      {
        step: '03',
        title: 'Setup & lancement',
        desc: 'Configuration technique complète en 7 à 14 jours : campagnes, site, CRM, tracking. Lancement rapide pour des résultats dès le premier mois.',
      },
      {
        step: '04',
        title: 'Optimisation & reporting',
        desc: 'Gestion quotidienne, dashboard temps réel, rapport mensuel. Vous voyez exactement où va chaque dirham investi.',
      },
    ],

    faq: [
      {
        q: 'WePushX est-il basé à Casablanca ?',
        a: 'Oui, WePushX est une agence de marketing digital basée à Casablanca. Nous connaissons parfaitement le tissu économique local, les comportements des consommateurs casablancais et les spécificités concurrentielles de chaque quartier et secteur.',
      },
      {
        q: 'Quels secteurs d\'activité accompagnez-vous à Casablanca ?',
        a: 'WePushX accompagne les PME casablancaises dans de nombreux secteurs : immobilier, cliniques et santé, restaurants, hôtels, e-commerce, formation, rénovation, automobile, assurance et services financiers. Chaque stratégie est adaptée aux spécificités du secteur et du marché casablancais.',
      },
      {
        q: 'Combien coûte une agence marketing digital à Casablanca ?',
        a: 'Chez WePushX à Casablanca, les forfaits mensuels commencent à 3 500 MAD/mois (Starter) pour un canal publicitaire, 7 000 MAD/mois (Growth) pour deux canaux avec SEO, et 15 000 MAD/mois (Scale) pour une stratégie multi-canal complète. Des projets ponctuels (site web, setup CRM) sont disponibles dès 2 000 MAD.',
      },
      {
        q: 'Pouvez-vous gérer des campagnes Meta Ads ciblant uniquement Casablanca ?',
        a: 'Absolument. Meta Ads permet un ciblage géographique très précis : ville de Casablanca, rayon autour d\'un point, ou même des quartiers spécifiques comme Maarif, Gauthier, Anfa ou Sidi Maârouf. WePushX exploite ce ciblage pour minimiser les dépenses inutiles et maximiser la pertinence de vos annonces auprès des Casablancais.',
      },
      {
        q: 'En combien de temps peut-on avoir un site web à Casablanca ?',
        a: 'WePushX livre une landing page haute conversion en 5 à 10 jours ouvrés, et un site vitrine complet en 2 à 4 semaines. Pour un e-commerce, comptez 4 à 8 semaines selon le nombre de produits. Tous les sites sont développés avec Next.js, optimisés pour les Core Web Vitals et le SEO local à Casablanca.',
      },
      {
        q: 'Comment le SEO local fonctionne-t-il à Casablanca ?',
        a: 'Le SEO local à Casablanca consiste à optimiser votre présence pour apparaître quand quelqu\'un cherche votre service suivi de "Casablanca" ou "Casablanca + quartier". WePushX optimise votre Google Business Profile, crée du contenu ciblé Casablanca, obtient des citations locales et gère vos avis Google — pour que vous soyez en première position quand un Casablancais cherche ce que vous proposez.',
      },
      {
        q: 'L\'automatisation WhatsApp fonctionne-t-elle bien à Casablanca ?',
        a: 'Très bien — Casablanca est l\'une des villes marocaines où WhatsApp est le plus utilisé pour les interactions business. WePushX configure des séquences automatisées qui répondent en moins de 5 secondes à chaque prospect, rappellent les rendez-vous et relancent les leads inactifs via WhatsApp Business API.',
      },
      {
        q: 'WePushX garantit-il des résultats pour les entreprises de Casablanca ?',
        a: 'Oui. WePushX garantit contractuellement des résultats en 60 jours pour les forfaits Growth et Scale. Si aucun lead qualifié n\'est généré dans ce délai, vous êtes remboursé intégralement des frais de gestion. Cette garantie s\'applique aux clients respectant les recommandations stratégiques et les budgets recommandés.',
      },
    ],

    jsonLd: {
      breadcrumb: [
        { position: 1, name: 'Accueil', item: BASE },
        { position: 2, name: 'Agence Marketing Digital Casablanca', item: `${BASE}/agence-marketing-digital-casablanca` },
      ],
      localBusiness: {
        name: 'WePushX — Agence Marketing Digital Casablanca',
        description: 'Agence de marketing digital à Casablanca spécialisée en Meta Ads, Google Ads, SEO, création de sites web, UGC IA et CRM automation pour les PME casablancaises.',
        url: `${BASE}/agence-marketing-digital-casablanca`,
        areaServed: 'Casablanca',
        addressLocality: 'Casablanca',
        addressRegion: 'Grand Casablanca-Settat',
        addressCountry: 'MA',
      },
    },
  },

  // ── Template for next cities (copy, fill in data) ─────────────────────────
  // rabat: {
  //   slug: 'rabat',
  //   name: 'Rabat',
  //   ...
  // },
  // marrakech: {
  //   slug: 'marrakech',
  //   name: 'Marrakech',
  //   ...
  // },
}
