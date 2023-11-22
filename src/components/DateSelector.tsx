import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

// CSS Modules, react-datepicker-cssmodules.css
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker-cssmodules.css";

const DateSelector = ({ defaultDate }: { defaultDate?: string }) => {
  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    if (defaultDate) {
      setStartDate(new Date(defaultDate));
    } else {
      setStartDate(new Date());
    }
  }, [defaultDate]);

  return (
    <div className="border-2 px-2 py-1 rounded-sm focus:outline-gray-400 cursor-pointer flex items-center gap-2">
      <label htmlFor="date">
        <CalendarMonthIcon style={{ color: "#434141" }} />
      </label>
      <DatePicker
        className="cursor-pointer outline-none"
        selected={startDate}
        name="date"
        id="date"
        onChange={(date) => setStartDate(date as Date)}
        dateFormat="dd/MM/yyyy"
        maxDate={new Date()}
        showYearDropdown
      />
    </div>
  );
};

export default DateSelector;
