import React from "react"
import Navigation from "../Navigation"
import "./index.css"
const logo = require("./mascot.png")

const Splash = ({isLoaded}) => {

    return (
        <> 
            <div id="splash-page">
                <div id="splash-logo">
                    <img src="https://i.ibb.co/Sx3THPm/vector-creator-1500-1by1.png" alt="vector-creator-1500-1by1" border="0" height="200px"/>
                    <h3>Parts House</h3>
                </div>
                <div id="splash-button-container">
                    <button>Log-In</button>
                    <button>Sign-Up</button>
                    <button>Demo</button>
                    <button>About</button>
                </div>
                
            </div>
        </>
    )
}

export default Splash