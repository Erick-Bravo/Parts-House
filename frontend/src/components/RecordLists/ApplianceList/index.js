import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, NavLink } from "react-router-dom";
import { fetchAllRecords } from "../../../store/records"
import TopNavBar from "../../UserMainPage/TopNavBar"
import RecordCard from "../RecordCard"
import NameSection from "../zNameSection"
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


    const [appliances, setAppliances] = useState([]);
    const [ph, setPh] = useState([]);

    useEffect(() => {
        dispatch(fetchAllRecords(numpartsHouseId))
    }, [dispatch, numpartsHouseId])


    useEffect(() => {
        if (partsHouses.length === 0) {
            return
        };
        if (records) {
            const phRecords = records.filter(rec => rec.partsHouseId === numpartsHouseId);
            const applianceTypes = phRecords.filter(rec => rec.type === "Appliance");
            setPh(selectedPartsHouse)
            setAppliances(applianceTypes)
        };

    }, [partsHouses, numpartsHouseId, selectedPartsHouse, records]);



    return (
        <div id="user-main-page">
            <TopNavBar />
            <NameSection ph={ph} />

            <div id="record-navbar">
                <NavLink className="active-list" to={`/parts-house/${partsHouseId}/appliances`} >
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
                <img src="/appliance.png" alt="Appliance-Icon" border="0" width="100px"></img>
                <NavLink to={`/parts-house/${partsHouseId}/records/add-record-page`}>
                    <button className="small-buttons">Add Appliance</button>
                </NavLink>
            </div>

            <div id="display-box">
                <div>
                    {appliances.map(appliance => {
                        return <NavLink to={`/records/${appliance.id}`} key={appliance.name} >
                            <RecordCard record={appliance} />
                        </NavLink>
                    })}
                </div>
            </div>

        </div>
    );
};

export default ApplianceList;