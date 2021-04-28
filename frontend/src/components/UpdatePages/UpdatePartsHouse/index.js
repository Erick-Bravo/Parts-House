import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Modal } from "../../../context/Modal";
import { updatePartsHouse } from "../../../store/partshouse";

import TopNavBar from "../../UserMainPage/TopNavBar";
import DeletePHForm from "./DeletePHForm";

import "./index.css"

const UpdatePartsHouse = () => {

    const dispatch = useDispatch();

    const { partsHouseId } = useParams();
    const numPHId = parseInt(partsHouseId)

    const partsHouses = useSelector(state => state.partsHouses)
    const ph = partsHouses.find(ph => ph.id === numPHId)

    const [name, setName] = useState(ph.name)
    const [showModal, setShowModal] = useState(false);


    const updatePHName = (e) => {
        e.preventDefault();

        dispatch(updatePartsHouse(name, numPHId));
    };


    return (

        <div id="user-main-page">

            <TopNavBar />

            <div id="name-section">
                <h1>{ph.name}</h1>
            </div>

            <form id="new-record-form" onSubmit={updatePHName}>

                <label>
                    Rename this parts house:
                <input type="text" name="name" value={name}
                        onChange={e => setName(e.target.value)} />
                </label>

                <div id="button-section">
                    <button className="form-button" type="submit">Update</button>
                </div>



                <label className="mt">
                    Delete this parts house with all info associated:
                </label>
                <div id="button-section">
                    <button className="form-button" onClick={() => setShowModal(true)}>Delete</button>
                    {showModal && (
                        <Modal onClose={() => setShowModal(false)}>
                            <DeletePHForm id={ph.id} />
                        </Modal>
                    )}
                </div>

            </form>
        </div>

    );
};

export default UpdatePartsHouse