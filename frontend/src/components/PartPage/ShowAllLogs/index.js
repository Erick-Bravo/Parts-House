import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteLog } from "../../../store/logs"
import { format } from "date-fns";
import "./index.css";

const Log = ({ log, deleteb }) => {
    
    const dispatch = useDispatch();

    const handleDelete = (e) => {
        e.preventDefault();
        dispatch(deleteLog(log.id));
    };

    return (
        <>
            <div id="single-log" key={log.id}>
                <p className="plr">{format(new Date(log.date), "PP")}</p>
                <p className="note mr">{`${log.note}`}</p>
                {!deleteb && <button className="small-buttons mr" onClick={handleDelete}>delete</button>}
            </div>
        </>
    );
};

const ShowAllLogs = () => {

    
    const logs = useSelector(state => state.logs);
    const reversedLogs = [];
    
    if (logs) {
        logs.map(log => reversedLogs.unshift(log))
    };
    
    const [deleteButtons, setDeleteButtons] = useState(true)

    const setHiddenF = (e) => {
        e.preventDefault();
        setDeleteButtons(false);
    };
    
    const setHiddenT = (e) => {
        e.preventDefault();
        setDeleteButtons(true);
    };

    return (
        <>
            <div id="all-logs">
                <div id="all-top">
                    {deleteButtons && <button onClick={setHiddenF} className="small-buttons pads" >Edit</button>}
                    {!deleteButtons && <button onClick={setHiddenT} className="small-buttons pads" >hide Edit</button>}
                </div>
                <div id="logs-section">
                    {reversedLogs && reversedLogs.map(log => {
                        return <Log log={log} deleteb={deleteButtons}/>
                    })}
                </div>
            </div>
        </>
    );
};

export default ShowAllLogs