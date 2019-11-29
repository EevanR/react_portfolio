import React, { Component }from "react"

class Cv extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return(
            <div className="ui main container">
                <div className="ui stackable two column grid">
                     <div className="column">   
                        <img className="headshot" src="https://i.imgur.com/L38tMS2.jpg" />
                    </div>
                    <div className="column">
                        <h1 className="titleText">Experience</h1>
                    </div>
                </div>
            </div>
        )
    }
}






export default Cv