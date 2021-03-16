import React from "react";
import LogsFormModal from "../LogsFormModal"
import { useHistory } from "react-router-dom";


const Logs = () => {
    
    const history = useHistory();

    const handleNewLog = () => {
        
    };

    return (
        <>
            <h2>Last Log</h2>
            <p>Feb 17th 2021</p>
            <p>Note: lorem ipsum</p>
            <LogsFormModal />
            <button className="small-buttons" onClick={handleNewLog}>Add new log</button>
        </>
    );
};

export default Logs