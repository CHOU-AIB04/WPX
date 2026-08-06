import { Bot, ChartNoAxesCombined, Clapperboard, Gauge, Globe, Glasses, LayoutDashboard, LayoutTemplate, Repeat, Search, Settings, ShieldCheck, Target, Wrench , TrendingDown } from "lucide-react"

// ── FR stats (default) ─────────────────────────────────────────────────────────
export const stats = [
  { value: 340, suffix: '%', label: 'de trafic qualifié en plus' },
  { value: 90, suffix: '', label: 'leads/mois générés' },
  { value: 42, suffix: '%', label: 'de coût d\'acquisition réduit' },
  { value: 60, suffix: 'j', label: 'garantie résultats' },
]

const statsEN = [
  { value: 340, suffix: '%', label: 'more qualified traffic' },
  { value: 90, suffix: '', label: 'leads/month generated' },
  { value: 42, suffix: '%', label: 'acquisition cost reduced' },
  { value: 60, suffix: 'd', label: 'results guarantee' },
]

const statsES = [
  { value: 340, suffix: '%', label: 'más tráfico calificado' },
  { value: 90, suffix: '', label: 'leads/mes generados' },
  { value: 42, suffix: '%', label: 'coste de adquisición reducido' },
  { value: 60, suffix: 'd', label: 'garantía de resultados' },
]

export function getStats(locale = 'fr') {
  if (locale === 'en') return statsEN
  if (locale === 'es') return statsES
  return stats
}

export const painPoints = [
  {
    icon: <TrendingDown color="white" />,
    title: 'Publicités sans résultats',
    desc: 'Vous dépensez en Meta Ads ou Google Ads mais vous n\'avez aucun lead qualifié à la fin du mois.',
  },
  {
    icon: <LayoutTemplate color="white"/>,
    title: 'Site web qui ne convertit pas',
    desc: 'Des visiteurs arrivent sur votre site mais repartent sans agir. Votre site est une vitrine, pas une machine à vendre.',
  },
  {
    icon: <Repeat color="white" />,
    title: 'Follow-up manuel épuisant',
    desc: 'Vous relancez chaque prospect à la main. Des leads chauds se refroidissent faute d\'automatisation.',
  },
  {
    icon: <Glasses color="white"/>,
    title: 'Invisible sur Google',
    desc: 'Vos concurrents apparaissent en premier sur Google. Vous perdez des clients qualifiés chaque jour.',
  },
]

export function getPainPoints(locale = 'fr') {
  if (locale === 'en') return [
    { icon: <TrendingDown color="white" />, title: 'Ads with no results', desc: 'You spend on Meta Ads or Google Ads but end the month with zero qualified leads.' },
    { icon: <LayoutTemplate color="white"/>, title: 'Website that doesn\'t convert', desc: 'Visitors land on your site but leave without acting. Your site is a brochure, not a sales machine.' },
    { icon: <Repeat color="white" />, title: 'Exhausting manual follow-up', desc: 'You chase every prospect by hand. Hot leads go cold for lack of automation.' },
    { icon: <Glasses color="white"/>, title: 'Invisible on Google', desc: 'Your competitors show up first on Google. You lose qualified customers every single day.' },
  ]
  if (locale === 'es') return [
    { icon: <TrendingDown color="white" />, title: 'Anuncios sin resultados', desc: 'Gastas en Meta Ads o Google Ads pero terminas el mes sin leads calificados.' },
    { icon: <LayoutTemplate color="white"/>, title: 'Web que no convierte', desc: 'Los visitantes llegan a tu sitio pero se van sin actuar. Tu web es un folleto, no una máquina de ventas.' },
    { icon: <Repeat color="white" />, title: 'Seguimiento manual agotador', desc: 'Persigues a cada prospecto a mano. Los leads calientes se enfrían por falta de automatización.' },
    { icon: <Glasses color="white"/>, title: 'Invisible en Google', desc: 'Tus competidores aparecen primero en Google. Pierdes clientes calificados cada día.' },
  ]
  return painPoints
}

