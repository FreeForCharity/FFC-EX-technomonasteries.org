'use client'

import React from 'react'
import Link from 'next/link'
import { assetPath } from '@/lib/assetPath'

const ActiveProjectsPage: React.FC = () => {
  return (
    <>
      {/* Showcase */}
      <div className="showcase">
        <img className="showcaseImg" src={assetPath('/img/Blueprint.jpg')} alt="Blueprint" />
        <div className="showcase-overlay">
          <h1>Active Projects</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="mainContent">
        <h1 className="pageTitle">Where We&apos;re Building</h1>
        <p>
          We&apos;re evaluating two locations for the first Techno-Monastery. Each offers a
          different model for creating a dedicated space where open-source developers, researchers,
          and creators can live, work, and collaborate. One is an affordable eco-village in the
          forests of western Pennsylvania. The other is a mountain co-housing community thirty
          minutes from Boulder&apos;s tech scene.
        </p>

        {/* Property Cards */}
        <div className="twoCol" style={{ marginTop: '40px', gap: '20px' }}>
          {/* Sigel PA Card */}
          <div
            className="innerCol"
            style={{
              backgroundColor: 'rgba(200, 195, 180, 0.4)',
              padding: '20px',
              border: '2px solid var(--brown)',
            }}
          >
            <div className="pageSectionTitle" style={{ marginBottom: '10px' }}>
              Sigel, Pennsylvania
            </div>
            <p
              style={{
                textAlign: 'center',
                fontStyle: 'italic',
                fontSize: '1.5rem',
                margin: '0 0 15px 0',
                textIndent: '0',
              }}
            >
              Eco-Village &bull; 20-Year Lease &bull; Research Phase
            </p>
            <p style={{ textIndent: '0', fontSize: '1.5rem' }}>
              An eco-village in the Allegheny Highlands of Jefferson County, where affordable land
              and natural beauty meet the solitude needed for deep work. At ~$16,000 per acre, this
              is the lower-cost, faster path to our first Techno-Monastery.
            </p>
            <table
              style={{
                width: '100%',
                fontSize: '1.4rem',
                fontFamily: 'sans-serif',
                margin: '15px 0',
                borderCollapse: 'collapse',
              }}
            >
              <tbody>
                <tr>
                  <td style={{ padding: '4px 8px', fontWeight: 'bold' }}>Nearest City</td>
                  <td style={{ padding: '4px 8px' }}>DuBois (~25 min)</td>
                </tr>
                <tr>
                  <td style={{ padding: '4px 8px', fontWeight: 'bold' }}>Major Metro</td>
                  <td style={{ padding: '4px 8px' }}>Pittsburgh (~2.5 hrs)</td>
                </tr>
                <tr>
                  <td style={{ padding: '4px 8px', fontWeight: 'bold' }}>Internet</td>
                  <td style={{ padding: '4px 8px' }}>Starlink (50-200 Mbps)</td>
                </tr>
                <tr>
                  <td style={{ padding: '4px 8px', fontWeight: 'bold' }}>Est. Phase 1</td>
                  <td style={{ padding: '4px 8px' }}>$150K-$300K</td>
                </tr>
              </tbody>
            </table>
            <div style={{ textAlign: 'center', marginTop: '10px' }}>
              <Link href="/project/sigel-pa" className="gildedButton">
                Learn More
              </Link>
            </div>
          </div>

          {/* Nederland CO Card */}
          <div
            className="innerCol"
            style={{
              backgroundColor: 'rgba(200, 195, 180, 0.4)',
              padding: '20px',
              border: '2px solid var(--brown)',
            }}
          >
            <div className="pageSectionTitle" style={{ marginBottom: '10px' }}>
              Nederland, Colorado
            </div>
            <p
              style={{
                textAlign: 'center',
                fontStyle: 'italic',
                fontSize: '1.5rem',
                margin: '0 0 15px 0',
                textIndent: '0',
              }}
            >
              Co-Housing &bull; Mountain Community &bull; Research Phase
            </p>
            <p style={{ textIndent: '0', fontSize: '1.5rem' }}>
              A co-housing community at 8,236 feet in the Rocky Mountains, thirty minutes from
              Boulder&apos;s thriving tech ecosystem. Fiber internet up to 8 Gbps, proximity to CU
              Boulder, Google, and NCAR — but at a premium price.
            </p>
            <table
              style={{
                width: '100%',
                fontSize: '1.4rem',
                fontFamily: 'sans-serif',
                margin: '15px 0',
                borderCollapse: 'collapse',
              }}
            >
              <tbody>
                <tr>
                  <td style={{ padding: '4px 8px', fontWeight: 'bold' }}>Nearest City</td>
                  <td style={{ padding: '4px 8px' }}>Boulder (~30 min)</td>
                </tr>
                <tr>
                  <td style={{ padding: '4px 8px', fontWeight: 'bold' }}>Major Metro</td>
                  <td style={{ padding: '4px 8px' }}>Denver (~1 hr)</td>
                </tr>
                <tr>
                  <td style={{ padding: '4px 8px', fontWeight: 'bold' }}>Internet</td>
                  <td style={{ padding: '4px 8px' }}>Fiber up to 8 Gbps</td>
                </tr>
                <tr>
                  <td style={{ padding: '4px 8px', fontWeight: 'bold' }}>Est. Phase 1</td>
                  <td style={{ padding: '4px 8px' }}>$2M-$3.5M</td>
                </tr>
              </tbody>
            </table>
            <div style={{ textAlign: 'center', marginTop: '10px' }}>
              <Link href="/project/nederland-co" className="gildedButton">
                Learn More
              </Link>
            </div>
          </div>
        </div>

        {/* How We Evaluate */}
        <br />
        <br />
        <div className="pageSectionTitle">How We Evaluate Properties</div>
        <p>
          Every candidate property is scored against a standardized framework covering seven
          categories: location and accessibility, zoning and land use, cost structure,
          infrastructure, community fit, environmental sustainability, and long-term growth
          potential. Each category is weighted and scored on a 1-5 scale, ensuring we compare
          prospects objectively.
        </p>
        <p>
          Our full evaluation framework, property scorecards, and all research findings are
          published openly in our{' '}
          <a
            href="https://github.com/FreeForCharity/FFC-EX-technomonasteries.org/wiki"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Wiki
          </a>
          . Transparency is a core value — we document our decisions so the community can
          participate, critique, and contribute.
        </p>

        {/* Timeline */}
        <br />
        <br />
        <div className="pageSectionTitle">Roadmap</div>
        <div
          style={{
            width: '100%',
            fontFamily: 'sans-serif',
            fontSize: '1.5rem',
            lineHeight: '1.6',
            marginTop: '20px',
          }}
        >
          <div style={{ display: 'flex', marginBottom: '15px' }}>
            <div style={{ minWidth: '130px', fontWeight: 'bold' }}>Q1-Q2 2026</div>
            <div>
              <strong>Foundation</strong> — Build knowledge base, community, evaluation framework
              &#10003;
            </div>
          </div>
          <div style={{ display: 'flex', marginBottom: '15px' }}>
            <div style={{ minWidth: '130px', fontWeight: 'bold' }}>Q3 2026</div>
            <div>
              <strong>Evaluation</strong> — Site visits, legal consultations, community outreach
            </div>
          </div>
          <div style={{ display: 'flex', marginBottom: '15px' }}>
            <div style={{ minWidth: '130px', fontWeight: 'bold' }}>Q4 2026</div>
            <div>
              <strong>Selection</strong> — Choose primary property, begin negotiations
            </div>
          </div>
          <div style={{ display: 'flex', marginBottom: '15px' }}>
            <div style={{ minWidth: '130px', fontWeight: 'bold' }}>2027</div>
            <div>
              <strong>Development</strong> — Secure property, begin physical development
            </div>
          </div>
          <div style={{ display: 'flex' }}>
            <div style={{ minWidth: '130px', fontWeight: 'bold' }}>2027-2028</div>
            <div>
              <strong>Launch</strong> — First residents move in, community goes live
            </div>
          </div>
        </div>

        {/* Get Involved */}
        <br />
        <br />
        <div className="pageSectionTitle">Get Involved</div>
        <p>
          This is an open project. Whether you&apos;re a developer who might want to live at a
          Techno-Monastery, a researcher with expertise in intentional communities, or someone who
          simply wants to contribute to the vision — there&apos;s a place for you.
        </p>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '15px',
            flexWrap: 'wrap',
            marginTop: '20px',
          }}
        >
          <a
            href="https://github.com/FreeForCharity/FFC-EX-technomonasteries.org/discussions"
            target="_blank"
            rel="noopener noreferrer"
            className="gildedButton"
          >
            Join the Discussion
          </a>
          <a
            href="https://github.com/FreeForCharity/FFC-EX-technomonasteries.org/wiki"
            target="_blank"
            rel="noopener noreferrer"
            className="gildedButton"
          >
            Read the Wiki
          </a>
          <a
            href="https://github.com/FreeForCharity/FFC-EX-technomonasteries.org/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="gildedButton"
          >
            Browse Issues
          </a>
        </div>
      </div>
    </>
  )
}

export default ActiveProjectsPage
