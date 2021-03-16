import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



const Calendar = ({ value, onChange }) => {
  // const [value, onChange] = useState(new Date());

  return <DatePicker onChange={onChange} value={value} minDate={new Date()} />;
}

export default Calendar;