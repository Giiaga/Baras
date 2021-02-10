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
        <textarea style={{ maxWidth: "208.5mm" }}></textarea>
      </div>
    </>
  );
}

export default Page;
