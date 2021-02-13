import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { fetchUserRecord } from "../../store/records"

import "./index.css"



const Part = ({part}) => {

    const [ buyHidden, setBuyHidden ] = useState(true)
    const [ addHidden, setAddHidden ] = useState(true)


    useEffect(() => {
        if(part.buyUrl === "url here") {
            setAddHidden(false)
        } else {
            setBuyHidden(false)
        }
    }, [part.buyUrl])

    return (
        <div id="record-card-container">
            <div id="left">
                <div id="name">{part.name}</div>
                <div id="make">{part.make}</div>
            </div>
            <div id="right">
                <p>Model --- {part.model}</p>
                <p>Serial --- {part.serial}</p>
                <button hidden={addHidden}>Add Buy Url</button>
                <button hidden={buyHidden}>Buy</button>
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
                    <p>Initial Purchase Cost - ${record.cost}</p>
                    
                </div>
                <h2>Parts</h2>
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