import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { logout } from "../../../store/session";
import { fetchUserPartsHouses } from "../../../store/partshouse";
import { addPartsHouse } from "../../../store/partshouse"
// import { fetch } from "../../../store/csrf"




const LeftNavBar = () => {

    const userId = useSelector(state => state.session.user.id);

    const userPartsHouses = useSelector(state => state.partsHouses);

    const dispatch = useDispatch();

    const [hidden, setHidden] = useState(true);
    const [name, setName] = useState("");

    useEffect(() => {
        dispatch(fetchUserPartsHouses(userId));
    }, [dispatch, userId, hidden, name]);
    
    
    const logoutHandler = (e) => {
        e.preventDefault();
        dispatch(logout());
    };

    const addPartsHouseHandler = () => {
        setHidden(false);
    };

    const submitHandler = async (e) => {
        e.preventDefault();

        dispatch(addPartsHouse(name, userId))

        setHidden(true);
        setName("");
    };

    const trueHidden = () => {
        setHidden(true)
    };

    
    return (
        <div id="left-nav-bar">
            <div className="top-section-navbar">
                <button onClick={addPartsHouseHandler}>add parts house +</button>
                {!userPartsHouses && <p>{`<Parts Houses Empty>`}</p>}
                {userPartsHouses && userPartsHouses.map(partsHouse => {
                    return <NavLink to={`/parts-house/${partsHouse.id}/appliances`} key={partsHouse.id}>
                        <button onClick={trueHidden}>{`${partsHouse.name}`}</button>
                    </NavLink>
                })}
                <form id="add-partshouse-form" onSubmit={submitHandler}>
                    <input type="text" name="name" placeholder="input name"
                        onChange={(e) => setName(e.target.value)} value={name} hidden={hidden} />
                    <input type="submit" hidden={hidden} />
                </form>
            </div>
            <div className="bottom-section-navbar">
                <button onClick={logoutHandler}>Logout</button>
            </div>
        </div>
    );
};

export default LeftNavBar;