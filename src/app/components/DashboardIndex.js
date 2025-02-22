import React from "react";
import CalendarIndex from "./Calendar/CalendarIndex";

const DashboardIndex = () => {
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
              <img src="image/cal-img.svg" alt="" />
            </div>
          </div>
        </div>
        {/* 4 in line  */}
        <div className="flex items-center justify-between gap-[12px] overflow-x-auto pb-[16px]">
          <div className="bg-white rounded-[12px] p-[16px] w-full min-w-[274px] min-h-[177px] relative shadow-md">
            <img
              className="absolute top-0 left-0 z-0 rounded-tl-[12px]"
              src="Image/RectangleTop.svg"
              alt=""
            />
            <img
              className="absolute bottom-0 right-0 z-0 rounded-br-[12px]"
              src="Image/RectangleBot.png"
              alt=""
            />
            <div className="w-full">
              <div className="flex justify-between mb-[56px]">
                <p className="text-[13px] text-[#545454] font-medium z-10">
                  TOTAL EARNINGS
                </p>
                <img src="Image/charm_menu-kebab.svg" alt="" />
              </div>
              <h1 className="text-[#002060] text-[40px] leading-[45px] font-bold">
                $28K
              </h1>
              <div className="flex justify-between items-end w-full">
                <p className=" text-[#23D976] text-[11px]">
                  +16.24%
                  <img className="inline" src="image/green-arrow.svg" alt="" />
                </p>
                <div className="bg-[#45B1E1] z-10 w-[33px] h-[32px] rounded-[5px] flex items-center justify-center">
                  <img src="Image/Icon(1).svg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-[12px] p-[16px] w-full min-w-[274px] min-h-[177px] relative shadow-md">
            <img
              className="absolute top-0 left-0 z-0 rounded-tl-[12px]"
              src="Image/RectangleTop.svg"
              alt=""
            />
            <img
              className="absolute bottom-0 right-0 z-0 rounded-br-[12px]"
              src="Image/RectangleBot.png"
              alt=""
            />
            <div className="w-full">
              <div className="flex justify-between mb-[56px]">
                <p className="text-[13px] text-[#545454] font-medium z-10">
                  BOOKINGS
                </p>
                <img src="Image/charm_menu-kebab.svg" alt="" />
              </div>
              <h1 className="text-[#002060] text-[40px] leading-[45px] font-bold">
                1,283
              </h1>
              <div className="flex justify-between items-end w-full">
                <p className=" text-[#F10A4B] text-[11px]">
                  <img className="inline" src="image/down-arrow.svg" alt="" />{" "}
                  -3.57%
                </p>
                <div className="bg-[#5D93FF] z-10 w-[33px] h-[32px] rounded-[5px] flex items-center justify-center">
                  <img src="Image/Icon(2).svg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-[12px] p-[16px] w-full min-w-[274px] min-h-[177px] relative shadow-md">
            <img
              className="absolute top-0 left-0 z-0 rounded-tl-[12px]"
              src="Image/RectangleTop.svg"
              alt=""
            />
            <img
              className="absolute bottom-0 right-0 z-0 rounded-br-[12px]"
              src="Image/RectangleBot.png"
              alt=""
            />
            <div className="w-full">
              <div className="flex justify-between mb-[56px]">
                <p className="text-[13px] text-[#545454] font-medium z-10">
                  Services
                </p>
                <img src="Image/charm_menu-kebab.svg" alt="" />
              </div>
              <h1 className="text-[#002060] text-[40px] leading-[45px] font-bold">
                3,302
              </h1>
              <div className="flex justify-between items-end w-full">
                <p className=" text-[#23D976] text-[11px]">
                  <img className="inline" src="image/green-arrow.svg" alt="" />{" "}
                  +29.08%
                </p>
                <div className="bg-[#FF7272] z-10 w-[33px] h-[32px] rounded-[5px] flex items-center justify-center">
                  <img src="Image/Icon(3).svg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-[12px] p-[16px] w-full min-w-[274px] min-h-[177px] relative shadow-md">
            <img
              className="absolute top-0 left-0 z-0 rounded-tl-[12px]"
              src="Image/RectangleTop.svg"
              alt=""
            />
            <img
              className="absolute bottom-0 right-0 z-0 rounded-br-[12px]"
              src="Image/RectangleBot.png"
              alt=""
            />
            <div className="w-full">
              <div className="flex justify-between mb-[56px]">
                <p className="text-[13px] text-[#545454] font-medium z-10">
                  WALLET
                </p>
                <img src="Image/charm_menu-kebab.svg" alt="" />
              </div>
              <h1 className="text-[#002060] text-[40px] leading-[45px] font-bold">
                $101K
              </h1>
              <div className="flex justify-between items-end w-full">
                <p className=" text-[#23D976] text-[11px] underline underline-offset-2">
                  <img className="inline" src="image/green-arrow.svg" alt="" />{" "}
                  +29.08%
                </p>
                <div className="bg-[#D86ECC] z-10 w-[33px] h-[32px] rounded-[5px] flex items-center justify-center">
                  <img src="Image/Icon.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center w-full gap-[12px] mt-[8px]">
          {/* 2 by 2  */}
          <div className="grid grid-cols-2 gap-[12px] w-full">
            <div className="bg-white rounded-[12px] px-[30px] w-full max-w-[276px] min-h-[230px] flex items-center shadow-md">
              <div className="w-full">
                <img
                  src="image/fluent-emoji-high-contrast_man-in-tuxedo.svg"
                  alt=""
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
                <img src="image/avatar-sm2.svg" alt="" />
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
                <img src="image/avatar-sm3.svg" alt="" />
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
                <img src="image/avatar-sm4.svg" alt="" />
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
