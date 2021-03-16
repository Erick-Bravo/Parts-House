import React, { useState } from "react";
import DatePicker from "react-date-picker";
import { useDispatch } from "react-redux";
import Calendar from "../../Calendar";
import "./logsForm.css";

const AddLogForm = () => {
    const dispatch = useDispatch();
    const [date, setDate] = useState("");
    const [note, setNote] = useState("");
    const [errors, setErrors] = useState([]);

    // does it need redux for the login?
    // yes, becuase the log container needs to update when you create new log
    // we need a login form sends 

    const handleLogsData = (e) => {

        const formData = {
            date,
            note
        };

        e.preventDefault();
        setErrors([]);
        return dispatch(addLog(forData)).catch(
          (res) => {
            if (res.data && res.data.errors) setErrors(res.data.errors);
          }
        );
    };

    return (
        <div id="login-form-container">
          <h2>New Log</h2>
          <form onSubmit={handleLogsData}>
            <ul>
              {errors.map((error, idx) => (
                <li key={idx}>{error}</li>
              ))}
            </ul>



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