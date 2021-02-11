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

let STORYPAGE = "addsNewStoryPageToDatabase";

let storyPageAC = (data) => {
  return {
    type: STORYPAGE,
    data,
  };
};

export let storyPage = (
  pageNumber,
  chapter,
  storyId,
  text,
  image,
  music,
  video,
  chapterWidth,
  chapterHeight,
  chapterH,
  chapterV,
  textWidth,
  textHeight,
  textH,
  textV,
  imageWidth,
  imageHeight,
  imageH,
  imageV,
  musicWidth,
  musicHeight,
  musicH,
  musicV,
  videoWidth,
  videoHeight,
  videoH,
  videoV
) => async (dispatch) => {
  let response = await fetch("/story/cont", {
    method: "POST",
    body: JSON.stringify({
      pageNumber,
      chapter,
      storyId,
      text,
      image,
      music,
      video,
      chapterWidth,
      chapterHeight,
      chapterH,
      chapterV,
      textWidth,
      textHeight,
      textH,
      textV,
      imageWidth,
      imageHeight,
      imageH,
      imageV,
      musicWidth,
      musicHeight,
      musicH,
      musicV,
      videoWidth,
      videoHeight,
      videoH,
      videoV,
    }),
  });

  dispatch(storyPageAC(response.data));
  return response;
};

let storyReducer = (state = [], action) => {
  let newState;
  switch (action.type) {
    case TELLSTORY:
      newState = Object.assign({}, state);
      newState.story = action.data;
      return newState;
    case STORYPAGE:
      newState = Object.assign({}, state);
      newState.page = action.data;
      return newState;
    default:
      return state;
  }
};

export default storyReducer;