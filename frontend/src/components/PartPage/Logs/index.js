import React, { useEffect } from "react";
import LogsFormModal from "../LogsFormModal"
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllLogs } from "../../../store/logs";


const Logs = () => {
    
    const dispatch = useDispatch();
    const { partId } = useParams();
    const numPartId = parseInt(partId);

    useEffect(() => {
        dispatch(fetchAllLogs(numPartId))
    }, [dispatch])

    const logs = useSelector(state => state.logs)
    console.log(logs)


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