export const services = [
  {
    num: '01',
    title: 'Meta Ads',
    desc: 'Campagnes hyper-ciblées pour le marché marocain. A/B testing, optimisation ROAS, retargeting avancé. Chaque dirham investi est tracé.',
    tags: ['Facebook', 'Instagram', 'ROAS', 'Retargeting'],
    icon: <Target />,
  },
  {
    num: '02',
    title: 'Google Ads',
    desc: 'Capturez les prospects en intention d\'achat. Search, Display, YouTube vos clients vous trouvent au moment exact où ils cherchent.',
    tags: ['Search', 'Display', 'YouTube', 'Performance Max'],
    icon: <Search />,
  },
  {
    num: '03',
    title: 'Création de Sites Web',
    desc: 'Sites vitrines, e-commerces et landing pages livrés en 7-14 jours. Optimisés SEO, mobile-first, conçus pour convertir.',
    tags: ['Next.js', 'WordPress', 'Shopify', 'Mobile-first'],
    icon: <Globe />,
  },
  {
    num: '04',
    title: 'SEO & GEO',
    desc: 'Positionnement durable sur Google pour vos mots-clés stratégiques. SEO et GEO local Casablanca, Rabat, Marrakech. Résultats en 90 jours.',
    tags: ['SEO local','GEO', 'Contenu', 'Technique', 'Google'],
    icon: <ChartNoAxesCombined />,
  },
  {
    num: '05',
    title: 'UGC par Intelligence Artificielle',
    desc: '20 vidéos UGC authentiques par mois grâce à l\'IA. Scripts optimisés, avatars IA, voix-off français/arabe. Coût 10x inférieur au tournage classique.',
    tags: ['Vidéo IA', 'UGC', 'Créatif', 'Multi-langue'],
    icon: <Clapperboard />,
  },
  {
    num: '06',
    title: 'CRM & Marketing Automation',
    desc: 'WePushX CRM configuré sur mesure. Pipelines, workflows automatisés, chatbot IA, intégration WhatsApp. Zero lead perdu.',
    tags: ['WePushX CRM', 'WhatsApp', 'Chatbot IA', 'Automation'],
    icon: <Settings />,
  },
]

export function getServices(locale = 'fr') {
  if (locale === 'en') return [
    { num: '01', title: 'Meta Ads', desc: 'Hyper-targeted campaigns for your market. A/B testing, ROAS optimization, advanced retargeting. Every dollar tracked.', tags: ['Facebook', 'Instagram', 'ROAS', 'Retargeting'], icon: <Target /> },
    { num: '02', title: 'Google Ads', desc: 'Capture prospects at the exact moment they search. Search, Display, YouTube — your customers find you when it matters.', tags: ['Search', 'Display', 'YouTube', 'Performance Max'], icon: <Search /> },
    { num: '03', title: 'Web Design', desc: 'Business websites, e-commerce and landing pages delivered in 7-14 days. SEO-optimized, mobile-first, built to convert.', tags: ['Next.js', 'WordPress', 'Shopify', 'Mobile-first'], icon: <Globe /> },
    { num: '04', title: 'SEO & GEO', desc: 'Lasting Google rankings for your strategic keywords. Local SEO across your target cities. Results in 90 days.', tags: ['Local SEO', 'GEO', 'Content', 'Technical', 'Google'], icon: <ChartNoAxesCombined /> },
    { num: '05', title: 'AI UGC Videos', desc: '20 authentic AI-generated UGC videos per month. Conversion-optimized scripts, AI avatars, voice-over. 10x cheaper than traditional production.', tags: ['AI Video', 'UGC', 'Creative', 'Multi-format'], icon: <Clapperboard /> },
    { num: '06', title: 'CRM & Marketing Automation', desc: 'WePushX CRM configured for your business. Pipelines, automated workflows, AI chatbot, integrations. Zero lead lost.', tags: ['WePushX CRM', 'WhatsApp', 'AI Chatbot', 'Automation'], icon: <Settings /> },
  ]
  if (locale === 'es') return [
    { num: '01', title: 'Meta Ads', desc: 'Campañas hiper-dirigidas para tu mercado. A/B testing, optimización ROAS, retargeting avanzado. Cada dólar rastreado.', tags: ['Facebook', 'Instagram', 'ROAS', 'Retargeting'], icon: <Target /> },
    { num: '02', title: 'Google Ads', desc: 'Captura prospectos en el momento exacto en que buscan. Search, Display, YouTube — tus clientes te encuentran cuando importa.', tags: ['Search', 'Display', 'YouTube', 'Performance Max'], icon: <Search /> },
    { num: '03', title: 'Diseño Web', desc: 'Sitios web, e-commerce y landing pages entregados en 7-14 días. Optimizados para SEO, mobile-first, diseñados para convertir.', tags: ['Next.js', 'WordPress', 'Shopify', 'Mobile-first'], icon: <Globe /> },
    { num: '04', title: 'SEO & GEO', desc: 'Posicionamiento duradero en Google para tus palabras clave estratégicas. SEO local en tus ciudades objetivo. Resultados en 90 días.', tags: ['SEO Local', 'GEO', 'Contenido', 'Técnico', 'Google'], icon: <ChartNoAxesCombined /> },
    { num: '05', title: 'UGC con Inteligencia Artificial', desc: '20 videos UGC auténticos por mes con IA. Scripts optimizados para conversión, avatares IA, voz en off. 10x más barato que producción tradicional.', tags: ['Video IA', 'UGC', 'Creativo', 'Multi-formato'], icon: <Clapperboard /> },
    { num: '06', title: 'CRM & Automatización', desc: 'WePushX CRM configurado para tu negocio. Pipelines, flujos automatizados, chatbot IA, integraciones. Cero leads perdidos.', tags: ['WePushX CRM', 'WhatsApp', 'Chatbot IA', 'Automatización'], icon: <Settings /> },
  ]
  return services
}

