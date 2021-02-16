import React from "react";

import "./index.css";


const RecordCard = ({ record }) => {


    
    return (
        <div id="record-card-container">
            <div id="left">
                <div id="name">{record.name}</div>
                <div id="make">{record.make}</div>
            </div>
            <div id="right">
                <div>Model --- {record.model}</div>
                <div>Serial --- {record.serial}</div>  
            </div>
        </div>
    );
};


export default RecordCard;