"use client";
import React, { useState } from "react";

const CalendarIndex = ({ DarkMode }) => {
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
      <div
        className={`${
          DarkMode ? "bg-[#1d1d3f]" : "bg-white"
        }  w-full h-full mx-auto rounded-[12px] shadow-md px-[30px] pb-[30px] pt-[26px]`}
      >
        <div className="flex justify-between items-center">
          <p
            className={`${
              DarkMode ? "text-white" : "text-[#002060]"
            } sm:text-[22px] text-[13px] font-bold`}
          >
            ROOM OCCUPANCY
          </p>
          <div className="flex gap-[9px]">
            <div className="relative sm:w-[70px] w-[60px]">
              <select
                value={currentMonth}
                onChange={(e) => setCurrentMonth(Number(e.target.value))}
                className={`${
                  DarkMode
                    ? "bg-[#1D1D3F] text-white border-[#6f6f7d]"
                    : "bg-white border-[#e9e9ed]"
                } sm:text-[12px] text-[8px] border border-1 px-[16px] py-[6px] rounded-[25px] appearance-none w-full`}
              >
                {months.map((month, index) => (
                  <option className="text-[12px] " key={index} value={index}>
                    {month.slice(0, 3)}
                  </option>
                ))}
              </select>
              <span className="absolute right-[15px] top-1/2 transform -translate-y-1/2 text-gray-500">
                <img src="Image/DArow.svg" alt="" />
              </span>
            </div>
            <div className="relative sm:w-[76px] w-[66px]">
              <select
                value={currentYear}
                onChange={(e) => setCurrentYear(Number(e.target.value))}
                className={`${
                  DarkMode
                    ? "bg-[#1D1D3F] text-white border-[#6f6f7d]"
                    : "bg-white border-[#e9e9ed]"
                } sm:text-[12px] text-[8px] border border-1 px-[16px] py-[6px] rounded-[25px] appearance-none w-full`}
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

        <div
          className={`${
            DarkMode ? "text-[#787878]" : "text-[#1E1E1E]"
          } flex items-center justify-center gap-[20px] my-[20px]`}
        >
          <div className="flex items-center gap-[8px]">
            <div className="sm:w-[11px] sm:h-[11px] w-[7px] h-[7px] bg-[#F9E6F2] rounded-full border border-1 border-[#DE0707]" />
            <p className="text-[7px] sm:text-[11px]">1% - 40%</p>
          </div>
          <div className="flex items-center gap-[8px]">
            <div className="sm:w-[11px] sm:h-[11px] w-[7px] h-[7px] bg-[#EBEF05] rounded-full border border-1 border-[#BDC007]" />
            <p className="text-[7px] sm:text-[11px]">41% - 80%</p>
          </div>
          <div className="flex items-center gap-[8px]">
            <div className="sm:w-[11px] sm:h-[11px] w-[7px] h-[7px] bg-[#d3fad5] rounded-full border border-1 border-[#19DC24]" />
            <p className="text-[7px] sm:text-[11px]">81% - 100%</p>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-[20px] text-center mt-[20px]">
          {daysOfWeek.map((day) => (
            <div
              key={day}
              className={`${
                DarkMode && "text-white"
              } sm:text-[14px] text-[9px] font-medium`}
            >
              {day}
            </div>
          ))}
          {days.map((dayObj, index) => (
            <div
              key={index}
              className={`py-2 sm:w-[30px] sm:h-[31px] w-[20px] h-[20px] mx-auto rounded-full sm:text-[14px] text-[9px] font-medium flex items-center justify-center 
                ${
                  dayObj.day === 1 &&
                  dayObj.currentMonth &&
                  `${
                    DarkMode ? "bg-[#4a2d47]" : "bg-[#f6d9d9]"
                  } border border-1 border-[#DE0707]`
                }
                ${
                  dayObj.day === 2 &&
                  dayObj.currentMonth &&
                  ` ${
                    DarkMode ? "bg-[#515231]" : "bg-[#d6f9c3]"
                  } bg-[#fafbc1] border border-1 border-[#BDC007]`
                }
                ${
                  dayObj.day === 24 &&
                  dayObj.currentMonth &&
                  ` ${
                    DarkMode ? "bg-[#2b4e32]" : "bg-[#d6f9c3]"
                  } border border-1 border-[#0ADA15]`
                }
               ${
                 dayObj.currentMonth
                   ? DarkMode
                     ? "text-white"
                     : "text-black"
                   : "text-[#C5C2C2]"
               }`}
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