export const process = [
  {
    step: '01',
    title: 'Audit 30 min',
    desc: 'On analyse votre présence digitale complète publicités, site, SEO, CRM. On identifie exactement où vous perdez de l\'argent.',
  },
  {
    step: '02',
    title: 'Stratégie Personnalisée',
    desc: 'Proposition sur mesure avec ROI estimé, timeline et budget transparent. Pas de template votre business, votre plan.',
  },
  {
    step: '03',
    title: 'Setup Technique 7-14 jours',
    desc: 'Mise en place de tous les outils, intégrations et campagnes. Vous n\'avez rien à faire on gère tout.',
  },
  {
    step: '04',
    title: 'Exécution & Optimisation',
    desc: 'Gestion quotidienne, tests continus, optimisation des performances. On s\'améliore chaque semaine.',
  },
  {
    step: '05',
    title: 'Reporting Temps Réel',
    desc: 'Dashboard live accessible 24h/24. Reporting mensuel détaillé. Vous voyez chaque euro dépensé et chaque lead généré.',
  },
]

export function getProcess(locale = 'fr') {
  if (locale === 'en') return [
    { step: '01', title: '30-min Audit', desc: 'We analyze your complete digital presence — ads, website, SEO, CRM. We pinpoint exactly where you\'re losing money.' },
    { step: '02', title: 'Custom Strategy', desc: 'Tailored proposal with estimated ROI, timeline and transparent budget. No templates — your business, your plan.' },
    { step: '03', title: 'Technical Setup — 7-14 days', desc: 'We deploy all tools, integrations and campaigns. You don\'t lift a finger — we handle everything.' },
    { step: '04', title: 'Execution & Optimization', desc: 'Daily management, continuous testing, performance optimization. We improve every week.' },
    { step: '05', title: 'Real-Time Reporting', desc: 'Live dashboard accessible 24/7. Detailed monthly reporting. See every dollar spent and every lead generated.' },
  ]
  if (locale === 'es') return [
    { step: '01', title: 'Auditoría 30 min', desc: 'Analizamos tu presencia digital completa — anuncios, web, SEO, CRM. Identificamos exactamente dónde estás perdiendo dinero.' },
    { step: '02', title: 'Estrategia Personalizada', desc: 'Propuesta a medida con ROI estimado, cronograma y presupuesto transparente. Sin plantillas — tu negocio, tu plan.' },
    { step: '03', title: 'Configuración Técnica — 7-14 días', desc: 'Implementamos todas las herramientas, integraciones y campañas. No tienes que hacer nada — lo gestionamos todo.' },
    { step: '04', title: 'Ejecución & Optimización', desc: 'Gestión diaria, pruebas continuas, optimización del rendimiento. Mejoramos cada semana.' },
    { step: '05', title: 'Informes en Tiempo Real', desc: 'Panel en vivo accesible 24/7. Informes mensuales detallados. Ves cada dólar gastado y cada lead generado.' },
  ]
  return process
}

