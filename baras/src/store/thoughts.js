import { fetch } from "./csrf";

let GETALLTHOUGHTS = "getAllThoughts";

let getAllThoughtsAC = (data) => {
  return {
    type: GETALLTHOUGHTS,
    data,
  };
};

export let getAllThoughts = (BarasId) => async (dispatch) => {
  let response = await fetch(`/api/allThoughts/${BarasId}`);

  dispatch(getAllThoughtsAC(response.data));

  return response.data;
};

let SAYTHOUGHT = "addsThought";

let sayThoughtAC = (data) => {
  return {
    type: SAYTHOUGHT,
    data,
  };
};

export let sayThought = (text, userId, barasId) => async (dispatch) => {
  let response = await fetch("/api/addThought", {
    method: "POST",
    body: JSON.stringify({ text, userId, barasId }),
  });

  dispatch(sayThoughtAC(response.data));

  return response.data;
};

let thoughtsReducer = (state = [], action) => {
  let newState;
  switch (action.type) {
    case GETALLTHOUGHTS:
      newState = Object.assign({}, state);
      newState.allThoughts = action.data;
      return newState;
    case SAYTHOUGHT:
      newState = Object.assign({}, state);
      // newState.allThoughts.push(action.data);
      // if (newState.allThoughts) {
      //   newState.allThoughts.push(action.data);
      // }
      return newState;

    default:
      return state;
  }
};

export default thoughtsReducer;
