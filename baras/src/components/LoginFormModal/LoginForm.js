import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { Modal } from "../../Modals/Modal";
import "./LoginForm.css";

function LoginForm() {
  let user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [login, setLogin] = useState(true);
  const [demo, setDemo] = useState(false);

  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .then(() => history.push("/trust-baras"))
      .catch((res) => {
        if (res.data && res.data.errors) setErrors(res.data.errors);
      });
  };

  if (demo) {
    handleSubmit(demo);
    setDemo(false);
  }
  return (
    <>
      {!user ? (
        <>
          <Modal login={login}>
            <form onSubmit={handleSubmit} className="loginForm">
              <ul>
                {errors.map((error, idx) => (
                  <li key={idx}>{error}</li>
                ))}
              </ul>
              <label className="loginLabels">Username or Email</label>
              <input
                className="inputs"
                type="text"
                value={credential}
                onChange={(e) => setCredential(e.target.value)}
                required
              />
              <label className="loginLabels">Password</label>
              <input
                className="inputs"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="submit"
                onClick={() => setLogin(false)}
                className="buttonLogin"
              >
                Log In
              </button>
            </form>
            <h1 className="barasLogin">B</h1>
            <div className="quoteDiv">
              <p>It's Okay to be You.</p>
            </div>
            <div
              style={{
                position: "absolute",
                left: "180%",
                top: "50%",
                width: "200px",
              }}
            >
              <p
                style={{
                  fontSize: "40px",
                  width: "340px",
                  fontStyle: "italic",
                }}
              >
                It's Okay to feel sad. Cherish it.
              </p>
            </div>
            <div
              style={{
                position: "absolute",
                left: "320%",
                top: "-40%",
                width: "200px",
                transform: "rotate(-40deg)",
              }}
            >
              <p
                style={{
                  fontSize: "40px",
                  width: "340px",
                  fontStyle: "italic",
                }}
              >
                It's Okay to feel happy. Cherish it.
              </p>
            </div>
            <div
              style={{
                position: "absolute",
                left: "270%",
                top: "0%",
                width: "200px",
                transform: "rotate(-10deg)",
              }}
            >
              <p
                style={{
                  fontSize: "40px",
                  width: "340px",
                  fontStyle: "italic",
                }}
              >
                Let it out
              </p>
            </div>
            <div
              style={{
                position: "absolute",
                left: "170%",
                top: "0%",
                width: "200px",
                transform: "rotate(10deg)",
              }}
            >
              <p
                style={{
                  fontSize: "40px",
                  width: "340px",
                  fontStyle: "italic",
                }}
              >
                Don't supress happiness
              </p>
            </div>
            <div
              style={{
                position: "absolute",
                left: "70%",
                top: "-4%",
                width: "200px",
                transform: "rotate(-10deg)",
              }}
            >
              <p
                style={{
                  fontSize: "40px",
                  width: "340px",
                  fontStyle: "italic",
                }}
              >
                You are Life
              </p>
            </div>
            <span
              id="tets"
              type="button"
              style={{
                position: "absolute",
                left: "44%",
                top: "88%",
                border: "none",
                borderRadius: "1px",
                marginBottom: "0",
                paddingBottom: "0",
                textDecoration: "underline",
                color: "#551a8b",
                fontSize: "15px",
              }}
              onClick={(e) => {
                setCredential("giiaga");
                setPassword("password");
                setDemo(e);
              }}
            >
              Demo
            </span>
            <NavLink
              className="signupLogin"
              to="/signup"
              onClick={() => history.push("signup")}
            >
              Signup
            </NavLink>
          </Modal>
        </>
      ) : (
        history.push("/trust-baras")
      )}
    </>
  );
}

export default LoginForm;
