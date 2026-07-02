import React from 'react'
import type { Metadata } from 'next'
import ActiveProjectsPage from '@/components/active-projects-page'

export const metadata: Metadata = {
  title: 'Active Projects',
  description:
    'Two candidate locations for the first Techno-Monastery: an eco-village in Sigel, Pennsylvania and a co-housing community in Nederland, Colorado.',
}

const Project = () => {
  return (
    <div>
      <ActiveProjectsPage />
    </div>
  )
}

export default Project
