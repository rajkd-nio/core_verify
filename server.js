// Include Next.js
const next = require('next');
const express = require('express');
require('dotenv').config();

const port = process.env.PORT || 3001;
const dev = process.env.NODE_ENV !== 'production';

// Get allowed origins from environment variables or use default
const allowedOriginsString = process.env.ALLOWED_ORIGINS || 'http://localhost:8000,http://localhost:3000';
const allowedOrigins = allowedOriginsString.split(',');

console.log('Server starting with allowed origins:', allowedOrigins);

// Initialize Next.js
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Handle API routes
  server.use('/api', express.json());

  // CORS middleware with origin validation
  server.use((req, res, next) => {
    const origin = req.headers.origin;
    
    // Check if the origin is in our allowed list
    if (origin && (allowedOrigins.includes(origin) || allowedOrigins.includes('*'))) {
      res.header('Access-Control-Allow-Origin', origin);
    } else if (dev) {
      // In development, log unauthorized access attempts
      console.warn(`Blocked request from unauthorized origin: ${origin}`);
      // Allow in dev for testing
      res.header('Access-Control-Allow-Origin', origin || '*');
    } else {
      // In production, only set CORS for allowed origins
      console.warn(`Blocked request from unauthorized origin: ${origin}`);
    }
    
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.header('Access-Control-Allow-Credentials', 'true');
    
    // Handle preflight requests
    if (req.method === 'OPTIONS') {
      return res.status(200).end();
    }
    next();
  });
  
  // Security headers middleware
  server.use((req, res, next) => {
    // Prevent iframe embedding except from allowed origins
    const allowedCSP = allowedOrigins
      .filter(origin => origin !== '*')
      .join(' ');
    
    // If we have specific allowed origins, use them for frame-ancestors
    // Otherwise, use 'self' as default
    const frameAncestors = allowedCSP ? 
      `frame-ancestors 'self' ${allowedCSP}` : 
      "frame-ancestors 'self'";
    
    // Set security headers
    res.header('Content-Security-Policy', frameAncestors);
    res.header('X-Frame-Options', 'SAMEORIGIN'); // Fallback for older browsers
    res.header('X-Content-Type-Options', 'nosniff');
    
    next();
  });

  // Let Next.js handle all other routes
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
}).catch(err => {
  console.error(err.stack);
  process.exit(1);
}); 