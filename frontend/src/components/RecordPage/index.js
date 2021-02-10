import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { fetchUserRecord } from "../../store/records"

import "./index.css"



const Part = ({part}) => {

    return (
        <div id="parts-container">
            <h2>Parts</h2>
            <div id="left">
                <div id="name">{part.name}</div>
                <div id="make">{part.make}</div>
            </div>
            <div id="right">
                <div>Model --- {part.model}</div>
                <div>Serial --- {part.serial}</div>
            </div>
        </div>
    )
}



const RecordPage = () => {

    const dispatch = useDispatch()
    const { recordId } = useParams()
    const numRecordId = parseInt(recordId)

    const [ parts, setParts ] = useState([])

    useEffect(() => {
        dispatch(fetchUserRecord(numRecordId))
    }, [dispatch, numRecordId])

    const record = useSelector(state => state.record)

    useEffect(() => {
        if (record.length === 0) {
            return
        }
        const p = record.Parts
        setParts(p)
    }, [record, recordId]);


    return (
        <div id="user-main-page">

            <div id="display-box">
                <div id="record-container">
                    <div id="record-name">{record.name}</div>
                    <div id="record-make">{record.make}</div>
                    <h2>Info</h2>
                    <p>Model - {record.model}</p>
                    <p>Serial - {record.serial}</p>
                    <p>Cost - ${record.cost}</p>
                    
                </div>
                    {parts.map(part => {
                        return <Part part={part} key={part.id}/>
                    })}
            </div>

            <div id="mascot">
                <img src="https://i.ibb.co/Sx3THPm/vector-creator-1500-1by1.png" alt="vector-creator-1500-1by1" border="0" height="100px" />
            </div>

        </div>
    );
}

export default RecordPage