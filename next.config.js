/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  transpilePackages: ['next-international', 'international-types']
}

module.exports = nextConfig
