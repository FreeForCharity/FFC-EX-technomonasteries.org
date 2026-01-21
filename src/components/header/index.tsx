'use client'

import React from 'react'
import Image from 'next/image'
import { assetPath } from '@/lib/assetPath'

const Header: React.FC = () => {
  return (
    <>
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
