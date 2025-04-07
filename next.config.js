/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["geist"],
  images: {
    domains: ["i.imgur.com", "github.com"],
  },
  async rewrites() {
    return [
      {
        source: '/dir/:project',
        destination: '/dir/:project/index.html',
      },
    ];
  },
};

module.exports = nextConfig;
