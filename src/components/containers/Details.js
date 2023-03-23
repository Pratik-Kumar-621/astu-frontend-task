import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCoWorker, updateCoWorker } from "../../redux/actions";
import DetailsUI from "../presentationals/DetailsUI";

const Details = () => {
  const owner = {
    email: "pratikmuz20@gmail.com",
  };

  const state = useSelector((state) => state);
  const [selectedCoworker, setSelectedCoworkers] = useState([]);

  const selectCoworker = (ind, value, checked) => {
    const row = [...selectedCoworker];
    row[ind] = {
      ...row[ind],
      checked: checked,
    };
    setSelectedCoworkers(row);
  };

  const dispatch = useDispatch();
  const [workRole, setRoles] = useState([...state.coworkerDetails]);
  useEffect(() => {
    const setter = () => setRoles([...state.coworkerDetails]);
    setter();
  }, [state]);
  useEffect(() => {
    const value = () => {
      const selectList = workRole?.map((item) => ({
        id: item.id,
        email: item.email,
        checked: false,
      }));
      setSelectedCoworkers(selectList);
    };
    value();
  }, [state, workRole]);
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
    setRoles([]);
  };
  const handleResend = () => {
    dispatch(updateCoWorker(workRole));
  };

  const [showDraw, setShowDraw] = useState(false);
  useEffect(() => {
    const val = () => {
      if (selectedCoworker.filter((i) => i.checked === true).length === 0) {
        setShowDraw(false);
      }
    };
    val();
  }, [selectCoworker]);
  const openDrawer = () => {
    setShowDraw(true);
  };
  const closeDrawer = () => {
    setShowDraw(false);
  };

  const handleDeleteSelected = () => {
    const fList = [
      ...workRole.filter(
        (item) => !selectedCoworker.find((sc) => sc.id === item.id).checked
      ),
    ];
    console.log("Flist:", fList);
    dispatch(updateCoWorker(fList));
    setSelectedCoworkers([]);
    closeDrawer();
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
        selectedCoworker,
        selectCoworker,
        handleDeleteSelected,
        showDraw,
        openDrawer,
        closeDrawer,
      }}
    />
  );
};

export default Details;
