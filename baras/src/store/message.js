import { fetch } from "./csrf";

let GETALLMESSAGES = "getsAllMessagesForUser";

let getAllMessagesAC = (data) => {
  return {
    type: GETALLMESSAGES,
    data,
  };
};

export let getAllMessages = (userId) => async (dispatch) => {
  let response = await fetch(`/privateChat/${userId}`);

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
  let response = await fetch(`/privateChat/${userId}/${1}/chat`);

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

export let submitTheForm = () => async (dispatch) => {
  let response = await fetch("/");
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

    default:
      return state;
  }
};

export default messageReducer;
