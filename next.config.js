/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "res.cloudinary.com", pathname: "**" },
      { protocol: "https", hostname: "ik.imagekit.io", pathname: "**" },
    ],
  },
  i18n: {
    locales: ["es"],
    defaultLocale: "es",
  },
  headers: () => [
    {
      source: "/(.*)",
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
