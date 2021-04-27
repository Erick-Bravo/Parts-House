import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { deletePartsHouse } from "../../../store/partshouse";

import TopNavBar from "../../UserMainPage/TopNavBar";

import "./index.css"

const UpdatePartsHouse = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const { partsHouseId } = useParams();
    const numPHId = parseInt(partsHouseId)

    
    const partsHouses = useSelector(state => state.partsHouses)
    const ph = partsHouses.find(ph => ph.id === numPHId)

    const [ name, setName ] = useState(ph.name)


    const updatePH = (e) => {
        e.preventDefault();
    };

    // Delete PartsHouse then go back 2
    const deletePH = (e) => {
        e.preventDefault();
        dispatch(deletePartsHouse(ph.id))
        history.go(-2)
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
                    <button className="form-button" onClick={deletePH}>Delete</button>
                </div>
                

            </form>
        </div>

    );
};

export default UpdatePartsHouse