import type { MDXComponents } from "mdx/types";
import { articleComponents } from "@/components/blog/mdx";

/**
 * Fichier exigé par @next/mdx (App Router). Composants par défaut des
 * fichiers MDX ; la page d'article les remplace par une version qui tient
 * compte du pays du visiteur (montants ou « sur devis »).
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return { ...articleComponents(true), ...components };
}
