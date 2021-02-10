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
          width: "80%",
          height: "80%",
          border: "1px solid",
          margin: "auto",
        }}
      >
        <textarea></textarea>
      </div>
    </>
  );
}

export default Page;
