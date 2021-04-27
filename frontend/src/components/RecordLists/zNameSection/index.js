import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { deletePartsHouse } from "../../../store/partshouse";
import "./index.css";





const NameSection = ({ph}) => {

    const dispatch = useDispatch();
    const history = useHistory();
    

    const userId = useSelector(state => state.session.user.id);

    const { partsHouseId } = useParams();

    const updatePartsHousePage = () => {
        history.push(`/parts-house/${partsHouseId}/update-page`)
    };

    return (
        <div id="name-section">
            <h1>{ph.name}</h1>
            <p>Edit this parts house</p>
            <button className="small-buttons" onClick={updatePartsHousePage}>Edit</button>
        </div>
    );
};

export default NameSection //imported in - ApplianceList / ElectronicList / OtherList