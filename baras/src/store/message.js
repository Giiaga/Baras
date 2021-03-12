import { fetch } from "./csrf";

let GETALLMESSAGES = "getsAllMessagesForUser";

let getAllMessagesAC = (data) => {
  return {
    type: GETALLMESSAGES,
    data,
  };
};

export let getAllMessages = (userId) => async (dispatch) => {
  let response = await fetch(`/api/privateChat/${userId}`);

  dispatch(getAllMessagesAC(response.data));

  return response.data;
};

let GETUSERSPECIFICMESSAGE = "specificUserMessageWhenClickedOnAMessage";

let getSpecificUserMessageAC = (data) => {
  return {
    type: GETUSERSPECIFICMESSAGE,
    data,
  };
};

export let getSpecificUserMessage = (userId, clickedUser) => async (
  dispatch
) => {
  let response = await fetch(`/api/privateChat/${userId}/${clickedUser}/chat`);

  dispatch(getSpecificUserMessageAC(response.data));

  return response.data;
};

let SUBMITMESSAGE = "submitMessageFromMainMessagePage";

let submitTheFormAC = (data) => {
  return {
    type: SUBMITMESSAGE,
    data,
  };
};

export let submitTheForm = (formValue, userId, sendToId) => async (
  dispatch
) => {
  let response = await fetch("/api/sendMessage", {
    method: "POST",
    body: JSON.stringify({ formValue, userId, sendToId }),
  });

  dispatch(submitTheFormAC(response.data));
  return response.data;
};

let SENDMESSAGE = "THISISTHEPOPUPWHENCLICKCREATEMESSAGE";

let sendMessageAC = (data) => {
  return {
    type: SENDMESSAGE,
    data,
  };
};

export let sendMessage = (userId, sendTo, message) => async (dispatch) => {
  let response = await fetch("/api/sendMessage", {
    method: "POST",
    body: JSON.stringify({ userId, sendTo, message }),
  });

  dispatch(sendMessageAC(response.data));

  return response.data;
};

let GETTRUST = "getAllTrustOfUserForDropDownToSendMessage";

let getTrustAC = (data) => {
  return {
    type: GETTRUST,
    data,
  };
};

export let getTrust = (userId) => async (dispatch) => {
  let response = await fetch(`/apis/getTrust/${userId}`);

  dispatch(getTrustAC(response.data));

  return response.data;
};
let messageReducer = (state = [], action) => {
  let newState;
  switch (action.type) {
    case GETALLMESSAGES:
      newState = Object.assign({}, state);
      newState.allMessages = action.data;
      return newState;
    case GETUSERSPECIFICMESSAGE:
      newState = Object.assign({}, state);
      newState.specificUserMessage = action.data;
      return newState;
    case SUBMITMESSAGE || SENDMESSAGE:
      newState = Object.assign({}, state);
      newState.allMessages.sentMessage.push(action.data);
      return newState;
    case GETTRUST:
      newState = Object.assign({}, state);
      newState.allTrust = action.data;
      return newState;

    default:
      return state;
  }
};

export default messageReducer;
