// ── Politique de Confidentialité — WePushX ───────────────────────────────────

export const metadata = {
  title: 'Politique de Confidentialité | WePushX',
  description: 'Politique de confidentialité et protection des données personnelles de WePushX, agence marketing digital au Maroc.',
  alternates: { canonical: 'https://www.wepushx.com/politique-de-confidentialite' },
  robots: { index: true, follow: true },
}

const LAST_UPDATED = '25 mai 2025'
const COMPANY = 'WePushX'
const EMAIL = 'contact@wepushx.com'
const SITE = 'https://www.wepushx.com'

const sections = [
  {
    title: '1. Responsable du traitement des données',
    content: `Le responsable du traitement des données personnelles collectées sur le site ${SITE} est :\n\n**${COMPANY}**\nSiège social : 30 N Gould St Ste N, Sheridan, WY 82801, États-Unis\nBureau opérationnel : Casablanca, Maroc\nEmail : ${EMAIL}\n\nPour toute question relative à la présente politique ou à l'exercice de vos droits, vous pouvez nous contacter à l'adresse email ci-dessus.`,
  },
  {
    title: '2. Données collectées',
    content: `Nous collectons les données suivantes selon le contexte de votre utilisation du site :\n\n**Via le formulaire de contact et d'audit :**\n- Nom et prénom\n- Adresse email professionnelle\n- Numéro de téléphone (optionnel)\n- Nom de l'entreprise\n- Message et informations relatives à votre projet\n\n**Via la navigation :**\n- Adresse IP (anonymisée)\n- Type de navigateur et système d'exploitation\n- Pages visitées et durée de consultation\n- Source de trafic (référent)\n- Données de cookies (voir section 6)\n\n**Via les paiements (services payants) :**\nLes données de paiement (numéro de carte, etc.) sont traitées directement par notre prestataire de paiement sécurisé **Stripe Inc.** (stripe.com). WePushX ne stocke jamais vos informations bancaires.`,
  },
  {
    title: '3. Finalités du traitement',
    content: `Vos données personnelles sont utilisées aux fins suivantes :\n\n- **Répondre à vos demandes** : traitement des formulaires de contact, demandes d'audit et devis\n- **Gestion de la relation client** : suivi des projets, facturation, communications contractuelles\n- **Traitement des paiements** : facturation et encaissement via Stripe pour les services payants\n- **Amélioration du site** : analyse d'audience anonymisée via Google Analytics 4\n- **Marketing et remarketing** : si vous y avez consenti, via Meta Pixel et Google Ads\n- **Obligation légale** : conservation des documents comptables et contractuels\n\nNous ne vendons, ne louons et ne partageons jamais vos données personnelles à des tiers à des fins commerciales.`,
  },
  {
    title: '4. Base légale du traitement',
    content: `Nos traitements reposent sur les bases légales suivantes :\n\n- **Exécution d'un contrat** : traitement nécessaire à la fourniture de nos services (devis, facturation, suivi)\n- **Consentement** : pour l'envoi de communications marketing et l'utilisation de cookies non essentiels\n- **Intérêt légitime** : pour l'analyse d'audience anonymisée et la sécurité du site\n- **Obligation légale** : conservation des données comptables conformément aux obligations fiscales applicables`,
  },
  {
    title: '5. Partage des données avec des tiers',
    content: `Nous partageons vos données uniquement avec les prestataires strictement nécessaires à nos services :\n\n| Prestataire | Finalité | Politique de confidentialité |\n|-------------|----------|------------------------------|\n| **Stripe Inc.** | Traitement des paiements | stripe.com/privacy |\n| **Google Analytics 4** | Analyse d'audience anonymisée | policies.google.com/privacy |\n| **Meta (Facebook Pixel)** | Mesure des conversions publicitaires | facebook.com/policy |\n| **Vercel Inc.** | Hébergement du site web | vercel.com/legal/privacy-policy |\n| **Supabase Inc.** | Base de données (articles blog) | supabase.com/privacy |\n\nTous nos prestataires sont soumis à des obligations contractuelles de confidentialité et ne peuvent utiliser vos données qu'aux fins spécifiées.`,
  },
  {
    title: '6. Cookies',
    content: `Notre site utilise des cookies pour améliorer votre expérience.\n\n**Cookies essentiels** (pas de consentement requis) :\n- Cookies de session pour le bon fonctionnement du site\n- Cookie de sécurité CSRF\n\n**Cookies analytiques** (soumis à consentement) :\n- Google Analytics 4 : mesure d'audience anonymisée (_ga, _gid)\n\n**Cookies marketing** (soumis à consentement) :\n- Meta Pixel : mesure des conversions publicitaires Facebook/Instagram\n- Google Ads : mesure des conversions et remarketing\n\nVous pouvez gérer vos préférences de cookies à tout moment via les paramètres de votre navigateur ou via notre bandeau de consentement. Le refus des cookies non essentiels n'affecte pas votre accès au site.`,
  },
  {
    title: '7. Durée de conservation',
    content: `Vos données sont conservées pendant les durées suivantes :\n\n- **Données de contact** : 3 ans à compter du dernier contact\n- **Données contractuelles et de facturation** : 10 ans (obligation légale comptable)\n- **Données analytiques** : 14 mois maximum (paramétrage Google Analytics 4)\n- **Logs de connexion** : 12 mois\n- **Données de consentement aux cookies** : 13 mois\n\nPassé ces délais, vos données sont supprimées ou anonymisées.`,
  },
  {
    title: '8. Vos droits',
    content: `Conformément au RGPD (Règlement Général sur la Protection des Données) et à la Loi 09-08 marocaine relative à la protection des données personnelles, vous disposez des droits suivants :\n\n- **Droit d'accès** : obtenir une copie de vos données personnelles\n- **Droit de rectification** : corriger des données inexactes ou incomplètes\n- **Droit à l'effacement** : demander la suppression de vos données\n- **Droit à la limitation** : restreindre le traitement de vos données\n- **Droit à la portabilité** : recevoir vos données dans un format structuré\n- **Droit d'opposition** : vous opposer à certains traitements (notamment le marketing)\n- **Droit de retrait du consentement** : à tout moment, sans affecter les traitements antérieurs\n\nPour exercer ces droits, contactez-nous à : **${EMAIL}**\nNous répondons à toute demande dans un délai maximum de 30 jours.`,
  },
  {
    title: '9. Sécurité des données',
    content: `WePushX met en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données :\n\n- Chiffrement HTTPS/TLS sur l'ensemble du site\n- Accès aux données restreint au personnel autorisé\n- Hébergement sur infrastructure sécurisée (Vercel)\n- Paiements traités exclusivement par Stripe (certifié PCI DSS)\n- Mots de passe hachés — nous ne stockons jamais vos mots de passe en clair\n\nEn cas de violation de données susceptible d'affecter vos droits, nous vous en informerons dans les délais légaux applicables.`,
  },
  {
    title: '10. Transferts internationaux',
    content: `Certains de nos prestataires (Stripe, Google, Vercel, Supabase) sont basés aux États-Unis. Ces transferts sont encadrés par des garanties appropriées : clauses contractuelles types approuvées par la Commission européenne et/ou mécanismes de certification reconnus (Privacy Shield successors, Data Privacy Framework).`,
  },
  {
    title: '11. Modifications de la politique',
    content: `Nous nous réservons le droit de modifier la présente politique à tout moment. Toute modification substantielle sera notifiée sur le site avec une mise à jour de la date en haut de cette page. Nous vous encourageons à consulter régulièrement cette page.\n\nDernière mise à jour : **${LAST_UPDATED}**`,
  },
  {
    title: '12. Contact',
    content: `Pour toute question, réclamation ou exercice de droits concernant vos données personnelles :\n\n📧 **${EMAIL}**\n🌐 **${SITE}/contact**\n\nSi vous estimez que vos droits ne sont pas respectés, vous pouvez également introduire une réclamation auprès de l'autorité de protection des données compétente dans votre pays.`,
  },
]

