import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router-dom";

import { submitTheForm } from "../../store/message";
import "./Message.css";

function TypeMessage(props) {
  let userId = useSelector((state) => state.session.user.id);
  const [typed, setTyped] = useState(true);
  const [formValue, setFormValue] = useState();
  let dispatch = useDispatch();

  const submittingtheForm = (e) => {
    e.preventDefault();
    dispatch(submitTheForm(formValue, userId, props.sentToId));
    setFormValue("");
    props.state(true);
    props.replacer(true);
  };
  return (
    <div className="messageContainer">
      <form onSubmit={submittingtheForm}>
        <textarea
          value={formValue}
          placeholder="Message"
          onClick={() => setTyped(false)}
          onChange={(e) => setFormValue(e.target.value)}
        />
        <button hidden={typed}>Send</button>
      </form>
    </div>
  );
}

export default TypeMessage;
