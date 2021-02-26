import React from "react";

import "./index.css"





const Footer = () => {


    const linkedIn = () => {
        window.location.href = 'https://www.linkedin.com/in/erick-bravo-448234203/';
    };

    const gitHub = () => {
        window.location.href = 'https://github.com/Erick-Bravo';
    };

    const angelList = () => {
        window.location.href = 'https://www.linkedin.com/in/erick-bravo-448234203/';
    };

    

    return (
        <div id="footer">

            <button onClick={linkedIn}>
            <img src="https://i.ibb.co/BGjKkyC/linkedin-icon-18-128.png" alt="linkedin-icon-18-128" border="0" height="75px"/>
            </button>

            <button onClick={gitHub}>
                <img alt="none" src="https://www.sferalabs.cc/wp-content/uploads/github-logo-white-300x199.png" height="80px" />
            </button>

            <button onClick={angelList}>
                <img alt="none" src="https://angel.co/assets/shared/peace/white_large-7f08f00fe68dacf8c1900f162d5e426a21ddd42f807d857a461b792562f040ff.png" height="80px" background-color="white" />
            </button>

        </div>
    )
}

export default Footer