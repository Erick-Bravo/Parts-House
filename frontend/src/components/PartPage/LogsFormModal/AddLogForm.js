import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { addLog } from "../../../store/logs";
import Calendar from "../../Calendar";
import "./logsForm.css";

const AddLogForm = ({ setShowModal }) => {

  const dispatch = useDispatch();
  const { partId } = useParams();
  const numPartId = parseInt(partId);


  const [date, setDate] = useState(new Date());
  const [note, setNote] = useState("");
  const [errors, setErrors] = useState([]);


  const handleLogsData = (e) => {
    e.preventDefault();
    setErrors([]);

    const errors = []

    const formData = {
      date,
      note
    };

    if (!date) {
      errors.push("A Date is Needed to Submit")
    } else {
      dispatch(addLog(formData, numPartId));
      setShowModal(false);
    }
  };

  return (
    <div id="newlog-form-container">
      <h2>New Log</h2>
      <p>date is required</p>
      <form onSubmit={handleLogsData}>
        <ul>
          {errors && errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>

        <Calendar value={date} onChange={setDate} />

        <input
          type="text"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Note"
        />

        <button className="form-button" type="submit">Add</button>

      </form>
    </div>
  );
};

export default AddLogForm