import React, { Component } from "react"
import CvInfo from "./data/cv.json"

class Cv extends Component {
    render() {
        return(
            <div className="ui main container">
                {CvInfo.map((info) => {
                    return <div className="ui stackable two column grid">
                            <div className="column">
                                <h3 className="blueDiv">Purpose</h3>
                                <p>{info.profile}</p>
                                <h3 className="blueDiv">Previous Work Certifications</h3>
                                <p>
                                    <ul>
                                        <li>{info.c3}</li>
                                        <li>{info.c4}</li>
                                        <li>{info.c1}</li>
                                        <li>{info.c2}</li>
                                        <li>{info.c5}</li>
                                        <li>{info.c6}</li>
                                        <li>{info.c7}</li>
                                        <li>{info.c8}</li>
                                    </ul>
                                </p>
                                <h3 className="blueDiv">Education</h3>
                                <p>
                                    <ul>
                                        <li>{info.edu1}</li>
                                        <li>{info.edu2}</li>
                                        <li>{info.edu3}</li>
                                        <li>{info.edu4}</li>
                                    </ul>
                                </p>
                            </div>
                            <div className="column">
                                <h1 className="titleText">Work Experience</h1>
                                <img className="headshot" src="https://i.imgur.com/L38tMS2.jpg" />
                            </div>
                        </div>
                })}
            </div>
        )
    }
}






export default Cv