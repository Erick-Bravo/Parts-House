import React, { useState } from "react"
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom"





const AddRecordPage = () => {

    const history = useHistory()
    const dispatch = useDispatch()

    const [ type, setType ] = useState("")
    const [ name, setName ] = useState("")
    const [ descript, setDescript ] = useState("")
    const [ cost, setCost ] = useState(0)
    const [ make, setMake ] = useState("")
    const [ model, setModel ] = useState("")
    const [ serial, setSerial ] = useState("")
    const [ addInfo, setAddInfo ] = useState("")



    return (
        <div id="user-main-page">
            
            <div id="new-record-form">
                <h2>Add New Appliance, Electronic or Other</h2>
                <form>
                    <input></input>
                    <input></input>
                    <input></input>
                    <input></input>
                    <input></input>
                    <input></input>

                </form>
            </div>

            <div id="mascot">
                <img src="https://i.ibb.co/Sx3THPm/vector-creator-1500-1by1.png" alt="vector-creator-1500-1by1" border="0" height="100px"/>
            </div>
            
        </div>
    );
};

export default AddRecordPage