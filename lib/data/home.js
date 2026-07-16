import { Bot, ChartNoAxesCombined, Clapperboard, Gauge, Globe, Glasses, LayoutDashboard, LayoutTemplate, Repeat, Search, Settings, ShieldCheck, Target, Wrench , TrendingDown } from "lucide-react"

export const stats = [
  { value: 340, suffix: '%', label: 'de trafic qualifié en plus' },
  { value: 90, suffix: '', label: 'leads/mois générés' },
  { value: 42, suffix: '%', label: 'de coût d\'acquisition réduit' },
  { value: 60, suffix: 'j', label: 'garantie résultats' },
]

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

export const whyUs = [
  { label: 'Garantie 60 jours', icon: <ShieldCheck color="white" />, desc: 'Remboursement si aucun résultat' },
  { label: 'Spécialistes Maroc', icon: '🇲🇦', desc: 'On connaît le marché marocain' },
  { label: 'Full-service', icon: <Wrench  color="white" />, desc: 'Ads, site, SEO, CRM — tout en un' },
  { label: 'IA intégrée', icon: <Bot color="white" />, desc: 'UGC IA, chatbot, automation' },
  { label: 'Transparent', icon: <LayoutDashboard color="white"/>, desc: 'Dashboard temps réel, reporting clair' },
  { label: 'Rapide', icon: <Gauge color="white"/>, desc: 'Setup en 7-14 jours, leads rapides' },
]

export const testimonials = [
  {
    name: 'K. B.',
    role: 'Gérant',
    company: 'Le Comptoir Marocain',
    sector: 'Restaurant · Maroc',
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
