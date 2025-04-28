'use client';

import { useEffect } from 'react';

// This component handles client-side Bootstrap initialization
// Next.js 14 with App Router doesn't support loading Bootstrap JS directly in layout.js
export function ClientBootstrap() {
  useEffect(() => {
    // Import Bootstrap JS on the client side only
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);
  
  return null;
}

export default ClientBootstrap; 