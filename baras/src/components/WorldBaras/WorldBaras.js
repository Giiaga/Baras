import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWorldBaras } from "../../store/worldBaras";

import "./WorldBaras.css";

function WorldBaras() {
  let worldBaras = useSelector((state) => state.worldBaras.worldBaras);

  let [worldBarasAvailable, setWorldBarasAvailable] = useState(false);

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWorldBaras()).then(
      (data) => data && setWorldBarasAvailable(true)
    );
  }, [dispatch]);
  return (
    <>
      <div className="headingDivWorldBaras">
        <h1>World Baras</h1>
      </div>
      {worldBarasAvailable && <div></div>}
    </>
  );
}

export default WorldBaras;
