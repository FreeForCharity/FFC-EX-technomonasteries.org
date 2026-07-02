import React from 'react'
import type { Metadata } from 'next'
import CorrodysPage from '@/components/economic-models-page/corrodys'

export const metadata: Metadata = {
  title: 'Corrodys | Economic Models',
  description:
    'The medieval practice of corrodys—paying a monastery for lifetime board and lodging—its history from 12th-century England and how a modern corrody model could fund a Techno-Monastery.',
}

const Corrodys = () => {
  return (
    <div>
      <CorrodysPage />
    </div>
  )
}

export default Corrodys
