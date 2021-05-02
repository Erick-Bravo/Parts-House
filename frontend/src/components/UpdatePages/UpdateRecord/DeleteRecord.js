import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

const DeleteRecordForm = ({id}) => {
    const dispatch = useDispatch();
    const history = useHistory();

    return (
        <div id="delete-modal-container">
            <p>Are you sure you want to delete this record with all associated parts?</p>
            <button className="delete-button mB">Delete</button>
        </div>
    )
};

export default DeleteRecordForm