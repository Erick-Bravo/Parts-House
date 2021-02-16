import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";


const Part = ({part}) => {
    return (
        <div>
            <p>THIS IS HITTING</p>
            <h1>{part.name}</h1>
        </div>
    );
};



const PartPage = () => {

    const { partsId } = useParams();
    const numpartsId = parseInt(partsId)

    const parts = useSelector(state => state.record.Parts);
    const selectedPart = parts.filter(part => part.id === numpartsId)

    const [part, setPart] = useState([]);
    console.log(selectedPart)

    // useEffect(() => {

    //     console.log(selectedPart)
    //     if (selectedPart) {

    //         setPart(selectedPart)
    //     }
    // }, [part, parts, partsId, numpartsId]);


    


    return (
        <div id="user-main-page">
            
            <div id="display-box">
                {selectedPart && <Part part={selectedPart}/>}
            </div>

            <div id="mascot">
                <img src="https://i.ibb.co/Sx3THPm/vector-creator-1500-1by1.png" alt="vector-creator-1500-1by1" border="0" height="100px"/>
            </div>
            
        </div>
    );
};

export default PartPage;