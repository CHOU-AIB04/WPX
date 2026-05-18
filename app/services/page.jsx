import ServicesHero from '@/components/sections/services/ServicesHero'
import LogosBar from '@/components/sections/shared/LogosBar'
import ServicesGrid from '@/components/sections/services/ServicesGrid'
import OneShotSection from '@/components/sections/services/OneShotSection'
import ServicesFAQ from '@/components/sections/services/ServicesFAQ'
import CTASection from '@/components/sections/home/CTASection'

export const metadata = {
  title: 'Nos Services Marketing Digital | Meta Ads, Google Ads, SEO, Sites Web, UGC IA, CRM — Maroc',
  description: 'Decouvrez tous les services WePushX : gestion Meta Ads & Google Ads, creation de sites web, SEO, UGC par IA, CRM automation sur mesure. Tarifs clairs pour les PME marocaines.',
  alternates: { canonical: 'https://wepushx.com/services' },
  openGraph: {
    title: 'Services WePushX | Agence Marketing Digital Maroc',
    description: 'Meta Ads, Google Ads, SEO, Sites Web, UGC IA, CRM automation pour dominer votre marche digital au Maroc.',
    url: 'https://wepushx.com/services',
  },
}

const offerCatalogJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'OfferCatalog',
  name: 'Services Marketing Digital — WePushX',
  url: 'https://wepushx.com/services',
  provider: {
    '@type': 'Organization',
    name: 'WePushX',
    url: 'https://wepushx.com',
    address: { '@type': 'PostalAddress', addressLocality: 'Casablanca', addressCountry: 'MA' },
  },
  itemListElement: [
    {
      '@type': 'Offer',
      name: 'Gestion Meta Ads',
      description: "Gestion complète de vos campagnes Facebook et Instagram : création de créatifs, ciblage d'audience, A/B testing, optimisation ROAS et reporting mensuel.",
      url: 'https://wepushx.com/services#meta-ads',
      seller: { '@type': 'Organization', name: 'WePushX' },
    },
    {
      '@type': 'Offer',
      name: 'Gestion Google Ads',
      description: 'Campagnes Search, Display et YouTube optimisées pour le marché marocain. Stratégie de mots-clés, Quality Score, extensions et tracking conversions.',
      url: 'https://wepushx.com/services#google-ads',
      seller: { '@type': 'Organization', name: 'WePushX' },
    },
    {
      '@type': 'Offer',
      name: 'SEO & Référencement Naturel',
      description: 'Audit SEO technique, optimisation on-page, link building, SEO local Google Business Profile et stratégie de contenu pour le marché marocain.',
      url: 'https://wepushx.com/services#seo',
      seller: { '@type': 'Organization', name: 'WePushX' },
    },
    {
      '@type': 'Offer',
      name: 'Création de Sites Web',
      description: "Développement de sites vitrines, landing pages haute conversion et e-commerce avec Next.js. Mobile-first, Core Web Vitals optimisés, SEO intégré.",
      url: 'https://wepushx.com/services#sites-web',
      seller: { '@type': 'Organization', name: 'WePushX' },
    },
    {
      '@type': 'Offer',
      name: 'CRM & Marketing Automation',
      description: "Mise en place de systèmes d'automatisation : séquences email, WhatsApp, SMS, pipelines de vente, scoring de leads et workflows de nurturing.",
      url: 'https://wepushx.com/services#crm',
      seller: { '@type': 'Organization', name: 'WePushX' },
    },
    {
      '@type': 'Offer',
      name: 'UGC IA — Contenu Généré par IA',
      description: "Production de vidéos UGC synthétiques et visuels publicitaires par IA pour les campagnes Meta Ads et Google. Scripts optimisés, montage professionnel.",
      url: 'https://wepushx.com/services#ugc-ia',
      seller: { '@type': 'Organization', name: 'WePushX' },
    },
  ],
}

const servicesFaqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    // ── Meta Ads ──
    {
      '@type': 'Question',
      name: 'Comment WePushX gère-t-il les campagnes Meta Ads ?',
      acceptedAnswer: { '@type': 'Answer', text: "WePushX prend en charge l'intégralité de vos campagnes Meta Ads : audit de votre compte existant, installation et vérification du pixel Meta, création des créatifs (images, vidéos, UGC), structuration des campagnes (awareness, considération, conversion), ciblage des audiences, A/B testing, optimisation continue et reporting mensuel détaillé." },
    },
    {
      '@type': 'Question',
      name: 'Combien de leads peut-on générer avec Meta Ads au Maroc ?',
      acceptedAnswer: { '@type': 'Answer', text: "Le nombre de leads dépend du secteur, du budget et de la qualité des créatifs. En moyenne, avec un budget de 5 000 à 10 000 MAD/mois sur Meta Ads, les clients WePushX génèrent entre 20 et 80 leads qualifiés par mois selon leur secteur d'activité (immobilier, cliniques, formation, e-commerce, etc.)." },
    },
    // ── Google Ads ──
    {
      '@type': 'Question',
      name: "Quel est le coût par clic moyen sur Google Ads au Maroc ?",
      acceptedAnswer: { '@type': 'Answer', text: "Le coût par clic sur Google Ads au Maroc varie de 1 à 15 MAD selon le secteur. Les secteurs les plus compétitifs (immobilier, assurance, avocats) peuvent dépasser 20 MAD par clic. WePushX optimise le Quality Score de vos annonces pour réduire le CPC tout en maintenant une position élevée." },
    },
    {
      '@type': 'Question',
      name: 'Meta Ads ou Google Ads : lequel choisir pour mon activité au Maroc ?',
      acceptedAnswer: { '@type': 'Answer', text: "Google Ads est plus efficace quand vos clients cherchent activement votre produit ou service sur Google (plombier, dentiste, livraison, etc.). Meta Ads est plus puissant pour créer de la demande et toucher une audience qui ne vous connaît pas encore. WePushX recommande souvent une stratégie combinée pour maximiser la couverture et le ROI." },
    },
    // ── SEO ──
    {
      '@type': 'Question',
      name: 'Combien de temps faut-il pour voir des résultats SEO au Maroc ?',
      acceptedAnswer: { '@type': 'Answer', text: "Le SEO est un investissement à moyen terme. Les premiers résultats visibles (amélioration de positions, augmentation du trafic) apparaissent généralement en 3 à 6 mois. Pour atteindre la première page Google sur des mots-clés concurrentiels marocains, il faut compter 6 à 12 mois de travail régulier. WePushX fournit un rapport mensuel des progrès." },
    },
    {
      '@type': 'Question',
      name: "Qu'est-ce que le GEO et pourquoi est-ce important en 2025 ?",
      acceptedAnswer: { '@type': 'Answer', text: "Le GEO (Generative Engine Optimization) est l'optimisation de votre contenu pour être cité par les IA comme ChatGPT, Gemini, Perplexity et Claude quand ils répondent à des questions. En 2025, de plus en plus de recherches passent par les IA. WePushX intègre le GEO à sa stratégie SEO pour maximiser votre visibilité sur tous les canaux de recherche, classiques et IA." },
    },
    // ── Sites web ──
    {
      '@type': 'Question',
      name: 'Quel est le délai pour créer un site web professionnel au Maroc ?',
      acceptedAnswer: { '@type': 'Answer', text: "WePushX livre une landing page haute conversion en 5 à 10 jours ouvrés. Un site vitrine complet (5-8 pages) est livré en 2 à 4 semaines. Un e-commerce prend généralement 4 à 8 semaines selon le nombre de produits et fonctionnalités. Tous les sites incluent un audit SEO de base et une configuration Google Analytics." },
    },
    {
      '@type': 'Question',
      name: 'Pourquoi utiliser Next.js pour un site web au Maroc ?',
      acceptedAnswer: { '@type': 'Answer', text: "Next.js est le framework le plus performant pour le SEO et la vitesse de chargement. Les sites WePushX atteignent un score Lighthouse supérieur à 90, ce qui améliore le référencement Google et l'expérience utilisateur. Sur mobile — où 85% des Marocains naviguent — un site rapide convertit 2 à 3 fois mieux qu'un site lent." },
    },
    // ── CRM ──
    {
      '@type': 'Question',
      name: "Qu'est-ce qu'un pipeline de vente et comment ça fonctionne ?",
      acceptedAnswer: { '@type': 'Answer', text: "Un pipeline de vente est un système visuel qui représente chaque étape du parcours d'un prospect : nouveau lead, prise de contact, proposition envoyée, négociation, deal conclu ou perdu. Le CRM automation de WePushX déplace automatiquement les leads entre ces étapes selon leurs actions, envoie des relances programmées et alerte votre équipe commerciale au bon moment." },
    },
    {
      '@type': 'Question',
      name: 'Le marketing automation fonctionne-t-il pour WhatsApp au Maroc ?',
      acceptedAnswer: { '@type': 'Answer', text: "Oui, et c'est particulièrement puissant au Maroc où WhatsApp est le canal de communication principal. WePushX configure des séquences automatisées qui envoient des messages WhatsApp personnalisés aux leads selon leur comportement : réponse instantanée à une demande de contact, rappel de rendez-vous, relance après 48h sans réponse, demande d'avis client post-achat." },
    },
    // ── UGC IA ──
    {
      '@type': 'Question',
      name: "Comment fonctionne la création de contenus UGC IA ?",
      acceptedAnswer: { '@type': 'Answer', text: "WePushX utilise des outils d'IA de dernière génération pour créer des vidéos UGC (User-Generated Content) synthétiques qui ressemblent à de vrais témoignages clients. Nous rédigeons le script adapté à votre secteur et audience marocaine, générons la vidéo en IA, réalisons le montage et vous livrons des formats optimisés pour les Stories, Reels et Feed Meta Ads." },
    },
    {
      '@type': 'Question',
      name: 'Pourquoi les publicités UGC convertissent-elles mieux que les pubs classiques ?',
      acceptedAnswer: { '@type': 'Answer', text: "Les publicités UGC (format témoignage authentique) bénéficient d'un taux de confiance beaucoup plus élevé que les visuels produits en studio. Sur Meta Ads au Maroc, nos tests montrent que les UGC génèrent un taux de clic 35 à 60% supérieur aux images statiques classiques, et réduisent le coût par lead de 20 à 40%. Ils passent également mieux dans l'algorithme Meta qui favorise le contenu natif." },
    },
  ],
}

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerCatalogJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesFaqJsonLd) }}
      />
      <ServicesHero />
      {/* <LogosBar background="#000" /> */}
      <ServicesGrid />
      <OneShotSection />
      <ServicesFAQ />
      <CTASection />
    </>
  )
}
