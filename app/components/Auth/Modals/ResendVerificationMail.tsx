import React from "react";

const ResendVerificationMail = () => {
  return (
    <>
      {" "}
      <div className="fixed top-0 left-0 h-screen w-full bg-[#1D3045]/95 dark:bg-[#171717]/95 z-50">
        <div className="lg:w-2/5 w-[92%] fixed top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] sm:p-8 p-4 bg-white dark:bg-[#000000] rounded-lg">
          <svg
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute sm:top-10 top-6 sm:right-8 right-4"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.41 8.5L12.7 5.21C12.89 5.03 13 4.78 13 4.5C13 3.95 12.55 3.5 12 3.5C11.72 3.5 11.47 3.61 11.29 3.79L8 7.09L4.71 3.79C4.53 3.61 4.28 3.5 4 3.5C3.45 3.5 3 3.95 3 4.5C3 4.78 3.11 5.03 3.29 5.21L6.59 8.5L3.3 11.79C3.11 11.97 3 12.22 3 12.5C3 13.05 3.45 13.5 4 13.5C4.28 13.5 4.53 13.39 4.71 13.21L8 9.91L11.29 13.2C11.47 13.39 11.72 13.5 12 13.5C12.55 13.5 13 13.05 13 12.5C13 12.22 12.89 11.97 12.71 11.79L9.41 8.5Z"
              fill="#3366FF"
            />
          </svg>

          <h1 className="text-center lg:text-lg text-2xl font-medium dark:text-[#FBFAFC] mb-5">
            Resend Verification mail
          </h1>
          <p className="lg:text-start text-center text-black dark:text-[#FBFAFC] font-medium">
            Please, enter your valid e-mail address
          </p>
          <div className="mt-5">
            <input
              type="text"
              name="email"
              className="block w-full mt-1 outline-none border-[1px] bg-[#F3F7FE] border-[#D4DCF1] dark:border-[#242428] focus:border-[#557FF2] px-4 lg:py-[0.55rem] py-3 rounded-md placeholder:text-black placeholder:font-medium placeholder:text-sm placeholder:dark:text-[#FBFAFC] dark:bg-[#242428]"
              placeholder="E-mail address"
              required
            />
          </div>

          <div className="w-5/5">
            <a
              href="/"
              className="block text-center uppercase w-full bg-[#3366FF] py-3 outline-none text-white text-sm font-medium mt-4 rounded-lg"
            >
              resend verification link
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResendVerificationMail;
