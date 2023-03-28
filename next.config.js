/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['links.papareact.com', 'fakestoreapi.com', 'i.pravatar.cc'],
  },
  experimental: { appDir: true },
};

module.exports = nextConfig;