export const pricing = [
  {
    name: 'Starter',
    price: { monthly: 3900, yearly: 3315 },
    target: 'Auto-entrepreneurs, professions libérales',
    desc: 'Pour démarrer votre présence publicitaire et générer vos premiers leads qualifiés.',
    features: [
      '5 posts ads / mois',
      'Gestion d\'un canal (Meta ou Google)',
      'Rapport mensuel',
      'Support WhatsApp',
    ],
    cta: 'Démarrer',
    featured: false,
  },
  {
    name: 'Growth',
    price: { monthly: 6900, yearly: 5865 },
    target: 'PME, restaurants, boutiques, cliniques',
    desc: 'La solution complète pour scaler votre acquisition client sur Meta + Google simultanément.',
    features: [
      '8 posts ads / mois',
      '2 canaux : Meta + Google Ads',
      'Rapport + stratégie mensuelle',
      'Réunion d\'ajustement mensuelle',
    ],
    cta: 'Scaler maintenant',
    featured: true,
  },
  {
    name: 'Scale',
    price: { monthly: 14900, yearly: 12665 },
    target: 'E-commerce, startups, moyennes entreprises',
    desc: 'Stratégie digitale complète pour les entreprises prêtes à dominer leur marché.',
    features: [
      'Stratégie digitale complète',
      '10 posts ads / mois',
      'Ads management multi-plateforme',
      'Setup + gestion CRM inclus',
      'Reporting bi-mensuel + dashboard',
      'Support WhatsApp prioritaire',
    ],
    cta: 'Dominer le marché',
    featured: false,
  },
]

const pricingEN = [
  {
    name: 'Starter',
    price: { monthly: 390, yearly: 332 },
    target: 'Freelancers, solo professionals',
    desc: 'Launch your advertising presence and generate your first qualified leads.',
    features: ['5 ad posts / month', 'Single channel (Meta or Google)', 'Monthly report', 'WhatsApp support'],
    cta: 'Get started',
    featured: false,
  },
  {
    name: 'Growth',
    price: { monthly: 690, yearly: 587 },
    target: 'SMBs, restaurants, boutiques, clinics',
    desc: 'The complete solution to scale your customer acquisition on Meta + Google simultaneously.',
    features: ['8 ad posts / month', '2 channels: Meta + Google Ads', 'Monthly report + strategy', 'Monthly adjustment meeting'],
    cta: 'Scale now',
    featured: true,
  },
  {
    name: 'Scale',
    price: { monthly: 1490, yearly: 1267 },
    target: 'E-commerce, startups, mid-size companies',
    desc: 'Full digital strategy for businesses ready to dominate their market.',
    features: ['Full digital strategy', '10 ad posts / month', 'Multi-platform ads management', 'CRM setup + management included', 'Bi-monthly reporting + dashboard', 'Priority WhatsApp support'],
    cta: 'Dominate the market',
    featured: false,
  },
]

const pricingES = [
  {
    name: 'Starter',
    price: { monthly: 390, yearly: 332 },
    target: 'Freelancers, profesionales independientes',
    desc: 'Lanza tu presencia publicitaria y genera tus primeros leads calificados.',
    features: ['5 anuncios / mes', 'Un canal (Meta o Google)', 'Informe mensual', 'Soporte WhatsApp'],
    cta: 'Comenzar',
    featured: false,
  },
  {
    name: 'Growth',
    price: { monthly: 690, yearly: 587 },
    target: 'PYMEs, restaurantes, boutiques, clínicas',
    desc: 'La solución completa para escalar tu adquisición de clientes en Meta + Google simultáneamente.',
    features: ['8 anuncios / mes', '2 canales: Meta + Google Ads', 'Informe + estrategia mensual', 'Reunión de ajuste mensual'],
    cta: 'Escalar ahora',
    featured: true,
  },
  {
    name: 'Scale',
    price: { monthly: 1490, yearly: 1267 },
    target: 'E-commerce, startups, medianas empresas',
    desc: 'Estrategia digital completa para empresas listas para dominar su mercado.',
    features: ['Estrategia digital completa', '10 anuncios / mes', 'Gestión de anuncios multi-plataforma', 'Configuración + gestión CRM incluida', 'Informes bimensuales + dashboard', 'Soporte WhatsApp prioritario'],
    cta: 'Dominar el mercado',
    featured: false,
  },
]

