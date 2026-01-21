import React from 'react'
import type { Metadata } from 'next'
import FAQPage from '@/components/faq-page'

export const metadata: Metadata = {
  title: 'FAQ',
  description:
    'Frequently asked questions about Techno-Monasteries, our mission, participation opportunities, and how we support open-source developers.',
}

const FAQ = () => {
  return (
    <div>
      <FAQPage />
    </div>
  )
}

export default FAQ
