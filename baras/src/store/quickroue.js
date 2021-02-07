import { fetch } from "./csrf";

let willpictures = "pictures";

let showpictureAC = (data) => {
  return {
    type: willpictures,
    data,
  };
};

export let showpicture = () => async (dispatch) => {
  let response = await fetch("/api/session/h");
  dispatch(showpictureAC(response.data.userr));
  return response;
};

let showpicReducer = (state = [], action) => {
  let newState;
  switch (action.type) {
    case willpictures:
      newState = Object.assign({}, state);
      newState.user = action.data;
      return newState;
    default:
      return state;
  }
};

export default showpicReducer;
