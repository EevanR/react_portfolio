import React from "react"
import Nav from "./Nav"

const Header = () => {

  return (
    <nav className='ui fixed inverted menu'>
      <Nav />
      <div className="right menu">
        <a id="orange" href="https://1drv.ms/b/s!AoAKOo_731UpgREwkxaIif7nI9FD" target="_blank">Resume</a>
      </div>
    </nav>
  )
}

export default Header