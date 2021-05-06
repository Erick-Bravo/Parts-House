import React, { useState } from "react";
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
    const [noPars, setNoParts] = useState(true);

    return (
        <>
            <DeleteRecordModal />
            <p>Delete this Record with all associated parts</p>
            <p>To Delete this record you must first delete all parts associated</p>
            <button onClick={() => setShowModal(true)} className="delete-button mB">Delete</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <DeleteRecordModal id={numRecordId} />
                </Modal>
            )}
        </>
    )
};

export default DeleteRecordSection