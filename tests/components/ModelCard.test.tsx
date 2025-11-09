import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { ModelCard } from '@/components/ModelCard'
import type { Product } from '@/data/products'

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <BrowserRouter>{children}</BrowserRouter>
)

const mockProduct: Product = {
  id: 'test',
  name: 'Test Model',
  bedrooms: 2,
  size: '50 m²',
  features: ['Feature 1', 'Feature 2', 'Feature 3'],
  image: '/test-image.jpg',
  available: true,
}

describe('ModelCard', () => {
  it('renders product information', () => {
    render(<ModelCard product={mockProduct} />, { wrapper })
    
    expect(screen.getByText('Test Model')).toBeInTheDocument()
    expect(screen.getByText(/Sleeps up to 2/)).toBeInTheDocument()
  })

  it('renders product features', () => {
    render(<ModelCard product={mockProduct} />, { wrapper })
    
    expect(screen.getByText('Feature 1')).toBeInTheDocument()
    expect(screen.getByText('Feature 2')).toBeInTheDocument()
    expect(screen.getByText('Feature 3')).toBeInTheDocument()
  })

  it('renders explore button', () => {
    render(<ModelCard product={mockProduct} />, { wrapper })
    
    const exploreButton = screen.getByText(/EXPLORE/i)
    expect(exploreButton).toBeInTheDocument()
  })

  it('has correct link to model page', () => {
    render(<ModelCard product={mockProduct} />, { wrapper })
    
    const link = screen.getByText(/EXPLORE/i).closest('a')
    expect(link).toHaveAttribute('href', '/models#test')
  })
})

