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

function App() {
  let user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      {/* <Navigation isLoaded={isLoaded} /> */}
      {user && <SlideMenu />}
      {isLoaded && (
        <>
          <Switch>
            <Route exact path="/">
              <EntryPage />
            </Route>
            <Route path="/login">
              <LoginForm />
            </Route>
            <Route path="/test">
              <Showpic />
              {/* <SlideMenu /> */}
            </Route>
            <Route path="/signup">
              <SignupFormPage />
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
