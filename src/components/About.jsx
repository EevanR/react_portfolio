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
              <div id="" className="column">
                <div className="skills">
                  <i className="aws icon"></i>
                  <i className="stripe icon"></i>
                  <i className="github icon"></i>
                  <i className="html5 icon"></i>
                  <i className="js icon"></i>
                  <i className="npm icon"></i>
                  <i className="react icon"></i>
                </div>
              </div>
              <div className="column">
                <div className="skills-desc">
                  <h4>Amazon Web Services</h4>
                  <p id="divider">Using AWS for storage of images on projects such as The Reactive Herald.</p>
                  <h4>Stripe Payments</h4>
                  <p id="divider">Using AWS for storage of images on projects such as The Reactive Herald.</p>
                  <h4>GitHub Version Controll</h4>
                  <p id="divider">Using AWS for storage of images on projects such as The Reactive Herald.</p>
                  <h4>HTML 5</h4>
                  <p id="divider">Using AWS for storage of images on projects such as The Reactive Herald.</p>
                  <h4>javaScript</h4>
                  <p id="divider">Using AWS for storage of images on projects such as The Reactive Herald.</p>
                  <h4>NPM</h4>
                  <p id="divider">Using AWS for storage of images on projects such as The Reactive Herald.</p>
                  <h4>React.js</h4>
                  <p id="divider">Using AWS for storage of images on projects such as The Reactive Herald.</p>
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