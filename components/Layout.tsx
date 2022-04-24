import { NextPage } from "next";
import React from "react";
import Navbar from "./Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: NextPage<LayoutProps> = ({ children }) => {
  return (
    <div style={{ height: "100vh" }}>
      <Navbar />
      <main style={{ height: "100%" }}>{children}</main>
    </div>
  );
};

export default Layout;
