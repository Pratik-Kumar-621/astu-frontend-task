import React from "react";
import Button from "@mui/material/Button";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Dialog, TextField } from "@mui/material";
const LeftBarUI = (props) => {
  const {
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
  } = props;
  return (
    <div className="left_bar_main">
      {/* logo */}
      <div className="logo">
        <img src="./images/logo.png" alt="" />
      </div>
      <>
        {/* details */}
        <div className="details">
          <div className="person_details">
            <div className="image">{user.name[0]}</div>
            <div className="name_item">
              <div className="person_name">{user.name}</div>
              <a href={user.website} className="person_website">
                {user.website}
              </a>
            </div>
          </div>
          <div className="modal_btn">
            <Button
              variant="container"
              color="success"
              className="open_dialog_button"
              onClick={handleClickOpen}
            >
              <NavigateNextIcon />
            </Button>
            <Dialog open={open}>
              <div className="dialog_container">
                <div className="title_dialog">Profile</div>
                <div className="dialog_content">
                  <TextField
                    id="name"
                    label="Name"
                    placeholder="Enter name"
                    variant="outlined"
                    className="text_inputs"
                    value={name}
                    onChange={changeName}
                  />
                  <TextField
                    id="web"
                    label="Website"
                    placeholder="Enter website address"
                    variant="outlined"
                    className="text_inputs"
                    value={website}
                    onChange={changeWebsite}
                  />
                </div>
                <div className="dialog_footers">
                  <Button
                    className="cancel_button"
                    variant="outlined"
                    color="error"
                    onClick={() => {
                      handleClose();
                      handleRefreshUser();
                    }}
                  >
                    Cancel
                  </Button>
                  <Button
                    className="save_details"
                    variant="contained"
                    color="success"
                    onClick={() => {
                      handleClose();
                      changeUser(name, website);
                    }}
                  >
                    Save
                  </Button>
                </div>
              </div>
            </Dialog>
          </div>
        </div>

        {/* links */}
        <div className="links">
          {links.map((item, ind) => {
            return (
              <div
                key={ind}
                className={`link_item ${selectedLink === ind && "active_link"}`}
                onClick={() => changeSelect(ind)}
              >
                <div className="item_icon">{item.icon}</div>
                <div className="item_name">{item.name}</div>
              </div>
            );
          })}
        </div>
      </>
    </div>
  );
};

export default LeftBarUI;
