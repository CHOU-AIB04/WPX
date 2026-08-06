export const mainServices = [
  {
    id: 'meta-ads',
    icon: '🎯',
    title: 'Meta Ads & Facebook Ads',
    subtitle: 'Publicité Sociale Premium',
    desc: 'Gestion complète de vos campagnes Facebook et Instagram. Nous créons des audiences précises, des créatifs performants et optimisons chaque centime pour maximiser votre ROAS sur le marché marocain.',
    features: [
      'Audit et stratégie créative',
      'Ciblage géographique Maroc précis',
      'A/B testing continu sur créatifs',
      'Retargeting avancé multi-étapes',
      'Optimisation du pixel Meta',
      'Rapports ROAS détaillés',
    ],
    price: 'Inclus dès Growth',
    slug: 'meta-ads',
  },
  {
    id: 'google-ads',
    icon: '🔍',
    title: 'Google Ads & SEA',
    subtitle: 'Capture d\'Intention d\'Achat',
    desc: 'Apparaître devant vos prospects au moment exact où ils cherchent vos services. Search, Display, Shopping et YouTube Ads gérés par des experts certifiés Google.',
    features: [
      'Recherche de mots-clés stratégiques',
      'Campagnes Search, Display, YouTube',
      'Extensions d\'annonces optimisées',
      'Score de qualité maximisé',
      'Performance Max campaigns',
      'Suivi conversions précis',
    ],
    price: 'Inclus dès Growth',
    slug: 'google-ads',
  },
  {
    id: 'sites-web',
    icon: '🌐',
    title: 'Création de Sites Web',
    subtitle: 'Vitrine Convertissante',
    desc: 'Sites vitrines, e-commerces et landing pages professionnels livrés en 7-14 jours. Mobile-first, SEO-ready, et conçus pour convertir les visiteurs en clients.',
    features: [
      'Design premium sur mesure',
      'Next.js, WordPress ou Shopify',
      'Optimisation vitesse (Core Web Vitals)',
      'SEO on-page intégré',
      'Formulaires de capture optimisés',
      'Maintenance et hébergement inclus',
    ],
    price: 'À partir de 3 500 DH',
    slug: 'sites-web',
  },
  {
    id: 'seo',
    icon: '📈',
    title: 'SEO & Référencement Naturel',
    subtitle: 'Visibilité Durable',
    desc: 'Positionnez votre business en tête de Google pour les recherches qui comptent. SEO technique, contenu optimisé et linkbuilding adapté au marché marocain.',
    features: [
      'Audit SEO technique complet',
      'Recherche mots-clés marocains',
      'Optimisation on-page et contenu',
      'SEO local (Google My Business)',
      'Linkbuilding qualitatif',
      'Suivi positions mensuel',
    ],
    price: 'Inclus dès Growth',
    slug: 'seo',
  },
  {
    id: 'ugc-ia',
    icon: '🎬',
    title: 'UGC par Intelligence Artificielle',
    subtitle: 'Contenu Vidéo Scalable',
    desc: '20 vidéos UGC authentiques et convaincantes par mois grâce à l\'IA. Scripts optimisés pour la conversion, avatars IA réalistes, voix-off en français et arabe darija.',
    features: [
      'Scripts de vente optimisés',
      'Avatars IA personnalisés',
      'Voix-off français & arabe',
      '20 vidéos/mois format Reels',
      'Adaptation multi-format',
      'Droits d\'utilisation illimités',
    ],
    price: 'À partir de 2 500 DH',
    slug: 'ugc-ia',
  },
  {
    id: 'crm-automation',
    icon: '⚙️',
    title: 'CRM & Marketing Automation',
    subtitle: 'Zéro Lead Perdu',
    desc: 'Configuration complète de WePushX CRM : pipelines de vente, séquences email et WhatsApp, chatbot IA et intégrations. Automatisez votre suivi client de A à Z.',
    features: [
      'Setup WePushX CRM complet',
      'Pipelines et étapes de vente',
      'Automation WhatsApp Business',
      'Séquences email marketing',
      'Chatbot IA pour qualification',
      'Intégration agenda et paiements',
    ],
    price: 'À partir de 700 DH/mois',
    slug: 'crm-automation',
  },
]

