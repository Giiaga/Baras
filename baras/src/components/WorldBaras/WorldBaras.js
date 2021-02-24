import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWorldBaras } from "../../store/worldBaras";
import renderWorldBaras from "./renderWorldBarasFunction";

import "./WorldBaras.css";

function WorldBaras() {
  let worldBaras = useSelector((state) => state.worldBaras.worldBaras);

  let [worldBarasAvailable, setWorldBarasAvailable] = useState(false);

  let dispatch = useDispatch();
  console.log(worldBaras);
  useEffect(() => {
    dispatch(getWorldBaras()).then(
      (data) => data.length && setWorldBarasAvailable(true)
    );
  }, [dispatch]);
  return (
    <>
      <div className="headingDivWorldBaras">
        <h1>World Baras</h1>
      </div>
      {worldBarasAvailable &&
        renderWorldBaras(worldBaras).map((eachBaras) => (
          <div key={eachBaras.id}>{eachBaras}</div>
        ))}
    </>
  );
}

export default WorldBaras;
