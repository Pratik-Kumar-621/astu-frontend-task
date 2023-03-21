import React from "react";
import Details from "../containers/Details";
import Invite from "../containers/Invite";
import LeftBar from "../containers/LeftBar";
import HeadingUI from "./HeadingUI";

const DashboardUI = () => {
  return (
    <div className="dashboard_main">
      <div className="left_bar">
        <LeftBar />
      </div>
      <div className="dashboard_content">
        <HeadingUI />
        <Invite />
        <Details />
      </div>
    </div>
  );
};

export default DashboardUI;
