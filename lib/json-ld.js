// ── Shared JSON-LD entity graph — imported by layout.js ──────────────────────
// All @id values use consistent www.wepushx.com anchors so search engines and
// AI models can resolve them as a single knowledge-graph entity.

const BASE = 'https://www.wepushx.com'

export const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    // ── Primary entity: ProfessionalService / LocalBusiness ──────────────────
    {
      '@type': ['LocalBusiness', 'ProfessionalService', 'MarketingAgency'],
      '@id': `${BASE}/#business`,
      name: 'WePushX',
      alternateName: ['WePushX Agence Marketing Digital', 'WePushX Maroc'],
      description: 'WePushX est une agence de marketing digital au Maroc spécialisée en Meta Ads, Google Ads, SEO, création de sites web, UGC IA et CRM automation pour les PME marocaines.',
      url: BASE,
      email: 'contact@wepushx.com',
      logo: {
        '@type': 'ImageObject',
        '@id': `${BASE}/#logo`,
        url: `${BASE}/wpx.png`,
        width: 512,
        height: 512,
        caption: 'WePushX — Agence Marketing Digital Maroc',
      },
      image: `${BASE}/og-image.jpg`,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Casablanca',
        addressRegion: 'Grand Casablanca-Settat',
        addressCountry: 'MA',
        postalCode: '20000',
      },
      areaServed: [
        { '@type': 'Country', name: 'Maroc', '@id': 'https://www.wikidata.org/entity/Q1028' },
        { '@type': 'City', name: 'Casablanca' },
        { '@type': 'City', name: 'Rabat' },
        { '@type': 'City', name: 'Marrakech' },
        { '@type': 'City', name: 'Agadir' },
        { '@type': 'City', name: 'Tanger' },
        { '@type': 'City', name: 'Fès' },
      ],
      priceRange: '$$',
      currenciesAccepted: 'MAD',
      paymentAccepted: 'Virement bancaire, chèque',
      openingHoursSpecification: [
        { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '09:00', closes: '18:00' },
        { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday'], opens: '09:00', closes: '13:00' },
      ],
      contactPoint: [
        { '@type': 'ContactPoint', contactType: 'customer service', email: 'contact@wepushx.com', availableLanguage: ['French', 'Arabic', 'Moroccan Arabic'], areaServed: 'MA' },
        { '@type': 'ContactPoint', contactType: 'sales', url: `${BASE}/contact`, availableLanguage: ['French', 'Arabic'] },
      ],
      sameAs: [
        'https://www.facebook.com/wepushx',
        'https://www.instagram.com/wepushx',
        'https://www.linkedin.com/company/wepushx',
      ],
      foundingDate: '2023',
      slogan: 'Résultats garantis en 60 jours ou remboursement',
      hasOfferCatalog: { '@type': 'OfferCatalog', '@id': `${BASE}/#services` },
      knowsAbout: [
        'Meta Ads', 'Facebook Ads', 'Instagram Ads', 'Google Ads',
        'SEO', 'Référencement naturel', 'GEO', 'Generative Engine Optimization',
        'CRM automation', 'WhatsApp Business API', 'UGC IA', 'Marketing digital Maroc',
        'Création de sites web', 'Next.js', 'Landing pages',
      ],
    },

    // ── Service catalog ───────────────────────────────────────────────────────
    {
      '@type': 'OfferCatalog',
      '@id': `${BASE}/#services`,
      name: 'Services Marketing Digital — WePushX Maroc',
      provider: { '@id': `${BASE}/#business` },
      itemListElement: [
        {
          '@type': 'Offer',
          '@id': `${BASE}/#service-meta-ads`,
          name: 'Gestion Meta Ads & Facebook Ads',
          description: "Gestion complète des campagnes publicitaires Facebook et Instagram pour les PME marocaines. Création de créatifs, ciblage d'audience, A/B testing, optimisation ROAS, reporting mensuel.",
          url: `${BASE}/services#meta-ads`,
          priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'MAD', minPrice: 1500, maxPrice: 5000, unitText: 'par mois' },
          areaServed: { '@type': 'Country', name: 'Maroc' },
        },
        {
          '@type': 'Offer',
          '@id': `${BASE}/#service-google-ads`,
          name: 'Gestion Google Ads & SEA',
          description: 'Campagnes Google Search, Display et YouTube pour le marché marocain. Stratégie mots-clés, Quality Score, extensions, tracking conversions.',
          url: `${BASE}/services#google-ads`,
          priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'MAD', minPrice: 1500, maxPrice: 5000, unitText: 'par mois' },
        },
        {
          '@type': 'Offer',
          '@id': `${BASE}/#service-seo`,
          name: 'SEO & Référencement Naturel',
          description: 'Audit SEO technique, optimisation on-page, link building, SEO local Google Business Profile, stratégie de contenu pour le marché marocain.',
          url: `${BASE}/services#seo`,
          priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'MAD', minPrice: 2000, maxPrice: 6000, unitText: 'par mois' },
        },
        {
          '@type': 'Offer',
          '@id': `${BASE}/#service-sites-web`,
          name: 'Création de Sites Web',
          description: 'Sites vitrines, landing pages haute conversion et e-commerce avec Next.js. Mobile-first, Core Web Vitals optimisés, SEO intégré.',
          url: `${BASE}/services#sites-web`,
          priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'MAD', minPrice: 2000, maxPrice: 10000 },
        },
        {
          '@type': 'Offer',
          '@id': `${BASE}/#service-crm`,
          name: 'CRM & Marketing Automation',
          description: "Mise en place de systèmes d'automatisation : séquences email, WhatsApp, SMS, pipelines de vente, scoring de leads, chatbot IA.",
          url: `${BASE}/services#crm`,
          priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'MAD', minPrice: 4000, maxPrice: 4000, unitText: 'setup' },
        },
        {
          '@type': 'Offer',
          '@id': `${BASE}/#service-ugc-ia`,
          name: 'UGC IA — Vidéos Publicitaires par Intelligence Artificielle',
          description: "Production de vidéos UGC synthétiques par IA pour les campagnes Meta Ads. Scripts optimisés conversion, avatars IA réalistes, formats Stories/Reels/Feed.",
          url: `${BASE}/services#ugc-ia`,
          priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'MAD', minPrice: 2500, unitText: 'pack 5 vidéos' },
        },
      ],
    },

    // ── WebSite with SearchAction ─────────────────────────────────────────────
    {
      '@type': 'WebSite',
      '@id': `${BASE}/#website`,
      name: 'WePushX',
      url: BASE,
      publisher: { '@id': `${BASE}/#business` },
      inLanguage: 'fr-MA',
      potentialAction: {
        '@type': 'SearchAction',
        target: { '@type': 'EntryPoint', urlTemplate: `${BASE}/blog?category={search_term_string}` },
        'query-input': 'required name=search_term_string',
      },
    },
  ],
}
