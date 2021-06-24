import React from "react";
import { useSelector } from "react-redux";
import { NavLink, Redirect, useHistory } from "react-router-dom";
import LoginFormModal from "../LoginFormModal";
import DemoQuestionModal from "../Utilities/DemoQuestionModal"
import Footer from "../zFooter"
import "./index.css";


const Splash = () => {
    const history = useHistory();
    const sessionUser = useSelector((state) => state.session.user);

    if (sessionUser) {
        const userId = sessionUser.id
        return <Redirect to={`/users/${userId}`} />
    };

    const toAboutPageHandle = (e) => {
        e.preventDefault();
        history.push("/about");
    };

    return (
        <> 
            <div id="splash-page">
                <div id="splash-logo">
                    <img src="FullLogo.png" alt="vector-creator-1500-1by1" border="0" /> 
                </div>
                <div id="splash-button-container">
                    <LoginFormModal />
                    <NavLink to="/signup">Sign Up</NavLink>
                    <DemoQuestionModal />
                    <button onClick={toAboutPageHandle}>About</button>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Splash;