import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { allNotifications, removeNotification } from "../../store/notification";
import { addTrust } from "../../store/trust";
import "./Notification.css";

function Notifications({ totalNotif }) {
  let [notificationAvailable, setNotifications] = useState(false);
  let [notificationSuccess, setNotificationSuccess] = useState(false);
  let [notAddedNotification, setNotAddedNotification] = useState(false);

  let notifications = useSelector(
    (state) => state.notifications.allNotifications
  );
  let userId = useSelector((state) => state.session.user.id);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(allNotifications(userId)).then((data) => {
      if (data.length) {
        setNotifications(true);
      } else {
        setNotifications(false);
      }
    });
  }, [dispatch, notificationSuccess, notAddedNotification, totalNotif]);

  function confirmTrust(e, userId, trustedId) {
    e.preventDefault();
    dispatch(addTrust(userId, trustedId)).then(() => {
      setNotificationSuccess(true);
      setNotAddedNotification(false);
    });
  }

  function dontTrust(e, userId, trustedId) {
    e.preventDefault();
    dispatch(removeNotification(userId, trustedId)).then(() => {
      setNotAddedNotification(true);

      setNotificationSuccess(false);
    });
  }

  return (
    <>
      {notificationAvailable ? (
        <div style={{ marginTop: "5%" }}>
          {notifications.map((notif) => (
            <>
              {/* <h1 style={{ width: "200px", margin: "auto", fontSize: "50px" }}>
              Notification
            </h1> */}
              <div key={notif.notification.id} className="notificationMainDiv">
                {notif.notification.type === "trustRequest" ? (
                  <div className="trustRequest">
                    {notificationSuccess && (
                      <div>
                        Trusted <NavLink to="/trust">Trust</NavLink>
                      </div>
                    )}
                    {notAddedNotification && (
                      <div>
                        Not Added <NavLink to="/trust">Trust</NavLink>
                      </div>
                    )}
                    <div className="userImage">
                      <img
                        src={notif.sentUser.photo}
                        alt={notif.sentUser.username}
                      />
                    </div>
                    <div className="trustRequestUsername">
                      <NavLink to={`/${notif.sentUser.username}/Trust`}>
                        {notif.sentUser.username}
                      </NavLink>{" "}
                      <span id="spanning">asked to be Trusted</span>
                    </div>
                    <button
                      id="trustRequestTrustButton"
                      onClick={(e) =>
                        confirmTrust(e, userId, notif.sentUser.id)
                      }
                    >
                      Trust
                    </button>{" "}
                    <button
                      id="dontTrust"
                      onClick={(e) => {
                        dontTrust(
                          e,
                          notif.notification.userId,
                          notif.notification.trustedId
                        );
                      }}
                    >
                      Don't Trust
                    </button>{" "}
                  </div>
                ) : (
                  <div>
                    {notificationSuccess && (
                      <div>
                        Trusted <NavLink to="/trust">Trust</NavLink>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </>
          ))}
        </div>
      ) : (
        <>
          {/* {notificationSuccess && (
            <div>
              {" "}
              Trusted <NavLink to="/trust">Trust</NavLink>
            </div>
          )} */}
          <div style={{ fontSize: "100px", position: "absolute", left: "25%" }}>
            NO NOTIFICATION
          </div>
        </>
      )}
    </>
  );
}

export default Notifications;
