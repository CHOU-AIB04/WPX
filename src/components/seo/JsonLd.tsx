/**
 * Données structurées. `<` est échappé : une chaîne de contenu contenant
 * « </script> » ne peut pas fermer la balise (recommandation Next.js).
 */
export function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
