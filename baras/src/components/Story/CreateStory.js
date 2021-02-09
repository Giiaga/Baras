import React from "react";
import { useState } from "react";

import { useSelector, useDispatch, useHistory } from "react-redux";

function CreateStory() {
  let userId = useSelector((state) => state.session.user);

  let dispatch = useDispatch();
  let history = useHistory();

  let [relatesTo, setRelatesTo] = useState();
  let [text, setStoryText] = useState(null);
  let [photo, setPhoto] = useState(null);
  let [audioLink, setAudioLink] = useState(null);
  let [videoLink, setVideoLink] = useState(null);
  let [publish, setPublished] = useState(false);

  let [audioChoosen, setAudioChoosen] = useState(true);
  let [videoChoosen, setVideoChoosen] = useState(true);
  let [photoChoosen, setPhotoChoosen] = useState(true);

  let addPhoto = (data) => {
    let fileread = new FileReader();

    fileread.onload = (e) => {
      setPhoto(e.target.result);
    };

    fileread.readAsDataURL(data);
  };

  return (
    <>
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
      <form onSubmit={}>
        <div>
          <textarea
            value={text}
            placeholder="Write here, if you will"
            onChange={(e) => setStoryText(e.target.value)}
          ></textarea>
        </div>
        <div>
          <input
            id="addPhotoInput"
            type="file"
            hidden={photoChoosen}
            onChange={(e) => addPhoto(e.target.files[0])}
            placeholder="Photo"
          />
          <button
            hidden={photoChoosen}
            type="button"
            onClick={() => {
              document.getElementById("addPhotoInput").value = "";
            }}
          >
            Clear
          </button>
          <button
            hidden={photoChoosen}
            type="button"
            onClick={() => setPhotoChoosen(true)}
          >
            Cancel
          </button>
        </div>
        <div>
          <input
            type="text"
            hidden={audioChoosen}
            value={audioLink}
            onChange={(e) => setAudioLink(e.target.value)}
            placeholder="Put audio link here"
          />
          <button
            hidden={audioChoosen}
            type="button"
            onClick={() => setAudioChoosen(true)}
          >
            Cancel
          </button>
        </div>
        {audioLink && (
          <audio controls src={audioLink}>
            Sorry, your browser does not support audio being used on here
          </audio>
        )}
        <div>
          <input
            type="text"
            hidden={videoChoosen}
            placeholder="Put video link here"
            value={videoLink}
            onChange={(e) => setVideoLink(e.target.value)}
          />
          <button
            hidden={videoChoosen}
            type="button"
            onClick={() => setVideoChoosen(true)}
          >
            Cancel
          </button>
        </div>
        {videoLink && (
          <video controls width="300px" height="300px">
            <source src={videoLink} />
            Sorry, your browser does not support video being used on here
          </video>
        )}
        <label>
          Publish{" "}
          <input
            type="checkbox"
            placeholder=""
            value={publish}
            onClick={(e) =>
              publish ? setPublished(false) : setPublished(true)
            }
          />
        </label>
      </form>
    </>
  );
}

export default CreateStory;
