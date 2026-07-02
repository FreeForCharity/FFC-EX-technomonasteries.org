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
      <div className="showcase">
        <img
          className="showcaseImg"
          src={assetPath('/img/building.jpg')}
          alt="TechnoMonasteries building"
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
        <h1 className="pageTitle">Frequently Asked Questions</h1>
        <div className="faqAccordion">
          <button className="faqButton" onClick={() => scrollToSection('mission-purpose')}>
            Mission & Purpose
          </button>
          <button className="faqButton" onClick={() => scrollToSection('participation')}>
            Participation
          </button>
          <button className="faqButton" onClick={() => scrollToSection('operations')}>
            Operations & Support
          </button>
          <button className="faqButton" onClick={() => scrollToSection('long-term-vision')}>
            Long Term Vision
          </button>
        </div>

        {/* Mission & Purpose Section */}
        <section id="mission-purpose" className="faq-section">
          <h2 className="faq-section">Mission &amp; Purpose</h2>
          <div className="qa-pair">
            <div className="question">
              <img src={assetPath('/img/medieval_Q_sm.png')} alt="Q" className="q-icon" />
              <h3>What is a TechnoMonastery?</h3>
            </div>
            <div className="answer">
              <p>
                A TechnoMonastery is a modern reimagining of the historical monastery as a work-stay
                for people developing open-source software and public-interest technology. These
                spaces support focused work sprints for open-source contributors.
              </p>
            </div>
          </div>

          <div className="qa-pair">
            <div className="question">
              <img src={assetPath('/img/medieval_Q_sm.png')} alt="Q" className="q-icon" />
              <h3>Why support open-source software?</h3>
            </div>
            <div className="answer">
              <p>
                Open-source software (OSS) forms the backbone of modern society, critical
                infrastructure, global communications, and education. Despite its impact, many
                open-source developers receive little or no compensation for their contributions. By
                supporting open-source software, we ensure the sustainability of these essential
                projects, support developers so they can focus on creating and maintaining
                high-quality tools, and help ensure the long-term stewardship of open-source
                projects.
              </p>
            </div>
          </div>

          <div className="qa-pair">
            <div className="question">
              <img src={assetPath('/img/medieval_Q_sm.png')} alt="Q" className="q-icon" />
              <h3>Do TechnoMonasteries have a religious or spiritual component?</h3>
            </div>
            <div className="answer">
              <p>
                TechnoMonasteries are spaces dedicated to the development and support of open-source
                software and public-interest technology. The term &apos;monastery&apos; is used
                metaphorically to evoke the sense of community, focus, and dedication that is
                characteristic of traditional monasteries.
              </p>
            </div>
          </div>
        </section>

        {/* Participation Section */}
        <section id="participation" className="faq-section">
          <h2 className="faq-section">Participation & Community</h2>
          <div className="qa-pair">
            <div className="question">
              <img src={assetPath('/img/medieval_Q_sm.png')} alt="Q" className="q-icon" />
              <h3>Who can participate in a TechnoMonastery?</h3>
            </div>
            <div className="answer">
              <p>
                Open-source developers, maintainers, and others working on public-good technology
                are encouraged to apply. We are especially interested in projects involving
                open-source software and public interest technology. Participation will depend on
                project alignment, community needs, and available space.
              </p>
            </div>
          </div>

          <div className="qa-pair">
            <div className="question">
              <img src={assetPath('/img/medieval_Q_sm.png')} alt="Q" className="q-icon" />
              <h3>What if I want to help but my skills aren’t technical?</h3>
            </div>
            <div className="answer">
              <p>
                We welcome all kinds of support! Beyond coding there are plenty of essential roles
                that help keep the Techno Monasteries running smoothly. You can assist with building
                and grounds maintenance, meal preparation, fundraising, and many other supporting
                roles.
              </p>
            </div>
          </div>

          <div className="qa-pair">
            <div className="question">
              <img src={assetPath('/img/medieval_Q_sm.png')} alt="Q" className="q-icon" />
              <h3>What kinds of projects will be hosted?</h3>
            </div>
            <div className="answer">
              <p>
                Our initial focus is on open-source software projects, along with efforts to build,
                maintain, and fund TechnoMonastery properties. As we grow into additional
                properties, we hope to expand our scope to support projects such as open hardware,
                educational/open knowledge work, property restoration/adaptive reuse.
              </p>
            </div>
          </div>

          <div className="qa-pair">
            <div className="question">
              <img src={assetPath('/img/medieval_Q_sm.png')} alt="Q" className="q-icon" />
              <h3>Will there be apprenticeship or mentorship opportunities?</h3>
            </div>
            <div className="answer">
              <p>
                Yes, as Techno Monasteries grow we plan to offer volunteer apprenticeships in
                open-source development and other community-driven projects. These opportunities are
                intended to provide tuition-free, hands-on experience through participation in
                real-world projects. We provide resources and mentorship; you bring a willingness to
                learn and contribute.
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
                learning materials, and mentorship opportunities.
              </p>
            </div>
          </div>

          <div className="qa-pair">
            <div className="question">
              <img src={assetPath('/img/medieval_Q_sm.png')} alt="Q" className="q-icon" />
              <h3>How long are work-stays?</h3>
            </div>
            <div className="answer">
              <p>
                Work-stays are typically temporary, lasting anywhere from a few weeks to a few
                months. Rotating residents brings new energy while encouraging cross-pollination of
                ideas. Some long-term stays are reserved for property caretakers and project leads.
              </p>
            </div>
          </div>

          <div className="qa-pair">
            <div className="question">
              <img src={assetPath('/img/medieval_Q_sm.png')} alt="Q" className="q-icon" />
              <h3>Can participants bring travel companions?</h3>
            </div>
            <div className="answer">
              <p>
                Yes. You’re welcome to bring travel companions and share your room with them,
                provided their stay is arranged in advance. Even if they don’t have technical
                skills, they can contribute in support roles such as maintenance, cooking, or
                outreach. We encourage all to be actively involved in the community.
              </p>
            </div>
          </div>

          <div className="qa-pair">
            <div className="question">
              <img src={assetPath('/img/medieval_Q_sm.png')} alt="Q" className="q-icon" />
              <h3>How do I apply for a work-stay?</h3>
            </div>
            <div className="answer">
              <p>Application details will be announced as the first property develops.</p>
            </div>
          </div>

          <div className="qa-pair">
            <div className="question">
              <img src={assetPath('/img/medieval_Q_sm.png')} alt="Q" className="q-icon" />
              <h3>How can I get involved?</h3>
            </div>
            <div className="answer">
              <p>
                Join our Discord community to connect with others, learn about project updates, and
                find opportunities to contribute. You can also follow our progress and participate
                in discussions about establishing new TechnoMonasteries in different locations.
              </p>
            </div>
          </div>
        </section>

        {/* Operations & Sustainability Section */}
        <section id="operations" className="faq-section">
          <h2 className="faq-section">Operations & Sustainability</h2>
          <div className="qa-pair">
            <div className="question">
              <img src={assetPath('/img/medieval_Q_sm.png')} alt="Q" className="q-icon" />
              <h3>How are TechnoMonasteries funded?</h3>
            </div>
            <div className="answer">
              <p>
                We&apos;re exploring multiple funding models including donations, grants,
                sponsorships, partnerships with educational institutions and aligned organizations,
                collaborative projects, and other mission-aligned sources of revenue. The goal is to
                create long-term sustainable spaces that can support open-source contributors
                without relying entirely on short-term funding cycles.
              </p>
            </div>
          </div>

          <div className="qa-pair">
            <div className="question">
              <img src={assetPath('/img/medieval_Q_sm.png')} alt="Q" className="q-icon" />
              <h3>Are there costs associated with staying at a TechnoMonastery?</h3>
            </div>
            <div className="answer">
              <p>
                Work-stays are intended to remain financially accessible for contributors working on
                aligned projects. We hope to operate primarily through donations, sponsorships, and
                community support rather than traditional lodging fees. However, we do appreciate
                donations to help cover the costs of food, utilities, and maintenance. Recommended
                donations may help cover food, utilities, maintenance, and restoration costs.
              </p>
            </div>
          </div>

          <div className="qa-pair">
            <div className="question">
              <img src={assetPath('/img/medieval_Q_sm.png')} alt="Q" className="q-icon" />
              <h3>How will the properties be maintained?</h3>
            </div>
            <div className="answer">
              <p>
                Regular upkeep like cleaning, routine maintenance, and minor repairs will be the
                responsibility of community volunteers. For larger repairs and specialized
                maintenance, we will hire outside contractors.
              </p>
            </div>
          </div>

          <div className="qa-pair">
            <div className="question">
              <img src={assetPath('/img/medieval_Q_sm.png')} alt="Q" className="q-icon" />
              <h3>How do you prevent TechnoMonasteries from becoming cult-like?</h3>
            </div>
            <div className="answer">
              <p>
                Temporary residencies ensure participants don’t become entrenched, while encouraging
                fresh perspectives. By focusing on tangible project outcomes in open-source work
                rather than adherence to any ideology, we maintain a clear and purpose-driven
                mission.
              </p>
            </div>
          </div>
        </section>

        {/* Long Term Vision Section */}
        <section id="long-term-vision" className="faq-section">
          <h2 className="faq-section">Vision & Future</h2>
          <div className="qa-pair">
            <div className="question">
              <img src={assetPath('/img/medieval_Q_sm.png')} alt="Q" className="q-icon" />
              <h3>Where will the first TechnoMonastery be located?</h3>
            </div>
            <div className="answer">
              <p>
                Our first TechnoMonastery initiative is currently underway in rural Pennsylvania,
                USA. The site is in the early stages of development, with planning and
                community-building already beginning. Stay tuned.
              </p>
            </div>
          </div>

          <div className="qa-pair">
            <div className="question">
              <img src={assetPath('/img/medieval_Q_sm.png')} alt="Q" className="q-icon" />
              <h3>When will the first TechnoMonastery open?</h3>
            </div>
            <div className="answer">
              <p>The project is still in early development and construction planning stages.</p>
            </div>
          </div>

          <div className="qa-pair">
            <div className="question">
              <img src={assetPath('/img/medieval_Q_sm.png')} alt="Q" className="q-icon" />
              <h3>What is the long-term vision for TechnoMonasteries?</h3>
            </div>
            <div className="answer">
              <p>
                We envision a global network of TechnoMonasteries dedicated to supporting
                open-source contributors, focused collaborative work, and long-term sustainability
                for public goods.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default FAQPage
