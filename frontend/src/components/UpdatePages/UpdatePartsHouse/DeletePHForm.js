import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { deletePartsHouse } from "../../../store/partshouse";

const DeletePHForm = ({id}) => {
    const dispatch = useDispatch();
    const history = useHistory();

    // Delete PartsHouse then go back 2
    const deletePH = (e) => {
        e.preventDefault(); 
        dispatch(deletePartsHouse(id))
        history.push("/")
    };

    return (
        <>
            <p>Are you sure you want to delete this parts house along with all info associated?</p>
            <p>This action cannot be undone</p>
            <button className="form-button" onClick={deletePH}>Delete</button>
        </>
    )
}

export default DeletePHForm