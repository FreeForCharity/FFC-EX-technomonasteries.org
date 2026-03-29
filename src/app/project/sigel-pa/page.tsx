import React from 'react'
import type { Metadata } from 'next'
import SigelPaPage from '@/components/sigel-pa-page'

export const metadata: Metadata = {
  title: 'Sigel, Pennsylvania — Eco-Village',
  description:
    'An eco-village Techno-Monastery in the Allegheny Highlands of western Pennsylvania. Affordable land, natural beauty, and a 20-year lease model for open-source developers.',
}

const SigelPa = () => {
  return (
    <div>
      <SigelPaPage />
    </div>
  )
}

export default SigelPa
