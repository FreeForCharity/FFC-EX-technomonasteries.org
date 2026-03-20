'use client'

import React from 'react'
import Link from 'next/link'
import { assetPath } from '@/lib/assetPath'

const EcovillagesPage: React.FC = () => {
  return (
    <div>
      <div
        className="showcase"
        style={{ backgroundImage: `url(${assetPath('/img/largeGroup.jpg')})` }}
      >
        <div className="overlay">
          <h1>Ecovillages</h1>
        </div>
      </div>

      <div className="mainContent">
        <Link href="/economic-models" className="back-link">
          ← Back to Economic Models
        </Link>

        <h2 className="pageTitle">Ecovillages</h2>
        <div className="pageSectionTitle">Intentional Communities at Scale</div>

        {/* History */}
        <div className="economic-section">
          <h2>Historical Roots</h2>
          <p>
            The modern ecovillage movement emerged from converging streams of thought in the
            twentieth century: the back-to-the-land communes of the 1960s, the appropriate
            technology movement championed by E. F. Schumacher in <em>Small Is Beautiful</em>{' '}
            (1973), and the environmental crisis consciousness that grew through the 1970s and
            1980s.
          </p>
          <p>
            The term &ldquo;ecovillage&rdquo; was defined and popularised by Robert Gilman and Diane
            Gilman in their 1991 report <em>Ecovillages and Sustainable Communities</em> for Gaia
            Trust, a Danish philanthropic foundation. Gilman described an ecovillage as a
            &ldquo;human-scale full-featured settlement in which human activities are harmlessly
            integrated into the natural world in a way that is supportive of healthy human
            development and can be successfully continued into the indefinite future.&rdquo;
          </p>
          <p>
            In 1995, the Global Ecovillage Network (GEN) was formally established at Findhorn
            Foundation in Scotland, connecting intentional communities around the world. GEN now
            lists over 10,000 member communities across six continents.
          </p>
          <h3>Notable Historical Examples</h3>
          <ul className="calligraphy-list">
            <li>
              <strong>Findhorn Foundation (Scotland, 1962):</strong> Founded by Peter and Eileen
              Caddy and Dorothy Maclean on a caravan site in northern Scotland. It grew into one of
              the world&apos;s most recognised intentional communities, combining spiritual
              development with sustainable agriculture and later with ecological construction. Today
              it houses around 500 residents and receives 14,000 visitors per year.
            </li>
            <li>
              <strong>Auroville (India, 1968):</strong> Founded near Pondicherry by Mirra Alfassa
              (known as &ldquo;The Mother&rdquo;) as a &ldquo;universal town&rdquo; dedicated to
              human unity. Recognised by the Indian government and UNESCO, Auroville hosts roughly
              3,000 residents from over 60 nations. It has pioneered afforestation on degraded land,
              renewable energy, and sustainable building.
            </li>
            <li>
              <strong>Damanhur (Italy, 1975):</strong> An Italian federation of communities and
              spiritual schools that grew from a small group founded by Oberto Airaudi near Turin.
              It operates as a federated community with its own currency (the Credito), schools, and
              artistic institutions. Damanhur is famous for the Temples of Humankind, a vast
              underground complex built secretly over 16 years.
            </li>
            <li>
              <strong>Kibbutzim (Israel, 1910–present):</strong> While predating the ecovillage
              label, the kibbutz movement is one of the most thoroughly documented experiments in
              communal economic living. At their peak in the 1960s–1970s, fully collectivist
              kibbutzim pooled all income and distributed resources equally. Most have since
              privatised, offering a crucial case study in communal economic sustainability.
            </li>
          </ul>
        </div>

        {/* Economic Model */}
        <div className="economic-section">
          <h2>The Economic Model</h2>
          <p>
            Ecovillages typically operate through a combination of shared ownership, cottage
            industries, and mixed-income streams. Common economic structures include:
          </p>
          <ul className="calligraphy-list">
            <li>
              <strong>Community Land Trusts (CLTs):</strong> Land is held collectively or in trust,
              removing it permanently from speculative markets. Residents may own their dwellings
              but not the land beneath them, keeping housing costs perpetually affordable. The
              Burlington Community Land Trust (Vermont, 1984) is one of the most studied examples
              outside the ecovillage context.
            </li>
            <li>
              <strong>Internal currencies and time-banks:</strong> Many ecovillages supplement
              conventional income with internal exchange systems. Damanhur&apos;s Credito and
              Findhorn&apos;s community service hours allow residents to trade skills and labour
              without cash, reducing dependency on external markets.
            </li>
            <li>
              <strong>Shared infrastructure:</strong> Central kitchens, tool libraries, shared
              vehicles, and communal workshops dramatically reduce per-capita cost of living. A 2015
              study by the GEN found that ecovillage residents consume roughly 40% fewer natural
              resources than average European households, largely through sharing.
            </li>
            <li>
              <strong>Cottage industries and social enterprise:</strong> Findhorn operates a
              renewable energy park, an organic farm, a publishers&apos; imprint, and an educational
              foundation. Auroville runs over 100 economic units producing handicrafts, software,
              and agricultural products sold globally.
            </li>
            <li>
              <strong>Membership fees and endowments:</strong> Many communities charge residents a
              joining fee or monthly contribution that funds shared facilities. Larger communities
              often attract endowments from philanthropists aligned with their mission.
            </li>
          </ul>
        </div>

        {/* Applicability to Techno-Monasteries */}
        <div className="economic-section">
          <h2>Applicability to Techno-Monasteries</h2>
          <div className="verdict-grid">
            <div className="verdict-box pros">
              <h3>Why It Could Work</h3>
              <ul className="calligraphy-list">
                <li>
                  Shared infrastructure (servers, workshop spaces, high-speed internet) mirrors the
                  shared physical infrastructure of ecovillages and reduces individual costs
                  substantially.
                </li>
                <li>
                  A Community Land Trust structure would protect the Techno-Monastery from property
                  speculation and ensure the space remains available for its mission indefinitely.
                </li>
                <li>
                  Open-source development is itself a form of &ldquo;commons&rdquo; production—the
                  ecovillage ethos of contributing to shared goods aligns naturally with free
                  software culture.
                </li>
                <li>
                  Cottage-industry equivalents exist in software: libraries, tools, and SaaS
                  products developed in-house could generate revenue while remaining open-source,
                  following the dual-licensing or open-core models used by companies like Red Hat
                  and HashiCorp.
                </li>
                <li>
                  Long-running ecovillages like Findhorn (60+ years) and Auroville (55+ years) prove
                  that intentional communities can achieve multi-generational sustainability when
                  governance structures are sound.
                </li>
              </ul>
            </div>
            <div className="verdict-box cons">
              <h3>Challenges to Consider</h3>
              <ul className="calligraphy-list">
                <li>
                  Many historical ecovillages became insular or spiritually homogenous over time,
                  making it harder to attract diverse technical talent. A Techno-Monastery must
                  resist this tendency through open membership criteria.
                </li>
                <li>
                  Governance is the greatest killer of intentional communities. The kibbutz movement
                  saw mass privatisation after decades of success because consensus-based governance
                  became untenable at scale. Clear, written governance frameworks are essential from
                  day one.
                </li>
                <li>
                  Rural ecovillages often suffer from poor connectivity to urban job markets and
                  cultural infrastructure—a serious obstacle for developers who need reliable
                  internet, access to conferences, and proximity to collaborators.
                </li>
                <li>
                  Start-up costs for purchasing or leasing land and building shared facilities are
                  high. Without philanthropic backing or a strong founding cohort, achieving
                  critical mass can take years.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <Link href="/economic-models" className="gildedButton">
            ← Back to All Models
          </Link>
        </div>
      </div>
    </div>
  )
}

export default EcovillagesPage
