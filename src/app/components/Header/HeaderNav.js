import React from "react";

const HeaderNav = () => {
  return (
    <div>
      <div className="bg-white py-[16px] flex justify-center items-center">
        <div className="w-full px-[20px]">
          <div className="max-w-[1142px] w-[100%] mx-auto border border-1 border-[#D6D6D6] md:rounded-full rounded-[14px] px-[19px] py-[15px] flex justify-center items-center gap-[16px] flex-wrap">
            <div className="flex justify-between items-center cursor-pointer">
              <img src="Image/Dashboards.svg" alt=" card image" />
              <p className="ml-[10px] text-[12px] text-nowrap text-[#0070C0]">
                Dashboards
              </p>
            </div>
            <div className="flex justify-between items-center cursor-pointer">
              <img src="Image/Reservations.svg" alt=" card image" />
              <p className="ml-[10px] text-[12px] text-nowrap mr-[6px] text-[#6C7989]">
                Reservations
              </p>
              <img src="Image/DArow.svg" alt=" card image" />
            </div>
            <div className="flex justify-between items-center cursor-pointer">
              <img src="Image/Rooms.svg" alt=" card image" />
              <p className="ml-[10px] text-[12px] text-nowrap mr-[6px] text-[#6C7989]">
                Rooms
              </p>
              <img src="Image/DArow.svg" alt=" card image" />
            </div>
            <div className="flex justify-between items-center cursor-pointer">
              <img src="Image/Guest.svg" alt=" card image" />
              <p className="ml-[10px] text-[12px] text-nowrap mr-[6px] text-[#6C7989]">
                Guests
              </p>
              <img src="Image/DArow.svg" alt=" card image" />
            </div>
            <div className="flex justify-between items-center cursor-pointer">
              <img src="Image/__before.svg" alt=" card image" />
              <p className="ml-[10px] text-[12px] text-nowrap mr-[6px] text-[#6C7989]">
                Inventory
              </p>
              <img src="Image/DArow.svg" alt=" card image" />
            </div>
            <div className="flex justify-between items-center cursor-pointer">
              <img src="Image/Order.svg" alt=" card image" />
              <p className="ml-[10px] text-[12px] text-nowrap mr-[6px] text-[#6C7989]">
                Room Service
              </p>
              <img src="Image/DArow.svg" alt=" card image" />
            </div>
            <div className="flex justify-between items-center cursor-pointer">
              <img src="Image/Service.svg" alt=" card image" />
              <p className="ml-[10px] text-[12px] text-nowrap mr-[6px] text-[#6C7989]">
                Service Requests
              </p>
              <img src="Image/DArow.svg" alt=" card image" />
            </div>
            <div className="flex justify-between items-center cursor-pointer">
              <img src="Image/Chat.svg" alt=" card image" />
              <p className="ml-[10px] text-[12px] text-nowrap mr-[6px] text-[#6C7989]">
                Chat
              </p>
            </div>
            <div className="flex justify-between items-center cursor-pointer">
              <img src="Image/Admin.svg" alt=" card image" />
              <p className="ml-[10px] text-[12px] text-nowrap mr-[6px] text-[#6C7989]">
                Administration
              </p>
              <img src="Image/DArow.svg" alt=" card image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderNav;
