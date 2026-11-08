/**
 * ══════════════════════════════════════════════════════════════════════════
 *  SOURCE UNIQUE DE VÉRITÉ TARIFAIRE
 * ══════════════════════════════════════════════════════════════════════════
 *
 *  Chaque montant affiché sur le site (pages, simulateur, FAQ, JSON-LD,
 *  meta descriptions, llms.txt, articles) sort du registre `PRICES`.
 *  Rien n'est écrit en dur ailleurs : changez un nombre ici, tout suit.
 *
 *  Règle d'affichage : tout prix est un prix plancher. Il s'affiche toujours
 *  « À partir de X MAD HT » (ou « … DH »), via <Price> ou `priceText()`.
 *  Le prix final est confirmé au devis, après l'audit.
 *
 *  Montants en MAD hors taxes, prix client (jamais un coût d'achat).
 */

/* ──────────────────────────────────────────────────────── 1. le registre */

export type PriceEntry = {
  id: string;
  label: string;
  /** Montant plancher, en MAD HT. */
  amount: number;
  /** « / mois », « une seule fois », « par message »… */
  unit: string;
  /** Toujours vrai : chaque prix est un « à partir de ». */
  startingFrom: true;
  note?: string;
  /** Quantité couverte par `amount` (ex. 1000 pour « par 1 000 envois »). */
  per?: number;
};

type Def = Omit<PriceEntry, "id" | "startingFrom">;

function define<K extends string>(defs: Record<K, Def>): Record<K, PriceEntry> {
  const out = {} as Record<K, PriceEntry>;
  for (const id of Object.keys(defs) as K[]) out[id] = { id, startingFrom: true, ...defs[id] };
  return out;
}

/* ─────────────────────────── consommation : coût fournisseur → prix client */

/**
 * Marge appliquée aux coûts fournisseur de la consommation (WhatsApp, email,
 * IA, appels). 2 = prix client deux fois le coût. Ex. : 1.7 pour +70 %.
 * C'est LE réglage à changer pour remonter ou baisser toute la grille.
 */
export const MARGIN = 1.7;

/** Taux de conversion USD → MAD. À revoir quand le dirham bouge. */
export const FX_USD_MAD = 10;

/**
 * Coûts d'achat réels, en USD, à l'unité. Jamais affichés : seul le prix
 * client (`fromCost`) sort de ce fichier. Valeurs planchers (« à partir de »).
 */
export const SUPPLIER_COST_USD = {
  /** Message marketing WhatsApp au Maroc : Meta facture ~0,041–0,042 $. */
  whatsappMa: 0.042,
  /** International : varie selon le pays de destination (grille Meta). */
  whatsappIntl: 0.11,
  /** TODO propriétaire : messages « utility » / « authentication » si facturés à part. */
  /** Email transactionnel : 2 $ les 1 000 envois. */
  email: 0.002,
  /** Chatbot, par message traité, selon la complexité. */
  chatbotSimple: 0.005,
  chatbotStandard: 0.008,
  chatbotAvance: 0.012,
  /** Agent vocal IA, à la minute, selon la complexité. */
  voiceSimple: 0.12,
  voiceStandard: 0.2,
  voiceAvance: 0.3,
  /** Minute d'appel sortant. */
  call: 0.1,
  /** Surcoût enregistrement + transcription (+25 %). */
  callRecordingUplift: 0.25,
} as const;

/**
 * Prix client en MAD HT pour `qty` unités : coût × taux × marge, arrondi
 * au-dessus (au centime sous 10 DH, au dirham au-delà) pour ne jamais vendre
 * sous la marge visée.
 */
function fromCost(usd: number, qty = 1) {
  const mad = usd * qty * FX_USD_MAD * MARGIN;
  return mad < 10 ? Math.ceil(mad * 100 - 1e-9) / 100 : Math.ceil(mad - 1e-9);
}

