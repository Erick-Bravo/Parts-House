import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import "./index.css";


const RecMessage = () => {
    return (
        <>
            <div id="display-box">
                <p>Welcome! Having a good day?</p>
                <p>- The Left Navbar 'houses' the different locations a user gets to store</p>
                <p>- Each location has their own assets and parts associated with those assets</p>
                <p>- Feel free to poke around!</p>
            </div>

            <div id="mascot">
                <p>{`Old goofy logo that only you get to see  =====>`}</p>
                <img src="https://i.ibb.co/Sx3THPm/vector-creator-1500-1by1.png" alt="vector-creator-1500-1by1" border="0" height="100px" />
            </div>
        </>
    )
}



const EmptyDisplayPage = () => {

    const [recruiter, setRecruiter] = useState(false);

    const session = useSelector(state => state.session)
 

    useEffect(() => {

        if(session.user.username === "User-Demo") {
            setRecruiter(true)
        }
    }, [])

    return (
        <div id="user-main-page">

            {!recruiter && <img src={process.env.PUBLIC_URL + "/Logo.png"} alt="logo" height="150px" />}
            {recruiter && <RecMessage /> }

        </div>
    );
};

export default EmptyDisplayPage;