import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { letBarasOut } from "../../store/createBaras";

function CreateBaras() {
  let userId = useSelector((state) => state.session.user);
  console.log(userId);
  let dispatch = useDispatch();

  let [relatesTo, setRelatesTo] = useState();
  let [mainText, setMainText] = useState(null);
  let [photo, setPhoto] = useState(null);
  let [audioLink, setAudioLink] = useState(null);
  let [videoLink, setVideoLink] = useState(null);
  let [privateBaras, setPrivate] = useState(false);
  let [trusted, setTrusted] = useState(true);

  let [audioChoosen, setAudioChoosen] = useState(true);
  let [videoChoosen, setVideoChoosen] = useState(true);
  let [photoChoosen, setPhotoChoosen] = useState(true);
  let submitCreateBaras = () => {
    dispatch(
      letBarasOut(
        relatesTo,
        mainText,
        photo,
        audioLink,
        videoLink,
        userId.id,
        privateBaras,
        trusted
      )
    );
  };

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
      <form
        onSubmit={submitCreateBaras}
        action="/world-baras"
        method="POST"
        style={{ display: "flex", flexDirection: "column", width: "20%" }}
      >
        <input
          type="text"
          required
          value={relatesTo}
          onChange={(e) => setRelatesTo(e.target.value)}
          placeholder="Relates to"
        />
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
        <label>
          Private{" "}
          <input
            type="checkbox"
            placeholder="Private"
            value={privateBaras}
            onClick={(e) =>
              privateBaras ? setPrivate(false) : setPrivate(true)
            }
          />
        </label>
        <label>
          Trust{" "}
          <input
            type="checkbox"
            checked={trusted}
            placeholder="Trust"
            value={trusted}
            onClick={(e) => {
              trusted ? setTrusted(false) : setTrusted(true);
            }}
          />
        </label>
        <button>Let it out</button>
      </form>
    </>
  );
}

export default CreateBaras;
