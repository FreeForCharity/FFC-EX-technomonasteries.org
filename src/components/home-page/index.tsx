'use client'

import React from 'react'
import Image from 'next/image'
import { assetPath } from '@/lib/assetPath'

const HomePage: React.FC = () => {
  return (
    <>
      {/* Showcase */}
      <div className="showcase">
        <img className="showcaseImg" src={assetPath('/img/showcase.png')} alt="Showcase" />
        <div
          className="showcase-nav"
          style={{ width: '96%', margin: 'auto', position: 'absolute', top: '3%', left: '2%' }}
        >
          <img
            src={assetPath('/img/logo.png')}
            alt="Logo"
            className="showcase-nav-img"
            style={{ float: 'left' }}
          />
          <img
            src={assetPath('/img/Wells_clock_exterior.png')}
            alt="Wells Clock"
            className="showcase-nav-img"
            style={{ float: 'right' }}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="mainContent">
        <h1 className="pageTitle">A Home of Open Innovation</h1>
        <div>
          <div className="Journey">
            <div className="pageSectionTitle">The Journey</div>
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
            <div className="pageSectionTitle">The Problem</div>
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
            <div className="pageSectionTitle">Inside a Techno-Monastery</div>
            <p>
              Techno-Monasteries offer temporary accommodations and dedicated workspaces for
              builders and technical teams. Designed around deep work, these spaces balance
              independent work with shared projects, workshops, and in-person collaboration. More
              than coworking spaces, Techno-Monasteries give people a place to step away from
              distraction and concentrate on their work.
            </p>
          </div>

          <div className="cloister">
            <div className="pageSectionTitle">Join the First Build</div>
            <p>
              Techno-Monasteries is still in its early stages, and the first location in
              Pennsylvania is beginning to take shape. We’re building the community, refining the
              vision, and exploring what these spaces can become. Join the Discord to follow
              progress, share ideas, and help shape the first Techno-Monastery.
            </p>
            <div style={{ textAlign: 'center' }}>
              <a href="https://discord.gg/T8dxSgZS2J" target="_blank" rel="noopener noreferrer">
                <button className="gildedButton">Join our Discord</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
