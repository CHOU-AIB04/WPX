export const metadata = {
  title: 'Présentation | WePushX — Agence Marketing Digital au Maroc',
  description:
    'Découvrez WePushX, agence de marketing digital au Maroc : notre expertise, nos services, notre approche et notre vision pour accompagner les marques dans leur croissance digitale.',
  alternates: {
    canonical: 'https://www.wepushx.com/presentation',
  },
  robots: {
    index: true,
    follow: true,
  },
}


export default function PRESPAGE() {
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
          src="/pres.pdf"
          title="Conditions Générales de Vente — WePushX"
          style={{ display: 'block', width: '100%', height: '100%', border: 'none' }}
        />
      </div>
    </>
  )
}
