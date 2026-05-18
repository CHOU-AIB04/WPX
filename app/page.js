import HeroSection from '@/components/sections/home/HeroSection'
import LogosBar from '@/components/sections/shared/LogosBar'
import StatsSection from '@/components/sections/home/StatsSection'
import WhyUsSection from '@/components/sections/home/WhyUsSection'
import ServicesSection from '@/components/sections/home/ServicesSection'
import ProcessSection from '@/components/sections/home/ProcessSection'
import ComparisonSection from '@/components/sections/shared/ComparisonSection'
import ResultsSection from '@/components/sections/home/ResultsSection'
import TestimonialsSection from '@/components/sections/home/TestimonialsSection'
import PricingSection from '@/components/sections/home/PricingSection'
import FAQSection from '@/components/sections/home/FAQSection'
import CTASection from '@/components/sections/home/CTASection'

export const metadata = {
  title: 'Agence Marketing Digital Maroc | Meta Ads, Google Ads, SEO & Sites Web',
  description:
    "WePushX est l'agence marketing digital au Maroc pour les PME. Meta Ads, Google Ads, creation de sites web, SEO, UGC IA & CRM. Audit gratuit. Resultats garantis en 60 jours — Casablanca, Rabat, Marrakech.",
  alternates: { canonical: 'https://wepushx.com' },
}

const homeFaqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Qu'est-ce que WePushX ?",
      acceptedAnswer: { '@type': 'Answer', text: "WePushX est une agence de marketing digital basée à Casablanca, Maroc. Nous accompagnons les PME marocaines dans leur acquisition client en ligne via Meta Ads, Google Ads, SEO, création de sites web, CRM automation et UGC IA. Notre promesse : des résultats mesurables en 60 jours ou remboursement." },
    },
    {
      '@type': 'Question',
      name: 'Combien coûte la gestion de publicité digitale au Maroc ?',
      acceptedAnswer: { '@type': 'Answer', text: "Les frais de gestion varient selon la complexité et le volume de vos campagnes. Généralement, une gestion Meta Ads ou Google Ads pour PME marocaine commence entre 1 500 et 3 000 MAD/mois, hors budget publicitaire. Le budget publicitaire Meta ou Google est distinct et payé directement aux plateformes. WePushX propose des offres adaptées à chaque budget." },
    },
    {
      '@type': 'Question',
      name: 'En combien de temps voit-on des résultats avec le marketing digital ?',
      acceptedAnswer: { '@type': 'Answer', text: "Avec les Meta Ads et Google Ads bien configurés, les premiers leads arrivent en 24 à 72 heures. Pour le SEO, les résultats organiques apparaissent en 3 à 6 mois selon la concurrence. WePushX garantit des résultats mesurables en 60 jours ou vous rembourse." },
    },
    {
      '@type': 'Question',
      name: 'WePushX travaille-t-il avec des clients hors de Casablanca ?',
      acceptedAnswer: { '@type': 'Answer', text: "Oui, WePushX accompagne des clients dans toutes les grandes villes du Maroc : Casablanca, Rabat, Marrakech, Agadir, Fès, Tanger, Meknès et au-delà. Toutes nos prestations sont gérées à distance via des outils collaboratifs, avec des points réguliers en visioconférence." },
    },
    {
      '@type': 'Question',
      name: 'Quelle est la différence entre Meta Ads et Google Ads ?',
      acceptedAnswer: { '@type': 'Answer', text: "Meta Ads (Facebook & Instagram) ciblent les utilisateurs en fonction de leurs intérêts, comportements et données démographiques — idéal pour créer de la demande. Google Ads capture des utilisateurs qui recherchent activement un produit ou service — idéal pour répondre à une intention d'achat existante. Les deux stratégies sont complémentaires et WePushX recommande souvent une combinaison des deux." },
    },
    {
      '@type': 'Question',
      name: 'Comment fonctionne la garantie résultats en 60 jours ?',
      acceptedAnswer: { '@type': 'Answer', text: "WePushX s'engage contractuellement à atteindre des objectifs définis avec vous (nombre de leads, coût par acquisition, ROAS) dans les 60 premiers jours de collaboration. Si ces objectifs ne sont pas atteints, vous êtes remboursé des frais de gestion. Cette garantie s'applique aux clients respectant les recommandations stratégiques et les budgets publicitaires minimums recommandés." },
    },
    {
      '@type': 'Question',
      name: "Qu'est-ce que le SEO local et pourquoi est-ce important pour une PME marocaine ?",
      acceptedAnswer: { '@type': 'Answer', text: "Le SEO local consiste à optimiser votre présence en ligne pour apparaître dans les recherches géolocalisées, comme 'restaurant Casablanca' ou 'plombier Rabat'. Pour une PME marocaine, c'est souvent le levier le plus rentable : il capte des clients locaux à forte intention d'achat, sans budget publicitaire. WePushX optimise votre Google Business Profile, vos citations locales et votre contenu pour dominer les recherches locales." },
    },
    {
      '@type': 'Question',
      name: "Qu'est-ce que l'UGC IA et comment peut-il aider mon entreprise ?",
      acceptedAnswer: { '@type': 'Answer', text: "L'UGC IA (User-Generated Content par Intelligence Artificielle) consiste à créer des vidéos et visuels publicitaires qui ressemblent à des témoignages ou avis clients authentiques, mais générés par IA. Ces formats convertissent 30 à 50% mieux que les publicités classiques sur Meta car ils sont plus crédibles et moins intrusifs. WePushX produit des UGC IA en français et darija adaptés au marché marocain." },
    },
    {
      '@type': 'Question',
      name: "Qu'est-ce que le CRM automation et en ai-je besoin ?",
      acceptedAnswer: { '@type': 'Answer', text: "Le CRM automation est un système qui gère automatiquement vos leads depuis leur premier contact jusqu'à la vente : réponse automatique aux demandes, relances par email ou WhatsApp, qualification, prise de rendez-vous et suivi. Si vous recevez plus de 10 leads par semaine et que vous perdez du temps à les suivre manuellement, le CRM automation est indispensable. WePushX configure et personnalise ces systèmes pour chaque secteur d'activité." },
    },
    {
      '@type': 'Question',
      name: 'Comment démarrer avec WePushX ?',
      acceptedAnswer: { '@type': 'Answer', text: "Pour démarrer, réservez un audit gratuit de 30 minutes via notre page de contact. Un expert WePushX analysera votre présence digitale actuelle, vos objectifs et votre marché. Nous vous proposons ensuite un plan d'action personnalisé avec des objectifs chiffrés. Aucun engagement requis pour l'audit." },
    },
    {
      '@type': 'Question',
      name: 'WePushX crée-t-il aussi des sites web et landing pages ?',
      acceptedAnswer: { '@type': 'Answer', text: "Oui, WePushX conçoit et développe des sites vitrines, des landing pages haute conversion et des boutiques e-commerce pour les PME marocaines. Nos sites sont développés avec Next.js et React, optimisés pour les Core Web Vitals, le mobile et le SEO. Une landing page WePushX est conçue pour convertir les visiteurs en leads dès le premier jour." },
    },
    {
      '@type': 'Question',
      name: 'Quel budget publicitaire minimum faut-il prévoir pour Meta Ads au Maroc ?',
      acceptedAnswer: { '@type': 'Answer', text: "Le budget minimum pour tester efficacement les Meta Ads au Maroc est de 2 000 à 3 000 MAD par mois. Ce budget permet de valider les créatifs et les audiences. Un budget de 5 000 à 10 000 MAD par mois permet généralement de générer entre 20 et 60 leads qualifiés selon le secteur d'activité." },
    },
  ],
}

export default function HomePage() {
  return (
    <>
      {/* FAQ JSON-LD — rendered in body, read by Google from anywhere in the document */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqJsonLd) }}
      />
      <HeroSection />
      {/* <LogosBar background="#000" /> */}
      <StatsSection />
      <WhyUsSection />
      <ServicesSection />
      <ProcessSection />
      <ComparisonSection />
      <ResultsSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
    </>
  )
}
