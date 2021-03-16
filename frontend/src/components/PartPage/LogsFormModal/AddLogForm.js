import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addLog } from "../../../store/logs"
import Calendar from "../../Calendar";
import "./logsForm.css";

const AddLogForm = () => {
  const dispatch = useDispatch();
  const [date, setDate] = useState(new Date());
  const [note, setNote] = useState("");
  const [errors, setErrors] = useState([]);

  // does it need redux for the login?
  // yes, becuase the log container needs to update when you create new log
  // we need a login form sends 

  const handleLogsData = (e) => {
    e.preventDefault();

    const formData = {
      date,
      note
    };

    setErrors([]);
    return dispatch(addLog(formData)).catch(
      (res) => {
        if (res.data && res.data.errors) setErrors(res.data.errors);
      }
    );
  };

  return (
    <div id="newlog-form-container">
      <h2>New Log</h2>
      <form onSubmit={handleLogsData}>
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>

        <Calendar value={date} onChange={setDate} />

        <input
          type="text"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Note (optional)"
        />

        <button type="submit">Add</button>

      </form>
    </div>
  );
};

export default AddLogForm