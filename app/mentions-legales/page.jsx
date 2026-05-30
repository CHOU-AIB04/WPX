// ── Mentions Légales & CGU — WePushX ─────────────────────────────────────────

export const metadata = {
  title: 'Mentions Légales & CGU | WePushX',
  description: 'Mentions légales, conditions générales d\'utilisation et conditions générales de vente de WePushX, agence marketing digital au Maroc.',
  alternates: { canonical: 'https://www.wepushx.com/mentions-legales' },
  robots: { index: true, follow: true },
}

const LAST_UPDATED = '25 mai 2025'
const COMPANY = 'WePushX'
const EMAIL = 'contact@wepushx.com'
const SITE = 'https://www.wepushx.com'

export default function MentionsLegalesPage() {
  return (
    <main style={{ background: '#000', minHeight: '100vh' }}>
      {/* Header */}
      <section
        className="relative"
        style={{ background: '#040404', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingTop: '5rem', paddingBottom: '3rem' }}
      >
        <div className="wrap-md">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#00F5FF' }}>
            Légal
          </p>
          <h1 className="font-display font-black text-3xl md:text-4xl mb-3">
            Mentions Légales & Conditions d&apos;Utilisation
          </h1>
          <p className="text-sm" style={{ color: '#555' }}>
            Dernière mise à jour : {LAST_UPDATED}
          </p>
        </div>
      </section>

      <section className="section-sm">
        <div className="wrap-md space-y-12">

          {/* ── BLOC 1 : Identification ────────────────────────────────────── */}
          <Block title="1. Identification de l'éditeur">
            <Row label="Société" value="WePushX" />
            <Row label="Forme juridique" value="Société commerciale" />
            <Row label="Siège social" value="30 N Gould St Ste N, Sheridan, WY 82801, États-Unis" />
            <Row label="Bureau opérationnel" value="Casablanca, Grand Casablanca-Settat, Maroc" />
            <Row label="Email" value={<a href={`mailto:${EMAIL}`} style={{ color: '#00F5FF' }}>{EMAIL}</a>} />
            <Row label="Site web" value={<a href={SITE} style={{ color: '#00F5FF' }}>{SITE}</a>} />
            <Row label="Directeur de publication" value="WePushX — Direction générale" />
          </Block>

          {/* ── BLOC 2 : Hébergement ──────────────────────────────────────── */}
          <Block title="2. Hébergement du site">
            <Row label="Hébergeur" value="Vercel Inc." />
            <Row label="Adresse" value="440 N Barranca Ave #4133, Covina, CA 91723, États-Unis" />
            <Row label="Site" value={<a href="https://vercel.com" target="_blank" rel="noopener noreferrer" style={{ color: '#00F5FF' }}>vercel.com</a>} />
            <P>
              Le site est hébergé sur l&apos;infrastructure cloud de Vercel, avec des serveurs distribués mondialement via un CDN (Content Delivery Network) garantissant disponibilité et performance.
            </P>
          </Block>

          {/* ── BLOC 3 : Propriété intellectuelle ────────────────────────── */}
          <Block title="3. Propriété intellectuelle">
            <P>
              L&apos;ensemble du contenu du site <strong>{SITE}</strong> — textes, images, logos, graphismes, vidéos, structure et code source — est la propriété exclusive de <strong>{COMPANY}</strong> ou de ses partenaires, et est protégé par les lois applicables en matière de propriété intellectuelle.
            </P>
            <P>
              Toute reproduction, distribution, modification, adaptation ou utilisation à des fins commerciales, totale ou partielle, sans autorisation écrite préalable de {COMPANY}, est strictement interdite et constitue une contrefaçon sanctionnée par la loi.
            </P>
            <P>
              Les marques et logos présents sur ce site sont des marques déposées ou propriétés de {COMPANY}. Leur utilisation sans autorisation est interdite.
            </P>
          </Block>

          {/* ── BLOC 4 : CGU ──────────────────────────────────────────────── */}
          <Block title="4. Conditions Générales d'Utilisation (CGU)">
            <SubTitle>4.1 Acceptation</SubTitle>
            <P>L&apos;accès et l&apos;utilisation du site impliquent l&apos;acceptation pleine et entière des présentes conditions. Si vous n&apos;acceptez pas ces conditions, veuillez ne pas utiliser ce site.</P>

            <SubTitle>4.2 Accès au site</SubTitle>
            <P>
              {COMPANY} s&apos;efforce d&apos;assurer la disponibilité du site 24h/24 et 7j/7. Toutefois, l&apos;accès peut être interrompu pour des raisons de maintenance, de mise à jour technique ou de force majeure. {COMPANY} ne peut être tenue responsable des interruptions de service.
            </P>

            <SubTitle>4.3 Utilisation autorisée</SubTitle>
            <P>Vous vous engagez à utiliser ce site uniquement à des fins légales et conformément aux présentes CGU. Sont notamment interdits :</P>
            <ul className="space-y-1 pl-4">
              {[
                'Toute utilisation frauduleuse, abusive ou non autorisée du site',
                'La collecte automatisée de données (scraping) sans autorisation écrite',
                'La transmission de contenus illicites, diffamatoires, ou portant atteinte aux droits de tiers',
                'Toute tentative d\'intrusion, de compromission ou d\'attaque du système informatique',
                'L\'usurpation d\'identité ou la représentation trompeuse de votre affiliation à WePushX',
              ].map((item, i) => (
                <li key={i} className="text-sm flex gap-2" style={{ color: '#777' }}>
                  <span style={{ color: '#00F5FF', flexShrink: 0 }}>✦</span>
                  {item}
                </li>
              ))}
            </ul>

            <SubTitle>4.4 Liens externes</SubTitle>
            <P>
              Ce site peut contenir des liens vers des sites tiers. {COMPANY} n&apos;est pas responsable du contenu de ces sites externes et n&apos;exerce aucun contrôle sur ces derniers. L&apos;établissement de liens vers {SITE} sans autorisation préalable écrite est interdit.
            </P>
          </Block>

          {/* ── BLOC 5 : CGV ──────────────────────────────────────────────── */}
          <Block title="5. Conditions Générales de Vente (CGV)">
            <SubTitle>5.1 Champ d&apos;application</SubTitle>
            <P>Les présentes CGV s&apos;appliquent à toutes les prestations de services commercialisées par {COMPANY} : gestion de campagnes publicitaires (Meta Ads, Google Ads), SEO, création de sites web, UGC IA, CRM automation et services associés.</P>

            <SubTitle>5.2 Commandes et devis</SubTitle>
            <P>
              Toute commande est précédée d&apos;un devis personnalisé. La commande est ferme à réception du devis signé (ou de la validation électronique) et du règlement de l&apos;acompte convenu. {COMPANY} se réserve le droit de refuser une commande pour motif légitime.
            </P>

            <SubTitle>5.3 Tarifs</SubTitle>
            <P>
              Les tarifs sont exprimés en Dirhams Marocains (MAD) ou en Dollars Américains (USD) hors taxes, sauf indication contraire. Ils sont susceptibles d&apos;être modifiés à tout moment — les modifications s&apos;appliquent aux nouvelles commandes uniquement. La TVA applicable dépend de la résidence fiscale du client.
            </P>

            <SubTitle>5.4 Modalités de paiement</SubTitle>
            <P>Les paiements sont acceptés par :</P>
            <ul className="space-y-1 pl-4 mb-3">
              {[
                'Virement bancaire (délai : 5 jours ouvrés)',
                'Carte bancaire via Stripe (Visa, Mastercard, American Express)',
                'Chèque (clients Maroc uniquement)',
              ].map((item, i) => (
                <li key={i} className="text-sm flex gap-2" style={{ color: '#777' }}>
                  <span style={{ color: '#00F5FF', flexShrink: 0 }}>✦</span>
                  {item}
                </li>
              ))}
            </ul>
            <P>
              Les paiements par carte sont traités de manière sécurisée par <strong>Stripe Inc.</strong> (certifié PCI DSS niveau 1). {COMPANY} ne stocke jamais vos informations de paiement.
            </P>
            <P>
              Sauf accord contraire, le règlement s&apos;effectue : 50% à la commande, 50% à la livraison pour les projets one-shot ; ou en mensualités pour les forfaits récurrents.
            </P>

            <SubTitle>5.5 Retards de paiement</SubTitle>
            <P>
              Tout retard de paiement entraîne l&apos;application de pénalités de retard au taux légal en vigueur, ainsi que le droit pour {COMPANY} de suspendre les prestations jusqu&apos;à régularisation complète. Des frais de recouvrement pourront être appliqués.
            </P>

            <SubTitle>5.6 Garantie résultats 60 jours</SubTitle>
            <P>
              {COMPANY} offre une garantie de remboursement de la commission de gestion si aucun lead qualifié n&apos;est généré dans les 60 premiers jours de gestion de campagnes publicitaires (forfaits Growth et Scale uniquement). Cette garantie est soumise aux conditions suivantes :
            </P>
            <ul className="space-y-1 pl-4">
              {[
                'Le client a appliqué les recommandations stratégiques de WePushX',
                'Le budget publicitaire minimum recommandé a été maintenu',
                'Le pixel/tracking a été correctement installé dès le départ',
                'La demande de remboursement est formulée par écrit dans les 10 jours suivant la fin du délai de 60 jours',
              ].map((item, i) => (
                <li key={i} className="text-sm flex gap-2" style={{ color: '#777' }}>
                  <span style={{ color: '#00F5FF', flexShrink: 0 }}>✦</span>
                  {item}
                </li>
              ))}
            </ul>
            <P style={{ marginTop: '0.75rem' }}>
              Le remboursement porte exclusivement sur la commission de gestion — les budgets publicitaires investis directement auprès de Meta ou Google ne sont pas remboursables.
            </P>

            <SubTitle>5.7 Résiliation</SubTitle>
            <P>
              Pour les forfaits mensuels, chaque partie peut résilier le contrat avec un préavis de 30 jours par email à {EMAIL}. Aucun remboursement prorata n&apos;est accordé pour le mois en cours au moment de la résiliation. Les projets one-shot ne sont pas résiliables après démarrage des travaux.
            </P>

            <SubTitle>5.8 Responsabilité</SubTitle>
            <P>
              {COMPANY} s&apos;engage à mettre en œuvre les meilleures pratiques du secteur pour atteindre les objectifs convenus. Toutefois, les performances publicitaires (CPL, ROAS, trafic SEO) dépendent de facteurs externes indépendants de notre volonté (algorithmes des plateformes, concurrence, saisonnalité). {COMPANY} est soumise à une obligation de moyens, et non de résultat, au-delà de la garantie 60 jours stipulée au 5.6.
            </P>
            <P>
              La responsabilité de {COMPANY} ne pourra excéder, pour tout préjudice confondu, le montant total des sommes effectivement encaissées au titre de la prestation en cause au cours des 3 derniers mois.
            </P>
          </Block>

          {/* ── BLOC 6 : Données personnelles ────────────────────────────── */}
          <Block title="6. Protection des données personnelles">
            <P>
              Le traitement de vos données personnelles est décrit en détail dans notre{' '}
              <a href="/politique-de-confidentialite" style={{ color: '#00F5FF' }}>
                Politique de Confidentialité
              </a>
              , accessible à tout moment depuis le bas de chaque page du site.
            </P>
            <P>
              En résumé : nous collectons uniquement les données nécessaires à l&apos;exécution de nos services. Nous ne vendons pas vos données. Vous disposez de droits d&apos;accès, de rectification et d&apos;effacement que vous pouvez exercer à {EMAIL}.
            </P>
          </Block>

          {/* ── BLOC 7 : Droit applicable ─────────────────────────────────── */}
          <Block title="7. Droit applicable et juridiction">
            <P>
              Les présentes mentions légales et CGU/CGV sont régies par le droit marocain (Loi n° 53-05 relative à l&apos;échange électronique de données juridiques, Loi 31-08 sur la protection du consommateur, Loi 09-08 sur la protection des données personnelles) et, à titre subsidiaire, par le droit américain pour les aspects relevant du siège social.
            </P>
            <P>
              En cas de litige, les parties s&apos;engagent à rechercher une solution amiable dans un délai de 30 jours. À défaut, les tribunaux compétents du ressort de Casablanca (Maroc) seront seuls compétents pour tout litige relatif à l&apos;interprétation ou à l&apos;exécution des présentes.
            </P>
          </Block>

          {/* ── BLOC 8 : Contact ──────────────────────────────────────────── */}
          <Block title="8. Contact">
            <P>
              Pour toute question relative aux présentes mentions légales, CGU ou CGV, contactez-nous :
            </P>
            <Row label="Email" value={<a href={`mailto:${EMAIL}`} style={{ color: '#00F5FF' }}>{EMAIL}</a>} />
            <Row label="Formulaire" value={<a href="/contact" style={{ color: '#00F5FF' }}>wepushx.com/contact</a>} />
            <Row label="Délai de réponse" value="Sous 48h ouvrées" />
          </Block>

        </div>
      </section>
    </main>
  )
}

// ── Sub-components ────────────────────────────────────────────────────────────

function Block({ title, children }) {
  return (
    <div style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '2.5rem' }}>
      <h2 className="font-display font-bold text-xl mb-6" style={{ color: '#fff' }}>
        {title}
      </h2>
      <div className="space-y-4">{children}</div>
    </div>
  )
}

function SubTitle({ children }) {
  return (
    <h3 className="font-semibold text-base mt-5 mb-2" style={{ color: '#ccc' }}>
      {children}
    </h3>
  )
}

function P({ children, style }) {
  return (
    <p className="text-sm leading-relaxed" style={{ color: '#777', ...style }}>
      {children}
    </p>
  )
}

function Row({ label, value }) {
  return (
    <div className="flex gap-4 text-sm py-2" style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
      <span className="w-40 flex-shrink-0 font-medium" style={{ color: '#555' }}>{label}</span>
      <span style={{ color: '#aaa' }}>{value}</span>
    </div>
  )
}
