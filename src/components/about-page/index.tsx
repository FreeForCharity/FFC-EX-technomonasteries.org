'use client'

import React from 'react'
import { assetPath } from '@/lib/assetPath'

const AboutPage: React.FC = () => {
  return (
    <div>
      <div
        className="showcase"
        style={{ backgroundImage: `url(${assetPath('/img/workSpace.png')})` }}
      >
        <div className="overlay">
          <h1>About TechnoMonasteries</h1>
        </div>
      </div>

      <div className="mainContent">
        <div className="two-column-layout">
          <div className="left-column">
            {/* Our Mission */}
            <section className="about-section">
              <h2>
                <img src={assetPath('/img/O.png')} alt="O" className="illuminated-letter" />
                ur Mission
              </h2>
              <p>
                TechnoMonasteries is dedicated to creating spaces where technology, community, and
                creativity intersect. Inspired by the historical role of monasteries as centers of
                learning, preservation, and innovation, we aim to build modern sanctuaries for
                collaborative work and skill development.
              </p>
              <p>
                Our mission is to provide accessible environments where individuals can learn,
                create, and contribute to projects that benefit the broader community. We believe in
                the power of shared knowledge and collective effort to address real-world
                challenges.
              </p>
            </section>

            {/* Why It Matters */}
            <section className="about-section">
              <h2>
                <img src={assetPath('/img/W.png')} alt="W" className="illuminated-letter" />
                hy It Matters
              </h2>
              <ul className="calligraphy-list">
                <li>
                  <strong>Democratizing Access:</strong> Technology and education should be
                  available to everyone, not just those who can afford expensive institutions or
                  memberships.
                </li>
                <li>
                  <strong>Building Community:</strong> In an increasingly digital world, physical
                  spaces for collaboration and human connection remain vital.
                </li>
                <li>
                  <strong>Preserving Knowledge:</strong> Like historical monasteries, we aim to
                  preserve and advance knowledge for future generations.
                </li>
                <li>
                  <strong>Fostering Innovation:</strong> By bringing diverse minds together, we
                  create environments where innovative solutions can emerge.
                </li>
                <li>
                  <strong>Prioritizing Purpose:</strong> We focus on meaningful work that serves the
                  common good rather than purely commercial interests.
                </li>
              </ul>
            </section>

            {/* What We Offer */}
            <section className="about-section">
              <h2>What We Offer</h2>
              <ul className="calligraphy-list">
                <li>
                  <strong>Collaborative Workspaces:</strong> Physical environments designed for
                  focused work and creative collaboration.
                </li>
                <li>
                  <strong>Learning Resources:</strong> Access to tools, materials, and mentorship to
                  help you develop new skills.
                </li>
                <li>
                  <strong>Community Network:</strong> Connection to a global community of learners,
                  creators, and innovators.
                </li>
                <li>
                  <strong>Project Opportunities:</strong> Chances to work on meaningful projects
                  that make a real difference.
                </li>
                <li>
                  <strong>Inclusive Environment:</strong> A welcoming space for people of all
                  backgrounds and skill levels.
                </li>
              </ul>
            </section>
          </div>

          <div className="right-column">
            {/* Who We Are */}
            <section className="about-section">
              <h2>
                <img src={assetPath('/img/W.png')} alt="W" className="illuminated-letter" />
                ho We Are
              </h2>
              <p>
                TechnoMonasteries is founded and maintained by a diverse group of technologists,
                educators, and community organizers who share a vision of accessible, collaborative
                spaces for innovation and learning.
              </p>

              <div className="team-members">
                <div className="team-member">
                  <h3>Damien Sinclair</h3>
                  <p className="role">Founder &amp; Visionary</p>
                  <p>
                    Damien brings together his passion for technology, community building, and
                    social impact to create spaces where innovation serves the common good.
                  </p>
                </div>

                <div className="team-member">
                  <h3>Community Contributors</h3>
                  <p className="role">The Heart of TechnoMonasteries</p>
                  <p>
                    Our community is powered by dedicated volunteers, members, and supporters who
                    bring diverse skills, perspectives, and experiences to our shared mission.
                  </p>
                </div>
              </div>
            </section>

            {/* Contact */}
            <section className="about-section">
              <h2>
                <img src={assetPath('/img/C.png')} alt="C" className="illuminated-letter" />
                ontact
              </h2>
              <p>Have questions or want to learn more? Reach out to us:</p>
              <p className="contact-info">
                <strong>Email:</strong>{' '}
                <a href="mailto:contact@technomonasteries.org">contact@technomonasteries.org</a>
              </p>
            </section>

            {/* Get Involved */}
            <section className="about-section">
              <h2>
                <img src={assetPath('/img/G.jpg')} alt="G" className="illuminated-letter" />
                et Involved
              </h2>
              <p>
                Join our growing community and help shape the future of TechnoMonasteries. Connect
                with us on Discord to participate in discussions, find collaboration opportunities,
                and stay updated on our progress.
              </p>
              <div className="button-container">
                <a
                  href="https://discord.gg/your-discord-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gildedButton"
                >
                  Join Our Discord
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
