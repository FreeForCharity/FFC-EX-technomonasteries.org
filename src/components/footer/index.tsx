'use client'

import React from 'react'
import Link from 'next/link'
import { FaXTwitter } from 'react-icons/fa6'

// Inline-block padding keeps link tap targets comfortably ≥24px on touch.
const linkTap: React.CSSProperties = { display: 'inline-block', padding: '6px 4px' }

const Footer: React.FC = () => {
  return (
    <footer>
      <hr className="horizontalLine" style={{ margin: '0px auto 15px auto' }} />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          padding: '5px',
          flexWrap: 'wrap',
          alignItems: 'center',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'row', paddingTop: '10px' }}>
          <ul
            className="footer-menu"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              listStyle: 'none',
              padding: 0,
              margin: 0,
            }}
          >
            <li className="footer-item" style={{ marginRight: '15px' }}>
              <Link href="/" className="navbar-link" style={linkTap}>
                Home
              </Link>
            </li>
            <li className="footer-item" style={{ marginRight: '15px' }}>
              <Link href="/project" className="navbar-link" style={linkTap}>
                Project
              </Link>
            </li>
            <li className="footer-item" style={{ marginRight: '15px' }}>
              <Link href="/faq" className="navbar-link" style={linkTap}>
                FAQ
              </Link>
            </li>
            <li className="footer-item" style={{ marginRight: '15px' }}>
              <Link href="/about" className="navbar-link" style={linkTap}>
                About
              </Link>
            </li>
            <li className="footer-item">
              <Link href="/economic-models" className="navbar-link" style={linkTap}>
                Economic Models
              </Link>
            </li>
          </ul>
          <div style={{ paddingLeft: '30px' }}>
            {/* X */}
            <a
              className="circleBtn"
              href="https://x.com/TechMonasteries"
              role="button"
              aria-label="X (Twitter)"
              style={{ textDecoration: 'none' }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter style={{ color: 'white', fontSize: '1.5rem' }} />
            </a>
          </div>
        </div>
      </div>

      {/* Legal / policy links */}
      <nav
        aria-label="Legal"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '4px 18px',
          padding: '4px 12px',
        }}
      >
        <Link href="/privacy-policy" className="footer-legal-link" style={linkTap}>
          Privacy Policy
        </Link>
        <Link href="/cookie-policy" className="footer-legal-link" style={linkTap}>
          Cookie Policy
        </Link>
        <Link href="/terms-of-service" className="footer-legal-link" style={linkTap}>
          Terms of Service
        </Link>
      </nav>

      {/* Copyright & affiliation */}
      <p
        style={{
          textAlign: 'center',
          fontSize: '1.3rem',
          padding: '4px 12px 16px',
          margin: 0,
          opacity: 0.85,
        }}
      >
        © Techno-Monasteries — a project of{' '}
        <a
          href="https://freeforcharity.org"
          className="footer-legal-link"
          style={linkTap}
          target="_blank"
          rel="noopener noreferrer"
        >
          Free For Charity
        </a>
        , a registered nonprofit.
      </p>
    </footer>
  )
}

export default Footer
