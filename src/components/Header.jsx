import React from "react"
import { NavLink } from 'react-router-dom';
import { Link } from "react-scroll";

const Header = () => {
  return (
    <nav className='ui fixed inverted menu'>
      <div className="ui container">
        <NavLink className="header item" to='/'>HOME</NavLink>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >ABOUT</Link>
        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >PROJECTS</Link>
        <div className="right menu">
          {/* <NavLink className="ui item" activeStyle={{ fontWeight: "bold" }} to='/about'>ABOUT ME</NavLink>  */}
          <NavLink className="ui item" activeStyle={{ fontWeight: "bold" }} to='/cv'>RESUME</NavLink>
          {/* <NavLink className="ui item" activeStyle={{ fontWeight: "bold" }} to='/projects'>PROJECTS</NavLink> */}
        </div>
      </div>
    </nav>
  )
}

export default Header