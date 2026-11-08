import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  // Articles du blog en MDX (src/content/blog), importés par /blog/[slug].
  pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"],

  allowedDevOrigins: [
    "infinite-tries-stay-mode.trycloudflare.com",
  ],

  images: {
    // Les captures de comptes publicitaires sont hébergées sur notre
    // Cloudinary. Next refuse toute URL externe non déclarée ici, même quand
    // l'image porte `unoptimized`.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/drn1zdkwa/**",
      },
    ],
  },

  async headers() {
    /*
     * Pages géolocalisées (src/lib/geo.ts) : rendues à chaque requête. Next
     * leur pose `no-store`, ce qui interdit le cache avant/arrière (bfcache)
     * du navigateur. `no-cache` suffit : jamais servi sans revalidation, ni
     * mis en cache partagé (`private`), mais le retour arrière est instantané.
     */
    const geoPages = ["/", "/tarifs", "/offres", "/presentation", "/services", "/services/:slug"].map((source) => ({
      source,
      headers: [{ key: "Cache-Control", value: "private, no-cache, max-age=0, must-revalidate" }],
    }));

    if (process.env.NOINDEX !== "1") {
      return geoPages;
    }

    return [
      ...geoPages,
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow",
          },
        ],
      },
    ];
  },
};

/** remark-gfm : tableaux Markdown. Plugin passé par son nom (exigé par Turbopack). */
const withMDX = createMDX({
  options: { remarkPlugins: ["remark-gfm"] },
});

export default withMDX(nextConfig);