export const oneShots = [
  { name: 'Site Vitrine', price: 'À partir de 3 500 DH', desc: 'Entre 3 et 4 pages professionnelles, optimisé mobile & conversion' },
  { name: 'Landing Page', price: 'À partir de 2 000 DH', desc: 'Page de capture optimisée par campagne, avec formulaire et tracking' },
  { name: 'Site E-commerce', price: 'À partir de 10 000 DH', desc: 'CMS WordPress / Shopify prêt à vendre, catalogue et gestion stock' },
  { name: 'Logo + Charte Graphique', price: 'À partir de 4 000 DH', desc: 'Identité visuelle complète, adaptée à votre marque et secteur' },
  { name: 'Pack UGC IA — 5 vidéos', price: 'À partir de 2 500 DH', desc: 'Scripts rédigés pour convertir + production 5 vidéos IA format Reels' },
  { name: 'Setup CRM + Chatbot', price: 'À partir de 700 DH/mois', desc: 'Suivi des leads, relances automatiques, scoring et pipeline de vente' },
]

export function getMainServices(locale = 'fr') {
  if (locale === 'en') return [
    {
      id: 'meta-ads', icon: '🎯',
      title: 'Meta Ads & Facebook Ads', subtitle: 'Premium Social Advertising',
      desc: 'Full management of your Facebook and Instagram campaigns. We build precise audiences, high-performing creatives, and optimize every dollar to maximize your ROAS.',
      features: ['Creative audit & strategy', 'Precise geographic targeting', 'Continuous A/B testing on creatives', 'Multi-step advanced retargeting', 'Meta pixel optimization', 'Detailed ROAS reports'],
      price: 'Included from Growth', slug: 'meta-ads',
    },
    {
      id: 'google-ads', icon: '🔍',
      title: 'Google Ads & SEA', subtitle: 'Capture Purchase Intent',
      desc: 'Appear in front of prospects at the exact moment they search for your services. Search, Display, Shopping and YouTube Ads managed by certified Google experts.',
      features: ['Strategic keyword research', 'Search, Display, YouTube campaigns', 'Optimized ad extensions', 'Maximized quality score', 'Performance Max campaigns', 'Precise conversion tracking'],
      price: 'Included from Growth', slug: 'google-ads',
    },
    {
      id: 'sites-web', icon: '🌐',
      title: 'Web Design & Development', subtitle: 'High-Converting Websites',
      desc: 'Professional websites, e-commerce stores and landing pages delivered in 7-14 days. Mobile-first, SEO-ready, and designed to convert visitors into customers.',
      features: ['Premium custom design', 'Next.js, WordPress or Shopify', 'Speed optimization (Core Web Vitals)', 'Integrated on-page SEO', 'Optimized lead capture forms', 'Maintenance & hosting included'],
      price: 'From $350', slug: 'sites-web',
    },
    {
      id: 'seo', icon: '📈',
      title: 'SEO & Organic Search', subtitle: 'Lasting Visibility',
      desc: 'Rank your business at the top of Google for searches that matter. Technical SEO, optimized content and quality link-building for your market.',
      features: ['Full technical SEO audit', 'Strategic keyword research', 'On-page & content optimization', 'Local SEO (Google My Business)', 'Quality link-building', 'Monthly position tracking'],
      price: 'Included from Growth', slug: 'seo',
    },
    {
      id: 'ugc-ia', icon: '🎬',
      title: 'AI UGC Videos', subtitle: 'Scalable Video Content',
      desc: '20 authentic and compelling UGC videos per month powered by AI. Conversion-optimized scripts, realistic AI avatars, multi-language voice-overs.',
      features: ['Conversion-optimized scripts', 'Custom AI avatars', 'Multi-language voice-overs', '20 Reels-format videos/month', 'Multi-format adaptation', 'Unlimited usage rights'],
      price: 'From $250', slug: 'ugc-ia',
    },
    {
      id: 'crm-automation', icon: '⚙️',
      title: 'CRM & Marketing Automation', subtitle: 'Zero Lost Leads',
      desc: 'Complete WePushX CRM setup: sales pipelines, email & WhatsApp sequences, AI chatbot and integrations. Automate your client follow-up from A to Z.',
      features: ['Full CRM setup', 'Sales pipelines & stages', 'WhatsApp Business automation', 'Email marketing sequences', 'AI chatbot for qualification', 'Calendar & payment integrations'],
      price: 'From $70/mo', slug: 'crm-automation',
    },
  ]
  if (locale === 'es') return [
    {
      id: 'meta-ads', icon: '🎯',
      title: 'Meta Ads & Facebook Ads', subtitle: 'Publicidad Social Premium',
      desc: 'Gestión completa de tus campañas de Facebook e Instagram. Creamos audiencias precisas, creatividades de alto rendimiento y optimizamos cada dólar para maximizar tu ROAS.',
      features: ['Auditoría y estrategia creativa', 'Segmentación geográfica precisa', 'A/B testing continuo en creatividades', 'Retargeting avanzado multi-etapa', 'Optimización del píxel Meta', 'Informes ROAS detallados'],
      price: 'Incluido desde Growth', slug: 'meta-ads',
    },
    {
      id: 'google-ads', icon: '🔍',
      title: 'Google Ads & SEA', subtitle: 'Captura de Intención de Compra',
      desc: 'Aparece ante tus prospectos en el momento exacto en que buscan tus servicios. Search, Display, Shopping y YouTube Ads gestionados por expertos certificados de Google.',
      features: ['Investigación de palabras clave estratégicas', 'Campañas Search, Display, YouTube', 'Extensiones de anuncios optimizadas', 'Puntuación de calidad maximizada', 'Campañas Performance Max', 'Seguimiento de conversiones preciso'],
      price: 'Incluido desde Growth', slug: 'google-ads',
    },
    {
      id: 'sites-web', icon: '🌐',
      title: 'Diseño Web', subtitle: 'Sitios de Alta Conversión',
      desc: 'Sitios web profesionales, tiendas e-commerce y landing pages entregados en 7-14 días. Mobile-first, listos para SEO y diseñados para convertir visitantes en clientes.',
      features: ['Diseño premium a medida', 'Next.js, WordPress o Shopify', 'Optimización de velocidad (Core Web Vitals)', 'SEO on-page integrado', 'Formularios de captura optimizados', 'Mantenimiento y hosting incluidos'],
      price: 'Desde $350', slug: 'sites-web',
    },
    {
      id: 'seo', icon: '📈',
      title: 'SEO & Posicionamiento', subtitle: 'Visibilidad Duradera',
      desc: 'Posiciona tu negocio en lo alto de Google para las búsquedas que importan. SEO técnico, contenido optimizado y link-building de calidad para tu mercado.',
      features: ['Auditoría SEO técnica completa', 'Investigación de palabras clave estratégicas', 'Optimización on-page y de contenido', 'SEO local (Google My Business)', 'Link-building de calidad', 'Seguimiento mensual de posiciones'],
      price: 'Incluido desde Growth', slug: 'seo',
    },
    {
      id: 'ugc-ia', icon: '🎬',
      title: 'Videos UGC con IA', subtitle: 'Contenido de Video Escalable',
      desc: '20 videos UGC auténticos y convincentes al mes gracias a la IA. Scripts optimizados para la conversión, avatares IA realistas, voces en off multilingüe.',
      features: ['Scripts optimizados para conversión', 'Avatares IA personalizados', 'Voces en off multilingüe', '20 videos/mes formato Reels', 'Adaptación multi-formato', 'Derechos de uso ilimitados'],
      price: 'Desde $250', slug: 'ugc-ia',
    },
    {
      id: 'crm-automation', icon: '⚙️',
      title: 'CRM & Automatización de Marketing', subtitle: 'Cero Leads Perdidos',
      desc: 'Configuración completa de WePushX CRM: pipelines de ventas, secuencias de email y WhatsApp, chatbot IA e integraciones. Automatiza tu seguimiento de clientes de la A a la Z.',
      features: ['Configuración completa de CRM', 'Pipelines y etapas de ventas', 'Automatización WhatsApp Business', 'Secuencias de email marketing', 'Chatbot IA para calificación', 'Integración de agenda y pagos'],
      price: 'Desde $70/mes', slug: 'crm-automation',
    },
  ]
  return mainServices
}

