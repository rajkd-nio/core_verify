# Core Verify Document Upload System

A secure document verification and upload system built with Next.js 14 and Node.js 22 LTS.

## Features

- Document information submission
- Iframe embedding for third-party integrations
- Secure token-based authentication
- Cross-origin communication
- Demo page for integration examples

## Requirements

- Node.js 22 LTS or higher
- npm or yarn

## Getting Started

1. Clone the repository
2. Copy `.env.example` to `.env.local` and adjust settings
3. Install dependencies:

```bash
npm install
# or
yarn
```

4. Run the development server:

```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3001](http://localhost:3001) in your browser

## Pages

- **Main page** (`/`): Standalone document uploader
- **Iframe Uploader** (`/iframe-uploader`): Embeddable document uploader with authentication
- **Demo** (`/demo`): Example page showing how to embed the uploader

## Integration

To integrate the document uploader into your application:

1. Create an iframe pointing to `/iframe-uploader?token=YOUR_AUTH_TOKEN`
2. Set up event listeners to receive upload results
3. Optionally send configuration via postMessage

Example:

```html
<iframe
  src="https://your-domain.com/iframe-uploader?token=YOUR_AUTH_TOKEN"
  width="100%"
  height="600"
  style="border: 1px solid #ddd; border-radius: 4px;"
></iframe>

<script>
  window.addEventListener('message', (event) => {
    // Verify origin for security
    if (event.origin !== 'https://your-domain.com') return;
    
    if (event.data.type === 'DOCUMENT_UPLOADED') {
      console.log('Document uploaded:', event.data.document);
      // Handle successful upload
    } else if (event.data.type === 'UPLOAD_ERROR') {
      console.error('Upload error:', event.data.error);
      // Handle error
    }
  });
</script>
```

See the `/demo` page for more detailed integration examples.

## Environment Variables

- `ALLOWED_ORIGINS`: Comma-separated list of allowed origins for CORS
- `JWT_SECRET`: Secret key for JWT token validation
- `STRICT_TOKEN_VALIDATION`: Whether to strictly validate tokens
- `NEXT_PUBLIC_ALLOW_PARENT_CONFIG_OVERRIDE`: Allow parent window to provide configuration

## Deployment

This application can be deployed to any platform that supports Next.js, such as Vercel or Netlify.

```bash
npm run build
npm run start
``` 