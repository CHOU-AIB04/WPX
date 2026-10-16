import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Détection du pays du visiteur.
 *
 * Next 16 a renommé `middleware` en `proxy` : ce fichier tourne avant le
 * rendu, lit l'en-tête géo posé par l'hébergeur et le repasse à l'app sous un
 * nom à nous. Les composants serveur le lisent via `src/lib/geo.ts`.
 *
 * Pourquoi un en-tête et pas un cookie : l'en-tête est recalculé à chaque
 * requête, donc un visiteur qui change de pays (ou de VPN) voit tout de suite
 * la bonne version, sans cache à purger.
 */

/** Robots d'indexation : on les laisse en « pays inconnu » pour qu'ils voient
 *  les tarifs. Googlebot crawle depuis les USA ; sans cette exception, la page
 *  /tarifs serait indexée vide de tout montant. */
const CRAWLERS =
  /googlebot|bingbot|slurp|duckduckbot|baiduspider|yandexbot|applebot|facebookexternalhit|twitterbot|linkedinbot|ahrefsbot|semrushbot|petalbot|gptbot|oai-searchbot|chatgpt-user|claudebot|claude-searchbot|claude-user|perplexitybot|perplexity-user|amazonbot|meta-externalagent|duckassistbot|mistralai-user|ccbot/i;

export function proxy(request: NextRequest) {
  const ua = request.headers.get("user-agent") ?? "";

  /** Forçage manuel pour le dev et les tests : /tarifs?pays=FR */
  const forced = request.nextUrl.searchParams.get("pays");

  const detected =
    request.headers.get("x-vercel-ip-country") ?? // Vercel
    request.headers.get("cf-ipcountry") ?? // Cloudflare
    request.headers.get("x-geo-country") ?? // proxy maison
    "";

  const country = forced ? forced : CRAWLERS.test(ua) ? "" : detected;

  const headers = new Headers(request.headers);
  headers.set("x-wpx-country", country.trim().toUpperCase());

  return NextResponse.next({ request: { headers } });
}

export const config = {
  // On exclut les assets : inutile de faire tourner le proxy sur un .svg.
  matcher: [
    "/((?!api/|_next/static/|_next/image/|favicon\\.ico|robots\\.txt|sitemap\\.xml|llms(?:-full)?\\.txt|feed\\.xml|manifest\\.webmanifest|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|woff2?)$).*)",
  ],
};
