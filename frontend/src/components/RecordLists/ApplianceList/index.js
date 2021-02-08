import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, NavLink } from "react-router-dom";
import { fetchUserPartsHouses } from "../../../store/partshouse"
import "./index.css";






const ApplianceList = () => {

    const dispatch = useDispatch();

    const { userId, partsHouseId } = useParams();

    useEffect(() => {
        dispatch(fetchUserPartsHouses(userId));
    }, [dispatch]);




    return (
        <div id="user-main-page">

            <div id="record-navbar">
                <NavLink to={`/users/${userId}/parts-house/${partsHouseId}/appliances`} activeClassName='active'>
                    Appliances
                </NavLink>
                <NavLink to={`/users/${userId}/parts-house/${partsHouseId}/electronics`}>Electronics</NavLink>
                <NavLink to={`/users/${userId}/parts-house/${partsHouseId}/other`}>Other</NavLink>
            </div>

            <div id="display-box">
                <p>This is the default partshouse Record page</p>
            </div>

            <div id="mascot">
                <img src="https://i.ibb.co/Sx3THPm/vector-creator-1500-1by1.png" alt="vector-creator-1500-1by1" border="0" height="100px" />
            </div>
        </div>
    );
};

export default ApplianceList;