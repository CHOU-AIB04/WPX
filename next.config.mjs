/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  allowedDevOrigins: ['launderable-song-subnodulose.ngrok-free.dev'],

  // Serve images from Supabase storage
  images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: '*.supabase.co',
      pathname: '/**',
    },
    {
      protocol: 'https',
      hostname: 'images.unsplash.com',
      pathname: '/**',
    },
    {
      protocol: 'https',
      hostname: 'tempfile.aiquickdraw.com',
      pathname: '/**',
    },
  ],
}
  // Security + SEO headers
  // async headers() {
  //   return [
  //     {
  //       source: '/(.*)',
  //       headers: [
  //         { key: 'X-Content-Type-Options',    value: 'nosniff' },
  //         { key: 'X-Frame-Options',           value: 'DENY' },
  //         { key: 'X-XSS-Protection',          value: '1; mode=block' },
  //         { key: 'Referrer-Policy',           value: 'strict-origin-when-cross-origin' },
  //         { key: 'Permissions-Policy',        value: 'camera=(), microphone=(), geolocation=()' },
  //       ],
  //     },
  //     // Cache static assets aggressively
  //     {
  //       source: '/_next/static/(.*)',
  //       headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
  //     },
  //     // Cache feed + sitemap for 1 hour
  //     {
  //       source: '/(sitemap.xml|feed.xml)',
  //       headers: [{ key: 'Cache-Control', value: 'public, max-age=3600, stale-while-revalidate=86400' }],
  //     },
  //   ]
  // },
}

export default nextConfig
