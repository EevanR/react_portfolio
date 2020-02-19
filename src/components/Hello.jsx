import React from "react"
import Projects from "./Projects"
import About from "./About"
import { Link } from "react-scroll";
import { Parallax } from "react-parallax";

const image1 =
  "https://images.unsplash.com/photo-1558367853-fd760bbe56b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1900&q=80";

const Hello = () => {
  return (
    <>
      <div className="hello-section" id="hello">
        <Parallax bgImage={image1} strength={1200}>
          <div className="hello-parallax-div">
            <div className="main-text-parallax">
              <h1>
                Eevan Redon
              </h1>
              <p id="welcome-text"><span id="large-letter">Hello,</span> I'm a new <span id="orange">Full Stack Developer</span>,
                in the Stockholm area, currently using Rails and React to build my projects.
                Have a look around and visit my GitHub link to see some of my code.
              </p>
            </div>
          </div>
        </Parallax>
        <div id="uiHome" className="ui main container">
          <div id="greeting" className="centerText">
            <button className="ui vertical animated button">
              <div className="visible content"><span id="blue">View Projects</span></div>
              <Link className="hidden content"
                id="scroll"
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}>
                <i aria-hidden="true" className="arrow down icon"></i>
              </Link>
            </button>
            <div className="icons">
              <a href="https://www.linkedin.com/in/eevan-redon-579881199/" target="_blank"><i className="linkedin icon"></i></a>
              <a href="https://github.com/EevanR" target="_blank"><i className="github icon"></i></a>
              <a href={`mailto: eevan.redon@gmail.com`} target="_blank"><i className="envelope outline icon"></i></a>
            </div>
          </div>
        </div>
      </div>
      <About />
      <Projects />
    </>
  )
}

export default Hello