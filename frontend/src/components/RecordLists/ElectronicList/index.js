import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams, NavLink } from "react-router-dom";
import RecordCard from "../RecordCard"
import "../index.css";
import NameSection from "../zNameSection";





const ElectronicList = ({ userId }) => {

    const { partsHouseId } = useParams();
    const numpartsHouseId = parseInt(partsHouseId)


    const partsHouses = useSelector(state => state.partsHouses)

    const [ electronics, setElectronics ] = useState([])
    const [ph, setPh] = useState([])

    useEffect(() => {
        if (partsHouses.length === 0) {
            return
        }
        const selectedPartsHouse = partsHouses.find(ph => ph.id === numpartsHouseId)
        if (selectedPartsHouse) {

            const records = selectedPartsHouse.Records
            const electronicTypes = records.filter(rec => rec.type === "Electronics")
            setPh(selectedPartsHouse)
            setElectronics(electronicTypes)
        }

    }, [partsHouses, partsHouseId, numpartsHouseId]);



    return (
        <div id="user-main-page">
            <NameSection ph={ph} />

            <div id="record-navbar">
                <NavLink to={`/parts-house/${partsHouseId}/appliances`} >
                    Appliances
                </NavLink>
                <NavLink to={`/parts-house/${partsHouseId}/electronics`}>
                    Electronics
                </NavLink>
                <NavLink to={`/parts-house/${partsHouseId}/other`}>
                    Other
                </NavLink>
            </div>

            <div id="add-record">
                <button>Add Electronic</button>
            </div>

            <div id="display-box">
                <img src="https://i.ibb.co/zNWRjHY/Electronic-Icon.png" alt="Electronic-Icon" border="0" width="100px"></img>
                <div>
                    {electronics.map(electronic => {
                        return <NavLink to={`/records/${electronic.id}`} key={electronic.id}>
                            <RecordCard record={electronic} key={electronic.id} />
                        </NavLink>
                    })}
                </div>
            </div>

            <div id="mascot">
                <img src="https://i.ibb.co/Sx3THPm/vector-creator-1500-1by1.png" alt="vector-creator-1500-1by1" border="0" height="100px" />
            </div>
        </div>
    );
};

export default ElectronicList;