import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { NavLink, useHistory, useParams } from "react-router-dom";

import { deleteRecord } from "../../store/records";

import "./index.css";



const Part = ({ part }) => {

    // const [buyHidden, setBuyHidden] = useState(true);
    // const [addHidden, setAddHidden] = useState(true);


    // useEffect(() => {
    //     if (part.buyUrl === "url here") {
    //         setAddHidden(false);
    //     } else {
    //         setBuyHidden(false);
    //     };
    // }, [part.buyUrl]);

    //     <div id="left">
    //     <div id="name">{part.name}</div>
    //     <div id="make">{part.make}</div>
    // </div>
    // <div id="right">
    //     <p>Model --- {part.model}</p>
    //     <p>Serial --- {part.serial}</p>
    //     <button hidden={addHidden}>Add Buy Url</button>
    //     <button hidden={buyHidden}>Buy</button>
    // </div>

    return (
        <div id="record-card-container">

        </div>
    );
};




const RecordPage = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const { recordId } = useParams();
    const numRecordId = parseInt(recordId);

    const records = useSelector(state => state.record);
    
    const array = records.filter(rec => rec.id === numRecordId);
    const record = array[0]
    

    // useEffect(() => {
    //     if (record.length === 0) {
    //         return
    //     }
    //     const p = record.Parts
    //     setParts(p)
    // }, [record, recordId, parts]);

    useEffect(() => {
        if (record.length === 0) {
            return
        }
        const p = record
        // setParts(p)
    }, [record, recordId]);

    const deleteHandler = (e) => {
        e.preventDefault();
        dispatch(deleteRecord(recordId));
        history.go(-1);
    };

    // {
    //     parts.map(part => {
    //         return <NavLink to={`/records/${recordId}/parts/${part.id}`} key={part.id}>
    //             <Part part={part} />
    //         </NavLink>
    //     })
    // }


    // <div id="display-box">

    // <div>
    //     <h2>Parts</h2>
    //     {parts.map(part => {
    //         return <NavLink to={`/parts/${part.id}`} key={part.id}>
    //             <Part part={part} />
    //         </NavLink>
    //     })}
    // </div>

    return (
        <div id="user-main-page">

            <div>
                <h1>Record</h1>
            </div>

            <div id="display-box">
                {record && 
                <div id="record-container">
                    <div id="record-name">{record.name}</div>
                    <div id="record-make">{record.make}</div>
                    <h2>Info</h2>
                    <p>Model - {record.model}</p>
                    <p>Serial - {record.serial}</p>
                    <p>Initial Purchase Cost - ${record.cost}</p>
                </div>}


                <div id="delete-record">
                    <p>Delete this Record</p>
                    <button onClick={deleteHandler}>delete</button>
                </div>

            </div>


            <div id="mascot">
                <img src="https://i.ibb.co/Sx3THPm/vector-creator-1500-1by1.png" alt="vector-creator-1500-1by1" border="0" height="100px" />
            </div>

        </div>
    );
};

export default RecordPage;