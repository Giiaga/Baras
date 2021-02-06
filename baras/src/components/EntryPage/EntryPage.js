import React from "react";
import { useSelector } from "react-redux";
import "./EntryPage.css";

function EntryPage() {
  let user = useSelector((state) => state.session.user);
  return (
    <div className="entryPageMain">
      <div className="entryPageContent">
        <h1>BARAS</h1>
        <div className="entryPageQuote">
          <p style={{ fontStyle: "italic" }}>Let it out</p>
          <p style={{ fontStyle: "italic" }}>Let it go</p>
          <p>If you will.</p>
        </div>
        <div className="buttonDiv">
          <button
            onClick={() =>
              user
                ? (window.location.href = "/world-baras")
                : (window.location.href = "/login")
            }
          >
            Let it out
          </button>
        </div>
      </div>
    </div>
  );
}

export default EntryPage;
