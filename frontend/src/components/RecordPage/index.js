import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { NavLink, useHistory, useParams } from "react-router-dom";
import { fetchAllRecParts } from "../../store/parts";
import { deleteRecord } from "../../store/records";

import "./index.css";



const PartCard = ({ part }) => {

    const [buyHidden, setBuyHidden] = useState(true);
    const [addHidden, setAddHidden] = useState(true);


    useEffect(() => {
        if (part.buyUrl === "") {
            setAddHidden(false);
        } else {
            setBuyHidden(false);
        };
    }, [part.buyUrl]);


    return (
        <div id="record-card-container">

            <div id="left">
                <div id="name">{part.name}</div>
                <div id="make">{part.make}</div>
            </div>
            <div id="right">
                {part.model && <p>Model --- {part.model}</p>}
                {part.serial && <p>Serial --- {part.serial}</p>}
                <button hidden={addHidden}>Add Buy Url</button>
                <button hidden={buyHidden}>Buy</button>
            </div>
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
  
    const parts = useSelector(state => state.parts)

    useEffect(() => {
        dispatch(fetchAllRecParts(numRecordId));
    }, [dispatch, numRecordId]);




    const deleteHandler = (e) => {
        dispatch(deleteRecord(recordId));
        history.go(-1);
    };


    return (
        <div id="user-main-page">

            <div id="display-box">
                {record &&
                    <div id="record-container">
                        <div id="record-name">{record.name}</div>
                        <div id="record-make">{record.make}</div>
                        {record.imgUrl && <img alt="none" src={record.imgUrl}/>}
                        <div id="delete-record">
                            <p>Delete this entire Record</p>
                            <button onClick={deleteHandler}>delete</button>
                        </div>
                        <h2>Info</h2>
                        {record.model && <p>Model - {record.model}</p>}
                        {record.serial && <p>Serial - {record.serial}</p>}
                        {record.cost && <p>Initial Purchase Cost - ${record.cost}</p>}
                        
                    </div>}



                <div>
                    <div>
                        <h2>Parts</h2>
                        <div>
                            <NavLink to={`/records/${recordId}/parts/add-part-page`}>
                                <button>Add Part</button>
                            </NavLink>
                        </div>
                    </div>
                    {!parts && <p>loading..</p>}
                    {parts && parts.map(part => {
                        return <NavLink to={`/parts/${part.id}`} key={part.id}>
                            <PartCard part={part} />
                        </NavLink>
                    })}
                </div>

            </div>


            <div id="mascot">
                <img src="https://i.ibb.co/Sx3THPm/vector-creator-1500-1by1.png" alt="vector-creator-1500-1by1" border="0" height="100px" />
            </div>

        </div>
    );
};

export default RecordPage;