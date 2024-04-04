"use client";
import React from "react";
import Header from "@/app/components/Header";
import Search from "./Search";

const page = () => {
  const searchPage = true;
  return (
    <div className="lg:h-screen h-full dark:bg-[#0D0D0D]">
      <Header bgColor="bg-[#F3F7FE]" search={searchPage} />
      <Search />
    </div>
  );
};

export default page;
