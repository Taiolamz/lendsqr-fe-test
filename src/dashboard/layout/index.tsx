import React, { ReactNode } from "react";
import Sidebar from "../sidebar";
import Navbar from "../navbar";
import "../../styles/dashboard/layout/layout.css";

interface LayoutProp {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProp) => {
  return (
    <>
      <Navbar />
      <Sidebar />
      {/* <div className="layout-wrap"> */}
      <div className="layout-box">{children}</div>
      {/* </div> */}
    </>
  );
};

export default Layout;
