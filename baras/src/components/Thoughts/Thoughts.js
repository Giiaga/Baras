import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllThoughts, sayThought } from "../../store/thoughts";
import renderThoughts from "./renderThoughtsModal";

import "./Thoughts.css";
import "./OnlyPhotoThought.css";

function Thoughts({ BarasId, thoughtfrom }) {
  let [thoughtsAvailable, setThoughtsAvailable] = useState(false);
  let [thoughtTextArea, setThoughtTextArea] = useState("");
  let [thoughtAddedToDataBase, setThoughtAdded] = useState(false);

  let allThoughts = useSelector((state) => state.thoughts.allThoughts);
  let userId = useSelector((state) => state.session.user.id);

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllThoughts(BarasId)).then(
      (data) => data && setThoughtsAvailable(true)
    );
  }, [dispatch, thoughtAddedToDataBase, thoughtfrom]);

  function shareThought(e, thoughtTextArea, userId, BarasId) {
    e.preventDefault();
    dispatch(sayThought(thoughtTextArea, userId, BarasId)).then((data) => {
      if (data)
        thoughtAddedToDataBase ? setThoughtAdded(false) : setThoughtAdded(true);
    });
    setThoughtTextArea("");
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
          onChange={(e) => setThoughtTextArea(e.target.value)}
        ></textarea>
        <button
          onClick={(e) => shareThought(e, thoughtTextArea, userId, BarasId)}
        >
          Say
        </button>
      </div>
    </>
  );
}

export default Thoughts;
