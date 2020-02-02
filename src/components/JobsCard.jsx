import React from "react"

const JobsCard = (props) => {
  let job = props.job
  return (
    <>
      <div className="zoom">
        <img src={job.image} width="100%" height="248px" />
        <div>
          <h5 className="description">{job.name}</h5>
          <p>{job.description}</p>
          <p></p>
        </div>
      </div>
    </>
  )
}

export default JobsCard