import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Redirect, useHistory } from "react-router-dom";
import { logout } from "../../../store/session";
import { fetchUserPartsHouses } from "../../../store/partshouse";
import { fetch } from "../../../store/csrf"




const LeftNavBar = () => {

    const userId = useSelector(state => state.session.user.id);
    const userPartsHouses = useSelector(state => state.partsHouses);

    const dispatch = useDispatch();
    const history = useHistory();

    const [hidden, setHidden] = useState(true);
    const [name, setName] = useState("");

    useEffect(() => {
        dispatch(fetchUserPartsHouses(userId));
    }, [dispatch, userId, hidden, name]);


    const logoutHandler = (e) => {
        e.preventDefault();
        dispatch(logout());
        history.push(`/`)
    };

    const addPartsHouseHandler = (e) => {
        e.preventDefault();
        setHidden(false);
    };

    const submitHandler = async(e) => {
        e.preventDefault();

            await fetch("/api/parts-houses/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, userId })
        })

        setHidden(true);
        setName("");

        
    };


    return (
        <div id="left-nav-bar">
            <div className="top-section-navbar">
                <button onClick={addPartsHouseHandler}>add parts house +</button>
                {!userPartsHouses && <p>{`<Parts Houses Empty>`}</p>}
                {userPartsHouses && userPartsHouses.map(partsHouse => {
                    return <NavLink to={`/users/${userId}/parts-house/${partsHouse.id}/appliances`} key={partsHouse.id}>
                        <button>{`${partsHouse.name}`}</button>
                    </NavLink>
                })}
                <form id="add-partshouse-form" onSubmit={submitHandler}>
                    <input type="text" name="name" placeholder="input name"
                        onChange={(e) => setName(e.target.value)} value={name} hidden={hidden}/>
                    <input type="submit" hidden={hidden}/>
                </form>
            </div>
            <div className="bottom-section-navbar">
                <button onClick={logoutHandler}>Logout</button>
                <div className="empty-space-leftNav"></div>
            </div>
        </div>
    );
};

export default LeftNavBar;