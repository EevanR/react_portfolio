import React from "react"

const ProjectCard = (props) => {
  let project = props.project
  return (
    <>
      <div className="zoom">
        <div className="ui card">
            <a href={project.link} target="_blank"><img src={project.image} width="100%" height="300px"/></a>
            <div className="bottom-left">
              <h5>{project.name} <a href={project.gitHub} target="_blank"><i className="github icon"></i></a><br/></h5>
              {/* <p>{project.description}</p> */}
            </div>
            <p>{project.description}</p>
        </div>
      </div>
    </>
  )
}

export default ProjectCard