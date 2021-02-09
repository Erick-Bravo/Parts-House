import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import "./index.css"

const RecordPage = () => {

    const dispatch = useDispatch()

    return (
        <div id="user-main-page">
            
            <div id="display-box">
                <p>This is the Record Page</p>
            </div>

            <div id="mascot">
                <img src="https://i.ibb.co/Sx3THPm/vector-creator-1500-1by1.png" alt="vector-creator-1500-1by1" border="0" height="100px"/>
            </div>
            
        </div>
    );
}

export default RecordPage