import React, { useState, useRef, useEffect } from "react";

const TopCardsPopup = ({ card, DarkMode }) => {
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
    <div
      className={`rounded-[12px] p-[16px] w-full lg:min-w-[274px] min-w-[339px] min-h-[177px] relative shadow-md`}
      style={{ backgroundColor: card?.bg }}
    >
      {DarkMode ? (
        <>
          <img
            className="absolute top-0 left-0 z-0 rounded-tl-[12px]"
            src={card?.topSrc}
            alt="card image"
          />
          <img
            className="absolute bottom-0 right-0 z-0 rounded-br-[12px]"
            src={card?.bottomSrc}
            alt="card image"
          />
        </>
      ) : (
        <>
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
        </>
      )}
      <div className="w-full">
        <div className="flex justify-between mb-[56px]">
          <p
            className={`${
              DarkMode ? "text-white" : "text-[#545454]"
            } text-[13px]  font-medium z-10`}
          >
            {card.title}
          </p>
          <div className="relative" ref={dropdownRef}>
            {DarkMode ? (
              <img
                src="Image/charm_menu-kebab-white.svg"
                alt="card image"
                className="cursor-pointer action"
                onClick={() => setIsOpen(!isOpen)}
              />
            ) : (
              <img
                src="Image/charm_menu-kebab.svg"
                alt="card image"
                className="cursor-pointer action"
                onClick={() => setIsOpen(!isOpen)}
              />
            )}
            {isOpen && (
              <div
                className={`${
                  DarkMode
                    ? "bg-[#1D1D3F] text-white"
                    : "text-[#9599AD] bg-[#FCFCFC]"
                } flex flex-col gap-[25px] absolute right-[7px] top-[19px]  z-50 py-[27px] px-[25px] text-[13px] rounded-[7px] drop-shadow-md`}
              >
                {card.dropdownOptions.map((option, i) => (
                  <p key={i} className="text-nowrap">
                    {option}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
        <h1
          className={`${
            DarkMode ? "text-white" : "text-[#002060]"
          } text-[40px] leading-[45px] font-bold`}
        >
          {card.value}
        </h1>
        <div className="flex justify-between items-end w-full">
          <p
            className={`text-[11px] ${
              card.title === "BOOKINGS" ? "text-[#F10A4B]" : "text-[#04D362]"
            } ${card.title === "WALLET" && "underline underline-offset-2"}`}
          >
            {!(card.title === "WALLET") && card.percentage}

            {card.icon}
            {card.title === "WALLET" && card.percentage}
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
