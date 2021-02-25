import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllThoughts } from "../../store/thoughts";
import renderThoughts from "./renderThoughtsModal";

import "./Thoughts.css";
import "./OnlyPhotoThought.css";

function Thoughts({ BarasId }) {
  let [thoughtsAvailable, setThoughtsAvailable] = useState(false);
  let allThoughts = useSelector((state) => state.thoughts.allThoughts);

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllThoughts(BarasId)).then(
      (data) => data && setThoughtsAvailable(true)
    );
  }, [dispatch]);

  return (
    <>
      <div className="thoughtsMainDiv">
        {thoughtsAvailable &&
          renderThoughts(allThoughts).map((thought) => (
            <div className="everyThought">{thought}</div>
          ))}
      </div>
    </>
  );
}

export default Thoughts;
