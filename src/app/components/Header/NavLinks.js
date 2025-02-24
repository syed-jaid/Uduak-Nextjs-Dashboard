import React, { useState } from "react";

const NavLinks = ({ item, DarkMode }) => {
  const [activeMenu, setActiveMenu] = useState(null);

  return (
    <div
      key={item.id}
      className="flex justify-between items-center cursor-pointer relative"
      onMouseEnter={() => setActiveMenu(item.id)}
      onMouseLeave={() => setActiveMenu(null)}
    >
      <img src={item.icon} alt={item.label} />
      <p className="ml-[10px] text-[12px] text-nowrap mr-[6px] text-[#6C7989]">
        {item.label}
      </p>

      {item.dropdown ? <img src="Image/DArow.svg" alt="arrow icon" /> : null}

      {/* Dropdown Menu */}
      {activeMenu === item.id && item.dropdown && (
        <div
          className={`${
            DarkMode ? "bg-[#1D1D3F] text-white" : "text-[#9599AD] bg-[#FCFCFC]"
          } flex flex-col gap-[25px] absolute top-[20px] left-1/2 -translate-x-1/2 z-50 py-[27px] px-[25px] text-[13px] rounded-[7px] drop-shadow-md`}
        >
          {item.dropdown.map((option, index) => (
            <p key={index} className="text-nowrap cursor-pointer">
              {option}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavLinks;
