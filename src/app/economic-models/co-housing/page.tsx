import React from 'react'
import type { Metadata } from 'next'
import CoHousingPage from '@/components/economic-models-page/co-housing'

export const metadata: Metadata = {
  title: 'Co-housing | Economic Models',
  description:
    'The history of co-housing from Danish bofællesskaber to global adoption, with an assessment of how the model could structure a financially resilient Techno-Monastery.',
}

const CoHousing = () => {
  return (
    <div>
      <CoHousingPage />
    </div>
  )
}

export default CoHousing
