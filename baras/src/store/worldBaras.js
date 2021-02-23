import { fetch } from "./csrf";

let GETALLWORLDBARAS = "getAllWorldBaras";

let getWorldBarasAC = (data) => {
  return {
    type: GETALLWORLDBARAS,
    data,
  };
};

export let getWorldBaras = () => async (dispatch) => {
  let response = await fetch("/getWorldBaras");

  dispatch(getWorldBarasAC(response.data));

  return response.data;
};

let worldBarasReducer = (state = [], action) => {
  let newState;
  switch (action.type) {
    case GETALLWORLDBARAS:
      newState = Object.assign({}, state);
      newState.worldBaras = action.data;
      return newState;

    default:
      return state;
  }
};

export default worldBarasReducer;
