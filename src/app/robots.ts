import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

/**
 * Robots des moteurs de réponse et des IA génératives. On les accueille
 * explicitement : être cité par ChatGPT, Claude, Perplexity ou Gemini fait
 * partie de la stratégie GEO. Un robot qui trouve un groupe à son nom ignore
 * le groupe `*`, d'où le `disallow` répété.
 */
const AI_BOTS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "Amazonbot",
  "meta-externalagent",
  "DuckAssistBot",
  "MistralAI-User",
  "CCBot",
];

export default function robots(): MetadataRoute.Robots {
  // NOINDEX=1 sur les préproductions Vercel : on bloque tout.
  if (process.env.NOINDEX === "1") {
    return { rules: [{ userAgent: "*", disallow: "/" }] };
  }

  const disallow = ["/api/"];

  return {
    rules: [
      { userAgent: "*", allow: "/", disallow },
      { userAgent: AI_BOTS, allow: "/", disallow },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
