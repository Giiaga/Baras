import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import sessionReducer from "./session";
import showpicReducer from "./quickroue";
import createBarasReducer from "./createBaras";
import userReducer from "./user";
import storyReducer from "./story";
import trustReducer from "./trust";
import notificationReducer from "./notification";
import messageReducer from "./message";
import worldBarasReducer from "./worldBaras";
import thoughtsReducer from "./thoughts";
import TrustBaras from "./trustBaras";
import search from "./search";

const rootReducer = combineReducers({
  session: sessionReducer,
  showpic: showpicReducer,
  createBaras: createBarasReducer,
  user: userReducer,
  story: storyReducer,
  trust: trustReducer,
  notifications: notificationReducer,
  message: messageReducer,
  worldBaras: worldBarasReducer,
  thoughts: thoughtsReducer,
  TrustBaras: TrustBaras,
  search: search,
});

let enhancer;

if (process.env.NODE_ENV === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require("redux-logger").default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
