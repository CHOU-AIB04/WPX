/**
 * Pages villes (SEO local).
 *
 * Contenu propre à chaque ville : marché, quartiers, secteurs, façon
 * d'acheter. Pas de page copiée-collée avec le nom de la ville changé —
 * Google les reconnaît et les ignore.
 *
 * Les « exemples » sont des situations types, présentées comme telles :
 * jamais des résultats clients inventés. Les vrais cas vont dans
 * src/lib/cases.ts.
 *
 * Pas de montants ici : la page reste statique (aucune lecture du pays du
 * visiteur, voir src/lib/geo.ts) et renvoie vers /tarifs.
 */

export type CityPage = {
  slug: string;
  city: string;
  /** Mot-clé principal (titre, h1, description). */
  keyword: string;
  /** Balise <title> complète, 60 caractères max. */
  metaTitle: string;
  /** 155 caractères max, mot-clé en tête. */
  description: string;
  /** Sur-titre dans le h1 : contient le mot-clé. */
  eyebrow: string;
  heroLines: string[];
  intro: string;
  sections: { title: string; paragraphs: string[]; bullets?: string[] }[];
  examples: { sector: string; title: string; body: string }[];
  /** Services mis en avant (ids de content.ts). */
  services: string[];
  faq: { q: string; a: string }[];
};

