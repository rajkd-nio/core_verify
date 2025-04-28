import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
import { validateToken } from '../../../utils/serverUtils';

// This is the modern way to configure API routes in App Router
export const dynamic = 'force-dynamic';
export const maxDuration = 10; // Max duration in seconds
export const runtime = 'nodejs';

export async function POST(request) {
  try {
    const data = await request.json();
    const { token, ...formData } = data;
    
    // Validate the token
    if (token) {
      const validation = await validateToken(token);
      if (!validation.valid) {
        return NextResponse.json(
          { success: false, message: 'Invalid token' },
          { status: 401 }
        );
      }
    }
    
    // In a real application, you would:
    // 1. Process and store the document data
    // 2. Return a success response with document ID
    
    // For demo purposes, we'll just return success with the data
    const documentId = uuidv4();
    
    return NextResponse.json({
      success: true,
      document: {
        id: documentId,
        ...formData,
        uploadDate: new Date().toISOString()
      }
    });
  } catch (error) {
    console.error('Document upload error:', error);
    return NextResponse.json(
      { success: false, message: 'Server error' },
      { status: 500 }
    );
  }
} 