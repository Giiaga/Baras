import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getUser, allBaras } from "../../store/user";
import renderUserBaras from "./renderUserBaras";
import "./UserProfile.css";

function UserProfile() {
  let dispatch = useDispatch();
  let [userAvailable, setUserAvailable] = useState(false);
  let [barasAvailable, setAllBaras] = useState(false);

  let history = useHistory();

  let loggedInUser = useSelector((state) => state.session.user);
  let user = useSelector((state) => state.user.user);
  let userBaras = useSelector((state) => state.user.allBaras);
  useEffect(() => {
    if (loggedInUser != undefined) {
      dispatch(getUser(loggedInUser.username))
        .then((data) => data && setUserAvailable(true))
        .then(() => dispatch(allBaras(loggedInUser.id)))
        .then((data) => data.length && setAllBaras(true));
    }
  }, [dispatch]);

  return (
    <>
      {userAvailable ? (
        <div className="profilePageMain">
          <div className="userDetailDiv">
            <div className="userPhotoDiv">
              <img src={user.photo} alt={user.username} className="userPhoto" />
            </div>
            <div className="userNameDiv">
              <h1 style={{ marginTop: "8px" }}>{user.username}</h1>
            </div>
            <div className="userNameDiv">
              <p
                style={{
                  fontStyle: "italic",
                  color: "rgb(210, 147, 68, 0.9)",
                  marginTop: "0",
                  marginBottom: "0",
                }}
              >
                '{user.quote}'
              </p>
            </div>
            <div
              className="userNameDiv"
              style={{ color: "rgb(210, 147, 68, 0.9)", marginTop: "0" }}
            >
              <p>{user.description}</p>
            </div>
          </div>
          {barasAvailable ? (
            renderUserBaras(userBaras).map((each) => (
              <div className="allBarasDiv">{each[1]}</div>
            ))
          ) : (
            <div className="allBarasDiv">No Baras</div>
          )}
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default UserProfile;
