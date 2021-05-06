import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { Modal } from "../../../context/Modal";
import DeleteRecordModal from "./DeleteRecordModal";

const DeleteRecordSection = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const { recordId } = useParams();

    const numRecordId = parseInt(recordId);

    const [showModal, setShowModal] = useState(false);

    //for delete button hidden feature
    const [hasParts, setHasParts] = useState(true);
    const [noParts, setNoParts] = useState(true);

    const parts = useSelector(state => state.parts)

    useEffect(() => {
        if(parts.length === 0) {
            setNoParts(false);
            console.log("This hits!!! setNoParts")
        } else {
            console.log("This hits!!! setHasParts")
            setHasParts(false);
        }
    })

    return (
        <>

            <p hidden={hasParts}>To delete this record you must first delete all parts associated</p>
            <p hidden={noParts}>Delete this Record with all associated parts</p>
            <button className="form-button-disabled mB" hidden={hasParts}>Delete</button>
            <button className="delete-button mB" onClick={() => setShowModal(true)} hidden={noParts}>Delete</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <DeleteRecordModal id={numRecordId} />
                </Modal>
            )}
        </>
    )
};

export default DeleteRecordSection