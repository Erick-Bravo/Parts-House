import React from "react";
import LogsFormModal from "../LogsFormModal"
import { useHistory } from "react-router-dom";


const Logs = () => {
    
    const history = useHistory();



    return (
        <>
            <h2>Last Log</h2>
            <p>Feb 17th 2021</p>
            <p>Note: lorem ipsum</p>
            <LogsFormModal />
        </>
    );
};

export default Logs