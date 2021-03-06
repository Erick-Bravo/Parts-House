import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { deletePart } from "../../store/parts";
import ShowAllLogs from "../PartPage/ShowAllLogs";
import TopNavBar from "../UserMainPage/TopNavBar";
import Logs from "./Logs";

import "./index.css";



const PartPage = () => {

    const dispatch = useDispatch();
    const history = useHistory()

    const { partId } = useParams();
    const numpartId = parseInt(partId);

    const parts = useSelector(state => state.parts)

    const [hidden, setHidden] = useState(true);
    const [part, setPart] = useState([]);
    

    useEffect(() => {

        if (parts.length === 0) {
            return
        };
        if (parts) {
            const part = parts.find(part => part.id === numpartId)
            setPart(part)
        }
    }, [part, numpartId, parts])


    const goToBuyUrl = () => {
        // window.location.href = part.buyUrl; -- leaving this here to show the more simpler, but unprotected version
        const newWindow = window.open(part.buyUrl, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    };

    const deleteHandler = (e) => {
        e.preventDefault();
        dispatch(deletePart(numpartId));
        history.go(-1)
    };

    return (
        <div id="user-main-page">

            <TopNavBar />

            <div id="part-container">

                <div id="top">
                    <div className="left">
                        <h1>{part.name}</h1>
                        <h2>{part.make}</h2>
                        {part.imgUrl && <img alt="none" src={part.imgUrl} />}
                        {part.model && <p>Model - {part.model}</p>}
                        {part.serial && <p>Serial - {part.serial}</p>}
                        {part.cost && <p>Initial Purchase Cost - ${part.cost}</p>}
                        {part.description && <p>Description: {part.description}</p>}
                    </div>

                    <div className="right">
                        <Logs setHidden={setHidden} />
                    </div>
                </div>

                <div hidden={hidden}>
                    <ShowAllLogs />
                </div>
                {!part.buyUrl && <button className="add-url-button">Add a purchase url</button>}
                {part.buyUrl && <button className="purchase-button" onClick={goToBuyUrl}>Go to purchase website</button>}
                

            </div>

            <div id="delete-record">
                <p>Delete this Part and all its info</p>
                <button className="small-buttons" onClick={deleteHandler}>delete</button>
            </div>
        </div>
    );
};

export default PartPage;