import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'
import { useCallback } from 'react'

export const useReCaptcha = () => {
  const { executeRecaptcha } = useGoogleReCaptcha()

  const getReCaptchaToken = useCallback(async (): Promise<string | null> => {
    if (!executeRecaptcha) {
      console.error('reCAPTCHA not loaded. Make sure VITE_RECAPTCHA_SITE_KEY is set in your .env file.')
      return null
    }

    try {
      const token = await executeRecaptcha('contact_form')
      return token
    } catch (error) {
      console.error('reCAPTCHA error:', error)
      return null
    }
  }, [executeRecaptcha])

  return { getReCaptchaToken }
}

