import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./logsForm.css";

const AddLogForm = () => {
    const dispatch = useDispatch();
    const [date, setDate] = useState("");
    const [note, setNote] = useState("");
    const [errors, setErrors] = useState([]);

    //does it need redux for the login?
    //yes, becuase the log container needs to update when you create new log
    //we need a login form sends 

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
};

export default AddLogForm