import React from "react"
import Projects from "./Projects"
import About from "./About"
import { Link } from "react-scroll";
import { Parallax } from "react-parallax";

const Hello = () => {

  const image1 = "./dist/images/desktop-pic.jpeg";

  return (
    <>
      <Parallax bgImage={image1} strength={1200}>
        <div className="hello-section" id="hello">
          <div>
            <span id="hello-hello">Hi, I am</span>
          </div>
            <div className="hello-parallax-div">
              <div className="main-text-parallax">
                <h1>
                  Eevan Redon
                </h1>
                <p id="welcome-text">... a new <span id="orange">Full Stack Developer</span>,
                  in the Stockholm area, currently using Rails and React to build my projects.
                  Please have a look around and visit my GitHub link to see my code.
                </p>
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
      </Parallax>
      <About />
      <Projects />
    </>
  )
}

export default Hello