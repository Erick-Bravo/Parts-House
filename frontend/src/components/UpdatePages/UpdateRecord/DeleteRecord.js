import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { deleteRecord } from "../../../store/records";

const DeleteRecordForm = ({id}) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const deleteHandler = (e) => {
        dispatch(deleteRecord(id));
        history.go(-2);
    };

    return (
        <div id="delete-modal-container">
            <p>Are you sure you want to delete this record with all associated parts?</p>
            <button onClick={deleteHandler} className="delete-button mB">Delete</button>
        </div>
    )
};

export default DeleteRecordForm