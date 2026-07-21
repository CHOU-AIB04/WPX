// ── CGV — Conditions Générales de Vente — WePushX ──────────────────────────

export const metadata = {
  title: 'CGV — Conditions Générales de Vente | WePushX',
  description: 'Consultez les Conditions Générales de Vente de WePushX, agence marketing digital au Maroc.',
  alternates: { canonical: 'https://www.wepushx.com/cgv' },
  robots: { index: true, follow: true },
}

export default function CGVPage() {
  return (
    <>
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
