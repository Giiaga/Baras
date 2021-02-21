import { fetch } from "./csrf";

let SENDNOTIFICATION = "sendsNotification";

let sendNotificationAC = (data) => {
  return {
    type: SENDNOTIFICATION,
    data,
  };
};

export let sendNotification = (data) => async (dispatch) => {
  let response = await fetch("/notification", {
    method: "POST",
    body: JSON.stringify(),
  });

  dispatch(sendNotificationAC(response.data));

  return response.data;
};

let notificationReducer = (state = {}, action) => {
  let newState;

  switch (action.type) {
    case SENDNOTIFICATION:
      newState = Object.assign({}, state);
      newState.notifications = action.data;
      return newState;

    default:
      return state;
  }
};

export default notificationReducer;
