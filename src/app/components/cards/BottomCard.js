import React from "react";

const BottomCard = ({
  image,
  title,
  borderColor,
  textColor,
  subText,
  DarkMode,
}) => {
  return (
    <div
      className={`${
        DarkMode ? "bg-[#1d1d3f]" : "bg-white"
      }  rounded-[12px] px-[30px] w-full  lg:max-w-[276px] min-w-[339px] lg:min-w-[auto] lg:min-h-[230px] min-h-[200px] flex items-center shadow-md`}
    >
      <div className="w-full">
        <img src={image} alt="card image" />
        <p
          className={`${
            DarkMode ? "text-[#F3F3F3]" : "text-[#545454]"
          }  text-[12px] font-medium mt-[27px] mb-[20px]`}
        >
          {title}
        </p>
        <div className="flex items-center justify-between mt-[42px]">
          <h2
            className={`text-[40px] leading-[40px] font-bold ${
              DarkMode ? "text-white" : "text-[#002060]"
            }`}
          >
            12
          </h2>
          <div
            className={`border border-1 w-[56px] h-[50px] rounded-[4px] flex items-center justify-center ${
              DarkMode ? "border-[#474788]" : borderColor
            }`}
          >
            <p
              className={`text-[12px] text-center my-0 ${textColor}`}
              style={{ whiteSpace: "pre-line" }}
            >
              {subText}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomCard;
