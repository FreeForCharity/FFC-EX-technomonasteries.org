'use client'

import React from 'react'
import Link from 'next/link'
import { assetPath } from '@/lib/assetPath'

const CoHousingPage: React.FC = () => {
  return (
    <div>
      <div
        className="showcase"
        style={{ backgroundImage: `url(${assetPath('/img/building.jpg')})` }}
      >
        <div className="overlay">
          <h1>Co-housing</h1>
        </div>
      </div>

      <div className="mainContent">
        <Link href="/economic-models" className="back-link">
          ← Back to Economic Models
        </Link>

        <h2 className="pageTitle">Co-housing</h2>
        <div className="pageSectionTitle">Private Lives, Shared Purpose</div>

        {/* History */}
        <div className="economic-section">
          <h2>Historical Roots</h2>
          <p>
            Co-housing (Danish: <em>bofællesskab</em>, literally &ldquo;living community&rdquo;) is
            one of the most rigorously documented intentional housing models in the world. Its
            modern form was pioneered in Denmark in the late 1960s, making it notably younger than
            the broader communal-living movement, yet far better studied in academic and policy
            literature.
          </p>
          <p>
            The movement was catalysed by two overlapping works. In 1967, Danish architect Jan
            Gudmand-Høyer wrote an essay arguing that the standard Danish housing market failed to
            support meaningful community life. That same year, journalist Bodil Graae published the
            influential article <em>&ldquo;Children Should Have One Hundred Parents,&rdquo;</em>{' '}
            calling for a housing model that embedded children within a supportive community rather
            than isolating them in nuclear-family apartments. Both writers went on to build the
            first co-housing communities.
          </p>
          <p>
            The first purpose-built co-housing community, <strong>Sættedammen</strong>, opened in
            Hillerød, Denmark, in 1972. Designed by Gudmand-Høyer, it comprised 27 families in
            individual houses clustered around a common house with a shared kitchen, dining room,
            laundry, and children&apos;s facilities. Sættedammen remains occupied and functioning
            today, making it one of the longest continuously operating co-housing communities in the
            world.
          </p>
          <p>
            By the 1980s, Denmark had over 200 co-housing communities and the model had spread
            across Scandinavia. It reached the English-speaking world largely through the 1988 book{' '}
            <em>Cohousing: A Contemporary Approach to Housing Ourselves</em> by architects Kathryn
            McCamant and Charles Durrett, who coined the English term and adapted the model for
            North American contexts. Today, there are estimated to be over 1,000 co-housing
            communities globally, with significant concentrations in Denmark, the Netherlands,
            Germany, the United Kingdom, and the United States.
          </p>
          <h3>Notable Historical Examples</h3>
          <ul className="calligraphy-list">
            <li>
              <strong>Sættedammen (Denmark, 1972):</strong> The first modern co-housing community.
              27 households with a shared common house. Its longevity—over 50 years of continuous
              occupation—is testament to the model&apos;s viability.
            </li>
            <li>
              <strong>Trudeslund (Denmark, 1981):</strong> A landmark co-housing project studied
              extensively by McCamant and Durrett. It combined individual family homes with a rich
              common house and collective decision-making processes that became a template for
              subsequent projects worldwide.
            </li>
            <li>
              <strong>Doyle Street Cohousing (California, USA, 1991):</strong> One of the earliest
              North American co-housing communities, designed by Durrett&apos;s firm. Its success
              helped legitimise the model in the United States and attracted significant academic
              attention from housing policy researchers.
            </li>
            <li>
              <strong>LILAC (Low Impact Living Affordable Community, Leeds, UK, 2013):</strong> A
              20-household community that combined co-housing with a Mutual Home Ownership Society
              (MHOS) structure, allowing members to buy equity shares tied to income rather than
              market value. LILAC is the most extensively documented co-housing community in the
              United Kingdom and provides detailed financial data on the MHOS model.
            </li>
          </ul>
        </div>

        {/* Economic Model */}
        <div className="economic-section">
          <h2>The Economic Model</h2>
          <p>
            Co-housing communities separate private living space from shared amenities, allowing
            residents to benefit from economies of scale without surrendering personal autonomy. The
            economic mechanics vary by tenure type:
          </p>
          <ul className="calligraphy-list">
            <li>
              <strong>Ownership co-housing (condominium model):</strong> Each household owns its
              private unit as a condominium and jointly owns the common house and shared facilities.
              Residents pay monthly fees to a homeowners&apos; association (HOA) for maintenance of
              shared spaces. This is the dominant model in the United States and Canada.
            </li>
            <li>
              <strong>Rental co-housing:</strong> A non-profit or housing association owns all the
              property and rents units to residents. This model is common in Scandinavia and the
              Netherlands and provides stronger protection against speculative re-sale at the cost
              of limiting individual wealth accumulation.
            </li>
            <li>
              <strong>Mutual Home Ownership Society (MHOS):</strong> A cooperative model pioneered
              in the UK in which residents buy equity shares in the entire development rather than
              individual units. Share values are indexed to incomes rather than property markets,
              keeping housing permanently affordable. LILAC (Leeds) is the only fully operational
              MHOS in the world, with detailed public accounts available.
            </li>
            <li>
              <strong>Limited equity co-operatives:</strong> Residents own shares in a housing
              co-operative with resale restrictions that cap price appreciation, preserving
              affordability for future residents. This model is widespread in New York City and
              Switzerland.
            </li>
          </ul>
          <p>
            In all models, the shared common house dramatically reduces per-household costs. A 2013
            study published in <em>Journal of Housing and the Built Environment</em> found that
            co-housing residents in Denmark spend on average 15–20% less on housing costs than
            comparable households in conventional accommodation, after accounting for HOA fees and
            shared utilities.
          </p>
        </div>

        {/* Applicability to Techno-Monasteries */}
        <div className="economic-section">
          <h2>Applicability to Techno-Monasteries</h2>
          <div className="verdict-grid">
            <div className="verdict-box pros">
              <h3>Why It Could Work</h3>
              <ul className="calligraphy-list">
                <li>
                  The co-housing model&apos;s core insight—that sharing a common workspace, kitchen,
                  and social facilities dramatically reduces individual costs—maps directly onto
                  what a Techno-Monastery needs. Server rooms, high-bandwidth links, recording
                  studios, and maker spaces can be shared infrastructure.
                </li>
                <li>
                  Developers can retain private rooms or apartments for focused individual work,
                  while sharing a common hackspace, library, and kitchen. This mirrors the
                  co-housing balance of privacy and community.
                </li>
                <li>
                  The model has a 50-year track record with detailed documentation. Unlike purely
                  utopian proposals, co-housing governance structures (resident management, written
                  agreements, professional facilitation) are well understood.
                </li>
                <li>
                  Rental co-housing or MHOS structures could allow the Techno-Monastery to remain
                  permanently affordable to contributors regardless of property market conditions,
                  crucial for attracting talent who cannot afford market-rate housing in expensive
                  cities.
                </li>
                <li>
                  Several co-housing communities have successfully attracted professionals with
                  demanding careers by emphasising the community&apos;s support structures (shared
                  meals, childcare, communal events) rather than demanding total commitment to
                  communal ideology.
                </li>
              </ul>
            </div>
            <div className="verdict-box cons">
              <h3>Challenges to Consider</h3>
              <ul className="calligraphy-list">
                <li>
                  Co-housing development requires substantial upfront capital to acquire land and
                  build or renovate structures. Most communities spend three to five years in
                  planning and fundraising before the first resident moves in.
                </li>
                <li>
                  Without a mission-specific selection process, a co-housing community can drift
                  towards being a pleasant suburban neighbourhood rather than a productive
                  professional community. Clear membership criteria aligned with open-source
                  contribution are essential.
                </li>
                <li>
                  Consensus-based governance, while healthy, can be slow and contentious.
                  Communities that lack professional facilitation or written decision-making
                  protocols often experience paralysis over minor issues.
                </li>
                <li>
                  The co-housing model was designed primarily for residential communities, not
                  working communities. Adapting it to a context where the common house is also a
                  professional workspace introduces noise, scheduling, and liability complexities
                  not addressed in the standard model.
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

export default CoHousingPage
