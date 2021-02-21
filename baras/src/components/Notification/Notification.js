import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allNotifications } from "../../store/notification";

function Notifications() {
  let notifications = useSelector(
    (state) => state.notifications.allNotifications
  );
  let userId = useSelector((state) => state.session.user.id);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(allNotifications(userId));
  }, []);
  return (
    <>
      <div>HGIUSHDGJSDHGDFKG</div>
    </>
  );
}

export default Notifications;
