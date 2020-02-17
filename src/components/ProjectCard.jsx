import React from "react"

const ProjectCard = (props) => {
  let project = props.project
  
  return (
    <>
      <div className="zoom">
        <div className="ui card">
          <img src={project.image} width="100%" height="300px" />
          <div className="bottom-left">
            <h5>{project.name} <a href={project.gitHub} target="_blank"><i className="github icon"></i></a>
              {project.gitHubAPI ? (
                <a href={project.gitHubAPI} target="_blank"><i  style={{color: "red"}} className="github icon"></i></a>
              ) : (
                  null
                )}
            </h5>
          </div>
          <p>{project.description}</p>
        </div>
      </div>
    </>
  )
}

export default ProjectCard