export function getPricing(locale = 'fr') {
  if (locale === 'en') return pricingEN
  if (locale === 'es') return pricingES
  return pricing
}

export const results = [
  {
    sector: 'Restaurant',
    metric: '+340%',
    label: 'de trafic qualifié',
    detail: 'SEO local + Google Ads — 3 mois',
  },
  {
    sector: 'Clinique Médicale',
    metric: '90',
    label: 'leads/mois générés',
    detail: 'Site + Meta Ads + CRM automation',
  },
  {
    sector: 'E-commerce',
    metric: '–42%',
    label: 'de coût d\'acquisition',
    detail: 'UGC IA + Landing Pages optimisées Meta Ads',
  },
]

export function getResults(locale = 'fr') {
  if (locale === 'en') return [
    { sector: 'Restaurant', metric: '+340%', label: 'qualified traffic', detail: 'Local SEO + Google Ads — 3 months' },
    { sector: 'Medical Clinic', metric: '90', label: 'leads/month generated', detail: 'Website + Meta Ads + CRM automation' },
    { sector: 'E-commerce', metric: '–42%', label: 'acquisition cost', detail: 'AI UGC + Optimized Landing Pages Meta Ads' },
  ]
  if (locale === 'es') return [
    { sector: 'Restaurante', metric: '+340%', label: 'tráfico calificado', detail: 'SEO Local + Google Ads — 3 meses' },
    { sector: 'Clínica Médica', metric: '90', label: 'leads/mes generados', detail: 'Web + Meta Ads + automatización CRM' },
    { sector: 'E-commerce', metric: '–42%', label: 'coste de adquisición', detail: 'UGC IA + Landing Pages optimizadas Meta Ads' },
  ]
  return results
}

export const faqs = [
  {
    q: 'Combien de temps pour voir les premiers résultats ?',
    a: 'Les campagnes publicitaires génèrent des leads dans les 7-14 premiers jours. Le SEO prend 90 jours pour décoller. Le CRM automatise votre suivi dès le jour 1.',
  },
  {
    q: 'Quelle est votre garantie ?',
    a: 'Nous garantissons le remboursement à 100% de notre commission de gestion si aucun lead n\'est généré dans les 60 premiers jours de campagnes. C\'est écrit dans le contrat.',
  },
  {
    q: 'Travaillez-vous avec tous les secteurs ?',
    a: 'Nous avons de l\'expérience avec : restaurants, cliniques, e-commerce, immobilier, services B2B, rénovation, eau, auto... Si vous avez des clients à acquérir, on peut vous aider.',
  },
  {
    q: 'Est-ce que je dois avoir un budget publicitaire en plus ?',
    a: 'Oui. Notre commission couvre la gestion et la stratégie. Le budget publicitaire (payé directement à Meta/Google) est séparé. On vous conseille sur le montant optimal selon vos objectifs.',
  },
  {
    q: 'Comment se passe l\'audit de 30 minutes ?',
    a: 'C\'est un appel de 30 minutes sans engagement. On analyse votre situation actuelle (publicités, site, SEO, CRM), on identifie vos problèmes et on vous explique exactement quoi faire. Aucune carte bancaire requise.',
  },
]

