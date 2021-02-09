import { fetch } from "./csrf";

let GETUSER = "getUserForProfilePage";

let getUserAC = (data) => {
  return {
    type: GETUSER,
    data,
  };
};

export let getUser = (username) => async (dispatch) => {
  let response = await fetch(`/${username}`);

  dispatch(getUserAC(response.data));

  return response;
};

let userReducer = (state = [], action) => {
  let newState;
  switch (action.type) {
    case GETUSER:
      newState = Object.assign({}, state);
      newState.user = action.data;
      return newState;

    default:
      return state;
  }
};

export default userReducer;
