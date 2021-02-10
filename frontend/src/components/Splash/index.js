import React from "react"
import { useSelector } from "react-redux";
import { NavLink, Redirect } from "react-router-dom"
import LoginFormModal from "../LoginFormModal"
import "./index.css"






const Splash = () => {
    const sessionUser = useSelector((state) => state.session.user);

    
    
    if (sessionUser) {
        const userId = sessionUser.id
        return <Redirect to={`/users/${userId}`} />
    };

    return (
        <> 
            <div id="splash-page">
                <div id="splash-logo">
                    <img src="https://i.ibb.co/Sx3THPm/vector-creator-1500-1by1.png" alt="vector-creator-1500-1by1" border="0" height="400px"/>
                    <p>Parts House</p>
                </div>
                <div id="splash-button-container">
                    <LoginFormModal />
                    <NavLink to="/signup">Sign Up</NavLink>
                    <button>Demo</button>
                    <button>About</button>
                </div>
                
            </div>
        </>
    );
};

export default Splash