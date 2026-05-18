export default function manifest() {
  return {
    name: 'WePushX — Agence Marketing Digital Maroc',
    short_name: 'WePushX',
    description: 'Meta Ads, Google Ads, SEO, Sites Web & CRM automation pour les PME marocaines. Résultats garantis en 60 jours.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#00F5FF',
    orientation: 'portrait',
    icons: [
      { src: '/icon-192.png',  sizes: '192x192',  type: 'image/png' },
      { src: '/icon-512.png',  sizes: '512x512',  type: 'image/png' },
      { src: '/icon-512.png',  sizes: '512x512',  type: 'image/png', purpose: 'maskable' },
    ],
    categories: ['business', 'marketing'],
    lang: 'fr',
  }
}
