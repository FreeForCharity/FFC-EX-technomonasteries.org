import React from 'react'
import type { Metadata } from 'next'
import EconomicModelsPage from '@/components/economic-models-page'

export const metadata: Metadata = {
  title: 'Economic Models',
  description:
    'Explore economic models for Techno-Monasteries including ecovillages, co-housing, and the medieval practice of corrodys—with historical context and analysis of their applicability.',
}

const EconomicModels = () => {
  return (
    <div>
      <EconomicModelsPage />
    </div>
  )
}

export default EconomicModels
