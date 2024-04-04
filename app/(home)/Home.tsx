"use client";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Home = () => {
  const [query, setQuery] = useState("");
  const items = [
    {
      avatar: "/images/avatar_one.png",
      name: "James T.",
      text: "There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are lots stores and Supermarkets.",
      location: "VGC, Lekki",
      category: "power",
    },
    {
      name: "Adeniji O.",
      avatar: "/images/avatar_two.png",
      text: "There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are lots stores and Supermarkets.",
      location: "Ikate, Lekki",
      category: "water",
    },
    {
      name: "Osborne W.",
      avatar: "/images/avatar_one.png",
      text: "There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are lots stores and Supermarkets.",
      location: "Elegushi, Lekki",
      category: "power",
    },
    {
      name: "Oghogho A.",
      avatar: "/images/avatar_two.png",
      text: "There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are lots stores and Supermarkets.",
      location: "Badore, Ajah",
      category: "traffic",
    },
    {
      name: "Felix M.",
      avatar: "/images/avatar_one.png",
      text: "There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are lots stores and Supermarkets.",
      location: "Keffi, Ikoyi",
      category: "network",
    },
  ];

  const handleSearch = (evt: any) => {
    setQuery(evt.target.value);
  };

  const router = useRouter();

  const findLocation = () => {
    if (query.length > 0) {
      router.push(`/search?q=${query.toLowerCase()}`);
    }
  };
  return (
    <>
      <div className="lg:px-16 sm:px-8 px-4 lg:py-0 sm:py-20 py-16">
        <div className="grid grid-cols-6 gap-8">
          <div className="lg:col-span-3 col-span-6 grid place-content-center lg:mb-0 mb-8">
            {" "}
            <div className="lg:w-4/5 w-5/5">
              {" "}
              <h1 className="font-medium lg:text-6xl sm:text-4xl text-3xl dark:text-[#FBFAFC]">
                Find a place you will love to live!
              </h1>
              <p className="my-8 lg:text-lg text-base dark:text-[#FBFAFC]">
                See through the lenses of people who have lived or visited the
                neighbourhood you might have in mind.
              </p>
              <div className="relative">
                <input
                  type="search"
                  name="query"
                  className="block w-full mt-1 outline-none border-[1px] bg-[#F3F7FE] border-[#D4DCF1] focus:border-[#557FF2] pl-10 pr-4 lg:py-[0.55rem] py-3 rounded-md placeholder:text-[#484851] placeholder:font-normal placeholder:text-sm dark:placeholder:text-[#999999] dark:bg-[#242428] dark:border-[#242428] dark:text-[#FBFAFC]"
                  placeholder="Enter Address"
                  value={query}
                  onChange={handleSearch}
                  required
                />
                <div className="absolute inset-y-0 left-0 flex items-center px-4 z-10 text-gray-600">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.68945 0C11.9293 0 15.3781 3.3727 15.3781 7.51907C15.3781 9.47532 14.6104 11.2595 13.3542 12.5986L15.8261 15.0109C16.0574 15.2371 16.0582 15.6031 15.8269 15.8294C15.7116 15.9436 15.5592 16 15.4076 16C15.2568 16 15.1052 15.9436 14.9892 15.8309L12.4874 13.3912C11.1714 14.4219 9.5028 15.0389 7.68945 15.0389C3.44955 15.0389 0 11.6655 0 7.51907C0 3.3727 3.44955 0 7.68945 0ZM7.68945 1.15821C4.10251 1.15821 1.18433 4.01125 1.18433 7.51907C1.18433 11.0269 4.10251 13.8807 7.68945 13.8807C11.2756 13.8807 14.1938 11.0269 14.1938 7.51907C14.1938 4.01125 11.2756 1.15821 7.68945 1.15821Z"
                      fill="#78828A"
                    />
                  </svg>
                </div>
              </div>
              <button
                onClick={findLocation}
                className="bg-[#3366FF] py-[0.5rem] px-8 outline-none text-white text-base uppercase font-normal mt-6 rounded-md"
              >
                Search
              </button>
            </div>
          </div>
          <div className="lg:col-span-3 col-span-6 lg:h-[80vh] h-full px-1 overflow-hidden bg-gradient-to-b from-[#F5F5F5] to-[#FFFFFF] dark:bg-gradient-to-b dark:from-[#F5F5F5]/0 dark:to-[#FFFFFF]/0 flex sm:flex-row flex-col items-center justify-between gap-6 relative">
            <div className="h-14 w-full bg-gradient-to-t from-[#FAFCFD]/40 to-[#FFFFFF] dark:bg-gradient-to-t dark:from-[#000]/20 dark:to-[#000] absolute top-0 left-0 z-10"></div>
            <div className="h-14 w-full bg-gradient-to-b from-[#FAFCFD]/40 to-[#FFFFFF] dark:bg-gradient-to-b dark:from-[#000]/20 dark:to-[#000] absolute bottom-0 left-0 z-10"></div>
            <div className="sm:w-[50%] w-[100%]">
              <div className="h-[550px]">
                <div className="overflow-hidden group flex flex-col gap-6">
                  <ul className="animate-loop-scroll group-hover:paused flex flex-col gap-6">
                    {items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-white dark:bg-[#18181B] dark:text-[#FBFAFC] shadow-[0_0px_4px_-1.76px_rgba(0,0,0,0.3)] rounded-xl p-4"
                      >
                        <div className="flex flex-row items-center justify-between">
                          <div className="flex flex-row items-center gap-3">
                            <Image
                              src={item.avatar}
                              alt="Image"
                              priority={true}
                              unoptimized={true}
                              width={50}
                              height={50}
                              className="w-8 h-8 rounded-full"
                            />
                            <p className="text-xs font-medium">
                              {item.name}
                              <span className="font-normal block text-[0.8em] text-gray-400">
                                5 months ago
                              </span>
                            </p>
                          </div>
                          <p className="text-xs font-medium">
                            {item.location}
                            <span className="font-normal block text-[0.8em] text-gray-500">
                              <svg
                                width="60"
                                height="12"
                                viewBox="0 0 60 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M6 0L7.875 3.975L12 4.575L9 7.65L9.675 12L6 9.975L2.325 12L3 7.65L0 4.575L4.125 3.975L6 0Z"
                                  fill="#FABB07"
                                />
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M18 0L19.875 3.975L24 4.575L21 7.65L21.675 12L18 9.975L14.325 12L15 7.65L12 4.575L16.125 3.975L18 0Z"
                                  fill="#FABB07"
                                />
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M30 0L31.875 3.975L36 4.575L33 7.65L33.675 12L30 9.975L26.325 12L27 7.65L24 4.575L28.125 3.975L30 0Z"
                                  fill="#FABB07"
                                />
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M42 0L43.875 3.975L48 4.575L45 7.65L45.675 12L42 9.975L38.325 12L39 7.65L36 4.575L40.125 3.975L42 0Z"
                                  fill="#D1D1D1"
                                />
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M54 0L55.875 3.975L60 4.575L57 7.65L57.675 12L54 9.975L50.325 12L51 7.65L48 4.575L52.125 3.975L54 0Z"
                                  fill="#D1D1D1"
                                />
                              </svg>
                            </span>
                          </p>
                        </div>
                        <p className="text-base my-2">{item.text}</p>
                        <div className="flex flex-row items-center justify-between mb-2">
                          <div className="flex flex-row items-center gap-3 text-xs text-gray-400">
                            <div className="flex flex-row items-center gap-1">
                              <svg
                                width="16"
                                height="14"
                                viewBox="0 0 16 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M15.99 8.62705C15.91 8.04705 15.26 7.66705 14.56 7.57705C14.41 7.55705 14.24 7.53705 14.07 7.52705C14.13 7.51705 14.18 7.51705 14.23 7.50705C14.94 7.42705 15.46 7.03705 15.38 6.45705C15.3 5.87705 14.65 5.49705 13.95 5.40705C13.61 5.36705 13.23 5.33705 12.82 5.31705C12.82 5.31705 12.82 5.31705 12.81 5.31705C12.57 5.30705 12.32 5.29705 12.06 5.29705C11.58 5.27705 10.95 5.25705 10.47 5.21705C10.11 5.18705 10.06 4.93705 10.1 4.68705C10.45 3.78705 10.64 2.77705 10.6 1.77705C10.56 0.927054 10 0.0970537 9.19 0.00705369C8.52 -0.0629463 8.03 0.397054 8.2 0.987054C8.76 2.91705 6.13 5.20705 4 6.49705V12.4971C5.66 13.5271 8.35 14.0571 11.48 13.9971C11.67 13.9971 11.87 13.9871 12.1 13.9771C12.13 13.9771 12.16 13.9771 12.19 13.9771C12.41 13.9671 12.65 13.9471 12.92 13.9271C13.63 13.8671 14.46 13.4171 14.42 12.8371C14.39 12.3271 14.02 12.0471 13.55 11.9071C13.82 11.8871 14.09 11.8671 14.34 11.8471C15.05 11.7871 15.58 11.3971 15.51 10.8071C15.45 10.2271 14.81 9.83705 14.1 9.73705C14.08 9.73705 14.05 9.72705 14.03 9.72705C14.32 9.70705 14.6 9.69705 14.84 9.67705C15.55 9.64705 16.07 9.20705 15.99 8.62705ZM2 6.00705H0V13.0071H2C2.55 13.0071 3 12.5571 3 12.0071V7.00705C3 6.44705 2.55 6.00705 2 6.00705Z"
                                  fill="#8F95B2"
                                />
                              </svg>
                              24
                            </div>
                            <div className="flex flex-row items-center gap-1">
                              <svg
                                width="16"
                                height="14"
                                viewBox="0 0 16 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M2 0.999998H0V8H2C2.55 8 3 7.55 3 7V2C3 1.45 2.55 0.999998 2 0.999998ZM15.99 5.38C16.07 4.8 15.55 4.36 14.84 4.33C14.59 4.32 14.32 4.3 14.03 4.28C14.05 4.28 14.08 4.27 14.1 4.27C14.8 4.17 15.44 3.78 15.51 3.2C15.57 2.62 15.05 2.23 14.34 2.16C14.09 2.14 13.82 2.12 13.55 2.1C14.02 1.95 14.39 1.68 14.42 1.17C14.46 0.589998 13.63 0.139998 12.92 0.0799978C12.65 0.0599978 12.41 0.0399978 12.19 0.0299978C12.16 0.0299978 12.13 0.0299978 12.1 0.0299978C11.87 0.00999781 11.67 0.00999781 11.48 -2.1943e-06C8.35 -0.0500022 5.66 0.469998 4 1.51V7.51C6.14 8.8 8.76 11.1 8.21 13.02C8.03 13.61 8.52 14.07 9.19 14C10 13.91 10.56 13.09 10.59 12.22C10.63 11.22 10.44 10.21 10.09 9.31C10.05 9.06 10.1 8.81 10.46 8.78C10.95 8.75 11.57 8.72 12.05 8.7C12.31 8.7 12.56 8.69 12.8 8.68H12.81C13.22 8.66 13.61 8.63 13.94 8.59C14.64 8.5 15.29 8.12 15.37 7.54C15.45 6.96 14.93 6.57 14.22 6.49C14.17 6.48 14.11 6.48 14.06 6.47C14.23 6.46 14.39 6.44 14.55 6.42C15.27 6.34 15.92 5.96 15.99 5.38Z"
                                  fill="#8F95B2"
                                />
                              </svg>
                              02
                            </div>
                            <div className="flex flex-row items-center gap-1">
                              <svg
                                width="14"
                                height="14"
                                viewBox="0 0 14 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M12.3083 0.875H1.69167C1.2425 0.875 0.875 1.2425 0.875 1.69167V9.04167C0.875 9.49083 1.2425 9.85833 1.69167 9.85833H3.325V12.3083C3.325 12.7575 3.6925 13.125 4.14167 13.125C4.37033 13.125 4.5745 13.0352 4.7215 12.8882L7.74317 9.85833H12.3083C12.7575 9.85833 13.125 9.49083 13.125 9.04167V1.69167C13.125 1.2425 12.7575 0.875 12.3083 0.875Z"
                                  fill="#8F95B2"
                                />
                              </svg>
                              125
                            </div>
                          </div>
                          <p
                            className={`text-xs px-3 pb-[3px] bg-red-400 ${
                              item.category === "traffic" &&
                              "bg-[#F5E9CB] text-[#594510] border-[1px] border-[#A07C22]"
                            } ${
                              item.category === "water" &&
                              "bg-[#D1E4FA] text-[#1F4781] border-[1px] border-[#2863B8]"
                            }  ${
                              item.category === "power" &&
                              "bg-[#F66A57] text-[#101012] border-[1px] border-[#F66A57]"
                            } ${
                              item.category === "network" &&
                              "bg-[#FCDCEF] text-[#101012] border-[1px] border-[#AD307B]"
                            } rounded-full`}
                          >
                            {item.category}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <ul
                    className="animate-loop-scroll group-hover:paused flex flex-col gap-6"
                    aria-hidden="true"
                  >
                    {items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-white dark:bg-[#18181B] dark:text-[#FBFAFC] shadow-[0_0px_4px_-1.76px_rgba(0,0,0,0.3)] rounded-xl p-4"
                      >
                        <div className="flex flex-row items-center justify-between">
                          <div className="flex flex-row items-center gap-3">
                            <Image
                              src={item.avatar}
                              alt="Image"
                              priority={true}
                              unoptimized={true}
                              width={50}
                              height={50}
                              className="w-8 h-8 rounded-full"
                            />
                            <p className="text-xs font-medium">
                              {item.name}
                              <span className="font-normal block text-[0.8em] text-gray-400">
                                5 months ago
                              </span>
                            </p>
                          </div>
                          <p className="text-xs font-medium">
                            {item.location}
                            <span className="font-normal block text-[0.8em] text-gray-500">
                              <svg
                                width="60"
                                height="12"
                                viewBox="0 0 60 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M6 0L7.875 3.975L12 4.575L9 7.65L9.675 12L6 9.975L2.325 12L3 7.65L0 4.575L4.125 3.975L6 0Z"
                                  fill="#FABB07"
                                />
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M18 0L19.875 3.975L24 4.575L21 7.65L21.675 12L18 9.975L14.325 12L15 7.65L12 4.575L16.125 3.975L18 0Z"
                                  fill="#FABB07"
                                />
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M30 0L31.875 3.975L36 4.575L33 7.65L33.675 12L30 9.975L26.325 12L27 7.65L24 4.575L28.125 3.975L30 0Z"
                                  fill="#FABB07"
                                />
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M42 0L43.875 3.975L48 4.575L45 7.65L45.675 12L42 9.975L38.325 12L39 7.65L36 4.575L40.125 3.975L42 0Z"
                                  fill="#D1D1D1"
                                />
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M54 0L55.875 3.975L60 4.575L57 7.65L57.675 12L54 9.975L50.325 12L51 7.65L48 4.575L52.125 3.975L54 0Z"
                                  fill="#D1D1D1"
                                />
                              </svg>
                            </span>
                          </p>
                        </div>
                        <p className="text-base my-2">{item.text}</p>
                        <div className="flex flex-row items-center justify-between mb-2">
                          <div className="flex flex-row items-center gap-3 text-xs text-gray-400">
                            <div className="flex flex-row items-center gap-1">
                              <svg
                                width="16"
                                height="14"
                                viewBox="0 0 16 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M15.99 8.62705C15.91 8.04705 15.26 7.66705 14.56 7.57705C14.41 7.55705 14.24 7.53705 14.07 7.52705C14.13 7.51705 14.18 7.51705 14.23 7.50705C14.94 7.42705 15.46 7.03705 15.38 6.45705C15.3 5.87705 14.65 5.49705 13.95 5.40705C13.61 5.36705 13.23 5.33705 12.82 5.31705C12.82 5.31705 12.82 5.31705 12.81 5.31705C12.57 5.30705 12.32 5.29705 12.06 5.29705C11.58 5.27705 10.95 5.25705 10.47 5.21705C10.11 5.18705 10.06 4.93705 10.1 4.68705C10.45 3.78705 10.64 2.77705 10.6 1.77705C10.56 0.927054 10 0.0970537 9.19 0.00705369C8.52 -0.0629463 8.03 0.397054 8.2 0.987054C8.76 2.91705 6.13 5.20705 4 6.49705V12.4971C5.66 13.5271 8.35 14.0571 11.48 13.9971C11.67 13.9971 11.87 13.9871 12.1 13.9771C12.13 13.9771 12.16 13.9771 12.19 13.9771C12.41 13.9671 12.65 13.9471 12.92 13.9271C13.63 13.8671 14.46 13.4171 14.42 12.8371C14.39 12.3271 14.02 12.0471 13.55 11.9071C13.82 11.8871 14.09 11.8671 14.34 11.8471C15.05 11.7871 15.58 11.3971 15.51 10.8071C15.45 10.2271 14.81 9.83705 14.1 9.73705C14.08 9.73705 14.05 9.72705 14.03 9.72705C14.32 9.70705 14.6 9.69705 14.84 9.67705C15.55 9.64705 16.07 9.20705 15.99 8.62705ZM2 6.00705H0V13.0071H2C2.55 13.0071 3 12.5571 3 12.0071V7.00705C3 6.44705 2.55 6.00705 2 6.00705Z"
                                  fill="#8F95B2"
                                />
                              </svg>
                              24
                            </div>
                            <div className="flex flex-row items-center gap-1">
                              <svg
                                width="16"
                                height="14"
                                viewBox="0 0 16 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M2 0.999998H0V8H2C2.55 8 3 7.55 3 7V2C3 1.45 2.55 0.999998 2 0.999998ZM15.99 5.38C16.07 4.8 15.55 4.36 14.84 4.33C14.59 4.32 14.32 4.3 14.03 4.28C14.05 4.28 14.08 4.27 14.1 4.27C14.8 4.17 15.44 3.78 15.51 3.2C15.57 2.62 15.05 2.23 14.34 2.16C14.09 2.14 13.82 2.12 13.55 2.1C14.02 1.95 14.39 1.68 14.42 1.17C14.46 0.589998 13.63 0.139998 12.92 0.0799978C12.65 0.0599978 12.41 0.0399978 12.19 0.0299978C12.16 0.0299978 12.13 0.0299978 12.1 0.0299978C11.87 0.00999781 11.67 0.00999781 11.48 -2.1943e-06C8.35 -0.0500022 5.66 0.469998 4 1.51V7.51C6.14 8.8 8.76 11.1 8.21 13.02C8.03 13.61 8.52 14.07 9.19 14C10 13.91 10.56 13.09 10.59 12.22C10.63 11.22 10.44 10.21 10.09 9.31C10.05 9.06 10.1 8.81 10.46 8.78C10.95 8.75 11.57 8.72 12.05 8.7C12.31 8.7 12.56 8.69 12.8 8.68H12.81C13.22 8.66 13.61 8.63 13.94 8.59C14.64 8.5 15.29 8.12 15.37 7.54C15.45 6.96 14.93 6.57 14.22 6.49C14.17 6.48 14.11 6.48 14.06 6.47C14.23 6.46 14.39 6.44 14.55 6.42C15.27 6.34 15.92 5.96 15.99 5.38Z"
                                  fill="#8F95B2"
                                />
                              </svg>
                              02
                            </div>
                            <div className="flex flex-row items-center gap-1">
                              <svg
                                width="14"
                                height="14"
                                viewBox="0 0 14 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M12.3083 0.875H1.69167C1.2425 0.875 0.875 1.2425 0.875 1.69167V9.04167C0.875 9.49083 1.2425 9.85833 1.69167 9.85833H3.325V12.3083C3.325 12.7575 3.6925 13.125 4.14167 13.125C4.37033 13.125 4.5745 13.0352 4.7215 12.8882L7.74317 9.85833H12.3083C12.7575 9.85833 13.125 9.49083 13.125 9.04167V1.69167C13.125 1.2425 12.7575 0.875 12.3083 0.875Z"
                                  fill="#8F95B2"
                                />
                              </svg>
                              125
                            </div>
                          </div>
                          <p
                            className={`text-xs px-3 pb-[3px] bg-red-400 ${
                              item.category === "traffic" &&
                              "bg-[#F5E9CB] text-[#594510] border-[1px] border-[#A07C22]"
                            } ${
                              item.category === "water" &&
                              "bg-[#D1E4FA] text-[#1F4781] border-[1px] border-[#2863B8]"
                            }  ${
                              item.category === "power" &&
                              "bg-[#F66A57] text-[#101012] border-[1px] border-[#F66A57]"
                            } ${
                              item.category === "network" &&
                              "bg-[#FCDCEF] text-[#101012] border-[1px] border-[#AD307B]"
                            } rounded-full`}
                          >
                            {item.category}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="sm:w-[50%] w-[100%] sm:block hidden">
              <div className="h-[550px]">
                <div className="overflow-hidden group flex flex-col gap-6">
                  <ul className="animate-loop-scroll-reverse group-hover:paused flex flex-col gap-6">
                    {items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-white dark:bg-[#18181B] dark:text-[#FBFAFC] shadow-[0_0px_4px_-1.76px_rgba(0,0,0,0.3)] rounded-xl p-4"
                      >
                        <div className="flex flex-row items-center justify-between">
                          <div className="flex flex-row items-center gap-3">
                            <Image
                              src={item.avatar}
                              alt="Image"
                              priority={true}
                              unoptimized={true}
                              width={50}
                              height={50}
                              className="w-8 h-8 rounded-full"
                            />
                            <p className="text-xs font-medium">
                              {item.name}
                              <span className="font-normal block text-[0.8em] text-gray-400">
                                5 months ago
                              </span>
                            </p>
                          </div>
                          <p className="text-xs font-medium">
                            {item.location}
                            <span className="font-normal block text-[0.8em] text-gray-500">
                              <svg
                                width="60"
                                height="12"
                                viewBox="0 0 60 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M6 0L7.875 3.975L12 4.575L9 7.65L9.675 12L6 9.975L2.325 12L3 7.65L0 4.575L4.125 3.975L6 0Z"
                                  fill="#FABB07"
                                />
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M18 0L19.875 3.975L24 4.575L21 7.65L21.675 12L18 9.975L14.325 12L15 7.65L12 4.575L16.125 3.975L18 0Z"
                                  fill="#FABB07"
                                />
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M30 0L31.875 3.975L36 4.575L33 7.65L33.675 12L30 9.975L26.325 12L27 7.65L24 4.575L28.125 3.975L30 0Z"
                                  fill="#FABB07"
                                />
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M42 0L43.875 3.975L48 4.575L45 7.65L45.675 12L42 9.975L38.325 12L39 7.65L36 4.575L40.125 3.975L42 0Z"
                                  fill="#D1D1D1"
                                />
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M54 0L55.875 3.975L60 4.575L57 7.65L57.675 12L54 9.975L50.325 12L51 7.65L48 4.575L52.125 3.975L54 0Z"
                                  fill="#D1D1D1"
                                />
                              </svg>
                            </span>
                          </p>
                        </div>
                        <p className="text-base my-2">{item.text}</p>
                        <div className="flex flex-row items-center justify-between mb-2">
                          <div className="flex flex-row items-center gap-3 text-xs text-gray-400">
                            <div className="flex flex-row items-center gap-1">
                              <svg
                                width="16"
                                height="14"
                                viewBox="0 0 16 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M15.99 8.62705C15.91 8.04705 15.26 7.66705 14.56 7.57705C14.41 7.55705 14.24 7.53705 14.07 7.52705C14.13 7.51705 14.18 7.51705 14.23 7.50705C14.94 7.42705 15.46 7.03705 15.38 6.45705C15.3 5.87705 14.65 5.49705 13.95 5.40705C13.61 5.36705 13.23 5.33705 12.82 5.31705C12.82 5.31705 12.82 5.31705 12.81 5.31705C12.57 5.30705 12.32 5.29705 12.06 5.29705C11.58 5.27705 10.95 5.25705 10.47 5.21705C10.11 5.18705 10.06 4.93705 10.1 4.68705C10.45 3.78705 10.64 2.77705 10.6 1.77705C10.56 0.927054 10 0.0970537 9.19 0.00705369C8.52 -0.0629463 8.03 0.397054 8.2 0.987054C8.76 2.91705 6.13 5.20705 4 6.49705V12.4971C5.66 13.5271 8.35 14.0571 11.48 13.9971C11.67 13.9971 11.87 13.9871 12.1 13.9771C12.13 13.9771 12.16 13.9771 12.19 13.9771C12.41 13.9671 12.65 13.9471 12.92 13.9271C13.63 13.8671 14.46 13.4171 14.42 12.8371C14.39 12.3271 14.02 12.0471 13.55 11.9071C13.82 11.8871 14.09 11.8671 14.34 11.8471C15.05 11.7871 15.58 11.3971 15.51 10.8071C15.45 10.2271 14.81 9.83705 14.1 9.73705C14.08 9.73705 14.05 9.72705 14.03 9.72705C14.32 9.70705 14.6 9.69705 14.84 9.67705C15.55 9.64705 16.07 9.20705 15.99 8.62705ZM2 6.00705H0V13.0071H2C2.55 13.0071 3 12.5571 3 12.0071V7.00705C3 6.44705 2.55 6.00705 2 6.00705Z"
                                  fill="#8F95B2"
                                />
                              </svg>
                              24
                            </div>
                            <div className="flex flex-row items-center gap-1">
                              <svg
                                width="16"
                                height="14"
                                viewBox="0 0 16 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M2 0.999998H0V8H2C2.55 8 3 7.55 3 7V2C3 1.45 2.55 0.999998 2 0.999998ZM15.99 5.38C16.07 4.8 15.55 4.36 14.84 4.33C14.59 4.32 14.32 4.3 14.03 4.28C14.05 4.28 14.08 4.27 14.1 4.27C14.8 4.17 15.44 3.78 15.51 3.2C15.57 2.62 15.05 2.23 14.34 2.16C14.09 2.14 13.82 2.12 13.55 2.1C14.02 1.95 14.39 1.68 14.42 1.17C14.46 0.589998 13.63 0.139998 12.92 0.0799978C12.65 0.0599978 12.41 0.0399978 12.19 0.0299978C12.16 0.0299978 12.13 0.0299978 12.1 0.0299978C11.87 0.00999781 11.67 0.00999781 11.48 -2.1943e-06C8.35 -0.0500022 5.66 0.469998 4 1.51V7.51C6.14 8.8 8.76 11.1 8.21 13.02C8.03 13.61 8.52 14.07 9.19 14C10 13.91 10.56 13.09 10.59 12.22C10.63 11.22 10.44 10.21 10.09 9.31C10.05 9.06 10.1 8.81 10.46 8.78C10.95 8.75 11.57 8.72 12.05 8.7C12.31 8.7 12.56 8.69 12.8 8.68H12.81C13.22 8.66 13.61 8.63 13.94 8.59C14.64 8.5 15.29 8.12 15.37 7.54C15.45 6.96 14.93 6.57 14.22 6.49C14.17 6.48 14.11 6.48 14.06 6.47C14.23 6.46 14.39 6.44 14.55 6.42C15.27 6.34 15.92 5.96 15.99 5.38Z"
                                  fill="#8F95B2"
                                />
                              </svg>
                              02
                            </div>
                            <div className="flex flex-row items-center gap-1">
                              <svg
                                width="14"
                                height="14"
                                viewBox="0 0 14 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M12.3083 0.875H1.69167C1.2425 0.875 0.875 1.2425 0.875 1.69167V9.04167C0.875 9.49083 1.2425 9.85833 1.69167 9.85833H3.325V12.3083C3.325 12.7575 3.6925 13.125 4.14167 13.125C4.37033 13.125 4.5745 13.0352 4.7215 12.8882L7.74317 9.85833H12.3083C12.7575 9.85833 13.125 9.49083 13.125 9.04167V1.69167C13.125 1.2425 12.7575 0.875 12.3083 0.875Z"
                                  fill="#8F95B2"
                                />
                              </svg>
                              125
                            </div>
                          </div>
                          <p
                            className={`text-xs px-3 pb-[3px] bg-red-400 ${
                              item.category === "traffic" &&
                              "bg-[#F5E9CB] text-[#594510] border-[1px] border-[#A07C22]"
                            } ${
                              item.category === "water" &&
                              "bg-[#D1E4FA] text-[#1F4781] border-[1px] border-[#2863B8]"
                            }  ${
                              item.category === "power" &&
                              "bg-[#F66A57] text-[#101012] border-[1px] border-[#F66A57]"
                            } ${
                              item.category === "network" &&
                              "bg-[#FCDCEF] text-[#101012] border-[1px] border-[#AD307B]"
                            } rounded-full`}
                          >
                            {item.category}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <ul
                    className="animate-loop-scroll-reverse group-hover:paused flex flex-col gap-6"
                    aria-hidden="true"
                  >
                    {items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-white dark:bg-[#18181B] dark:text-[#FBFAFC] shadow-[0_0px_4px_-1.76px_rgba(0,0,0,0.3)] rounded-xl p-4"
                      >
                        <div className="flex flex-row items-center justify-between">
                          <div className="flex flex-row items-center gap-3">
                            <Image
                              src={item.avatar}
                              alt="Image"
                              priority={true}
                              unoptimized={true}
                              width={50}
                              height={50}
                              className="w-8 h-8 rounded-full"
                            />
                            <p className="text-xs font-medium">
                              {item.name}
                              <span className="font-normal block text-[0.8em] text-gray-400">
                                5 months ago
                              </span>
                            </p>
                          </div>
                          <p className="text-xs font-medium">
                            {item.location}
                            <span className="font-normal block text-[0.8em] text-gray-400">
                              <svg
                                width="60"
                                height="12"
                                viewBox="0 0 60 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M6 0L7.875 3.975L12 4.575L9 7.65L9.675 12L6 9.975L2.325 12L3 7.65L0 4.575L4.125 3.975L6 0Z"
                                  fill="#FABB07"
                                />
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M18 0L19.875 3.975L24 4.575L21 7.65L21.675 12L18 9.975L14.325 12L15 7.65L12 4.575L16.125 3.975L18 0Z"
                                  fill="#FABB07"
                                />
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M30 0L31.875 3.975L36 4.575L33 7.65L33.675 12L30 9.975L26.325 12L27 7.65L24 4.575L28.125 3.975L30 0Z"
                                  fill="#FABB07"
                                />
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M42 0L43.875 3.975L48 4.575L45 7.65L45.675 12L42 9.975L38.325 12L39 7.65L36 4.575L40.125 3.975L42 0Z"
                                  fill="#D1D1D1"
                                />
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M54 0L55.875 3.975L60 4.575L57 7.65L57.675 12L54 9.975L50.325 12L51 7.65L48 4.575L52.125 3.975L54 0Z"
                                  fill="#D1D1D1"
                                />
                              </svg>
                            </span>
                          </p>
                        </div>
                        <p className="text-base my-2">{item.text}</p>
                        <div className="flex flex-row items-center justify-between mb-2">
                          <div className="flex flex-row items-center gap-3 text-xs text-gray-500">
                            <div className="flex flex-row items-center gap-1">
                              <svg
                                width="16"
                                height="14"
                                viewBox="0 0 16 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M15.99 8.62705C15.91 8.04705 15.26 7.66705 14.56 7.57705C14.41 7.55705 14.24 7.53705 14.07 7.52705C14.13 7.51705 14.18 7.51705 14.23 7.50705C14.94 7.42705 15.46 7.03705 15.38 6.45705C15.3 5.87705 14.65 5.49705 13.95 5.40705C13.61 5.36705 13.23 5.33705 12.82 5.31705C12.82 5.31705 12.82 5.31705 12.81 5.31705C12.57 5.30705 12.32 5.29705 12.06 5.29705C11.58 5.27705 10.95 5.25705 10.47 5.21705C10.11 5.18705 10.06 4.93705 10.1 4.68705C10.45 3.78705 10.64 2.77705 10.6 1.77705C10.56 0.927054 10 0.0970537 9.19 0.00705369C8.52 -0.0629463 8.03 0.397054 8.2 0.987054C8.76 2.91705 6.13 5.20705 4 6.49705V12.4971C5.66 13.5271 8.35 14.0571 11.48 13.9971C11.67 13.9971 11.87 13.9871 12.1 13.9771C12.13 13.9771 12.16 13.9771 12.19 13.9771C12.41 13.9671 12.65 13.9471 12.92 13.9271C13.63 13.8671 14.46 13.4171 14.42 12.8371C14.39 12.3271 14.02 12.0471 13.55 11.9071C13.82 11.8871 14.09 11.8671 14.34 11.8471C15.05 11.7871 15.58 11.3971 15.51 10.8071C15.45 10.2271 14.81 9.83705 14.1 9.73705C14.08 9.73705 14.05 9.72705 14.03 9.72705C14.32 9.70705 14.6 9.69705 14.84 9.67705C15.55 9.64705 16.07 9.20705 15.99 8.62705ZM2 6.00705H0V13.0071H2C2.55 13.0071 3 12.5571 3 12.0071V7.00705C3 6.44705 2.55 6.00705 2 6.00705Z"
                                  fill="#8F95B2"
                                />
                              </svg>
                              24
                            </div>
                            <div className="flex flex-row items-center gap-1">
                              <svg
                                width="16"
                                height="14"
                                viewBox="0 0 16 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M2 0.999998H0V8H2C2.55 8 3 7.55 3 7V2C3 1.45 2.55 0.999998 2 0.999998ZM15.99 5.38C16.07 4.8 15.55 4.36 14.84 4.33C14.59 4.32 14.32 4.3 14.03 4.28C14.05 4.28 14.08 4.27 14.1 4.27C14.8 4.17 15.44 3.78 15.51 3.2C15.57 2.62 15.05 2.23 14.34 2.16C14.09 2.14 13.82 2.12 13.55 2.1C14.02 1.95 14.39 1.68 14.42 1.17C14.46 0.589998 13.63 0.139998 12.92 0.0799978C12.65 0.0599978 12.41 0.0399978 12.19 0.0299978C12.16 0.0299978 12.13 0.0299978 12.1 0.0299978C11.87 0.00999781 11.67 0.00999781 11.48 -2.1943e-06C8.35 -0.0500022 5.66 0.469998 4 1.51V7.51C6.14 8.8 8.76 11.1 8.21 13.02C8.03 13.61 8.52 14.07 9.19 14C10 13.91 10.56 13.09 10.59 12.22C10.63 11.22 10.44 10.21 10.09 9.31C10.05 9.06 10.1 8.81 10.46 8.78C10.95 8.75 11.57 8.72 12.05 8.7C12.31 8.7 12.56 8.69 12.8 8.68H12.81C13.22 8.66 13.61 8.63 13.94 8.59C14.64 8.5 15.29 8.12 15.37 7.54C15.45 6.96 14.93 6.57 14.22 6.49C14.17 6.48 14.11 6.48 14.06 6.47C14.23 6.46 14.39 6.44 14.55 6.42C15.27 6.34 15.92 5.96 15.99 5.38Z"
                                  fill="#8F95B2"
                                />
                              </svg>
                              02
                            </div>
                            <div className="flex flex-row items-center gap-1">
                              <svg
                                width="14"
                                height="14"
                                viewBox="0 0 14 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M12.3083 0.875H1.69167C1.2425 0.875 0.875 1.2425 0.875 1.69167V9.04167C0.875 9.49083 1.2425 9.85833 1.69167 9.85833H3.325V12.3083C3.325 12.7575 3.6925 13.125 4.14167 13.125C4.37033 13.125 4.5745 13.0352 4.7215 12.8882L7.74317 9.85833H12.3083C12.7575 9.85833 13.125 9.49083 13.125 9.04167V1.69167C13.125 1.2425 12.7575 0.875 12.3083 0.875Z"
                                  fill="#8F95B2"
                                />
                              </svg>
                              125
                            </div>
                          </div>
                          <p
                            className={`text-xs px-3 pb-[3px] bg-red-400 ${
                              item.category === "traffic" &&
                              "bg-[#F5E9CB] text-[#594510] border-[1px] border-[#A07C22]"
                            } ${
                              item.category === "water" &&
                              "bg-[#D1E4FA] text-[#1F4781] border-[1px] border-[#2863B8]"
                            }  ${
                              item.category === "power" &&
                              "bg-[#F66A57] text-[#101012] border-[1px] border-[#F66A57]"
                            } ${
                              item.category === "network" &&
                              "bg-[#FCDCEF] text-[#101012] border-[1px] border-[#AD307B]"
                            } rounded-full`}
                          >
                            {item.category}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
