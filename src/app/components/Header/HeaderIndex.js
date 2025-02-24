import React, { useState } from "react";
import { MdLightMode } from "react-icons/md";
import MobileDrawer from "../MobileDrawer";

const HeaderIndex = ({ DarkMode, setDarkMode }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="bg-[#002060] px-[20px]">
        <div className="max-w-[1290px] min-h-[88px] mx-auto flex justify-between items-center">
          <div className="sm:block hidden">
            <img src="Image/logo.svg" alt="" />
          </div>
          <div className="block sm:hidden flex justify-between items-center gap-[10px]">
            <img
              onClick={() => setOpen(true)}
              className="cursor-pointer"
              src="Image/Menuicon.svg"
              alt=""
            />
            <img src="Image/LogoMobile.svg" alt="" />
          </div>
          <div className="flex justify-between items-center cursor-pointer">
            {DarkMode ? (
              <MdLightMode
                onClick={() => setDarkMode(!DarkMode)}
                className="text-[25px] text-white"
              />
            ) : (
              <img
                onClick={() => setDarkMode(!DarkMode)}
                src="Image/dark-mode.svg"
                alt=""
              />
            )}
            <div className="px-[8px] sm:px-[15px] py-[10px] bg-[#002673] rounded-[8px] flex justify-between items-center ml-[14px] px[12px] py-[7px] ">
              <img
                className="mr-[9px] sm:mr-[0px]"
                src="Image/avatar-person.svg"
                alt=""
              />
              <h1 className="mx-[9px] text-white text-[16px] font-medium hidden sm:block">
                Uduak
              </h1>
              <img src="Image/uduak-down-arraw.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <MobileDrawer {...{ open, setOpen, DarkMode }} />
    </>
  );
};

export default HeaderIndex;
