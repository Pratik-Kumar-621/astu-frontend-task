const initialState = {
  coworkerDetails: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_COWORKERS":
      return {
        ...state,
        coworkerDetails: [...state.coworkerDetails, action.payload],
      };
    case "DELETE_COWORKER":
      return {
        ...state,
        coworkerDetails: action.payload,
      };
    case "UPDATE_COWORKER":
      return {
        ...state,
        coworkerDetails: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
