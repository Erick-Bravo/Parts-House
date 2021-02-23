import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { deletePart } from "../../store/parts"

import "./index.css";




const PartPage = () => {

    const dispatch = useDispatch();
    const history = useHistory()

    const { partId } = useParams();
    const numpartId = parseInt(partId);

    const parts = useSelector(state => state.parts)
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

    console.log(part.buyUrl)

    const goToBuyUrl = () => {
        window.location.href = part.buyUrl;
    };

    const deleteHandler = (e) => {
        e.preventDefault();
        dispatch(deletePart(numpartId));
        // history.push("/");
        history.go(-1)
    };

    return (
        <div id="user-main-page">

                <div id="part-container">
                    <h1>{part.name}</h1>
                    <h2>{part.make}</h2>
                    {part.imgUrl && <img alt="none" src={part.imgUrl}/>}
                    {part.model && <p>Model - {part.model}</p>}
                    {part.serial && <p>Serial - {part.serial}</p>}
                    {part.cost && <p>Initial Purchase Cost - ${part.cost}</p>}
                    {part.description && <p>Description: {part.description}</p>}
                    
                    {!part.buyUrl && <button>Add Buy Url</button>}
                    {part.buyUrl && <button onClick={goToBuyUrl}>Go to purchase website</button>}
                </div>
                <div id="delete-record">
                    <p>Delete this Part and all its info</p>
                    <button onClick={deleteHandler}>delete</button>
                </div>

        </div>
    );
};

export default PartPage;