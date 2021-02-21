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

let ALLNOTIFICATIONS = "allNotificationsRecieved";

let allNotificationsAC = (data) => {
  return {
    type: ALLNOTIFICATIONS,
    data,
  };
};

export let allNotifications = (userId) => async (dispatch) => {
  let response = await fetch(`/noitifications/${userId}`);

  dispatch(allNotificationsAC(response.data));

  return response.data;
};
let notificationReducer = (state = {}, action) => {
  let newState;

  switch (action.type) {
    case SENDNOTIFICATION:
      newState = Object.assign({}, state);
      newState.sendNotification = action.data;
      return newState;
    case ALLNOTIFICATIONS:
      newState = Object.assign({}, state);
      newState.allNotifications = action.data;
      return newState;
    default:
      return state;
  }
};

export default notificationReducer;
