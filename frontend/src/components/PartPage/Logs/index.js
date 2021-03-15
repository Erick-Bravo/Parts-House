import React from "react";
import { useHistory } from "react-router-dom"


const Logs = () => {
    
    const history = useHistory()

    // const handleNewLog = () => {
        
    // }

    return (
        <>
            <h3>Last Log</h3>
            <p>Feb 17th 2021</p>
            <p>Note: lorem ipsum</p>
            <button className="small-buttons">See all logs</button>
            <button className="small-buttons" >Add new log</button>
        </>
    );
};

export default Logs