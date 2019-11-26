import React from "react"
import { UndrawProgramming } from 'react-undraw-illustrations';

const About = () => {
    return (
        <div className="ui main container">
          <div class="ui stackable two column grid">
            <div class="column">
              <UndrawProgramming />
            </div>
            <div class="column">
              <h1 className="ui header">About Me</h1>
              <p>Eevan Redon from Vancouver, Canada.</p>
            </div>
          </div>
        </div>
    )
}

export default About