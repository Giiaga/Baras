import React, { useState } from "react";

function CreateBaras() {
  let [relatesTo, setRelatesTo] = useState();
  let [mainText, setMainText] = useState();
  let [photo, setPhoto] = useState();
  let [audioLink, setAudioLink] = useState();
  let [videoLink, setVideoLink] = useState();
  let [audioChoosen, setAudioChoosen] = useState(true);
  let [videoChoosen, setVideoChoosen] = useState(true);
  let [photoChoosen, setPhotoChoosen] = useState(true);
  let submitCreateBaras = () => {};

  let addPhoto = (data) => {
    let fileread = new FileReader();

    fileread.onload = (e) => {
      setPhoto(e.target.result);
    };

    fileread.readAsDataURL(data);
  };

  return (
    <>
      <button>Write</button>
      <button
        onClick={() => {
          setPhotoChoosen(false);
          setAudioChoosen(true);
          setVideoChoosen(true);
          setAudioLink("");
          setVideoLink("");
        }}
      >
        Add Photo
      </button>
      <button
        onClick={() => {
          setAudioChoosen(false);
          setPhotoChoosen(true);
          setVideoChoosen(true);
          setPhoto("");
          setVideoLink("");
        }}
      >
        Add Song
      </button>
      <button
        onClick={() => {
          setVideoChoosen(false);
          setPhotoChoosen(true);
          setAudioChoosen(true);
          setPhoto("");
          setAudioLink("");
        }}
      >
        Add Video
      </button>
      <form
        onSubmit={submitCreateBaras}
        style={{ display: "flex", flexDirection: "column", width: "20%" }}
      >
        <input
          type="text"
          required
          value={relatesTo}
          onChange={(e) => setRelatesTo(e.target.value)}
          placeholder="Relates to"
        />
        <input
          type="file"
          hidden={photoChoosen}
          onChange={(e) => addPhoto(e.target.files[0])}
          placeholder="Photo"
        />
        <input
          type="text"
          hidden={audioChoosen}
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
          type="text"
          hidden={videoChoosen}
          placeholder="Put video link here"
          value={videoLink}
          onChange={(e) => setVideoLink(e.target.value)}
        />
        {/* {videoLink && (
          <video controls width="300px" height="300px">
            <source src={videoLink} />
            Sorry, your browser does not support video being used on here
          </video>
        )} */}
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
