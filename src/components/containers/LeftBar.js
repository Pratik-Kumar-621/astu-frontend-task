import React, { useState } from "react";
import LeftBarUI from "../presentationals/LeftBarUI";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import FolderSharedIcon from "@mui/icons-material/FolderShared";
import FolderIcon from "@mui/icons-material/Folder";
const LeftBar = () => {
  // userDetails
  const [user, setUser] = useState({
    name: "Pratik Kumar",
    website: "www.google.com",
  });
  const [name, setName] = useState(user.name);
  const [website, setWebsite] = useState(user.website);
  const changeName = (e) => {
    setName(e.target.value);
  };
  const changeWebsite = (e) => {
    setWebsite(e.target.value);
  };
  const changeUser = (name, website) => {
    setUser({ name: name, website: website });
  };
  const handleRefreshUser = () => {
    setName(user.name);
    setWebsite(user.website);
  };

  // Dialog states
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // links
  const links = [
    {
      name: "Document Generation",
      icon: <CreateNewFolderIcon />,
    },
    {
      name: "Corporate Documents",
      icon: <FolderSharedIcon />,
    },
    {
      name: "Filing Documents ",
      icon: <FolderIcon />,
    },
  ];

  const [selectedLink, setSelectedLink] = useState();
  const changeSelect = (val) => {
    setSelectedLink(val);
  };
  return (
    <LeftBarUI
      {...{
        links,
        selectedLink,
        changeSelect,
        user,
        changeUser,
        open,
        handleClickOpen,
        handleClose,
        name,
        website,
        changeName,
        changeWebsite,
        handleRefreshUser,
      }}
    />
  );
};

export default LeftBar;
