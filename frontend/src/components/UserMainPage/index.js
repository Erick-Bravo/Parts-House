import React, { useEffect }from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchUserPartsHouses } from "../../store/partshouse"
import "./index.css";






const EmptyDisplayPage = () => {

    const dispatch = useDispatch();

    const { userId } = useParams();
    
    useEffect(() => {
        dispatch(fetchUserPartsHouses(userId));
    }, [dispatch]);
    

    // if(!sessionUser) return <Redirect to={"/"} />;
    
    return (
        <div id="user-main-page">
            
            <div id="display-box">
                <p>Hello! Having a good day?</p>
            </div>

            <div id="mascot">
                <img src="https://i.ibb.co/Sx3THPm/vector-creator-1500-1by1.png" alt="vector-creator-1500-1by1" border="0" height="100px"/>
            </div>
        </div>
    );
};

export default EmptyDisplayPage;