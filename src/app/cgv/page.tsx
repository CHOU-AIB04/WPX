import { JsonLd } from '@/components/seo/JsonLd'
import { breadcrumbLd, pageMeta } from '@/lib/seo'

// Canonique relative : l'ancienne pointait vers www.wepushx.com, qui redirige
// en 301 vers wepushx.com — signal contradictoire pour Google.
export const metadata = pageMeta({
  title: 'Conditions générales de vente (CGV)',
  description:
    'Conditions générales de vente de WePushX, agence marketing digital au Maroc, applicables à toutes nos prestations.',
  path: '/cgv',
})


export default function CGVPAGE() {
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: 'Conditions générales de vente', path: '/cgv' }])} />
      {/* Titre de la page pour Google et les lecteurs d'écran ; le PDF occupe l'écran. */}
      <h1 className="sr-only">Conditions générales de vente de WePushX</h1>
      {/* Hide every layout chrome on this page */}
      <style>{`
        body { overflow: hidden !important; }
        header, footer { display: none !important; }
      `}</style>

      {/* Full-viewport PDF — covers everything */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 99999,
          background: '#fff',
        }}
      >
        <iframe
          src="/cgv.pdf"
          title="Conditions Générales de Vente — WePushX"
          style={{ display: 'block', width: '100%', height: '100%', border: 'none' }}
        />
      </div>
    </>
  )
}