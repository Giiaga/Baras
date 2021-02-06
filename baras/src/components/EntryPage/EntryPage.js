import React from "react";
import { useSelector } from "react-redux";
import "./EntryPage.css";

function EntryPage() {
  let user = useSelector((state) => state.session.user);
  //  let fileread = new FileReader();
  //  if (photo) {
  //    fileread.onload = (e) =>
  //      document.getElementById("pho").setAttribute("src", e.target.result);
  //    fileread.readAsDataURL(photo);
  //    console.log("after", photo);
  //  }
  return (
    <div className="entryPageMain">
      {/* <img id='pho' alt='fd' /> */}
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
