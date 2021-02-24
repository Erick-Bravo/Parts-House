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
                    <img src="https://i.ibb.co/sssb3nf/penguin.png" alt="penguin" border="0" height="700px" />
                </div>

                <div id="right">
                    <h2>About</h2>
                    <ul>
                        <li>Parts House is your very own customizable parts tracker.</li>
                        <li>Record valuable model/serial info from home or office appliances and/or electronics.</li>
                        <li>You can even record where to re-purchase these items, or parts for these items when you need them most.</li>
                        <li>For example, save a record for your tv remote and save the type of batteries along with the link of where to re-purchase them.</li>
                        <li>Parts House is your very own customizable parts-house!</li>
                        <li>Tech used: Node.js, Express, PostgreSQL, JavaScript, React, Redux </li>
                    </ul>
                    <button onClick={goBack}>Back</button>
                </div>
            </div>
            
            <Footer />
        </>

    );
};

export default About;