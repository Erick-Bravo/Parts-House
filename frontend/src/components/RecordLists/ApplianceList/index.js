import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, NavLink } from "react-router-dom";
import RecordCard from "../RecordCard"
import "./index.css";





const ApplianceList = () => {

    const { userId, partsHouseId } = useParams();
    const numuserId = parseInt(userId)
    const numpartsHouseId = parseInt(partsHouseId)


    const partsHouses = useSelector(state => state.partsHouses)

    const [appliances, setAppliances] = useState([])
    // const [ electronics, setElectronics ] = useState([])
    // const [ other, setOther ] = useState([])

    useEffect(() => {
        if (partsHouses.length === 0) {
            return
        }
        const selectedPartsHouse = partsHouses.find(ph => ph.id === numpartsHouseId)
        if (selectedPartsHouse) {

            const records = selectedPartsHouse.Records
            const applianceTypes = records.filter(rec => rec.type === "Appliances")
            setAppliances(applianceTypes)
        }

    }, [partsHouses, partsHouseId]);



    return (
        <div id="user-main-page">

            <div id="record-navbar">
                <NavLink to={`/users/${userId}/parts-house/${partsHouseId}/appliances`} >
                    Appliances
                </NavLink>
                <NavLink to={`/users/${userId}/parts-house/${partsHouseId}/electronics`}>
                    Electronics
                </NavLink>
                <NavLink to={`/users/${userId}/parts-house/${partsHouseId}/other`}>
                    Other
                </NavLink>
            </div>

            <div id="display-box">
                <div id="empty-space">
                </div>
                <div>
                    {appliances.map(appliance => {
                        return <RecordCard record={appliance} key={appliance.id}/>
                    })}
                </div>
            </div>

            <div id="mascot">
                <img src="https://i.ibb.co/Sx3THPm/vector-creator-1500-1by1.png" alt="vector-creator-1500-1by1" border="0" height="100px" />
            </div>
        </div>
    );
};

export default ApplianceList;