import { fetch } from "./csrf";

let ADDTRUST = "addsTrustInBackEnd";

let addTrustAC = (data) => {
  return {
    type: ADDTRUST,
    data,
  };
};

export let addTrust = (userId, trustedId) => async (dispatch) => {
  let response = await fetch("/add/trust", {
    method: "POST",
    body: JSON.stringify({ userId, trustedId }),
  });

  dispatch(addTrustAC(response.data));

  return response.data;
};

let REMOVETRUST = "deletesTrust";

let removeTrustAC = (data) => {
  return {
    type: REMOVETRUST,
    data,
  };
};

export let removeTrust = (userId, trustedId) => async (dispatch) => {
  let response = await fetch("/remove/trust", {
    method: "POST",
    body: JSON.stringify({ userId, trustedId }),
  });

  dispatch(removeTrustAC(response.data));

  return response.data;
};

let trustReducer = (state = {}, action) => {
  let newState;

  switch (action.type) {
    case ADDTRUST:
      newState = Object.assign({}, state);
      newState.addedTrust = action.data;
      return newState;
    case REMOVETRUST:
      newState = Object.assign({}, state);
    default:
      return state;
  }
};

export default trustReducer;
