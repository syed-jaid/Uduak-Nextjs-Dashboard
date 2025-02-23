import React from "react";
import HeaderIndex from "./components/Header/HeaderIndex";
import HeaderNav from "./components/Header/HeaderNav";
import { Inter } from "next/font/google";
import DashboardIndex from "./components/DashboardIndex";
import Footer from "./components/Footer";
import SaidMenu from "./components/SaidMenu";

const inter = Inter({ subsets: ["latin"] });

const page = () => {
  return (
    <div className={inter.className}>
      <HeaderIndex />
      <HeaderNav />
      <SaidMenu />

      <DashboardIndex />
      <Footer />
    </div>
  );
};

export default page;
