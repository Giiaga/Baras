import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getUser } from "../../store/user";

function UserProfile() {
  let dispatch = useDispatch();
  let [userAvailable, setUserAvailable] = useState(false);
  let history = useHistory();

  let loggedInUser = useSelector((state) => state.session.user);
  let user = useSelector((state) => state.user.user);

  useEffect(
    () =>
      dispatch(getUser(loggedInUser.username)).then(() =>
        setUserAvailable(true)
      ),
    []
  );

  return (
    <div>
      <h1>YESSDHH</h1>
      {userAvailable ? (
        <div
          className="userPhoto"
          style={{ width: "100px", height: "100px", borderRadius: "30px" }}
        >
          <img src={user.photo} alt={user.username} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default UserProfile;