export const PRICES = define({
  /* — Forfaits agence (honoraires) ————————————————————————————— */
  planStarter: { label: "Forfait Starter", amount: 3900, unit: "/ mois" },
  planGrowth: { label: "Forfait Growth", amount: 6900, unit: "/ mois" },
  planScale: { label: "Forfait Scale", amount: 14900, unit: "/ mois" },

  /* — WePushX CRM —————————————————————————————————————————————— */
  crmEssentiel: { label: "WePushX CRM Essentiel", amount: 800, unit: "/ mois" },
  crmPro: { label: "WePushX CRM Pro", amount: 1290, unit: "/ mois" },
  crmScale: { label: "WePushX CRM Scale", amount: 2490, unit: "/ mois" },
  crmSetup: { label: "Mise en place CRM", amount: 1000, unit: "une seule fois" },

  /* — Agents IA (par agent déployé) ———————————————————————————— */
  agentCrm: { label: "Agent — CRM & Suivi", amount: 199, unit: "/ mois" },
  agentEcosysteme: { label: "Agent — Écosystème complet", amount: 380, unit: "/ mois" },

  /* — Services à la carte ——————————————————————————————————————— */
  metaSetup: { label: "Meta Ads — mise en place", amount: 2500, unit: "une seule fois" },
  metaMonthly: { label: "Meta Ads — gestion", amount: 2900, unit: "/ mois" },
  googleSetup: { label: "Google Ads — mise en place", amount: 2500, unit: "une seule fois" },
  googleMonthly: { label: "Google Ads — gestion", amount: 3200, unit: "/ mois" },
  seoSetup: { label: "SEO & GEO — audit et technique", amount: 3900, unit: "une seule fois" },
  seoMonthly: { label: "SEO & GEO — suivi", amount: 3400, unit: "/ mois" },
  ugcPack: { label: "Pack UGC IA", amount: 2500, unit: "/ pack de 5 vidéos" },
  socialMonthly: { label: "Social Media Management", amount: 2900, unit: "/ mois" },

  /* — Projets one-shot ——————————————————————————————————————————— */
  landingPage: { label: "Landing page", amount: 2000, unit: "au projet" },
  siteVitrine: { label: "Site vitrine", amount: 3500, unit: "au projet" },
  logoCharte: { label: "Logo + charte", amount: 4000, unit: "au projet" },
  siteEcommerce: { label: "Site e-commerce", amount: 10000, unit: "au projet" },

  /* — Consommation : prix client = coût fournisseur × taux × marge (voir plus haut). */
  whatsappMa: { label: "Message WhatsApp — Maroc", amount: fromCost(SUPPLIER_COST_USD.whatsappMa), unit: "par message" },
  whatsappIntl: {
    label: "Message WhatsApp — International",
    amount: fromCost(SUPPLIER_COST_USD.whatsappIntl),
    unit: "par message",
    note: "selon le pays de destination",
  },
  email: { label: "Email automatisé", amount: fromCost(SUPPLIER_COST_USD.email, 1000), unit: "par 1 000 envois", per: 1000 },
  chatbotSimple: { label: "Chatbot IA — simple", amount: fromCost(SUPPLIER_COST_USD.chatbotSimple, 1000), unit: "par 1 000 messages", per: 1000 },
  chatbotStandard: { label: "Chatbot IA — standard", amount: fromCost(SUPPLIER_COST_USD.chatbotStandard, 1000), unit: "par 1 000 messages", per: 1000 },
  chatbotAvance: { label: "Chatbot IA — avancée", amount: fromCost(SUPPLIER_COST_USD.chatbotAvance, 1000), unit: "par 1 000 messages", per: 1000 },
  voiceSimple: { label: "Agent vocal IA — simple", amount: fromCost(SUPPLIER_COST_USD.voiceSimple), unit: "par minute" },
  voiceStandard: { label: "Agent vocal IA — standard", amount: fromCost(SUPPLIER_COST_USD.voiceStandard), unit: "par minute" },
  voiceAvance: { label: "Agent vocal IA — avancée", amount: fromCost(SUPPLIER_COST_USD.voiceAvance), unit: "par minute" },
  call: { label: "Minute d'appel", amount: fromCost(SUPPLIER_COST_USD.call), unit: "par minute" },
  callRecorded: {
    label: "Minute d'appel enregistrée",
    amount: fromCost(SUPPLIER_COST_USD.call * (1 + SUPPLIER_COST_USD.callRecordingUplift)),
    unit: "par minute",
  },
});

export type PriceId = keyof typeof PRICES;

/** Remise sur l'engagement annuel des forfaits agence. */
export const ANNUAL_DISCOUNT = 0.15;

/** Budget média mensuel recommandé (payé à Meta / Google, hors honoraires). */
export const RECOMMENDED_MEDIA_BUDGET = 3000;

/* ──────────────────────────────────────────────────────── 2. affichage */

