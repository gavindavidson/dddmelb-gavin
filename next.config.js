/** @type {import('next').NextConfig} */
const config = {
  poweredByHeader: false,
  images: {
    unoptimized: true
  },
  experimental: {
    outputStandalone: process.env.STANDALONE_BUILD === 'true',
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          /** Rewrite for Elo voting */
          source: '/vote/voting',
          destination: '/vote/elo',
        },
        {
          /** Rewrite for Elo voting */
          source: '/vote',
          destination: '/vote/landing',
        },      
    ]}
  }
}

if (process.env.ANALYZE) {
  const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: true,
  })
  module.exports = withBundleAnalyzer(config)
} else {
  module.exports = config
}
