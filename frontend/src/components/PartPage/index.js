import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";


const Part = () => {
    return (
        <div>
            <p>THIS IS HITTING</p>
            <h1></h1>
        </div>
    );
};



const PartPage = () => {

    const disptch = useDispatch();

    const { partId } = useParams();
    const numpartId = parseInt(partId);


    // useEffect(() => {

    // })
    


    return (
        <div id="user-main-page">
            
            <div id="display-box">
                
            </div>

            <div id="mascot">
                <img src="https://i.ibb.co/Sx3THPm/vector-creator-1500-1by1.png" alt="vector-creator-1500-1by1" border="0" height="100px"/>
            </div>
            
        </div>
    );
};

export default PartPage;