import React from "react";
import * as sessionActions from "../../../store/session";
import { useDispatch } from "react-redux";
import "./index.css";

const DemoQuestion = () => {

    const dispatch = useDispatch();

    const credential = "user@demo.com";
    const password = "password";

    const demoLoginHandle = (e) => {
        e.preventDefault();
        return dispatch(sessionActions.login({ credential, password }))
    };

    return (
        <div id="login-form-container">
            <h2>Are you a Recruiter?</h2>
            <h4>If you are not a recruiter, please sign up or login to use Partshouse</h4>
            <div>
                <button onClick={demoLoginHandle}>I am a Recruiter</button>
            </div>
        </div>
    )
};

export default DemoQuestion