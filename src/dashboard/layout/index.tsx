import React, { ReactNode, useContext } from "react";
import Sidebar from "../sidebar";
import Navbar from "../navbar";
import "../../styles/dashboard/layout/layout.css";
import { ActionContext } from "../../context/action-context";

interface LayoutProp {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProp) => {
  const actionCtx = useContext(ActionContext);

  return (
    <>
      <Navbar />
      <Sidebar />
      <div
        className={`layout-box ${
          actionCtx.isFilterDrop ? "hidden-layout-scroll" : ""
        }`}
      >
        {children}
      </div>
    </>
  );
};

export default Layout;
