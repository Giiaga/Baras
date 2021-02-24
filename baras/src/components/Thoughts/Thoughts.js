import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllThoughts } from "../../store/thoughts";

import "./Thoughts.css";

function Thoughts({ BarasId }) {
  let [thoughtsAvailable, setThoughtsAvailable] = useState(false);
  let allThoughts = useSelector((state) => state.thoughts.allThoughts);

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllThoughts(BarasId)).then(
      (data) => data && setThoughtsAvailable(true)
    );
  }, [dispatch]);
  console.log(allThoughts);
  return (
    <>
      <div>HFDGHFUGK</div>
      {thoughtsAvailable && <div>t5ytghkdfjvpa hfbk 9yfhk</div>}
    </>
  );
}

export default Thoughts;
