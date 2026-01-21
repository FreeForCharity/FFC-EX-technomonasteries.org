'use client'

import React from 'react'
import { assetPath } from '@/lib/assetPath'

const FAQPage: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div>
      <div
        className="showcase"
        style={{ backgroundImage: `url(${assetPath('/img/building.jpg')})` }}
      >
        <div className="overlay">
          <h1>Frequently Asked Questions</h1>
        </div>
      </div>

      <div className="mainContent">
        <div className="scroll-buttons">
          <button onClick={() => scrollToSection('mission-purpose')} className="scroll-btn">
            Mission &amp; Purpose
          </button>
          <button onClick={() => scrollToSection('participation')} className="scroll-btn">
            Participation
          </button>
          <button onClick={() => scrollToSection('long-term-vision')} className="scroll-btn">
            Long Term Vision
          </button>
          <button onClick={() => scrollToSection('operations-support')} className="scroll-btn">
            Operations &amp; Support
          </button>
        </div>

        {/* Mission & Purpose Section */}
        <section id="mission-purpose" className="faq-section">
          <h2>Mission &amp; Purpose</h2>
          <img
            src={assetPath('/img/missionAndPurpose.jpg')}
            alt="Mission and Purpose"
            className="section-image"
          />

          <div className="qa-pair">
            <div className="question">
              <img src={assetPath('/img/medieval_Q_sm.png')} alt="Q" className="q-icon" />
              <h3>What is a TechnoMonastery?</h3>
            </div>
            <div className="answer">
              <p>
                A TechnoMonastery is a community-driven space where technology, creativity, and
                collaboration come together. Inspired by the historical role of monasteries as
                centers of learning and preservation, TechnoMonasteries aim to be modern sanctuaries
                for innovation, skill-building, and meaningful work.
              </p>
            </div>
          </div>

          <div className="qa-pair">
            <div className="question">
              <img src={assetPath('/img/medieval_Q_sm.png')} alt="Q" className="q-icon" />
              <h3>What is the mission of TechnoMonasteries?</h3>
            </div>
            <div className="answer">
              <p>
                Our mission is to create accessible spaces where individuals can develop technical
                skills, collaborate on projects, and contribute to the common good. We believe in
                fostering environments that prioritize learning, creativity, and community over
                profit.
              </p>
            </div>
          </div>

          <div className="qa-pair">
            <div className="question">
              <img src={assetPath('/img/medieval_Q_sm.png')} alt="Q" className="q-icon" />
              <h3>How do TechnoMonasteries differ from traditional coworking spaces?</h3>
            </div>
            <div className="answer">
              <p>
                Unlike traditional coworking spaces that focus on commercial ventures,
                TechnoMonasteries emphasize community, education, and collaborative projects. Our
                spaces are designed to support both individual growth and collective achievement,
                with a focus on accessibility and inclusivity.
              </p>
            </div>
          </div>
        </section>

        {/* Participation Section */}
        <section id="participation" className="faq-section">
          <h2>Participation</h2>
          <img
            src={assetPath('/img/participation.jpg')}
            alt="Participation"
            className="section-image"
          />

          <div className="qa-pair">
            <div className="question">
              <img src={assetPath('/img/medieval_Q_sm.png')} alt="Q" className="q-icon" />
              <h3>Who can join a TechnoMonastery?</h3>
            </div>
            <div className="answer">
              <p>
                Anyone with an interest in technology, learning, and community collaboration is
                welcome. Whether you&apos;re a beginner looking to learn new skills or an
                experienced professional wanting to share knowledge, there&apos;s a place for you in
                our community.
              </p>
            </div>
          </div>

          <div className="qa-pair">
            <div className="question">
              <img src={assetPath('/img/medieval_Q_sm.png')} alt="Q" className="q-icon" />
              <h3>Do I need to have technical experience to participate?</h3>
            </div>
            <div className="answer">
              <p>
                No! TechnoMonasteries welcome people at all skill levels. We provide resources,
                mentorship, and collaborative opportunities for everyone from complete beginners to
                seasoned experts. The key is a willingness to learn and contribute.
              </p>
            </div>
          </div>

          <div className="qa-pair">
            <div className="question">
              <img src={assetPath('/img/medieval_Q_sm.png')} alt="Q" className="q-icon" />
              <h3>How can I get involved?</h3>
            </div>
            <div className="answer">
              <p>
                Join our Discord community to connect with others, learn about upcoming events, and
                find opportunities to contribute. You can also follow our progress and participate
                in discussions about establishing new TechnoMonasteries in different locations.
              </p>
            </div>
          </div>

          <div className="qa-pair">
            <div className="question">
              <img src={assetPath('/img/medieval_Q_sm.png')} alt="Q" className="q-icon" />
              <h3>Is there a cost to participate?</h3>
            </div>
            <div className="answer">
              <p>
                We&apos;re working to keep TechnoMonasteries as accessible as possible. While
                specific models may vary by location, our goal is to minimize financial barriers
                through community support, donations, and creative funding solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Long Term Vision Section */}
        <section id="long-term-vision" className="faq-section">
          <h2>Long Term Vision</h2>
          <img
            src={assetPath('/img/longTermVision.jpg')}
            alt="Long Term Vision"
            className="section-image"
          />

          <div className="qa-pair">
            <div className="question">
              <img src={assetPath('/img/medieval_Q_sm.png')} alt="Q" className="q-icon" />
              <h3>What is the long-term vision for TechnoMonasteries?</h3>
            </div>
            <div className="answer">
              <p>
                We envision a global network of TechnoMonasteries that serve as hubs for innovation,
                learning, and community empowerment. These spaces will preserve and advance
                knowledge while providing accessible opportunities for people to develop skills and
                collaborate on meaningful projects.
              </p>
            </div>
          </div>

          <div className="qa-pair">
            <div className="question">
              <img src={assetPath('/img/medieval_Q_sm.png')} alt="Q" className="q-icon" />
              <h3>How will TechnoMonasteries expand?</h3>
            </div>
            <div className="answer">
              <p>
                Growth will be organic and community-driven. As interest grows in different regions,
                local communities can establish their own TechnoMonasteries following our core
                principles while adapting to their specific needs and contexts.
              </p>
            </div>
          </div>

          <div className="qa-pair">
            <div className="question">
              <img src={assetPath('/img/medieval_Q_sm.png')} alt="Q" className="q-icon" />
              <h3>What role will technology play in the future of TechnoMonasteries?</h3>
            </div>
            <div className="answer">
              <p>
                Technology is both our tool and our focus. We&apos;ll continue to leverage digital
                platforms for remote collaboration while maintaining physical spaces for hands-on
                work. Our goal is to bridge the digital and physical worlds to create robust,
                resilient communities.
              </p>
            </div>
          </div>
        </section>

        {/* Operations & Support Section */}
        <section id="operations-support" className="faq-section">
          <h2>Operations &amp; Support</h2>
          <img
            src={assetPath('/img/operationsAndSupport.jpg')}
            alt="Operations and Support"
            className="section-image"
          />

          <div className="qa-pair">
            <div className="question">
              <img src={assetPath('/img/medieval_Q_sm.png')} alt="Q" className="q-icon" />
              <h3>How are TechnoMonasteries funded?</h3>
            </div>
            <div className="answer">
              <p>
                We&apos;re exploring multiple funding models including community contributions,
                grants, partnerships with educational institutions, and revenue from collaborative
                projects. Our priority is maintaining accessibility while ensuring sustainability.
              </p>
            </div>
          </div>

          <div className="qa-pair">
            <div className="question">
              <img src={assetPath('/img/medieval_Q_sm.png')} alt="Q" className="q-icon" />
              <h3>Who manages TechnoMonasteries?</h3>
            </div>
            <div className="answer">
              <p>
                TechnoMonasteries are community-managed with a focus on collaborative governance.
                Decision-making is distributed among active members, with an emphasis on
                transparency and collective responsibility.
              </p>
            </div>
          </div>

          <div className="qa-pair">
            <div className="question">
              <img src={assetPath('/img/medieval_Q_sm.png')} alt="Q" className="q-icon" />
              <h3>How can I support TechnoMonasteries?</h3>
            </div>
            <div className="answer">
              <p>
                There are many ways to support our mission: participate in our community, contribute
                your skills and knowledge, help spread the word, or make a financial contribution.
                Every form of support helps us build stronger, more accessible spaces for everyone.
              </p>
            </div>
          </div>

          <div className="qa-pair">
            <div className="question">
              <img src={assetPath('/img/medieval_Q_sm.png')} alt="Q" className="q-icon" />
              <h3>What resources do TechnoMonasteries provide?</h3>
            </div>
            <div className="answer">
              <p>
                Resources vary by location but typically include workspace, internet access,
                collaboration tools, learning materials, and mentorship opportunities. We also
                provide access to a global community of like-minded individuals working on diverse
                projects.
              </p>
            </div>
          </div>

          <img src={assetPath('/img/largeGroup.jpg')} alt="Community" className="section-image" />
        </section>
      </div>
    </div>
  )
}

export default FAQPage
