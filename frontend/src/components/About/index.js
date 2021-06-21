import React from "react";
import { useHistory } from "react-router-dom"
import Footer from "../zFooter"

import "./index.css";


const About = () => {

    const history = useHistory();

    const goBack = (e) => {
        history.go(-1);
    };

    return (
        <>
            <div id="about-page">

                <div id="left">
                    <img src="tool.png" alt="penguin" border="0" />
                </div>

                <div id="message">
                    <h2>About</h2>
                    <ul>
                        <li>Parts House is your very own customizable parts tracker.</li>
                        <li>Record valuable model/serial info for home or office appliances and/or electronics.</li>
                        <br></br>
                        <li>What You Can Do :</li>
                        <li>-</li>
                        <br></br>
                        <li>- Record where to re-purchase parts/items when you need them most.</li>
                        <li>- Set notifications for reoccuring parts/items.</li>
                        <li>- Save dates and information you might need in the future like model and serial numbers.</li>
                    </ul>
                    <button onClick={goBack}>Back</button>
                </div>
            </div>
            
            <Footer />
        </>

    );
};

export default About;