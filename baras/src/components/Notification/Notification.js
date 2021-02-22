import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { allNotifications, removeNotification } from "../../store/notification";
import trustReducer, { addTrust } from "../../store/trust";

function Notifications() {
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
  }, [dispatch, notificationSuccess, notAddedNotification]);

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
        notifications.map((notif) => (
          <div>
            {notif.notification.type === "trustRequest" ? (
              <div>
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
                <div>{notif.notification.notification}</div>
                <div>{notif.sentUser.username}</div>
                <button
                  onClick={(e) => confirmTrust(e, userId, notif.sentUser.id)}
                >
                  Trust
                </button>{" "}
                <button
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
        ))
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
