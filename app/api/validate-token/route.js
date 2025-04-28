import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export async function POST(request) {
  try {
    // Skip actual token validation for now per requirements
    // Always return valid = true regardless of the token
    
    return NextResponse.json({
      valid: true,
      user: {
        id: 'demo-user',
      }
    });
  } catch (error) {
    console.error('Token validation error:', error);
    
    // Even on error, return success for now to bypass authentication
    return NextResponse.json({ valid: true });
  }
} 