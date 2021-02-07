import { fetch } from "./csrf";

let CREATEBARAS = "createsBaras";

let letBarasOutAC = (baras) => {
  return {
    type: CREATEBARAS,
    baras,
  };
};

export let letBarasOut = (
  relatesTo,
  mainText,
  photo,
  audioLink,
  videoLink,
  userId
) => async (dispatch) => {
  let response = await fetch("/createBaras", {
    method: "POST",
    // headers: {
    //   "Content-Type": "application/json",
    // },
    body: JSON.stringify({
      relatesTo,
      mainText,
      photo,
      audioLink,
      videoLink,
      userId,
    }),
  });

  dispatch(letBarasOutAC(response.data));
  return response.data;
};

let createBarasReducer = (state = [], action) => {
  let newState;
  switch (action.type) {
    case CREATEBARAS:
      newState = Object.assign({}, state);
      newState.createBaras = action.baras;
      return newState;

    default:
      return state;
  }
};

export default createBarasReducer;
