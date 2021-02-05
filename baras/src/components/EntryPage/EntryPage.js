import React from "react";
import "./EntryPage.css";

function EntryPage() {
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
          <button onClick={() => (window.location.href = "/world-baras")}>
            Let it out
          </button>
        </div>
      </div>
    </div>
  );
}

export default EntryPage;
