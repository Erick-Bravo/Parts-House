import React from "react";
import DatePicker from "react-date-picker";
import "react-datepicker/dist/react-datepicker.css";



const Calendar = ({ value, onChange }) => {
  // const [value, onChange] = useState(new Date());

  return <DatePicker onChange={onChange} value={value} minDate={new Date()} />;
}

export default Calendar;