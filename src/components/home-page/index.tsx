'use client'

import React from 'react'
import Link from 'next/link'
import { assetPath } from '@/lib/assetPath'

const HomePage: React.FC = () => {
  return (
    <>
      {/* Showcase. Explicit width/height reserve the aspect ratio to avoid
          layout shift; assetPath keeps images correct under basePath deploys. */}
      <div className="showcase">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="showcaseImg"
          src={assetPath('/img/showcase.png')}
          alt="Illustration of a Romanesque monastery building representing a Techno-Monastery"
          width={603}
          height={418}
          fetchPriority="high"
        />
        <div
          className="showcase-nav"
          style={{ width: '96%', margin: 'auto', position: 'absolute', top: '3%', left: '2%' }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={assetPath('/img/logo.png')}
            alt="Techno-Monasteries logo"
            className="showcase-nav-img"
            width={528}
            height={514}
            style={{ float: 'left' }}
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={assetPath('/img/Wells_clock_exterior.png')}
            alt="Astronomical clock, evoking timeless craftsmanship"
            className="showcase-nav-img"
            width={838}
            height={800}
            style={{ float: 'right' }}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="mainContent">
        <h1 className="pageTitle">A Home of Open Innovation</h1>

        {/* Primary calls-to-action, above the fold */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '12px',
            justifyContent: 'center',
            marginBottom: '24px',
          }}
        >
          <a
            className="gildedButton"
            href="https://discord.gg/T8dxSgZS2J"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join our Discord
          </a>
          <Link className="gildedButton" href="/project/sigel-pa">
            See the Pilot Project
          </Link>
        </div>

        <div>
          <div className="Journey">
            <h2 className="pageSectionTitle">The Journey</h2>
            <p>
              Throughout history, seekers of knowledge—Pythagoras in Egypt, Fibonacci in North
              Africa, and the scholars of the Silk Road—traveled between monasteries, libraries, and
              centers of learning. Their journeys weren’t just for personal enlightenment; they
              carried ideas across borders, strengthening the fabric of shared knowledge.
            </p>
            <p>
              Techno-Monasteries revive this tradition for the digital age, creating environments
              where builders can come together for focused work sprints.
            </p>
          </div>

          <div className="problem">
            <h2 className="pageSectionTitle">The Problem</h2>
            <p>Many open-source and public-good builders face the same recurring problems:</p>
            <ul className="calligraphy-list">
              <li>Critical open-source infrastructure is often maintained with little support.</li>
              <li>Burnout from balancing volunteer work with full-time jobs.</li>
              <li>Isolation from working remotely and independently.</li>
              <li>Few spaces built for immersive work sprints.</li>
            </ul>
            <p>
              Techno-Monasteries are designed to address these challenges by providing a physical
              space that fosters focus, connection, and growth for builders.
            </p>
          </div>

          <div className="life">
            <h2 className="pageSectionTitle">Inside a Techno-Monastery</h2>
            <p>
              Techno-Monasteries offer temporary accommodations and dedicated workspaces for
              builders and technical teams. Designed around deep work, these spaces balance
              independent work with shared projects, workshops, and in-person collaboration. More
              than coworking spaces, Techno-Monasteries give people a place to step away from
              distraction and concentrate on their work.
            </p>
          </div>

          <div className="cloister">
            <h2 className="pageSectionTitle">Join the First Build</h2>
            <p>
              Techno-Monasteries is still in its early stages, and the first location in
              Pennsylvania is beginning to take shape. We’re building the community, refining the
              vision, and exploring what these spaces can become. Join the Discord to follow
              progress, share ideas, and help shape the first Techno-Monastery.
            </p>
            <div style={{ textAlign: 'center' }}>
              <a
                className="gildedButton"
                href="https://discord.gg/T8dxSgZS2J"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join our Discord
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
