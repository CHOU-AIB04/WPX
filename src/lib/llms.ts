import { offerHref, offersOf } from "./catalog";
import { crmPlans, agentPacks, dh } from "./pricing";
import { faqs, oneShots, plans, results, site, steps } from "./content";
import type { Offer } from "./offer";
import { CONTENT_UPDATED, SITE_URL, abs, cities, tagline } from "./seo";

/**
 * llms.txt (https://llmstxt.org) : un résumé en Markdown que les assistants
 * IA lisent pour comprendre le site et le citer correctement. llms-full.txt
 * reprend tout le contenu utile en un seul fichier.
 *
 * Tout est généré depuis les mêmes données que les pages : une offre ajoutée
 * dans `content.ts` ou `platform.ts` apparaît ici sans rien toucher.
 */

const link = (o: Offer) => `- [${o.name}](${abs(offerHref(o))}): ${o.seo.description}`;

const facts = () => [
  `- Nom : ${site.name}`,
  `- Activité : agence marketing digital de performance et éditeur du CRM all-in-one WePushX CRM`,
  `- Siège opérationnel : ${site.office}`,
  `- Zone servie : Maroc (${cities.join(", ")}) et clients francophones à l'international`,
  `- Clients : PME marocaines (restaurants, cliniques, e-commerce, automobile, rénovation, immobilier, traitement de l'eau, mode)`,
  `- Langues : français, arabe (darija), anglais`,
  `- Contact : ${site.email} · ${abs("/contact")} · ${site.hours}`,
  `- Garantie : remboursement de 100 % des honoraires si aucun lead qualifié en 60 jours`,
  `- Audit : 30 minutes, gratuit et sans engagement, réponse sous 24 h ouvrées`,
  `- Engagement minimum : 3 mois`,
];

export function llmsTxt() {
  const services = offersOf("service");
  const platform = offersOf("platform");

  return `# ${site.name}

> ${tagline} WePushX aide les PME marocaines à transformer chaque dirham investi en publicité en clients qualifiés, avec un suivi de bout en bout (tracking, landing pages, CRM, relances WhatsApp automatiques) et une garantie de résultats en 60 jours.

Dernière mise à jour : ${CONTENT_UPDATED}. Langue du site : français. Devise des tarifs : dirham marocain (MAD, noté DH).

## Faits clés

${facts().join("\n")}

## Services de l'agence

${services.map(link).join("\n")}

## WePushX CRM (plateforme all-in-one)

${platform.map(link).join("\n")}

## Pages principales

- [Accueil](${abs("/")}): présentation de l'agence, méthode, résultats clients, garantie et FAQ
- [Tarifs](${abs("/tarifs")}): forfaits agence (Starter, Growth, Scale), abonnements CRM, agents IA, projets one-shot et simulateur de coût
- [Toutes les offres](${abs("/offres")}): catalogue complet des services et des briques du CRM
- [Présentation](${abs("/presentation")}): l'agence, la méthode en cinq étapes, campagnes réelles
- [Contact et audit gratuit](${abs("/contact")}): demande d'audit de 30 minutes

## Optional

- [Contenu complet pour les IA](${abs("/llms-full.txt")}): toutes les offres, méthodes, FAQ et tarifs en un seul fichier
- [Flux RSS](${abs("/feed.xml")})
- [Plan du site](${abs("/sitemap.xml")})
- [Mentions légales](${abs("/mentions-legales")})
- [Politique de confidentialité](${abs("/politique-de-confidentialite")})
- [CGV](${abs("/cgv")})
`;
}

const offerSection = (o: Offer) => `### ${o.name}

URL : ${abs(offerHref(o))}
${o.kicker}. ${o.body}

${o.bullets.map((b) => `- ${b}`).join("\n")}
${o.price ? `\nPrix : ${o.price}\n` : ""}
Résultats observés :
${o.proof.map((p) => `- ${p.prefix ?? ""}${String(p.value).replace(".", ",")}${p.suffix ?? ""} ${p.label} (${p.detail})`).join("\n")}

Méthode :
${o.process.map((s, i) => `${i + 1}. ${s.title} : ${s.body}`).join("\n")}

Questions fréquentes :
${o.faq.map((f) => `- **${f.q}** ${f.a}`).join("\n")}
`;

export function llmsFullTxt() {
  return `# ${site.name} : contenu complet

> ${tagline}

Source : ${SITE_URL}. Dernière mise à jour : ${CONTENT_UPDATED}. Les tarifs sont en dirhams marocains (MAD/DH), hors taxes, hors budget publicitaire (payé directement à Meta ou Google). Ils s'appliquent au marché marocain ; hors Maroc, WePushX établit un devis au cas par cas.

## Faits clés

${facts().join("\n")}

## Méthode de travail

${steps.map((s) => `${s.n}. **${s.title}** (${s.duration}) : ${s.body}`).join("\n")}

## Résultats clients

${results.map((r) => `- ${r.sector} : ${r.prefix}${String(r.value).replace(".", ",")}${r.suffix} ${r.label} (${r.detail})`).join("\n")}

## Forfaits agence (honoraires mensuels)

${plans.map((p) => `- **${p.name}** : ${dh(p.monthly)} DH / mois. ${p.pitch} Inclus : ${p.features.join(", ")}.`).join("\n")}

Projets ponctuels :
${oneShots.map((o) => `- **${o.name}** : ${o.price}. ${o.body}`).join("\n")}

## WePushX CRM : abonnements

${crmPlans.map((p) => `- **${p.name}** (${p.seats}) : ${p.pitch} ${p.features.join(", ")}.`).join("\n")}

Tarifs à jour des abonnements CRM : ${abs("/tarifs")}.

## Agents IA conversationnels

${agentPacks.map((a) => `- **${a.name}**${a.monthly === 0 ? " (offert)" : ""} : ${a.pitch} ${a.features.join(", ")}.`).join("\n")}

## Services de l'agence

${offersOf("service").map(offerSection).join("\n")}
## Briques du WePushX CRM

${offersOf("platform").map(offerSection).join("\n")}
## FAQ générale

${faqs.map((f) => `### ${f.q}\n\n${f.a}\n`).join("\n")}
## Contact

- Email : ${site.email}
- Formulaire et audit gratuit : ${abs("/contact")}
- Horaires : ${site.hours}
- Bureau : ${site.office}
`;
}
