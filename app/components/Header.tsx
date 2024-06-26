"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ThemeSwitcher from "../theme/ThemeSwitcher";
import Search from "./Search";

type BgColor = {
  bgColor?: string;
  search?: boolean;
};

const Header = (Props: BgColor) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const handleChange = (evt: any) => {
    setIsLoggedIn(evt.target.checked);
  };
  return (
    <div
      className={`lg:px-16 sm:px-8 px-4 py-5 ${
        Props.bgColor
          ? `${Props.bgColor} dark:bg-transparent`
          : "bg-transparent"
      } backdrop-blur-md w-full sticky top-0 left-0 z-20`}
    >
      {" "}
      <div className="flex flex-row items-center justify-between w-full">
        <Link href="/">
          <svg
            width="92"
            height="30"
            viewBox="0 0 92 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="dark:[&>path]:fill-white"
          >
            <path
              d="M3.55 18.1C1.5 18.1 0.25 17.37 0.25 15.67V15.61H2.13V15.82C2.13 16.27 2.29 16.39 3.55 16.39C4.69 16.39 4.81 16.3 4.81 16C4.81 15.76 4.68 15.66 4.13 15.59L2.03 15.31C0.78 15.14 0.15 14.47 0.15 13.39C0.15 12.32 0.98 11.2 3.4 11.2C5.53 11.2 6.55 12.13 6.55 13.63V13.69H4.67V13.54C4.67 13.06 4.46 12.9 3.2 12.9C2.24 12.9 2.03 13.03 2.03 13.32C2.03 13.53 2.15 13.63 2.51 13.68L4.61 13.99C6.25 14.23 6.69 15.07 6.69 15.93C6.69 17.08 5.81 18.1 3.55 18.1ZM14.0159 18H12.1359V11.3H15.8459C17.4359 11.3 18.4359 12.21 18.4359 13.8C18.4359 15.39 17.4359 16.31 15.8459 16.31H14.0159V18ZM15.6359 12.99H14.0159V14.62H15.6359C16.2959 14.62 16.5659 14.49 16.5659 13.8C16.5659 13.12 16.2959 12.99 15.6359 12.99ZM27.4452 18.1C25.1152 18.1 23.7352 16.74 23.7352 14.65C23.7352 12.56 25.1152 11.2 27.4452 11.2C29.8352 11.2 31.1952 12.56 31.1952 14.65C31.1952 16.74 29.8352 18.1 27.4452 18.1ZM27.4452 16.3C28.8052 16.3 29.1952 15.98 29.1952 14.65C29.1952 13.32 28.8052 13 27.4452 13C26.0852 13 25.7352 13.32 25.7352 14.65C25.7352 15.98 26.0852 16.3 27.4452 16.3ZM40.7965 18H38.9165V12.99H36.5465V11.3H43.1565V12.99H40.7965V18ZM52.7105 18H50.8305V12.99H48.4605V11.3H55.0705V12.99H52.7105V18ZM62.2346 18H60.1246L63.0146 11.3H65.7046L68.6046 18H66.4446L65.9346 16.76H62.7546L62.2346 18ZM63.8546 14.13L63.4646 15.07H65.2446L64.8546 14.13L64.4146 13H64.2846L63.8546 14.13Z"
              fill="#101012"
            />
            <rect x="73" y="8.5" width="19" height="13" rx="2" fill="#5378F6" />
            <path
              d="M78.33 17.5H77.28V12.81H78.4L80.08 15.029L80.724 16.016H80.801L80.752 15.071V12.81H81.802V17.5H80.682L78.953 15.26L78.358 14.378H78.288L78.33 15.239V17.5ZM84.5711 17.57C83.8571 17.57 83.2924 17.353 82.8771 16.919C82.4618 16.4803 82.2541 15.8923 82.2541 15.155C82.2541 14.4177 82.4874 13.832 82.9541 13.398C83.4208 12.9593 84.0554 12.74 84.8581 12.74C85.5954 12.74 86.1788 12.9033 86.6081 13.23C87.0421 13.552 87.2591 13.993 87.2591 14.553V14.609H86.0901V14.553C86.0901 14.2777 85.9898 14.0747 85.7891 13.944C85.5931 13.8133 85.2734 13.748 84.8301 13.748C84.2934 13.748 83.9154 13.853 83.6961 14.063C83.4768 14.273 83.3671 14.637 83.3671 15.155C83.3671 15.673 83.4721 16.037 83.6821 16.247C83.8968 16.457 84.2631 16.562 84.7811 16.562C85.3224 16.562 85.6934 16.5107 85.8941 16.408C86.0948 16.3007 86.2021 16.0977 86.2161 15.799H84.6271V15.022H87.2661V17.5H86.2931V16.492H86.2371C86.0504 17.2107 85.4951 17.57 84.5711 17.57Z"
              fill="white"
            />
          </svg>
        </Link>

        {Props.search && (
          <div className="lg:block hidden lg:w-[50%]">
            <Search />
          </div>
        )}
        <ThemeSwitcher />

        <div className="flex flex-row items-center gap-5">
          <input type="checkbox" checked={isLoggedIn} onChange={handleChange} />

          {isLoggedIn ? (
            <>
              <div className="flex flex-row items-center gap-3">
                <p className="text-base dark:text-white font-medium lg:block hidden">
                  Welcome!
                </p>
                <Image
                  src="/images/avatar.png"
                  alt="Image"
                  priority={true}
                  unoptimized={true}
                  width={50}
                  height={50}
                  className="w-8 h-8 rounded-full"
                />
              </div>
            </>
          ) : (
            <Link
              href="/signin"
              className="uppercase sm:text-lg text-base font-medium text-[#557FF2]"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
