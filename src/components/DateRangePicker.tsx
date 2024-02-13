import React, { useState } from "react";
import Calendar,  {DateObject} from "react-multi-date-picker";


const DateRangePicker = () => {

  const [values, setValues] = useState([
    new DateObject().setDay(4).subtract(1, "month"),
    new DateObject().setDay(4).add(1, "month")
  ])

  const handleChange = (date: DateObject | DateObject[] | null, options: { validatedValue: string | string[]; input: HTMLElement; isTyping: boolean; }): false | void => {
    setValues(date as DateObject[]);
  };

  return ( 
    <div>
      <Calendar
        value={values}
        onChange={handleChange}
        range
        numberOfMonths={2}
        showOtherDays
      /> 
    </div>
  );
};

export default DateRangePicker;
