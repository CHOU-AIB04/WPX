import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
    if (process.env.NOINDEX !== "1") {
      return [];
    }

    return [
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

export default nextConfig;
