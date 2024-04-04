import React from "react";
import Home from "./Home";
import Header from "../components/Header";

const HomePage = () => {
  return (
    <div className="lg:h-screen bg-[#FAFCFD] dark:bg-[#0D0D0D]">
      <Header bgColor="bg-[#FAFCFD]" />
      <Home />
    </div>
  );
};

export default HomePage;
