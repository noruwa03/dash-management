import React from "react";
import Signin from "./Signin";
import Header from "@/app/components/Header";

const SigninPage = () => {
  return (
    <div className="sm:bg-[#F5F5F5] bg-[#FAFCFD] sm:dark:bg-[#232327] dark:bg-[#0D0D0D] dark:red-400">
      <Header />
      <Signin />
    </div>
  );
};

export default SigninPage;
