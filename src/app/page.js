"use client";
import React, { useState } from "react";
import HeaderIndex from "./components/Header/HeaderIndex";
import HeaderNav from "./components/Header/HeaderNav";
import { Inter } from "next/font/google";
import DashboardIndex from "./components/DashboardIndex";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

const page = () => {
  const [DarkMode, setDarkMode] = useState(false);
  return (
    <div
      className={`${DarkMode ? "bg-[#111131]" : ""} ${
        inter.className
      } cursor-pointer`}
    >
      <HeaderIndex {...{ DarkMode, setDarkMode }} />
      <HeaderNav {...{ DarkMode }} />
      <DashboardIndex {...{ DarkMode }} />
      <Footer />
    </div>
  );
};

export default page;
