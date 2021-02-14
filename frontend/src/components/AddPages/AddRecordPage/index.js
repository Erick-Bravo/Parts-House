import React, { useState } from "react"
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom"
import "./index.css"




const AddRecordPage = () => {

    const history = useHistory()
    const dispatch = useDispatch()

    const [type, setType] = useState("")
    const [name, setName] = useState("")
    const [descript, setDescript] = useState("")
    const [cost, setCost] = useState(0)
    const [make, setMake] = useState("")
    const [model, setModel] = useState("")
    const [serial, setSerial] = useState("")
    const [buyUrl, setBuyUrl] = useState("")
    const [addInfo, setAddInfo] = useState("")

    const options = [
        "Appliance",
        "Electronic",
        "Other"
    ]

    return (


        <div id="user-main-page">
            <div></div>
            <form id="new-record-form">
                <h2>Add New Record</h2>
                <label>
                    Select a Type:
                    <select>
                        {options.map(type => (
                            <option key={type} value={type}>
                                {type}
                            </option>
                        ))}
                    </select>
                </label>
                <label>
                    Name:
                <input placeholder="example: Refrigerator, TV etc.." />
                </label>
                <label>
                    Description:
                <textarea placeholder="optional"/>
                </label>
                <label>
                    Total Initial Cost: 
                <input type="number" placeholder="optional"/>
                </label>
                <label>
                    Make:
                <input placeholder="example: Whirlpool, Apple, Sony etc...  " />
                </label>
                <label>
                    Model #
                <input placeholder="optional but suggested" />
                </label>
                <label>
                    Serial #
                <input placeholder="optional but suggested" />
                </label>
                <label>
                    Buy URL:
                <input placeholder="optional" />
                </label>
                <label>
                    Additional Info:
                <input placeholder="optional" />
                </label>

                <button>Add</button>


            </form>


            <div id="mascot">
                <img src="https://i.ibb.co/Sx3THPm/vector-creator-1500-1by1.png" alt="vector-creator-1500-1by1" border="0" height="100px" />
            </div>

        </div>
    );
};

export default AddRecordPage