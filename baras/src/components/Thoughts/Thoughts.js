import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllThoughts, sayThought } from "../../store/thoughts";
import renderThoughts from "./renderThoughtsModal";

import "./Thoughts.css";
import "./OnlyPhotoThought.css";

function Thoughts({ BarasId }) {
  let [thoughtsAvailable, setThoughtsAvailable] = useState(false);
  let [thoughtTextArea, setThoughtTextArea] = useState("");

  let allThoughts = useSelector((state) => state.thoughts.allThoughts);

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllThoughts(BarasId)).then(
      (data) => data && setThoughtsAvailable(true)
    );
  }, [dispatch]);

  function shareThought() {
    e.preventDefault();
    dispatch(sayThought());
  }

  return (
    <>
      <div className="thoughtsMainDiv">
        {thoughtsAvailable &&
          renderThoughts(allThoughts).map((thought) => (
            <div className="everyThought">{thought}</div>
          ))}
      </div>
      <div className="thoughtsTextarea">
        <textarea
          placeholder="What do you think?"
          value={thoughtTextArea}
          onChange={() => setThoughtTextArea(e.target.value)}
        ></textarea>
        <button>Say</button>
      </div>
    </>
  );
}

export default Thoughts;
