import React, { useEffect, useState } from "react";
import LogsFormModal from "../LogsFormModal"
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllLogs } from "../../../store/logs";
import { format } from "date-fns"
import "./index.css"


const Logs = ({ setHidden }) => {

    const dispatch = useDispatch();
    const { partId } = useParams();
    const numPartId = parseInt(partId);

    const [Log, setLog] = useState("");
    const [hiddenButtons, setHiddenButtons] = useState(true);
    const [parseDate, setParseDate] = useState("");

    const date = Log.date;
    const note = Log.note;

    useEffect(() => {
        dispatch(fetchAllLogs(numPartId))
    }, [dispatch, numPartId]);

    const logs = useSelector(state => state.logs);
    const lastLog = logs[logs.length - 1];

    useEffect(() => {
        if (logs.length === 0) {
            return
        } else {
            const lastLog = logs[logs.length - 1];
            setLog(lastLog);
        };

        if (!date) {
            return
        } else {
            setParseDate(new Date(date))
        }
    }, [numPartId, logs, lastLog, date]);

    const setHiddenF = (e) => {
        e.preventDefault();
        setHidden(false);
        setHiddenButtons(false);
    };
    
    const setHiddenT = (e) => {
        e.preventDefault();
        setHidden(true);
        setHiddenButtons(true);
    };

    return (
        <>
            <div id="log-top">
                <h2>Last Log</h2>
                {parseDate && <p>{format(parseDate, "PPP")}</p>}
                <p>Note: {note ? note : "none"}</p>
            </div>
            <div id="log-utils">
                <LogsFormModal />
                {hiddenButtons && <button onClick={setHiddenF} className="small-buttons pads" >Show logs</button>}
                {!hiddenButtons && <button onClick={setHiddenT} className="small-buttons pads" >Hide Logs</button>}
            </div>
        </>
    );
};

export default Logs;