export const FROM = "À partir de";

export const PRICE_DISCLAIMER =
  "Tarifs indicatifs à partir de. Le prix final dépend de votre configuration (utilisateurs, canaux, volumes, agents IA) et est confirmé dans votre devis personnalisé.";

export const WHATSAPP_NOTE =
  "Tarifs alignés sur la grille Meta en vigueur. Les conversations de service (réponses dans la fenêtre de 24h) restent gratuites.";

/** Ce qu'on écrit à la place d'un montant quand on ne l'affiche pas. */
export const ON_REQUEST = "Sur devis";

export type Currency = "MAD HT" | "DH";

/** Format dirham du site : séparateur de milliers en point. */
export const dh = (n: number) =>
  Math.round(n)
    .toLocaleString("fr-FR")
    .replace(/[\s  ]/g, ".");

/** Montant formaté : 1.290 · 0,60 · 1,25. */
export const formatAmount = (n: number) =>
  Number.isInteger(n) ? dh(n) : n.toFixed(2).replace(".", ",");

/** « / mois » se colle, « une seule fois » se détache par une virgule. */
export const unitSuffix = (unit: string) => (!unit ? "" : unit === "une seule fois" ? `, ${unit}` : ` ${unit}`);

export type PriceTextOpts = {
  currency?: Currency;
  /** Afficher l'unité (« / mois »…). Vrai par défaut. */
  unit?: boolean;
  /** « à partir de » en minuscule, pour le milieu d'une phrase. */
  lower?: boolean;
  /** Remplace le montant du registre (ex. tarif annuel remisé). */
  amount?: number;
};

/** « À partir de 800 MAD HT / mois » — la seule formulation autorisée. */
export function priceText(id: PriceId, o: PriceTextOpts = {}) {
  const e = PRICES[id];
  const from = o.lower ? FROM.toLowerCase() : FROM;
  const amount = formatAmount(o.amount ?? e.amount);
  return `${from} ${amount} ${o.currency ?? "MAD HT"}${o.unit === false ? "" : unitSuffix(e.unit)}`;
}

/** Les prix de projet se lisent sans unité : « À partir de 3.500 DH ». */
export const hasDisplayUnit = (id: PriceId) => PRICES[id].unit !== "au projet";

/**
 * Étiquette de prix d'une offre (service ou brique de la plateforme).
 * Hors Maroc (`showPrices` faux), seules les mentions sans montant restent.
 */
export function offerPriceText(o: { priceId?: PriceId; priceLabel?: string }, showPrices = true): string | null {
  if (o.priceId) return showPrices ? priceText(o.priceId, { currency: "DH", unit: hasDisplayUnit(o.priceId) }) : null;
  return o.priceLabel ?? null;
}

/** Prix « / mois » remisé pour l'engagement annuel. */
export const annualAmount = (id: PriceId) => Math.round(PRICES[id].amount * (1 - ANNUAL_DISCOUNT));

/** Spécification schema.org cohérente avec « à partir de » : minPrice. */
export function priceSpecLd(id: PriceId) {
  const e = PRICES[id];
  const unitText = e.unit === "/ mois" ? "MONTH" : undefined;
  return {
    "@type": "UnitPriceSpecification",
    minPrice: e.amount,
    price: e.amount,
    priceCurrency: "MAD",
    valueAddedTaxIncluded: false,
    ...(unitText ? { unitText } : {}),
  };
}

/** Offre schema.org complète pour une entrée du registre. */
export const offerLd = (id: PriceId, extra: Record<string, unknown> = {}) => ({
  "@type": "Offer",
  name: PRICES[id].label,
  priceCurrency: "MAD",
  priceSpecification: priceSpecLd(id),
  ...extra,
});

/* ──────────────────────────────────────────────── 3. abonnement WePushX CRM */

export type CrmPlan = {
  id: string;
  name: string;
  priceId: PriceId;
  setupId: PriceId;
  pitch: string;
  seats: string;
  features: string[];
  popular?: boolean;
};

