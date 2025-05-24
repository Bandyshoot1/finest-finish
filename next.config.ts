/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // For static export to Netlify
  images: {
    unoptimized: true, // Required for static export
  },
};

module.exports = nextConfig;
