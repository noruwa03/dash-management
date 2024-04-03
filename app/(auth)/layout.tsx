import type { Metadata } from "next";

import "../globals.css";

export const metadata: Metadata = {
  title: "Dash Management",
  description: "Dash description",
  icons: {
    icon: "/icon.png", // /public path
  },
};

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default AuthLayout;
