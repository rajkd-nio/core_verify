# Core Verify Upgrade Notes

## Next.js 14 & Node.js 22 LTS Upgrade

This document outlines the major changes made during the upgrade of Core Verify from an older Next.js 9 / Node.js 12 application to Next.js 14 with Node.js 22 LTS.

### Major Changes

1. **Migrated from Pages Router to App Router**
   - Restructured the application to use the Next.js 14 App Router
   - Added 'use client' directives to client components
   - Moved page components to appropriate directories under `app/`

2. **Updated Dependencies**
   - React 16 → React 18
   - Bootstrap 4 → Bootstrap 5
   - Updated all packages to latest compatible versions
   - Added proper client-side Bootstrap initialization

3. **API Routes**
   - Replaced Express server with Next.js API routes
   - Created proper route handlers for token validation and document uploads
   - Added server-side utilities for validation

4. **Architecture Improvements**
   - Added better type safety with default props
   - Improved error handling
   - Enhanced security for cross-origin communication
   - Added demo page for easier integration

### Testing the Upgraded App

To test the application:

1. Run the development server:
   ```bash
   npm run dev
   ```

2. Visit the main routes:
   - Main uploader: http://localhost:3001/
   - Iframe uploader: http://localhost:3001/iframe-uploader?token=test-token
   - Demo page: http://localhost:3001/demo

### Known Limitations

- The document uploader still uses mock data for submissions
- No file upload functionality has been implemented yet
- Environment variables need to be set properly in production

### Future Enhancements

- Add real JWT token validation
- Implement actual file upload functionality
- Add TypeScript for better type safety
- Add comprehensive test suite

## Directories Comparison

**Before:**
```
core_verify/
├── components/
├── pages/
│   ├── _app.js
│   ├── index.js
│   └── iframe-uploader.js
├── server.js
└── utils/
```

**After:**
```
core_verify/
├── app/
│   ├── api/
│   │   ├── upload-document/
│   │   └── validate-token/
│   ├── demo/
│   ├── iframe-uploader/
│   ├── globals.css
│   ├── layout.js
│   └── page.js
├── components/
├── utils/
└── next.config.js
```

## Removed Files

- `server.js` (replaced with Next.js API routes)
- `pages/` directory (migrated to `app/` directory)
- Various legacy configuration files

The application should now be more maintainable, secure, and compatible with modern React and Next.js patterns. 