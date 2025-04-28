/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // CORS and security headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: process.env.ALLOWED_ORIGINS || '*', // Configure with allowed origins
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET,POST,OPTIONS',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'X-Requested-With,Content-Type,Accept,Authorization',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
    ];
  },
  
  // Output standalone build
  output: 'standalone',
};

module.exports = nextConfig; 