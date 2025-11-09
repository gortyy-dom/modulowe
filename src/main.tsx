import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'
import './i18n'
import './index.css'
import App from './App.tsx'

const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY || ''

if (!RECAPTCHA_SITE_KEY && import.meta.env.DEV) {
  console.warn(
    '⚠️ VITE_RECAPTCHA_SITE_KEY is not set. reCAPTCHA will not work. ' +
    'Create a .env file with VITE_RECAPTCHA_SITE_KEY=your_key'
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {RECAPTCHA_SITE_KEY ? (
      <GoogleReCaptchaProvider
        reCaptchaKey={RECAPTCHA_SITE_KEY}
        scriptProps={{
          async: false,
          defer: false,
          appendTo: 'head',
          nonce: undefined,
        }}
      >
        <App />
      </GoogleReCaptchaProvider>
    ) : (
      <App />
    )}
  </StrictMode>,
)
