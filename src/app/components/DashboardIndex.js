import CalendarIndex from "./Calendar/CalendarIndex";
import TopCardsPopup from "./cards/TopcardsPopup";
import BottomCard from "./cards/BottomCard";

const DashboardIndex = ({ DarkMode }) => {
  const cardData = [
    {
      title: "TOTAL EARNINGS",
      value: "$28K",
      percentage: "+16.24%",
      icon: "image/green-arrow.svg",
      color: "#04D362",
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
      color: "#04D362",
      dropdownOptions: ["Open orders", "View all"],
      iconBgColor: "#FF7272",
      iconSrc: "Image/Icon(3).svg",
    },
    {
      title: "WALLET",
      value: "$101K",
      percentage: "+29.08%",
      icon: "image/green-arrow.svg",
      color: "#04D362",
      dropdownOptions: ["Withdraw", "View"],
      iconBgColor: "#D86ECC",
      iconSrc: "Image/Icon.svg",
    },
  ];

  const cardsData = [
    {
      image: "Image/card-e.svg",
      title: "OPEN DINING ORDERS",
      count: 12,
      borderColor: "border-[#EDEDED]",
      textColor: "text-[#F10A4B]",
      subText: "120 \n Mins",
    },
    {
      image: "Image/card-a.svg",
      title: "OPEN LAUNDRY ORDERS",
      count: 12,
      borderColor: "border-[#389307]",
      textColor: "text-[#389307]",
      subText: "120 \n Mins",
    },
    {
      image: "Image/card-b.svg",
      title: "OPEN SERVICE REQUEST",
      count: 12,
      borderColor: "border-[#389307]",
      textColor: "text-[#389307]",
      subText: "32 \n Mins",
    },
    {
      image: "Image/card-c.svg",
      title: "AVAILABLE ROOMS",
      count: 12,
      borderColor: "border-[#389307]",
      textColor: "text-[#389307]",
      subText: "10/10 \n 100%",
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
            <div
              className={`h-[40px] w-[214px] sm:flex justify-center items-center rounded-l-[8px] hidden ${
                DarkMode
                  ? "bg-[#111131] border border-1 border-[#262648]"
                  : "bg-white"
              }`}
            >
              <p
                className={`text-[12px] font-medium ${
                  DarkMode && "text-white"
                }`}
              >
                01 Jan, 2024 to 31 Jan, 2024
              </p>
            </div>
            <div className="bg-[#D961AB] h-[38px] w-[35px] flex justify-center items-center rounded-l-[8px] sm:rounded-l-[0] rounded-r-[8px]">
              <img src="image/calender.svg" alt="card image" />
            </div>
          </div>
        </div>
        {/* 4 in line  */}
        <div className="flex items-center justify-between gap-[12px] overflow-x-auto pb-[16px]">
          {cardData.map((card, index) => (
            <TopCardsPopup key={index} card={card} DarkMode={DarkMode} />
          ))}
        </div>

        <div className="block lg:flex items-center w-full gap-[12px] mt-[8px]">
          {/* 2 by 2  */}
          <div className="lg:grid grid-cols-2 gap-[12px] w-full flex items-center justify-between overflow-x-auto pb-[16px] lg:pb-[0px]">
            {cardsData.map((card, index) => (
              <BottomCard key={index} {...card} DarkMode={DarkMode} />
            ))}
          </div>

          <CalendarIndex {...{ DarkMode }} />
        </div>
      </div>
    </div>
  );
};

export default DashboardIndex;
