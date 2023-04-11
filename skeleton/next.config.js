/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['http.cat', 'example.com'],
  },
  experimental: {
    newNextLinkBehavior: false,
  },
}

module.exports = nextConfig