export function getOneShots(locale = 'fr') {
  if (locale === 'en') return [
    { name: 'Showcase Website', price: 'From $350', desc: '3-4 professional pages, mobile-optimized & conversion-focused' },
    { name: 'Landing Page', price: 'From $200', desc: 'Campaign-optimized capture page with form and tracking' },
    { name: 'E-commerce Website', price: 'From $1,000', desc: 'WordPress / Shopify ready to sell, catalog and inventory management' },
    { name: 'Logo + Brand Identity', price: 'From $400', desc: 'Complete visual identity tailored to your brand and industry' },
    { name: 'AI UGC Pack — 5 videos', price: 'From $250', desc: 'Sales scripts + 5 AI Reels-format video production' },
    { name: 'CRM Setup + Chatbot', price: 'From $70/mo', desc: 'Lead tracking, automatic follow-ups, scoring and sales pipeline' },
  ]
  if (locale === 'es') return [
    { name: 'Sitio Vitrina', price: 'Desde $350', desc: '3-4 páginas profesionales, optimizadas para móvil y conversión' },
    { name: 'Landing Page', price: 'Desde $200', desc: 'Página de captura optimizada por campaña, con formulario y seguimiento' },
    { name: 'Sitio E-commerce', price: 'Desde $1,000', desc: 'WordPress / Shopify listo para vender, catálogo y gestión de inventario' },
    { name: 'Logo + Identidad Visual', price: 'Desde $400', desc: 'Identidad visual completa adaptada a tu marca y sector' },
    { name: 'Pack UGC IA — 5 videos', price: 'Desde $250', desc: 'Scripts de venta + producción de 5 videos IA formato Reels' },
    { name: 'Setup CRM + Chatbot', price: 'Desde $70/mes', desc: 'Seguimiento de leads, seguimientos automáticos, scoring y pipeline de ventas' },
  ]
  return oneShots
}

