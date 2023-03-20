export const addCoworkers = (workers) => {
  return { type: "ADD_COWORKERS", payload: workers };
};
export const deleteCoWorker = (worker) => {
  return { type: "DELETE_COWORKER", payload: worker };
};
export const updateCoWorker = (worker) => {
  return { type: "UPDATE_COWORKER", payload: worker };
};
