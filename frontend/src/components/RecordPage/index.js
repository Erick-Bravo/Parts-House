import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { fetchUserRecord } from "../../store/records"

import "./index.css"

const RecordPage = () => {

    const dispatch = useDispatch()
    const { recordId } = useParams()
    const numRecordId = parseInt(recordId)



    useEffect(() => {
        dispatch(fetchUserRecord(numRecordId))
    }, [dispatch, numRecordId])

    const record = useSelector(state => state)

    // console.log(record)

    return (
        <div id="user-main-page">
            
            <div id="display-box">
                <p>This is the Record Page</p>
            </div>

            <div id="mascot">
                <img src="https://i.ibb.co/Sx3THPm/vector-creator-1500-1by1.png" alt="vector-creator-1500-1by1" border="0" height="100px"/>
            </div>
            
        </div>
    );
}

export default RecordPage