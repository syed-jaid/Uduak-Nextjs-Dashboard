import React, { useState } from "react";

const Dropdown = ({ item, DarkMode }) => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <div
      className={`border-b border-1 ${
        DarkMode ? " border-[#4d4d4d]" : "border-[#f2f2f2]"
      } `}
    >
      <div
        onClick={() => setDropdown(!dropdown)}
        className="flex justify-between items-center cursor-pointer px-[24px] py-[14px]"
      >
        <div className="flex justify-start items-center cursor-pointer">
          <img className="text-[#495057]" src={item.icon} alt=" card image" />
          <p
            className={`ml-[10px] text-[12px] text-nowrap ${
              DarkMode ? "text-[#F7EDED]" : "text-[#9599AD]"
            } `}
          >
            {item.label}
          </p>
        </div>
        {item.dropdown && <img src="Image/DArow.svg" alt=" card image" />}
      </div>
      {dropdown && item?.dropdown && (
        <div>
          {item?.dropdown.map((option, index) => (
            <div
              key={index}
              className={`overflow-hidden transition-all duration-300 px-[24px] py-[10px] text-[12px] text-nowrap ${
                DarkMode ? "text-[#F7EDED]" : "text-[#9599AD]"
              } ${dropdown ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}
            >
              <p>{option}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
