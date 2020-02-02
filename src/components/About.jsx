import React, { Component } from "react"
import CvInfo from "../data/cv.json"
import axios from "axios"
import JobsCard from "./JobsCard"

class Jobs extends Component {
  constructor() {
    super();
    this.state = {
      jobs: []
    };
  }

  componentDidMount() {
    axios.get('./src/data/jobs.json')
      .then(response => {
        this.setState({
          jobs: response.data
        })
      })
  }

  render() {
    const jobs = this.state.jobs
    let jobsList

    if (jobs.length > 0) {
      jobsList = jobs.map(job => {
        return (
          <div key={job.id}>
            {/* <JobsCard job={job} /> */}
          </div>
        )
      })
    }

    return (
      <div className="about-section" id="about">
        <div className="ui main container">
          {CvInfo.map((info) => {
            return <div>
              <div className="ui stackable two column grid">
                <div id="banner" className="column">
                  <h3>Mission:</h3>
                  <p id="bannerText">"{info.profile}"</p>
                </div>
                <div className="column">
                  <h2 className="titleText">skills&<span id="blue">Education</span></h2>
                </div>
                <div className="skills">
                  <i className="aws icon"></i>
                  <i className="stripe icon"></i>
                  <i className="github icon"></i>
                  <i className="html5 icon"></i>
                  <i className="js icon"></i>
                  <i className="npm icon"></i>
                  <i className="react icon"></i>
                  {/* <i className="npm icon"></i>
                  <i className="npm icon"></i> */}
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
          })}
        </div>
      </div>
    )
  }
}

export default Jobs