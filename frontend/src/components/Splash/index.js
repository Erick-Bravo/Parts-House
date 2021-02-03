import React from "react"
import { NavLink } from "react-router-dom"
import LoginFormModal from "../LoginFormModal"
import "./index.css"


const Splash = ({isLoaded}) => {

    return (
        <> 
            <div id="splash-page">
                <div id="splash-logo">
                    <img src="https://i.ibb.co/Sx3THPm/vector-creator-1500-1by1.png" alt="vector-creator-1500-1by1" border="0" height="200px"/>
                    <h3>Parts House</h3>
                </div>
                <div id="splash-button-container">
                    <LoginFormModal />
                    <NavLink to="/signup">Sign Up</NavLink>
                    <button>Demo</button>
                    <button>About</button>
                </div>
                
            </div>
        </>
    )
}

export default Splash