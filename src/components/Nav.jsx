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
  );
}


export default Nav;