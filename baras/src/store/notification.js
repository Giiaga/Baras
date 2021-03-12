import { fetch } from "./csrf";

let REMOVENOTIFICATION = "removesNotificationWhenClickedDontTrust";

let removeNotificationAC = (data) => {
  return {
    type: REMOVENOTIFICATION,
    data,
  };
};

export let removeNotification = (userId, trustedId) => async (dispatch) => {
  let response = await fetch("/api/notification/remove", {
    method: "POST",
    body: JSON.stringify({ userId, trustedId }),
  });

  dispatch(removeNotificationAC(response.data));

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
  let response = await fetch(`/api/notifications/${userId}`);

  dispatch(allNotificationsAC(response.data));

  return response.data;
};
let notificationReducer = (state = {}, action) => {
  let newState;

  switch (action.type) {
    case REMOVENOTIFICATION:
      newState = Object.assign({}, state);
      return state;
    case ALLNOTIFICATIONS:
      newState = Object.assign({}, state);
      newState.allNotifications = action.data;
      return newState;
    default:
      return state;
  }
};

export default notificationReducer;
