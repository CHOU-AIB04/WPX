/**
 * ══════════════════════════════════════════════════════════════════════════
 *  SOURCE UNIQUE DE VÉRITÉ TARIFAIRE
 * ══════════════════════════════════════════════════════════════════════════
 *
 *  Tout ce qui s'affiche en dirhams sur /tarifs et dans le simulateur sort
 *  de ce fichier. Rien n'est écrit en dur dans les composants.
 *
 *  ┌─ À AJUSTER ────────────────────────────────────────────────────────────
 *  │ 1. FX_USD_MAD      taux de conversion USD → MAD
 *  │ 2. MARGIN          marge appliquée aux coûts fournisseur
 *  │ 3. crmPlans[].monthly      ⚠ STRUCTURE À VALIDER (voir plus bas)
 *  │ 4. serviceRates[].setup    ⚠ STRUCTURE À VALIDER
 *  └────────────────────────────────────────────────────────────────────────
 *
 *  Les coûts fournisseur (SUPPLIER_COST_USD) sont des COÛTS D'ACHAT.
 *  Ils ne sont JAMAIS affichés tels quels : `toMad()` applique la marge et
 *  la conversion avant tout rendu. Le visiteur voit un prix, pas notre coût.
 */

/* ────────────────────────────────────────────────────── 1. les deux curseurs */

/** Taux de conversion USD → MAD. À revoir quand le dirham bouge. */
export const FX_USD_MAD = 10;

/** Multiplicateur appliqué aux coûts fournisseur (1.5 = +50%). */
export const MARGIN = 1;

/** Coût fournisseur en USD → prix client en MAD. */
export const toMad = (usd: number) => usd * MARGIN * FX_USD_MAD;

/* ─────────────────────────────────────────── 2. coûts fournisseur (en USD) */

export type Region = "ma" | "intl";
export type Complexity = "simple" | "standard" | "avance";

/**
 * Coûts d'achat réels, en USD. Les fourchettes viennent du fait que le prix
 * dépend de la complexité de la tâche et du nombre d'actions déclenchées.
 */
export const SUPPLIER_COST_USD = {
  /** Message template WhatsApp, à l'unité. Le Maroc est moins cher. */
  whatsapp: { ma: 0.05, intl: 0.11 },

  /** Email transactionnel : 2 $ pour 1 000 envois. */
  email: 2 / 1000,

  /** Chatbot, par message traité — 0,005 $ à 0,015 $ selon la complexité. */
  chatbot: {
    simple: [0.005, 0.008],
    standard: [0.008, 0.012],
    avance: [0.012, 0.015],
  },

  /** Agent vocal IA, à la minute — 0,12 $ à 0,40 $ selon la complexité. */
  voice: {
    simple: [0.12, 0.2],
    standard: [0.2, 0.3],
    avance: [0.3, 0.4],
  },

  /** Minute d'appel téléphonique sortant. */
  call: 0.1,

  /** Surcoût de l'enregistrement + transcription des appels (+25%). */
  callRecordingUplift: 0.25,
} as const;

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

/* ──────────────────────────────────────────────── 3. abonnement WePushX CRM */

export type CrmPlan = {
  id: string;
  name: string;
  /** ⚠ STRUCTURE À VALIDER — remplacer par les vrais paliers. */
  monthly: number;
  setup: number;
  pitch: string;
  seats: string;
  features: string[];
  popular?: boolean;
};

/**
 * ⚠ STRUCTURE À VALIDER
 * Trois paliers posés pour être cohérents avec les forfaits agence
 * (Starter 3.900 / Growth 6.900 / Scale 14.900). Change les trois nombres
 * `monthly` et les trois `setup` et tout le site suit.
 */