export function getFaqs(locale = 'fr') {
  if (locale === 'en') return [
    { q: 'How long until I see results?', a: 'Paid campaigns generate leads within the first 7-14 days. SEO takes 90 days to gain traction. CRM automates your follow-up from day one.' },
    { q: 'What is your guarantee?', a: 'We guarantee a 100% refund of our management fee if no leads are generated in the first 60 days of campaigns. It\'s in the contract.' },
    { q: 'Do you work with all industries?', a: 'We have experience with restaurants, clinics, e-commerce, real estate, B2B services, renovation, automotive... If you have customers to acquire, we can help.' },
    { q: 'Do I need a separate ad budget?', a: 'Yes. Our fee covers management and strategy. The ad budget (paid directly to Meta/Google) is separate. We advise you on the optimal amount based on your goals.' },
    { q: 'How does the 30-minute audit work?', a: 'It\'s a 30-minute call with no commitment. We analyze your current situation (ads, website, SEO, CRM), identify your issues and explain exactly what to do. No credit card required.' },
  ]
  if (locale === 'es') return [
    { q: '¿Cuánto tiempo hasta ver resultados?', a: 'Las campañas de pago generan leads en los primeros 7-14 días. El SEO tarda 90 días en ganar tracción. El CRM automatiza tu seguimiento desde el primer día.' },
    { q: '¿Cuál es tu garantía?', a: 'Garantizamos un reembolso del 100% de nuestra tarifa de gestión si no se generan leads en los primeros 60 días de campañas. Está en el contrato.' },
    { q: '¿Trabajáis con todos los sectores?', a: 'Tenemos experiencia con restaurantes, clínicas, e-commerce, inmobiliaria, servicios B2B, reformas, automoción... Si tienes clientes que captar, podemos ayudarte.' },
    { q: '¿Necesito un presupuesto publicitario adicional?', a: 'Sí. Nuestra tarifa cubre la gestión y la estrategia. El presupuesto publicitario (pagado directamente a Meta/Google) es aparte. Te asesoramos sobre el monto óptimo según tus objetivos.' },
    { q: '¿Cómo funciona la auditoría de 30 minutos?', a: 'Es una llamada de 30 minutos sin compromiso. Analizamos tu situación actual (anuncios, web, SEO, CRM), identificamos tus problemas y te explicamos exactamente qué hacer. Sin tarjeta de crédito.' },
  ]
  return faqs
}

export const whyUs = [
  { label: 'Garantie 60 jours', icon: <ShieldCheck color="white" />, desc: 'Remboursement si aucun résultat' },
  { label: 'Spécialistes Maroc', icon: '🇲🇦', desc: 'On connaît le marché marocain' },
  { label: 'Full-service', icon: <Wrench  color="white" />, desc: 'Ads, site, SEO, CRM — tout en un' },
  { label: 'IA intégrée', icon: <Bot color="white" />, desc: 'UGC IA, chatbot, automation' },
  { label: 'Transparent', icon: <LayoutDashboard color="white"/>, desc: 'Dashboard temps réel, reporting clair' },
  { label: 'Rapide', icon: <Gauge color="white"/>, desc: 'Setup en 7-14 jours, leads rapides' },
]

export function getWhyUs(locale = 'fr') {
  if (locale === 'en') return [
    { label: '60-day Guarantee', icon: <ShieldCheck color="white" />, desc: 'Full refund if no results' },
    { label: 'Digital Experts', icon: <ShieldCheck color="white" />, desc: 'We know your market inside out' },
    { label: 'Full-service', icon: <Wrench color="white" />, desc: 'Ads, website, SEO, CRM — all in one' },
    { label: 'AI-powered', icon: <Bot color="white" />, desc: 'AI UGC, chatbot, automation' },
    { label: 'Transparent', icon: <LayoutDashboard color="white"/>, desc: 'Live dashboard, clear reporting' },
    { label: 'Fast', icon: <Gauge color="white"/>, desc: 'Setup in 7-14 days, fast leads' },
  ]
  if (locale === 'es') return [
    { label: 'Garantía 60 días', icon: <ShieldCheck color="white" />, desc: 'Reembolso completo si no hay resultados' },
    { label: 'Expertos Digitales', icon: <ShieldCheck color="white" />, desc: 'Conocemos tu mercado a fondo' },
    { label: 'Servicio completo', icon: <Wrench color="white" />, desc: 'Anuncios, web, SEO, CRM — todo en uno' },
    { label: 'Potenciado por IA', icon: <Bot color="white" />, desc: 'UGC IA, chatbot, automatización' },
    { label: 'Transparente', icon: <LayoutDashboard color="white"/>, desc: 'Panel en vivo, informes claros' },
    { label: 'Rápido', icon: <Gauge color="white"/>, desc: 'Configuración en 7-14 días, leads rápidos' },
  ]
  return whyUs
}

