'use client'

import React from 'react'
import Link from 'next/link'
import { assetPath } from '@/lib/assetPath'

const NederlandCoPage: React.FC = () => {
  return (
    <>
      {/* Showcase */}
      <div className="showcase">
        <img className="showcaseImg" src={assetPath('/img/Blueprint.jpg')} alt="Rocky Mountains" />
        <div className="showcase-overlay">
          <h1>Nederland, Colorado</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="mainContent">
        <h2 className="pageTitle">A Co-Housing Community in the Rockies</h2>

        {/* Vision */}
        <p>
          Picture a cluster of mountain homes surrounding a common house, connected by covered
          walkways through the snow. A shared maker space with 3D printers and electronics benches.
          A server room with 8 Gbps fiber. Residents who code during the day, ski Eldora in the
          afternoon, and share dinner in the common kitchen at night — all thirty minutes from
          Boulder&apos;s tech scene.
        </p>
        <p>
          Nederland is a mountain town at 8,236 feet in Boulder County, Colorado. It&apos;s
          eclectic, creative, and independent-minded — exactly the kind of place where a
          Techno-Monastery would fit. The Boulder area is home to Google, CU Boulder&apos;s Computer
          Science department, NCAR, NOAA, and hundreds of startups. Wild Sage Co-Housing in Boulder
          already proved that co-housing works here, with 34 units completed in 2004.
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
                ['Location', 'Nederland, Boulder County, Colorado'],
                ['Elevation', '8,236 ft'],
                ['Climate', 'Mountain — 300+ days sunshine, ~89" snow/year'],
                ['Growing Season', '~90 days (greenhouse/indoor growing needed)'],
                ['Nearest City', 'Boulder (~30 min)'],
                ['Major Metro', 'Denver (~1 hr), DIA Airport (~1.25 hrs)'],
                ['Transit', 'RTD Bus Route N to Boulder'],
                ['Internet', 'Quantum Fiber up to 8 Gbps (26% coverage, expanding)'],
                ['Land Cost', '~$240,000-$330,000/acre'],
                ['Wildfire Zone', 'Boulder County Zone 1 (HIGH risk)'],
                ['Est. Phase 1 Cost', '$2,000,000-$3,500,000'],
              ].map(([label, value]) => (
                <tr key={label} style={{ borderBottom: '1px solid var(--brown)' }}>
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

        {/* Why Nederland */}
        <br />
        <div className="pageSectionTitle">Why Nederland</div>
        <p>
          <strong>Fiber Internet:</strong> Quantum Fiber already covers 26% of Nederland with speeds
          up to 8 Gbps. Maverix Broadband recently secured an $8.67 million grant to expand fiber
          further. For a community of developers, this is exceptional infrastructure.
        </p>
        <p>
          <strong>Tech Ecosystem:</strong> Boulder is home to Google, CU Boulder CS, NCAR
          (atmospheric research), NOAA (earth system research), and a thriving startup scene.
          Residents could collaborate with universities, attend meetups, and access the full
          resources of a tech hub — while living in the mountains.
        </p>
        <p>
          <strong>Proven Model:</strong> Wild Sage Co-Housing in Boulder built 34 units on 1.48
          acres in 2004, with a mix of market-rate and affordable homes. All units are EPA Five Star
          Plus rated. The developer&apos;s advice: &quot;You&apos;re building custom neighborhoods,
          not custom homes.&quot;
        </p>

        {/* Challenges */}
        <br />
        <div className="pageSectionTitle">Honest Challenges</div>
        <p>
          <strong>Cost:</strong> Land near Nederland runs $240,000-$330,000 per acre — fifteen to
          twenty times more than Sigel, PA. Mountain construction adds a 20-40% premium on top of
          already-high Boulder County costs. Phase 1 could run $2-3.5 million.
        </p>
        <p>
          <strong>Wildfire:</strong> Nederland is in Boulder County Wildfire Zone 1. All new
          construction requires ignition-resistant materials, defensible space, noncombustible
          perimeters, and a Wildfire Mitigation Plan. The Marshall Fire in 2021 destroyed 1,084
          homes just 15 miles away.
        </p>
        <p>
          <strong>Water Rights:</strong> Colorado&apos;s prior appropriation doctrine makes
          multi-unit well permits extremely complex and expensive. A court-approved augmentation
          plan could take 2-5 years and cost $50,000-$200,000. The practical solution is a property
          with municipal water connection within Nederland town limits.
        </p>
        <p>
          <strong>No Mountain Precedent:</strong> All existing Boulder area co-housing communities
          (Wild Sage, Silver Sage, Nomad) were built in Boulder city limits with municipal services.
          No one has built co-housing in the mountains of Boulder County before. We would be first.
        </p>

        {/* Design Concept */}
        <br />
        <div className="pageSectionTitle">Design Concept</div>
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
            <strong>Private Units:</strong> 8-16 units phased — studios (350-450 sq ft), 1-bedrooms
            (550-700 sq ft), and 2-bedrooms (800-1,000 sq ft) for families.
          </p>
          <p style={{ textIndent: '0', fontSize: '1.5rem' }}>
            <strong>Common House:</strong> Commercial kitchen, great room, library, kids room, and
            guest suite. Shared meals 3-5 times per week.
          </p>
          <p style={{ textIndent: '0', fontSize: '1.5rem' }}>
            <strong>Tech Spaces:</strong> Co-working space with fast internet, server room,
            electronics lab, 3D printing and fabrication, woodshop.
          </p>
          <p style={{ textIndent: '0', fontSize: '1.5rem' }}>
            <strong>Mountain Design:</strong> Passive solar, super-insulated (R-40+ walls), metal
            roofs for snow shedding, fire-resistant exteriors, covered walkways, radiant floor
            heating.
          </p>
        </div>

        {/* Get Involved */}
        <br />
        <div className="pageSectionTitle">Get Involved</div>
        <p>
          Interested in the Nederland project? We&apos;re especially looking for people in the
          Boulder/Denver area, architects experienced with mountain construction, Colorado water
          rights attorneys, and developers who dream of coding in the Rockies.
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
            href="https://github.com/FreeForCharity/FFC-EX-technomonasteries.org/issues?q=label%3Aproperty%3Anederland-co"
            target="_blank"
            rel="noopener noreferrer"
            className="gildedButton"
          >
            View Nederland Issues
          </a>
          <a
            href="https://github.com/FreeForCharity/FFC-EX-technomonasteries.org/wiki/Nederland-CO-Overview"
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

export default NederlandCoPage
