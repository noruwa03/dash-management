"use client";
import React from "react";
import Signup from "./Signup";
import Header from "@/app/components/Header";

const RegisterPage = () => {
  return (
    <div className="sm:bg-[#F5F5F5] bg-[#FAFCFD] dark:bg-[#0D0D0D]">
      <Header />
      <Signup />
    </div>
  );
};

export default RegisterPage;
