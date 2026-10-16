import type { MetadataRoute } from "next";
import { tagline } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "WePushX · Agence marketing digital au Maroc",
    short_name: "WePushX",
    description: tagline,
    lang: "fr-MA",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0610",
    theme_color: "#7a1c8c",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/logo.png", sizes: "512x512", type: "image/png", purpose: "any" },
    ],
  };
}
