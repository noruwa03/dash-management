import Link from "next/link";
import React from "react";

const ResetPasswordSuccess = () => {
  return (
    <>
      {" "}
      <div className="fixed top-0 left-0 h-screen w-full bg-[#1D3045]/95 dark:bg-[#171717]/95  z-50">
        <div className="lg:w-2/5 w-[92%] fixed top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] sm:p-8 p-4 bg-white dark:bg-[#000000] rounded-lg">
          <div className="grid place-content-center mb-4">
            <svg
              width="100"
              height="100"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M87.5 18.75C85.75 18.75 84.1875 19.4375 83.0625 20.5625L37.5 66.1875L16.9375 45.5625C15.8125 44.4375 14.25 43.75 12.5 43.75C9.0625 43.75 6.25 46.5625 6.25 50C6.25 51.75 6.9375 53.3125 8.0625 54.4375L33.0625 79.4375C34.1875 80.5625 35.75 81.25 37.5 81.25C39.25 81.25 40.8125 80.5625 41.9375 79.4375L91.9375 29.4375C93.0625 28.3125 93.75 26.75 93.75 25C93.75 21.5625 90.9375 18.75 87.5 18.75Z"
                fill="#3366FF"
              />
            </svg>
          </div>
          <p className="text-xl text-center text-[#3366FF] font-medium">
            Congratulations!
          </p>
          <div className="font-medium text-base text-center text-[#1E1E1E] dark:text-[#FBFAFC] dark:font-normal my-5">
            Your password has been reset successfully!
          </div>
          <div className="w-5/5">
            <Link
              href="/signin"
              className="block text-center uppercase w-full bg-[#3366FF] py-3 outline-none text-white text-sm font-medium mt-4 rounded-lg"
            >
              login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPasswordSuccess;
