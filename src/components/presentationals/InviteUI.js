import React from "react";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  Button,
  IconButton,
  Select,
  TextField,
  Tooltip,
  MenuItem,
} from "@mui/material";
const InviteUI = (props) => {
  const {
    inviteRows,
    addRow,
    deleteRow,
    handleChange,
    errorMessage,
    sendInvite,
  } = props;

  return (
    <div className="invite_main">
      <div className="invite_info">
        <Tooltip
          title="Invited co-workers would have all the permissions except the option to delete the company"
          placement="bottom-start"
        >
          <IconButton>
            <InfoOutlinedIcon />
          </IconButton>
        </Tooltip>
      </div>
      <div className="invite_heading">
        Invite your co-workers to collaborate on Cashwise.
      </div>
      <div className="invite_list_input">
        {inviteRows.map((item, ind) => (
          <div className="invite_item" key={ind}>
            <TextField
              sx={{
                "& fieldset": { border: "none" },
              }}
              placeholder="Enter email"
              className="input_email"
              value={inviteRows[ind].email}
              onChange={(e) => handleChange(ind, "email", e.target.value)}
            />
            <Select
              IconComponent={KeyboardArrowDownIcon}
              sx={{
                "& fieldset": { border: "none" },
              }}
              labelId={`demo-simple-select-helper-label${ind}`}
              className="select_role"
              defaultValue={"select"}
              // value={inviteRows[ind].role}
              onChange={(e) => handleChange(ind, "role", e.target.value)}
            >
              <MenuItem value="select" disabled>
                Select
              </MenuItem>
              <MenuItem value="Owner">Owner</MenuItem>
              <MenuItem value="Admin">Admin</MenuItem>
            </Select>
            <Tooltip title="Delete Row" placement="right-end">
              <IconButton onClick={() => deleteRow(ind)} color="error">
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          </div>
        ))}
      </div>
      {inviteRows.length === 0 ? (
        <Button variant="contained" onClick={addRow}>
          Add Co-workers
        </Button>
      ) : (
        <Button type="text" onClick={addRow} className="add_row">
          + Add More
        </Button>
      )}
      {errorMessage && (
        <div className="error">
          Error: Can't send invites
          <br /> {errorMessage}
        </div>
      )}

      {inviteRows.length !== 0 && (
        <div className="send_invite">
          <Button variant="contained" onClick={sendInvite}>
            Send Invite
          </Button>
        </div>
      )}
    </div>
  );
};

export default InviteUI;
