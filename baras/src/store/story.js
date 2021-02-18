import { fetch } from "./csrf";

let TELLSTORY = "titleandInitialStoryTelling";

let tellStoryAC = (data) => {
  return {
    type: TELLSTORY,
    data,
  };
};

export let tellStory = (
  userId,
  title,
  publish,
  worldShare,
  trustShare,
  selfShare
) => async (dispatch) => {
  let response = await fetch("/story/tell", {
    method: "POST",
    body: JSON.stringify({
      userId,
      title,
      publish,
      worldShare,
      trustShare,
      selfShare,
    }),
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
  userId,
  textMeasures,
  photoMeasures,
  audioMeasures,
  chapterMeasures,
  videoMeasures,
  title,
  photo,
  video,
  audio,
  chapter,
  text,
  pageNumber
) => async (dispatch) => {
  let response = await fetch(`/story/${title}/cont`, {
    method: "PUT",
    body: JSON.stringify({
      userId,
      textMeasures,
      photoMeasures,
      audioMeasures,
      chapterMeasures,
      videoMeasures,
      title,
      photo,
      video,
      audio,
      chapter,
      text,
      pageNumber,
    }),
  });

  dispatch(storyPageAC(response.data));

  return response;
};

let GETPAGES = "getsPagesWhenStoryContLoads";

let getPagesAC = (data) => {
  return {
    type: GETPAGES,
    data,
  };
};

export let getPages = (title, userId) => async (dispatch) => {
  let response = await fetch(`/story/${title}/cont/${userId}`);
  dispatch(getPagesAC(response.data));

  return response.data;
};

let CREATENEWPAGE = "createsNewPageUpdatesLastPage";

let newPageAC = (data) => {
  return {
    type: CREATENEWPAGE,
    data, // GETS OBJECT pageUpdated, newPage
  };
};

export let newPage = (
  userId,
  textMeasures,
  photoMeasures,
  audioMeasures,
  chapterMeasures,
  videoMeasures,
  title,
  photo,
  video,
  audio,
  chapter,
  text,
  pageNumber
) => async (dispatch) => {
  let response = await fetch("/story/:title/cont/newPage", {
    method: "POST",
    body: JSON.stringify({
      userId,
      textMeasures,
      photoMeasures,
      audioMeasures,
      chapterMeasures,
      videoMeasures,
      title,
      photo,
      video,
      audio,
      chapter,
      text,
      pageNumber,
    }),
  });

  dispatch(newPageAC(response.data));

  return response.data;
};
let storyReducer = (state = [], action) => {
  let newState;
  switch (action.type) {
    case TELLSTORY:
      newState = Object.assign({}, state);
      newState.story = action.data;
      return newState;
    case GETPAGES:
      newState = Object.assign({}, state);
      newState.allPages = action.data;
      return newState;
    case STORYPAGE:
      newState = Object.assign({}, state);
      let index = newState.allPages.findIndex(
        (page) => page.pageNumber === action.data.pageNumber
      );
      newState.allPages[index] = action.data;
      return newState;

    case CREATENEWPAGE:
      newState = Object.assign({}, state);
      let i = newState.allPages.findIndex(
        (page) => page.pageNumber === action.data.pageUpdated.pageNumber
      );
      newState.allPages[i] = action.data.pageUpdated;

      newState.allPages.push(action.data.newPage);
      return newState;

    default:
      return state;
  }
};

export default storyReducer;
