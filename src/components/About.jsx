import React from "react"
import CvInfo from "../data/cv.json"

const About = () => {

  return (
    <div className="about-section" id="about">
      {CvInfo.map((info) => {
        return <div>
          <div className="abouts-header">
            <h2 className="titleText">skills&<span id="blue">Education</span></h2>
            <h3>Mission:</h3>
            <p id="bannerText">"{info.profile}"</p>
            <p>A few of my skills are listed below, for more, have a look at my CV or linkedin.</p>
          </div>
          <div className="ui main container">
            <div className="ui stackable two column grid">
              <div className="column">
                <div className="skills">
                  <i style={{color: "darkorange"}} className="handshake outline icon"></i>
                  <i className="aws icon"></i>
                  <i className="stripe icon"></i>
                  <i className="github icon"></i>
                  <i className="html5 icon"></i>
                  <i className="js icon"></i>
                  <i className="npm icon"></i>
                  <img style={{width: 100, paddingTop: 40}} src="../dist/icons/Redux.png" alt=""/>
                </div>
              </div>
              <div className="column">
                <div className="skills-desc">
                  <h4>Collaboration</h4>
                  <p id="divider">Collaboraion and pair programming is a solid way to quickly produce higher quality code and can be seen throughout all my collaborative projects.</p>
                  <h4>Amazon Web Services</h4>
                  <p id="divider">Using AWS for storage of images on projects such as The Reactive Herald.</p>
                  <h4>Stripe Payments</h4>
                  <p id="divider">Stripe is implimented on a number of my projects to represent potential payment mathods.</p>
                  <h4>GitHub Version Controll</h4>
                  <p id="divider">All Projects are built with Git version controll. Git is also used for collaboration work via git pong and sharing open repositories.</p>
                  <h4>HTML 5</h4>
                  <p id="divider">Web page content is always delivered by implementing HTML 5.</p>
                  <h4>JavaScript</h4>
                  <p id="divider">Of course, among other things, to build a front-end with react and redux, an understanding of JavaScript is essential.</p>
                  <h4>NPM</h4>
                  <p id="divider">NPM is one of the tools I prefer using as a JavaScript package manager, along with yarn.</p>
                  <h4>React.js Redux</h4>
                  <p id="divider">When I started building user interfaces, I prefered to use the Javascript library, React! Now, React with Redux is always the go-to.</p>
                </div>
              </div>
            </div>
            <div id="description2" className="centerText">
              <h3 id="bannerText">Education</h3>
              <p>{info.education}</p>
              <p>{info.education2}</p>
            </div>
            <div className="centerText">
              <a href="https://www.linkedin.com/in/eevan-redon-579881199/" target="_blank">
                <p>Feel free to visit my Linkedin to get more information</p>
              </a>
            </div>
          </div>
      </div>
      })}
    </div>
  )
}


export default About