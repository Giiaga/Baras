import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getUser, allBaras } from "../../store/user";
import "./UserProfile.css";

function UserProfile() {
  let dispatch = useDispatch();
  let [userAvailable, setUserAvailable] = useState(false);

  let history = useHistory();

  let loggedInUser = useSelector((state) => state.session.user);
  let user = useSelector((state) => state.user.user);
  let userBaras = useSelector((state) => state.user.allBaras);
  console.log(userBaras);
  useEffect(() => {
    dispatch(getUser(loggedInUser.username)).then(() => setUserAvailable(true));
    dispatch(allBaras(loggedInUser.id));
  }, []);

  return (
    <>
      {userAvailable ? (
        <div className="profilePageMain">
          <div className="userDetailDiv">
            <div className="userPhotoDiv">
              <img src={user.photo} alt={user.username} className="userPhoto" />
            </div>
            <div className="userNameDiv">
              <h1>{user.username}</h1>
            </div>
            <div className="userNameDiv">
              <p style={{ fontStyle: "italic" }}>'{user.quote}'</p>
            </div>
            <div className="userNameDiv">
              <p>{user.description}</p>
            </div>
          </div>
          {userBaras ? (
            <div className="allBarasDiv">
              {userBaras[userBaras.length - 1].relatesTo}
            </div>
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
