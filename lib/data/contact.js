export const contactInfo = [
  {
    icon: 'Mail',
    label: 'Email',
    value: 'contact@wepushx.com',
    href: 'mailto:contact@wepushx.com',
  },
  {
    icon: 'MapPin',
    label: 'Localisation',
    value: '30 N Gould St Ste N Sheridan, WY, 82801 USA',
    href: null,
  },
  {
    icon: 'Clock',
    label: 'Disponibilité',
    value: 'Lun–Sam, 9h–18h',
    href: null,
  },
]

export function getContactInfo(locale = 'fr') {
  const base = [
    { icon: 'Mail', label: 'Email', value: 'contact@wepushx.com', href: 'mailto:contact@wepushx.com' },
    { icon: 'MapPin', label: locale === 'en' ? 'Location' : locale === 'es' ? 'Ubicación' : 'Localisation', value: '30 N Gould St Ste N, Sheridan, WY 82801, USA', href: null },
    { icon: 'Clock', label: locale === 'en' ? 'Availability' : locale === 'es' ? 'Disponibilidad' : 'Disponibilité', value: locale === 'en' ? 'Mon–Sat, 9am–6pm' : locale === 'es' ? 'Lun–Sáb, 9am–6pm' : 'Lun–Sam, 9h–18h', href: null },
  ]
  return base
}

export const serviceOptions = [
  { value: '', label: 'Sélectionner un service…' },
  { value: 'meta-ads', label: 'Meta Ads & Facebook Ads' },
  { value: 'google-ads', label: 'Google Ads & SEA' },
  { value: 'site-web', label: 'Création de Site Web' },
  { value: 'seo', label: 'SEO & Référencement' },
  { value: 'ugc-ia', label: 'UGC par IA' },
  { value: 'crm', label: 'CRM & Marketing Automation' },
  { value: 'pack-complet', label: 'Pack Complet (Growth / Scale)' },
  { value: 'autre', label: 'Autre / Je ne sais pas encore' },
]

export function getServiceOptions(locale = 'fr') {
  if (locale === 'en') return [
    { value: '', label: 'Select a service…' },
    { value: 'meta-ads', label: 'Meta Ads & Facebook Ads' },
    { value: 'google-ads', label: 'Google Ads & SEA' },
    { value: 'site-web', label: 'Web Design' },
    { value: 'seo', label: 'SEO & Search Optimization' },
    { value: 'ugc-ia', label: 'AI UGC Videos' },
    { value: 'crm', label: 'CRM & Marketing Automation' },
    { value: 'pack-complet', label: 'Full Package (Growth / Scale)' },
    { value: 'autre', label: 'Other / Not sure yet' },
  ]
  if (locale === 'es') return [
    { value: '', label: 'Seleccionar un servicio…' },
    { value: 'meta-ads', label: 'Meta Ads & Facebook Ads' },
    { value: 'google-ads', label: 'Google Ads & SEA' },
    { value: 'site-web', label: 'Diseño Web' },
    { value: 'seo', label: 'SEO & Posicionamiento' },
    { value: 'ugc-ia', label: 'Videos UGC con IA' },
    { value: 'crm', label: 'CRM & Automatización de Marketing' },
    { value: 'pack-complet', label: 'Paquete Completo (Growth / Scale)' },
    { value: 'autre', label: 'Otro / Aún no lo sé' },
  ]
  return serviceOptions
}

export const budgets = [
  { value: '', label: 'Budget mensuel…' },
  { value: 'moins-3500', label: 'Moins de 3 500 MAD/mois' },
  { value: '3500-7000', label: '3 500 – 7 000 MAD/mois' },
  { value: '7000-15000', label: '7 000 – 15 000 MAD/mois' },
  { value: 'plus-15000', label: 'Plus de 15 000 MAD/mois' },
  { value: 'one-shot', label: 'Projet one-shot uniquement' },
]

export function getBudgets(locale = 'fr') {
  if (locale === 'en') return [
    { value: '', label: 'Monthly budget…' },
    { value: 'moins-500', label: 'Under $500/mo' },
    { value: '500-1000', label: '$500 – $1,000/mo' },
    { value: '1000-2000', label: '$1,000 – $2,000/mo' },
    { value: 'plus-2000', label: 'Over $2,000/mo' },
    { value: 'one-shot', label: 'One-time project only' },
  ]
  if (locale === 'es') return [
    { value: '', label: 'Presupuesto mensual…' },
    { value: 'menos-500', label: 'Menos de $500/mes' },
    { value: '500-1000', label: '$500 – $1,000/mes' },
    { value: '1000-2000', label: '$1,000 – $2,000/mes' },
    { value: 'mas-2000', label: 'Más de $2,000/mes' },
    { value: 'one-shot', label: 'Solo proyecto único' },
  ]
  return budgets
}

export const guaranteePoints = [
  'Remboursement 100% si 0 lead en 60 jours',
  'Réponse sous 24h ouvrées garantie',
  'Audit gratuit sans engagement',
  'Contrat transparent, sans clause abusive',
]

export function getGuaranteePoints(locale = 'fr') {
  if (locale === 'en') return [
    '100% refund if 0 leads in 60 days',
    'Guaranteed response within 24 business hours',
    'Free audit, no commitment',
    'Transparent contract, no hidden clauses',
  ]
  if (locale === 'es') return [
    'Reembolso 100% si 0 leads en 60 días',
    'Respuesta garantizada en 24 horas hábiles',
    'Auditoría gratuita, sin compromiso',
    'Contrato transparente, sin cláusulas ocultas',
  ]
  return guaranteePoints
}
