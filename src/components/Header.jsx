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
            <a id="orange" href="https://1drv.ms/u/s!AoAKOo_731UpgQ_mo6qQiA1sqyfl" target="_blank">Resume</a>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header