import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Modal } from "../../../context/Modal";
import DeleteRecordModal from "./DeleteRecordModal";
import { deletePart } from "../../../store/parts";

const DeletePartCard = ({ part }) => {
    const dispatch = useDispatch();

    const deleteSubmit = (e) => {
        e.preventDefault();
        dispatch(deletePart(part.id))
    };

    return (
        <div id="delete-part-cards">
            <p>{part.name}</p>
            <button onClick={deleteSubmit}>Delete</button>
        </div>
    )
};

const DeleteRecordSection = () => {

    const { recordId } = useParams();

    const numRecordId = parseInt(recordId);

    const [showModal, setShowModal] = useState(false);

    const [hasParts, setHasParts] = useState(true);
    const [noParts, setNoParts] = useState(true);

    const parts = useSelector(state => state.parts)

    useEffect(() => {
        if (parts.length === 0) {
            setNoParts(false);
            setHasParts(true);
        } else {
            setNoParts(true);
            setHasParts(false);
        };
    }, [parts]);

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

            <div>
                {parts && parts.map(part => {
                    return <DeletePartCard part={part} />
                })}
            </div>

        </>
    )
};

export default DeleteRecordSection