export default function PolitiqueConfidentialitePage() {
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
            Politique de Confidentialité
          </h1>
          <p className="text-sm" style={{ color: '#555' }}>
            Dernière mise à jour : {LAST_UPDATED}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-sm">
        <div className="wrap-md">
          {/* Intro */}
          <div
            className="rounded-2xl p-6 mb-10"
            style={{ background: 'rgba(0,245,255,0.04)', border: '1px solid rgba(0,245,255,0.12)' }}
          >
            <p className="text-sm leading-relaxed" style={{ color: '#aaa' }}>
              Chez <strong style={{ color: '#fff' }}>WePushX</strong>, la protection de votre vie privée est une priorité.
              Cette politique de confidentialité vous explique quelles données nous collectons, pourquoi nous les utilisons,
              avec qui nous les partageons et comment vous pouvez exercer vos droits.
              Elle s&apos;applique à toutes les interactions avec notre site web <strong style={{ color: '#fff' }}>{SITE}</strong>.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-10">
            {sections.map((section, i) => (
              <div key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '2rem' }}>
                <h2
                  className="font-display font-bold text-lg mb-4"
                  style={{ color: '#fff' }}
                >
                  {section.title}
                </h2>
                <div className="space-y-3">
                  {section.content.split('\n\n').map((block, j) => {
                    // Table detection
                    if (block.includes('|---')) {
                      const rows = block.trim().split('\n').filter(r => !r.match(/^\|[-\s|]+\|$/))
                      return (
                        <div key={j} className="overflow-x-auto">
                          <table className="w-full text-sm" style={{ borderCollapse: 'collapse' }}>
                            {rows.map((row, ri) => {
                              const cells = row.split('|').filter(c => c.trim())
                              const isHeader = ri === 0
                              return (
                                <tr
                                  key={ri}
                                  style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
                                >
                                  {cells.map((cell, ci) => {
                                    const Tag = isHeader ? 'th' : 'td'
                                    return (
                                      <Tag
                                        key={ci}
                                        className="py-2 px-3 text-left"
                                        style={{ color: isHeader ? '#ccc' : '#777', fontWeight: isHeader ? 600 : 400 }}
                                        dangerouslySetInnerHTML={{
                                          __html: cell.trim().replace(/\*\*(.+?)\*\*/g, '<strong style="color:#ccc">$1</strong>')
                                        }}
                                      />
                                    )
                                  })}
                                </tr>
                              )
                            })}
                          </table>
                        </div>
                      )
                    }
                    // Bold inline markdown
                    const html = block
                      .replace(/\*\*(.+?)\*\*/g, '<strong style="color:#ccc">$1</strong>')
                      .replace(/\n- /g, '</p><p class="flex gap-2 text-sm" style="color:#777">• ')
                      .replace(/^- /, '• ')
                    return (
                      <p
                        key={j}
                        className="text-sm leading-relaxed"
                        style={{ color: '#777' }}
                        dangerouslySetInnerHTML={{ __html: html }}
                      />
                    )
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Footer note */}
          <div className="mt-10 text-center">
            <p className="text-xs" style={{ color: '#444' }}>
              Des questions ? Contactez-nous à{' '}
              <a href={`mailto:${EMAIL}`} style={{ color: '#00F5FF' }}>{EMAIL}</a>
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
