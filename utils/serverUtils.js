// Server-side utilities for the Core Verify application
// Note: This file is used on the server, so no 'use client' directive is needed

/**
 * Validates if an origin is allowed based on the ALLOWED_ORIGINS environment variable
 * @param {string} origin - The origin to validate
 * @returns {boolean} - Whether the origin is allowed
 */
export const isAllowedOrigin = (origin) => {
  // If no origin provided, reject
  if (!origin) return false;
  
  // Get allowed origins from environment
  const allowedOriginsStr = process.env.ALLOWED_ORIGINS || '';
  const allowedOrigins = allowedOriginsStr.split(',').map(o => o.trim());
  
  // If * is in the list, all origins are allowed
  if (allowedOrigins.includes('*')) return true;
  
  // Check if the specific origin is allowed
  return allowedOrigins.includes(origin);
};

/**
 * Validates a token (placeholder for real token validation)
 * @param {string} token - The token to validate
 * @returns {Promise<{valid: boolean, error?: string}>} - Validation result
 */
export const validateToken = async (token) => {
  // In a real application, validate the JWT or other token format
  // This is a placeholder implementation
  
  if (!token) {
    return { valid: false, error: 'No token provided' };
  }
  
  // If strict validation is disabled, accept any non-empty token
  if (process.env.STRICT_TOKEN_VALIDATION !== 'true') {
    return { valid: true };
  }
  
  // For demonstration purposes, we'll accept tokens that look like a JWT
  // In a real app, you'd verify the signature using JWT_SECRET
  if (token.split('.').length === 3) {
    return { valid: true };
  }
  
  return { valid: false, error: 'Invalid token format' };
}; 