import React from "react";
import { useHistory, NavLink } from "react-router-dom";
import "./index.css";

const TopNavBar = () => {
    
    const history = useHistory();

    const goBack = (e) => {
        history.go(-1);
    };

    return (
        <div id="top-nav">
            <button className="top-nav-button" onClick={goBack}>Back</button>
            <NavLink to="/">
                <img src="https://i.ibb.co/Sx3THPm/vector-creator-1500-1by1.png" alt="vector-creator-1500-1by1" border="0" height="100px" />
            </NavLink>
        </div>
    );
};

export default TopNavBar