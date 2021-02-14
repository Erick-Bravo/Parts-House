import React from "react";
import { NavLink } from "react-router-dom";



const AddRecord = ({partsHouseId}) => {

    return (
        <div id="add-record">
            <NavLink to={`/parts-house/${partsHouseId}/records/add-record-page`}>
                <button>Add Record</button>
            </NavLink>
        </div>
    );
};

export default AddRecord