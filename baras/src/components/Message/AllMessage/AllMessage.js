import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllMessages } from "../../../store/Messages";
import { Modal } from "../../../context/Modal";
import "./AllMessage.css";
import SendMessage from "../SendMessage";

function AllMessages(props) {
  let [showModal, setShowModel] = useState(false);

  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllMessages(props.state.userId));
  }, [dispatch]);

  let messages = useSelector((state) => state.messages.allMessages);

  useEffect(() => {
    dispatch(getAllMessages(props.state.userId));
    props.state.setReplacer(false);
  }, [props.state.replacer]);

  function conversations(sent, recieved) {
    let holder = [];

    if (sent.length && recieved.length) {
      //RECIEVERS
      let recievers = [];
      for (let i = 0; i < sent.length; i++) {
        recievers.push(sent[i].recieverId);
      }

      //in the recievers user will never the recipient
      //in the senders user will never be the sender
      //SENDERS
      let senders = [];
      for (let j = 0; j < recieved.length; j++) {
        senders.push(recieved[j].senderId);
      }

      //MATCHED OR NOT MEANING EITHER THEY SENT AND RECIEVED OR JUST SENT OR RECIEVED
      let matched = [];
      let unmatched = [];
      for (let m = 0; m < recievers.length; m++) {
        if (
          senders.indexOf(recievers[m]) >= 0 &&
          matched.indexOf(recievers[m]) < 0
        ) {
          matched.push(recievers[m]);
        } else {
          if (
            unmatched.indexOf(recievers[m]) < 0 &&
            matched.indexOf(recievers[m]) < 0
          ) {
            unmatched.push(recievers[m]);
          }
        }
      }

      for (let i = 0; i < senders.length; i++) {
        if (
          matched.indexOf(senders[i]) < 0 &&
          unmatched.indexOf(senders[i]) < 0
        ) {
          unmatched.push(senders[i]);
        }
      }

      let Random = [...sent, ...recieved];
      let placeholder;

      for (let j = 0; j < Random.length; j++) {
        for (let i = 0; i < Random.length; i++) {
          if (Random[j].createdAt > Random[i].createdAt) {
            placeholder = Random[j];
            Random[j] = Random[i];
            Random[i] = placeholder;
          }
        }
      }

      for (let i = 0; i < matched.length; i++) {
        if (holder.length == matched.length) break;
        for (let j = 0; j < Random.length; j++) {
          if (
            Random[j].senderId == matched[i] ||
            Random[j].recieverId == matched[i]
          ) {
            holder.push(Random[j]);
            break;
          }
        }
      }
      for (let j = 0; j < unmatched.length; j++) {
        if (holder.length == unmatched.length + matched.length) break;
        for (let i = 0; i < Random.length; i++) {
          if (
            Random[i].senderId == unmatched[j] ||
            Random[i].recieverId == unmatched[j]
          ) {
            holder.push(Random[i]);
            break;
          }
        }
      }
    }
    let secondly = [];
    for (let j = 0; j < holder.length; j++) {
      for (let i = 0; i < holder.length; i++) {
        if (holder[j].createdAt > holder[i].createdAt) {
          secondly = holder[j];
          holder[j] = holder[i];
          holder[i] = secondly;
        }
      }
    }

    let allDivs = [];
    holder.forEach((each) => {
      if (each.senderId == props.state.userId) {
        allDivs.push(
          <div
            key={each.createdAt}
            className="listOfMessagesDiv"
            onClick={() => {
              props.state.setMessageOpen(true);
              props.state.setUserClicked(each.User.id);
            }}
          >
            <img src={each.User.photo} alt={each.User.username} />
            <div className="messageDetail">
              <p style={{ fontSize: "14px" }}>{each.User.username}</p>
              <p
                style={{
                  fontSize: "13px",
                  color: "rgba(10,10,10,0.3)",
                  fontWeight: "light",
                  paddingTop: "2px",
                }}
              >
                {each.text.slice(0, 20)}
              </p>
            </div>
          </div>
        );
      } else {
        allDivs.push(
          <div
            key={each.createdAt}
            className="listOfMessagesDiv"
            onClick={() => {
              console.log(each.User.id);

              props.state.setMessageOpen(true);
              props.state.setUserClicked(each.senderId);
            }}
          >
            <img src={each.User.photo} alt={each.User.photo} />
            <div className="messageDetail">
              <p style={{ fontSize: "14px" }}>{each.User.username}</p>
              <p
                style={{
                  fontSize: "13px",
                  color: "rgba(10,10,10,0.3)",
                  fontWeight: "light",
                  paddingTop: "2px",
                }}
              >
                {each.text.slice(0, 20)}
              </p>
            </div>
          </div>
        );
      }
    });
    return allDivs;
  }
  return (
    <>
      {messages ? (
        <div className="allMessagesContainer">
          <div className="inboxDisplayDiv">
            <h2>Inbox</h2>
            <div onClick={() => setShowModel(true)}>Create</div>
            {showModal ? (
              <Modal>
                <SendMessage
                  replacer={props.state.setReplacer}
                  setModelState={setShowModel}
                />
              </Modal>
            ) : (
              ""
            )}
          </div>
          {messages
            ? conversations(messages.sentMessage, messages.recievedMessage).map(
                (d, i) => d
              )
            : console.log("yusd")}
        </div>
      ) : (
        ""
      )}
    </>
  );
}
export default AllMessages;
