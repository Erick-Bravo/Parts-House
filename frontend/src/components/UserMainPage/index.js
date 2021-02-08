import React, { useState, useEffect }from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route, NavLink } from "react-router-dom";
import LeftNavBar from "./LeftNavBar"
import { fetchUserPartsHouses } from "../../store/partshouse"
import "./index.css";


// on Add Parts House should probably be a hidden form
//need to use useState and controll a "hidden" attribute
//user <NavLink to={`/users/${userId}/partshouses/create`}>add</NavLink>



const UserMainPage = () => {

    const dispatch = useDispatch();

    
    
    
    useEffect(() => {
        dispatch(fetchUserPartsHouses(userId));
    }, [dispatch]);
    
    const userPartsHouses = useSelector(state => state.partsHouses)
    const sessionUser = useSelector((state) => state.session.user);

    if(!sessionUser) return <Redirect to={"/"} />;
    
    const userId = sessionUser.id;

    return (
        <div id="user-main-page">
            
            <LeftNavBar userId={userId} userPartsHouses={userPartsHouses}/>
            <div id="display-box">
                <Route path="/users/:userId/parts-house/:partsHouseId/records">
                    
                </Route>
            </div>
            <div id="mascot">
                <img src="https://i.ibb.co/Sx3THPm/vector-creator-1500-1by1.png" alt="vector-creator-1500-1by1" border="0" height="100px"/>
            </div>
        </div>
    );
};

export default UserMainPage;