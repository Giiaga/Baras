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
  // const [demo, setDemo] = useState(false);

  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.id === "demo") {
      setErrors([]);
      dispatch(
        sessionActions.login({ credential: "giiaga", password: "password" })
      ).catch((res) => {
        if (res.data && res.data.errors) setErrors(res.data.errors);
      });
      return history.push("/trust/Baras");
    } else {
      setErrors([]);
      return dispatch(sessionActions.login({ credential, password }))
        .then(() => history.push("/trust/Baras"))
        .catch((res) => {
          if (res.data && res.data.errors) setErrors(res.data.errors);
        });
    }
  };

  // if (demo) {
  //   handleSubmit(demo);
  //   setLogin(false);
  //   setDemo(false);
  // }
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
                // onClick={() => setLogin(false)}
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
                zIndex: 0,
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
            <div
              style={{
                position: "absolute",
                left: "120%",
                top: "140%",
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
                Be You!
              </p>
            </div>
            <div
              style={{
                position: "absolute",
                left: "-40%",
                top: "160%",
                width: "200px",
                transform: "rotate(90deg)",
              }}
            >
              <p
                style={{
                  fontSize: "40px",
                  width: "340px",
                  fontStyle: "italic",
                }}
              >
                Life
              </p>
            </div>
            <div
              style={{
                position: "absolute",
                left: "-45%",
                top: "30%",
                width: "200px",
                transform: "rotate(90deg)",
              }}
            >
              <p
                style={{
                  fontSize: "40px",
                  width: "340px",
                  fontStyle: "italic",
                }}
              >
                You
              </p>
            </div>
            <div
              style={{
                position: "absolute",
                left: "0%",
                top: "106%",
                width: "200px",
                transform: "rotate(20deg)",
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
                left: "173%",
                top: "156%",
                width: "200px",
                transform: "rotate(20deg)",
              }}
            >
              <p
                style={{
                  fontSize: "40px",
                  width: "340px",
                  fontStyle: "italic",
                }}
              >
                You desire this
              </p>
            </div>
            <div
              style={{
                position: "absolute",
                left: "173%",
                top: "116%",
                width: "200px",
                transform: "rotate(-12deg)",
              }}
            >
              <p
                style={{
                  fontSize: "40px",
                  width: "340px",
                  fontStyle: "italic",
                }}
              >
                Find Yourself
              </p>
            </div>
            <div
              style={{
                position: "absolute",
                left: "173%",
                top: "196%",
                width: "200px",
                transform: "rotate(-52deg)",
              }}
            >
              <p
                style={{
                  fontSize: "40px",
                  width: "340px",
                  fontStyle: "italic",
                }}
              >
                Feel It
              </p>
            </div>
            <div
              style={{
                position: "absolute",
                left: "93%",
                top: "195%",
                width: "200px",
                transform: "rotate(0deg)",
              }}
            >
              <p
                style={{
                  fontSize: "40px",
                  width: "340px",
                  fontStyle: "italic",
                }}
              >
                Don't fear Yourself
              </p>
            </div>
            <div
              style={{
                position: "absolute",
                left: "293%",
                top: "171%",
                width: "200px",
                transform: "rotate(-120deg)",
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
            <div
              style={{
                position: "absolute",
                left: "106%",
                top: "50%",
                width: "200px",
                transform: "rotate(30deg)",
              }}
            >
              <p
                style={{
                  fontSize: "40px",
                  width: "340px",
                  fontStyle: "italic",
                }}
              >
                Be So Happy That ..
              </p>
            </div>
            <div
              style={{
                position: "absolute",
                left: "280%",
                top: "95%",
                width: "200px",
                transform: "rotate(40deg)",
              }}
            >
              <p
                style={{
                  fontSize: "40px",
                  width: "340px",
                  fontStyle: "italic",
                }}
              >
                Desire
              </p>
            </div>
            <div
              style={{
                position: "absolute",
                left: "411%",
                top: "-25%",
                width: "200px",
                transform: "rotate(40deg)",
              }}
            >
              <p
                style={{
                  fontSize: "40px",
                  width: "340px",
                  fontStyle: "italic",
                }}
              >
                TRULY Desire
              </p>
            </div>
            <div
              style={{
                position: "absolute",
                left: "341%",
                top: "49%",
                width: "200px",
                transform: "rotate(-5deg)",
              }}
            >
              <p
                style={{
                  fontSize: "40px",
                  width: "340px",
                  fontStyle: "italic",
                }}
              >
                TRULY Desire
              </p>
            </div>
            <div
              style={{
                position: "absolute",
                left: "283%",
                top: "58%",
                width: "200px",
                transform: "rotate(7deg)",
              }}
            >
              <p
                style={{
                  fontSize: "40px",
                  width: "340px",
                  fontStyle: "italic",
                }}
              >
                Let Yourself
              </p>
            </div>
            <div
              style={{
                position: "absolute",
                left: "283%",
                top: "200%",
                width: "200px",
                transform: "rotate(7deg)",
              }}
            >
              <p
                style={{
                  fontSize: "40px",
                  width: "340px",
                  fontStyle: "italic",
                }}
              >
                Be You!
              </p>
            </div>
            <div
              style={{
                position: "absolute",
                left: "213%",
                top: "200%",
                width: "200px",
                transform: "rotate(-7deg)",
              }}
            >
              <p
                style={{
                  fontSize: "40px",
                  width: "340px",
                  fontStyle: "italic",
                }}
              >
                Love
              </p>
            </div>
            <div
              style={{
                position: "absolute",
                left: "374%",
                top: "-23%",
                width: "150px",
                transform: "rotate(12deg)",
              }}
            >
              <p
                style={{
                  fontSize: "40px",
                  width: "190px",
                  fontStyle: "italic",
                }}
              >
                You really are Great. See it!
              </p>
            </div>
            <div
              style={{
                position: "absolute",
                left: "345%",
                top: "163%",
                width: "150px",
                transform: "rotate(12deg)",
              }}
            >
              <p
                style={{
                  fontSize: "40px",
                  width: "190px",
                  fontStyle: "italic",
                }}
              >
                Allow Yourself
              </p>
            </div>
            <div
              style={{
                position: "absolute",
                left: "340%",
                top: "80%",
                width: "150px",
                transform: "rotate(-12deg)",
              }}
            >
              <p
                style={{
                  fontSize: "40px",
                  width: "190px",
                  fontStyle: "italic",
                }}
              >
                See Life In You
              </p>
            </div>
            <div
              style={{
                position: "absolute",
                left: "355%",
                top: "113%",
                width: "150px",
                transform: "rotate(-12deg)",
              }}
            >
              <p
                style={{
                  fontSize: "40px",
                  width: "190px",
                  fontStyle: "italic",
                }}
              >
                Be You
              </p>
            </div>
            <div
              style={{
                position: "absolute",
                left: "215%",
                top: "-30%",
                width: "200px",
                transform: "rotate(0deg)",
              }}
            >
              <p
                style={{
                  fontSize: "40px",
                  width: "340px",
                  fontStyle: "italic",
                }}
              >
                Find Yourself
              </p>
            </div>
            <div
              style={{
                position: "absolute",
                left: "125%",
                top: "-30%",
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
                You can do it
              </p>
            </div>
            <div
              style={{
                position: "absolute",
                left: "-25%",
                top: "-30%",
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
                Life is You
              </p>
            </div>
            <div
              style={{
                position: "absolute",
                left: "-25%",
                top: "190%",
                width: "200px",
                transform: "rotate(-35deg)",
              }}
            >
              <p
                style={{
                  fontSize: "40px",
                  width: "340px",
                  fontStyle: "italic",
                }}
              >
                Enjoy Every Moment
              </p>
            </div>
            <div
              style={{
                position: "absolute",
                left: "405%",
                top: "25%",
                width: "200px",
                transform: "rotate(88deg)",
              }}
            >
              <p
                style={{
                  fontSize: "40px",
                  width: "340px",
                  fontStyle: "italic",
                }}
              >
                Be So Happy
              </p>
            </div>
            <div
              style={{
                position: "absolute",
                left: "282%",
                top: "116%",
                width: "200px",
                transform: "rotate(-3deg)",
              }}
            >
              <p
                style={{
                  fontSize: "40px",
                  width: "340px",
                  fontStyle: "italic",
                }}
              >
                If You will
              </p>
            </div>
            <div
              style={{
                position: "absolute",
                left: "250%",
                top: "156%",
                width: "200px",
                transform: "rotate(-1deg)",
              }}
            >
              <p
                style={{
                  fontSize: "40px",
                  width: "340px",
                  fontStyle: "italic",
                }}
              >
                Express
              </p>
            </div>
            <div
              style={{
                position: "absolute",
                left: "233%",
                top: "105%",
                width: "200px",
                transform: "rotate(70deg)",
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
                left: "300%",
                top: "20%",
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
                Be You!
              </p>
            </div>
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: "125%",
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
                Understand Yourself
              </p>
            </div>
            <div
              style={{
                position: "absolute",
                left: "350%",
                top: "20%",
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
                Do it!
              </p>
            </div>
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: "180%",
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
                Do it!
              </p>
            </div>
            <span
              id="demo"
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
                // setDemo(true);
                handleSubmit(e);
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
        history.push("/trust/Baras")
      )}
    </>
  );
}

export default LoginForm;
