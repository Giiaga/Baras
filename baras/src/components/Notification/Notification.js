import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { allNotifications, removeNotification } from "../../store/notification";
import trustReducer, { addTrust } from "../../store/trust";

function Notifications() {
  let [notificationAvailable, setNotifications] = useState(false);
  let [notificationSuccess, setNotificationSuccess] = useState(false);

  let notifications = useSelector(
    (state) => state.notifications.allNotifications
  );
  let userId = useSelector((state) => state.session.user.id);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(allNotifications(userId)).then(
      (data) => data.length && setNotifications(true)
    );
  }, [dispatch]);

  useEffect(() => {
    dispatch(allNotifications(userId)).then((data) => {
      if (!data.length) {
        setNotifications(false);
      }
    });
  }, [confirmTrust, dontTrust]);

  function confirmTrust(e, userId, trustedId) {
    e.preventDefault();
    dispatch(addTrust(userId, trustedId)).then(() =>
      setNotificationSuccess(true)
    );
  }

  function dontTrust(e, userId, trustedId) {
    e.preventDefault();
    dispatch(removeNotification(userId, trustedId));
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
          <div>NO NOTIFS</div>
        </>
      )}
    </>
  );
}

export default Notifications;
