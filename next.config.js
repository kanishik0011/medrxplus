/** @type {import('next').NextConfig} */
const nextConfig = {
  // Performance Optimizations
  reactStrictMode: true,
  
  // Experimental Features
  experimental: {
    // Modern JavaScript
    esmExternals: true,
  },

  // Image Optimization
  images: {
    domains: [
      'images.unsplash.com', 
      'res.cloudinary.com', 
      'via.placeholder.com',
      'localhost',
      'medrx.com',
      'cdn.medrx.com',
      's3.amazonaws.com',
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Compression
  compress: true,
  
  // Headers for Performance and Security
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Security Headers
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
          // Performance Headers
          {
            key: 'X-UA-Compatible',
            value: 'IE=edge'
          },
        ],
      },
      // Static Assets Caching
      {
        source: '/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          },
        ],
      },
      // API Caching
      {
        source: '/api/medicines',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, s-maxage=300, stale-while-revalidate=600'
          },
        ],
      },
    ];
  },

  // Webpack Configuration for Bundle Optimization
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Bundle Analyzer (only in development)
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
          },
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            priority: -10,
            chunks: 'all',
          },
          react: {
            test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
            name: 'react',
            chunks: 'all',
            priority: 20,
          },
        },
      };
    }
    
    return config;
  },

  // Output Configuration
  output: 'standalone',
  trailingSlash: false,

  // Environment Variables
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api',
    NEXT_PUBLIC_APP_NAME: 'Medrx+',
    NEXT_PUBLIC_VERSION: process.env.npm_package_version || '1.0.0',
  },

  // PWA Configuration (if using next-pwa)
  ...(process.env.NODE_ENV === 'production' && {
    pwa: {
      dest: 'public',
      register: true,
      skipWaiting: true,
      runtimeCaching: [
        {
          urlPattern: /^https?.*/,
          handler: 'NetworkFirst',
          options: {
            cacheName: 'offlineCache',
            expiration: {
              maxEntries: 200,
            },
          },
        },
      ],
    },
  }),
}

module.exports = nextConfig