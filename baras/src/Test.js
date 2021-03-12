import React, { useState } from "react";
import "./Test.scss";

function Test() {
  let [changeVal, setChange] = useState(-30);
  let [changesVal, setsChange] = useState(20);
  let min = -50,
    max = 50;
  let a = -30,
    b = 20;
  document.addEventListener(
    "input",
    (e) => {
      let _t = e.target;
      _t.parentNode.style.setProperty(`--${_t.id}`, +_t.value);
    },
    false
  );

  return (
    <>
      <div
        className="wrap"
        role="group"
        aria-labelledby="multi-lbl"
        style={{ "--a": "-30", "--b": "20", "--min": "-50", "--max": "50" }}
      >
        {/* <div className="testko">gf</div> */}
        <div id="multi-lbl">Multi thumb slider:</div>
        <label className="sr-only" for="a">
          Value A:
        </label>
        <input
          id="a"
          type="range"
          min="-50"
          // value="30"
          max="50"
          value={changeVal}
          onChange={(e) => setChange(e.target.value)}
        />
        <output for="a" style={{ "--c": "var(--a)" }}></output>

        <label className="sr-only" for="b">
          Value B:
        </label>
        <input
          id="b"
          type="range"
          min="-50"
          // value="20"
          max="50"
          value={changesVal}
          onChange={(e) => setsChange(e.target.value)}
        />
        <output for="b" style={{ "--c": "var(--b)" }}></output>
      </div>
      <p>{changeVal}</p>
      <p>{changesVal}</p>
    </>
  );
}

export default Test;
