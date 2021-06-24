import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useHistory, useParams } from "react-router-dom";
import { fetchAllRecParts } from "../../store/parts";
import { format } from "date-fns";
import TopNavBar from "../UserMainPage/TopNavBar";

import "./index.css";

const PartCard = ({ part }) => {

    const [buyHidden, setBuyHidden] = useState(false);
    const [addHidden, setAddHidden] = useState(false);


    useEffect(() => {
        if (part.buyUrl === "") {
            setAddHidden(true);
        } else {
            setBuyHidden(true);
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

                <NavLink to="/records/8/update-record-page" className="add-buy-url">Add Buy Url</NavLink>
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
    }, [dispatch, numRecordId, records]);


    // const deleteHandler = (e) => {
    //     dispatch(deleteRecord(recordId));
    //     history.go(-1);
    // };



    const updatePageRedirect = (e) => {
        history.push(`/records/${numRecordId}/update-record-page`)
    };


    return (
        <>
            <TopNavBar />

            <div id="user-main-page">


                <div id="display-box">
                    {record &&
                        <div id="record-container">

                            <div id="top-section">
                                <div id="left">
                                    <div id="record-name">{record.name}</div>
                                    <div id="record-make">{record.make}</div>
                                    {record.imgUrl && <img alt="none" src={record.imgUrl} />}
                                </div>

                                <div id="right">
                                    <h2>Info</h2>
                                    {record.model && <p>Model - {record.model}</p>}
                                    {record.serial && <p>Serial - {record.serial}</p>}
                                    {record.cost && <p>Initial Purchase Cost - ${record.cost}</p>}
                                    {record.purchaseDate && <p>Date of Purchase: {format(new Date(record.purchaseDate), "PP")}</p>}

                                </div>
                            </div>

                            <div id="delete-record">
                                <p>Update or delete this record</p>
                                <button className="small-buttons" onClick={updatePageRedirect}>Update</button>
                            </div>

                        </div>}


                    <div>
                        <div>
                            <h2>Parts</h2>
                            <div>
                                <NavLink to={`/records/${recordId}/parts/add-part-page`}>
                                    <button className="small-buttons">Add Part</button>
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

                </div>

            </div>
        </>
    );
};

export default RecordPage;