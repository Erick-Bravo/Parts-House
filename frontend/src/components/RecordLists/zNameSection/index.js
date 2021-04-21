import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { deletePartsHouse } from "../../../store/partshouse";
import "./index.css";





const NameSection = ({ph}) => {

    const dispatch = useDispatch();
    const history = useHistory();
    const userId = useSelector(state => state.session.user.id);
    
    
    const deleteHandler = () => {
        dispatch(deletePartsHouse(ph.id))
        history.push(`/users/${userId}`)
    };

    return (
        <div id="name-section">
            <h1>{ph.name}</h1>
            <p>Delete this parts house</p>
            <button className="small-buttons" onClick={deleteHandler}>delete</button>
        </div>
    );
};

export default NameSection //imported in - ApplianceList / ElectronicList / OtherList