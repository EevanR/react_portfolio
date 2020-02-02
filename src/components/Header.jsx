import React from "react"
import { NavLink } from 'react-router-dom';
import { Link } from "react-scroll";

const Header = () => {
  return (
    <nav className='ui fixed inverted menu'>
      <div className="ui container">
        <NavLink className="header item" to='/'>HOME</NavLink>
        <div className="scroll">
          <Link id="scroll"
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={10}
            duration={500}
          >ABOUT</Link>
          <Link id="scroll"
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={20}
            duration={500}
          >PROJECTS</Link>
        </div>
        <div className="right menu">
          <NavLink className="ui item" activeStyle={{ fontWeight: "bold" }} to='/cv'>RESUME</NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Header