export const crmPlans: CrmPlan[] = [
  {
    id: "essentiel",
    name: "Essentiel",
    monthly: 700,
    setup: 1000,
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
    monthly: 1290,
    setup: 1000,
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
    monthly: 2490,
    setup: 1000,
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
  /** `0` = offert. */
  monthly: number;
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
    monthly: 0,
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
    monthly: 199,
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
    monthly: 380,
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
  /** ⚠ STRUCTURE À VALIDER */
  setup: number | null;
  monthly: number | null;
  /** Forfait agence à partir duquel c'est inclus. */
  includedFrom?: "Starter" | "Growth" | "Scale";
  unit: string;
  note: string;
  /** Variante sans chiffres, servie quand les montants sont masqués. */
  noteOffMarket?: string;
};

export const serviceRates: ServiceRate[] = [
  {
    id: "meta",
    name: "Meta Ads",
    setup: 2500,
    monthly: 2900,
    includedFrom: "Starter",
    unit: "/ mois",
    note: "Budget média payé directement à Meta, séparé de nos honoraires.",
  },
  {
    id: "google",
    name: "Google Ads",
    setup: 2500,
    monthly: 3200,
    includedFrom: "Growth",
    unit: "/ mois",
    note: "Search, Performance Max et YouTube. Budget média séparé.",
  },
  {
    id: "web",
    name: "Sites web & landing pages",
    setup: 3500,
    monthly: null,
    unit: "au projet",
    note: "Landing page dès 2.000 DH, site vitrine dès 3.500 DH, e-commerce dès 10.000 DH.",
    noteOffMarket: "Landing page, site vitrine ou boutique e-commerce. Chiffré au projet, selon le nombre de pages.",
  },
  {
    id: "seo",
    name: "SEO & GEO",
    setup: 3900,
    monthly: 3400,
    includedFrom: "Scale",
    unit: "/ mois",
    note: "Audit + technique le premier mois, puis contenu et netlinking en continu.",
  },
  {
    id: "ugc",
    name: "UGC par IA",
    setup: null,
    monthly: 2500,
    unit: "/ pack de 5 vidéos",
    note: "Scripts, voix off et montage inclus. Darija, français ou anglais.",
  },
  {
    id: "social",
    name: "Social Media Management",
    setup: null,
    monthly: 2900,
    unit: "/ mois",
    note: "12 publications par mois, community management inclus.",
  },
];

/* ───────────────────────────────────────── 5. le moteur du simulateur */

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
  /** Prix client en MAD, fourchette basse et haute (égales si prix fixe). */
  min: number;
  max: number;
};

export type SimResult = {
  lines: SimLine[];
  min: number;
  max: number;
};

const band = (r: readonly [number, number] | number[]): [number, number] => [r[0], r[1]];

/**
 * Calcule la consommation mensuelle, en MAD, prix client (marge incluse).
 * Fonction pure : testable, et utilisable côté serveur comme côté client.
 */
export function simulate(i: SimInput): SimResult {
  const C = SUPPLIER_COST_USD;
  const lines: SimLine[] = [];

  const push = (id: string, label: string, detail: string, usdMin: number, usdMax: number) => {
    if (usdMax <= 0) return;
    lines.push({ id, label, detail, min: toMad(usdMin), max: toMad(usdMax) });
  };

  const n = (v: number) => v.toLocaleString("fr-FR").replace(/ | | /g, " ");

  if (i.whatsapp > 0) {
    const u = C.whatsapp[i.region];
    push(
      "whatsapp",
      "Messages WhatsApp",
      `${n(i.whatsapp)} messages · ${regionLabels[i.region]}`,
      i.whatsapp * u,
      i.whatsapp * u,
    );
  }

  if (i.email > 0) {
    push("email", "Emails automatisés", `${n(i.email)} emails`, i.email * C.email, i.email * C.email);
  }

  if (i.chatbot > 0) {
    const [lo, hi] = band(C.chatbot[i.complexity]);
    push(
      "chatbot",
      "Chatbot IA",
      `${n(i.chatbot)} messages · complexité ${complexityLabels[i.complexity].name.toLowerCase()}`,
      i.chatbot * lo,
      i.chatbot * hi,
    );
  }

  const voiceAllowed = VOICE_REGIONS.includes(i.region);
  if (i.voice > 0 && voiceAllowed) {
    const [lo, hi] = band(C.voice[i.complexity]);
    push(
      "voice",
      "Agent vocal IA",
      `${n(i.voice)} minutes · complexité ${complexityLabels[i.complexity].name.toLowerCase()}`,
      i.voice * lo,
      i.voice * hi,
    );
  }

  if (i.call > 0) {
    const mult = i.recording ? 1 + C.callRecordingUplift : 1;
    push(
      "call",
      "Minutes d'appel",
      `${n(i.call)} minutes${i.recording ? " · enregistrement inclus" : ""}`,
      i.call * C.call * mult,
      i.call * C.call * mult,
    );
  }

  return {
    lines,
    min: lines.reduce((s, l) => s + l.min, 0),
    max: lines.reduce((s, l) => s + l.max, 0),
  };
}

/** Bornes des curseurs du simulateur. */
export const SLIDERS = {
  whatsapp: { min: 0, max: 20000, step: 250, def: 3000 },
  email: { min: 0, max: 100000, step: 1000, def: 10000 },
  chatbot: { min: 0, max: 50000, step: 500, def: 6000 },
  voice: { min: 0, max: 5000, step: 50, def: 600 },
  call: { min: 0, max: 5000, step: 50, def: 400 },
} as const;

