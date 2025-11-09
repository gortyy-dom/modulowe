# Environment Variables

This document describes all environment variables required for the application.

## Frontend Variables

These variables are prefixed with `VITE_` and are available in the browser.

### `VITE_RECAPTCHA_SITE_KEY`
- **Description**: Google reCAPTCHA v3 site key
- **Required**: Yes
- **How to get**: 
  1. Go to [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin)
  2. Create a new site
  3. Select reCAPTCHA v3
  4. Add your domain
  5. Copy the Site Key

## Setting Up in Vercel

1. Go to your project in Vercel dashboard
2. Navigate to Settings > Environment Variables
3. Add each variable:
   - For production: Add to "Production"
   - For preview: Add to "Preview" (optional)
   - For development: Add to "Development" (optional)

## Local Development

Create a `.env` file in the root directory:

```env
VITE_RECAPTCHA_SITE_KEY=your_site_key_here
```

For local testing of the API endpoint, you can use Vercel CLI:
```bash
vercel dev
```

This will use environment variables from your Vercel project.

## Security Notes

- Never commit `.env` files to version control
- The `.env.example` file (if created) should not contain actual secrets