export function getFaqServices(locale = 'fr') {
  if (locale === 'en') return [
    { q: 'Do you create the ad creatives?', a: 'Yes — copywriting, visual design and for the Scale Pack, AI UGC production included. You just approve.' },
    { q: 'How long to get a website live?', a: 'Landing pages: 3-5 days. Showcase sites: 7-10 days. E-commerce: 12-20 days. We respect deadlines — it\'s in the contract.' },
    { q: 'Does the CRM require a separate subscription?', a: 'CRM subscription is included in our Growth and Scale packages. For a one-shot setup, a monthly subscription is added to the configuration cost. We handle all setup — that\'s where the real value lies.' },
    { q: 'What is the minimum commitment for packages?', a: 'Our packages require a minimum 3-month commitment, then renew month to month. A 30-day notice is enough to cancel after the initial period. We prefer to keep you through results, not a contract.' },
  ]
  if (locale === 'es') return [
    { q: '¿Crean los creativos publicitarios?', a: 'Sí — redacción, diseño visual y para el Pack Scale, producción UGC IA incluida. Solo tienes que aprobar.' },
    { q: '¿Cuánto tiempo tarda un sitio web en estar en línea?', a: 'Landing pages: 3-5 días. Sitios vitrina: 7-10 días. E-commerce: 12-20 días. Respetamos los plazos — está en el contrato.' },
    { q: '¿El CRM requiere una suscripción separada?', a: 'La suscripción CRM está incluida en nuestros paquetes Growth y Scale. Para una configuración one-shot, se agrega una suscripción mensual al costo de configuración. Gestionamos toda la configuración — ahí es donde reside el verdadero valor.' },
    { q: '¿Cuál es el compromiso mínimo para los paquetes?', a: 'Nuestros paquetes requieren un compromiso mínimo de 3 meses, luego se renuevan mes a mes. Un preaviso de 30 días es suficiente para cancelar después del período inicial. Preferimos mantenerlos mediante resultados, no mediante un contrato.' },
  ]
  return faqServices
}

export const faqServices = [
  {
    q: 'Est-ce que vous créez les créatifs publicitaires ?',
    a: 'Oui — copywriting, design des visuels et pour le Pack Scale, production UGC IA inclus. Vous n\'avez qu\'à valider.',
  },
  {
    q: 'Combien de temps pour qu\'un site soit en ligne ?',
    a: 'Landing pages : 3-5 jours. Sites vitrines : 7-10 jours. E-commerces : 12-20 jours. On respecte les délais, c\'est contractuel.',
  },
  {
    q: 'Est-ce que le CRM nécessite un abonnement séparé ?',
    a: 'L\'abonnement CRM est inclus dans nos forfaits Growth et Scale. Pour un setup one-shot, un abonnement mensuel s\'ajoute au coût de configuration. Nous gérons tout le paramétrage — c\'est là que réside la vraie valeur.',
  },
  {
    q: 'Quel est l\'engagement minimum pour les forfaits ?',
    a: 'Nos forfaits requièrent un engagement minimum de 3 mois, puis se renouvellent mois par mois. Un préavis de 30 jours suffit pour résilier après la période initiale. Nous préférons vous garder par les résultats, pas par un contrat.',
  },
]
