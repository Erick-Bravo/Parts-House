import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Footer from "../zFooter"

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

    //This is for the Recruiter. Have not figured out how to make this work once in App.js
    const [recruiter, setRecruiter] = useState(false);

    const sessionUser = useSelector(state => state.session.user)

    useEffect(() => {
        if (sessionUser.username === "User-Demo") {
            setRecruiter(true)
        }
    }, [])

    //End Recruiter code

    return (
        <div id="recruiter-container">

            {!recruiter && <img src={process.env.PUBLIC_URL + "/Logo.png"} alt="logo" height="150px" />}
            {recruiter && <RecMessage />}
            {recruiter && <Footer />}

        </div>
    );

    
};

export default EmptyDisplayPage;