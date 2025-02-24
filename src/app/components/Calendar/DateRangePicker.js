"use client";
import { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";
import { RiCalendar2Fill } from "react-icons/ri";

const DateRangePicker = ({ DarkMode }) => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  return (
    <div className="relative w-fit">
      <div
        onClick={() => setShowCalendar(!showCalendar)}
        className="flex justify-center items-center"
      >
        <div
          className={`h-[40px] w-[214px] sm:flex justify-center items-center rounded-l-[8px] hidden ${
            DarkMode
              ? "bg-[#111131] border border-1 border-[#262648]"
              : "bg-white"
          }`}
        >
          <p className={`text-[12px] font-medium ${DarkMode && "text-white"}`}>
            {format(dateRange[0].startDate, "dd MMM, yyyy")} to{" "}
            {format(dateRange[0].endDate, "dd MMM, yyyy")}
          </p>
        </div>
        <div className="bg-[#D961AB] text-white h-[38px] w-[35px] flex justify-center items-center rounded-l-[8px] sm:rounded-l-[0] rounded-r-[8px]">
          <RiCalendar2Fill />
        </div>
      </div>

      {/* Calendar Popup */}
      {showCalendar && (
        <div
          className={`absolute top-12 right-0 z-50 shadow-md rounded-[8px] p-4 transition-all ${
            DarkMode
              ? "bg-[#1d1d3f] border-1 border-[#474788] border"
              : "bg-white"
          }`}
        >
          <DateRange
            ranges={dateRange}
            onChange={(item) => setDateRange([item.selection])}
            // showMonthAndYearPickers={true}
            minDate={new Date("01/01/2020")}
            maxDate={new Date("02/03/2230")}
            className={DarkMode && "dark rounded-t-[12px]"}
          />
          <button
            className="w-full py-2 font-semibold text-[15px] bg-[#d961ab] text-white rounded-b-[8px]"
            onClick={() => setShowCalendar(false)}
          >
            Confirm
          </button>
        </div>
      )}
    </div>
  );
};

export default DateRangePicker;
