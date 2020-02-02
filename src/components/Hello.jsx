import React from "react"
import { NavLink } from 'react-router-dom';
import Projects from "./Projects"
import About from "./About"

const Hello = () => {
  return (
    <>
      <div className="hello-section">
        <div id="uiHome" className="ui main container">
          <div id="greeting" className="centered">
            <h1>
              Eevan Redon
            </h1>
            <p id="welcome-text">Hi! I'm a Junior Developer in the Stockholm area looking for opportunities to utilize my abilities.
              Have a look around to learn a bit about me!
            </p>
            <button className="ui animated button">
              <div className="visible content"><span id="blue">View Resume</span></div>
              <NavLink className="hidden content" to='/cv'><i aria-hidden="true" className="arrow right icon"></i></NavLink>
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