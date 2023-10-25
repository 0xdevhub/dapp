/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,

  async redirects() {
    return [
      {
        source: '/en/',
        destination: '/en/apps/',
        permanent: false
      },
      {
        source: '/pt/',
        destination: '/pt/apps/',
        permanent: false
      }
    ]
  },
  transpilePackages: ['next-international', 'international-types']
}

module.exports = nextConfig
