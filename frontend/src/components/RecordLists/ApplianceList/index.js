import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, NavLink } from "react-router-dom";
import { fetchAllRecords } from "../../../store/records"
import RecordCard from "../RecordCard"
import NameSection from "../zNameSection"
import AddRecord from "../zAddRecord"
import "../index.css";




const ApplianceList = () => {

    const dispatch = useDispatch();
    const { partsHouseId } = useParams();
    const numpartsHouseId = parseInt(partsHouseId);

    // for NameSection
    const partsHouses = useSelector(state => state.partsHouses);
    const selectedPartsHouse = partsHouses.find(ph => ph.id === numpartsHouseId);

    // for Records
    const records = useSelector(state => state.record)

    // console.log(records)

    const [appliances, setAppliances] = useState([]);
    const [ph, setPh] = useState([]);


    useEffect(() => {

        dispatch(fetchAllRecords(numpartsHouseId))
        if (partsHouses.length === 0) {
            return
        };
        if (selectedPartsHouse) {
            setPh(selectedPartsHouse)
        };
        if (records) {
            const applianceTypes = records.filter(rec => rec.type === "Appliance");
            setAppliances(applianceTypes)
        };

    }, [partsHouses, numpartsHouseId, selectedPartsHouse, records]);

    // useEffect(() => {
    //     if (partsHouses.length === 0) {
    //         return
    //     }

    // }, [partsHouses, partsHouseId, numpartsHouseId, selectedPartsHouse]);





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

            <AddRecord partsHouseId={partsHouseId} />

            <div id="display-box">
                <img src="https://i.ibb.co/1J6XgXY/Appliance-Icon.png" alt="Appliance-Icon" border="0" width="100px"></img>
                <div>
                    {appliances.map(appliance => {
                        return <NavLink to={`/records/${appliance.id}`} key={appliance.id} >
                            <RecordCard record={appliance} />
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

export default ApplianceList;