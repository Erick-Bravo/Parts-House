import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
import { NavLink, Redirect, useHistory } from "react-router-dom";
import LoginFormModal from "../LoginFormModal";
import Footer from "../zFooter"
import "./index.css";


const Splash = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector((state) => state.session.user);

    if (sessionUser) {
        const userId = sessionUser.id
        return <Redirect to={`/users/${userId}`} />
    };

    const credential = "user@demo.com";
    const password = "password";

    const demoLoginHandle = (e) => {
        e.preventDefault();
        return dispatch(sessionActions.login({ credential, password }))
    };

    const toAboutPageHandle = (e) => {
        e.preventDefault();
        history.push("/about");
    };

    
    return (
        <> 
            <div id="splash-page">
                <div id="splash-logo">
                    <img src="https://i.ibb.co/Sx3THPm/vector-creator-1500-1by1.png" alt="vector-creator-1500-1by1" border="0" height="450px"/> 
                    <p>Parts House</p>
                </div>
                <div id="splash-button-container">
                    <LoginFormModal />
                    <NavLink to="/signup">Sign Up</NavLink>
                    <button onClick={demoLoginHandle}>Demo</button>
                    <button onClick={toAboutPageHandle}>About</button>
                </div>
                
            </div>

            <Footer />
        </>
    );
};

export default Splash;