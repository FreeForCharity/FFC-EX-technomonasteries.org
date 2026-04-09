import React from 'react'
import type { Metadata } from 'next'
import EcovillagesPage from '@/components/economic-models-page/ecovillages'

export const metadata: Metadata = {
  title: 'Ecovillages | Economic Models',
  description:
    'A detailed history of the ecovillage movement—from Findhorn and Auroville to the Global Ecovillage Network—and an analysis of whether the model can sustain a Techno-Monastery.',
}

const Ecovillages = () => {
  return (
    <div>
      <EcovillagesPage />
    </div>
  )
}

export default Ecovillages
