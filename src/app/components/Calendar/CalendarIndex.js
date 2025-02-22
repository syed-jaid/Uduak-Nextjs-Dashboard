"use client";
import React, { useState } from "react";

const CalendarIndex = () => {
  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const generateCalendar = () => {
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = getDaysInMonth(currentYear, currentMonth);
    const prevMonthDays = getDaysInMonth(currentYear, currentMonth - 1);

    let daysArray = [];
    for (let i = firstDay - 1; i >= 0; i--) {
      daysArray.push({ day: prevMonthDays - i, currentMonth: false });
    }
    for (let day = 1; day <= daysInMonth; day++) {
      daysArray.push({ day, currentMonth: true });
    }
    const remainingDays = 42 - daysArray.length;
    for (let i = 1; i <= remainingDays; i++) {
      daysArray.push({ day: i, currentMonth: false });
    }

    return daysArray;
  };

  const months = Array.from({ length: 12 }, (_, i) =>
    new Date(0, i).toLocaleString("default", { month: "long" })
  );
  const years = Array.from({ length: 101 }, (_, i) => 1999 + i);

  const days = generateCalendar();
  return (
    <div className="w-full h-full">
      <div className="w-full h-full mx-auto bg-white rounded-[12px] shadow-md px-[30px] pb-[30px] pt-[26px]">
        <div className="flex justify-between items-center">
          <p className="text-[22px] text-[#002060] font-bold">ROOM OCCUPANCY</p>
          <div className="flex gap-[9px]">
            <div className="relative w-[70px]">
              <select
                value={currentMonth}
                onChange={(e) => setCurrentMonth(Number(e.target.value))}
                className="text-[12px] bg-white border border-1 border-[#e9e9ed] px-[16px] py-[6px] rounded-[25px] appearance-none w-full "
              >
                {months.map((month, index) => (
                  <option className="text-[12px]" key={index} value={index}>
                    {month.slice(0, 3)}
                  </option>
                ))}
              </select>
              <span className="absolute right-[15px] top-1/2 transform -translate-y-1/2 text-gray-500">
                <img src="Image/DArow.svg" alt="" />
              </span>
            </div>
            <div className="relative w-[76px]">
              <select
                value={currentYear}
                onChange={(e) => setCurrentYear(Number(e.target.value))}
                className="text-[12px] bg-white border border-1 border-[#e9e9ed] px-[16px] py-[6px] rounded-[25px] appearance-none w-full"
              >
                {years.map((year) => (
                  <option className="text-[12px]" key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
              <span className="absolute right-[15px] top-1/2 transform -translate-y-1/2 text-gray-500">
                <img src="Image/DArow.svg" alt="" />
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-[20px] my-[20px]">
          <div className="flex items-center gap-[8px]">
            <div className="w-[11px] h-[11px] bg-[#F9E6F2] rounded-full border border-1 border-[#DE0707]" />
            <p className="text-[#1E1E1E] text-[11px]">1% - 40%</p>
          </div>
          <div className="flex items-center gap-[8px]">
            <div className="w-[11px] h-[11px] bg-[#EBEF05] rounded-full border border-1 border-[#BDC007]" />
            <p className="text-[#1E1E1E] text-[11px]">41% - 80%</p>
          </div>
          <div className="flex items-center gap-[8px]">
            <div className="w-[11px] h-[11px] bg-[#d3fad5] rounded-full border border-1 border-[#19DC24]" />
            <p className="text-[#1E1E1E] text-[11px]">81% - 100%</p>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-[20px] text-center mt-[20px]">
          {daysOfWeek.map((day) => (
            <div key={day} className="text-[14px] font-medium">
              {day}
            </div>
          ))}
          {days.map((dayObj, index) => (
            <div
              key={index}
              className={`py-2 w-[30px] h-[31px] mx-auto rounded-full text-[14px] font-medium flex items-center justify-center 
                ${
                  dayObj.day === 1 &&
                  dayObj.currentMonth &&
                  " bg-[#f6d9d9] border border-1 border-[#DE0707] "
                }
                ${
                  dayObj.day === 2 &&
                  dayObj.currentMonth &&
                  " bg-[#fafbc1] border border-1 border-[#BDC007] "
                }
                ${
                  dayObj.day === 24 &&
                  dayObj.currentMonth &&
                  " bg-[#d6f9c3] border border-1 border-[#0ADA15]] "
                }
               ${dayObj.currentMonth ? "text-black" : "text-[#C5C2C2]"}`}
            >
              {dayObj.day}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
// bg-[#f6d9d9] border border-1 border-[#DE0707]
// bg-[#fafbc1] border border-1 border-[#BDC007]
// bg-[#d6f9c3] border border-1 border-[#0ADA15]

export default CalendarIndex;