export const testimonials = [
  {
    name: 'K. B.',
    role: 'Gérant',
    company: 'Le Comptoir Marocain',
    sector: 'Restaurant · FR',
    avatar: 'KB',
    color: '#00F5FF',
    rating: 5,
    quote: 'En 3 mois avec WePushX, on est passé de 12 réservations/semaine à plus de 40. Leur setup Meta Ads + WePushX CRM a complètement transformé notre acquisition client. Je recommande les yeux fermés.',
    result: '+230% de réservations',
  },
  {
    name: 'S. A.',
    role: 'Directrice',
    company: 'Clinique Esthétique Lumière',
    sector: 'Clinique · Maroc',
    avatar: 'SA',
    color: '#a78bfa',
    rating: 5,
    quote: 'Avant WePushX, on dépensait 8 000 DH/mois en pub sans vraiment savoir ce que ça rapportait. Maintenant on a 89 leads qualifiés par mois avec un coût d\'acquisition divisé par 3. Le reporting est transparent et clair.',
    result: '89 leads/mois qualifiés',
  },
  {
    name: 'Y. F.',
    role: 'Fondateur',
    company: 'Société de Rénovation',
    sector: 'Rénovation · Maroc',
    avatar: 'YF',
    color: '#34d399',
    rating: 5,
    quote: 'J\'étais sceptique sur le digital. WePushX m\'a convaincu avec l\'audit gratuit — ils ont identifié exactement ce qui ne marchait pas. 6 semaines après le lancement, on avait déjà rentabilisé 4x l\'investissement.',
    result: 'ROI x4 en 6 semaines',
  },
  {
    name: 'N. C.',
    role: 'CEO',
    company: 'Aqua Solutions Maroc',
    sector: 'Traitement eau · Maroc',
    avatar: 'NC',
    color: '#f59e0b',
    rating: 5,
    quote: 'Le chatbot IA qu\'ils ont configuré sur WhatsApp qualifie nos leads automatiquement. On ne perd plus aucun prospect la nuit ou le week-end. C\'est comme avoir un commercial disponible 24h/24.',
    result: 'Zéro lead perdu',
  },
  {
    name: 'O. T.',
    role: 'Directeur Marketing',
    company: 'Concessionnaire Auto',
    sector: 'Automobile · Maroc',
    avatar: 'OT',
    color: '#f87171',
    rating: 5,
    quote: 'On a testé 3 agences avant WePushX. La différence ? Ils comprennent vraiment le marché marocain et ils livrent ce qu\'ils promettent. Notre SEO local a explosé — on est maintenant premier sur Google pour nos mots-clés principaux.',
    result: '#1 Google en 90 jours',
  },
  {
    name: 'H. B.',
    role: 'Gérante',
    company: 'Mode & Co Boutique',
    sector: 'E-commerce Mode · Maroc',
    avatar: 'HB',
    color: '#60a5fa',
    rating: 5,
    quote: 'Les vidéos UGC IA qu\'ils produisent pour nos Meta Ads performent mieux que nos anciennes productions vidéo classiques, pour 10x moins cher. Notre ROAS est passé de 1.8 à 4.2 en deux mois.',
    result: 'ROAS 1.8 → 4.2',
  },
]

