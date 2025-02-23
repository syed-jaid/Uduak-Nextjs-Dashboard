import React, { useState, useRef, useEffect } from "react";

const TopCardsPopup = ({ card }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null); // Reference for dropdown

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="bg-white rounded-[12px] p-[16px] w-full min-w-[274px] min-h-[177px] relative shadow-md">
      <img
        className="absolute top-0 left-0 z-0 rounded-tl-[12px]"
        src="Image/RectangleTop.svg"
        alt="card image"
      />
      <img
        className="absolute bottom-0 right-0 z-0 rounded-br-[12px]"
        src="Image/RectangleBot.png"
        alt="card image"
      />
      <div className="w-full">
        <div className="flex justify-between mb-[56px]">
          <p className="text-[13px] text-[#545454] font-medium z-10">
            {card.title}
          </p>
          <div className="relative" ref={dropdownRef}>
            <img
              src="Image/charm_menu-kebab.svg"
              alt="card image"
              className="cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            />
            {isOpen && (
              <div className="flex flex-col gap-[25px] bg-[#FCFCFC] absolute right-[7px] z-50 top-[19px] py-[27px] px-[25px] text-[#9599AD] text-[13px] rounded-[7px] shadow-lg">
                {card.dropdownOptions.map((option, i) => (
                  <p key={i} className="text-nowrap">
                    {option}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
        <h1 className="text-[#002060] text-[40px] leading-[45px] font-bold">
          {card.value}
        </h1>
        <div className="flex justify-between items-end w-full">
          <p className={`text-[11px] ${card.color}`}>
            {card.percentage}
            <img className="inline" src={card.icon} alt="card image" />
          </p>
          <div
            className="z-10 w-[33px] h-[32px] rounded-[5px] flex items-center justify-center"
            style={{ backgroundColor: card.iconBgColor }}
          >
            <img src={card.iconSrc} alt="card image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCardsPopup;
