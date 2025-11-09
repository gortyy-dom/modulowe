import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { LanguageSwitcher } from '@/components/LanguageSwitcher'
import i18n from '@/i18n'

describe('LanguageSwitcher', () => {
  it('renders all language options', () => {
    render(<LanguageSwitcher />)
    
    expect(screen.getByText('EN')).toBeInTheDocument()
    expect(screen.getByText('PL')).toBeInTheDocument()
    expect(screen.getByText('DE')).toBeInTheDocument()
  })

  it('highlights current language', () => {
    i18n.changeLanguage('en')
    render(<LanguageSwitcher />)
    
    const enButton = screen.getByText('EN').closest('button')
    expect(enButton).toHaveClass('text-black')
  })

  it('changes language on click', async () => {
    const changeLanguageSpy = vi.spyOn(i18n, 'changeLanguage')
    render(<LanguageSwitcher />)
    
    const plButton = screen.getByText('PL')
    plButton.click()
    
    expect(changeLanguageSpy).toHaveBeenCalledWith('pl')
  })
})

