import type { Offer } from "./offer";

/**
 * Les 12 briques de la plateforme WePushX CRM.
 * Tout le texte des pages /plateforme/<slug> vit ici.
 */
export const platformFeatures: Offer[] = [
  {
    id: "automations",
    slug: "automatisations",
    kind: "platform",
    name: "Automatisations",
    kicker: "Le cerveau de la machine",
    body: "Construisez vos scénarios à la souris : un déclencheur, des conditions, des actions. Relances WhatsApp, emails, changement de pipeline, notification à l'équipe — tout part tout seul, jour et nuit.",
    bullets: [
      "Éditeur visuel : glisser, déposer, relier",
      "Déclencheurs formulaire, appel, RDV, étape de pipeline",
      "Conditions et branches si / sinon",
      "Attentes en minutes, heures ou jours ouvrés",
      "Historique d'exécution pas à pas",
    ],
    tags: ["Workflows", "WhatsApp", "Email", "Sans code"],
    price: "Inclus dans WePushX CRM",
    demo: "automations",
    seo: {
      title: "Automatisations CRM : relances WhatsApp et email automatiques",
      description:
        "Créez vos scénarios de relance en glisser-déposer : déclencheurs, conditions, attentes, WhatsApp et email. Zéro lead oublié, 24h/24.",
    },
    hero: {
      lines: ["Vos relances", "tournent sans vous."],
      sub: "Un lead arrive à 23h un samedi. Il reçoit son message dans la minute, il est qualifié, et lundi matin le RDV est déjà dans votre agenda.",
    },
    proof: [
      { value: 24, suffix: "h/24", label: "de relance active", detail: "Nuits, week-ends et jours fériés compris" },
      { value: 8, suffix: " min", label: "de délai moyen de réponse", detail: "Contre 9h en traitement manuel" },
      { value: 0, label: "lead perdu", detail: "Chaque entrée déclenche un scénario" },
    ],
    process: [
      { title: "On cartographie votre cycle de vente", body: "Comment un inconnu devient client chez vous, étape par étape, avec vos vrais délais." },
      { title: "On construit les scénarios", body: "Relance J+0, J+2, J+7, no-show, panier abandonné, demande de devis restée sans réponse." },
      { title: "On teste sur de vrais leads", body: "Chaque branche est vérifiée avant activation. Vous voyez l'historique d'exécution en direct." },
      { title: "On ajuste sur les données", body: "Les scénarios qui convertissent sont renforcés, les autres réécrits." },
    ],
    faq: [
      { q: "Faut-il savoir coder ?", a: "Non. L'éditeur est visuel : vous reliez des blocs entre eux. Et de toute façon, nous construisons vos scénarios pour vous." },
      { q: "Ça marche vraiment sur WhatsApp ?", a: "Oui, via WhatsApp Business officiel. Les messages partent depuis votre numéro professionnel, pas depuis un numéro inconnu." },
      { q: "Combien de scénarios puis-je avoir ?", a: "Illimité. La plupart de nos clients tournent avec 6 à 12 scénarios actifs en permanence." },
    ],
  },
  {
    id: "conversation-ai",
    slug: "conversation-ai-et-agents-vocaux",
    kind: "platform",
    name: "Conversation AI & Agents vocaux",
    kicker: "Qualification automatique",
    body: "Une IA qui répond en français, en anglais et en darija, qualifie le prospect, propose un créneau et remplit la fiche CRM. En chat comme au téléphone.",
    bullets: [
      "Chatbot IA sur WhatsApp, site et Messenger",
      "Agent vocal pour appels entrants et sortants",
      "Scoring chaud / tiède / froid automatique",
      "Prise de RDV directe dans l'agenda",
      "Passage à un humain quand c'est nécessaire",
    ],
    tags: ["IA", "Darija", "Voix", "Qualification"],
    price: "Inclus dans WePushX CRM",
    demo: "conversation",
    seo: {
      title: "Chatbot IA et agent vocal : qualifiez vos leads en darija et français",
      description:
        "Une IA qui répond, qualifie et prend le rendez-vous — sur WhatsApp, sur votre site et au téléphone. Français, anglais, darija.",
    },
    hero: {
      lines: ["Une IA qui vend", "dans la langue", "de vos clients."],
      sub: "Elle répond en quelques secondes, pose les bonnes questions, écarte les curieux et place les vrais prospects dans votre agenda.",
    },
    proof: [
      { value: 3, label: "langues maîtrisées", detail: "Français, anglais, darija marocaine" },
      { value: 70, prefix: "-", suffix: "%", label: "de temps commercial perdu", detail: "Les curieux ne remontent plus jusqu'à vous" },
      { value: 5, suffix: " s", label: "pour la première réponse", detail: "Le moment où le prospect est encore attentif" },
    ],
    process: [
      { title: "On écrit la personnalité", body: "Ton, vocabulaire, ce que l'agent a le droit de dire et de promettre. Votre marque, pas un robot générique." },
      { title: "On définit la qualification", body: "Les questions qui séparent un vrai prospect d'un curieux dans votre métier." },
      { title: "On branche l'agenda et le CRM", body: "L'IA réserve un créneau réel et remplit la fiche. Aucune ressaisie." },
      { title: "On écoute et on corrige", body: "Les conversations sont relues chaque semaine, le prompt est affiné." },
    ],
    faq: [
      { q: "Le client voit-il qu'il parle à une IA ?", a: "Nous recommandons la transparence : l'agent se présente comme assistant. C'est plus efficace et plus honnête, et les clients l'acceptent très bien." },
      { q: "Et si l'IA ne sait pas répondre ?", a: "Elle passe la main. Le fil est transféré à un humain avec tout l'historique, et vous recevez une notification." },
      { q: "L'agent vocal appelle-t-il aussi ?", a: "Oui, en entrant comme en sortant : rappel d'un lead, confirmation de RDV, relance d'un devis." },
    ],
  },
  {
    id: "social-planner",
    slug: "social-planner",
    kind: "platform",
    name: "Social Planner",
    kicker: "Huit réseaux, un calendrier",
    body: "Facebook, Instagram, Threads, LinkedIn, TikTok, YouTube, Pinterest et votre fiche Google, planifiés depuis un seul calendrier. Vous écrivez une fois, vous publiez partout.",
    bullets: [
      "8 plateformes connectées en un seul endroit",
      "Calendrier éditorial glisser-déposer",
      "File d'attente et créneaux récurrents",
      "Aperçu réel par réseau avant publication",
      "Statistiques de portée et d'engagement",
    ],
    tags: ["Instagram", "TikTok", "LinkedIn", "Planification"],
    price: "Inclus dans WePushX CRM",
    demo: "social-planner",
    seo: {
      title: "Social Planner : planifiez Instagram, TikTok, LinkedIn et GMB",
      description:
        "Un seul calendrier pour Facebook, Instagram, Threads, LinkedIn, TikTok, YouTube, Pinterest et Google Business Profile.",
    },
    hero: {
      lines: ["Huit réseaux.", "Un seul calendrier."],
      sub: "Fini les huit onglets et les publications oubliées. Un mois de contenu se programme en une matinée.",
    },
    proof: [
      { value: 8, label: "plateformes connectées", detail: "Meta, LinkedIn, TikTok, YouTube, Pinterest, Threads, GMB" },
      { value: 1, label: "matinée par mois", detail: "Pour programmer tout un calendrier éditorial" },
      { value: 100, suffix: "%", label: "des publications parties à l'heure", detail: "Même pendant vos congés" },
    ],
    process: [
      { title: "On connecte vos comptes", body: "Connexion officielle à chaque réseau. Vos accès restent les vôtres." },
      { title: "On pose le calendrier", body: "Rythme par réseau, créneaux récurrents, thématiques par jour." },
      { title: "On programme par lot", body: "Le mois entier est mis en file, avec l'aperçu exact de chaque réseau." },
      { title: "On lit les chiffres", body: "Ce qui marche est reproduit, ce qui ne marche pas est abandonné." },
    ],
    faq: [
      { q: "Les formats sont-ils adaptés par réseau ?", a: "Oui. Le texte, le format d'image et les hashtags peuvent être ajustés réseau par réseau depuis la même publication." },
      { q: "Puis-je programmer des Reels et des Stories ?", a: "Oui, ainsi que les vidéos TikTok, YouTube Shorts et les épingles Pinterest." },
      { q: "Et ma fiche Google ?", a: "Google Business Profile est traité comme un réseau : vos posts Google partent du même calendrier." },
    ],
  },
  {
    id: "ad-manager",
    slug: "ad-manager",
    kind: "platform",
    name: "Ad Manager",
    kicker: "Trois régies, un tableau",
    body: "Lancez et pilotez vos campagnes Facebook, Google et LinkedIn depuis une seule interface, avec le coût par lead réel — celui qui tient compte de ce que le CRM a vraiment encaissé.",
    bullets: [
      "Création de campagnes Meta, Google et LinkedIn",
      "Budgets et audiences modifiables au même endroit",
      "Coût par lead réel, pas seulement par clic",
      "Attribution jusqu'à la vente signée",
      "Alertes quand une campagne dérive",
    ],
    tags: ["Meta", "Google", "LinkedIn", "ROAS"],
    price: "Inclus dans WePushX CRM",
    demo: "ad-manager",
    seo: {
      title: "Ad Manager : gérez Facebook, Google et LinkedIn Ads au même endroit",
      description:
        "Lancez et pilotez vos campagnes sur trois régies depuis une seule interface, avec le coût par lead réel remonté du CRM.",
    },
    hero: {
      lines: ["Trois régies.", "Un seul chiffre", "qui compte."],
      sub: "Pas le coût par clic. Le coût par client signé — parce que la régie ne sait pas ce que votre CRM a encaissé, mais nous si.",
    },
    proof: [
      { value: 3, label: "régies pilotées", detail: "Meta, Google Ads, LinkedIn Ads" },
      { value: 1, label: "tableau de bord", detail: "Au lieu de trois interfaces et d'un tableur" },
      { value: 4.2, decimals: 1, suffix: "x", label: "ROAS moyen constaté", detail: "Sur nos comptes e-commerce accompagnés" },
    ],
    process: [
      { title: "On branche le tracking", body: "Pixel, API de conversions, GA4, identifiants de clic. Sans ça, aucun chiffre n'est fiable." },
      { title: "On relie la dépense au revenu", body: "Chaque lead garde la trace de la campagne qui l'a amené, jusqu'à la signature." },
      { title: "On coupe ce qui coûte", body: "Les campagnes sans retour sont arrêtées, le budget va vers celles qui convertissent." },
      { title: "On scale ce qui marche", body: "Montée en budget progressive, sans casser l'apprentissage de l'algorithme." },
    ],
    faq: [
      { q: "Remplace-t-il Meta Ads Manager ?", a: "Pour le pilotage quotidien, oui. Pour des réglages très avancés, on garde un accès direct à la régie." },
      { q: "Le budget publicitaire passe-t-il par vous ?", a: "Non. Vous payez Meta et Google directement, avec votre propre moyen de paiement. Nous ne prenons pas de marge sur le média." },
      { q: "Comment le coût par lead réel est-il calculé ?", a: "La dépense de la régie est divisée par les leads réellement qualifiés dans le CRM, pas par les clics ou les formulaires bruts." },
    ],
  },
  {
    id: "funnels",
    slug: "funnels-sites-et-boutiques",
    kind: "platform",
    name: "Funnels, sites & boutiques",
    kicker: "Construisez et publiez",
    body: "Tunnels de vente, sites vitrines, boutiques et blogs construits dans l'éditeur, branchés au CRM dès la première ligne. Chaque formulaire crée un contact, chaque contact déclenche un scénario.",
    bullets: [
      "Éditeur glisser-déposer, sans code",
      "Tunnels multi-étapes avec upsell",
      "Boutique avec paiement intégré",
      "Blog et pages optimisées SEO",
      "Chaque formulaire alimente le CRM",
    ],
    tags: ["Funnels", "E-commerce", "Blog", "Sans code"],
    price: "Inclus dans WePushX CRM",
    demo: "funnels",
    seo: {
      title: "Funnels, sites et boutiques connectés à votre CRM",
      description:
        "Créez tunnels de vente, sites, boutiques et blogs dans un éditeur sans code, reliés au CRM et aux automatisations dès la publication.",
    },
    hero: {
      lines: ["Des pages", "qui alimentent", "la machine."],
      sub: "Une page qui ne nourrit pas votre CRM est une brochure. Ici, chaque formulaire crée un contact et déclenche une relance.",
    },
    proof: [
      { value: 0, label: "ligne de code", detail: "Éditeur visuel de bout en bout" },
      { value: 48, suffix: "h", label: "pour une landing page complète", detail: "Formulaire, tracking et scénario inclus" },
      { value: 100, suffix: "%", label: "des leads dans le CRM", detail: "Aucune fuite vers une boîte mail oubliée" },
    ],
    process: [
      { title: "On choisit la structure", body: "Tunnel court pour une offre unique, site complet pour une marque installée." },
      { title: "On écrit pour convertir", body: "Promesse claire, preuves, objections traitées, un seul appel à l'action." },
      { title: "On branche formulaire et paiement", body: "Contact créé, scénario déclenché, paiement encaissé au même endroit." },
      { title: "On teste et on itère", body: "Variantes de titre et de bouton, décisions sur les chiffres." },
    ],
    faq: [
      { q: "Et si j'ai déjà un site WordPress ?", a: "On le garde. Les tunnels vivent à côté et se branchent au même CRM — ou nous l'hébergeons chez nous." },
      { q: "Les paiements sont-ils gérés ?", a: "Oui, carte et paiements récurrents via les passerelles intégrées." },
      { q: "C'est bon pour le SEO ?", a: "Pour des pages de campagne, oui. Pour une stratégie SEO de fond, on recommande un site Next.js dédié — c'est notre service Sites Web." },
    ],
  },
  {
    id: "calendars",
    slug: "calendriers-et-reservation",
    kind: "platform",
    name: "Calendriers & réservation",
    kicker: "Deux moteurs de booking",
    body: "Un calendrier de rendez-vous classique pour vos consultations, et un moteur de location avec dates de début et de fin, stock et caution. Rappels automatiques des deux côtés.",
    bullets: [
      "Rendez-vous individuels, en équipe ou round-robin",
      "Moteur de location : période, stock, caution",
      "Rappels WhatsApp, SMS et email",
      "Paiement ou acompte à la réservation",
      "Synchronisation Google Calendar",
    ],
    tags: ["RDV", "Location", "Rappels", "Paiement"],
    price: "Inclus dans WePushX CRM",
    demo: "calendars",
    seo: {
      title: "Calendriers de rendez-vous et moteur de location en ligne",
      description:
        "Deux moteurs de réservation : rendez-vous classiques et location par période avec stock et caution. Rappels automatiques et paiement intégré.",
    },
    hero: {
      lines: ["Réservé, payé,", "rappelé.", "Sans vous."],
      sub: "Deux moteurs selon ce que vous vendez : un créneau de consultation, ou un bien loué du 12 au 19.",
    },
    proof: [
      { value: 2, label: "moteurs de réservation", detail: "Rendez-vous classique et location par période" },
      { value: 62, prefix: "-", suffix: "%", label: "de no-shows", detail: "Avec la séquence de rappel à J-1 et H-2" },
      { value: 3, label: "rappels automatiques", detail: "Confirmation, veille, deux heures avant" },
    ],
    process: [
      { title: "On règle vos disponibilités", body: "Horaires, durées, temps tampon, jours fériés marocains." },
      { title: "On écrit la séquence de rappel", body: "Confirmation immédiate, rappel la veille, rappel deux heures avant." },
      { title: "On branche le paiement", body: "Acompte ou paiement complet à la réservation, selon votre modèle." },
      { title: "On gère les no-shows", body: "Absence détectée, scénario de reprogrammation déclenché automatiquement." },
    ],
    faq: [
      { q: "Quelle différence entre les deux calendriers ?", a: "Le calendrier de RDV réserve un créneau ponctuel. Le moteur de location réserve une période, vérifie le stock disponible sur ces dates et gère la caution." },
      { q: "Les rappels partent-ils sur WhatsApp ?", a: "Oui, et c'est le canal qui fonctionne le mieux au Maroc — bien devant l'email." },
      { q: "Synchronisation avec mon agenda Google ?", a: "Oui, dans les deux sens. Un créneau occupé dans Google devient indisponible à la réservation." },
    ],
  },
  {
    id: "reputation",
    slug: "avis-google-et-reputation",
    kind: "platform",
    name: "Avis Google & réputation",
    kicker: "Votre fiche pilotée par l'IA",
    body: "Connectez votre fiche Google Business Profile, collectez les avis automatiquement après chaque prestation, et laissez l'IA proposer une réponse à chacun — que vous validez en un clic.",
    bullets: [
      "Fiche Google connectée au CRM",
      "Demande d'avis automatique après prestation",
      "Réponses rédigées par l'IA, validées par vous",
      "Alerte immédiate sur les avis négatifs",
      "Suivi de la note moyenne dans le temps",
    ],
    tags: ["Google", "Avis", "IA", "Local"],
    price: "Inclus dans WePushX CRM",
    demo: "reputation",
    seo: {
      title: "Gestion des avis Google par IA : collecte et réponses automatiques",
      description:
        "Connectez votre fiche Google Business Profile : demande d'avis automatique après prestation, réponses proposées par l'IA, alertes sur les avis négatifs.",
    },
    hero: {
      lines: ["Vos avis,", "collectés", "et répondus."],
      sub: "Au Maroc, la fiche Google est souvent le premier contact. Une note qui monte et des réponses soignées valent une campagne publicitaire.",
    },
    proof: [
      { value: 4.8, decimals: 1, suffix: "/5", label: "note moyenne atteinte", detail: "Sur nos comptes locaux accompagnés" },
      { value: 6, suffix: "x", label: "plus d'avis collectés", detail: "Demande automatique contre demande manuelle" },
      { value: 2, suffix: "h", label: "pour répondre", detail: "Réponse proposée par l'IA dès réception" },
    ],
    process: [
      { title: "On connecte la fiche", body: "Accès Google Business Profile relié au CRM, sans perte de propriété." },
      { title: "On déclenche la demande", body: "Message envoyé au bon moment : juste après une prestation réussie." },
      { title: "On répond à tout", body: "L'IA rédige, vous validez. Les avis sans réponse font mauvais effet." },
      { title: "On traite le négatif vite", body: "Alerte immédiate, réponse mesurée, tentative de résolution en privé." },
    ],
    faq: [
      { q: "Pouvez-vous supprimer un avis négatif ?", a: "Non, et personne ne le peut légitimement. Ce qui marche : répondre vite et bien, et noyer l'avis sous des avis positifs récents." },
      { q: "L'IA répond-elle toute seule ?", a: "Par défaut elle propose et vous validez. Vous pouvez l'autoriser à publier seule les réponses aux avis 4 et 5 étoiles." },
      { q: "Et les avis sur d'autres plateformes ?", a: "Google est la priorité au Maroc. Facebook est également suivi." },
    ],
  },
  {
    id: "chat-widget",
    slug: "chat-widget",
    kind: "platform",
    name: "Chat widget",
    kicker: "Capturez avant le départ",
    body: "Un widget de conversation sur votre site qui répond avec l'IA, récupère le numéro et bascule la conversation sur WhatsApp — là où vos clients répondent vraiment.",
    bullets: [
      "Widget personnalisé à vos couleurs",
      "Réponses IA sur votre catalogue et vos tarifs",
      "Bascule vers WhatsApp en un clic",
      "Capture du numéro dès le premier message",
      "Historique complet dans le CRM",
    ],
    tags: ["Chat", "WhatsApp", "IA", "Conversion"],
    price: "Inclus dans WePushX CRM",
    demo: "chat-widget",
    seo: {
      title: "Chat widget IA pour site web, connecté à WhatsApp",
      description:
        "Un widget qui répond avec l'IA, capture le numéro et bascule sur WhatsApp. Chaque conversation atterrit dans le CRM.",
    },
    hero: {
      lines: ["Le visiteur", "qui part sans rien dire", "ne revient pas."],
      sub: "Le widget engage la conversation avant la sortie, répond à l'objection, et repart avec un numéro.",
    },
    proof: [
      { value: 3, suffix: "x", label: "plus de contacts qu'un formulaire", detail: "Conversation contre champs à remplir" },
      { value: 92, suffix: "%", label: "de messages WhatsApp lus", detail: "Contre environ 20 % pour l'email" },
      { value: 0, label: "conversation perdue", detail: "Tout est archivé dans la fiche contact" },
    ],
    process: [
      { title: "On habille le widget", body: "Couleurs, position, message d'accroche adapté à la page." },
      { title: "On nourrit l'IA", body: "Catalogue, tarifs, zones desservies, délais, objections fréquentes." },
      { title: "On bascule sur WhatsApp", body: "Dès que le numéro est donné, la suite se passe là où le client répond." },
      { title: "On mesure", body: "Conversations ouvertes, numéros capturés, RDV pris." },
    ],
    faq: [
      { q: "Ça ralentit mon site ?", a: "Le widget est chargé en différé, après le contenu principal. L'impact sur les Core Web Vitals est négligeable." },
      { q: "Ça marche sur WordPress et Shopify ?", a: "Oui, sur n'importe quel site : une seule ligne de script à coller." },
      { q: "Qui répond la nuit ?", a: "L'IA. Elle qualifie et prend le RDV ; vous reprenez la main le matin avec tout le contexte." },
    ],
  },
  {
    id: "wordpress",
    slug: "hebergement-wordpress",
    kind: "platform",
    name: "Hébergement WordPress",
    kicker: "Rapide, sauvegardé, protégé",
    body: "Votre WordPress hébergé chez nous : sécurité, sauvegardes quotidiennes, optimisation de vitesse et mises à jour surveillées. Vous vous occupez de votre contenu, pas de votre serveur.",
    bullets: [
      "Sauvegardes quotidiennes et restauration en un clic",
      "Pare-feu, anti-malware et certificat SSL",
      "Cache et optimisation Core Web Vitals",
      "Mises à jour WordPress et extensions surveillées",
      "Environnement de préproduction",
    ],
    tags: ["WordPress", "Sécurité", "Backup", "Vitesse"],
    price: "Inclus dans WePushX CRM",
    demo: "wordpress",
    seo: {
      title: "Hébergement WordPress géré : sécurité, sauvegarde et vitesse",
      description:
        "WordPress hébergé, sauvegardé chaque jour, protégé et optimisé. Mises à jour surveillées et restauration en un clic.",
    },
    hero: {
      lines: ["Votre WordPress,", "sans les nuits", "blanches."],
      sub: "Site piraté, extension qui casse tout, sauvegarde introuvable : trois problèmes qui n'arrivent plus quand quelqu'un surveille.",
    },
    proof: [
      { value: 24, suffix: "h", label: "entre deux sauvegardes", detail: "Restauration en un clic sur 30 jours" },
      { value: 99.9, decimals: 1, suffix: "%", label: "de disponibilité visée", detail: "Supervision permanente" },
      { value: 90, suffix: "+", label: "de score PageSpeed visé", detail: "Après passage en cache et optimisation" },
    ],
    process: [
      { title: "On migre sans coupure", body: "Copie, test sur préproduction, bascule DNS. Votre site reste en ligne." },
      { title: "On sécurise", body: "Pare-feu, blocage des tentatives de connexion, SSL, analyse anti-malware." },
      { title: "On accélère", body: "Cache serveur, compression des images, nettoyage des extensions inutiles." },
      { title: "On surveille", body: "Mises à jour testées en préproduction avant d'être appliquées en production." },
    ],
    faq: [
      { q: "Vous gérez la migration ?", a: "Oui, de bout en bout, sans interruption visible pour vos visiteurs." },
      { q: "Et si une mise à jour casse le site ?", a: "Elle est d'abord testée en préproduction. En cas de problème en production, restauration en un clic." },
      { q: "Puis-je garder mon nom de domaine ?", a: "Bien sûr, il reste à votre nom. On ne fait que pointer les DNS." },
    ],
  },
  {
    id: "courses",
    slug: "formations-et-communautes",
    kind: "platform",
    name: "Formations & communautés",
    kicker: "Vendez votre savoir",
    body: "Créez vos formations en ligne et animez votre communauté au même endroit : modules, vidéos, suivi de progression, espaces de discussion et paiement intégré.",
    bullets: [
      "Modules, leçons et suivi de progression",
      "Espaces communautaires et fils de discussion",
      "Paiement unique ou abonnement",
      "Accès conditionné à l'achat",
      "Certificats de fin de parcours",
    ],
    tags: ["Formation", "Communauté", "Abonnement", "Membres"],
    price: "Inclus dans WePushX CRM",
    demo: "courses",
    seo: {
      title: "Créez et vendez vos formations et communautés en ligne",
      description:
        "Modules, vidéos, progression, communauté et paiement intégré — le tout relié au CRM et aux automatisations.",
    },
    hero: {
      lines: ["Votre expertise,", "en produit", "qui se vend."],
      sub: "Une formation vendue pendant votre sommeil, une communauté qui fidélise, un revenu qui ne dépend plus de vos heures.",
    },
    proof: [
      { value: 1, label: "plateforme", detail: "Formation, communauté et paiement au même endroit" },
      { value: 0, suffix: " %", label: "de commission sur vos ventes", detail: "Contrairement aux places de marché" },
      { value: 100, suffix: "%", label: "de vos membres dans le CRM", detail: "Relances et scénarios inclus" },
    ],
    process: [
      { title: "On structure le parcours", body: "Modules, leçons, ordre de déblocage, durée réaliste." },
      { title: "On monte l'espace", body: "Vidéos, ressources, quiz, espace de discussion." },
      { title: "On branche la vente", body: "Page de vente, paiement, accès automatique dès l'encaissement." },
      { title: "On anime", body: "Relances sur les élèves bloqués, messages d'encouragement automatiques." },
    ],
    faq: [
      { q: "Où sont hébergées les vidéos ?", a: "Directement sur la plateforme, en lecture protégée. Vous pouvez aussi intégrer YouTube ou Vimeo en non répertorié." },
      { q: "Puis-je vendre par abonnement ?", a: "Oui, paiement unique, en plusieurs fois ou abonnement récurrent." },
      { q: "La communauté est-elle séparée de la formation ?", a: "Non, c'est ce qui fait la différence : l'élève passe de la leçon à la discussion sans changer d'outil." },
    ],
  },
  {
    id: "webinars",
    slug: "webinaires",
    kind: "platform",
    name: "Webinaires",
    kicker: "Vendez à plusieurs",
    body: "Inscriptions, rappels, diffusion et relance des absents : tout le cycle du webinaire est automatisé. Chaque inscrit devient un contact, chaque comportement déclenche la bonne suite.",
    bullets: [
      "Page d'inscription et formulaire intégrés",
      "Rappels automatiques avant la session",
      "Webinaires en direct ou préenregistrés",
      "Relance différenciée présents / absents",
      "Replay envoyé automatiquement",
    ],
    tags: ["Webinaire", "Direct", "Replay", "Inscriptions"],
    price: "Inclus dans WePushX CRM",
    demo: "webinars",
    seo: {
      title: "Webinaires automatisés : inscriptions, rappels et relances",
      description:
        "Tout le cycle du webinaire automatisé — page d'inscription, rappels, diffusion, replay et relance différenciée des absents.",
    },
    hero: {
      lines: ["Un message.", "Cent prospects", "en même temps."],
      sub: "Le webinaire reste le format le plus efficace pour vendre une offre qui demande à être expliquée.",
    },
    proof: [
      { value: 42, suffix: "%", label: "de taux de présence", detail: "Avec la séquence de rappel complète" },
      { value: 3, label: "rappels avant la session", detail: "J-1, H-1, et au moment du direct" },
      { value: 100, suffix: "%", label: "des absents relancés", detail: "Replay envoyé automatiquement" },
    ],
    process: [
      { title: "On construit l'inscription", body: "Page, formulaire, confirmation immédiate avec le lien." },
      { title: "On programme les rappels", body: "La veille, une heure avant, au démarrage. C'est ce qui fait la présence." },
      { title: "On diffuse", body: "En direct, ou préenregistré diffusé à heure fixe pour un format récurrent." },
      { title: "On relance différemment", body: "Les présents reçoivent l'offre, les absents reçoivent le replay puis l'offre." },
    ],
    faq: [
      { q: "Direct ou préenregistré ?", a: "Les deux. Le préenregistré diffusé à heure fixe permet de faire tourner le même webinaire chaque semaine sans le refaire." },
      { q: "Combien de participants ?", a: "Largement au-delà de ce dont une PME a besoin. Ce n'est pas la limite qui vous freinera." },
      { q: "Le replay part automatiquement ?", a: "Oui, avec un message différent selon que la personne était présente ou non." },
    ],
  },
  {
    id: "ai-studio",
    slug: "ai-studio",
    kind: "platform",
    name: "AI Studio",
    kicker: "Décrivez, l'IA construit",
    body: "Un constructeur d'agents et d'applications piloté par l'IA : décrivez ce que vous voulez, obtenez un site, une landing page ou une application complète — puis affinez visuellement.",
    bullets: [
      "Génération de sites et landing pages par l'IA",
      "Applications full-stack avec base de données",
      "Construction d'agents IA métier",
      "Édition visuelle après génération",
      "Publication en un clic",
    ],
    tags: ["IA", "No-code", "Générateur", "Agents"],
    price: "Inclus dans WePushX CRM",
    demo: "ai-studio",
    seo: {
      title: "AI Studio : créez sites, landing pages et applications avec l'IA",
      description:
        "Décrivez votre besoin, l'IA construit le site, la landing page ou l'application complète. Édition visuelle et publication en un clic.",
    },
    hero: {
      lines: ["Décrivez-le.", "L'IA le construit."],
      sub: "Une landing page en dix minutes au lieu de dix jours — et quand ça compte vraiment, notre équipe reprend la main.",
    },
    proof: [
      { value: 10, suffix: " min", label: "pour une première version", detail: "Landing page générée et publiée" },
      { value: 0, label: "ligne de code à écrire", detail: "Édition visuelle après génération" },
      { value: 3, label: "types de sorties", detail: "Site, landing page, application full-stack" },
    ],
    process: [
      { title: "Vous décrivez", body: "Objectif, audience, ton, sections voulues. En français, en langage normal." },
      { title: "L'IA génère", body: "Structure, contenu, mise en page et composants fonctionnels." },
      { title: "Vous affinez", body: "Édition visuelle : textes, couleurs, blocs déplacés à la souris." },
      { title: "On publie", body: "Mise en ligne, tracking branché, formulaires reliés au CRM." },
    ],
    faq: [
      { q: "Le résultat est-il utilisable tel quel ?", a: "Pour une landing page de campagne, souvent oui. Pour un site de marque, on reprend derrière — c'est là qu'un designer fait la différence." },
      { q: "L'IA peut-elle faire une vraie application ?", a: "Oui, avec base de données et authentification. C'est le cas d'usage le plus impressionnant du studio." },
      { q: "Qui est propriétaire de ce qui est généré ?", a: "Vous. Le contenu et le design vous appartiennent." },
    ],
  },
];

export const platformBySlug = (slug: string) => platformFeatures.find((f) => f.slug === slug);
