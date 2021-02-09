import React, { useEffect, useState } from "react";
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




const ApplianceList = () => {

    const dispatch = useDispatch();

    const { userId, partsHouseId } = useParams();
    const numuserId = parseInt(userId)
    const numpartsHouseId = parseInt(partsHouseId)


    const partsHouses = useSelector(state => state.partsHouses)

    const [ appliances, setAppliances ] = useState([])
    // const [ electronics, setElectronics ] = useState([])
    // const [ other, setOther ] = useState([])

    useEffect(() => {
        if (partsHouses.length === 0) {
            return
        }
        const selectedPartsHouse = partsHouses.find(ph => ph.id === numpartsHouseId)
        if(selectedPartsHouse) {

            const records = selectedPartsHouse.Records
            const applianceTypes = records.filter(rec => rec.type === "Appliances")
            setAppliances(applianceTypes)
        }

    }, [partsHouses, partsHouseId]);







    // console.log(selectedPartsHouse)

    // let records
    // let loaded

    // if (selectedPartsHouse[0].Records) {
    //     records = selectedPartsHouse[0].Records
    //     const record = records.filter(rec => rec.type === "Appliances")
    //     loaded = record
    //     console.log(loaded)
    // }


    // console.log(records)


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
                {appliances.map(appliance => {
                    return <RecordCard record={appliance}/>
                })}
            </div>

            <div id="mascot">
                <img src="https://i.ibb.co/Sx3THPm/vector-creator-1500-1by1.png" alt="vector-creator-1500-1by1" border="0" height="100px" />
            </div>
        </div>
    );
};

export default ApplianceList;