import React from "react";
import { useState } from "react";
import CreateStory from "./CreateStory";

function Page() {
  let [showPhoto, setShowPhoto] = useState();
  let [showAudio, setShowAudio] = useState();
  let [showVideo, setShowVideo] = useState();
  return (
    <>
      <CreateStory
        grabPhoto={setShowPhoto}
        grabAudio={setShowAudio}
        grabVideo={setShowVideo}
      />
      <div
        className="pageMainDiv"
        style={{
          width: "210mm",
          height: "297mm",
          border: "1px solid",
          margin: "auto",
        }}
      >
        {showPhoto ? (
          <div
            style={{
              minWidth: "0",
              height: "296.5mm",
              resize: "both",
              overflow: "auto",
              overflowY: "hidden",
            }}
          >
            {" "}
            <img
              src={showPhoto}
              alt={showPhoto}
              style={{
                width: "100%",
                height: "100%",
                resize: "both",
                overflow: "auto",
              }}
            />
          </div>
        ) : (
          ""
        )}
        <textarea style={{ maxWidth: "208.5mm" }}></textarea>
      </div>
    </>
  );
}

export default Page;
