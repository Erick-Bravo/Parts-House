import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import "./index.css";





const NameSection = ({ph}) => {

    const history = useHistory();

    const { partsHouseId } = useParams();

    const updatePartsHousePage = () => {
        history.push(`/parts-house/${partsHouseId}/update-page`)
    };

    return (
        <div id="name-section">
            <h1>{ph.name}</h1>
           
            <button className="small-buttons" onClick={updatePartsHousePage}>Edit</button>
        </div>
    );
};

export default NameSection //imported in - ApplianceList / ElectronicList / OtherList