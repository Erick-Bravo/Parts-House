import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom"
import { logout } from "../../../store/session";
import { fetchUserPartsHouses } from "../../../store/partshouse"




const LeftNavBar = () => {

    const userId = useSelector(state => state.session.user.id)
    const userPartsHouses = useSelector(state => state.partsHouses);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUserPartsHouses(userId));
    }, [dispatch]);


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