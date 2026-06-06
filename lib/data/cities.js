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
    url: `${BASE}/agence-marketing-digital/casablanca`,
    path: '/agence-marketing-digital/casablanca',

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
        { position: 2, name: 'Agence Marketing Digital Casablanca', item: `${BASE}/agence-marketing-digital/casablanca` },
      ],
      localBusiness: {
        name: 'WePushX — Agence Marketing Digital Casablanca',
        description: 'Agence de marketing digital à Casablanca spécialisée en Meta Ads, Google Ads, SEO, création de sites web, UGC IA et CRM automation pour les PME casablancaises.',
        url: `${BASE}/agence-marketing-digital/casablanca`,
        areaServed: 'Casablanca',
        addressLocality: 'Casablanca',
        addressRegion: 'Grand Casablanca-Settat',
        addressCountry: 'MA',
      },
    },
  },


  rabat: {
    slug: 'rabat',
    name: 'Rabat',
    nameArabic: 'الرباط',
    region: 'Rabat-Salé-Kénitra',
    country: 'Maroc',
    url: `${BASE}/agence-marketing-digital/rabat`,
    path: '/agence-marketing-digital/rabat',
    seo: {
      title: 'Agence Marketing Digital Rabat | Meta Ads, Google Ads, SEO — WePushX',
      description: 'WePushX, agence marketing digital à Rabat : Meta Ads, Google Ads, SEO, création de sites web et CRM automation pour les PME de la capitale. Résultats garantis en 60 jours.',
      h1: 'Agence Marketing Digital à Rabat',
      h2Sub: 'Développez votre présence digitale à Rabat — Meta Ads, Google Ads, SEO, Sites Web & CRM pour les entreprises de la capitale.',
    },
    intro: `Rabat, capitale administrative du Maroc, abrite les sièges des ministères, des ambassades et une concentration unique d'institutions publiques et privées. La ville connaît une transformation digitale accélérée, portée par une classe moyenne dynamique et une forte présence d'entreprises de services.`,
    stats: [
      { value: '1,2M', label: "habitants (métropole)", icon: '👥' },
      { value: '40%', label: 'fonctionnaires & services', icon: '🏛️' },
      { value: '72%', label: 'taux internet', icon: '📶' },
      { value: 'Capital', label: 'du Maroc', icon: '🇲🇦' },
    ],
    context: {
      title: 'Rabat : la capitale qui digitalise',
      paragraphs: [
        `Rabat est le centre du pouvoir administratif marocain. Les entreprises qui y opèrent — cabinets de conseil, avocats, cliniques, écoles privées, immobilier — ont besoin d'une présence digitale crédible et professionnelle pour capter une clientèle exigeante.`,
        `La ville de Rabat bénéficie d'un taux d'alphabétisation et d'un revenu moyen parmi les plus élevés du Maroc. Ses consommateurs recherchent activement des services en ligne et comparent avant d'acheter.`,
        `WePushX accompagne les PME de Rabat avec des stratégies adaptées : SEO local, campagnes Meta et Google ciblées sur la wilaya, et systèmes CRM pour gérer un flux de leads qualifiés.`,
      ],
    },
    neighborhoods: [
      'Agdal', 'Hassan', 'Hay Riad', 'Souissi', 'Océan',
      'Diour Jamaa', 'Akkari', 'Yacoub El Mansour', 'Salé', 'Témara',
    ],
    sectors: [
      { name: 'Cabinets & Consulting', icon: '💼' },
      { name: 'Cliniques & Santé', icon: '🏥' },
      { name: 'Immobilier', icon: '🏗️' },
      { name: 'Éducation & Formation', icon: '🎓' },
      { name: 'Restauration', icon: '🍽️' },
      { name: 'Services juridiques', icon: '⚖️' },
      { name: 'E-commerce', icon: '🛍️' },
      { name: 'Automobile', icon: '🚗' },
    ],
    results: [
      {
        sector: 'Cabinet comptable — Rabat',
        challenge: 'Pas de présence digitale, clients uniquement par bouche-à-oreille',
        solution: 'Site vitrine Next.js + SEO local + Google Ads',
        metrics: [
          { value: '+280%', label: 'trafic qualifié' },
          { value: '22', label: 'leads/mois' },
          { value: '5 mois', label: 'pour les résultats' },
        ],
      },
      {
        sector: 'École privée — Rabat',
        challenge: 'Inscriptions en baisse, concurrence accrue',
        solution: 'Meta Ads + landing page + CRM automation',
        metrics: [
          { value: '65', label: 'leads qualifiés/mois' },
          { value: '38%', label: 'taux de conversion' },
          { value: '60 jours', label: 'pour les résultats' },
        ],
      },
      {
        sector: 'Clinique esthétique — Hay Riad',
        challenge: 'Agenda sous-rempli, faible notoriété locale',
        solution: 'SEO local + Instagram Ads + chatbot IA',
        metrics: [
          { value: '74', label: 'leads/mois' },
          { value: '-35%', label: 'coût par lead' },
          { value: '3 mois', label: 'pour les résultats' },
        ],
      },
    ],
    process: [
      { step: '01', title: 'Analyse de votre marché à Rabat', desc: 'Audit de votre présence digitale, de vos concurrents à Rabat et de votre secteur. 30 min, sans engagement.' },
      { step: '02', title: 'Stratégie sur mesure', desc: 'Plan d\'action personnalisé pour le marché de Rabat : canaux prioritaires, budget et objectifs chiffrés.' },
      { step: '03', title: 'Setup & lancement', desc: 'Configuration complète en 7 à 14 jours. Lancement rapide pour des résultats dès le premier mois.' },
      { step: '04', title: 'Optimisation continue', desc: 'Gestion quotidienne, dashboard temps réel et rapport mensuel détaillé.' },
    ],
    faq: [
      { q: 'WePushX accompagne-t-il les entreprises de Rabat ?', a: 'Oui, WePushX accompagne les PME de Rabat et de toute la région Rabat-Salé-Kénitra. Toutes nos prestations sont gérées à distance avec des points réguliers en visioconférence.' },
      { q: 'Quels secteurs accompagnez-vous à Rabat ?', a: 'À Rabat, WePushX accompagne principalement les cabinets de conseil, avocats, cliniques, écoles privées, agences immobilières, restaurants et e-commerces.' },
      { q: 'Combien coûte une agence marketing digital à Rabat ?', a: 'Les forfaits WePushX démarrent à 3 500 MAD/mois. Des projets ponctuels (site web, setup CRM) sont disponibles dès 2 000 MAD.' },
      { q: 'Combien de temps pour voir des résultats SEO à Rabat ?', a: 'Les premiers résultats SEO à Rabat apparaissent en 3 à 6 mois. Pour les campagnes Meta ou Google Ads, les premiers leads arrivent sous 24 à 72h après le lancement.' },
      { q: 'Proposez-vous des services de SEO local à Rabat ?', a: 'Oui. WePushX optimise votre Google Business Profile pour Rabat, crée du contenu ciblé sur la capitale et obtient des citations locales pour améliorer votre visibilité sur les recherches géolocalisées.' },
    ],
    jsonLd: {
      breadcrumb: [
        { position: 1, name: 'Accueil', item: `${BASE}` },
        { position: 2, name: 'Agence Marketing Digital Rabat', item: `${BASE}/agence-marketing-digital/rabat` },
      ],
      localBusiness: {
        name: 'WePushX — Agence Marketing Digital Rabat',
        description: 'Agence marketing digital à Rabat spécialisée en Meta Ads, Google Ads, SEO et création de sites web.',
        url: `${BASE}/agence-marketing-digital/rabat`,
        areaServed: 'Rabat',
        addressLocality: 'Rabat',
        addressRegion: 'Rabat-Salé-Kénitra',
        addressCountry: 'MA',
      },
    },
  },

  marrakech: {
    slug: 'marrakech',
    name: 'Marrakech',
    nameArabic: 'مراكش',
    region: 'Marrakech-Safi',
    country: 'Maroc',
    url: `${BASE}/agence-marketing-digital/marrakech`,
    path: '/agence-marketing-digital/marrakech',
    seo: {
      title: 'Agence Marketing Digital Marrakech | Meta Ads, Google Ads, SEO — WePushX',
      description: 'WePushX, agence marketing digital à Marrakech : Meta Ads, Google Ads, SEO, sites web et CRM automation pour les PME marrakchies. Tourisme, hôtellerie, immobilier. Résultats garantis.',
      h1: 'Agence Marketing Digital à Marrakech',
      h2Sub: 'Attirez plus de clients à Marrakech — publicité Meta & Google, SEO, sites web haute performance et automatisation pour les entreprises de la ville ocre.',
    },
    intro: `Marrakech est la capitale touristique du Maroc et l'une des destinations les plus visitées d'Afrique. Avec un tissu économique dominé par l'hôtellerie, la restauration, l'immobilier et le commerce de luxe, la ville offre des opportunités digitales uniques pour les entreprises locales.`,
    stats: [
      { value: '1M+', label: "habitants", icon: '👥' },
      { value: '4M+', label: 'touristes/an', icon: '✈️' },
      { value: '65%', label: 'taux internet', icon: '📶' },
      { value: 'Top 3', label: 'villes du Maroc', icon: '🏆' },
    ],
    context: {
      title: 'Marrakech : le digital au service du tourisme et du commerce',
      paragraphs: [
        `L'économie de Marrakech repose largement sur le tourisme, l'hôtellerie et la restauration. Dans ce contexte, une stratégie digitale bien pensée — Google Ads pour capter les touristes, Meta Ads pour fidéliser les locaux, SEO pour être visible sur les recherches — est un levier de croissance direct.`,
        `Marrakech abrite aussi un marché immobilier dynamique, une scène de restauration florissante et un secteur de services en pleine expansion. WePushX adapte ses stratégies aux codes locaux et aux audiences de la ville ocre.`,
        `Que vous soyez hôtelier, restaurateur, promoteur immobilier ou prestataire de services, WePushX vous aide à convertir votre visibilité digitale en réservations et en chiffre d'affaires.`,
      ],
    },
    neighborhoods: [
      'Guéliz', 'Hivernage', 'Médina', 'Palmeraie', 'Semlalia',
      'M\'hamid', 'Hay Mohammadi', 'Daoudiate', 'Massira', 'Targa',
    ],
    sectors: [
      { name: 'Hôtels & Riads', icon: '🏨' },
      { name: 'Restauration & Food', icon: '🍽️' },
      { name: 'Immobilier & Villas', icon: '🏗️' },
      { name: 'Bien-être & Spas', icon: '💆' },
      { name: 'E-commerce artisanat', icon: '🛍️' },
      { name: 'Activités touristiques', icon: '🎭' },
      { name: 'Cliniques & Santé', icon: '🏥' },
      { name: 'Formation', icon: '🎓' },
    ],
    results: [
      {
        sector: 'Riad & Hôtel boutique — Médina',
        challenge: 'Dépendance totale aux OTAs (Booking, Airbnb)',
        solution: 'SEO + Google Ads + site réservation directe',
        metrics: [
          { value: '+45%', label: 'réservations directes' },
          { value: '-30%', label: 'commissions OTA' },
          { value: '4 mois', label: 'pour les résultats' },
        ],
      },
      {
        sector: 'Restaurant gastronomique — Guéliz',
        challenge: 'Faible notoriété, saisonnalité difficile',
        solution: 'Meta Ads + Instagram content + CRM fidélisation',
        metrics: [
          { value: '+200%', label: 'réservations/mois' },
          { value: '4,8★', label: 'note Google' },
          { value: '3 mois', label: 'pour les résultats' },
        ],
      },
      {
        sector: 'Promoteur immobilier — Marrakech',
        challenge: 'Leads non qualifiés, coût d\'acquisition élevé',
        solution: 'Landing page + Meta Ads + CRM scoring',
        metrics: [
          { value: '55', label: 'leads qualifiés/mois' },
          { value: '-40%', label: 'coût par lead' },
          { value: '60 jours', label: 'pour les résultats' },
        ],
      },
    ],
    process: [
      { step: '01', title: 'Audit de votre activité à Marrakech', desc: 'Analyse de votre présence digitale, de vos concurrents et de votre marché local à Marrakech.' },
      { step: '02', title: 'Stratégie adaptée à Marrakech', desc: 'Plan d\'action pensé pour les spécificités du marché marrakchi : tourisme, immobilier, restauration.' },
      { step: '03', title: 'Lancement en 7-14 jours', desc: 'Setup technique rapide et lancement des premières campagnes pour des résultats immédiats.' },
      { step: '04', title: 'Suivi & optimisation', desc: 'Monitoring quotidien, rapports mensuels et ajustements stratégiques continus.' },
    ],
    faq: [
      { q: 'WePushX travaille-t-il avec les hôtels et riads de Marrakech ?', a: 'Oui. WePushX a de l\'expérience avec les établissements hôteliers à Marrakech. Nous aidons les hôtels et riads à réduire leur dépendance aux OTAs en développant leurs réservations directes via SEO, Google Ads et un site de réservation performant.' },
      { q: 'Comment attirer plus de touristes avec le digital à Marrakech ?', a: 'Pour attirer des touristes à Marrakech, WePushX combine Google Ads (pour capter les recherches "hôtel Marrakech", "riad Marrakech"...), le SEO (pour apparaître en premier sur Google), et Meta Ads (pour cibler des audiences d\'intérêts voyages et luxe).' },
      { q: 'Proposez-vous des services pour les restaurants de Marrakech ?', a: 'Oui. Pour les restaurants de Marrakech, WePushX gère les campagnes Meta Ads pour les locaux et les touristes, optimise la fiche Google Business Profile, produit du contenu UGC IA et met en place des séquences WhatsApp de fidélisation.' },
      { q: 'Combien coûte le marketing digital pour un hôtel à Marrakech ?', a: 'Les forfaits WePushX pour les établissements hôteliers à Marrakech démarrent à 3 500 MAD/mois pour une gestion de base, jusqu\'à 15 000 MAD/mois pour une stratégie multi-canal complète (SEO + Ads + CRM + UGC IA).' },
      { q: 'Gérez-vous le marketing immobilier à Marrakech ?', a: 'Oui. WePushX accompagne les promoteurs et agences immobilières de Marrakech avec des landing pages haute conversion, des campagnes Meta Ads géolocalisées et un CRM pour qualifier et suivre les leads acheteurs et investisseurs.' },
    ],
    jsonLd: {
      breadcrumb: [
        { position: 1, name: 'Accueil', item: `${BASE}` },
        { position: 2, name: 'Agence Marketing Digital Marrakech', item: `${BASE}/agence-marketing-digital/marrakech` },
      ],
      localBusiness: {
        name: 'WePushX — Agence Marketing Digital Marrakech',
        description: 'Agence marketing digital à Marrakech spécialisée en Meta Ads, Google Ads, SEO, création de sites web et CRM pour l\'hôtellerie, la restauration et l\'immobilier.',
        url: `${BASE}/agence-marketing-digital/marrakech`,
        areaServed: 'Marrakech',
        addressLocality: 'Marrakech',
        addressRegion: 'Marrakech-Safi',
        addressCountry: 'MA',
      },
    },
  },

  agadir: {
    slug: 'agadir',
    name: 'Agadir',
    nameArabic: 'أكادير',
    region: 'Souss-Massa',
    country: 'Maroc',
    url: `${BASE}/agence-marketing-digital/agadir`,
    path: '/agence-marketing-digital/agadir',
    seo: {
      title: 'Agence Marketing Digital Agadir | Meta Ads, Google Ads, SEO — WePushX',
      description: 'WePushX, agence marketing digital à Agadir : Meta Ads, Google Ads, SEO, sites web et CRM pour les PME d\'Agadir. Tourisme, immobilier, agriculture. Résultats garantis en 60 jours.',
      h1: 'Agence Marketing Digital à Agadir',
      h2Sub: 'Boostez votre croissance digitale à Agadir — publicité Meta & Google, SEO local, sites web performants et automatisation CRM pour les entreprises soussies.',
    },
    intro: `Agadir est le principal pôle touristique balnéaire du Maroc et la capitale économique du Souss-Massa. Avec son port, ses plages, son secteur agricole d'exportation et un tourisme en plein essor, Agadir offre un tissu économique diversifié et des opportunités digitales croissantes.`,
    stats: [
      { value: '600K+', label: "habitants", icon: '👥' },
      { value: '3M+', label: 'touristes/an', icon: '🌊' },
      { value: '62%', label: 'taux internet', icon: '📶' },
      { value: '#1', label: 'station balnéaire', icon: '🏖️' },
    ],
    context: {
      title: 'Agadir : tourisme, agriculture et commerce en mutation digitale',
      paragraphs: [
        `Agadir est à la croisée du tourisme balnéaire, de l'agriculture d'exportation (tomates, agrumes) et d'un secteur de services en pleine expansion. Le digital est devenu incontournable pour capter des touristes, attirer des investisseurs et fidéliser une clientèle locale exigeante.`,
        `La ville bénéficie d'importants projets de développement urbain et d'une montée en puissance du secteur immobilier. Les PME locales qui investissent dans le digital prennent une longueur d'avance significative sur leurs concurrents.`,
        `WePushX adapte ses stratégies au marché spécifique d'Agadir : saisonnalité touristique, cibles locales et européennes, et codes culturels du Souss.`,
      ],
    },
    neighborhoods: [
      'Centre ville', 'Hay Mohammadi', 'Tilila', 'Talborjt',
      'Charaf', 'Bensergao', 'Anza', 'Founty', 'Dakhla', 'Agadir Adrar',
    ],
    sectors: [
      { name: 'Hôtels & Tourisme', icon: '🏨' },
      { name: 'Immobilier', icon: '🏗️' },
      { name: 'Restauration', icon: '🍽️' },
      { name: 'Agriculture & Export', icon: '🌿' },
      { name: 'Cliniques & Santé', icon: '🏥' },
      { name: 'Commerce & Retail', icon: '🛍️' },
      { name: 'Formation', icon: '🎓' },
      { name: 'Automobile', icon: '🚗' },
    ],
    results: [
      {
        sector: 'Hôtel balnéaire — Agadir',
        challenge: 'Forte saisonnalité, taux d\'occupation faible hors été',
        solution: 'Google Ads + Meta Ads ciblage européen + SEO',
        metrics: [
          { value: '+60%', label: 'taux d\'occupation hors saison' },
          { value: '+180%', label: 'réservations directes' },
          { value: '4 mois', label: 'pour les résultats' },
        ],
      },
      {
        sector: 'Promoteur immobilier — Agadir',
        challenge: 'Leads difficiles à qualifier, budget publicitaire gaspillé',
        solution: 'Landing page + Meta Ads + CRM scoring automatisé',
        metrics: [
          { value: '48', label: 'leads qualifiés/mois' },
          { value: '-38%', label: 'coût par lead' },
          { value: '60 jours', label: 'pour les résultats' },
        ],
      },
      {
        sector: 'Restaurant — Centre ville Agadir',
        challenge: 'Clientèle uniquement de passage, pas de fidélisation',
        solution: 'Meta Ads local + CRM WhatsApp + avis Google',
        metrics: [
          { value: '+150%', label: 'clients récurrents' },
          { value: '4,7★', label: 'note Google' },
          { value: '3 mois', label: 'pour les résultats' },
        ],
      },
    ],
    process: [
      { step: '01', title: 'Analyse du marché d\'Agadir', desc: 'Audit de votre présence digitale et de vos concurrents à Agadir, avec prise en compte de la saisonnalité locale.' },
      { step: '02', title: 'Stratégie personnalisée', desc: 'Plan adapté au marché d\'Agadir : cibles locales et touristiques, canaux prioritaires et budget optimisé.' },
      { step: '03', title: 'Lancement rapide', desc: 'Mise en place complète en 7 à 14 jours. Premiers résultats dès le premier mois.' },
      { step: '04', title: 'Optimisation mensuelle', desc: 'Suivi quotidien et rapport mensuel avec recommandations stratégiques adaptées à la saisonnalité.' },
    ],
    faq: [
      { q: 'WePushX accompagne-t-il les entreprises d\'Agadir ?', a: 'Oui, WePushX accompagne les PME d\'Agadir et de la région Souss-Massa. Toutes nos prestations sont gérées à distance avec des points réguliers en visioconférence.' },
      { q: 'Comment gérer la saisonnalité touristique avec le marketing digital à Agadir ?', a: 'WePushX adapte les budgets et stratégies selon les saisons : campagnes agressives en pré-saison pour remplir le calendrier, puis ciblage de marchés européens hors saison pour maintenir le taux d\'occupation.' },
      { q: 'Quels secteurs accompagnez-vous à Agadir ?', a: 'À Agadir, WePushX accompagne principalement les hôtels, restaurants, promoteurs immobiliers, cliniques, écoles de formation et commerces locaux.' },
      { q: 'Combien coûte une agence marketing digital à Agadir ?', a: 'Les forfaits WePushX démarrent à 3 500 MAD/mois. Des projets ponctuels sont disponibles dès 2 000 MAD pour une landing page ou un setup CRM.' },
      { q: 'Gérez-vous le ciblage des touristes européens pour Agadir ?', a: 'Oui. WePushX configure des campagnes Meta Ads et Google Ads ciblant les marchés européens (France, Espagne, Allemagne, UK) pour attirer des touristes à Agadir, avec des créatifs adaptés à chaque marché.' },
    ],
    jsonLd: {
      breadcrumb: [
        { position: 1, name: 'Accueil', item: `${BASE}` },
        { position: 2, name: 'Agence Marketing Digital Agadir', item: `${BASE}/agence-marketing-digital/agadir` },
      ],
      localBusiness: {
        name: 'WePushX — Agence Marketing Digital Agadir',
        description: 'Agence marketing digital à Agadir spécialisée en Meta Ads, Google Ads, SEO et création de sites web pour le tourisme, l\'immobilier et les PME soussies.',
        url: `${BASE}/agence-marketing-digital/agadir`,
        areaServed: 'Agadir',
        addressLocality: 'Agadir',
        addressRegion: 'Souss-Massa',
        addressCountry: 'MA',
      },
    },
  },

  tanger: {
    slug: 'tanger',
    name: 'Tanger',
    nameArabic: 'طنجة',
    region: 'Tanger-Tétouan-Al Hoceïma',
    country: 'Maroc',
    url: `${BASE}/agence-marketing-digital/tanger`,
    path: '/agence-marketing-digital/tanger',
    seo: {
      title: 'Agence Marketing Digital Tanger | Meta Ads, Google Ads, SEO — WePushX',
      description: 'WePushX, agence marketing digital à Tanger : Meta Ads, Google Ads, SEO, sites web et CRM pour les PME tangéroises. Logistique, industrie, tourisme. Résultats garantis en 60 jours.',
      h1: 'Agence Marketing Digital à Tanger',
      h2Sub: 'Développez votre activité à Tanger avec le digital — publicité Meta & Google, SEO, sites web haute performance et CRM automation pour les entreprises du détroit.',
    },
    intro: `Tanger est devenue l'une des villes les plus dynamiques du Maroc, portée par son port stratégique, ses zones franches industrielles (Renault, Delphi) et un développement urbain sans précédent. La ville attire investisseurs et entreprises internationales, créant un marché digital exigeant et en forte croissance.`,
    stats: [
      { value: '1,1M', label: "habitants", icon: '👥' },
      { value: 'Top 5', label: 'port d\'Afrique', icon: '🚢' },
      { value: '71%', label: 'taux internet', icon: '📶' },
      { value: '+25%', label: 'croissance/an', icon: '📈' },
    ],
    context: {
      title: 'Tanger : la ville du détroit en pleine transformation digitale',
      paragraphs: [
        `Tanger est aujourd\'hui l\'une des villes à la plus forte croissance économique au Maroc. Avec son port Tanger Med (premier port d\'Afrique), ses zones industrielles et son ouverture vers l\'Europe, elle attire des entreprises de tous secteurs.`,
        `Le marché digital tangérois est en pleine expansion : les entrepreneurs locaux investissent massivement dans leur présence en ligne pour capter des clients locaux, européens et internationaux.`,
        `WePushX accompagne les PME de Tanger avec des stratégies adaptées : SEO bilingue français/espagnol, campagnes Meta et Google ciblant le Maroc et l\'Europe du Sud, et systèmes CRM pour gérer un flux de leads en croissance.`,
      ],
    },
    neighborhoods: [
      'Malabata', 'Centre ville', 'Iberia', 'Bni Makada',
      'Dradeb', 'Moghogha', 'Tanger City Center', 'Marshan', 'Bir Chifa', 'Mesnana',
    ],
    sectors: [
      { name: 'Logistique & Transport', icon: '🚢' },
      { name: 'Industrie & BTP', icon: '🏭' },
      { name: 'Immobilier', icon: '🏗️' },
      { name: 'Tourisme & Hôtellerie', icon: '🏨' },
      { name: 'Commerce & Import-Export', icon: '🛍️' },
      { name: 'Cliniques & Santé', icon: '🏥' },
      { name: 'Formation', icon: '🎓' },
      { name: 'Restauration', icon: '🍽️' },
    ],
    results: [
      {
        sector: 'Agence immobilière — Tanger',
        challenge: 'Capter des acheteurs marocains et européens',
        solution: 'Meta Ads bilingue + landing page + CRM automation',
        metrics: [
          { value: '72', label: 'leads qualifiés/mois' },
          { value: '35%', label: 'provenant d\'Europe' },
          { value: '60 jours', label: 'pour les résultats' },
        ],
      },
      {
        sector: 'Centre médical — Centre ville Tanger',
        challenge: 'Faible visibilité, agenda sous-rempli',
        solution: 'SEO local + Google Ads + chatbot WhatsApp IA',
        metrics: [
          { value: '83', label: 'leads/mois' },
          { value: '-42%', label: 'coût par RDV' },
          { value: '3 mois', label: 'pour les résultats' },
        ],
      },
      {
        sector: 'E-commerce mode — Tanger',
        challenge: 'Ventes uniquement locales, croissance limitée',
        solution: 'Meta Ads national + UGC IA + CRM fidélisation',
        metrics: [
          { value: '3,6x', label: 'ROAS moyen' },
          { value: '+320%', label: 'chiffre d\'affaires' },
          { value: '4 mois', label: 'pour les résultats' },
        ],
      },
    ],
    process: [
      { step: '01', title: 'Audit de votre activité à Tanger', desc: 'Analyse complète de votre présence digitale, de vos concurrents tangérois et de votre positionnement.' },
      { step: '02', title: 'Stratégie orientée croissance', desc: 'Plan d\'action adapté au dynamisme de Tanger : cibles locales, nationales et européennes selon votre secteur.' },
      { step: '03', title: 'Setup & lancement', desc: 'Configuration technique en 7 à 14 jours. Premiers leads dès le premier mois.' },
      { step: '04', title: 'Optimisation & reporting', desc: 'Gestion active, dashboard temps réel et rapport mensuel avec recommandations stratégiques.' },
    ],
    faq: [
      { q: 'WePushX accompagne-t-il les entreprises de Tanger ?', a: 'Oui, WePushX accompagne les PME de Tanger et de la région Tanger-Tétouan-Al Hoceïma. Toutes nos prestations sont gérées à distance.' },
      { q: 'Gérez-vous le marketing digital en espagnol pour Tanger ?', a: 'Oui. Compte tenu de la proximité de Tanger avec l\'Espagne et de l\'importante communauté hispanoplane, WePushX peut créer des campagnes bilingues français/espagnol pour cibler à la fois le marché local et les clients européens.' },
      { q: 'Quels secteurs accompagnez-vous à Tanger ?', a: 'À Tanger, WePushX accompagne principalement les agences immobilières, centres médicaux, hôtels, e-commerces, entreprises de logistique et prestataires de services.' },
      { q: 'Combien coûte le marketing digital à Tanger ?', a: 'Les forfaits WePushX démarrent à 3 500 MAD/mois. Des projets ponctuels sont disponibles dès 2 000 MAD.' },
      { q: 'Comment capter des acheteurs immobiliers européens à Tanger ?', a: 'WePushX configure des campagnes Meta Ads et Google Ads ciblant les marchés européens (France, Espagne, Belgique) avec des créatifs adaptés, une landing page bilingue et un CRM pour qualifier les prospects investisseurs.' },
    ],
    jsonLd: {
      breadcrumb: [
        { position: 1, name: 'Accueil', item: `${BASE}` },
        { position: 2, name: 'Agence Marketing Digital Tanger', item: `${BASE}/agence-marketing-digital/tanger` },
      ],
      localBusiness: {
        name: 'WePushX — Agence Marketing Digital Tanger',
        description: 'Agence marketing digital à Tanger spécialisée en Meta Ads, Google Ads, SEO et création de sites web pour les PME tangéroises.',
        url: `${BASE}/agence-marketing-digital/tanger`,
        areaServed: 'Tanger',
        addressLocality: 'Tanger',
        addressRegion: 'Tanger-Tétouan-Al Hoceïma',
        addressCountry: 'MA',
      },
    },
  },

  // ── Add more cities here ─────────────────────────────────────────────────────
  // ── Template for next cities (copy, fill in data) ─────────────────────────
  // fes: {
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
