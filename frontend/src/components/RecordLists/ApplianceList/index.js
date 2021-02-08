import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, NavLink } from "react-router-dom";
import { fetchUserPartsHouses } from "../../../store/partshouse"
import "./index.css";



const RecordCard = ({ record }) => {
    // console.log(record)
    return (
        <div>
            <div>{record.name}</div>
            <div>{record.make}</div>
            <div>{record.model}</div>
            <div>{record.serial}</div>
        </div>
    )
}




const ApplianceList = ({userPartsHouses}) => {

    const dispatch = useDispatch();

    const { userId, partsHouseId } = useParams();
    const numuserId = parseInt(userId)
    const numpartsHouseId = parseInt(partsHouseId)

    
    const partsHouses = userPartsHouses

    console.log(partsHouses)

    // const selectedPartsHouse = partsHouses.filter(ph => ph.id === numpartsHouseId)

    // console.log(selectedPartsHouse)

    // let records
    // let loaded

    // if (selectedPartsHouse[0].Records) {
    //     records = selectedPartsHouse[0].Records
    //     const record = records.filter(rec => rec.type === "Appliances")
    //     loaded = record
    //     console.log(loaded)
    // }

    // const records = selectedPartsHouse[0].Records

    // console.log(records)

    // const applianceType = records.filter(rec => rec.type === "Appliances")

    // console.log(applianceType)

    return (
        <div id="user-main-page">

            <div id="record-navbar">
                <NavLink to={`/users/${userId}/parts-house/${partsHouseId}/appliances`} activeClassName='active'>
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
        
            </div>

            <div id="mascot">
                <img src="https://i.ibb.co/Sx3THPm/vector-creator-1500-1by1.png" alt="vector-creator-1500-1by1" border="0" height="100px" />
            </div>
        </div>
    );
};

export default ApplianceList;