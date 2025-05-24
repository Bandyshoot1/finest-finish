/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    esmExternals: "loose", // Add this line
  },
};

module.exports = nextConfig;
