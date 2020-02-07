import React, { Component } from "react"
import axios from "axios"
import ProjectCard from "./ProjectCard"

class Projects extends Component {
  constructor() {
    super();
    this.state = {
      projects: []
    };
  }

  componentDidMount() {
    axios.get('./src/data/projects.json')
      .then(response => {
        this.setState({
          projects: response.data
        })
      })
  }


  render() {
    const projects = this.state.projects
    let projectsList

    if (projects.length > 0) {
      projectsList = projects.map(project => {
        return (
          <div key={project.id}>
            <ProjectCard project={project} />
          </div>
        )
      })
    }

    return (
      <div className="projects-section" id="projects">
        <div className="ui main container">
          <div className="ui stackable two column grid">
            <div className="column">
            </div>
            <div className="column">
              <h2 className="titleText"><span id="blue">my</span>Projects</h2>
              <p>A few examples of weekly projects in collaboration with <span id="orange">Craft Accademy Stockholm</span>.
              To see the code and other purley backend works click any of the GitHub icons around the site.</p>
            </div>
          </div>
          <div className="ui stackable two column grid">
            {projectsList}
          </div>
          <div className="centerText">
            <div className="footer">
                <a href={`mailto: eevan.redon@gmail.com`}><p id="pfooter">Email: eevan.redon@gmail.com</p></a> 
            </div>
            <p>Made with React</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Projects