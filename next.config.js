/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    qualities: [60, 75],
    // Keep optimized images cacheable in the browser (Next applies this as max-age).
    minimumCacheTTL: 2592000,
    remotePatterns: [
      { protocol: "https", hostname: "res.cloudinary.com", pathname: "**" },
      { protocol: "https", hostname: "ik.imagekit.io", pathname: "**" },
    ],
  },
  headers: () => [
    {
      // Exclude /_next from no-store so optimized images and static assets stay cacheable.
      source: "/((?!_next/).*)",
      headers: [
        {
          key: 'Cache-Control',
          value: 'no-store',
        },
      ],
    },
  ],
};

module.exports = nextConfig;
