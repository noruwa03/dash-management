import "../globals.css";
import type { Metadata } from "next";
import ThemeProvider from "@/app/providers/ThemeProvider";

export const metadata: Metadata = {
  title: "Dash Management",
  description: "Dash description",
  icons: {
    icon: "/icon.png", // /public path
  },
};

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="dark:bg-[#0D0D0D]">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
};

export default HomeLayout;
