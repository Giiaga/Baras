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
    method: "DELETE",
    body: JSON.stringify({ userId, trustedId }),
  });

  dispatch(removeTrustAC(response.data));

  return response.data;
};

let ALLTRUST = "getsAllTrust";

let allTrustAC = (data) => {
  return {
    type: ALLTRUST,
    data,
  };
};

export let allTrust = (userId) => async (dispatch) => {
  let response = await fetch(`/trust/all/${userId}`);

  dispatch(allTrustAC(response.data));

  return response.data;
};

let SENDNOTIF = "sendTrustRequestNotif";

let sendNotifAC = (data) => {
  return {
    type: SENDNOTIF,
    data,
  };
};

export let sendNotif = (userId, currentUser) => async (dispatch) => {
  let response = await fetch(`/notifCreate`, {
    method: "POST",
    body: JSON.stringify({ userId, currentUser }),
  });

  dispatch(sendNotifAC(response.data));

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
      return newState;
    case ALLTRUST:
      newState = Object.assign({}, state);
      newState.allTrust = action.data;
      return newState;
    case SENDNOTIF:
      newState = Object.assign({}, state);
      newState.notifSent = action.data;
      return newState;

    default:
      return state;
  }
};

export default trustReducer;
