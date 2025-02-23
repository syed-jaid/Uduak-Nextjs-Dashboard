import React from "react";

const HeaderIndex = () => {
  return (
    <div className="bg-[#002060] px-[20px]">
      <div className="max-w-[1290px] min-h-[88px] mx-auto flex justify-between items-center">
        <div>
          <img src="Image/logo.svg" alt="" />
        </div>

        <div className="flex justify-between items-center">
          <img src="Image/dark-mode.svg" alt="" />
          <div className="px-[15px] py-[10px] bg-[#002673] rounded-[8px] flex justify-between items-center ml-[14px] px[12px] py-[7px] ">
            <img className="" src="Image/avatar-person.svg" alt="" />
            <h1 className="mx-[9px] text-white text-[16px] font-medium">
              Uduak
            </h1>
            <img src="Image/uduak-down-arraw.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderIndex;
