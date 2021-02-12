import React from "react"
import { useDispatch } from "react-redux"
import { deletePartsHouse } from "../../../store/partshouse"
import "./index.css"





const NameSection = ({ph}) => {

    const dispatch = useDispatch();
    console.log(ph.id)
    

    const deleteHandler = () => {
      
        dispatch(deletePartsHouse(ph.id))
    }

    return (
        <div id="name-section">
            <h1>{ph.name}</h1>
            <p>Delete this parts house</p>
            <button onClick={deleteHandler}>delete</button>
        </div>
    )
}

export default NameSection //imported - ApplianceList / ElectronicList / OtherList