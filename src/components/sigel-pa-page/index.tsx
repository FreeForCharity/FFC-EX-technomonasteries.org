'use client'

import React from 'react'
import Link from 'next/link'
import { assetPath } from '@/lib/assetPath'

const SigelPaPage: React.FC = () => {
  return (
    <>
      {/* Showcase */}
      <div className="showcase">
        <img
          className="showcaseImg"
          src={assetPath('/img/Blueprint.jpg')}
          alt=""
          role="presentation"
        />
        <div className="showcase-overlay">
          <h1>Sigel, Pennsylvania</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="mainContent">
        <h2 className="pageTitle">An Eco-Village in the Allegheny Highlands</h2>

        {/* Vision */}
        <p>
          Imagine a cluster of cabins nestled in the forests of the Allegheny Plateau, connected by
          walking paths to a shared common house, maker space, and greenhouse. Developers writing
          code by wood stove in winter, tending gardens in summer, and gathering in the evening to
          share meals and ideas. This is the vision for Sigel — an eco-village where the cost of
          living is low enough that people can focus on open-source work rather than paying rent.
        </p>
        <p>
          Sigel is an unincorporated community in Eldred Township, Jefferson County, Pennsylvania.
          At roughly $16,000 per acre, land here costs a fraction of what you&apos;d pay near any
          tech hub. The project is being developed in partnership with a local nonprofit under a
          charity lease, giving us the stability to build something lasting without the upfront
          burden of a purchase. And with USDA grant programs designed specifically for rural
          communities, there&apos;s real funding available to build the infrastructure we need.
        </p>

        {/* The Property */}
        <br />
        <div className="pageSectionTitle">The Property</div>
        <p>
          The project site consists of roughly 70 acres of farmland and woodland. It includes an
          existing farmhouse and pastureland maintained by our local nonprofit partner; during the
          early stages of the project, the farmhouse is expected to support planning activities,
          volunteer coordination, and limited work-stay use when available. The remainder of the
          site is undeveloped woodland, with existing access and nearby utilities providing a
          foundation for future infrastructure while preserving the rural character of the site.
        </p>

        {/* Key Facts */}
        <br />
        <div className="pageSectionTitle">Key Facts</div>
        <div style={{ width: '100%', overflowX: 'auto' }}>
          <table
            style={{
              width: '100%',
              fontSize: '1.5rem',
              fontFamily: 'sans-serif',
              margin: '20px 0',
              borderCollapse: 'collapse',
            }}
          >
            <caption
              className="sr-only"
              style={{
                position: 'absolute',
                width: '1px',
                height: '1px',
                overflow: 'hidden',
                clip: 'rect(0,0,0,0)',
              }}
            >
              Sigel, Pennsylvania key facts
            </caption>
            <tbody>
              {[
                ['Location', 'Eldred Township, Jefferson County, PA'],
                ['Elevation', '~1,400-1,700 ft'],
                ['Climate', 'Humid continental — Jan 23°F, Jul 67°F, ~55" snow/year'],
                ['Growing Season', '~130-140 days (late May to early October)'],
                ['Nearest City', 'DuBois (~25 min), Brookville (~25 min)'],
                ['Major Metro', 'Pittsburgh (~2.5 hrs), State College (~1.5 hrs)'],
                ['Airport', 'DuBois Regional (25 min), Pittsburgh Intl (2.5 hrs)'],
                ['Internet', 'Starlink (50-200 Mbps), T-Mobile Fixed Wireless (25 Mbps)'],
                ['Land Cost', '~$16,000/acre average'],
                ['Property Tax', '~1.55% assessed value, median $1,413/year'],
                ['Site', '~70 acres of farmland and woodland'],
                ['Arrangement', 'Nonprofit partnership with charity lease'],
              ].map(([label, value]) => (
                <tr key={label} style={{ borderBottom: '1px solid var(--line-color)' }}>
                  <th
                    scope="row"
                    style={{ padding: '8px', fontWeight: 'bold', width: '35%', textAlign: 'left' }}
                  >
                    {label}
                  </th>
                  <td style={{ padding: '8px' }}>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Partnership & Charity Lease */}
        <br />
        <div className="pageSectionTitle">Partnership &amp; Charity Lease</div>
        <p>
          Rather than purchasing property outright, the project is structured as a partnership with
          a local nonprofit under a long-term charity lease. This approach lets us start building
          sooner with less capital while keeping stewardship of the land with our local partner. Key
          provisions include rights to build and improve, renewal options, and clear treatment of
          improvements over the life of the lease.
        </p>
        <p>
          As a 501(c)(3) nonprofit, Free For Charity may qualify for property tax exemption under
          Pennsylvania&apos;s Act 55 (Institutions of Purely Public Charity Act), which requires
          meeting five criteria around charitable purpose, public benefit, and nonprofit operation.
        </p>

        {/* Current Phase */}
        <br />
        <div className="pageSectionTitle">Current Phase</div>
        <p>
          The project is currently focused on planning and evaluation: preliminary site planning,
          utility and septic evaluation, volunteer coordination, nonprofit structuring,
          infrastructure planning, and establishing a long-term stewardship plan for the property.
          The focus at this stage is understanding what is practical, sustainable, and achievable
          for an initial pilot site.
        </p>

        {/* Phased Build */}
        <br />
        <div className="pageSectionTitle">Phased Build-Out</div>
        <div
          style={{
            fontFamily: 'sans-serif',
            fontSize: '1.5rem',
            lineHeight: '1.6',
            marginTop: '20px',
            width: '100%',
          }}
        >
          <p style={{ textIndent: '0', fontSize: '1.5rem' }}>
            <strong>Phase 1 (Year 1-3):</strong> Shared kitchen and gathering space, coworking
            areas, community bathhouse and restroom facilities, approximately ten campsites, RV
            parking areas, and shared utility connections.
          </p>
          <p style={{ textIndent: '0', fontSize: '1.5rem' }}>
            <strong>Phase 2 (Year 3-8):</strong> Accessible tiny homes designed for longer stays,
            guest quarters, greenhouse, expanded workshop, trail system.
          </p>
          <p style={{ textIndent: '0', fontSize: '1.5rem' }}>
            <strong>Phase 3 (Year 8-20):</strong> Education center, conference space, expanded maker
            space, community garden and orchard, renewable energy farm.
          </p>
        </div>

        {/* Challenges */}
        <br />
        <div className="pageSectionTitle">Honest Challenges</div>
        <p>
          <strong>Internet:</strong> There is no fiber in the Sigel area. Starlink (50-200 Mbps) is
          the primary option today. However, the USDA ReConnect program has $90 million in FY2026
          funding for rural broadband grants — the area could qualify for grant-funded fiber
          buildout.
        </p>
        <p>
          <strong>Remoteness:</strong> Pittsburgh is 2.5 hours away, State College 1.5 hours. This
          is not a place for people who need urban amenities daily. It&apos;s a place for people who
          want to get away from them.
        </p>
        <p>
          <strong>Zoning:</strong> Eldred Township has Agricultural and Rural Residential zones. We
          need to confirm that an intentional community is a permitted use.
        </p>

        {/* Get Involved */}
        <br />
        <div className="pageSectionTitle">Get Involved</div>
        <p>
          Interested in the Sigel project? We&apos;re looking for people with skills in
          construction, permaculture, off-grid energy, community organizing, and of course —
          open-source development.
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
            href="https://github.com/FreeForCharity/FFC-EX-technomonasteries.org/issues?q=label%3Aproperty%3Asigel-pa"
            target="_blank"
            rel="noopener noreferrer"
            className="gildedButton"
          >
            View Sigel Issues
          </a>
          <a
            href="https://github.com/FreeForCharity/FFC-EX-technomonasteries.org/wiki/Sigel-PA-Overview"
            target="_blank"
            rel="noopener noreferrer"
            className="gildedButton"
          >
            Read the Research
          </a>
          <Link href="/project" className="gildedButton">
            Back to Projects
          </Link>
        </div>
      </div>
    </>
  )
}

export default SigelPaPage
