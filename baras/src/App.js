import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
// import Navigation from "./components/Navigation";

import * as sessionActions from "./store/session";
import EntryPage from "./components/EntryPage/EntryPage";
import SlideMenu from "./components/SlideMenu/SlideMenu";
import LoginForm from "./components/LoginFormModal/LoginForm";
// import Showpic from "./quicktets";
import Notification from "./components/Notification/Notification";
import UserProfile from "./components/UserProfile/UserProfile";
import Page from "./components/Story/Page";
import StoryTell from "./components/Story/StoryTell";
import CreateBaras from "./components/CreateBaras/CreateBaras";
import AllTrust from "./components/Trust/Trust";
import MessagesPage from "./components/Message/MessagePage";
import { allNotifications } from "./store/notification";
import WorldBaras from "./components/WorldBaras/WorldBaras";

function App() {
  let user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const [totalNotif, setTotalNotif] = useState(0);

  useEffect(() => {
    if (user) {
      setIsLoaded(true);
      dispatch(allNotifications(user.id)).then(
        (data) => data && setTotalNotif(data.length)
      );
      return;
    }
    dispatch(sessionActions.restoreUser()).then(
      (data) => data.user && setIsLoaded(true)
    );
  }, [dispatch, user]);

  return (
    <>
      {/* <Navigation isLoaded={isLoaded} /> */}
      {user && (
        <SlideMenu totalNotif={totalNotif} setTotalNotif={setTotalNotif} />
      )}
      <Switch>
        <Route exact path="/">
          <EntryPage />
        </Route>
        <Route exact path="/login">
          <LoginForm />
        </Route>
        <Route exact path="/signup">
          <SignupFormPage />
        </Route>
        {!isLoaded && (
          <Route path="*">
            <EntryPage />
          </Route>
        )}
      </Switch>
      {isLoaded && (
        <>
          <Switch>
            <Route exact path="/world/Baras">
              <WorldBaras />
            </Route>
            <Route exact path="/trust">
              <AllTrust />
            </Route>
            <Route exact path="/notification">
              <Notification
                totalNotif={totalNotif}
                setTotalNotif={setTotalNotif}
              />
            </Route>
            <Route exact path="/message">
              <MessagesPage />
            </Route>
            <Route exact path="/feelGood">
              <EntryPage />
            </Route>
            <Route exact path="/page">
              <Page />
            </Route>
            <Route exact path="/letBarasOut">
              <CreateBaras />
            </Route>
            <Route exact path="/story/tell">
              <StoryTell />
            </Route>
            <Route exact path="/story/:title/cont">
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
