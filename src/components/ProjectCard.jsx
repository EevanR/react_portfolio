import React from "react"

const ProjectCard = (props) => {
  let project = props.project

  return (
    <>
      <div className="zoom">
        <div className="ui card">
          <a href={project.link} target="_blank"><img src={project.image} width="100%" height="300px" /></a>
          <div className="bottom-left">
            <h5>{project.name}
              {project.gitHub && (
                <a href={project.gitHub} target="_blank"><i className="github icon"></i></a>
              )}
              {project.gitHubAPI && (
                <a href={project.gitHubAPI} target="_blank"><i style={{ color: "red" }} className="github icon"></i></a>
              )}
            </h5>
            <br />
            <span id="orange">Build Time: {project.buildTime}</span>
          </div>
          <p>{project.description}</p>
        </div>
      </div>
    </>
  )
}

export default ProjectCard