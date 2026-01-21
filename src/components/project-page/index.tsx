'use client'

import React from 'react'
import { assetPath } from '@/lib/assetPath'

const ProjectPage: React.FC = () => {
  return (
    <>
      {/* Showcase */}
      <div className="showcase">
        <img className="showcaseImg" src={assetPath('/img/Blueprint.jpg')} alt="Blueprint" />
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
        <h1 className="pageTitle">The Pilot Project</h1>
        <div className="pageSectionTitle">Laying the First Stone</div>
        <p>
          We have to start somewhere. The first Techno-Monastery will be a proof of concept—a space
          where we test the model, refine our approach, and lay the foundation for something much
          larger. This pilot project will demonstrate how a dedicated physical space can empower
          open-source developers, researchers, and creators to work without distractions,
          collaborate in person, and push the boundaries of knowledge. It&apos;s our chance to test
          what works, adapt to real-world needs, and prove that dedicated spaces for deep work can
          lead to meaningful breakthroughs.
        </p>
        <p>
          We&apos;re currently scouting properties that balance affordability, historical
          character, and the infrastructure needed to support a small group of open-source
          developers and researchers. This space will serve as a prototype for a global network of
          spaces designed to sustain open-source development and public goods. Can we build a
          sustainable model that attracts talent, fosters collaboration, and accelerates important
          work? The lessons we learn here will shape the future of Techno-Monasteries.
        </p>
        <div className="pageSectionTitle">Blueprint for Impact</div>
        <p>
          But this is just the beginning. Our goal is to create a model that can be replicated,
          adapted, and expanded across the world. By documenting our successes and challenges,
          refining governance and funding strategies, and testing sustainable operational models, we
          will provide a clear roadmap for future initiatives. Techno-Monasteries will not just be
          a home for open-source innovation—they will be a blueprint for the future of sustainable
          public goods.
        </p>

        <br />
        <br />
        <br />
        <div className="pageSectionTitle">From Empty Halls to Innovation Hubs</div>
        <p>
          For the price of a three-bedroom in San Francisco, we&apos;ve found historic properties
          in Europe—spacious, full of character, and ready to be transformed. Here are a few that
          could become the first Techno-Monastery. Each offers unique potential—what would you
          build here?
        </p>

        <div className="carousel"></div>
      </div>
    </>
  )
}

export default ProjectPage
