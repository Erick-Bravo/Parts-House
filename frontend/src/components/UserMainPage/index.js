import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom"
// import LeftNavBar from "./LeftNavBar"
import "./index.css"


// on Add Parts House should probably be a hidden form
//need to use useState and controll a "hidden" attribute
//user <NavLink to={`/users/${userId}/partshouses/create`}>add</NavLink>




const LeftNavBar = ({userId}) => {

    return (
        <div id="left-nav-bar">
            <div className="top-section-navbar">
                <button>add parts house +</button>
            </div>
            <div className="bottom-section-navbar">
                <button>Logout</button>
                <div className="empty-space-leftNav"></div>
            </div>

        </div>
    )
}



const UserMainPage = () => {

    const sessionUser = useSelector((state) => state.session.user);

    const userId = sessionUser.id

    return (
        <div id="user-main-page">
            <LeftNavBar userId={userId}/>
            <div id="mascot">
                <img src="https://i.ibb.co/Sx3THPm/vector-creator-1500-1by1.png" alt="vector-creator-1500-1by1" border="0" height="100px"/>
            </div>
        </div>
    )
}

export default UserMainPage