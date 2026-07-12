'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/project', label: 'Project' },
  { href: '/faq', label: 'FAQ' },
  { href: '/about', label: 'About' },
  { href: '/economic-models', label: 'Economic Models' },
]

const Header: React.FC = () => {
  const pathname = usePathname()

  return (
    <header>
      <nav
        aria-label="Primary"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '8px 20px',
          marginBottom: '15px',
        }}
      >
        {NAV_LINKS.map(({ href, label }) => {
          const isActive = href === '/' ? pathname === '/' : pathname.startsWith(href)
          return (
            <Link
              key={href}
              href={href}
              className={`navbar-link${isActive ? ' active' : ''}`}
              aria-current={isActive ? 'page' : undefined}
            >
              {label}
            </Link>
          )
        })}
      </nav>
      {/* Site identity: wordmark + tagline (branding, not page headings) */}
      <div className="header">
        <div className="siteTitle">TECHNO MONASTERIES</div>
        <p className="tagline">A Sanctuary for Open-Source</p>
      </div>
      <hr className="horizontalLine" style={{ margin: '0px auto 15px auto' }} />
    </header>
  )
}

export default Header
