import { fetch } from "./csrf";

let TELLSTORY = "titleandInitialStoryTelling";

let tellStoryAC = (data) => {
  return {
    type: TELLSTORY,
    data,
  };
};

export let tellStory = (userId, title, publish) => async (dispatch) => {
  let response = await fetch("/story/tell", {
    method: "POST",
    body: JSON.stringify({ userId, title, publish }),
  });

  dispatch(tellStoryAC(response.data));
  return response;
};

let storyReducer = (state = [], action) => {
  let newState;
  switch (action.type) {
    case TELLSTORY:
      newState = Object.assign({}, state);
      newState.story = action.data;
      return newState;

    default:
      return state;
  }
};

export default storyReducer;
