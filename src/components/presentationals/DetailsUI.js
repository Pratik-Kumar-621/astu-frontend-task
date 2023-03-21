import React from "react";
import { IconButton, MenuItem, Select, Tooltip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import RefreshIcon from "@mui/icons-material/Refresh";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const DetailsUI = (props) => {
  const {
    state,
    handleDelete,
    owner,
    workRole,
    handleSelectNewRole,
    handleResend,
  } = props;

  return (
    <div className="details_main">
      {state.coworkerDetails.length === 0 ? (
        <div className="nothing">
          <img src="./images/empty.svg" alt="Nothing" />
          <div className="no_text">No Co-Workers added</div>
        </div>
      ) : (
        <div className="list_workers">
          <table>
            <tr>
              <th>Co-worker Email</th>
              <th>Roles</th>
              <th></th>
              <th></th>
            </tr>
            <br />
            <tr>
              <td className="row_email owner">
                <a href={`mailto:${owner.email}`}>{owner.email}</a>
              </td>
              <td className="row_role owner">Owner</td>
              <td></td>
              <td></td>
            </tr>
            <br />

            {state.coworkerDetails?.map((item, ind) => (
              <>
                <tr className="item">
                  <td className="row_email">
                    <a href={`mailto:${item.email}`}>{item.email}</a>
                  </td>
                  <td className="row_role">
                    <Select
                      IconComponent={KeyboardArrowDownIcon}
                      sx={{
                        "& fieldset": { border: "none" },
                      }}
                      className="select_detail"
                      defaultValue={item.role}
                      onChange={(e) => handleSelectNewRole(ind, e.target.value)}
                    >
                      <MenuItem value="Owner">Owner</MenuItem>
                      <MenuItem value="Admin">Admin</MenuItem>
                    </Select>
                  </td>
                  <td className="row_delete">
                    <Tooltip title="Delete this role" placement="bottom-start">
                      <IconButton
                        color="error"
                        onClick={() => handleDelete(item.id)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Tooltip>
                  </td>

                  <td className="row_update">
                    {workRole.filter((i) => i.id === item.id)[0]?.role !==
                      item.role && (
                      <Tooltip title="Resend Invite" placement="bottom-start">
                        <IconButton onClick={handleResend}>
                          <RefreshIcon />
                        </IconButton>
                      </Tooltip>
                    )}
                  </td>
                </tr>
                <br />
              </>
            ))}
          </table>
        </div>
      )}
    </div>
  );
};

export default DetailsUI;
