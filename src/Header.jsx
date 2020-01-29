import React from "react"
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className='ui fixed inverted menu'>
      <div className="ui container">
        <Link className="header item" to='/'>HOME</Link>
        <div className="right menu">
          <NavLink className="ui item" activeStyle={{ fontWeight: "bold" }} to='/about'>RESUME</NavLink>
          <NavLink className="ui item" activeStyle={{ fontWeight: "bold" }} to='/cv'>ABOUT ME</NavLink>
          <NavLink className="ui item" activeStyle={{ fontWeight: "bold" }} to='/projects'>PROJECTS</NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Header