import React from "react"
import { Link } from 'react-router-dom';

const Hello = () => {
  return (
    <div id="uiHome" className="ui main container">
      <div className="centered">
        <h1>
          Eevan Redon
        </h1>
        <h3>Junior Developer</h3>
        <button className="ui animated button">
          <div className="visible content"><span id="blue">View Projects</span></div>
          <Link className="hidden content" to='/projects'><i aria-hidden="true" className="arrow right icon"></i></Link>
        </button>
      </div>
    </div>
  )
}

export default Hello