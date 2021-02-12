import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams, NavLink } from "react-router-dom";
import RecordCard from "../RecordCard"
import "../index.css";
import NameSection from "../zNameSection";





const OtherList = () => {

    const { userId, partsHouseId } = useParams();
    const numpartsHouseId = parseInt(partsHouseId)


    const partsHouses = useSelector(state => state.partsHouses)
    const [ph, setPh] = useState([])

    // const [appliances, setAppliances] = useState([])
    const [ others, setOthers ] = useState([])
    // const [ other, setOther ] = useState([])

    useEffect(() => {
        if (partsHouses.length === 0) {
            return
        }
        const selectedPartsHouse = partsHouses.find(ph => ph.id === numpartsHouseId)
        if (selectedPartsHouse) {

            const records = selectedPartsHouse.Records
            const otherTypes = records.filter(rec => rec.type === "Other")
            setPh(selectedPartsHouse)
            setOthers(otherTypes)
        }

    }, [partsHouses, partsHouseId, numpartsHouseId]);



    return (
        <div id="user-main-page">
            <NameSection ph={ph}/>

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
                <div id="empty-space"></div>
                <div>
                    {others.map(other => {
                        return <NavLink to={`/records/${other.id}/`} key={other.id}>
                            <RecordCard record={other} key={other.id} />
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

export default OtherList;