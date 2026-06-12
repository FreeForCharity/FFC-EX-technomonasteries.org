'use client'

import React from 'react'
import Link from 'next/link'

const Header: React.FC = () => {
  return (
    <>
      <nav
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          marginBottom: '15px',
        }}
      >
        <Link href="/" className="navbar-link">
          Home
        </Link>
        <Link href="/project" className="navbar-link">
          Project
        </Link>
        <Link href="/faq" className="navbar-link">
          FAQ
        </Link>
        <Link href="/about" className="navbar-link">
          About
        </Link>
      </nav>
      {/* Header with logo, title and tagline */}
      <div className="header">
        <h1>TECHNO MONASTERIES</h1>
        <h2 className="tagline">A Sanctuary for Open-Source</h2>
      </div>
      <hr className="horizontalLine" style={{ margin: '0px auto 15px auto' }} />
    </>
  )
}

export default Header
