"use client";

import React, { useState } from "react";
import CalendarIndex from "./Calendar/CalendarIndex";
import TopCardsPopup from "./cards/TopcardsPopup";

const DashboardIndex = () => {
  const cardData = [
    {
      title: "TOTAL EARNINGS",
      value: "$28K",
      percentage: "+16.24%",
      icon: "image/green-arrow.svg",
      color: "#23D976",
      dropdownOptions: ["Add payment", "All payments"],
      iconBgColor: "#45B1E1",
      iconSrc: "Image/Icon(1).svg",
    },
    {
      title: "BOOKINGS",
      value: "1,283",
      percentage: "-3.57%",
      icon: "image/down-arrow.svg",
      color: "#F10A4B",
      dropdownOptions: ["Check in", "View all"],
      iconBgColor: "#5D93FF",
      iconSrc: "Image/Icon(2).svg",
    },
    {
      title: "Services",
      value: "3,302",
      percentage: "+29.08%",
      icon: "image/green-arrow.svg",
      color: "#23D976",
      dropdownOptions: ["Open orders", "View all"],
      iconBgColor: "#FF7272",
      iconSrc: "Image/Icon(3).svg",
    },
    {
      title: "WALLET",
      value: "$101K",
      percentage: "+29.08%",
      icon: "image/green-arrow.svg",
      color: "#23D976",
      dropdownOptions: ["Withdraw", "View"],
      iconBgColor: "#D86ECC",
      iconSrc: "Image/Icon.svg",
    },
  ];

  return (
    <div className="px-[20px]">
      <div className="max-w-[1142px] mx-auto">
        <div className="flex justify-between items-end mt-[32px] mb-[26px]">
          <div>
            <h6 className="text-[16px] text-[#495057] font-semibold">
              Good Morning, Uduak!
            </h6>
            <p className="text-[14px text-[#95a0ac]">
              Here are the insights for today
            </p>
          </div>
          <div className="flex justify-center items-center">
            <div className="bg-white h-[40px] w-[214px] flex justify-center items-center rounded-l-[8px]">
              <p className="text-[12px] font-medium">
                01 Jan, 2024 to 31 Jan, 2024
              </p>
            </div>
            <div className="bg-[#D961AB] h-[41px] w-[35px] flex justify-center items-center rounded-r-[8px]">
              <img src="image/calender.svg" alt="card image" />
            </div>
          </div>
        </div>
        {/* 4 in line  */}
        <div className="flex items-center justify-between gap-[12px] overflow-x-auto pb-[16px]">
          {cardData.map((card, index) => (
            <TopCardsPopup key={index} card={card} />
          ))}
        </div>

        <div className="flex items-center w-full gap-[12px] mt-[8px]">
          {/* 2 by 2  */}
          <div className="grid grid-cols-2 gap-[12px] w-full">
            <div className="bg-white rounded-[12px] px-[30px] w-full max-w-[276px] min-h-[230px] flex items-center shadow-md">
              <div className="w-full">
                <img
                  // src="https://i.ibb.co.com/wZkxqhm6/card1.png"
                  src="Image/card-e.svg"
                  alt="card image"
                />
                <p className="text-[#545454] text-[12px] font-medium mt-[20px] mb-[30px]">
                  OPEN DINING ORDERS
                </p>
                <div className="flex items-center justify-between">
                  <h2 className="text-[40px] text-[#002060] leading-[40px] font-bold">
                    12
                  </h2>
                  <div className="border border-1 border-[#EDEDED] w-[56px] h-[50px] rounded-[4px] flex items-center justify-center">
                    <p className="text-[12px] text-[#F10A4B] text-center my-0">
                      120 <br /> Mins
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-[12px] px-[30px] w-full max-w-[276px] min-h-[230px] flex items-center shadow-md">
              <div className="w-full">
                <img
                  // src="https://i.ibb.co.com/0RQ3zQ6m/card2.png"
                  src="Image/card-a.svg"
                  alt="card image"
                />
                <p className="text-[#545454] text-[12px] font-medium mt-[20px] mb-[30px]">
                  OPEN LAUNDRY ORDERS
                </p>
                <div className="flex items-center justify-between">
                  <h2 className="text-[40px] text-[#002060] leading-[40px] font-bold">
                    12
                  </h2>
                  <div className="border border-1 border-[#389307] w-[56px] h-[50px] rounded-[4px] flex items-center justify-center">
                    <p className="text-[12px] text-[#389307] text-center my-0">
                      120 <br /> Mins
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-[12px] px-[30px] w-full max-w-[276px] min-h-[230px] flex items-center shadow-md">
              <div className="w-full">
                <img
                  // src="https://i.ibb.co.com/ds9rFX2X/card3.png"
                  src="Image/card-b.svg"
                  alt="card image"
                />
                <p className="text-[#545454] text-[12px] font-medium mt-[20px] mb-[30px]">
                  OPEN SERVICE REQUEST
                </p>
                <div className="flex items-center justify-between">
                  <h2 className="text-[40px] text-[#002060] leading-[40px] font-bold">
                    12
                  </h2>
                  <div className="border border-1 border-[#389307] w-[56px] h-[50px] rounded-[4px] flex items-center justify-center">
                    <p className="text-[12px] text-[#389307] text-center my-0">
                      32 <br /> Mins
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-[12px] px-[30px] w-full max-w-[276px] min-h-[230px] flex items-center shadow-md">
              <div className="w-full">
                <img
                  // src="https://i.ibb.co.com/DN7Jg8R/card4.png"
                  src="Image/card-c.svg"
                  alt="card image"
                />
                <p className="text-[#545454] text-[12px] font-medium mt-[20px] mb-[30px]">
                  AVAILABLE ROOMS
                </p>
                <div className="flex items-center justify-between">
                  <h2 className="text-[40px] text-[#002060] leading-[40px] font-bold">
                    12
                  </h2>
                  <div className="border border-1 border-[#389307] w-[56px] h-[50px] rounded-[4px] flex items-center justify-center">
                    <p className="text-[12px] text-[#389307] text-center my-0">
                      10/10 <br /> 100%
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <CalendarIndex />
        </div>
      </div>
    </div>
  );
};

export default DashboardIndex;
