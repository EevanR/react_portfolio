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
            <JobsCard job={job} />
          </div>
        )
      })
    }

    return (
      <div className="ui main container">
        {CvInfo.map((info) => {
          return <div>
            <div className="ui stackable two column grid">
              <div id="banner" className="column">
                <p id="bannerText">"{info.profile}"</p>
              </div>
              <div className="column">
                <h1 className="titleText">about<span id="blue">Me</span></h1>
              </div>
            </div>
            <div id="greyBox" className="centerText">
              <h2 id="bannerText">My Working Life Until Now...</h2>
            </div>
            <div id="jobslist" className="ui stackable four column grid">
              {jobsList}
            </div>
            <div id="description2" className="centerText">
              <div>
                <h2 id="bannerText">Education</h2>
                <p>{info.education}</p>
                <p>{info.education2}</p>
              </div>
            </div>
          </div>
        })}
      </div>

    )
  }
}

export default Jobs