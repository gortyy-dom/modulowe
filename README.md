# Essa Domy Landing Page

A modern, multilingual landing page for modular houses built with React, Vite, and TypeScript.

## Features

- 🌍 Multilingual support (English, Polish, German)
- 📱 Fully responsive design
- 🎨 Modern UI inspired by landarkrv.com
- 🧪 Unit tests with Vitest
- 🚀 Deployed on Vercel

## Tech Stack

- **React 18** + **TypeScript**
- **Vite** - Build tool
- **React Router** - Routing
- **i18next** - Internationalization
- **Tailwind CSS** - Styling
- **Vitest** + **React Testing Library** - Testing
- **Google reCAPTCHA v3** - Form protection
- **Vercel** - Deployment

## Getting Started

### Prerequisites

- Node.js 20.19.0 or higher
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Set up environment variables (see ENV.md)

4. Start the development server:
```bash
npm run dev
```

5. Build for production:
```bash
npm run build
```

6. Run tests:
```bash
npm test
```

## Environment Variables

See `ENV.md` for detailed environment variable configuration.

Required variables:
- `VITE_RECAPTCHA_SITE_KEY` - Google reCAPTCHA v3 site key (optional, only if using reCAPTCHA)

## Project Structure

```
/
├── src/
│   ├── components/     # React components
│   ├── pages/         # Page components
│   ├── hooks/          # Custom React hooks
│   ├── data/           # Static data
│   ├── i18n/           # Internationalization
│   └── test/           # Test setup
└── public/             # Static assets
```

## Deployment

### Vercel

1. Push your code to GitHub
2. Import the project in Vercel
3. Configure environment variables in Vercel dashboard
4. Deploy

The project is configured for Vercel with `vercel.json`.

## Testing

Run unit tests:
```bash
npm test
```

Run tests with UI:
```bash
npm run test:ui
```

## License

Private project - All rights reserved