export const crmPlans: CrmPlan[] = [
  {
    id: "essentiel",
    name: "Essentiel",
    priceId: "crmEssentiel",
    setupId: "crmSetup",
    pitch: "Le CRM, le pipeline et les relances automatiques. De quoi ne plus perdre un seul lead.",
    seats: "3 utilisateurs",
    features: [
      "Pipeline & fiches contacts illimités",
      "Automatisations : 10 scénarios actifs",
      "WhatsApp + email + SMS dans une seule boîte",
      "Calendriers & réservation en ligne",
      "Chat widget sur votre site",
      "Application mobile iOS / Android",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    priceId: "crmPro",
    setupId: "crmSetup",
    popular: true,
    pitch: "On ajoute l'IA : le chatbot qualifie, score et réserve pendant que vous dormez.",
    seats: "10 utilisateurs",
    features: [
      "Tout Essentiel, sans limite de scénarios",
      "Conversation AI (FR, EN, darija)",
      "Social Planner : 8 réseaux, un calendrier",
      "Ad Manager : Meta, Google, LinkedIn",
      "Funnels, sites & boutiques",
      "Avis Google pilotés par l'IA",
      "Rapports & tableaux de bord",
    ],
  },
  {
    id: "scale",
    name: "Scale",
    priceId: "crmScale",
    setupId: "crmSetup",
    pitch: "Agents vocaux, formations, webinaires et AI Studio. La plateforme entière, sans plafond.",
    seats: "Utilisateurs illimités",
    features: [
      "Tout Pro, sans plafond",
      "Agents vocaux IA sortants & entrants",
      "Formations & communautés",
      "Webinaires et replays",
      "AI Studio : générez vos agents",
      "Hébergement WordPress inclus",
      "Accompagnement dédié + support prioritaire",
    ],
  },
];

/* ────────────────────────────────────────────── 3 bis. packs Agents IA */

export type AgentPack = {
  id: string;
  /** Rang affiché dans la pastille. */
  step: number;
  name: string;
  /** Absent = offert. */
  priceId?: PriceId;
  pitch: string;
  features: string[];
  /** Le palier qui regroupe tout : carte inversée, comme sur la plaquette. */
  flagship?: boolean;
  badge?: string;
};

/**
 * Les trois agents conversationnels, cumulatifs : chaque palier contient le
 * précédent. Tarifs mensuels, par agent déployé.
 */
export const agentPacks: AgentPack[] = [
  {
    id: "accueil",
    step: 1,
    name: "Agent — Accueil",
    pitch: "Il répond, il qualifie, il réserve. Sur tous vos canaux, sans interruption.",
    features: [
      "Répond aux clients 24/7",
      "Qualifie automatiquement les prospects",
      "Actif sur site, WhatsApp, Instagram, Facebook",
      "Prend rendez-vous avec les prospects qualifiés",
    ],
  },
  {
    id: "crm",
    step: 2,
    name: "Agent — CRM & Suivi",
    priceId: "agentCrm",
    pitch: "Il écrit dans le CRM, relance, et sait quand passer la main à un humain.",
    features: [
      "Met à jour statut & infos client sur le CRM",
      "Transfert humain sur cas particuliers (mail + WhatsApp)",
      "Follow-up, changement de stage, export Excel",
      "Relances mail & WhatsApp jusqu'au RDV / achat",
    ],
  },
  {
    id: "ecosysteme",
    step: 3,
    name: "Agent — Écosystème complet",
    priceId: "agentEcosysteme",
    flagship: true,
    badge: "Regroupe tout",
    pitch: "Plusieurs bots coordonnés, un seul interlocuteur perçu par le client.",
    features: [
      "Transfert intelligent multi-départements",
      "Liens trackés vers site, LP ou calendrier",
      "Un seul interlocuteur du 1er message à l'achat",
      "Plusieurs bots coordonnés en coulisses",
      "Réservation dans plusieurs calendriers",
      "Résumé de conversation envoyé par e-mail",
    ],
  },
];

/* ──────────────────────────────────────────────── 4. tarifs par service */

export type ServiceRate = {
  /** Correspond à `Offer.id` dans content.ts. */
  id: string;
  name: string;
  setupId: PriceId | null;
  monthlyId: PriceId | null;
  /** Forfait agence à partir duquel c'est inclus. */
  includedFrom?: "Starter" | "Growth" | "Scale";
  note: string;
  /** Variante sans chiffres, servie quand les montants sont masqués. */
  noteOffMarket?: string;
};

const lowerFrom = (id: PriceId) => priceText(id, { lower: true, currency: "DH", unit: false });

export const serviceRates: ServiceRate[] = [
  {
    id: "meta",
    name: "Meta Ads",
    setupId: "metaSetup",
    monthlyId: "metaMonthly",
    includedFrom: "Starter",
    note: "Budget média payé directement à Meta, séparé de nos honoraires.",
  },
  {
    id: "google",
    name: "Google Ads",
    setupId: "googleSetup",
    monthlyId: "googleMonthly",
    includedFrom: "Growth",
    note: "Search, Performance Max et YouTube. Budget média séparé.",
  },
  {
    id: "web",
    name: "Sites web & landing pages",
    setupId: "siteVitrine",
    monthlyId: null,
    note: `Landing page ${lowerFrom("landingPage")}, site vitrine ${lowerFrom("siteVitrine")}, e-commerce ${lowerFrom("siteEcommerce")}.`,
    noteOffMarket: "Landing page, site vitrine ou boutique e-commerce. Chiffré au projet, selon le nombre de pages.",
  },
  {
    id: "seo",
    name: "SEO & GEO",
    setupId: "seoSetup",
    monthlyId: "seoMonthly",
    includedFrom: "Scale",
    note: "Audit + technique le premier mois, puis contenu et netlinking en continu.",
  },
  {
    id: "ugc",
    name: "UGC par IA",
    setupId: null,
    monthlyId: "ugcPack",
    note: "Scripts, voix off et montage inclus. Darija, français ou anglais.",
  },
  {
    id: "social",
    name: "Social Media Management",
    setupId: null,
    monthlyId: "socialMonthly",
    note: "12 publications par mois, community management inclus.",
  },
];

/* ───────────────────────────────────────── 5. le moteur du simulateur */

export type Region = "ma" | "intl";
export type Complexity = "simple" | "standard" | "avance";

/** L'agent vocal n'est pas commercialisé au Maroc. */
export const VOICE_REGIONS: Region[] = ["intl"];

export const regionLabels: Record<Region, string> = {
  ma: "Maroc",
  intl: "International",
};

export const complexityLabels: Record<Complexity, { name: string; hint: string }> = {
  simple: { name: "Simple", hint: "Questions fréquentes, prise de RDV, réponses courtes." },
  standard: { name: "Standard", hint: "Qualification, scoring, écriture dans le CRM." },
  avance: { name: "Avancée", hint: "Plusieurs outils interrogés, logique conditionnelle, mémoire longue." },
};

const WHATSAPP_ID: Record<Region, PriceId> = { ma: "whatsappMa", intl: "whatsappIntl" };
const CHATBOT_ID: Record<Complexity, PriceId> = {
  simple: "chatbotSimple",
  standard: "chatbotStandard",
  avance: "chatbotAvance",
};
const VOICE_ID: Record<Complexity, PriceId> = {
  simple: "voiceSimple",
  standard: "voiceStandard",
  avance: "voiceAvance",
};

/** Coût plancher de `qty` unités d'une entrée de consommation. */
const cost = (id: PriceId, qty: number) => (qty / (PRICES[id].per ?? 1)) * PRICES[id].amount;

export type SimInput = {
  region: Region;
  complexity: Complexity;
  /** Messages WhatsApp automatisés envoyés par mois. */
  whatsapp: number;
  /** Emails automatisés envoyés par mois. */
  email: number;
  /** Messages traités par le chatbot par mois. */
  chatbot: number;
  /** Minutes d'agent vocal IA par mois. */
  voice: number;
  /** Minutes d'appels téléphoniques par mois. */
  call: number;
  /** Enregistrement + transcription des appels. */
  recording: boolean;
};

export type SimLine = {
  id: string;
  label: string;
  /** Ex. « 4 000 messages ». */
  detail: string;
  /** Montant plancher, en MAD HT. */
  amount: number;
};

export type SimResult = { lines: SimLine[]; total: number };

/**
 * Consommation mensuelle plancher, en MAD HT. Lit les mêmes entrées que la
 * grille affichée : simulateur et tableau ne peuvent pas diverger.
 */
export function simulate(i: SimInput): SimResult {
  const lines: SimLine[] = [];
  const n = (v: number) => v.toLocaleString("fr-FR").replace(/[\s  ]/g, " ");
  const cx = complexityLabels[i.complexity].name.toLowerCase();
  const push = (id: string, label: string, detail: string, amount: number) => {
    if (amount > 0) lines.push({ id, label, detail, amount });
  };

  push("whatsapp", "Messages WhatsApp", `${n(i.whatsapp)} messages · ${regionLabels[i.region]}`, cost(WHATSAPP_ID[i.region], i.whatsapp));
  push("email", "Emails automatisés", `${n(i.email)} emails`, cost("email", i.email));
  push("chatbot", "Chatbot IA", `${n(i.chatbot)} messages · complexité ${cx}`, cost(CHATBOT_ID[i.complexity], i.chatbot));
  if (VOICE_REGIONS.includes(i.region)) {
    push("voice", "Agent vocal IA", `${n(i.voice)} minutes · complexité ${cx}`, cost(VOICE_ID[i.complexity], i.voice));
  }
  push(
    "call",
    "Minutes d'appel",
    `${n(i.call)} minutes${i.recording ? " · enregistrement inclus" : ""}`,
    cost(i.recording ? "callRecorded" : "call", i.call),
  );

  return { lines, total: lines.reduce((s, l) => s + l.amount, 0) };
}

/** Bornes des curseurs du simulateur. */
export const SLIDERS = {
  whatsapp: { min: 0, max: 20000, step: 250, def: 3000 },
  email: { min: 0, max: 100000, step: 1000, def: 10000 },
  chatbot: { min: 0, max: 50000, step: 500, def: 6000 },
  voice: { min: 0, max: 5000, step: 50, def: 600 },
  call: { min: 0, max: 5000, step: 50, def: 400 },
} as const;

/* ──────────────────────────────────── 6. grille « ce que ça coûte » */

export type UnitCard = {
  id: string;
  label: string;
  unit: string;
  /** `id` → montant « à partir de » ; `text` → mention sans montant. */
  values: { k: string; id?: PriceId; text?: string }[];
  note: string;
};

export const unitCards: UnitCard[] = [
  {
    id: "whatsapp",
    label: "Message WhatsApp",
    unit: "par message envoyé",
    values: [
      { k: "Maroc", id: "whatsappMa" },
      { k: "International", id: "whatsappIntl" },
    ],
    note: `${WHATSAPP_NOTE} International : ${PRICES.whatsappIntl.note}.`,
  },
  {
    id: "email",
    label: "Email automatisé",
    unit: PRICES.email.unit,
    values: [{ k: "Tous pays", id: "email" }],
    note: "Relances, confirmations, séquences. Domaine authentifié SPF / DKIM / DMARC inclus.",
  },
  {
    id: "chatbot",
    label: "Chatbot IA",
    // Exprimé au millier : à l'unité on afficherait 0,05 DH, illisible.
    unit: "par 1 000 messages traités",
    values: [
      { k: "Simple", id: "chatbotSimple" },
      { k: "Standard", id: "chatbotStandard" },
      { k: "Avancée", id: "chatbotAvance" },
    ],
    note: "Le prix dépend de la complexité de la tâche et du nombre d'actions déclenchées à chaque message.",
  },
  {
    id: "voice",
    label: "Agent vocal IA",
    unit: "par minute de conversation",
    values: [
      { k: "Simple", id: "voiceSimple" },
      { k: "Standard", id: "voiceStandard" },
      { k: "Avancée", id: "voiceAvance" },
    ],
    note: "Disponible hors Maroc uniquement. Facturé à la minute de conversation réelle, pas à la sonnerie.",
  },
  {
    id: "call",
    label: "Minute d'appel",
    unit: "par minute sortante",
    values: [
      { k: "Sans enregistrement", id: "call" },
      { k: "Avec enregistrement", id: "callRecorded" },
    ],
    note: "L'enregistrement et la transcription ajoutent environ 25% au coût de la minute.",
  },
  {
    // Sixième carte : elle remplit la grille de 3×2 et répond à la question
    // que tout le monde se pose devant un tableau de coûts unitaires.
    id: "inclus",
    label: "Inclus, sans compteur",
    unit: "aucun coût à l'usage",
    values: [
      { k: "Réponses entrantes < 24h", text: "Inclus" },
      { k: "Contacts & pipeline", text: "Inclus" },
      { k: "Scénarios d'automatisation", text: "Inclus" },
    ],
    note: "Seuls les messages sortants, les minutes d'IA et les minutes d'appel sont comptés. Le reste est déjà dans l'abonnement.",
  },
];

/** Libellé d'une valeur de la grille (montant « à partir de », en DH). */
export const unitValueText = (v: UnitCard["values"][number]) =>
  v.id ? priceText(v.id, { currency: "DH", unit: false }) : (v.text ?? "");
