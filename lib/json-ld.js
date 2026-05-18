export const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': 'https://wepushx.com/#business',
      name: 'WePushX',
      description: 'Agence marketing digital basee a Casablanca, Maroc. Specialisee en Meta Ads, Google Ads, SEO, sites web, UGC IA et CRM automation pour les PME marocaines.',
      url: 'https://wepushx.com',
      telephone: '+212600000000',
      email: 'contact@wepushx.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Casablanca',
        addressCountry: 'MA',
      },
      areaServed: ['Casablanca', 'Rabat', 'Marrakech', 'Agadir', 'Tanger', 'Maroc'],
      priceRange: '3500-15000 MAD/mois',
      openingHours: 'Mo-Sa 09:00-18:00',
    },
    {
      '@type': 'Organization',
      '@id': 'https://wepushx.com/#org',
      name: 'WePushX',
      url: 'https://wepushx.com',
      logo: 'https://wepushx.com/logo.png',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+212600000000',
        contactType: 'customer service',
        availableLanguage: ['French', 'Arabic'],
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Combien de temps pour voir les premiers resultats ?',
          acceptedAnswer: { '@type': 'Answer', text: 'Les campagnes publicitaires generent des leads dans les 7-14 premiers jours. Le SEO prend 90 jours. Le CRM automatise des le jour 1.' },
        },
        {
          '@type': 'Question',
          name: 'Quelle est votre garantie ?',
          acceptedAnswer: { '@type': 'Answer', text: "Remboursement a 100% de notre commission si aucun lead n'est genere dans les 60 premiers jours." },
        },
      ],
    },
  ],
}