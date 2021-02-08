import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../../store/session";







const LeftNavBar = ({userPartsHouses}) => {

    const dispatch = useDispatch();

    const [ displayBox, setDisplayBox ] = useState("Hello! Having a Good Day?");

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
                    return <button key={partsHouse.id} onClick={() => setDisplayBox(partsHouse)}>{`${partsHouse.name}`}</button>
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