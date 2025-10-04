/** @type {import('@shopify/oxygen-cli').OxygenConfig} */
export default {
  // Oxygen deployment configuration
  buildCommand: 'npm run build',
  buildOutputDirectory: 'dist',
  
  // Environment variables
  env: {
    SHOPIFY_API_KEY: process.env.SHOPIFY_API_KEY,
    SHOPIFY_API_SECRET: process.env.SHOPIFY_API_SECRET,
    SHOPIFY_SCOPES: process.env.SHOPIFY_SCOPES,
    SHOPIFY_APP_URL: process.env.SHOPIFY_APP_URL,
    DATABASE_URL: process.env.DATABASE_URL,
    SESSION_SECRET: process.env.SESSION_SECRET,
  },

  // Routes configuration
  routes: {
    // API routes
    '/api/*': {
      headers: {
        'Cache-Control': 'no-cache',
      },
    },
    
    // Static assets
    '/assets/*': {
      headers: {
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    },
    
    // Images
    '/images/*': {
      headers: {
        'Cache-Control': 'public, max-age=86400',
      },
    },
  },

  // Edge functions
  edgeFunctions: [
    {
      path: '/api/auth',
      handler: './src/edge-functions/auth.js',
    },
    {
      path: '/api/webhooks',
      handler: './src/edge-functions/webhooks.js',
    },
  ],

  // Performance optimization
  minify: true,
  compression: true,
  
  // Security headers
  security: {
    headers: {
      'X-Frame-Options': 'DENY',
      'X-Content-Type-Options': 'nosniff',
      'X-XSS-Protection': '1; mode=block',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.shopify.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://cdn.shopify.com;",
    },
  },

  // CORS configuration
  cors: {
    origin: ['https://*.myshopify.com', 'https://admin.shopify.com'],
    credentials: true,
  },

  // Rate limiting
  rateLimit: {
    requests: 100,
    window: '1m',
  },
};
