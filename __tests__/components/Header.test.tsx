import React from 'react'
import { render, screen } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import Header from '../../src/components/header'

// Extend Jest matchers
expect.extend(toHaveNoViolations)

// Mock next/navigation
jest.mock('next/navigation', () => ({
  usePathname: jest.fn(() => '/'),
}))

// Mock framer-motion to avoid animation issues in tests
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => (
      <div {...props}>{children}</div>
    ),
    nav: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => (
      <nav {...props}>{children}</nav>
    ),
  },
  AnimatePresence: ({ children }: React.PropsWithChildren) => <>{children}</>,
}))

describe('Header component', () => {
  it('should render the header', () => {
    render(<Header />)
    // Check for the header div element
    expect(screen.getByText(/TECHNO MONASTERIES/i)).toBeInTheDocument()
  })

  it('should display the site title', () => {
    render(<Header />)
    // Check for the main title "TECHNO MONASTERIES"
    expect(screen.getByText(/TECHNO MONASTERIES/i)).toBeInTheDocument()
  })

  it('should display the tagline', () => {
    render(<Header />)
    // Check for tagline text
    expect(screen.getByText(/A Sanctuary for Open-Source/i)).toBeInTheDocument()
  })

  it('should not have accessibility violations', async () => {
    const { container } = render(<Header />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
