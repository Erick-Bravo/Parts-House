import React from "react";
import { NavLink } from "react-router-dom";



const AddRecord = () => {

    return (
        <div id="add-record">
            <NavLink to="/records/add-record-page">
                <button>Add Record</button>
            </NavLink>
        </div>
    );
};

export default AddRecord