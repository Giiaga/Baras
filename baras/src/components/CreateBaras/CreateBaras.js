import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { letBarasOut } from "../../store/createBaras";
import { useHistory } from "react-router-dom";

function CreateBaras() {
  let userId = useSelector((state) => state.session.user);
  console.log(userId);
  let dispatch = useDispatch();
  let history = useHistory();

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
  let submitCreateBaras = (e) => {
    e.preventDefault();
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
    history.push("/trust/baras");
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
        {photo && (
          <div>
            <img
              src={photo}
              alt={photo}
              style={{
                width: "300px",
                height: "200px",
                // resize: "both",
                // overflow: "auto",
              }}
            />
          </div>
        )}
        <div>
          <input
            type="text"
            hidden={audioChoosen}
            value={audioLink}
            onChange={(e) => {
              if (e.target.value.length > 61 && e.target.value.length <= 1000) {
                let found = e.target.value.indexOf("http");
                let complete = e.target.value.indexOf("&auto");

                let audioSoundcloudLink = e.target.value.slice(found, complete);
                setAudioLink(audioSoundcloudLink);
              }
              // setShowAudio(e.target.value);
            }}
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
          <iframe
            style={{ width: "300px", height: "100px" }}
            // width="100%"
            // height="166"
            // scrolling="no"
            // frameborder="no"
            // allow="autoplay"
            src={audioLink}
          ></iframe>
        )}
        <div>
          <input
            type="text"
            hidden={videoChoosen}
            placeholder="Put video link here"
            value={videoLink}
            onChange={(e) => {
              if (e.target.value.length) {
                let youtubeFindId = e.target.value.indexOf("v=");
                let youtubePartUrl = e.target.value.split()[0].substring(0, 24);
                let youtubeId = e.target.value.slice(youtubeFindId + 2, 43);

                setVideoLink(youtubePartUrl + "embed/" + youtubeId);
              }

              e.target.placeholder = "Please enter a complete url";
            }}
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
          <iframe style={{ width: "300px", height: "200px" }} src={videoLink}>
            {/* Sorry, your browser does not support video being used on here */}
          </iframe>
        )}
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
