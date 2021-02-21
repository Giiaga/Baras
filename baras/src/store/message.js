import { fetch } from "./csrf";

const GET_ALL_MESSAGES = "allMEssagesForUserReturn";
const GET_S_USER_MESSAGES = "getspecificusermessages";
let SUBMIT_THE_FORM = "submitstheformTextfromUser";

const getAllMessagesAC = (data) => {
  return {
    type: GET_ALL_MESSAGES,
    data,
  };
};
const getSpecificUserMessagesAC = (data) => {
  return {
    type: GET_S_USER_MESSAGES,
    data,
  };
};
let submitTheFormAC = (data) => {
  return {
    type: SUBMIT_THE_FORM,
    data,
  };
};
const SUBMIT_THE_SEND_FORM = "submitthesendmessage";
let submitTheSendMessageAC = (data) => {
  return {
    type: SUBMIT_THE_SEND_FORM,
    data,
  };
};
export const submitTheForm = (data, userId, sentToId) => async (dispatch) => {
  let request = await fetch("/privateChat/submitTheForm", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data, userId, sentToId }),
  });

  dispatch(submitTheFormAC(request.data));

  return request.data;
};
export const getSpecificUserMessages = (userId, userClicked) => async (
  dispatch
) => {
  const response = await fetch(`/privateChat/${userId}/${userClicked}/chat`);

  dispatch(getSpecificUserMessagesAC(response));
  return response.data;
};

export const getAllMessages = (userId) => async (dispatch) => {
  const response = await fetch(`/privateChat/${userId}`);

  dispatch(getAllMessagesAC(response.data));
  return;
};

const GET_FOLLOWERS_FOR_SEND_MESSAGE_TO = "recievesUsersFollowedOrFollowing";

const getFollowersAC = (data) => {
  return {
    type: GET_FOLLOWERS_FOR_SEND_MESSAGE_TO,
    data,
  };
};

export const getFollowers = (userId) => async (dispatch) => {
  const response = await fetch(`/privateChat/${userId}/message`);

  dispatch(getFollowersAC(response.data));

  return response.data;
};

export const sendMessage = (userId, sendToId, textvalue) => async (
  dispatch
) => {
  const request = await fetch(`/privateChat/${userId}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userId, sendToId, textvalue }),
  });

  dispatch(submitTheSendMessageAC(request.data));

  return request.data;
};
const messageReducer = (state = {}, action) => {
  let changedState;
  switch (action.type) {
    case GET_ALL_MESSAGES:
      changedState = Object.assign({}, state);
      changedState.allMessages = action.data;
      return changedState;
    case GET_S_USER_MESSAGES:
      changedState = Object.assign({}, state);
      changedState.specificUserMessages = action.data;
      return changedState;
    case SUBMIT_THE_FORM:
      changedState = Object.assign({}, state);
      changedState.specificUserMessages.sentMessages.unshift(action.data);
      changedState.allMessages.sentMessages.unshift(action.data);
      return changedState;
    case GET_FOLLOWERS_FOR_SEND_MESSAGE_TO:
      changedState = Object.assign({}, state);
      changedState.trusted = action.data;
      return changedState;
    case SUBMIT_THE_SEND_FORM:
      changedState = Object.assign({}, state);
      changedState.allMessages.sentMessages.unshift(action.data);
      return changedState;
    // case SUBMIT_THE_FORM:
    //   changedState = Object.assign({}, state);
    //   changedState.allMessages = action.data;
    //   return changedState;
    default:
      return state;
  }
};

export default messageReducer;
