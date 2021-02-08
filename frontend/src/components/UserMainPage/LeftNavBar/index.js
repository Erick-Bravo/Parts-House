import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom"
import { logout } from "../../../store/session";




const LeftNavBar = ({ userPartsHouses }) => {

    const dispatch = useDispatch();

    const logoutHandler = (e) => {
        e.preventDefault();
        dispatch(logout());
    };

    const userId = useSelector(state => state.session.user.id)

    return (
        <div id="left-nav-bar">
            <div className="top-section-navbar">
                <button>add parts house +</button>
                {!userPartsHouses && <p>{`<Parts Houses Empty>`}</p>}
                {userPartsHouses && userPartsHouses.map(partsHouse => {
                    return <NavLink to={`/users/${userId}/parts-house/${partsHouse.id}/appliances`} key={partsHouse.id}>
                        <button>{`${partsHouse.name}`}</button>
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