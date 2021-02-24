import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWorldBaras } from "../../store/worldBaras";
import renderWorldBaras from "./renderWorldBarasFunction";

import "./WorldBaras.css";
import "./OnlyPhoto.css";
import "./OnlyVideo.css";
import "./OnlyMusic.css";
import "./OnlyText.css";

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
      <div className="worldBarasMainDiv">
        {worldBarasAvailable &&
          renderWorldBaras(worldBaras).map((eachBaras) => (
            <div key={eachBaras.id} className="eachWorldBarasMainDiv">
              {eachBaras}
            </div>
          ))}
      </div>
    </>
  );
}

export default WorldBaras;
