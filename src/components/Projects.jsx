import React, { useEffect, useState } from "react"
import axios from "axios"
import ProjectCard from "./ProjectCard"
import { Parallax } from "react-parallax"
import Footer from "./Footer"

const Projects = () => {
  const [projects, setProjects] = useState([])
  const image1 = './dist/images/toronto-pic.jpeg'

  const projectData = () => {
    axios.get('./src/data/projects.json')
      .then(response => {
        setProjects(response.data)
      })
  }

  useEffect(() => {
    projectData()
  }, [])

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
            <h4>A few examples of weekly projects in collaboration with <span id="blue">Craft Accademy Stockholm</span>.
              To see the code click any of the GitHub icons. Additional projects can be found on GitHub.</h4>
          </div>
        </div>
      </Parallax>
      <div className="ui stackable four column grid">
        {projectsList}
      </div>
      <div className="centerText">
        <div className="footer">
          <a href={`mailto: eevan.redon@gmail.com`}><p id="pfooter">Email: eevan.redon@gmail.com</p></a>
          <Footer />
        </div>
      </div>
    </div>
  )
}


export default Projects