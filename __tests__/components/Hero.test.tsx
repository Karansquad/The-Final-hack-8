import { render, screen } from '@testing-library/react'
import { Hero } from '@/components/Hero'

// Mock Next.js Image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => <img {...props} />
}))

describe('Hero Component', () => {
  it('renders the main headline', () => {
    render(<Hero />)
    expect(screen.getByText("Kwality Walls")).toBeInTheDocument()
  })

  it('renders the subheadline', () => {
    render(<Hero />)
    expect(screen.getByText(/Discover our signature flavors/)).toBeInTheDocument()
  })

  it('renders CTA buttons', () => {
    render(<Hero />)
    expect(screen.getByText('Explore Flavours')).toBeInTheDocument()
    expect(screen.getByText('Find a Store')).toBeInTheDocument()
  })
})
