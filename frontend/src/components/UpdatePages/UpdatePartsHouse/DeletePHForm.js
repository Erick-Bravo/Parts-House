import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { deletePartsHouse } from "../../../store/partshouse";

const DeletePHForm = ({id}) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [hasRecords, setHasRecords] = useState(true);
    const [noRecords, setNoRecords] = useState(true);

    //Finding the partshouse in Redux --- might not even need this. 
    //we already have the id, compare to see if records exist
    //
    const partsHouses = useSelector(state => state.partsHouses)
    const partsHouse = partsHouses.find(ph => ph.id === id)
    // console.log(partsHouse)

    const records = useSelector(state => state.record);
    console.log(records)

    useEffect(() => {
        if(records.length === 0) {
            setNoRecords(false)
            console.log("Set noRecords Hits")
        } else {
            setHasRecords(false)
            console.log("Set hasRecords Hits")
        }
    }, [records])

    // Delete PartsHouse then go back 2
    const deletePH = (e) => {
        e.preventDefault(); 
        dispatch(deletePartsHouse(id))
        history.push("/")
    };

    return (
        <div id="delete-modal-container">
            <p hidden={hasRecords}>To delete this parts house, records must be deleted first</p>
            <p hidden={noRecords}>Are you sure you want to delete this parts house along with all info associated?</p>
            <p hidden={noRecords}>This action cannot be undone</p>

            <button className="form-button" onClick={deletePH} hidden={noRecords}>Delete</button>
            <button className="form-button-disabled" hidden={hasRecords}>Delete</button>
        </div>
    )
}

export default DeletePHForm