import React from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "./header";
// import Footer from "./footer";

const Index = () => {
  const viewMode = useSelector((state) => state.dashboard.theme);
  return (
    <div className={`${viewMode}`} style={{ paddingTop: "120px" }}>
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

export default Index;
