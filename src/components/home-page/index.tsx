'use client'

import React from 'react'
import Image from 'next/image'
import { assetPath } from '@/lib/assetPath'

const HomePage: React.FC = () => {
  return (
    <>
      {/* Showcase */}
      <div className="showcase">
        <img className="showcaseImg" src={assetPath('/img/showcase.png')} alt="Showcase" />
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
        <h1 className="pageTitle">A Home of Open Innovation</h1>
        <div>
          <div className="Journey">
            <div className="pageSectionTitle">The Journey</div>
            <p>
              Throughout history, seekers of knowledge—Pythagoras in Egypt, Fibonacci in North
              Africa, and the scholars of the Silk Road—traveled between monasteries, libraries, and
              centers of learning. Their journeys weren&apos;t just for personal enlightenment; they
              carried ideas across borders, strengthening the fabric of shared knowledge.
            </p>
            <p>
              Techno-Monasteries revive this tradition, forming a network of places where builders,
              researchers, and creators can travel, exchange ideas, and refine their craft. Each
              stop offers a unique environment—some nestled in historic cloisters, others in
              repurposed retreats—all dedicated to fostering deep work and collaboration. Whether
              staying for weeks or months, each visitor leaves something behind: contributions that
              strengthen an ecosystem of shared knowledge and open innovation.
            </p>
          </div>

          <div className="calling">
            <div className="pageSectionTitle">The Calling</div>
            <img
              src={assetPath('/img/robotRacing.JPG')}
              alt="Robot Racing"
              style={{ width: '35%', height: 'auto', float: 'right', marginLeft: '15px' }}
            />
            <p>
              Some feel it—a quiet pull toward something different. A life of focus, deep work, and
              shared purpose. A place where knowledge is cultivated, projects take root, and ideas
              are given space to grow.
            </p>
            <p>
              Techno-Monasteries are modern sanctuaries for those who create in service of the
              common good. Inspired by historical monasteries that preserved knowledge for future
              generations, they provide a retreat from distraction—a space to work, think, and
              collaborate. Some come seeking solitude, others find strength in a like-minded
              community, but all come with a purpose: to build something lasting, something open,
              something that enriches the commons.
            </p>
          </div>

          <div className="life">
            <div className="pageSectionTitle">The Way of Life</div>
            <p>
              Life at a Techno-Monastery is a balance of focus, collaboration, and shared
              experience. Quiet spaces support deep work, while communal areas foster spontaneous
              discussion and collaboration. Whether you&apos;re coding, mapping ideas on a
              whiteboard, or debating open-source governance over tea, the environment is designed
              to inspire.
            </p>
            <img
              src={assetPath('/img/volunteerMeal.jpg')}
              alt="Volunteer Meal"
              style={{ width: '40%', height: 'auto', float: 'left', marginRight: '15px' }}
            />
            <p>
              Meals are flexible—some cook for themselves, while others join community meals. The
              kitchen is a communal space where residents might pool groceries or collaborate on
              simple dishes, but there&apos;s no set expectation. The monastery fosters a balance
              between independence and community, where organic discussions, impromptu workshops,
              and quiet moments of reflection naturally emerge. It&apos;s not just a place to
              work—it&apos;s a space to think, build, and connect. How would you use this space to
              bring your ideas to life?
            </p>
          </div>

          <div className="cloister">
            <div className="pageSectionTitle">Step Inside the Cloister</div>
            <p>
              Techno-Monasteries begin as an idea, but they take shape through those who gather to
              build them. If this vision speaks to you, join the conversation, share your insights,
              and help shape the first Techno-Monastery.
            </p>
            <div style={{ textAlign: 'center' }}>
              <a href="https://discord.gg/T8dxSgZS2J" target="_blank" rel="noopener noreferrer">
                <button className="gildedButton">
                  <span style={{ color: 'brown' }}>*</span>
                  Join our Discord
                  <span style={{ color: 'brown' }}>*</span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
