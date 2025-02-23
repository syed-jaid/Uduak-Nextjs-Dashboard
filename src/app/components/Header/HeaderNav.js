"use client";

import React, { useState } from "react";
import NavLinks from "./NavLinks";

const HeaderNav = () => {
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
    <div>
      <div className="bg-white py-[16px] flex justify-center items-center">
        <div className="w-full px-[20px]">
          <div className="max-w-[1142px] w-[100%] mx-auto border border-1 border-[#D6D6D6] md:rounded-full rounded-[14px] px-[19px] py-[15px] flex justify-center items-center gap-[16px] flex-wrap">
            {/* -------- */}
            <div className="flex justify-between items-center cursor-pointer">
              <img src="Image/Dashboards.svg" alt=" card image" />
              <p className="ml-[10px] text-[12px] text-nowrap text-[#0070C0]">
                Dashboards
              </p>
            </div>
            {/* -------- */}
            {menuItems.map((item, index) => (
              <NavLinks key={index} item={item} />
            ))}
            {/* -------- */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderNav;
