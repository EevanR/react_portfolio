import React, { Component } from "react"
import { NavLink } from 'react-router-dom';
import Nav from "./Nav"

class Header extends Component {
  constructor() {
    super();
    this.state = {
      nav: <Nav />,
    };
  }

  renderHomeButton() {
    this.setState({
      nav: <NavLink className="header item" to='/'
        onClick={() => this.renderNav()}
      >HOME</NavLink> 
    })
  }

  renderNav() {
    this.setState({
      nav: <Nav />
    })
  }

  render() {
    const { nav } = this.state;
    return (
      <nav className='ui fixed inverted menu'>
        <div className="ui container">
          {nav}
          <div className="right menu">
            <NavLink className="ui item" activeStyle={{ fontWeight: "bold" }} to='/cv'
              onClick={() => this.renderHomeButton()}
            >RESUME</NavLink>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header