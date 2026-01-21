'use client'

import React from 'react'
import Link from 'next/link'
import { FaXTwitter } from 'react-icons/fa6'

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
            style={{ display: 'flex', listStyle: 'none', padding: 0, margin: 0 }}
          >
            <li className="footer-item" style={{ marginRight: '15px' }}>
              <Link href="/" className="navbar-link">
                Home
              </Link>
            </li>
            <li className="footer-item" style={{ marginRight: '15px' }}>
              <Link href="/project" className="navbar-link">
                Project
              </Link>
            </li>
            <li className="footer-item" style={{ marginRight: '15px' }}>
              <Link href="/faq" className="navbar-link">
                FAQ
              </Link>
            </li>
            <li className="footer-item">
              <Link href="/about" className="navbar-link">
                About
              </Link>
            </li>
          </ul>
          <div className="" style={{ paddingLeft: '30px' }}>
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
    </footer>
  )
}

export default Footer