/* ──────────────────────────────────────────────────────── 6. affichage */

/** Ce qu'on écrit à la place d'un montant quand on ne l'affiche pas. */
export const ON_REQUEST = "Sur devis";

/**
 * Une étiquette de prix contient-elle un vrai montant ?
 *
 * Le champ `Offer.price` mélange des montants (« À partir de 3.500 DH ») et
 * des mentions d'appartenance (« Inclus dans WePushX CRM »). Seules les
 * premières sont masquées hors Maroc : la seconde est une information utile,
 * pas un tarif.
 */
export const hasAmount = (label: string) => /\d/.test(label);

/** Format dirham du site : séparateur de milliers en point. */
export const dh = (n: number) =>
  Math.round(n)
    .toLocaleString("fr-FR")
    .replace(/[\s  ]/g, ".");

/** Prix client par unité, en MAD, pour le tableau « ce que ça coûte ». */
export const unitPrices = () => {
  const C = SUPPLIER_COST_USD;
  /** Décimale à la française : 1,88 et non 1.88, et pas de zéro inutile. */
  const r = (n: number, d = 2) => {
    let s = n.toFixed(d);
    if (s.includes(".")) s = s.replace(/0+$/, "").replace(/\.$/, "");
    return s.replace(".", ",");
  };
  return [
    {
      id: "whatsapp",
      label: "Message WhatsApp",
      unit: "par message envoyé",
      values: [
        { k: "Maroc", v: `${r(toMad(C.whatsapp.ma))} DH` },
        { k: "International", v: `${r(toMad(C.whatsapp.intl))} DH` },
      ],
      note: "Template validé par Meta. Les réponses entrantes dans la fenêtre de 24h sont gratuites.",
    },
    {
      id: "email",
      label: "Email automatisé",
      unit: "par 1 000 envois",
      values: [{ k: "Tous pays", v: `${r(toMad(C.email * 1000), 0)} DH` }],
      note: "Relances, confirmations, séquences. Domaine authentifié SPF / DKIM / DMARC inclus.",
    },
    {
      id: "chatbot",
      label: "Chatbot IA",
      // Exprimé au millier : à l'unité on afficherait 0,075 DH, illisible.
      unit: "par 1 000 messages traités",
      values: [
        { k: "Simple", v: `${r(toMad(C.chatbot.simple[0] * 1000), 0)} – ${r(toMad(C.chatbot.simple[1] * 1000), 0)} DH` },
        { k: "Standard", v: `${r(toMad(C.chatbot.standard[0] * 1000), 0)} – ${r(toMad(C.chatbot.standard[1] * 1000), 0)} DH` },
        { k: "Avancée", v: `${r(toMad(C.chatbot.avance[0] * 1000), 0)} – ${r(toMad(C.chatbot.avance[1] * 1000), 0)} DH` },
      ],
      note: "Le prix dépend de la complexité de la tâche et du nombre d'actions déclenchées à chaque message.",
    },
    {
      id: "voice",
      label: "Agent vocal IA",
      unit: "par minute de conversation",
      values: [
        { k: "Simple", v: `${r(toMad(C.voice.simple[0]))} – ${r(toMad(C.voice.simple[1]))} DH` },
        { k: "Standard", v: `${r(toMad(C.voice.standard[0]))} – ${r(toMad(C.voice.standard[1]))} DH` },
        { k: "Avancée", v: `${r(toMad(C.voice.avance[0]))} – ${r(toMad(C.voice.avance[1]))} DH` },
      ],
      note: "Disponible hors Maroc uniquement. Facturé à la minute de conversation réelle, pas à la sonnerie.",
    },
    {
      id: "call",
      label: "Minute d'appel",
      unit: "par minute sortante",
      values: [
        { k: "Sans enregistrement", v: `${r(toMad(C.call))} DH` },
        { k: "Avec enregistrement", v: `${r(toMad(C.call * (1 + C.callRecordingUplift)))} DH` },
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
        { k: "Réponses entrantes < 24h", v: "0 DH" },
        { k: "Contacts & pipeline", v: "0 DH" },
        { k: "Scénarios d'automatisation", v: "0 DH" },
      ],
      note: "Seuls les messages sortants, les minutes d'IA et les minutes d'appel sont comptés. Le reste est déjà dans l'abonnement.",
    },
  ];
};
