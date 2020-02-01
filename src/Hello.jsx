import React from "react"
import { Link } from 'react-router-dom';

const Hello = () => {
  return (
    <div id="uiHome" className="ui main container">
      <div className="centered">
        <h1>
          Eevan Redon
        </h1>
        <p>Hi! I'm a Junior Developer who loves opportunities to utilize his abilities.</p>
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
  )
}

export default Hello