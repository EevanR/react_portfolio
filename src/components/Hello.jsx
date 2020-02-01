import React from "react"
import { Link } from 'react-router-dom';
import Projects from "./Projects"
import About from "./About"

const Hello = () => {
  return (
    <>
      <div className="hello-section">
        <div id="uiHome" className="ui main container">
          <div className="centered">
            <h1>
              Eevan Redon
            </h1>
            <p>Hi! I'm a Junior Developer in the Stockholm area looking for opportunities to utilize my abilities.
              Have a look around to learn a bit about me!
            </p>
            <button className="ui animated button">
              <div className="visible content"><span id="blue">View Projects</span></div>
              <Link className="hidden content" to='/projects'><i aria-hidden="true" className="arrow right icon"></i></Link>
            </button>
          </div>
          <div id="divider" className="footerIcons">
              <a href="https://www.linkedin.com/in/eevan-redon-579881199/" target="_blank"><i className="linkedin icon"></i></a>
              <a href="https://github.com/EevanR" target="_blank"><i className="github icon"></i></a>
          </div>
        </div>
      </div>
      <About />
      <Projects />
    </>
  )
}

export default Hello