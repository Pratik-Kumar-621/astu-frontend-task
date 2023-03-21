import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCoWorker, updateCoWorker } from "../../redux/actions";
import DetailsUI from "../presentationals/DetailsUI";

const Details = () => {
  const owner = {
    email: "pratikmuz20@gmail.com",
  };
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [workRole, setRoles] = useState([...state.coworkerDetails]);
  useEffect(() => {
    const setter = () => setRoles([...state.coworkerDetails]);
    setter();
  }, [state.coworkerDetails]);
  const handleSelectNewRole = (ind, value) => {
    const rows = [...workRole];
    rows[ind] = {
      ...rows[ind],
      role: value,
    };
    setRoles(rows);
  };
  const handleDelete = (ind) => {
    const rows = state.coworkerDetails;

    dispatch(deleteCoWorker(rows.filter((item) => item.id !== ind)));
  };
  const handleResend = () => {
    dispatch(updateCoWorker(workRole));
  };
  return (
    <DetailsUI
      {...{
        state,
        handleDelete,
        owner,
        workRole,
        handleSelectNewRole,
        handleResend,
      }}
    />
  );
};

export default Details;
