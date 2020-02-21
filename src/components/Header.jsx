import React from "react"
import Nav from "./Nav"

const Header = () => {

  return (
    <nav className='ui fixed inverted menu'>
      <div className="right menu">
        <Nav />
      </div>
    </nav>
  )
}

export default Header