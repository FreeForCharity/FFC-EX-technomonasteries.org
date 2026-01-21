import React from 'react'
import type { Metadata } from 'next'
import ProjectPage from '@/components/project-page'

export const metadata: Metadata = {
  title: 'The Pilot Project',
  description:
    'The first Techno-Monastery will be a proof of concept—a space where we test the model, refine our approach, and lay the foundation for something much larger.',
}

const Project = () => {
  return (
    <div>
      <ProjectPage />
    </div>
  )
}

export default Project
