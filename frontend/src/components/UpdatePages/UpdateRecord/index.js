import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { updateRecord, awsS3ImageUpdate } from "../../../store/records";
import { fetch } from "../../../store/csrf"
import Calendar from "../../Calendar";
import TopNavBar from "../../UserMainPage/TopNavBar";
import DeleteRecordSection from "./DeleteRecordSection";

import "./index.css"

const UpdateRecordPage = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const { recordId } = useParams();

    const numRecordId = parseInt(recordId);

    const records = useSelector(state => state.record);
    const record = records.find(rec => rec.id === numRecordId);

    const [imgUrl, setImgUrl] = useState(record.imgUrl)

    const [type, setType] = useState(record.type);
    const [name, setName] = useState(record.name);
    const [make, setMake] = useState(record.make);
    const [cost, setCost] = useState(record.cost);
    const [model, setModel] = useState(record.model);
    const [serial, setSerial] = useState(record.serial);
    const [date, setDate] = useState(new Date(record.purchaseDate));
    const [purchaseUrl, setPurchaseUrl] = useState(record.purchaseUrl);
    const [descript, setDescript] = useState(record.description);
    const [errors, setErrors] = useState([]);
    const [hidden, setHidden] = useState(true);

    const options = [
        "SELECT",
        "Appliance",
        "Electronic",
        "Other"
    ];

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
        if (type === "" || type === "SELECT") {
            errors.push("Choose a type");
        };
        setErrors(errors)
    }, [name, make, cost, type, imgUrl])



    const onSubmit = async e => {
        e.preventDefault();
        const formData = {
            type,
            name,
            cost,
            make,
            model,
            serial,
            purchaseDate: date,
            purchaseUrl,
            description: descript,
        };

        dispatch(updateRecord(formData, parseInt(recordId)))

        history.go(-1)
    };



    const awsS3Submit = async e => {
        e.preventDefault();

        const formData = {
            imgUrl
        };

        console.log(formData)

        dispatch(awsS3ImageUpdate(formData, numRecordId))

    };


    //Interchanges simple or advanced form fields
    const hiddenFalse = (e) => {
        e.preventDefault();
        setHidden(false);
    };

    const hiddenTrue = (e) => {
        e.preventDefault();
        setHidden(true);
    };


    //Uses AWS S3 then sets recieved URL to useState
    const awsS3OnChange = async (e) => {
        const rawInputElement = e.target;
        const fileUpload = rawInputElement.files[0];
        const formData = new FormData();

        formData.append("image", fileUpload);

        const response = await fetch("/uploadS3", {
            method: "POST",
            body: formData,
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        setImgUrl(response.data.imageUrl)
    };



    return (

        <div id="user-main-page">


            <TopNavBar />


            <h2>Update {record.name}</h2>
            {!imgUrl && <h3>No image uploaded</h3>}
            {imgUrl && <img src={imgUrl} alt="Record Url" border="0" width="100px"></img>}

            <form onSubmit={awsS3Submit}>
                <input
                    type="file"
                    onChange={awsS3OnChange}
                />
                <button type="submit">Save Image</button>
            </form>


            <form id="new-record-form" onSubmit={onSubmit}>

                <ul className="red-error">
                    {errors.map(error => (
                        <li key={error}>{error}</li>
                    ))}
                </ul>

                {!hidden && <button className="form-button" onClick={hiddenTrue}>Show Simple Form</button>}
                {hidden && <button className="form-button" onClick={hiddenFalse}>Show More Fields</button>}

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
                        placeholder="ex: Refrigerator, TV, .."
                        onChange={e => setName(e.target.value)} />
                </label>
                <label>
                    Make:
                <input type="text" name="make" value={make}
                        placeholder="ex: LG, Sony...  "
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

                <label >
                    Date of Purchase:
                    <Calendar value={date} onChange={setDate} />
                </label>

                <label hidden={hidden}>
                    Purchase URL Link:
                <input type="text" name="purchaseUrl" value={purchaseUrl} hidden={hidden}
                        onChange={e => setPurchaseUrl(e.target.value)} />
                </label>

                <label hidden={hidden}>
                    Short Description:
                <textarea type="text" name="description" value={descript} hidden={hidden}
                        onChange={e => setDescript(e.target.value)} />
                </label>

                <div id="button-section">
                    <button className="form-button" type="submit">Update</button>
                </div>

                {/* <DeletePHForm id={numRecordId} /> */}
            </form>

            <DeleteRecordSection />

        </div>

    );
};

export default UpdateRecordPage