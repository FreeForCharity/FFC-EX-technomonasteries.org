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
        <div className="pageSectionTitle">Overview</div>
        <p>
          This project is being developed in partnership with a local nonprofit and serves as the
          first site for the TechnoMonasteries model. Located near Sigel, Pennsylvania, the site
          offers a quiet rural setting where we can test and refine ideas around sabbatical spaces
          for open-source and other public-good technology projects. The goal is to start small,
          learn from experience, and develop a model that can inform future TechnoMonasteries sites.
        </p>
        <div className="pageSectionTitle">The Property</div>
        <p>The project site consists of roughly 70 acres of farmland and woodland.</p>
        <p>
          The site includes an existing farmhouse and pastureland maintained by our local nonprofit
          partner. During the early stages of the project, the farmhouse is expected to support
          planning activities, volunteer coordination, and limited work-stay use when available.
        </p>
        <p>
          The remainder of the site is undeveloped woodland. Existing access and nearby utilities
          provide a foundation for future infrastructure while preserving the rural character of the
          site.
        </p>
        <p>
          Together, these features provide both a usable starting point and room for future growth.
        </p>
        <div className="pageSectionTitle">Current Phase</div>
        <p>
          The project is currently focused on planning and evaluation. Current efforts include
          preliminary site planning, utility and septic evaluation, volunteer coordination,
          nonprofit structuring, infrastructure planning, and establishing a long-term stewardship
          plan for the property.
        </p>
        <p>Early infrastructure planning includes:</p>
        <ul className="calligraphy-list">
          <li>Shared kitchen and gathering space</li>
          <li>Coworking areas</li>
          <li>Community bathhouse and restroom facilities</li>
          <li>Approximately ten campsites</li>
          <li>RV parking areas</li>
          <li>Site planning for future tiny homes</li>
          <li>Shared utility connections and outdoor spaces</li>
        </ul>
        <p>
          The focus at this stage is understanding what is practical, sustainable, and achievable
          for an initial pilot site.
        </p>
        <div className="pageSectionTitle">Long-Term Vision</div>
        <p>
          The long-term goal is to create a sabbatical space where open-source and other public-good
          tech builders can spend focused time working on projects that benefit the public-good.
        </p>
        <p>
          Potential accommodations include campsites, a community shower house, and accessible tiny
          homes designed for longer stays. Shared coworking spaces, workshops, and indoor and
          outdoor gathering areas would support both focused work and collaboration. As the project
          evolves, the site will serve as a learning laboratory for future TechnoMonasteries,
          helping establish patterns, practices, and infrastructure that can be adapted elsewhere.
        </p>
        <div className="pageSectionTitle">Why This Site?</div>
        <p>
          This location was selected because it combines several qualities that make it well suited
          for a pilot project:
        </p>
        <ul className="calligraphy-list">
          <li>Partnership with a local nonprofit</li>
          <li>Existing farmhouse and supporting infrastructure</li>
          <li>Roughly 70 acres with room for future growth</li>
          <li>Rural setting conducive to focused work</li>
          <li>
            Proximity to major population and technology centers across the northeastern United
            States and Canada
          </li>
        </ul>
        <br />
      </div>
    </>
  )
}

export default ProjectPage
