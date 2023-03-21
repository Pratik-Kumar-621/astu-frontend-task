import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCoworkers } from "../../redux/actions";
import InviteUI from "../presentationals/InviteUI";
import { v4 as uuidv4 } from "uuid";

const Invite = () => {
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState("");
  const [inviteRows, setInviteRows] = useState([]);
  const addRow = () => {
    setErrorMessage("");
    const item = {
      id: uuidv4(),
      email: "",
      role: "",
    };
    setInviteRows([...inviteRows, item]);
  };
  const deleteRow = (ind) => {
    setErrorMessage("");

    const rows = [...inviteRows];
    rows.splice(ind, 1);
    setInviteRows(rows);
  };
  const handleChange = (ind, name, value) => {
    setErrorMessage("");

    const rows = [...inviteRows];
    rows[ind] = {
      ...rows[ind],
      [name]: value,
    };
    setInviteRows(rows);
  };
  const sendInvite = () => {
    var val = true;
    inviteRows.map((item) => {
      if (item.email === "" || item.role === "") {
        setErrorMessage("Please make sure no feilds are empty");
        val = false;
        return;
      }
    });
    if (val === true) {
      dispatch(addCoworkers(inviteRows));
      setInviteRows([]);
    }
  };
  return (
    <InviteUI
      {...{
        inviteRows,
        addRow,
        deleteRow,
        handleChange,
        sendInvite,
        errorMessage,
      }}
    />
  );
};

export default Invite;
