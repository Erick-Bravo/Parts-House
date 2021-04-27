import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { Modal } from "../../../context/Modal";

import TopNavBar from "../../UserMainPage/TopNavBar";
import DeletePHForm from "./DeletePHForm";

import "./index.css"

const UpdatePartsHouse = () => {

    const { partsHouseId } = useParams();
    const numPHId = parseInt(partsHouseId)

    const partsHouses = useSelector(state => state.partsHouses)
    const ph = partsHouses.find(ph => ph.id === numPHId)

    const [name, setName] = useState(ph.name)
    const [showModal, setShowModal] = useState(false);

    const updatePH = (e) => {
        e.preventDefault();
    };


    return (

        <div id="user-main-page">

            <TopNavBar />

            <div id="name-section">
                <h1>{ph.name}</h1>
            </div>

            <form id="new-record-form" onSubmit={updatePH}>

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