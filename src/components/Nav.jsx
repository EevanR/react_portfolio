import React from 'react';
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <div className="scroll">
      <Link id="scroll"
        activeClass="active"
        to="hello"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >HOME</Link>
      <Link id="scroll"
        activeClass="active"
        to="about"
        spy={true}
        smooth={true}
        offset={40}
        duration={500}
      >ABOUT</Link>
      <Link id="scroll"
        activeClass="active"
        to="projects"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
      >PROJECTS</Link>
      <a id="orange" href="https://1drv.ms/b/s!AoAKOo_731UpgREwkxaIif7nI9FD" target="_blank">Resume</a>
    </div>
  );
}


export default Nav;