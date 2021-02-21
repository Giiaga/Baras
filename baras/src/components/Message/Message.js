import React, { useEffect, useState } from "react";
import TypeMessage from "./TypeMessage";
import "./Message.css";
import { useDispatch, useSelector } from "react-redux";
import { getSpecificUserMessages } from "../../store/message";

function Messages(props) {
  let userId = useSelector((state) => state.session.user.id);

  const [onChangeSubmitButton, setOnChangeSubmitButton] = useState(false);
  const [messageAvailable, setMessageAvailable] = useState(false);

  const specificUserMessages = useSelector(
    (state) => state.messages.specificUserMessages
  );

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSpecificUserMessages(userId, props.user)).then(
      (data) => data && setMessageAvailable(true)
    );
    setOnChangeSubmitButton(false);
  }, [props.user, onChangeSubmitButton]);

  const messagesArray = (recievedMessages, sentMessages) => {
    let test = [...recievedMessages];
    let test1 = [...sentMessages];
    let recipientMessages = test;
    let senderMessages = test1;
    let array = [];

    for (let i = -senderMessages.length; i < senderMessages.length; i++) {
      for (
        let j = -recipientMessages.length;
        j < recipientMessages.length;
        j++
      ) {
        if (
          Date.parse(senderMessages[0].createdAt) <=
          Date.parse(recipientMessages[0].createdAt)
        ) {
          array.push(senderMessages[0]);
          senderMessages.splice(0, 1);

          break;
        } else {
          array.push(recipientMessages[0]);
          recipientMessages.splice(0, 1);
        }
      }
    }
    if (senderMessages.length > 0) {
      senderMessages.forEach((msg) => array.push(msg));
    } else if (recipientMessages.length > 0) {
      recipientMessages.forEach((msg) => array.push(msg));
    }

    return array;
  };
  return (
    <>
      {/* <AllMessages /> */}

      <div className="wrapEverything">
        <div className="mainMessagesDiv">
          {messageAvailable
            ? messagesArray(
                specificUserMessages.recievedMessage,
                specificUserMessages.sentMessage
              ).map((message) =>
                message.senderId != userId ? (
                  <div key={message.id} className="senderMessageBlock">
                    <img src={message.User.photo} alt={message.User.username} />
                    <div className="senderMessageDiv">
                      <p>{message.text} </p>
                    </div>
                  </div>
                ) : (
                  <div key={message.id} className="userMessageBlock">
                    <p>{message.text}</p>
                  </div>
                )
              )
            : ""}
        </div>
        <div className="typeMessageDiv">
          <TypeMessage
            replacer={props.replace}
            // replacer={setReplacer}
            state={setOnChangeSubmitButton}
            sentToId={props.user}
          />
        </div>
      </div>
    </>
  );
}

export default Messages;
