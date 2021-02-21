import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allNotifications } from "../../store/notification";

function Notifications() {
  let [notificationAvailable, setNotifications] = useState(false);

  let notifications = useSelector(
    (state) => state.notifications.allNotifications
  );
  let userId = useSelector((state) => state.session.user.id);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(allNotifications(userId)).then(
      (data) => data && setNotifications(true)
    );
  }, []);
  return (
    <>
      {notificationAvailable ? (
        notifications.map((notification) => (
          <div>
            {notification.type === "trustRequest" ? (
              <div>
                <div>{notification.notification}</div>
                <div>{notification.trustedId}</div>
                <button>Trust</button> <button>Don't Trust</button>{" "}
              </div>
            ) : (
              ""
            )}
          </div>
        ))
      ) : (
        <div>NO NOTIFS</div>
      )}
    </>
  );
}

export default Notifications;
