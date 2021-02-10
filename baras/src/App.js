import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
// import Navigation from "./components/Navigation";

import * as sessionActions from "./store/session";
import EntryPage from "./components/EntryPage/EntryPage";
import SlideMenu from "./components/SlideMenu/SlideMenu";
import LoginForm from "./components/LoginFormModal/LoginForm";
import Showpic from "./quicktets";
import UserProfile from "./components/UserProfile/UserProfile";
import Page from "./components/Story/Page";
import StoryTell from "./components/Story/StoryTell";

function App() {
  let user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (user) {
      setIsLoaded(true);
      return;
    }
    dispatch(sessionActions.restoreUser()).then(
      (data) => data.user && setIsLoaded(true)
    );
  }, [dispatch, user]);

  return (
    <>
      {/* <Navigation isLoaded={isLoaded} /> */}
      {user && <SlideMenu />}
      <Route exact path="/">
        <EntryPage />
      </Route>
      <Route path="/login">
        <LoginForm />
      </Route>
      <Route exact path="/signup">
        <SignupFormPage />
      </Route>
      {isLoaded && (
        <>
          <Switch>
            <Route exact path="/page">
              <Page />
            </Route>
            <Route exact path="/test">
              <Showpic />
            </Route>
            <Route exact path="/story/tell">
              <StoryTell />
            </Route>
            <Route exact path="/story/cont">
              <Page />
            </Route>
            <Route exact path="/:username">
              <UserProfile />
            </Route>
            <Route path="*">
              <EntryPage />
            </Route>
          </Switch>
        </>
      )}
    </>
  );
}

export default App;
