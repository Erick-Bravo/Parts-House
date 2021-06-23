import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams, NavLink } from "react-router-dom";
import RecordCard from "../RecordCard"
import TopNavBar from "../../UserMainPage/TopNavBar";
import NameSection from "../zNameSection";
import "../index.css";





const OtherList = () => {

    const { partsHouseId } = useParams();
    const numpartsHouseId = parseInt(partsHouseId);

    // for NameSection
    const partsHouses = useSelector(state => state.partsHouses);
    const selectedPartsHouse = partsHouses.find(ph => ph.id === numpartsHouseId);


    // for Records
    const records = useSelector(state => state.record);


    const [others, setOthers] = useState([]);
    const [ph, setPh] = useState([]);


    useEffect(() => {
        if (partsHouses.length === 0) {
            return
        };
        if (records) {
            const phRecords = records.filter(rec => rec.partsHouseId === numpartsHouseId);
            const otherTypes = phRecords.filter(rec => rec.type === "Other");
            setPh(selectedPartsHouse)
            setOthers(otherTypes)
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
                <NavLink className="active-list" to={`/parts-house/${partsHouseId}/other`}>
                    Other
                </NavLink>
            </div>

            <div id="add-record">
                <NavLink to={`/parts-house/${partsHouseId}/records/add-record-page`}>
                    <button className="small-buttons">Add Other</button>
                </NavLink>
            </div>

            <div id="display-box">
                <div id="empty-space"></div>
                <div>
                    {others.map(other => {
                        return <NavLink to={`/records/${other.id}/`} key={other.name}>
                            <RecordCard record={other} />
                        </NavLink>
                    })}
                </div>
            </div>

        </div>
    );
};

export default OtherList;