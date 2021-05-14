import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from "react-router-dom";
import { addPart } from "../../../store/parts"
import TopNavBar from "../../UserMainPage/TopNavBar";
import "./index.css"



const PartPage = () => {

    const dispatch = useDispatch();
    const { recordId } = useParams();
    const numRecordId = parseInt(recordId)

    const records = useSelector(state => state.record);
    const record = records.find(rec => rec.id === numRecordId);

    const history = useHistory();

    const [name, setName] = useState("");
    const [make, setMake] = useState("");
    const [cost, setCost] = useState(0);
    const [model, setModel] = useState("");
    const [serial, setSerial] = useState("");
    const [buyUrl, setBuyUrl] = useState("");
    const [descript, setDescript] = useState("");
    const [errors, setErrors] = useState([]);
    const [imgUrl, setImgUrl] = useState("");
    const [hidden, setHidden] = useState(true);



    useEffect(() => {
        const errors = [];
        if (!name.length) {
            errors.push("Name is required");
        };
        if (!make.length) {
            errors.push("Make is required");
        };
        if (cost < 0) {
            errors.push("Initial Cost cannot be less than 0");
        };

        setErrors(errors)
    }, [name, make, cost])


    const onSubmit = async e => {

        e.preventDefault();
        const formData = {
    
            name,
            cost,
            make,
            model,
            serial,
            buyUrl,
            imgUrl,
            description: descript,
            recordId: numRecordId
        };

        dispatch(addPart(formData))

      
        setName("");
        setDescript("");
        setCost(0);
        setMake("");
        setModel("");
        setSerial("");
        setImgUrl("")
        setBuyUrl("");

        history.go(-1)
    };

    const hiddenFalse = (e) => {
        e.preventDefault();
        setHidden(false);
    };

    const hiddenTrue = (e) => {
        e.preventDefault();
        setHidden(true);
    };


    return (
        <div id="user-main-page">

            <TopNavBar />

            <form id="new-record-form" onSubmit={onSubmit}>
                <h2>Add New Part</h2>
                <h3>for Record: {record.name}</h3>

                <ul className="red-error">
                    {errors.map(error => (
                        <li key={error}>{error}</li>
                    ))}
                </ul>

                {!hidden && <button className="small-buttons" onClick={hiddenTrue}>Show Simple Form</button>}
                {hidden && <button className="small-buttons" onClick={hiddenFalse}>Show More Fields</button>}

                <label>
                    Name:
                <input type="text" name="name" value={name}
                        placeholder="ex: AA Batteries, 140w Light Bulb Pulley..."
                        onChange={e => setName(e.target.value)} />
                </label>

                <label>
                    Make:
                <input type="text" name="make" value={make}
                        placeholder="ex: Duracell , GE, Toms Hardware...  "
                        onChange={e => setMake(e.target.value)} />
                </label>

                <label>
                    Total Initial Cost:
                <input type="number" name="cost" value={cost}
                        onChange={e => setCost(e.target.value)} />
                </label>

                <label hidden={hidden}>
                    Model #
                <input type="text" name="model" value={model} hidden={hidden}
                        onChange={e => setModel(e.target.value)} />
                </label>

                <label hidden={hidden}>
                    Serial #
                <input type="text" name="serial" value={serial} hidden={hidden}
                        onChange={e => setSerial(e.target.value)} />
                </label>

                <label hidden={hidden}>
                    Buy URL Link:
                <input type="text" name="buyUrl" value={buyUrl} hidden={hidden}
                        onChange={e => setBuyUrl(e.target.value)} />
                </label>

                <label hidden={hidden}>
                    Image URL:
                <input type="text" name="imgUrl" value={imgUrl} hidden={hidden}
                        onChange={e => setImgUrl(e.target.value)} />
                </label>

                <label hidden={hidden}>
                    Short Description:
                <textarea id="textarea" type="text" name="description" value={descript} hidden={hidden}
                        onChange={e => setDescript(e.target.value)} />
                </label>

                <button className="small-buttons mB mt" type="submit">Add</button>

            </form>

        </div>
    );
};

export default PartPage