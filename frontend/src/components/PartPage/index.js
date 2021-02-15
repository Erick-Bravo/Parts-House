import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";





const PartPage = () => {

    const { partsId } = useParams();

    const part = useSelector(state => state.record.Parts);
    console.log(part);


    return (
        <div id="user-main-page">
            
            <div id="display-box">
                <p>this is the Part page</p>
            </div>

            <div id="mascot">
                <img src="https://i.ibb.co/Sx3THPm/vector-creator-1500-1by1.png" alt="vector-creator-1500-1by1" border="0" height="100px"/>
            </div>
            
        </div>
    );
};

export default PartPage;