// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: ["images.unsplash.com", "api.uifaces.co", "randomuser.me"],
  },
};

module.exports = nextConfig;
