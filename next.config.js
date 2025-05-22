/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    // Remove console logs in production
    removeConsole: process.env.NODE_ENV === 'production',
  },
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp'],
    minimumCacheTTL: 60,
  },
  // Configure webpack to optimize bundles
  webpack: (config, { dev, isServer }) => {
    // Only optimize client-side bundles in production
    if (!dev && !isServer) {
      config.optimization = {
        ...config.optimization,
        // Optimize chunk splitting
        splitChunks: {
          chunks: 'all',
          minSize: 10000,
          maxSize: 40000,
        },
        // Enable module concatenation
        concatenateModules: true,
        // Enable tree shaking
        usedExports: true,
        minimize: true,
        minimizer: [
          ...config.optimization.minimizer || [],
        ]
      };
    }
    return config;
  }
}

module.exports = nextConfig
