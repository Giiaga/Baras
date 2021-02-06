import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";

function LoginForm() {
  let user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  let history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return (
      dispatch(sessionActions.login({ credential, password }))
        .then(() => history.push("/trust-baras"))
        // .then(() => (window.location.href = "/trust-baras"))
        .catch((res) => {
          if (res.data && res.data.errors) setErrors(res.data.errors);
        })
    );
  };

  return (
    <>
      {!user ? (
        <>
          <form onSubmit={handleSubmit}>
            <ul>
              {errors.map((error, idx) => (
                <li key={idx}>{error}</li>
              ))}
            </ul>
            <label>
              Username or Email
              <input
                type="text"
                value={credential}
                onChange={(e) => setCredential(e.target.value)}
                required
              />
            </label>
            <label>
              Password
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
            <button type="submit">Log In</button>
          </form>
          <NavLink
            to="/signup"
            onClick={() => (window.location.href = "signup")}
          >
            Signup
          </NavLink>
        </>
      ) : (
        history.push("/trust-baras")
      )}
    </>
  );
}

export default LoginForm;
