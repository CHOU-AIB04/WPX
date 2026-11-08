// Serveur uniquement (lecture disque) : à n'importer que depuis des composants serveur.
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { slugify } from "./slugify";

/**
 * Lecture du MDX brut, côté serveur uniquement : temps de lecture et table
 * des matières. Les ids des titres sont calculés avec le même `slugify` que
 * le composant <h2> de src/mdx-components.tsx : les ancres correspondent.
 */

const DIR = join(process.cwd(), "src/content/blog");

export const rawPost = (slug: string) => readFileSync(join(DIR, `${slug}.mdx`), "utf8");

/** Texte lisible : sans balises JSX, sans syntaxe Markdown. */
const plain = (mdx: string) =>
  mdx
    .replace(/<Prix[^>]*\/>/g, "à partir de 1 000 DH")
    .replace(/<Budget[^>]*\/>/g, "3 000 DH")
    .replace(/<[^>]+>/g, " ")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/[#*|>_`-]/g, " ");

export const wordCount = (slug: string) => plain(rawPost(slug)).split(/\s+/).filter((w) => /[\p{L}\d]/u.test(w)).length;

/** 220 mots par minute, arrondi au-dessus. */
export const readingTime = (slug: string) => Math.max(1, Math.ceil(wordCount(slug) / 220));

export const tableOfContents = (slug: string) =>
  [...rawPost(slug).matchAll(/^## (.+)$/gm)].map((m) => ({ id: slugify(m[1].trim()), title: m[1].trim() }));
