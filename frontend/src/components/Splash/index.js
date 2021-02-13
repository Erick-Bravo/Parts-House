import React from "react"
import { useSelector, useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
import { NavLink, Redirect } from "react-router-dom"
import LoginFormModal from "../LoginFormModal"
import "./index.css"


const Splash = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);

    if (sessionUser) {
        const userId = sessionUser.id
        return <Redirect to={`/users/${userId}`} />
    };

    const credential = "user@demo.com"
    const password = "password"

    const demoHandle = (e) => {
        e.preventDefault();
        return dispatch(sessionActions.login({ credential, password }))
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
                    <button onClick={demoHandle}>Demo</button>
                    <button>About</button>
                </div>
                
            </div>
        </>
    );
};

export default Splash