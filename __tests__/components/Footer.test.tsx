import React from 'react'
import { render, screen } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import Footer from '../../src/components/footer'

// Extend Jest matchers
expect.extend(toHaveNoViolations)

describe('Footer component', () => {
  it('should render the footer', () => {
    render(<Footer />)
    const footer = screen.getByRole('contentinfo')
    expect(footer).toBeInTheDocument()
  })

  it('should have navigation links', () => {
    render(<Footer />)
    // Check for navigation links
    const links = screen.getAllByRole('link')
    expect(links.length).toBeGreaterThan(0)
  })

  it('should display Home link', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()
  })

  it('should display Project link', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Project' })).toBeInTheDocument()
  })

  it('should display FAQ link', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'FAQ' })).toBeInTheDocument()
  })

  it('should display About link', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument()
  })

  it('should have X (Twitter) social media link', () => {
    render(<Footer />)
    // Check for X/Twitter link by aria-label
    const twitterLink = screen.getByRole('button', { name: 'X (Twitter)' })
    expect(twitterLink).toBeInTheDocument()
    expect(twitterLink.getAttribute('href')).toContain('x.com/TechMonasteries')
  })

  it('should not have accessibility violations', async () => {
    const { container } = render(<Footer />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
