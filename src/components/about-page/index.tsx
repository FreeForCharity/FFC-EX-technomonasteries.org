'use client'

import React from 'react'
import { assetPath } from '@/lib/assetPath'

const AboutPage: React.FC = () => {
  return (
    <div>
      <div className="showcase">
        <img
          className="showcaseImg"
          src={assetPath('/img/workSpace.png')}
          alt="TechnoMonasteries workspace"
        />
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
        <h1 className="pageTitle">About TechnoMonasteries</h1>
        <div className="two-column-layout">
          <div className="left-column">
            {/* Our Mission */}
            <section className="about-section">
              <img
                src={assetPath('/img/O.png')}
                alt=""
                aria-hidden="true"
                className="illuminated-letter"
              />
              <h2>Our Mission</h2>
              <p>
                TechnoMonasteries reimagines monasteries for the digital age—where technologists,
                innovators, and other future builders collaborate on meaningful work that benefits
                humanity.
              </p>
            </section>

            {/* Why It Matters */}
            <section className="about-section">
              <img
                src={assetPath('/img/W.png')}
                alt=""
                aria-hidden="true"
                className="illuminated-letter"
              />
              <h2>Why It Matters</h2>
              <br />
              <ul className="calligraphy-list">
                <li>
                  <strong>Sustaining Open-Source:</strong> Critical digital infrastructure needs
                  long-term support.
                </li>
                <li>
                  <strong>Building the Builders:</strong> Communities grow stronger when people
                  learn by building alongside others.
                </li>
                <li>
                  <strong>Accelerating Breakthroughs:</strong> Focused environments and in-person
                  collaboration fuel innovation.
                </li>
                <li>
                  <strong>Preserving Knowledge:</strong> Knowledge survives when communities have
                  the space and continuity to maintain it.
                </li>
              </ul>
            </section>

            {/* What We Offer */}
            <section className="about-section">
              <img src={assetPath('/img/W.png')} alt="" className="illuminated-letter" />
              <h2>What We Offer</h2>
              <br />
              <ul className="calligraphy-list">
                <li>
                  <strong>Work-Stays:</strong> Deep focus in inspiring settings.
                </li>
                <li>
                  <strong>Collaborative Workspaces:</strong> Designed for focused work and in-person
                  collaboration.
                </li>
                <li>
                  <strong>Learning Through Contribution:</strong> Real-world projects, mentorship,
                  and hands-on technical experience.
                </li>
                <li>
                  <strong>Community Network:</strong> Connections with technologists, innovators,
                  and other future builders.
                </li>
                <li>
                  <strong>Open-Source Incubator:</strong> Supporting open-source projects that
                  support public-interest technology.
                </li>
              </ul>
            </section>
          </div>

          <div className="right-column">
            {/* Who We Are */}
            <section className="about-section">
              <img
                src={assetPath('/img/W.png')}
                alt=""
                aria-hidden="true"
                className="illuminated-letter"
              />
              <h2>Who We Are</h2>
              <p>
                TechnoMonasteries is a growing community dedicated to supporting open knowledge,
                public goods, and meaningful technical work.
              </p>
              <div className="team-members">
                <ul className="calligraphy-list">
                  <li>
                    <strong>Tiffany Lawrence:</strong> Co-founder focused on open-source
                    sustainability and long-term stewardship of public-interest technology.
                  </li>
                  <li>
                    <strong>Frederic Pichon:</strong> Co-founder guiding the project’s architectural
                    and artistic direction.
                  </li>
                  <li>
                    <strong>Guido Gerletti:</strong> Advisor, brings expertise in biology, community
                    building, and fundraising to support the mission.
                  </li>
                </ul>
              </div>
            </section>

            {/* Contact */}
            <section className="about-section">
              <img
                src={assetPath('/img/C.png')}
                alt=""
                aria-hidden="true"
                className="illuminated-letter"
              />
              <h2>Contact</h2>
              <p>Have questions or want to learn more? Reach out to us:</p>
              <p className="contact-info">
                <strong>Email:</strong>{' '}
                <a href="mailto:contact@technomonasteries.org">contact@technomonasteries.org</a>
              </p>
            </section>

            {/* Get Involved */}
            <section className="about-section">
              <img
                src={assetPath('/img/G.jpg')}
                alt=""
                aria-hidden="true"
                className="illuminated-letter"
              />
              <h2>Get Involved</h2>
              <p>
                Join our growing community and help shape the future of TechnoMonasteries. Connect
                with us on Discord to participate in discussions, find collaboration opportunities,
                and stay updated on our progress.
              </p>
              <div style={{ textAlign: 'center' }}>
                <a href="https://discord.gg/T8dxSgZS2J" target="_blank" rel="noopener noreferrer">
                  <button className="gildedButton">Join our Discord</button>
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
