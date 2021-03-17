import React, { useState } from "react";
import { useSelector } from "react-redux";
import { format } from "date-fns"
import "./index.css"



const ShowAllLogs = ({ setHidden }) => {

    const logs = useSelector(state => state.logs)


    const handleHidden = (e) => {
        e.preventDefault();
        setHidden(true)
    };

    return (
        <>
            <div id="all-logs">
                <div id="all-top">
                    <button onClick={handleHidden} className="small-buttons">Hide Logs</button>
                </div>
                <div id="logs-section">
                    {logs && logs.map(log => {
                        return <div id="single-log" key={log.id}>
                            <p className="plr">{format(new Date(log.date), "PP")}</p>
                            <p>{`Note: ${log.note}`}</p>
                        </div>
                    })}
                </div>
            </div>
        </>
    );
};

export default ShowAllLogs