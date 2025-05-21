/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    // Remove console logs in production
    removeConsole: process.env.NODE_ENV === 'production',
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
          minSize: 20000,
          maxSize: 100000,
        }
      };

      // Configure module concatenation
      config.optimization.concatenateModules = true;

      // Enable module scope hoisting
      config.optimization.usedExports = true;
      config.optimization.providedExports = true;

      // Configure Terser to avoid polyfills for modern browsers
      if (config.optimization.minimizer) {
        config.optimization.minimizer.forEach((minimizer) => {
          if (minimizer.constructor.name === 'TerserPlugin') {
            minimizer.options.terserOptions = {
              ...minimizer.options.terserOptions,
              ecma: 2020,
              module: true,
              toplevel: true,
              compress: {
                ecma: 2020,
                module: true,
                toplevel: true,
                passes: 2,
              },
              mangle: {
                module: true,
              },
            };
          }
        });
      }
    }
    return config;
  }
}

module.exports = nextConfig
