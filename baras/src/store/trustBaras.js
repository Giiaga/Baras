import { fetch } from "./csrf";

let ALLTRUSTBARAS = "getAllTrustBaras";

let getTrustBarasAC = (data) => {
  return {
    type: ALLTRUSTBARAS,
    data,
  };
};

export let getTrustBaras = (userId) => async (dispatch) => {
  let response = await fetch(`/allTrustBaras/${userId}`);

  dispatch(getTrustBarasAC(response.data));

  return response.data;
};

let TrustBaras = (state = [], action) => {
  let newState;
  switch (action.type) {
    case ALLTRUSTBARAS:
      newState = Object.assign({}, state);
      newState.allTrustBaras = action.data;
      return newState;

    default:
      return state;
  }
};

export default TrustBaras;
