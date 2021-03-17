import React, { useEffect, useState } from "react";
import LogsFormModal from "../LogsFormModal"
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllLogs } from "../../../store/logs";
import { format } from "date-fns"


const Logs = () => {
    
    const dispatch = useDispatch();
    const { partId } = useParams();
    const numPartId = parseInt(partId);

    const [Log, setLog] = useState("")

    useEffect(() => {
        dispatch(fetchAllLogs(numPartId))
    }, [dispatch, numPartId])

    const logs = useSelector(state => state.logs)
    const lastLog = logs[logs.length - 1]
    console.log(lastLog)
    
    useEffect(() => {
        if(logs.length === 0) {
            return
        } else {
            const lastLog = logs[logs.length - 1]
            setLog(lastLog)
            console.log(`INSIDE USEEFFECT: ${lastLog}`)
        }
    }, [numPartId, logs, lastLog]);

 /* {lastLog && <p>{format(lastLog.date, "PPP")}</p>} */
    return (
        <>
            <h2>Last Log</h2>
            {Log && <p>{format(Log.date, "PP")}</p>}
            <p>Note: {Log.note ? Log.note : "none"}</p>
            <LogsFormModal />
        </>
    );
};

export default Logs