export function getTestimonials(locale = 'fr') {
  if (locale === 'en') return [
    { name: 'K. B.', role: 'Owner', company: 'The Local Bistro', sector: 'Restaurant', avatar: 'KB', color: '#00F5FF', rating: 5, quote: 'In 3 months with WePushX, we went from 12 reservations/week to over 40. Their Meta Ads + WePushX CRM setup completely transformed our customer acquisition. I recommend them without hesitation.', result: '+230% reservations' },
    { name: 'S. A.', role: 'Director', company: 'Lumière Medical Spa', sector: 'Medical Clinic', avatar: 'SA', color: '#a78bfa', rating: 5, quote: 'Before WePushX, we spent $800/month on ads without really knowing the return. Now we have 89 qualified leads per month with an acquisition cost divided by 3. Transparent and clear reporting.', result: '89 qualified leads/month' },
    { name: 'Y. F.', role: 'Founder', company: 'Premier Renovation Co.', sector: 'Renovation', avatar: 'YF', color: '#34d399', rating: 5, quote: 'I was skeptical about digital. WePushX convinced me with the audit — they identified exactly what wasn\'t working. 6 weeks after launch, we\'d already 4x\'d the investment.', result: '4x ROI in 6 weeks' },
    { name: 'N. C.', role: 'CEO', company: 'AquaTech Solutions', sector: 'Water Treatment', avatar: 'NC', color: '#f59e0b', rating: 5, quote: 'The AI chatbot they set up on WhatsApp qualifies our leads automatically. We no longer lose any prospect at night or on weekends. It\'s like having a sales rep available 24/7.', result: 'Zero leads lost' },
    { name: 'O. T.', role: 'Marketing Director', company: 'AutoPrime Group', sector: 'Automotive', avatar: 'OT', color: '#f87171', rating: 5, quote: 'We tried 3 agencies before WePushX. The difference? They truly deliver on their promises. Our local SEO exploded — we\'re now first on Google for our main keywords.', result: '#1 Google in 90 days' },
    { name: 'H. B.', role: 'Owner', company: 'Style & Co Boutique', sector: 'Fashion E-commerce', avatar: 'HB', color: '#60a5fa', rating: 5, quote: 'The AI UGC videos they produce for our Meta Ads outperform our old traditional video productions, at 10x the cost savings. Our ROAS went from 1.8 to 4.2 in two months.', result: 'ROAS 1.8 → 4.2' },
  ]
  if (locale === 'es') return [
    { name: 'K. B.', role: 'Propietario', company: 'El Bistró Local', sector: 'Restaurante', avatar: 'KB', color: '#00F5FF', rating: 5, quote: 'En 3 meses con WePushX, pasamos de 12 reservas/semana a más de 40. Su configuración de Meta Ads + WePushX CRM transformó completamente nuestra adquisición de clientes. Los recomiendo sin dudarlo.', result: '+230% reservas' },
    { name: 'S. A.', role: 'Directora', company: 'Lumière Medical Spa', sector: 'Clínica Médica', avatar: 'SA', color: '#a78bfa', rating: 5, quote: 'Antes de WePushX, gastábamos $800/mes en publicidad sin saber realmente el retorno. Ahora tenemos 89 leads calificados al mes con el coste de adquisición dividido por 3. Informes transparentes y claros.', result: '89 leads calificados/mes' },
    { name: 'Y. F.', role: 'Fundador', company: 'Premier Reformas', sector: 'Reformas', avatar: 'YF', color: '#34d399', rating: 5, quote: 'Era escéptico con lo digital. WePushX me convenció con la auditoría — identificaron exactamente qué no funcionaba. 6 semanas después del lanzamiento, ya habíamos multiplicado 4x la inversión.', result: 'ROI x4 en 6 semanas' },
    { name: 'N. C.', role: 'CEO', company: 'AquaTech Solutions', sector: 'Tratamiento de agua', avatar: 'NC', color: '#f59e0b', rating: 5, quote: 'El chatbot IA que configuraron en WhatsApp califica nuestros leads automáticamente. Ya no perdemos ningún prospecto de noche ni en fin de semana. Es como tener un vendedor disponible 24/7.', result: 'Cero leads perdidos' },
    { name: 'O. T.', role: 'Director de Marketing', company: 'AutoPrime Group', sector: 'Automoción', avatar: 'OT', color: '#f87171', rating: 5, quote: 'Probamos 3 agencias antes de WePushX. ¿La diferencia? Realmente cumplen lo que prometen. Nuestro SEO local explotó — ahora somos primeros en Google para nuestras principales palabras clave.', result: '#1 Google en 90 días' },
    { name: 'H. B.', role: 'Propietaria', company: 'Style & Co Boutique', sector: 'Moda E-commerce', avatar: 'HB', color: '#60a5fa', rating: 5, quote: 'Los videos UGC IA que producen para nuestros Meta Ads superan a nuestras antiguas producciones de video tradicional, a 10 veces menos coste. Nuestro ROAS pasó de 1.8 a 4.2 en dos meses.', result: 'ROAS 1.8 → 4.2' },
  ]
  return testimonials
}
