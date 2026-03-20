'use client'

import React from 'react'
import Link from 'next/link'
import { assetPath } from '@/lib/assetPath'

const SigelPaPage: React.FC = () => {
  return (
    <>
      {/* Showcase */}
      <div className="showcase">
        <img className="showcaseImg" src={assetPath('/img/Blueprint.jpg')} alt="Allegheny Forest" />
        <div className="showcase-overlay">
          <h1>Sigel, Pennsylvania</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="mainContent">
        <h1 className="pageTitle">An Eco-Village in the Allegheny Highlands</h1>

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
          tech hub. A 20-year lease gives us the stability to build something lasting without the
          upfront burden of a purchase. And with USDA grant programs designed specifically for rural
          communities, there&apos;s real funding available to build the infrastructure we need.
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
                ['Est. Phase 1 Cost', '$150,000-$300,000'],
              ].map(([label, value]) => (
                <tr key={label} style={{ borderBottom: '1px solid var(--brown)' }}>
                  <td style={{ padding: '8px', fontWeight: 'bold', width: '35%' }}>{label}</td>
                  <td style={{ padding: '8px' }}>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* The 20-Year Lease */}
        <br />
        <div className="pageSectionTitle">The 20-Year Lease Model</div>
        <p>
          Rather than purchasing property outright, we&apos;re exploring a 20-year ground lease.
          This approach lets us start building sooner with less capital, while maintaining the
          flexibility to walk away if the model doesn&apos;t work. Key provisions would include
          renewal options, rights to build and improve, and clear ownership of improvements at lease
          end.
        </p>
        <p>
          As a 501(c)(3) nonprofit, Free For Charity may qualify for property tax exemption under
          Pennsylvania&apos;s Act 55 (Institutions of Purely Public Charity Act), which requires
          meeting five criteria around charitable purpose, public benefit, and nonprofit operation.
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
            <strong>Phase 1 (Year 1-3):</strong> Common house, maker space, server room, 4-6
            residential cabins, shared bathhouse. Estimated cost: $150K-$300K.
          </p>
          <p style={{ textIndent: '0', fontSize: '1.5rem' }}>
            <strong>Phase 2 (Year 3-8):</strong> 8-12 additional units, guest quarters, greenhouse,
            expanded workshop, trail system.
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
