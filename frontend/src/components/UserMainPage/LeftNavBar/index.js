import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useParams } from "react-router-dom"
import { logout } from "../../../store/session";







const LeftNavBar = ({ userPartsHouses }) => {

    const dispatch = useDispatch();

    const { userId } = useParams()

    const [displayBox, setDisplayBox] = useState("Hello! Having a Good Day?");

    const logoutHandler = (e) => {
        e.preventDefault();
        dispatch(logout());
    };


    return (
        <div id="left-nav-bar">
            <div className="top-section-navbar">
                <button>add parts house +</button>
                {!userPartsHouses && <p>{`<Parts Houses Empty>`}</p>}
                {userPartsHouses && userPartsHouses.map(partsHouse => {
                    return <NavLink to={`/users/${userId}/parts-house/${partsHouse.id}/appliances`}
                        key={partsHouse.id}>
                        {`${partsHouse.name}`}
                    </NavLink>
                })}
            </div>
            <div className="bottom-section-navbar">
                <button onClick={logoutHandler}>Logout</button>
                <div className="empty-space-leftNav"></div>
            </div>

        </div>
    );
};

export default LeftNavBar