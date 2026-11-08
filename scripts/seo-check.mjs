#!/usr/bin/env node
/**
 * Contrôle SEO d'un build qui tourne (`next start`).
 *
 *   node scripts/seo-check.mjs [http://localhost:3000]
 *
 * Part du sitemap, suit tous les liens internes et vérifie pour chaque page :
 * code HTTP, <title> ≤ 60 caractères, meta description ≤ 155, un seul <h1>,
 * og:image et og:locale fr_MA, BreadcrumbList (hors accueil), titres et
 * descriptions uniques, et qu'aucun montant n'est affiché sans « à partir de ».
 * Code de sortie 1 s'il y a une erreur bloquante (lien cassé).
 */

const BASE = (process.argv[2] ?? "http://localhost:3000").replace(/\/$/, "");
const SITE = /^https?:\/\/(www\.)?wepushx\.com/;

/** Montants qui ne sont pas nos prix : citation client, budget média conseillé. */
const NOT_PRICES = [/dépensait 8\.000 DH/, /au moins 3\.000 DH par mois de budget média/];

const decode = (s) =>
  s
    .replace(/&amp;/g, "&")
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ");
const text = (html) => decode(html.replace(/<script[\s\S]*?<\/script>/g, " ").replace(/<style[\s\S]*?<\/style>/g, " ").replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ");
const meta = (html, attr, name) => {
  const m = html.match(new RegExp(`<meta[^>]*${attr}="${name}"[^>]*content="([^"]*)"`)) ?? html.match(new RegExp(`<meta[^>]*content="([^"]*)"[^>]*${attr}="${name}"`));
  return m ? decode(m[1]) : null;
};

const toLocal = (u) => {
  if (u.startsWith("/")) return u;
  if (SITE.test(u)) return u.replace(SITE, "") || "/";
  if (u.startsWith(BASE)) return u.slice(BASE.length) || "/";
  return null;
};

const sitemap = await (await fetch(`${BASE}/sitemap.xml`)).text();
const queue = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => toLocal(m[1])).filter(Boolean);
const seen = new Set();
const linkedFrom = new Map();
const pages = [];
const broken = [];

while (queue.length) {
  const path = queue.shift().split("#")[0];
  if (seen.has(path)) continue;
  seen.add(path);
  const res = await fetch(BASE + path, { redirect: "manual" });
  const type = res.headers.get("content-type") ?? "";
  if (res.status >= 400) {
    broken.push(`${res.status} ${path}  ← ${[...(linkedFrom.get(path) ?? ["sitemap"])].slice(0, 3).join(", ")}`);
    continue;
  }
  if (!type.includes("text/html")) continue;
  const html = await res.text();

  for (const m of html.matchAll(/<a[^>]+href="([^"]+)"/g)) {
    const local = toLocal(decode(m[1]));
    if (!local || local.startsWith("/_next") || local.startsWith("mailto") || local.startsWith("tel")) continue;
    const clean = local.split("#")[0].split("?")[0] || "/";
    if (!linkedFrom.has(clean)) linkedFrom.set(clean, new Set());
    linkedFrom.get(clean).add(path);
    if (!seen.has(clean)) queue.push(clean);
  }

  const noindex = /<meta[^>]*name="robots"[^>]*content="[^"]*noindex/.test(html);
  const title = decode(html.match(/<title>([^<]*)<\/title>/)?.[1] ?? "");
  const description = meta(html, "name", "description") ?? "";
  const h1s = [...html.matchAll(/<h1[\s>][\s\S]*?<\/h1>/g)].map((m) => text(m[0]).trim());
  const ld = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((m) => m[1]).join(" ");
  const types = [...new Set([...ld.matchAll(/"@type":"([A-Za-z]+)"/g)].map((m) => m[1]))];
  const body = text(html.slice(html.indexOf("<main"), html.indexOf("</main>")));
  const bare = [...body.matchAll(/(.{0,18})\b(\d[\d.,]*)\s?(DH|MAD HT)\b/g)]
    .filter((m) => !/partir de\s*$/i.test(m[1]))
    .filter((m) => !NOT_PRICES.some((re) => re.test(body.slice(Math.max(0, m.index - 20), m.index + m[0].length + 40))))
    .map((m) => m[0].trim());

  pages.push({ path, noindex, title, description, h1s, types, og: meta(html, "property", "og:image"), locale: meta(html, "property", "og:locale"), bare });
}

const issues = [];
const dupes = (key) => {
  const by = new Map();
  for (const p of pages.filter((p) => !p.noindex)) by.set(p[key], [...(by.get(p[key]) ?? []), p.path]);
  for (const [v, ps] of by) if (ps.length > 1) issues.push(`${key} en double (${ps.join(", ")}) : ${v}`);
};

for (const p of pages) {
  const at = (m) => issues.push(`${p.path} — ${m}`);
  if (p.title.length > 60) at(`title ${p.title.length} car. : ${p.title}`);
  if (!p.description) at("meta description absente");
  else if (p.description.length > 155) at(`description ${p.description.length} car.`);
  if (p.h1s.length !== 1) at(`${p.h1s.length} <h1>`);
  if (!p.og) at("og:image absente");
  if (p.locale !== "fr_MA") at(`og:locale = ${p.locale}`);
  if (p.path !== "/" && !p.types.includes("BreadcrumbList")) at("BreadcrumbList absent");
  if (p.bare.length) at(`montant sans « à partir de » : ${p.bare.slice(0, 3).join(" | ")}`);
}
dupes("title");
dupes("description");

console.log(`\n${pages.length} pages HTML contrôlées depuis ${BASE}\n`);
for (const p of pages) {
  console.log(`${p.noindex ? "[noindex] " : ""}${p.path}\n   title (${p.title.length}) ${p.title}\n   desc  (${p.description.length})\n   h1    ${p.h1s.map((h) => h.slice(0, 90)).join(" || ")}\n   ld    ${p.types.join(", ")}`);
}
console.log(`\n── Liens cassés : ${broken.length}`);
broken.forEach((b) => console.log("   " + b));
console.log(`── Points à corriger : ${issues.length}`);
issues.forEach((i) => console.log("   " + i));
process.exit(broken.length ? 1 : 0);
