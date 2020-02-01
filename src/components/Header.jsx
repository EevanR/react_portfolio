import React from "react"
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className='ui fixed inverted menu'>
      <div className="ui container">
        <Link className="header item" to='/'>HOME</Link>
        <NavLink className="ui item" activeStyle={{ fontWeight: "bold" }} to='/about'>ABOUT ME</NavLink>
        <NavLink className="ui item" activeStyle={{ fontWeight: "bold" }} to='/cv'>RESUME</NavLink>
        <NavLink className="ui item" activeStyle={{ fontWeight: "bold" }} to='/projects'>PROJECTS</NavLink>
      </div>
    </nav>
  )
}

export default Header