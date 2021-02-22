import React from "react";
import { useState } from "react";
// import { useParams } from "react-router-dom";

import AllMessages from "./AllMessage/AllMessage";
import Message from "../Message/Message";
import "./Message.css";
import { useSelector } from "react-redux";
// import { useSelector } from "react-redux";

function MessagesPage() {
  const [messageOpen, setMessageOpen] = useState(false);
  const [userClicked, setUserClicked] = useState();
  let [replacer, setReplacer] = useState(false);
  let userId = useSelector((state) => state.session.user.id);
  //   const { userId } = useParams();
  // console.log(userClicked, "USERERRE");
  return (
    <>
      <AllMessages
        state={{
          setReplacer,
          replacer,
          messageOpen,
          setMessageOpen,
          userId,
          setUserClicked,
        }}
      />
      {messageOpen ? (
        <Message replace={setReplacer} user={userClicked} />
      ) : (
        <div
          className="messagesPage"
          style={{
            border: "1px solid rgba(0, 0, 0, 0.11)",

            marginLeft: "35.8%",
            borderRadius: "10px",
            borderBottomLeftRadius: "0",
            borderBottomRightRadius: "0",
            height: "548.7px",
            borderBottom: "none",
            position: "absolute",
            top: "4.4%",
            left: "-2%",
          }}
        ></div>
      )}
    </>
  );
}

export default MessagesPage;
