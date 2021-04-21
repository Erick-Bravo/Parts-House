import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams, NavLink } from "react-router-dom";
import RecordCard from "../RecordCard"
import NameSection from "../zNameSection";
import TopNavBar from "../../UserMainPage/TopNavBar"
import "../index.css";





const ElectronicList = () => {

    const { partsHouseId } = useParams();
    const numpartsHouseId = parseInt(partsHouseId);

    // for NameSection
    const partsHouses = useSelector(state => state.partsHouses);
    const selectedPartsHouse = partsHouses.find(ph => ph.id === numpartsHouseId);

    // for Records
    const records = useSelector(state => state.record);

    const [electronics, setElectronics] = useState([]);
    const [ph, setPh] = useState([]);


    useEffect(() => {
        if (partsHouses.length === 0) {
            return
        };
        if (records) {
            const phRecords = records.filter(rec => rec.partsHouseId === numpartsHouseId);
            const electronicTypes = phRecords.filter(rec => rec.type === "Electronic");
            setPh(selectedPartsHouse)
            setElectronics(electronicTypes)
        };

    }, [partsHouses, numpartsHouseId, selectedPartsHouse, records]);



    return (
        <div id="user-main-page"> 

            <TopNavBar />
            
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
                <NavLink to={`/parts-house/${partsHouseId}/records/add-record-page`}>
                    <button className="small-buttons">Add Electronic</button>
                </NavLink>
            </div>

            <div id="display-box">
                <img src="https://i.ibb.co/zNWRjHY/Electronic-Icon.png" alt="Electronic-Icon" border="0" width="100px"></img>
                <div>
                    {electronics.map(electronic => {
                        return <NavLink to={`/records/${electronic.id}`} key={electronic.name}>
                            <RecordCard record={electronic} />
                        </NavLink>
                    })}
                </div>
            </div>

        </div>
    );
};

export default ElectronicList;