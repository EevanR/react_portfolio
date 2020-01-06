import React from "react"

const ProjectCard = (props) => {
  let project = props.project
  return (
    <>
      <div class="ui card">
          <a href={project.link} target="_blank"><img src={project.image} width="100%" height="300px"/></a>
          <div class="bottom-left">{project.name}<br/>{project.description}</div>
      </div>
    </>
  )
}

export default ProjectCard