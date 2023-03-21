import React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { IconButton } from "@mui/material";

const HeadingUI = () => {
  return (
    <div className="heading_content">
      <span className="icon_heading">
        <IconButton>
          <ArrowBackIosNewIcon />
        </IconButton>
      </span>
      Co-Workers
    </div>
  );
};

export default HeadingUI;
