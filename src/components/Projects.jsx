import React, { Component } from "react"
import axios from "axios"
import ProjectCard from "./ProjectCard"
import { Parallax } from "react-parallax"
import Footer from "./Footer"

const image1 =
  'https://images.unsplash.com/photo-1517935706615-2717063c2225?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1601&q=80'


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
        <Parallax bgImage={image1} strength={500}>
          <div className="projects-parallax-div">
            <div className="text-parallax">
              <h2 className="titleText"><span id="blue">my</span>Projects</h2>
              <p>A few examples of weekly projects in collaboration with <span id="blue">Craft Accademy Stockholm</span>.
              To see the code click any of the GitHub icons. Additional projects can be found on GitHub.</p>
            </div>
          </div>
        </Parallax>
          <div className="ui stackable four column grid">
            {projectsList}
          </div>
          <div className="centerText">
            <div className="footer">
              <a href={`mailto: eevan.redon@gmail.com`}><p id="pfooter">Email: eevan.redon@gmail.com</p></a>
              <p>Made with React</p>
              <Footer />
            </div>
          </div>
      </div>
    )
  }
}

export default Projects