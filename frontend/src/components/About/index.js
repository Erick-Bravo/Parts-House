import React from "react";
import { useHistory } from "react-router-dom"

import "./index.css";


const About = () => {

    const history = useHistory();

    const goBack = (e) => {
        history.go(-1);
    };

    return (
        <div id="about-page">

            <div id="left">
                <img src="https://i.ibb.co/sssb3nf/penguin.png" alt="penguin" border="0" height="700px" />
            </div>

            <div id="right">
                <h2>About</h2>
                <ul>
                    <li>Parts House is your very own customizable parts tracker.</li>
                    <li>You can record valuable model/serial info from home or office appliances and/or electronics.</li>
                    <li>You can even record where to re-purchase these items when you need them most.</li>
                    <li>Parts House is your very own customizable parts-house!</li>
                </ul>
                <button onClick={goBack}>Back</button>
            </div>

        </div>
    );
};

export default About;