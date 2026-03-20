import React from 'react'
import type { Metadata } from 'next'
import NederlandCoPage from '@/components/nederland-co-page'

export const metadata: Metadata = {
  title: 'Nederland, Colorado — Co-Housing',
  description:
    'A co-housing Techno-Monastery in the Rocky Mountains, 30 minutes from Boulder. Fiber internet, proximity to tech, and mountain lifestyle for open-source developers.',
}

const NederlandCo = () => {
  return (
    <div>
      <NederlandCoPage />
    </div>
  )
}

export default NederlandCo
