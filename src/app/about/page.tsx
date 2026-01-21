import React from 'react'
import type { Metadata } from 'next'
import AboutPage from '@/components/about-page'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about Techno-Monasteries, our mission to support open-source developers, and the team behind this initiative.',
}

const About = () => {
  return (
    <div>
      <AboutPage />
    </div>
  )
}

export default About
