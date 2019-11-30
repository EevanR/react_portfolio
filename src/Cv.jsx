import React, { Component } from "react"
import CvInfo from "./data/cv.json"

class Cv extends Component {
    render() {
        return(
            <div className="ui main container">
                {CvInfo.map((info) => {
                    return <div>
                            <div className="ui stackable two column grid">
                                <div id="banner" className="column">
                                    <p id="bannerText">"{info.profile}"</p>
                                </div>
                                <div className="column">
                                    <h1 className="titleText">Resum<span class="blueText">é</span></h1>
                                    <img className="headshot" src="https://i.imgur.com/L38tMS2.jpg" />
                                </div>
                            </div>
                            <div className="centerText">
                                <h5 id="bannerText">My Working Life Until Now...</h5>
                            </div>
                        </div>
                })}
            </div>
        )
    }
}






export default Cv