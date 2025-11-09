import { describe, it, expect, vi, beforeEach } from 'vitest'
import { renderHook, waitFor } from '@testing-library/react'
import { useReCaptcha } from '@/hooks/useReCaptcha'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'

const mockExecuteRecaptcha = vi.fn()

vi.mock('react-google-recaptcha-v3', async () => {
  const actual = await vi.importActual('react-google-recaptcha-v3')
  return {
    ...actual,
    useGoogleReCaptcha: () => ({
      executeRecaptcha: mockExecuteRecaptcha,
    }),
  }
})

describe('useReCaptcha', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('returns getReCaptchaToken function', () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <GoogleReCaptchaProvider reCaptchaKey="test-key">
        {children}
      </GoogleReCaptchaProvider>
    )

    const { result } = renderHook(() => useReCaptcha(), { wrapper })
    
    expect(result.current.getReCaptchaToken).toBeDefined()
    expect(typeof result.current.getReCaptchaToken).toBe('function')
  })

  it('calls executeRecaptcha with correct action', async () => {
    mockExecuteRecaptcha.mockResolvedValue('test-token')

    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <GoogleReCaptchaProvider reCaptchaKey="test-key">
        {children}
      </GoogleReCaptchaProvider>
    )

    const { result } = renderHook(() => useReCaptcha(), { wrapper })
    
    await result.current.getReCaptchaToken()
    
    expect(mockExecuteRecaptcha).toHaveBeenCalledWith('contact_form')
  })

  it('returns token on success', async () => {
    mockExecuteRecaptcha.mockResolvedValue('test-token-123')

    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <GoogleReCaptchaProvider reCaptchaKey="test-key">
        {children}
      </GoogleReCaptchaProvider>
    )

    const { result } = renderHook(() => useReCaptcha(), { wrapper })
    
    const token = await result.current.getReCaptchaToken()
    
    expect(token).toBe('test-token-123')
  })

  it('returns null on error', async () => {
    mockExecuteRecaptcha.mockRejectedValue(new Error('reCAPTCHA error'))

    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <GoogleReCaptchaProvider reCaptchaKey="test-key">
        {children}
      </GoogleReCaptchaProvider>
    )

    const { result } = renderHook(() => useReCaptcha(), { wrapper })
    
    const token = await result.current.getReCaptchaToken()
    
    expect(token).toBeNull()
  })
})

