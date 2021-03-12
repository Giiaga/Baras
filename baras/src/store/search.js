import { fetch } from "./csrf";

let SEARCHUSER = "searchUser";

let searchUserAC = (data) => {
  return {
    type: SEARCHUSER,
    data,
  };
};

export let searchUser = (input) => async (dispatch) => {
  let response = await fetch(`/apis/search/${input}`);

  dispatch(searchUserAC(response.data));

  return response.data;
};

let search = (state = [], action) => {
  let newState;
  switch (action.type) {
    case SEARCHUSER:
      newState = Object.assign({}, state);
      newState.foundUsers = action.data;
      return newState;

    default:
      return state;
  }
};

export default search;
