"use client";
import { getTheme } from "@/app/utils/getTheme";
import { useEffect } from "react";

const AppProvider = ({ children }: { children: React.ReactNode }) => {


  useEffect(() => {
    const theme = getTheme();
    switch (theme) {
      case "dark":
        document.documentElement.className = "dark";
        window.localStorage.setItem("theme", "dark");

        break;
      case "light":
        document.documentElement.className = "light";
        window.localStorage.setItem("theme", "light");

        break;
      default:
        window.localStorage.removeItem("theme");
        break;
    }
  }, []);
  return <>{children}</>;
};

export default AppProvider;
