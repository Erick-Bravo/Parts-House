import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from "react-router-dom";
import { addRecord } from "../../../store/records"
import "./index.css";




const AddRecordPage = () => {

    const history = useHistory();
    const dispatch = useDispatch();
    const { partsHouseId } = useParams();
    const numPartsHouseId = parseInt(partsHouseId);

    const [type, setType] = useState("");
    const [name, setName] = useState("");
    const [make, setMake] = useState("");
    const [cost, setCost] = useState(0);
    const [model, setModel] = useState("");
    const [serial, setSerial] = useState("");
    const [buyUrl, setBuyUrl] = useState("");
    const [addInfo, setAddInfo] = useState("");
    const [descript, setDescript] = useState("");
    const [errors, setErrors] = useState([])

    const options = [
        "Appliance",
        "Electronic",
        "Other"
    ];

    useEffect(() => {
        const errors = [];
        if(!name.length) {
            errors.push("Name is required")
        }
        if(!make.length) {
            errors.push("Make is required")
        }
        if(cost < 0) {
            errors.push("Initial Cost cannot be less than 0")
        }
        setErrors(errors)
    }, [name, make, cost])

    const onSubmit = async e => {
        e.preventDefault();


        const formData = {
            type,
            name,
            description: descript,
            cost,
            make,
            model,
            serial,
            buyUrl,
            additionalInfo: addInfo,
            partsHouseId: numPartsHouseId
        };


        dispatch(addRecord(formData))


        setType("");
        setName("");
        setDescript("");
        setCost(0);
        setMake("");
        setModel("");
        setSerial("");
        setBuyUrl("");
        setAddInfo("");
    };


    return (

        <div id="user-main-page">
            <div></div>
            <form id="new-record-form" onSubmit={onSubmit}>
                <h2>Add New Record</h2>

                <ul>
                    {errors.map(error => (
                        <li key={error}>{error}</li>
                    ))}
                </ul>

                <label>
                    Select a Type:
                    <select value={type}
                        onChange={e => setType(e.target.value)} >

                        {options.map(type => (
                            <option key={type} value={type}>
                                {type}
                            </option>
                        ))}
                    </select>
                </label>

                <label>
                    Name:
                <input type="text" name="name" value={name}
                        placeholder="example: Refrigerator, TV etc.."
                        onChange={e => setName(e.target.value)} />
                </label>

                <label>
                    Make:
                <input type="text" name="make" value={make}
                        placeholder="example: Whirlpool, Apple, Sony etc...  "
                        onChange={e => setMake(e.target.value)} />
                </label>

                <label>
                    Total Initial Cost:
                <input type="number" name="cost" value={cost}
                        onChange={e => setCost(e.target.value)} />
                </label>


                <label>
                    Model #
                <input type="text" name="model" value={model}
                        onChange={e => setModel(e.target.value)} />
                </label>

                <label>
                    Serial #
                <input type="text" name="serial" value={serial}
                        onChange={e => setSerial(e.target.value)} />
                </label>

                <label>
                    Buy URL:
                <input type="text" name="buyUrl" value={buyUrl}
                        onChange={e => setBuyUrl(e.target.value)} />
                </label>

                <label>
                    Description:
                <textarea type="text" name="description" value={descript}
                        onChange={e => setDescript(e.target.value)} />
                </label>

                <button type="submit">Add</button>


            </form>


        </div>
    );
};

export default AddRecordPage;