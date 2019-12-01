import React from "react"

const JobsCard = (props) => {
  let job = props.job
  return (
    <>
      <div class="ui card">
          <div>
              <img src={job.image}/>
          </div>
          <div class="bottom-left">{job.name}<br/>{job.description}
          </div>
      </div>
    </>
  )
}

export default JobsCard