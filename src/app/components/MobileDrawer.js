import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import Dropdown from "./Header/Dropdown";

export default function MobileDrawer({ open, setOpen, DarkMode }) {
  const menuItems = [
    {
      id: "reservations",
      label: "Reservations",
      icon: "Image/Reservations.svg",
      dropdown: ["Calendar", "View All", "Create Reservation", "Check-in"],
    },
    {
      id: "rooms",
      label: "Rooms",
      icon: "Image/Rooms.svg",
      dropdown: ["Calendar", "View All", "Add/Edit Rooms"],
    },
    {
      id: "guests",
      label: "Guests",
      icon: "Image/Guest.svg",
      dropdown: ["Dashboard", "View all guests"],
    },
    {
      id: "inventory",
      label: "Inventory",
      icon: "Image/__before.svg",
      dropdown: [
        "View/Update Stock",
        "Issue Stock",
        "Receive Stock",
        "Update Product",
        "Add Product",
      ],
    },
    {
      id: "room-service",
      label: "Room Service",
      icon: "Image/Order.svg",
      dropdown: [
        "Dining Orders",
        "Laundry Orders",
        "Dining Menu",
        "Laundry Slip",
      ],
    },
    {
      id: "service-requests",
      label: "Service Requests",
      icon: "Image/Service.svg",
      dropdown: ["View Requests"],
    },
    {
      id: "chat",
      label: "Chat",
      icon: "Image/Chat.svg",
      hasDropdown: false,
    },
    {
      id: "admin",
      label: "Administration",
      icon: "Image/Admin.svg",
      dropdown: ["Team", "Business Settings", "Money", "Wallet"],
    },
  ];
  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 transition-opacity duration-500 ease-in-out data-closed:opacity-0"
      />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full">
            <DialogPanel
              transition
              className="pointer-events-auto relative w-screen max-w-[320px] transform transition duration-500 ease-in-out data-closed:translate-x-full sm:duration-700"
            >
              <div
                className={`${
                  DarkMode ? "bg-[#111131]" : " bg-white"
                } flex h-full flex-col shadow-xl relative px-[20px] pt-[58px]`}
              >
                <div
                  onClick={() => setOpen(false)}
                  className={`${
                    DarkMode ? "bg-[#B63B3B]" : "bg-[#E9E9E9]"
                  } w-[25px] h-[25px] rounded-full flex justify-center items-center absolute right-[19px] top-[24px] cursor-pointer`}
                >
                  {DarkMode ? (
                    <img src="image/closeWhite.svg" alt="" />
                  ) : (
                    <img src="image/closeBtn.svg" alt="" />
                  )}
                </div>
                <div>
                  <div
                    className={`${
                      DarkMode ? "border-[#4d4d4d]" : "border-[#f2f2f2]"
                    } flex justify-start items-center cursor-pointer px-[24px] py-[10px] border-b border-1 `}
                  >
                    <img src="Image/Dashboards.svg" alt=" card image" />
                    <p className="ml-[10px] text-[12px] text-nowrap text-[#0070C0]">
                      Dashboards
                    </p>
                  </div>
                  {menuItems?.map((item, index) => (
                    <Dropdown key={index} {...{ item, DarkMode }} />
                  ))}
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
