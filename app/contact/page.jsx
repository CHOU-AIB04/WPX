import ContactSection from '@/components/sections/contact/ContactSection'

export const metadata = {
  title: 'Contact & Audit Gratuit | WePushX — Agence Marketing Digital Maroc',
  description: 'Contactez WePushX pour un audit gratuit de 30 min. Réponse sous 24h. Sans engagement. Partout au Maroc.',
  alternates: { canonical: 'https://www.wepushx.com/contact' },
  openGraph: {
    title: 'Contactez WePushX | Audit Gratuit Marketing Digital Maroc',
    description: 'Réservez votre audit gratuit de 30 minutes. Un expert WePushX analyse votre présence digitale et vous propose un plan d\'action concret.',
    url: 'https://www.wepushx.com/contact',
  },
}

const contactFaqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "L'audit gratuit WePushX est-il vraiment sans engagement ?",
      acceptedAnswer: { '@type': 'Answer', text: "Oui, l'audit de 30 minutes est entièrement gratuit et sans engagement. Aucune carte bancaire, aucun contrat à signer. Vous repartez avec un rapport d'analyse de votre présence digitale actuelle et des recommandations concrètes, que vous choisissiez ou non de travailler avec WePushX par la suite." },
    },
    {
      '@type': 'Question',
      name: "Quel est le délai de réponse de WePushX ?",
      acceptedAnswer: { '@type': 'Answer', text: "WePushX répond à toutes les demandes de contact sous 24 heures ouvrées (du lundi au vendredi). Pour les demandes urgentes, vous pouvez contacter directement notre équipe via WhatsApp pour une réponse plus rapide." },
    },
    {
      '@type': 'Question',
      name: "Que se passe-t-il lors d'un audit gratuit avec WePushX ?",
      acceptedAnswer: { '@type': 'Answer', text: "Durant les 30 minutes, un expert WePushX analyse : votre présence digitale actuelle (site web, réseaux sociaux, SEO), vos campagnes publicitaires existantes si vous en avez, votre secteur et vos concurrents au Maroc, vos objectifs commerciaux. À l'issue de l'audit, vous recevez un rapport personnalisé avec des recommandations prioritaires et une proposition d'accompagnement si approprié." },
    },
    {
      '@type': 'Question',
      name: "WePushX travaille-t-il avec des entreprises hors de Casablanca ?",
      acceptedAnswer: { '@type': 'Answer', text: "Absolument. WePushX accompagne des PME dans toutes les grandes villes du Maroc : Rabat, Marrakech, Agadir, Fès, Tanger, Meknès, Oujda, Kénitra, Tétouan et bien d'autres. Toute la collaboration se fait à distance avec des points réguliers en visioconférence. La localisation géographique n'est pas un obstacle." },
    },
    {
      '@type': 'Question',
      name: "WePushX prend-il en charge les entreprises de tous les secteurs ?",
      acceptedAnswer: { '@type': 'Answer', text: "WePushX a de l'expérience dans de nombreux secteurs d'activité marocains : immobilier, cliniques et santé, restaurants et food, e-commerce, énergie solaire, rénovation, traitement d'eau, automobile, formation professionnelle, consulting, assurance, et plus encore. Nous adaptons nos stratégies aux spécificités de chaque secteur et aux comportements des consommateurs marocains." },
    },
    {
      '@type': 'Question',
      name: "Comment se déroule la collaboration avec WePushX après l'audit ?",
      acceptedAnswer: { '@type': 'Answer', text: "Après l'audit, si vous choisissez de collaborer, WePushX commence par un onboarding complet : collecte des accès (comptes publicitaires, site web, CRM existant), définition des objectifs chiffrés et KPIs, création d'un plan d'action sur 60 jours. Ensuite, nous gérons vos campagnes et vous envoyons des rapports hebdomadaires ou bimensuels selon votre préférence." },
    },
  ],
}

const contactBreadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.wepushx.com' },
    { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://www.wepushx.com/contact' },
  ],
}

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactFaqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactBreadcrumbJsonLd) }}
      />
      <ContactSection />
    </>
  )
}
