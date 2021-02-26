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

  return response.data;
};
let GETUSERSPECIFIC = "getUserSpecificProfilePage";

let getSpecificUserAC = (data) => {
  return {
    type: GETUSERSPECIFIC,
    data,
  };
};

export let getSpecificUser = (username) => async (dispatch) => {
  let response = await fetch(`/${username}/user`);

  dispatch(getSpecificUserAC(response.data));
  return response.data;
};

let GETBARASFORUSER = "getAllBarasForUser";

let allBarasAC = (data) => {
  return {
    type: GETBARASFORUSER,
    data,
  };
};

export let allBaras = (userId, username) => async (dispatch) => {
  let response = await fetch(`/getBaras/${userId ? userId : username}`);

  dispatch(allBarasAC(response.data));

  return response.data;
};

let USERTRUSTED = "userAlreadyTrusted";

let userTrustedAC = (data) => {
  return {
    type: USERTRUSTED,
    data,
  };
};

export let userTrusted = (userId, currentUser) => async (dispatch) => {
  let response = await fetch(`/userTrusted/${userId}/${currentUser}`);

  dispatch(userTrustedAC(response.data));

  return response.data;
};
let userReducer = (state = [], action) => {
  let newState;
  switch (action.type) {
    case GETUSER:
      newState = Object.assign({}, state);
      newState.user = action.data;
      return newState;
    case GETBARASFORUSER:
      newState = Object.assign({}, state);
      newState.allBaras = action.data;
      return newState;
    case GETUSERSPECIFIC:
      newState = Object.assign({}, state);
      newState.specificUser = action.data;
      return newState;
    case USERTRUSTED:
      newState = Object.assign({}, state);
      newState.userTrusted = action.data;
      return newState;

    default:
      return state;
  }
};

export default userReducer;
