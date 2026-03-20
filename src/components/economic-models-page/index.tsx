'use client'

import React from 'react'
import Link from 'next/link'
import { assetPath } from '@/lib/assetPath'

const EconomicModelsPage: React.FC = () => {
  return (
    <div>
      <div
        className="showcase"
        style={{ backgroundImage: `url(${assetPath('/img/workSpace.png')})` }}
      >
        <div className="overlay">
          <h1>Economic Models</h1>
        </div>
      </div>

      <div className="mainContent">
        <h1 className="pageTitle">Economic Models for Techno-Monasteries</h1>

        <p>
          A Techno-Monastery is more than an idea—it must be financially sustainable over
          generations. History offers us several proven frameworks for communal living, shared
          resources, and long-term economic resilience. Three of the most relevant models are
          ecovillages, co-housing, and the medieval practice of corrodys. Each carries lessons about
          what works, what fails, and how a modern sanctuary for open-source developers might be
          structured and funded.
        </p>
        <p>
          Explore each model below to understand its historical roots, economic mechanisms, and
          applicability to Techno-Monasteries.
        </p>

        <div className="model-cards">
          {/* Ecovillages */}
          <div className="model-card">
            <h2>Ecovillages</h2>
            <p>
              Ecovillages are intentional communities that integrate sustainable living with shared
              social, spiritual, and economic life. Rooted in 1960s back-to-the-land movements and
              formalised through the Global Ecovillage Network in 1995, they offer a template for
              self-sufficient communal spaces that have endured for decades. Their emphasis on
              shared infrastructure and common purpose aligns closely with the Techno-Monastery
              vision.
            </p>
            <div className="model-card-footer">
              <Link href="/economic-models/ecovillages" className="gildedButton">
                Explore Ecovillages →
              </Link>
            </div>
          </div>

          {/* Co-housing */}
          <div className="model-card">
            <h2>Co-housing</h2>
            <p>
              Co-housing originated in Denmark in the late 1960s and has since spread worldwide as a
              proven model for combining private living with intentional community. Residents own or
              rent individual units while sharing common facilities such as kitchens, workshops, and
              gardens. For a Techno-Monastery, co-housing offers a financially efficient and
              socially tested structure that balances individual autonomy with collective purpose.
            </p>
            <div className="model-card-footer">
              <Link href="/economic-models/co-housing" className="gildedButton">
                Explore Co-housing →
              </Link>
            </div>
          </div>

          {/* Corrodys */}
          <div className="model-card">
            <h2>Corrodys</h2>
            <p>
              A corrody was a medieval financial instrument in which an individual paid a lump sum
              or transferred property to a monastery in exchange for lifetime board, lodging, and
              care. Widely used in England from the 13th to 15th centuries, corrodys provided
              monasteries with immediate capital while offering benefactors security in old age.
              Reimagined for today, a corrody-style model could allow patrons to fund a
              Techno-Monastery in exchange for long-term residency or membership rights.
            </p>
            <div className="model-card-footer">
              <Link href="/economic-models/corrodys" className="gildedButton">
                Explore Corrodys →
              </Link>
            </div>
          </div>
        </div>

        <div className="economic-section" style={{ marginTop: '40px' }}>
          <h2>Choosing the Right Model</h2>
          <p>
            No single model is a perfect fit for every Techno-Monastery. The best approach may
            combine elements from all three: an ecovillage-style commitment to sustainability and
            shared resources, a co-housing structure for balancing privacy with community, and a
            corrody-inspired mechanism for attracting long-term patrons who fund the space in
            exchange for access and membership.
          </p>
          <p>
            As we develop the pilot Techno-Monastery, these models provide a rich source of
            precedents, cautionary tales, and practical tools. The goal is an economic structure
            resilient enough to outlast individual contributors—one that serves the mission of
            open-source development for generations to come.
          </p>
        </div>
      </div>
    </div>
  )
}

export default EconomicModelsPage
