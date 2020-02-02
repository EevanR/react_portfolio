import React from "react"
import Projects from "./Projects"
import About from "./About"
import { Link } from "react-scroll";

const Hello = () => {
  return (
    <>
      <div className="hello-section" id="hello">
        <div id="uiHome" className="ui main container">
          <div id="greeting" className="centered">
            <h1>
              Eevan Redon
            </h1>
            <p id="welcome-text"><span id="large-letter">Hi!</span> I'm a Junior Developer in the Stockholm area looking for opportunities to utilize my abilities.
              Have a look around to learn a bit about me!
            </p>
            <button className="ui vertical animated button">
              <div className="visible content"><span id="blue">View Projects</span></div>
              <Link className="hidden content"
                id="scroll"
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={20}
                duration={500}>
                <i aria-hidden="true" className="arrow down icon"></i>
              </Link>
            </button>
            <div className="icons">
              <a href="https://www.linkedin.com/in/eevan-redon-579881199/" target="_blank"><i className="linkedin icon"></i></a>
              <a href="https://github.com/EevanR" target="_blank"><i className="github icon"></i></a>
            </div>
          </div>
        </div>
      </div>
      <About />
      <Projects />
    </>
  )
}

export default Hello