export const cityPages: CityPage[] = [
  /* ═══════════════════════════════════════════════ agence web casablanca */
  {
    slug: "agence-web-casablanca",
    city: "Casablanca",
    keyword: "agence web Casablanca",
    metaTitle: "Agence web à Casablanca · Création de sites | WePushX",
    description:
      "Agence web à Casablanca : sites vitrines, landing pages et e-commerce rapides, reliés à WhatsApp et au CRM. Livrés en 7 à 14 jours pour les PME.",
    eyebrow: "Agence web à Casablanca",
    heroLines: ["Un site web", "qui vend", "à Casablanca."],
    intro:
      "Nous sommes une agence web basée à Casablanca. Nous construisons des sites vitrines, des landing pages et des boutiques en ligne pour les PME de la ville, avec une obsession : que chaque visite finisse en message WhatsApp, en appel ou en rendez-vous. Pas un site « carte de visite » qu'on oublie après la mise en ligne.",
    sections: [
      {
        title: "Pourquoi les PME casablancaises refont leur site",
        paragraphs: [
          "À Casablanca, la plupart des visiteurs arrivent sur votre site depuis un téléphone, souvent en 4G, entre deux rendez-vous ou dans un taxi. Un site qui met cinq secondes à charger perd une grande partie de ces visiteurs avant même d'afficher votre offre. C'est la première raison pour laquelle nos clients nous appellent : leur site existe, mais il ne produit rien.",
          "La deuxième raison, c'est le parcours. Ici, un prospect ne remplit pas volontiers un long formulaire : il veut écrire sur WhatsApp, appeler, ou voir l'itinéraire sur Google Maps. Un site pensé pour Casablanca met ces trois actions à portée de pouce, sur chaque page.",
        ],
      },
      {
        title: "Ce que nous construisons",
        paragraphs: [
          "Chaque projet part de la même question : qu'est-ce que le visiteur doit faire, et qu'est-ce qui l'en empêche aujourd'hui ? Ensuite seulement, on choisit le format et la technologie.",
        ],
        bullets: [
          "Landing page : une page par campagne publicitaire, un seul objectif, formulaire et suivi des conversions branchés.",
          "Site vitrine : 3 à 6 pages, rapide, bilingue français / arabe si besoin, optimisé pour le référencement local.",
          "Site e-commerce : Shopify ou WordPress, catalogue, gestion du stock, paiement par carte via une passerelle marocaine et paiement à la livraison.",
          "Sur-mesure en Next.js : quand la vitesse et le SEO sont prioritaires, ou quand le site doit dialoguer avec vos outils.",
        ],
      },
      {
        title: "Pensé pour la façon dont on achète à Casablanca",
        paragraphs: [
          "Le paiement à la livraison reste la norme pour une grande partie des achats en ligne au Maroc. Nos boutiques le gèrent dès le départ, avec une confirmation de commande automatique sur WhatsApp : c'est ce qui réduit les colis refusés.",
          "Pour les services (cliniques, cabinets, écoles, agences immobilières), le site prend les rendez-vous directement dans un calendrier, envoie un rappel la veille et fait remonter chaque demande dans le CRM. Votre équipe ne recopie plus rien depuis une boîte mail.",
        ],
      },
      {
        title: "Des quartiers d'affaires aux zones industrielles",
        paragraphs: [
          "Nous travaillons avec des commerces et cabinets du Maârif, de Gauthier et de Racine, des entreprises installées à Sidi Maârouf et à Casa Anfa, des industriels d'Aïn Sebaâ et de Bouskoura. Les besoins ne sont pas les mêmes : un cabinet du centre veut des rendez-vous, un distributeur B2B veut des demandes de devis qualifiées. Le site suit la cible, pas un modèle.",
        ],
      },
      {
        title: "Délais et méthode",
        paragraphs: [
          "Une landing page est en ligne en quelques jours, un site vitrine complet en 7 à 14 jours. Cadrage, maquette sur mesure, intégration, puis branchement : formulaires vers le CRM, suivi GA4 et Pixel Meta, scénarios de relance actifs dès le lancement. Vous validez chaque étape, et vous restez propriétaire du site et du nom de domaine.",
        ],
      },
    ],
    examples: [
      {
        sector: "Santé · Maârif",
        title: "Une clinique qui veut moins d'appels perdus",
        body: "Situation type : la secrétaire ne peut pas décrocher pendant les consultations. Le site propose la réservation en ligne par spécialité, un bouton WhatsApp et un rappel automatique la veille du rendez-vous.",
      },
      {
        sector: "Immobilier · Bouskoura",
        title: "Un promoteur qui lance un nouveau programme",
        body: "Situation type : une landing page par résidence, connectée aux campagnes Meta, qui qualifie le budget et le délai d'achat avant de transmettre le contact au commercial.",
      },
      {
        sector: "B2B · Aïn Sebaâ",
        title: "Un distributeur qui veut des demandes de devis",
        body: "Situation type : un catalogue clair par famille de produits, une demande de devis en trois champs et une fiche créée dans le CRM pour chaque demande, avec relance si personne ne répond sous 24 heures.",
      },
    ],
    services: ["web", "seo", "google"],
    faq: [
      {
        q: "Combien coûte un site web à Casablanca ?",
        a: "Cela dépend du format : une landing page, un site vitrine et une boutique e-commerce n'ont pas le même prix. Nos prix de départ sont publiés sur la page Tarifs, et le prix final est confirmé dans un devis après l'audit gratuit.",
      },
      {
        q: "Peut-on se rencontrer ?",
        a: "Oui. Nous sommes basés à Casablanca : le premier échange se fait en visio ou par téléphone, et nous pouvons ensuite organiser un rendez-vous si votre projet le demande.",
      },
      {
        q: "En combien de temps mon site sera-t-il en ligne ?",
        a: "Quelques jours pour une landing page, 7 à 14 jours pour un site vitrine. Une boutique e-commerce dépend surtout du nombre de produits et de la qualité des photos fournies.",
      },
      {
        q: "Le référencement Google est-il inclus ?",
        a: "Les bases techniques le sont toujours : vitesse, structure, balises, données structurées et fiche Google Business Profile reliée au site. Le travail de contenu et de positionnement dans la durée fait partie de notre offre SEO.",
      },
    ],
  },

  /* ═══════════════════════════════════════════════ agence seo casablanca */
  {
    slug: "agence-seo-casablanca",
    city: "Casablanca",
    keyword: "agence SEO Casablanca",
    metaTitle: "Agence SEO à Casablanca · Référencement local | WePushX",
    description:
      "Agence SEO à Casablanca : Google Business Profile, pages locales, contenu et netlinking pour sortir dans le top 3 local, plus la visibilité dans les IA.",
    eyebrow: "Agence SEO à Casablanca",
    heroLines: ["Premier sur Google", "quand Casablanca", "vous cherche."],
    intro:
      "Quand quelqu'un tape « dentiste Maârif », « fiduciaire Casablanca » ou « location voiture aéroport Mohammed V », trois entreprises apparaissent sur la carte Google. Les autres n'existent pas. Notre travail d'agence SEO à Casablanca, c'est de vous faire entrer dans ces trois places, puis dans les premiers résultats classiques, et de plus en plus dans les réponses des IA.",
    sections: [
      {
        title: "Le SEO local, d'abord",
        paragraphs: [
          "À Casablanca, une grande partie des recherches qui mènent à un achat sont locales : un service, un quartier, parfois « près de moi ». Google y répond avec le pack local, ces trois fiches affichées avec la carte. Pour y apparaître, trois signaux comptent : la pertinence de votre fiche Google Business Profile, la proximité, et la réputation (nombre, note et fraîcheur des avis).",
          "Nous optimisons la fiche (catégories, services, horaires, photos, publications), nous mettons en place une collecte d'avis automatique après chaque vente ou rendez-vous, et nous rendons vos coordonnées identiques partout sur le web. Des détails, mais c'est sur ces détails que se départagent deux concurrents du même quartier.",
        ],
      },
      {
        title: "Les mots que tapent vraiment les Casablancais",
        paragraphs: [
          "Les recherches se font en français, en arabe, et souvent en darija écrite en lettres latines. Elles mentionnent le quartier (Gauthier, Maârif, Oasis, Aïn Diab, Sidi Maârouf) plus souvent que la ville. Nous partons de ces requêtes réelles, pas d'une liste de mots-clés génériques, et nous créons les pages qui y répondent : une page par service, et quand c'est justifié, une page par zone desservie.",
        ],
      },
      {
        title: "Technique et contenu",
        paragraphs: [
          "Un site lent ou mal structuré plafonne, quel que soit le contenu. L'audit commence donc par l'indexation, la vitesse mobile, les balises et les données structurées. Ensuite vient le contenu : des pages de service complètes, des articles qui répondent aux questions de vos clients, et des liens depuis des sites marocains de votre secteur.",
        ],
        bullets: [
          "Audit technique : indexation, vitesse, structure, données structurées.",
          "Fiche Google Business Profile optimisée et suivie chaque mois.",
          "Pages de service et pages locales rédigées pour convertir.",
          "Netlinking marocain : annuaires sérieux, médias et partenaires.",
          "Suivi mensuel des positions et des demandes générées.",
        ],
      },
      {
        title: "Être cité par ChatGPT et Google AI (GEO)",
        paragraphs: [
          "Vos clients posent aussi leurs questions à des IA : « quelle agence immobilière sérieuse à Casablanca ? ». Ces outils citent des sources claires, factuelles et cohérentes. Nous structurons vos pages pour qu'elles soient faciles à citer, et nous travaillons votre présence sur les sites que ces IA consultent.",
        ],
      },
      {
        title: "Combien de temps ?",
        paragraphs: [
          "Comptez environ 90 jours pour des positions solides sur des requêtes locales travaillées, parfois moins pour la carte Google quand la fiche partait de loin. Nous ne promettons pas la première place en trois semaines : personne ne peut le garantir honnêtement.",
        ],
      },
    ],
    examples: [
      {
        sector: "Santé · Gauthier",
        title: "Un cabinet dentaire absent de la carte",
        body: "Situation type : une fiche Google incomplète et douze avis anciens. Catégories corrigées, services détaillés, demande d'avis envoyée sur WhatsApp après chaque rendez-vous.",
      },
      {
        sector: "Immobilier · Anfa",
        title: "Une agence noyée sous les portails d'annonces",
        body: "Situation type : les portails captent les recherches génériques. On cible les requêtes par quartier et par type de bien, avec une page dédiée pour chacune.",
      },
      {
        sector: "Éducation · Casablanca",
        title: "Une école privée avant la période d'inscriptions",
        body: "Situation type : les parents comparent en ligne de mars à juin. Contenu de réponse aux questions des parents, avis Google, et pages par cycle d'enseignement prêtes avant la saison.",
      },
    ],
    services: ["seo", "web", "google"],
    faq: [
      {
        q: "Pouvez-vous garantir la première place sur Google ?",
        a: "Non, et une agence qui le promet vous ment. Nous garantissons la méthode, la transparence et un suivi mensuel des positions et des demandes générées.",
      },
      {
        q: "Faut-il un site pour faire du SEO local ?",
        a: "La fiche Google Business Profile peut suffire au départ pour apparaître sur la carte. Mais pour se positionner sur plusieurs services et plusieurs quartiers, il faut des pages dédiées : c'est le site qui porte ce travail.",
      },
      {
        q: "Travaillez-vous les recherches en arabe ?",
        a: "Oui, quand votre clientèle cherche en arabe ou en darija. L'audit montre quelles langues pèsent réellement dans votre secteur avant d'écrire la moindre page.",
      },
      {
        q: "Combien coûte le SEO à Casablanca ?",
        a: "Nos prix de départ sont publiés sur la page Tarifs. Le prix final dépend du nombre de services, de pages et de la concurrence de votre secteur ; il est confirmé dans un devis après l'audit gratuit.",
      },
    ],
  },

  /* ═══════════════════════════════════════════════ marrakech */
  {
    slug: "agence-marketing-digital-marrakech",
    city: "Marrakech",
    keyword: "agence marketing digital Marrakech",
    metaTitle: "Agence marketing digital à Marrakech | WePushX",
    description:
      "Agence marketing digital pour Marrakech : Meta Ads, Google Ads, SEO et CRM WhatsApp pour riads, restaurants, hôtels, cliniques et immobilier. Audit offert.",
    eyebrow: "Agence marketing digital à Marrakech",
    heroLines: ["Marrakech", "attire le monde.", "Captez-le en direct."],
    intro:
      "À Marrakech, une partie de vos clients vous cherche depuis Paris, Madrid ou Londres, des semaines avant d'arriver. L'autre partie vit à Guéliz ou à M'hamid et compare sur Google Maps. Nous construisons pour les entreprises de Marrakech une acquisition qui parle aux deux, et un suivi qui ne laisse aucune demande sans réponse, même à 23 h.",
    sections: [
      {
        title: "Réduire la dépendance aux plateformes",
        paragraphs: [
          "Beaucoup de riads, d'hôtels et d'activités touristiques vendent l'essentiel de leurs nuitées et de leurs excursions via des plateformes qui prélèvent une commission sur chaque réservation. Chaque réservation directe récupérée améliore la marge.",
          "Nous mettons en place des campagnes Google Ads sur les recherches de marque et de destination, des campagnes Meta qui ciblent les voyageurs de vos marchés avant leur départ, et un site qui permet de réserver ou d'écrire sur WhatsApp en deux clics.",
        ],
      },
      {
        title: "Une clientèle internationale et locale",
        paragraphs: [
          "Les annonces et les pages doivent parler la langue du client : français pour la France et la Belgique, anglais pour le Royaume-Uni et le reste du monde, souvent arabe ou darija pour la clientèle marocaine. Nous segmentons les campagnes par pays et par langue, pour qu'un visiteur britannique ne tombe pas sur une page en français.",
          "Côté local, les restaurants, cliniques, salles de sport et commerces de Guéliz, de l'Hivernage ou de Targa vivent du pack local Google : fiche optimisée, photos récentes, avis nombreux et réponses rapides.",
        ],
      },
      {
        title: "Suivre la saisonnalité",
        paragraphs: [
          "L'activité touristique de Marrakech varie fortement au fil de l'année, avec des pics autour des vacances européennes et des fêtes de fin d'année. Le budget publicitaire doit suivre ces cycles : on prépare les campagnes en amont des pics, on accélère quand la demande est là, et on réduit quand elle retombe. Le CRM permet aussi de relancer les clients des saisons précédentes au bon moment.",
        ],
      },
      {
        title: "Répondre vite, dans toutes les langues",
        paragraphs: [
          "Un voyageur qui écrit à trois riads réserve souvent chez celui qui répond le premier. L'agent IA WePushX répond 24 h/24 sur WhatsApp, Instagram et le site, en français, en anglais et en darija, qualifie la demande (dates, nombre de personnes, budget) et la transmet à votre équipe ou la confirme directement dans le calendrier.",
        ],
        bullets: [
          "Campagnes Meta et Google par pays et par langue.",
          "Site ou landing page de réservation directe.",
          "Fiche Google et collecte d'avis automatique.",
          "Agent IA multilingue sur WhatsApp et Instagram.",
          "Relances des anciens clients avant chaque saison.",
        ],
      },
    ],
    examples: [
      {
        sector: "Hébergement · Médina",
        title: "Un riad qui veut plus de réservations directes",
        body: "Situation type : la majorité des nuitées passe par des plateformes. Campagne Google sur le nom du riad, page de réservation directe avec un avantage exclusif, et réponses automatiques sur WhatsApp.",
      },
      {
        sector: "Restauration · Guéliz",
        title: "Un restaurant qui dépend du bouche-à-oreille",
        body: "Situation type : salle pleine le week-end, vide en semaine. Fiche Google retravaillée, publicités Meta géolocalisées autour du quartier et des hôtels voisins, réservation de table en ligne.",
      },
      {
        sector: "Immobilier · Palmeraie",
        title: "Une agence qui vise les acheteurs étrangers",
        body: "Situation type : des acquéreurs en France et en Belgique. Campagnes ciblées par pays, landing page par type de bien, qualification du budget avant tout appel.",
      },
    ],
    services: ["meta", "google", "seo"],
    faq: [
      {
        q: "Peut-on cibler les touristes avant leur arrivée ?",
        a: "Oui. Les campagnes Meta et Google peuvent cibler des personnes situées en France, en Belgique, en Espagne ou au Royaume-Uni qui s'intéressent au voyage au Maroc, ainsi que les recherches qui mentionnent Marrakech.",
      },
      {
        q: "Vous êtes à Casablanca : comment travaillez-vous avec Marrakech ?",
        a: "En visio, par téléphone et sur WhatsApp, avec un tableau de bord partagé. Tout le travail se fait en ligne ; le reporting est le même, que vous soyez à Marrakech ou à Casablanca.",
      },
      {
        q: "Dans quelles langues créez-vous les annonces ?",
        a: "En français, en anglais et en darija. La langue de chaque campagne se décide pendant l'audit, en fonction de vos marchés.",
      },
      {
        q: "Quel budget publicitaire prévoir ?",
        a: "Cela dépend de vos marchés et de la saison. Nous vous recommandons un budget média pendant l'audit ; il est payé directement à Meta ou Google, séparément de nos honoraires.",
      },
    ],
  },

  /* ═══════════════════════════════════════════════ rabat */
  {
    slug: "agence-marketing-digital-rabat",
    city: "Rabat",
    keyword: "agence marketing digital Rabat",
    metaTitle: "Agence marketing digital à Rabat · Ads, SEO, CRM | WePushX",
    description:
      "Agence marketing digital pour Rabat, Salé et Témara : publicité Meta et Google, SEO local, sites web et CRM WhatsApp pour PME et cabinets. Audit gratuit.",
    eyebrow: "Agence marketing digital à Rabat",
    heroLines: ["Rabat compare", "avant de choisir.", "Soyez le bon choix."],
    intro:
      "Rabat est une ville de cadres, de fonctionnaires, d'étudiants et de familles qui prennent le temps de comparer. Ici, un client lit les avis, visite le site, revient une semaine plus tard. Notre rôle d'agence marketing digital à Rabat : être visible pendant toute cette réflexion, et relancer au bon moment.",
    sections: [
      {
        title: "Un marché qui se décide sur la confiance",
        paragraphs: [
          "Écoles privées, cliniques et cabinets médicaux, centres de formation, cabinets de conseil, agences immobilières : les secteurs les plus actifs à Rabat vendent des services engageants, où l'on ne choisit pas sur un coup de tête. La publicité seule ne suffit pas. Il faut un site qui rassure, des avis visibles, et un suivi qui répond aux questions avant que le prospect ne parte chez un concurrent.",
          "C'est pourquoi nous construisons ici un cycle complet : annonce, page claire, prise de contact facile, puis relances automatiques sur WhatsApp et par email pendant la période de décision.",
        ],
      },
      {
        title: "Agdal, Hay Riad, Souissi… et au-delà de Rabat",
        paragraphs: [
          "Les recherches locales se font par quartier : Agdal, Hay Riad, Souissi, l'Océan, Hassan. La zone de chalandise dépasse aussi la ville : Salé, Témara et Harhoura font partie du même bassin de vie. Nous calibrons le ciblage publicitaire et les pages locales sur ces zones, selon l'endroit où se trouvent réellement vos clients.",
        ],
      },
      {
        title: "Le B2B et le recrutement de clients professionnels",
        paragraphs: [
          "Rabat concentre des administrations, des organisations et des entreprises de services aux professionnels. Pour le B2B, Google Ads capte les recherches précises (« cabinet audit Rabat », « formation management Rabat »), et le contenu SEO installe votre expertise dans la durée. Les leads sont qualifiés avant d'arriver chez vous : taille de l'entreprise, besoin, délai.",
        ],
        bullets: [
          "Campagnes Google Ads sur les recherches à forte intention.",
          "Publicité Meta pour les écoles, cliniques et commerces de proximité.",
          "Pages par service et par quartier pour le SEO local.",
          "CRM avec relances automatiques pendant la période de décision.",
          "Reporting mensuel : coût par lead, taux de transformation, chiffre généré.",
        ],
      },
      {
        title: "Préparer les temps forts",
        paragraphs: [
          "Chaque secteur a sa saison : les inscriptions scolaires au printemps, la rentrée en septembre, les fins d'année pour les formations financées. Nous préparons les campagnes et les contenus avant ces périodes, pour arriver avec des pages déjà indexées et des audiences déjà chaudes.",
        ],
      },
    ],
    examples: [
      {
        sector: "Éducation · Hay Riad",
        title: "Une école privée avant les inscriptions",
        body: "Situation type : des parents qui comparent plusieurs établissements. Campagne Meta autour de l'école, visite virtuelle sur le site, prise de rendez-vous en ligne et relance des familles qui n'ont pas réservé.",
      },
      {
        sector: "Conseil · Agdal",
        title: "Un cabinet qui veut des clients entreprises",
        body: "Situation type : des demandes trop petites ou hors cible. Campagne Google sur des requêtes précises, formulaire qui qualifie la taille et le besoin, et relance par email des demandes sérieuses.",
      },
      {
        sector: "Santé · Souissi",
        title: "Une clinique qui lance une nouvelle spécialité",
        body: "Situation type : peu de notoriété sur la nouvelle activité. Page dédiée, campagne locale, agent IA qui répond aux questions fréquentes et réserve la consultation.",
      },
    ],
    services: ["meta", "google", "seo"],
    faq: [
      {
        q: "Couvrez-vous Salé et Témara ?",
        a: "Oui. Le ciblage publicitaire et les pages locales s'adaptent à toute la zone d'où viennent vos clients : Rabat, Salé, Témara, Harhoura ou au-delà.",
      },
      {
        q: "Comment se passe la collaboration depuis Casablanca ?",
        a: "En visio, par téléphone et sur WhatsApp, avec un tableau de bord partagé et un point mensuel. La distance ne change rien au suivi.",
      },
      {
        q: "Faites-vous de la publicité pour le B2B ?",
        a: "Oui, principalement via Google Ads sur des recherches précises, complété par du contenu SEO. L'objectif est de recevoir moins de demandes, mais des demandes qui correspondent à votre cible.",
      },
      {
        q: "En combien de temps voit-on des résultats ?",
        a: "Les premières demandes arrivent généralement 7 à 14 jours après le lancement des campagnes. Le SEO prend environ 90 jours pour des positions solides.",
      },
    ],
  },

  /* ═══════════════════════════════════════════════ tanger */
  {
    slug: "agence-marketing-digital-tanger",
    city: "Tanger",
    keyword: "agence marketing digital Tanger",
    metaTitle: "Agence marketing digital à Tanger | WePushX",
    description:
      "Agence marketing digital à Tanger : Meta Ads, Google Ads, SEO local et CRM WhatsApp pour PME, industrie, immobilier et tourisme du Nord. Audit gratuit.",
    eyebrow: "Agence marketing digital à Tanger",
    heroLines: ["Tanger grandit", "vite.", "Votre visibilité aussi ?"],
    intro:
      "Port, zones industrielles, nouveaux quartiers, tourisme, diaspora qui revient chaque été : Tanger change vite, et la concurrence avec. Nous accompagnons les entreprises de Tanger et du Nord avec une acquisition mesurable, qu'elles vendent à des familles tangéroises, à des industriels ou à des acheteurs installés en Europe.",
    sections: [
      {
        title: "Trois marchés dans une même ville",
        paragraphs: [
          "Le premier, c'est la clientèle locale : commerces, cliniques, restaurants, écoles, qui se jouent sur Google Maps et Instagram. Le deuxième, c'est le B2B : sous-traitants, transitaires, prestataires de services autour du port et des zones industrielles, qui cherchent des clients professionnels. Le troisième, ce sont les Marocains résidant à l'étranger et les acheteurs européens, notamment pour l'immobilier et le tourisme.",
          "Chaque marché a ses canaux et ses messages. Une même campagne pour les trois gaspille du budget : nous les séparons dès le départ.",
        ],
      },
      {
        title: "Toucher la diaspora et l'Europe",
        paragraphs: [
          "Pour un promoteur ou une agence immobilière, une partie des acheteurs vit en France, en Belgique, en Espagne ou aux Pays-Bas. Les campagnes Meta peuvent les cibler là où ils sont, des mois avant leur retour estival, avec une landing page qui qualifie le projet et un rendez-vous en visio. Les relances automatiques gardent le contact jusqu'à la visite sur place.",
        ],
      },
      {
        title: "Le B2B autour du port et des zones industrielles",
        paragraphs: [
          "Les donneurs d'ordre cherchent leurs fournisseurs sur Google, avec des requêtes techniques. Une présence bien construite sur ces recherches (pages de services claires, références, certifications, demande de devis simple) vaut souvent plus qu'un salon. Nous combinons Google Ads pour les demandes immédiates et SEO pour la crédibilité dans la durée.",
        ],
        bullets: [
          "Campagnes locales pour les commerces et services tangérois.",
          "Google Ads B2B sur les requêtes techniques et sectorielles.",
          "Campagnes Meta vers la diaspora et l'Europe.",
          "SEO local : fiche Google, pages par service et par quartier.",
          "CRM et relances WhatsApp pour ne perdre aucune demande.",
        ],
      },
      {
        title: "Le local : de Malabata à Iberia",
        paragraphs: [
          "Côté particuliers, les recherches citent les quartiers : Malabata, Iberia, Marshan, la corniche, la route de Rabat. Restaurants, salles de sport, cliniques et centres de formation gagnent à travailler leur fiche Google, leurs avis et des campagnes géolocalisées sur quelques kilomètres, plutôt que sur toute la ville.",
        ],
      },
    ],
    examples: [
      {
        sector: "Immobilier · Malabata",
        title: "Un promoteur qui vise les MRE",
        body: "Situation type : des acheteurs en Europe qui ne viennent qu'en été. Campagnes ciblées par pays dès le printemps, landing page par résidence, rendez-vous en visio et visite planifiée pendant le séjour.",
      },
      {
        sector: "Industrie · zone franche",
        title: "Un sous-traitant qui veut de nouveaux donneurs d'ordre",
        body: "Situation type : une activité qui repose sur deux ou trois clients. Pages de savoir-faire, campagne Google sur des requêtes techniques, demande de devis qualifiée dans le CRM.",
      },
      {
        sector: "Restauration · corniche",
        title: "Un restaurant très saisonnier",
        body: "Situation type : plein en été, calme en hiver. Fiche Google retravaillée, campagnes Meta locales hors saison et fichier clients relancé pour les événements.",
      },
    ],
    services: ["meta", "google", "seo"],
    faq: [
      {
        q: "Pouvez-vous cibler les Marocains résidant à l'étranger ?",
        a: "Oui. Les campagnes Meta et Google peuvent cibler des personnes situées en Europe, selon le pays, la langue et les centres d'intérêt, avec un calendrier calé sur leurs périodes de retour.",
      },
      {
        q: "Travaillez-vous avec des entreprises industrielles ?",
        a: "Oui. Pour le B2B, nous misons sur Google Ads et le SEO autour de requêtes techniques, et sur une demande de devis qualifiée qui arrive directement dans le CRM.",
      },
      {
        q: "Comment travaillez-vous avec Tanger depuis Casablanca ?",
        a: "En visio, par téléphone et sur WhatsApp, avec un tableau de bord partagé. Le suivi et le reporting sont identiques pour tous nos clients, quelle que soit leur ville.",
      },
      {
        q: "Combien coûte un accompagnement ?",
        a: "Nos prix de départ sont publiés sur la page Tarifs. Le prix final dépend des canaux, des volumes et des outils activés ; il est confirmé dans un devis après l'audit gratuit.",
      },
    ],
  },
];

export const cityBySlug = (slug: string) => cityPages.find((c) => c.slug === slug);

/** Pages villes qui mettent en avant un service donné (maillage interne). */
export const citiesForService = (serviceId: string) => cityPages.filter((c) => c.services.includes(serviceId));
