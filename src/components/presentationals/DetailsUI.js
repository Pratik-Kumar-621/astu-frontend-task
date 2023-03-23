import React from "react";
import { Button, IconButton, MenuItem, Select, Tooltip } from "@mui/material";
import { Drawer } from "antd";
import CancelIcon from "@mui/icons-material/Cancel";
import DeleteIcon from "@mui/icons-material/Delete";
import RefreshIcon from "@mui/icons-material/Refresh";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Nothing from "../../static/empty.svg";
const DetailsUI = (props) => {
  const {
    state,
    handleDelete,
    owner,
    workRole,
    handleSelectNewRole,
    handleResend,
    selectedCoworker,
    selectCoworker,
    handleDeleteSelected,
    showDraw,
    closeDrawer,
    openDrawer,
    handleRemove,
  } = props;

  return (
    <div className="details_main">
      {state.coworkerDetails.length === 0 ? (
        <div className="nothing">
          <img src={Nothing} alt="Nothing" />
          <div className="no_text">No Co-Workers added</div>
        </div>
      ) : (
        <div className="list_workers">
          <table>
            <tr>
              <th></th>
              <th>Co-worker Email</th>
              <th>Roles</th>
              <th></th>
              <th></th>
            </tr>
            <br />
            <tr>
              <td></td>
              <td className="row_email owner">
                <a href={`mailto:${owner.email}`}>{owner.email}</a>
              </td>
              <td className="row_role owner">Owner</td>
              <td></td>
              <td></td>
            </tr>
            <br />

            {selectedCoworker && (
              <>
                {state.coworkerDetails?.map((item, ind) => (
                  <>
                    <tr className="item">
                      <td>
                        <input
                          type="checkbox"
                          checked={
                            selectedCoworker?.filter((i) => i.id === item.id)[0]
                              ?.checked
                          }
                          onChange={(e) =>
                            selectCoworker(ind, item.id, e.target.checked)
                          }
                        />
                      </td>
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
                          onChange={(e) =>
                            handleSelectNewRole(ind, e.target.value)
                          }
                        >
                          <MenuItem value="Owner">Owner</MenuItem>
                          <MenuItem value="Admin">Admin</MenuItem>
                        </Select>
                      </td>
                      <td className="row_delete">
                        <Tooltip
                          title="Delete this role"
                          placement="bottom-start"
                        >
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
                          <Tooltip
                            title="Resend Invite"
                            placement="bottom-start"
                          >
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
              </>
            )}
          </table>
          {selectedCoworker.filter((i) => i.checked === true).length > 0 && (
            <Button
              style={{ position: "absolute", top: 30, right: 50 }}
              variant="outlined"
              color="error"
              onClick={openDrawer}
            >
              Proceed
            </Button>
          )}
        </div>
      )}
      <Drawer
        title="Delete Multiple Coworkers"
        placement="right"
        onClose={closeDrawer}
        open={showDraw}
      >
        <div className="drawer_delete">
          {selectedCoworker.map((i, ind) => (
            <>
              {i.checked && (
                <div className="emails_list">
                  <Button
                    className="remove_button"
                    color="error"
                    onClick={() => selectCoworker(ind, "", false)}
                  >
                    <CancelIcon />
                  </Button>
                  <div className="email_name">{i.email}</div>
                </div>
              )}
            </>
          ))}
          <Button
            onClick={handleDeleteSelected}
            variant="outlined"
            color="error"
            className="draw_sub"
          >
            Delete Selected
          </Button>
        </div>
      </Drawer>
    </div>
  );
};

export default DetailsUI;
