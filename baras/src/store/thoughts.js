import { fetch } from "./csrf";

let GETALLTHOUGHTS = "getAllThoughts";

let getAllThoughtsAC = (data) => {
  return {
    type: GETALLTHOUGHTS,
    data,
  };
};

export let getAllThoughts = (BarasId) => async (dispatch) => {
  let response = await fetch(`/allThoughts/${BarasId}`);

  dispatch(getAllThoughtsAC(response.data));

  return response.data;
};

let thoughtsReducer = (state = [], action) => {
  let newState;
  switch (action.type) {
    case GETALLTHOUGHTS:
      newState = Object.assign({}, state);
      newState.allThoughts = action.data;
      return newState;

    default:
      return state;
  }
};

export default thoughtsReducer;
