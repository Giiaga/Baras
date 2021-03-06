import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { Redirect, useParams } from "react-router-dom";

import { getTrust, sendMessage } from "../../store/message";
import "./SendMessage.css";

function SendMessage(props) {
  let userId = useSelector((state) => state.session.user.id);
  const dispatch = useDispatch();
  let [textValue, setTextValue] = useState();
  let [selectValue, setSelectValue] = useState();
  let [state, setState] = useState(false);
  let [textValuess, setTextValuess] = useState(false);

  let allData = useSelector((state) => state.message.allTrust);
  useEffect(() => {
    dispatch(getTrust(userId)).then(() => setState(true));
  }, [dispatch]);
  const sendText = (e, userId, selectValue, textValue) => {
    e.preventDefault();
    dispatch(sendMessage(userId, selectValue, textValue));
    setSelectValue("");
    setTextValue("");
    setTextValuess(true);
    props.replacer(true);
    props.setModelState(false);
  };
  return (
    <div className="sendMessageForm">
      {state ? (
        <form onSubmit={(e) => sendText(e, userId, selectValue, textValue)}>
          <select
            onChange={(e) => setSelectValue(e.target.value)}
            placeholder="Send To..."
          >
            <option>Send To...</option>
            {allData.map((each) => (
              <option value={each.Trusted.id} key={each.Trusted.username}>
                {each.Trusted.username}
              </option>
            ))}
          </select>
          <textarea
            value={textValue}
            placeholder="Write here.."
            onChange={(e) => setTextValue(e.target.value)}
          />
          <button>Send</button>
        </form>
      ) : (
        ""
      )}
    </div>
  );
}

export default SendMessage;
