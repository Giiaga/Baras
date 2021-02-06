import React, { useState } from "react";

function CreateBaras() {
  let [relatesTo, setRelatesTo] = useState();
  let [mainText, setMainText] = useState();
  let [audioLink, setAudioLink] = useState();
  let [videoLink, setVideoLink] = useState();
  let [audioChoosen, setAudioChoosen] = useState(false);
  let [videoChoosen, setVideoChoosen] = useState(false);
  let submitCreateBaras = () => {};
  return (
    <>
      <button>Write</button>
      <button>Add Photo</button>
      <button onClick={() => setAudioChoosen(true)}>Add Song</button>
      <button onClick={() => setVideoChoosen(true)}>Add Video</button>
      <form onSubmit={submitCreateBaras}>
        <input
          type="text"
          value={relatesTo}
          onChange={(e) => setRelatesTo(e.target.value)}
          placeholder="Relates to"
        />
        <input
          hidden={videoChoosen}
          type="text"
          value={audioLink}
          onChange={(e) => setAudioLink(e.target.value)}
          placeholder="Put audio link here"
        />
        {audioLink && (
          <audio controls src={audioLink}>
            Sorry, your browser does not support audio being used on here
          </audio>
        )}
        <input
          hidden={audioChoosen}
          type="text"
          value={videoLink}
          onChange={(e) => setVideoLink(e.target.value)}
        />
        {videoLink && (
          <video controls width="300px" height="300px">
            <source src={videoLink} />
          </video>
        )}
        <textarea
          value={mainText}
          placeholder="Let it outt, if you will"
          onChange={(e) => setMainText(e.target.value)}
        ></textarea>
      </form>
    </>
  );
}

export default CreateBaras;
