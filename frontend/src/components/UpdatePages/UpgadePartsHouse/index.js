import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import TopNavBar from "../../UserMainPage/TopNavBar";

import "./index.css"

const UpdatePartsHouse = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const [ errors, setErrors ] = useState([]);

    const onSubmit = (e) => {
        e.preventDefault();
    };



    return (

        <div id="user-main-page">

            <TopNavBar />

            <form id="new-record-form" onSubmit={onSubmit}>

                <ul className="red-error">
                    {errors.map(error => (
                        <li key={error}>{error}</li>
                    ))}
                </ul>

                <div id="button-section">
                    <button className="form-button" type="submit">Update</button>
                </div>

            </form>

        </div>

    );
};

export default UpdatePartsHouse