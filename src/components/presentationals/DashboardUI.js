import React from "react";
import Details from "../containers/Details";
import Invite from "../containers/Invite";
import LeftBar from "../containers/LeftBar";
import HeadingUI from "./HeadingUI";

const DashboardUI = () => {
  return (
    <div>
      <LeftBar />
      <HeadingUI />
      <Invite />
      <Details />
    </div>
  );
};

export default DashboardUI;
