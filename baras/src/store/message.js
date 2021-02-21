import { fetch } from "./csrf";

const GET_ALL_MESSAGES = "allMEssagesForUserReturn";
const GET_S_USER_MESSAGES = "getspecificusermessages";
let SUBMIT_THE_FORM = "submitstheformTextfromUser";

const getAllMessagesAC = (messages) => {
  return {
    type: GET_ALL_MESSAGES,
    messages: messages,
  };
};
const getSpecificUserMessagesAC = (data) => {
  return {
    type: GET_S_USER_MESSAGES,
    data,
  };
};
let submitTheFormAC = (formValue) => {
  return {
    type: SUBMIT_THE_FORM,
    formValue,
  };
};
const SUBMIT_THE_SEND_FORM = "submitthesendmessage";
let submitTheSendMessageAC = (formValue) => {
  return {
    type: SUBMIT_THE_SEND_FORM,
    formValue,
  };
};
export const submitTheForm = (formValue, userId, sentToId) => async (
  dispatch
) => {
  let converUserId = Number(userId);

  let request = await fetch("/dm/submitTheForm", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ formValue, converUserId, sentToId }),
  });
  let convertJson = await request.json();
  dispatch(submitTheFormAC(convertJson));
  return;
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
  const response = await fetch(`/dm/${userId}/message`);

  dispatch(getFollowersAC(response.data));

  return response.data;
};

export const sendMessage = (userId, sendToId, textvalue) => async (
  dispatch
) => {
  const request = await fetch(`/dm/${userId}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userId, sendToId, textvalue }),
  });
  const convertJson = await request.json();
  dispatch(submitTheSendMessageAC(convertJson));
  return;
};
const messageReducer = (state = {}, action) => {
  let changedState;
  switch (action.type) {
    case GET_ALL_MESSAGES:
      changedState = Object.assign({}, state);
      changedState.allMessages = action.messages;
      return changedState;
    case GET_S_USER_MESSAGES:
      changedState = Object.assign({}, state);
      changedState.specificUserMessages = action.data;
      return changedState;
    case SUBMIT_THE_FORM:
      changedState = Object.assign({}, state);
      changedState.specificUserMessages.sentMessages.unshift(action.formValue);
      changedState.allMessages.sentMessages.unshift(action.formValue);
      return changedState;
    case GET_FOLLOWERS_FOR_SEND_MESSAGE_TO:
      changedState = Object.assign({}, state);
      changedState.allFollowers = action.data;
      return changedState;
    case SUBMIT_THE_SEND_FORM:
      changedState = Object.assign({}, state);
      changedState.allMessages.sentMessages.unshift(action.formValue);
      return changedState;
    // case SUBMIT_THE_FORM:
    //   changedState = Object.assign({}, state);
    //   changedState.allMessages = action.formValue;
    //   return changedState;
    default:
      return state;
  }
};

export default messageReducer;
