import React from "react";

const SaidMenu = () => {
  return (
    <div className="bg-gray-200 max-w-[319px] p-">
      <div className="flex justify-end ">
        <img
          className="bg-red-300 p-5 rounded-full"
          src="Image/crossIcon.svg"
          alt="cross"
        ></img>
      </div>
      <div className="flex justify-start items-center bg-green-300">
        <img className="" src="Image/Dashboards.svg" alt=""></img>
        <h3 className="text-[#0070C0]"> Dahsboards</h3>
      </div>
    </div>
  );
};

export default SaidMenu;
