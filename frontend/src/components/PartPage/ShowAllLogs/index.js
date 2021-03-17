import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./index.css"



const ShowAllLogs = ({ setHidden }) => {

    const logs = useSelector(state => state.logs)
    console.log(logs)
    const handleHidden = (e) => {
        e.preventDefault();
        setHidden(true)
    };

    return (
        <>
            <div id="all-logs">
                <div id="all-top">
                    <button onClick={handleHidden}>Hide Logs</button>
                </div>
                <div id="logs-section">
                    <p>this is the showallLogs component</p>
                </div>
            </div>
        </>
    );
};

export default ShowAllLogs